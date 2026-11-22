# Claude Code Rules — GDG on Campus Passau

> **Master Instructions:** See **[`ai-driven-development/agents/CLAUDE.md`](./ai-driven-development/agents/CLAUDE.md)** and **[`ai-driven-development/rules/`](./ai-driven-development/rules/)**.

## Essential Commands
- **Dev:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`

## Critical Rules:
1. **Never Develop on `main` Branch:** Direct commits or editing on `main` is strictly prohibited. Always create and switch to a feature/fix branch (`feat/<name>`, `fix/<name>`) first.
2. Run `npm run lint && npm run build` before declaring tasks complete.
3. React 19: No synchronous `setState` in `useEffect`. No raw `<script>` tags in JSX.
4. Next.js Images: Parent element of `<Image fill>` MUST have `position: relative`.
5. Dates: Always format dates using `formatBerlinDateTime()` from `src/lib/utils.ts`.
6. Team Cards: Must include Photo, Name, Role badge, Study Program, LinkedIn button, and Instagram button.
7. Service Layer: All data fetching must go through `src/services/`.
