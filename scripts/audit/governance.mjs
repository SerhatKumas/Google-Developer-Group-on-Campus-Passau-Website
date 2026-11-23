import fs from "fs";
import path from "path";
import { ROOT_DIR, pass, fail, warn, section } from "./utils.mjs";

export function runGovernanceAudit() {
  section("Module 06: Security, Branding & Repository Governance");

  const agentsMdPath = path.join(ROOT_DIR, "AGENTS.md");
  if (fs.existsSync(agentsMdPath)) {
    const agentsContent = fs.readFileSync(agentsMdPath, "utf8");
    if (agentsContent.includes("<!-- BEGIN:nextjs-agent-rules -->") && agentsContent.includes("<!-- END:nextjs-agent-rules -->")) {
      pass("Next.js Agent Rules Header", "AGENTS.md preserves mandatory nextjs-agent-rules block.");
    } else {
      fail("Next.js Agent Rules Header", "AGENTS.md is missing '<!-- BEGIN:nextjs-agent-rules -->' block.");
    }

    if (agentsContent.includes("Never Develop on `main` Branch")) {
      pass("Master Agent Directives", "AGENTS.md explicitly enforces Rule #1: Never Develop on main.");
    } else {
      fail("Master Agent Directives", "AGENTS.md does not prominently enforce Never Develop on main.");
    }
  } else {
    fail("AGENTS.md Missing", "Root AGENTS.md was not found.");
  }

  const globalsCssPath = path.join(ROOT_DIR, "src", "app", "globals.css");
  if (fs.existsSync(globalsCssPath)) {
    const cssContent = fs.readFileSync(globalsCssPath, "utf8");
    const hasDarkVariant = cssContent.includes("@custom-variant dark");
    const hasGoogleBlue = cssContent.includes("--google-blue");
    const hasGoogleRed = cssContent.includes("--google-red");
    const hasGoogleYellow = cssContent.includes("--google-yellow");
    const hasGoogleGreen = cssContent.includes("--google-green");

    if (hasDarkVariant && hasGoogleBlue && hasGoogleRed && hasGoogleYellow && hasGoogleGreen) {
      pass("Design Tokens & Dark Mode", "globals.css contains Tailwind v4 custom dark variant and official Google color tokens.");
    } else {
      fail("Design Tokens & Dark Mode", "globals.css is missing custom dark variant or Google brand palette variables.");
    }
  } else {
    fail("globals.css Missing", "src/app/globals.css was not found.");
  }

  const codeownersPath = path.join(ROOT_DIR, ".github", "CODEOWNERS");
  if (fs.existsSync(codeownersPath)) {
    const codeownersContent = fs.readFileSync(codeownersPath, "utf8");
    if (codeownersContent.includes("@SerhatKumas") && codeownersContent.includes("@Udalmia")) {
      pass("CODEOWNERS Configuration", ".github/CODEOWNERS requires reviews from @SerhatKumas and @Udalmia.");
    } else {
      fail("CODEOWNERS Configuration", ".github/CODEOWNERS is missing required reviewers.");
    }
  } else {
    fail("CODEOWNERS Missing", ".github/CODEOWNERS file does not exist.");
  }

  const ciWorkflowPath = path.join(ROOT_DIR, ".github", "workflows", "ci.yml");
  if (fs.existsSync(ciWorkflowPath)) {
    const ciContent = fs.readFileSync(ciWorkflowPath, "utf8");
    if (ciContent.includes("npm run lint") && ciContent.includes("npm run build")) {
      pass("GitHub Actions CI Pipeline", ".github/workflows/ci.yml tests linting and building on PRs.");
    } else {
      warn("GitHub Actions CI Pipeline", "CI workflow does not test both lint and build.");
    }
  } else {
    fail("CI Workflow Missing", ".github/workflows/ci.yml was not found.");
  }

  const licensePath = path.join(ROOT_DIR, "LICENSE");
  if (fs.existsSync(licensePath)) {
    const licenseContent = fs.readFileSync(licensePath, "utf8");
    if (licenseContent.includes("PROPRIETARY & EXCLUSIVE") && licenseContent.includes("Google Developer Group on Campus Passau")) {
      pass("Proprietary License Protection", "LICENSE grants exclusive rights to GDG on Campus Passau.");
    } else {
      warn("License Protection", "LICENSE exists but verify proprietary terms.");
    }
  } else {
    fail("License Missing", "Root LICENSE file was not found.");
  }

  const gitignorePath = path.join(ROOT_DIR, ".gitignore");
  if (fs.existsSync(gitignorePath)) {
    const gitignoreContent = fs.readFileSync(gitignorePath, "utf8");
    if (gitignoreContent.includes(".env*.local") || gitignoreContent.includes(".env")) {
      pass("Secrets Protection (.gitignore)", ".gitignore properly excludes local environment files.");
    } else {
      fail("Secrets Protection (.gitignore)", ".gitignore does not exclude .env files!");
    }
  } else {
    fail(".gitignore Missing", "Root .gitignore file was not found.");
  }
}
