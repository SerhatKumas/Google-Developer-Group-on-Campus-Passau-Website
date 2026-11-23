import fs from "fs";
import path from "path";
import { ROOT_DIR, pass, fail, section, getFilesRecursively } from "./utils.mjs";

export function runArchitectureAudit() {
  section("Module 05: Decoupled Architecture & Services Layer");

  const componentFiles = getFilesRecursively(path.join(ROOT_DIR, "src", "components"), /\.(tsx|ts)$/);
  let prohibitedDbImports = [];
  const dbPackages = ["sqlite", "sqlite3", "pg", "mysql", "mysql2", "prisma", "mongoose", "@prisma/client", "mongodb"];

  for (const file of componentFiles) {
    const content = fs.readFileSync(file, "utf8");
    for (const pkg of dbPackages) {
      if (content.includes(`from "${pkg}"`) || content.includes(`from '${pkg}'`)) {
        prohibitedDbImports.push(`${path.relative(ROOT_DIR, file)} (imports ${pkg})`);
      }
    }
  }

  if (prohibitedDbImports.length === 0) {
    pass("Decoupled Service Layer", "Zero direct database imports in UI components. All queries route through services.");
  } else {
    fail("Decoupled Service Layer", `Prohibited DB imports in components: ${prohibitedDbImports.join("; ")}`);
  }
}
