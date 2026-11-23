# AI Agent Audit System — GDG on Campus Passau

> **Target Audience:** Autonomous AI coding agents (Antigravity, Cursor, Claude Code, GitHub Copilot) and human engineers.  
> **Purpose:** This directory contains prompt-based audit playbooks. Any agent can be instructed to read these files and audit the codebase against established rules.

---

## 📋 The 6 Prompt-Based Audit Modules

| Module | Audit Scope | Automated Counterpart |
| :--- | :--- | :--- |
| **[`01-branch-and-git-audit.md`](./01-branch-and-git-audit.md)** | Rule #1 Branch Isolation (Never on `main`), pre-push hook, Conventional Commits | `npm run audit:git` |
| **[`02-react19-and-nextjs-audit.md`](./02-react19-and-nextjs-audit.md)** | React 19 useEffect safety, no raw `<script>` tags, Image `fill` parent `relative` | `npm run audit:react19` |
| **[`03-team-and-socials-audit.md`](./03-team-and-socials-audit.md)** | Mandatory Team Card Protocol, LinkedIn & Instagram buttons, `rel="noopener noreferrer"` | `npm run audit:team` |
| **[`04-i18n-and-content-audit.md`](./04-i18n-and-content-audit.md)** | Multi-Language parity (EN/DE), 100% key parity, zero hardcoded strings | `npm run audit:i18n` |
| **[`05-services-and-architecture-audit.md`](./05-services-and-architecture-audit.md)** | Decoupled services layer, zero direct database drivers in UI components | `npm run audit:arch` |
| **[`06-governance-and-security-audit.md`](./06-governance-and-security-audit.md)** | CODEOWNERS, proprietary LICENSE, secrets protection, Google brand tokens | `npm run audit:gov` |

---

## 🤖 How to Prompt an AI Agent to Run an Audit

You can instruct any AI agent with prompts like:

```text
"Read docs/audit/02-react19-and-nextjs-audit.md and audit all components in src/ for React 19 violations."
```
```text
"Execute the full audit playbook in docs/audit/ and provide a detailed compliance report."
```

Agents will inspect the codebase line-by-line following the specific instructions and criteria in each module.
