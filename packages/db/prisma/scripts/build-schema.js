const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const MODULES_DIR = path.join(ROOT, "modules");
const SCHEMA_DIR = path.join(ROOT, "schema");
const OUTPUT_FILE = path.join(ROOT, "schema.prisma");

// ✅ Updated header with directUrl for Supabase
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

// ✅ Strip duplicate generator/datasource blocks from module files
function stripHeaders(content) {
  return content
    .replace(/generator\s+client\s*\{[^}]*\}/g, "")
    .replace(/datasource\s+db\s*\{[^}]*\}/g, "")
    .trim();
}

// ✅ Deduplicate models and enums
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

// ─── Build ───
const modules = stripHeaders(readPrismaFiles(MODULES_DIR));
const schemas = stripHeaders(readNestedSchema(SCHEMA_DIR));

const combined =
  header +
  "\n\n// ================= MODULES =================\n\n" +
  modules +
  "\n\n// ================= SCHEMAS =================\n\n" +
  schemas;

const finalSchema = deduplicateBlocks(combined);

fs.writeFileSync(OUTPUT_FILE, finalSchema);
console.log("✅ schema.prisma built successfully!");