const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const MODULES_DIR = path.join(ROOT, "modules");
const SCHEMA_DIR = path.join(ROOT, "schema");
const OUTPUT_FILE = path.join(ROOT, "schema.prisma");

const header = `
generator client {
  provider = "prisma-client-js"
  output   = "../generated"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
`;

function readPrismaFiles(dir) {
  if (!fs.existsSync(dir)) return "";
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((f) => f.isFile() && f.name.endsWith(".prisma"))
    .map((f) => fs.readFileSync(path.join(dir, f.name), "utf8"))
    .join("\n\n");
}

function readNestedSchema(dir) {
  if (!fs.existsSync(dir)) return "";
  let output = "";
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      output += readNestedSchema(fullPath);
    } else if (entry.name.endsWith(".prisma")) {
      output += fs.readFileSync(fullPath, "utf8") + "\n\n";
    }
  }
  return output;
}

function stripHeaders(content) {
  return content
    .replace(/generator\s+client\s*\{[^}]*\}/g, "")
    .replace(/datasource\s+db\s*\{[^}]*\}/g, "")
    .trim();
}

function deduplicateBlocks(content) {
  const seen = new Set();
  const lines = content.split("\n");
  const result = [];
  let skipBlock = false;
  let braceDepth = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const modelMatch = line.match(/^(model|enum)\s+(\w+)\s*\{/);

    if (modelMatch && !skipBlock) {
      const key = `${modelMatch[1]}:${modelMatch[2]}`;
      if (seen.has(key)) {
        console.warn(`⚠️  Skipping duplicate ${modelMatch[1]}: ${modelMatch[2]}`);
        skipBlock = true;
        braceDepth = 1;
        continue;
      }
      seen.add(key);
    }

    if (skipBlock) {
      for (const char of line) {
        if (char === "{") braceDepth++;
        if (char === "}") braceDepth--;
      }
      if (braceDepth <= 0) {
        skipBlock = false;
        braceDepth = 0;
      }
      continue;
    }

    result.push(line);
  }

  return result.join("\n");
}

// ✅ Scans all relations pointing to a model and collects back-relation names
function collectBackRelations(content, targetModel) {
  const relations = [];
  const seen = new Set();

  // Match: fieldName   TargetModel   @relation("Name", ...) or @relation(fields:...)
  const relationRegex =
    /^\s+(\w+)\s+\w+\s+@relation\((?:"([^"]+)",\s*)?fields:\s*\[([^\]]+)\][^)]*\)/gm;

  // Match model blocks
  const modelBlockRegex = /^model\s+(\w+)\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/gm;

  let modelMatch;
  while ((modelMatch = modelBlockRegex.exec(content)) !== null) {
    const modelName = modelMatch[1];
    if (modelName === targetModel) continue;

    const body = modelMatch[2];
    const lines = body.split("\n");

    for (const line of lines) {
      // e.g. user   User?  @relation(fields: [userId], references: [id])
      // e.g. persona  Persona  @relation("SomeName", fields: [...], references: [...])
      const m = line.match(
        /^\s+(\w+)\s+([\w?]+)\s+@relation\((?:"([^"]+)",\s*)?fields:\s*\[([^\]]+)\]/
      );
      if (!m) continue;

      const fieldName = m[1];
      const fieldType = m[2].replace("?", "");
      const relationName = m[3] || null;

      if (fieldType !== targetModel) continue;

      const isOptional = m[2].endsWith("?");
      const key = relationName || `${modelName}_${fieldName}`;
      if (seen.has(key)) continue;
      seen.has(key);
      seen.add(key);

      relations.push({
        modelName,
        fieldName,
        relationName,
        isArray: true, // back-relation is always array or single — we'll use array
      });
    }
  }

  return relations;
}

// ✅ Inject missing back-relations into a model block
function injectBackRelations(content, targetModel, relations) {
  if (relations.length === 0) return content;

  // Build the injection lines
  const injections = relations.map(({ modelName, fieldName, relationName }) => {
    const backFieldName =
      fieldName +
      modelName.charAt(0).toUpperCase() +
      modelName.slice(1) +
      "Back";
    // Use a safe unique field name
    const safeName =
      modelName.charAt(0).toLowerCase() +
      modelName.slice(1) +
      (relationName ? "_" + relationName.replace(/[^a-zA-Z0-9]/g, "_") : "");

    if (relationName) {
      return `  ${safeName}  ${modelName}[]  @relation("${relationName}")`;
    }
    return `  ${safeName}  ${modelName}[]`;
  });

  // Find the model block and inject before closing brace
  const modelRegex = new RegExp(
    `(model\\s+${targetModel}\\s*\\{)([\\s\\S]*?)(^\\})`,
    "m"
  );

  return content.replace(modelRegex, (match, open, body, close) => {
    // Check which relations are already present
    const missing = injections.filter((line) => {
      const fieldName = line.trim().split(/\s+/)[0];
      const modelType = line.trim().split(/\s+/)[1]?.replace("[]", "").replace("?", "");
      // Skip if field name exists OR if model type already has a relation in this block
      return !body.includes(fieldName) && !body.includes(modelType + "[]") && !body.includes(modelType + "?") && !(body.includes(modelType + " ") && !line.includes("@relation"));
    });

    if (missing.length === 0) return match;

    console.log(
      `✅ Injecting ${missing.length} back-relations into ${targetModel}`
    );
    return `${open}${body}\n  // ── auto-injected back-relations ──\n${missing.join("\n")}\n${close}`;
  });
}

// ✅ Fix the Match.createdBySwipeId unique constraint issue
function fixUniqueConstraints(content) {
  // Add @unique to createdBySwipeId in Match model
  return content.replace(
    /(\s+createdBySwipeId\s+String\?)(\s*\n)/,
    "$1  @unique$2"
  );
}

// ─── Build ───
const modules = stripHeaders(readPrismaFiles(MODULES_DIR));
const schemas = stripHeaders(readNestedSchema(SCHEMA_DIR));

let combined =
  header +
  "\n\n// ================= MODULES =================\n\n" +
  modules +
  "\n\n// ================= SCHEMAS =================\n\n" +
  schemas;

let finalSchema = deduplicateBlocks(combined);

// ✅ Fix unique constraint
finalSchema = fixUniqueConstraints(finalSchema);

// ✅ Auto-inject missing back-relations
const targets = [
  "User",
  "Persona", 
  "Workspace",
  "Message",
  "FeatureFlag",
  "SearchQueryLog",
  "PaymentMethod",
  "MatchScore",
  "BusinessContinuityPlan",
  "ForensicEvent",
  "Listing",
  "SecurityEvent",
  "PersonaBookmark",
  "SearchEvent",
  "WorkspaceMember",
  "IncidentReport",
];
for (const target of targets) {
  const relations = collectBackRelations(finalSchema, target);
  finalSchema = injectBackRelations(finalSchema, target, relations);
}

fs.writeFileSync(OUTPUT_FILE, finalSchema);
console.log("\n✅ schema.prisma built successfully!");