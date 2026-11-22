<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Google Developer Group on Campus Passau — AI Agent Rules

> **Master Documentation:** The full, comprehensive AI development rules and agent directives are organized in:
> 📁 **[`ai-driven-development/`](./ai-driven-development/)**
> - **Antigravity & Agent Directive:** [`ai-driven-development/agents/AGENTS.md`](./ai-driven-development/agents/AGENTS.md)
> - **Rules Index:** [`ai-driven-development/rules/README.md`](./ai-driven-development/rules/README.md)

## Core Directives for Agents:
1. **Deterministic Verification:** Always run `npm run lint && npm run build` before finishing any task (must exit code 0).
2. **React 19 Rule:** Never call `setState` synchronously within a `useEffect` body.
3. **No Raw Script Tags:** Never render `<script>` tags inside JSX components.
4. **Google Design Tokens:** Use `--google-blue`, `--google-red`, `--google-yellow`, `--google-green` from `globals.css`.
5. **Mandatory Team Cards:** Every member card on `/team` must include LinkedIn & Instagram buttons (`rel="noopener noreferrer"`).
6. **Decoupled Services:** UI components must never query databases directly; all queries flow through `/src/services/`.
