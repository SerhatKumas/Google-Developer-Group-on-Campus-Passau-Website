import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const ROOT_DIR = path.resolve(__dirname, "../..");

export const RESET = "\x1b[0m";
export const BOLD = "\x1b[1m";
export const GREEN = "\x1b[32m";
export const RED = "\x1b[31m";
export const YELLOW = "\x1b[33m";
export const CYAN = "\x1b[36m";

export const summary = {
  totalChecks: 0,
  passedChecks: 0,
  warnings: 0,
  failures: 0,
};

export function pass(name, details = "") {
  summary.totalChecks++;
  summary.passedChecks++;
  console.log(`  ${GREEN}✔ [PASS]${RESET} ${BOLD}${name}${RESET}${details ? ` - ${details}` : ""}`);
}

export function warn(name, details = "") {
  summary.totalChecks++;
  summary.warnings++;
  console.log(`  ${YELLOW}⚠ [WARN]${RESET} ${BOLD}${name}${RESET}${details ? ` - ${details}` : ""}`);
}

export function fail(name, details = "") {
  summary.totalChecks++;
  summary.failures++;
  console.log(`  ${RED}✖ [FAIL]${RESET} ${BOLD}${name}${RESET}${details ? ` - ${RED}${details}${RESET}` : ""}`);
}

export function section(title) {
  console.log(`\n${CYAN}${BOLD}=== ${title} ===${RESET}`);
}

export function getFilesRecursively(dir, filterRegex) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== "node_modules" && file !== ".next" && file !== ".git") {
        results = results.concat(getFilesRecursively(fullPath, filterRegex));
      }
    } else if (!filterRegex || filterRegex.test(file)) {
      results.push(fullPath);
    }
  }
  return results;
}
