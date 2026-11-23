# Audit Module 06: Security, Branding & Repository Governance

> **Agent Instruction:** You are acting as the Repository Governance & Security Auditor. Inspect all repository root files, licenses, GitHub configurations, and Google brand token definitions.

---

## 🎯 Audit Objectives
1. Verify presence of `.github/CODEOWNERS` with mandated reviewers `@SerhatKumas` and `@Udalmia`.
2. Confirm GitHub Actions CI workflow in `.github/workflows/ci.yml`.
3. Verify proprietary protection in `LICENSE`.
4. Ensure `.gitignore` protects secrets and environment files (`.env*.local`).
5. Confirm Google brand tokens (`--google-blue`, etc.) and dark variant in `src/app/globals.css`.

---

## 🔍 Step-by-Step Inspection Checklist for the Agent

### Step 1: CODEOWNERS & Branch Governance
Inspect `.github/CODEOWNERS`:
- **Pass Criteria:** File exists and designates `@SerhatKumas` and `@Udalmia` as code owners for `*`.
- **Remediation:** Ensure both usernames are present on line `* @SerhatKumas @Udalmia`.

### Step 2: Automated CI Workflow
Inspect `.github/workflows/ci.yml`:
- **Pass Criteria:** Workflow triggers on `push` and `pull_request` to `main`, running:
  - `npm ci`
  - `npm run lint`
  - `npm run audit`
  - `npm run build`

### Step 3: Intellectual Property & License
Inspect `LICENSE`:
- **Pass Criteria:** Contains proprietary license terms granting exclusive rights to Google Developer Group on Campus Passau and prohibiting unauthorized third-party copying, public deployment, or claims of authorship.

### Step 4: Secrets Protection
Inspect `.gitignore`:
- **Pass Criteria:** Excludes `.env*` or `.env*.local` while allowing `.env.example`.

### Step 5: Google Brand Tokens
Inspect `src/app/globals.css`:
- **Pass Criteria:** Defines:
  - `@custom-variant dark (&:where(.dark, .dark *));`
  - `--google-blue: #4285f4;`
  - `--google-red: #ea4335;`
  - `--google-yellow: #fbbc04;`
  - `--google-green: #34a853;`

---

## 📝 Expected Audit Output Format
- **CODEOWNERS Check:** `[pass/fail]`
- **CI Workflow Check:** `[pass/fail]`
- **Proprietary License Check:** `[pass/fail]`
- **Secrets Protection (.gitignore):** `[pass/fail]`
- **Google Brand Tokens:** `[pass/fail]`
