import { runGitAudit } from "./git.mjs";
import { runReact19Audit } from "./react19.mjs";
import { runTeamAudit } from "./team.mjs";
import { runI18nAudit } from "./i18n.mjs";
import { runArchitectureAudit } from "./architecture.mjs";
import { runGovernanceAudit } from "./governance.mjs";
import { summary, section, ROOT_DIR, BOLD, RESET, GREEN, RED, YELLOW, pass, fail } from "./utils.mjs";
import { execSync } from "child_process";

export function runAllAudits(options = {}) {
  const args = process.argv.slice(2);
  const targetModule = options.module || args.find((a) => a.startsWith("--module="))?.split("=")[1];

  console.log(`${BOLD}🔍 Running GDG on Campus Passau Audit Suite...${RESET}`);

  if (!targetModule || targetModule === "git") runGitAudit();
  if (!targetModule || targetModule === "react19") runReact19Audit();
  if (!targetModule || targetModule === "team") runTeamAudit();
  if (!targetModule || targetModule === "i18n") runI18nAudit();
  if (!targetModule || targetModule === "architecture" || targetModule === "arch") runArchitectureAudit();
  if (!targetModule || targetModule === "governance" || targetModule === "gov") runGovernanceAudit();

  if (args.includes("--full") || args.includes("--build")) {
    section("Full Build & Lint Validation");
    try {
      console.log("  Running 'npm run lint'...");
      execSync("npm run lint", { cwd: ROOT_DIR, stdio: "inherit" });
      pass("Linter Verification", "npm run lint passed with 0 errors.");
    } catch {
      fail("Linter Verification", "npm run lint failed!");
    }

    try {
      console.log("  Running 'npm run build'...");
      execSync("npm run build", { cwd: ROOT_DIR, stdio: "inherit" });
      pass("Next.js Build Verification", "npm run build compiled cleanly with Turbopack.");
    } catch {
      fail("Next.js Build Verification", "npm run build failed!");
    }
  }

  section("Audit Summary Report");
  console.log(`\n  Total Checks Run : ${BOLD}${summary.totalChecks}${RESET}`);
  console.log(`  Passed           : ${GREEN}${BOLD}${summary.passedChecks}${RESET}`);
  console.log(`  Warnings         : ${YELLOW}${BOLD}${summary.warnings}${RESET}`);
  console.log(`  Failures         : ${summary.failures > 0 ? RED : GREEN}${BOLD}${summary.failures}${RESET}`);

  if (summary.failures === 0) {
    console.log(`\n${GREEN}${BOLD}🎉 ALL AUDIT CHECKS PASSED! Repository satisfies 100% of engineering rules.${RESET}\n`);
    return 0;
  } else {
    console.log(`\n${RED}${BOLD}❌ AUDIT FAILED: ${summary.failures} rule violation(s) detected.${RESET}\n`);
    return 1;
  }
}
