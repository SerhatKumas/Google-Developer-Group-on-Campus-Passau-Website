# AI-Driven Development (AIDD) — GDG on Campus Passau

> **Philosophy:** Human engineers lead architecture, product vision, and code reviews; autonomous AI agents (Cursor, Claude Code, Copilot, Antigravity) execute tasks deterministically under strict, verified engineering rules.

---

## 📂 Rules Directory Structure

```text
ai-driven-development/
└── rules/
    ├── README.md                      # Overview & Agent Selection Guide
    ├── 01-git-and-branching.md        # Branch naming, rebase rules & hygiene
    ├── 02-commit-and-push.md          # Conventional Commits & PR standards
    ├── 03-frontend-standards.md       # Next.js 16, React 19, Tailwind CSS v4, Brand Tokens
    ├── 04-backend-and-api.md          # Route handlers, Zod validation, JSON envelope
    ├── 05-database-and-cms.md         # Service layer decoupling, RBAC & GDPR
    │
    ├── cursor.md                      # Rule specifications for Cursor IDE (.cursorrules)
    ├── claude.md                      # Rule specifications for Claude Code (CLAUDE.md)
    ├── copilot.md                     # Rule specifications for GitHub Copilot (.github/copilot-instructions.md)
    └── antigravity.md                 # Rule specifications for Antigravity (AGENTS.md)
```

---

## 🤖 The 4 Supported AI Coding Agents

Every AI agent working in this repository automatically reads its designated configuration file at project root:

| Agent | Root Config File | Target Environment |
| :--- | :--- | :--- |
| **Cursor** | `.cursorrules` | Cursor IDE & Windsurf AI Editor |
| **Claude Code** | `CLAUDE.md` | Claude Code CLI & Claude 3.5/3.7 Sonnet |
| **GitHub Copilot** | `.github/copilot-instructions.md` | VS Code Copilot Chat & Copilot Workspace |
| **Antigravity** | `AGENTS.md` | Google Antigravity & Agentic Dev Harness |

---

## ⚡ Non-Negotiable AI Rules Summary

1. **Deterministic Verification:** Every AI agent turn that modifies code **MUST** conclude with `npm run lint && npm run build`. The exit code must be `0`.
2. **React 19 Rule:** Never call `setState` synchronously within a `useEffect` body. Use `useSyncExternalStore` or event-driven updates.
3. **No Raw Script Tags:** Never render `<script>` tags inside JSX components.
4. **Google Design Tokens:** Never invent arbitrary hex codes. Use CSS design tokens (`--google-blue`, etc.).
5. **Mandatory Member Card Fields:** Every card on `/team` must include Photo, Full Name, Role Badge, Study Program, and accessible **LinkedIn & Instagram buttons**.
6. **Decoupled Service Layer:** UI components must never query databases directly. All data access must flow through `/src/services/`.
