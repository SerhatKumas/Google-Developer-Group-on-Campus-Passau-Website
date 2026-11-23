# Audit Module 01: Branch Isolation & Git Hygiene

> **Agent Instruction:** You are acting as the Quality Assurance Auditor for GDG on Campus Passau. Read this prompt and inspect the repository's git state, branch rules, and commit history.

---

## 🎯 Audit Objectives
1. Verify that **NO development, edits, or commits** are happening directly on the `main` branch.
2. Confirm the presence and execution permission of `.git/hooks/pre-push`.
3. Check recent commits for strict compliance with Conventional Commits v1.0.0.

---

## 🔍 Step-by-Step Inspection Checklist for the Agent

### Step 1: Active Branch Check
Run:
```bash
git branch --show-current
git status --porcelain
```
- **Pass Criteria:** The current branch is a scoped branch (e.g. `feat/*`, `fix/*`, `chore/*`, `docs/*`, `refactor/*`).
- **Fail Criteria:** Active branch is `main` AND has uncommitted modifications.
- **Remediation:** Immediately run `git checkout -b <type>/<description>` before making any file edits.

### Step 2: Local Pre-Push Guard Check
Inspect `.git/hooks/pre-push`:
- **Pass Criteria:** File exists, is executable (`chmod +x`), and contains logic checking `current_branch = "main"` and exits with `exit 1` to abort direct pushes.
- **Remediation:** Reinstall the hook from `docs/rules/01-git-and-branching.md`.

### Step 3: Commit History Format Check
Run:
```bash
git log -n 10 --oneline
```
- **Pass Criteria:** All commit messages strictly follow `<type>(<scope>): <summary>` (e.g. `feat(nav): ...`, `fix(i18n): ...`).
- **Allowed Types:** `feat`, `fix`, `refactor`, `style`, `chore`, `docs`, `perf`, `test`, `ci`.

---

## 📝 Expected Audit Output Format
When concluding this audit, output:
- **Branch Name:** `[pass/fail]` Current branch and cleanliness
- **Pre-Push Hook:** `[pass/fail]` Active status
- **Commit History:** `[pass/fail]` Conventional Commits compliance
