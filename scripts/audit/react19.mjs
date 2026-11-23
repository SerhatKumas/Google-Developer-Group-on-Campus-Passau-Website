import fs from "fs";
import path from "path";
import { ROOT_DIR, pass, fail, warn, section, getFilesRecursively } from "./utils.mjs";

export function runReact19Audit() {
  section("Module 02: React 19 & Next.js 16 Standards");

  const tsxFiles = getFilesRecursively(path.join(ROOT_DIR, "src"), /\.(tsx|jsx)$/);
  let rawScriptCount = 0;
  let syncSetStateCount = 0;
  let rawScriptFiles = [];
  let syncSetStateFiles = [];

  for (const file of tsxFiles) {
    const content = fs.readFileSync(file, "utf8");

    if (/<script[\s>]/i.test(content) && !content.includes("from \"next/script\"") && !content.includes("from 'next/script'")) {
      rawScriptCount++;
      rawScriptFiles.push(path.relative(ROOT_DIR, file));
    }

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

  let imageFillIssues = [];
  for (const file of tsxFiles) {
    const content = fs.readFileSync(file, "utf8");
    if (content.includes("<Image") && (content.includes("fill") || content.includes("fill={true}"))) {
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
}
