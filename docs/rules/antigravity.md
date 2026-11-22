# Google Antigravity Rules — GDG on Campus Passau

These instructions govern Google Antigravity agents working on the GDG on Campus Passau project.

## Non-Negotiable Directives:
1. **Never Develop on `main` Branch:** Direct commits or development on `main` are strictly forbidden. Agents must ALWAYS create and switch to a dedicated branch (`feat/<name>`, `fix/<name>`, `chore/<name>`) before writing any code or making edits.
2. **Preserve Next.js Header:** Never remove or modify the `<!-- BEGIN:nextjs-agent-rules -->` block in `AGENTS.md`.
3. **Deterministic Verification:** Every agent turn that edits code must run `npm run lint && npm run build` and verify that the exit code is `0`.
4. **Repository Decoupling:** Never make direct database or external API calls inside React components. All operations must route through `/src/services/`.
5. **Branding & Tokens:** Never invent arbitrary hex color codes. Use the official Google brand tokens in `src/app/globals.css`.
6. **Mandatory Social Links:** Every member card on the Team page must feature direct, working LinkedIn and Instagram buttons.
7. **No Raw Script Tags:** In React 19, raw `<script>` tags inside JSX cause runtime client errors. Use context providers or Next.js `<Script>` components.
8. **Conventional Commits:** All git commits must strictly satisfy Conventional Commits v1.0.0 (`feat`, `fix`, `refactor`, `style`, `chore`, `docs`).
