import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { ROOT_DIR, pass, warn, fail, section } from "./utils.mjs";

export function runGitAudit() {
  section("Module 01: Branch Isolation & Git Hygiene");

  try {
    const currentBranch = execSync("git branch --show-current", { cwd: ROOT_DIR, encoding: "utf8" }).trim();
    const statusOutput = execSync("git status --porcelain", { cwd: ROOT_DIR, encoding: "utf8" }).trim();

    if (currentBranch === "main") {
      if (statusOutput.length > 0) {
        fail(
          "Branch Isolation (Rule #1)",
          "Currently on 'main' with uncommitted changes! Rule #1 strictly prohibits development on main."
        );
      } else {
        warn(
          "Current Branch is 'main'",
          "Working tree is clean, but agents MUST switch to a scoped branch ('feat/*', 'fix/*') before making changes."
        );
      }
    } else {
      pass("Branch Isolation (Rule #1)", `Active on scoped branch: '${currentBranch}'`);
    }
  } catch {
    warn("Git Status Check", "Could not query current git branch.");
  }

  const prePushHookPath = path.join(ROOT_DIR, ".git", "hooks", "pre-push");
  if (fs.existsSync(prePushHookPath)) {
    const hookContent = fs.readFileSync(prePushHookPath, "utf8");
    if (hookContent.includes('protected_branch="main"') && hookContent.includes("exit 1")) {
      pass("Local Pre-Push Guard", "Found active .git/hooks/pre-push blocking direct pushes to 'main'.");
    } else {
      warn("Local Pre-Push Guard", ".git/hooks/pre-push exists but verify 'main' branch protection.");
    }
  } else {
    warn("Local Pre-Push Guard", "No .git/hooks/pre-push found. Direct pushes locally rely on GitHub remote protection.");
  }
}
