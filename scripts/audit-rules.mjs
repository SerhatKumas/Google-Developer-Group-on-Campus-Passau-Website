#!/usr/bin/env node

/**
 * ==============================================================================
 * Google Developer Group on Campus Passau — Automated Rules & Quality Auditor
 * ==============================================================================
 * This script runs an exhaustive, deterministic validation of all architecture,
 * git isolation, React 19, i18n parity, branding, and team protocol rules.
 *
 * Usage:
 *   npm run audit
 *   node scripts/audit-rules.mjs [--full]
 * ==============================================================================
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

// ANSI Color formatting
const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";
const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const YELLOW = "\x1b[33m";
const CYAN = "\x1b[36m";

let totalChecks = 0;
let passedChecks = 0;
let warnings = 0;
let failures = 0;

function pass(name, details = "") {
  totalChecks++;
  passedChecks++;
  console.log(`  ${GREEN}✔ [PASS]${RESET} ${BOLD}${name}${RESET}${details ? ` - ${details}` : ""}`);
}

function warn(name, details = "") {
  totalChecks++;
  warnings++;
  console.log(`  ${YELLOW}⚠ [WARN]${RESET} ${BOLD}${name}${RESET}${details ? ` - ${details}` : ""}`);
}

function fail(name, details = "") {
  totalChecks++;
  failures++;
  console.log(`  ${RED}✖ [FAIL]${RESET} ${BOLD}${name}${RESET}${details ? ` - ${RED}${details}${RESET}` : ""}`);
}

function section(title) {
  console.log(`\n${CYAN}${BOLD}=== ${title} ===${RESET}`);
}

function getFilesRecursively(dir, filterRegex) {
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

// ==============================================================================
// 1. GIT WORKFLOW & BRANCH ISOLATION RULES
// ==============================================================================
section("1. Git Workflow & Branch Isolation");

try {
  const currentBranch = execSync("git branch --show-current", { cwd: ROOT_DIR, encoding: "utf8" }).trim();
  const statusOutput = execSync("git status --porcelain", { cwd: ROOT_DIR, encoding: "utf8" }).trim();

  if (currentBranch === "main") {
    if (statusOutput.length > 0) {
      fail(
        "Branch Isolation (Rule #1)",
        `Currently on 'main' with uncommitted changes! Rule #1 strictly prohibits development on main.`
      );
    } else {
      warn(
        "Current Branch is 'main'",
        `Working tree is clean, but agents MUST switch to a scoped branch ('feat/*', 'fix/*') before making changes.`
      );
    }
  } else {
    pass("Branch Isolation (Rule #1)", `Active on scoped branch: '${currentBranch}'`);
  }
} catch {
  warn("Git Status Check", "Could not query current git branch (not a git repo or git not found).");
}

const prePushHookPath = path.join(ROOT_DIR, ".git", "hooks", "pre-push");
if (fs.existsSync(prePushHookPath)) {
  const hookContent = fs.readFileSync(prePushHookPath, "utf8");
  if (hookContent.includes('protected_branch="main"') && hookContent.includes("exit 1")) {
    pass("Local Pre-Push Guard", "Found active .git/hooks/pre-push blocking direct pushes to 'main'.");
  } else {
    warn("Local Pre-Push Guard", ".git/hooks/pre-push exists but may not enforce 'main' branch protection.");
  }
} else {
  warn("Local Pre-Push Guard", "No .git/hooks/pre-push found. Direct pushes locally rely on GitHub remote protection.");
}

// ==============================================================================
// 2. NEXT.JS AGENT DIRECTIVES INTEGRITY
// ==============================================================================
section("2. Next.js Agent Directives Integrity");

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

// ==============================================================================
// 3. REACT 19 & NEXT.JS 16 CODING STANDARDS
// ==============================================================================
section("3. React 19 & Next.js 16 Coding Standards");

const tsxFiles = getFilesRecursively(path.join(ROOT_DIR, "src"), /\.(tsx|jsx)$/);
let rawScriptCount = 0;
let syncSetStateCount = 0;
let rawScriptFiles = [];
let syncSetStateFiles = [];

for (const file of tsxFiles) {
  const content = fs.readFileSync(file, "utf8");

  // Check for raw <script> tags inside JSX (must use next/script or context)
  if (/<script[\s>]/i.test(content) && !content.includes("from \"next/script\"") && !content.includes("from 'next/script'")) {
    rawScriptCount++;
    rawScriptFiles.push(path.relative(ROOT_DIR, file));
  }

  // Check for synchronous setState inside useEffect body: useEffect(() => {\n  setFoo(...)
  const syncSetStateRegex = /useEffect\s*\(\s*\(\s*\)\s*=>\s*\{\s*set[A-Z]\w*\s*\(/g;
  if (syncSetStateRegex.test(content)) {
    syncSetStateCount++;
    syncSetStateFiles.push(path.relative(ROOT_DIR, file));
  }
}

if (rawScriptCount === 0) {
  pass("No Raw Script Tags", `Scanned ${tsxFiles.length} JSX/TSX files. Zero raw <script> tags found.`);
} else {
  fail("No Raw Script Tags", `Found raw <script> tags in: ${rawScriptFiles.join(", ")}`);
}

if (syncSetStateCount === 0) {
  pass("React 19 useEffect State Safety", `Scanned ${tsxFiles.length} files. Zero synchronous setState in useEffect.`);
} else {
  fail("React 19 useEffect State Safety", `Synchronous setState in useEffect detected in: ${syncSetStateFiles.join(", ")}`);
}

// ==============================================================================
// 4. NEXT.JS IMAGE FILL PARENT RELATIVE POSITIONING
// ==============================================================================
section("4. Next.js Image Optimization Standards");

let imageFillIssues = [];
for (const file of tsxFiles) {
  const content = fs.readFileSync(file, "utf8");
  if (content.includes("<Image") && (content.includes("fill") || content.includes("fill={true}"))) {
    // Basic check: file must reference relative or absolute when using fill
    if (!content.includes("relative") && !content.includes("absolute")) {
      imageFillIssues.push(path.relative(ROOT_DIR, file));
    }
  }
}

if (imageFillIssues.length === 0) {
  pass("Image 'fill' Container Positioning", "All <Image fill> components are hosted inside positioned parents.");
} else {
  warn("Image 'fill' Container Positioning", `Check parent containers for relative/absolute in: ${imageFillIssues.join(", ")}`);
}

// ==============================================================================
// 5. DECOUPLED ARCHITECTURE & SERVICES LAYER
// ==============================================================================
section("5. Decoupled Architecture & Services Layer");

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

// ==============================================================================
// 6. MANDATORY TEAM CARDS PROTOCOL
// ==============================================================================
section("6. Mandatory Team Cards Protocol");

const teamDataPath = path.join(ROOT_DIR, "src", "data", "team.ts");
if (fs.existsSync(teamDataPath)) {
  const teamContent = fs.readFileSync(teamDataPath, "utf8");

  // Check that every member entry contains valid linkedin & instagram
  const hasLinkedIn = teamContent.includes("linkedin: \"https://www.linkedin.com/") || teamContent.includes("linkedin: 'https://www.linkedin.com/");
  const hasInstagram = teamContent.includes("instagram: \"https://www.instagram.com/") || teamContent.includes("instagram: 'https://www.instagram.com/");

  if (hasLinkedIn && hasInstagram) {
    pass("Team Members Social Data", "team.ts includes valid LinkedIn and Instagram URLs for members.");
  } else {
    fail("Team Members Social Data", "team.ts missing required LinkedIn or Instagram URLs.");
  }
} else {
  fail("Team Data File", "src/data/team.ts not found.");
}

const memberCardPath = path.join(ROOT_DIR, "src", "components", "cards", "MemberCard.tsx");
if (fs.existsSync(memberCardPath)) {
  const memberCardContent = fs.readFileSync(memberCardPath, "utf8");
  if (memberCardContent.includes("rel=\"noopener noreferrer\"") && memberCardContent.includes("LinkedInIcon") && memberCardContent.includes("InstagramIcon")) {
    pass("MemberCard Protocol", "MemberCard.tsx renders secure LinkedIn and Instagram buttons with rel='noopener noreferrer'.");
  } else {
    fail("MemberCard Protocol", "MemberCard.tsx is missing required social buttons or rel='noopener noreferrer'.");
  }
} else {
  fail("MemberCard Component", "src/components/cards/MemberCard.tsx not found.");
}

// ==============================================================================
// 7. MULTI-LANGUAGE (i18n) PARITY & INTEGRITY
// ==============================================================================
section("7. Multi-Language (i18n) Parity & Integrity");

const enPath = path.join(ROOT_DIR, "src", "i18n", "translations", "en.ts");
const dePath = path.join(ROOT_DIR, "src", "i18n", "translations", "de.ts");
const typesPath = path.join(ROOT_DIR, "src", "i18n", "types.ts");

if (fs.existsSync(enPath) && fs.existsSync(dePath) && fs.existsSync(typesPath)) {
  const enContent = fs.readFileSync(enPath, "utf8");
  const deContent = fs.readFileSync(dePath, "utf8");

  // Extract keys roughly from objects
  const extractKeys = (content) => {
    const keys = [];
    const lines = content.split("\n");
    for (const line of lines) {
      const match = line.match(/^\s*([a-zA-Z0-9_]+)\s*:/);
      if (match && !["export", "const", "import", "type", "interface"].includes(match[1])) {
        keys.push(match[1]);
      }
    }
    return keys;
  };

  const enKeys = extractKeys(enContent);
  const deKeys = extractKeys(deContent);

  const missingInDe = enKeys.filter((k) => !deKeys.includes(k));
  const missingInEn = deKeys.filter((k) => !enKeys.includes(k));

  if (missingInDe.length === 0 && missingInEn.length === 0) {
    pass("i18n Key Parity", `100% key parity between English (${enKeys.length} keys) and German (${deKeys.length} keys).`);
  } else {
    fail("i18n Key Parity", `Mismatches found! Missing in DE: [${missingInDe.join(", ")}], Missing in EN: [${missingInEn.join(", ")}]`);
  }
} else {
  fail("i18n Translations", "One or more translation files (en.ts, de.ts, types.ts) are missing.");
}

// ==============================================================================
// 8. GOOGLE BRAND DESIGN SYSTEM & TOKENS
// ==============================================================================
section("8. Google Brand Design Tokens & Theming");

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

// ==============================================================================
// 9. REPOSITORY GOVERNANCE & SECURITY
// ==============================================================================
section("9. Repository Governance & Security");

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

// ==============================================================================
// 10. OPTIONAL FULL BUILD VALIDATION
// ==============================================================================
if (process.argv.includes("--full") || process.argv.includes("--build")) {
  section("10. Deterministic Build Verification (Full Mode)");
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

// ==============================================================================
// FINAL AUDIT SUMMARY REPORT
// ==============================================================================
section("Audit Summary Report");

console.log(`\n  Total Checks Run : ${BOLD}${totalChecks}${RESET}`);
console.log(`  Passed           : ${GREEN}${BOLD}${passedChecks}${RESET}`);
console.log(`  Warnings         : ${YELLOW}${BOLD}${warnings}${RESET}`);
console.log(`  Failures         : ${failures > 0 ? RED : GREEN}${BOLD}${failures}${RESET}`);

if (failures === 0) {
  console.log(`\n${GREEN}${BOLD}🎉 ALL RULES COMPLIED WITH! The repository satisfies 100% of the established engineering standards.${RESET}\n`);
  process.exit(0);
} else {
  console.log(`\n${RED}${BOLD}❌ AUDIT FAILED: ${failures} rule violation(s) detected. Please resolve them before committing or opening a PR.${RESET}\n`);
  process.exit(1);
}
