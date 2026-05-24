import fs from "fs";
import path from "path";

const SOURCE = "/home/prdgmlt018/Desktop/FrontEndUI/frontend-dev1-2/apps/web";
const TARGET = "/home/prdgmlt018/Desktop/Testing/StackForge-PARAPair/apps/web";

const DRY_RUN = false;

/**
 * ONLY UI FOLDERS TO MIGRATE
 * (we avoid touching pages/routes directly)
 */
const COPY_MAP = [
  {
    from: "components/marketplace",
    to: "src/features/marketplace/components",
  },
  {
    from: "components/dashboard",
    to: "src/features/dashboard/components",
  },
  {
    from: "components/employers",
    to: "src/features/dashboard/business/components",
  },
  {
    from: "components/landing",
    to: "src/shared/components/navigation",
  },
  {
    from: "components/shared",
    to: "src/shared/components",
  },
  {
    from: "lib",
    to: "src/lib/partner-ui-lib",
  },
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyRecursive(src, dest) {
  ensureDir(dest);

  for (const file of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, file.name);
    const destPath = path.join(dest, file.name);

    if (file.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      console.log(`📄 ${srcPath} → ${destPath}`);

      if (!DRY_RUN) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}

function run() {
  console.log("\n🚀 Cross-Repo UI Extraction Starting...\n");

  COPY_MAP.forEach((item) => {
    const srcPath = path.join(SOURCE, item.from);
    const destPath = path.join(TARGET, item.to);

    if (!fs.existsSync(srcPath)) {
      console.log(`⚠️ Missing folder: ${srcPath}`);
      return;
    }

    console.log(`\n➡️ Copying:
FROM: ${srcPath}
TO:   ${destPath}\n`);

    copyRecursive(srcPath, destPath);
  });

  console.log("\n✅ Done!");
  console.log(DRY_RUN ? "⚠️ DRY RUN (no files changed)" : "🎉 Files copied");
}

run();
