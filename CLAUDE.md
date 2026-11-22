# Claude Code Rules — GDG on Campus Passau

> **Master Instructions:** See **[`ai-driven-development/agents/CLAUDE.md`](./ai-driven-development/agents/CLAUDE.md)** and **[`ai-driven-development/rules/`](./ai-driven-development/rules/)**.

## Essential Commands
- **Dev:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`

## Critical Rules:
1. Run `npm run lint && npm run build` before declaring tasks complete.
2. React 19: No synchronous `setState` in `useEffect`. No raw `<script>` tags in JSX.
3. Next.js Images: Parent element of `<Image fill>` MUST have `position: relative`.
4. Dates: Always format dates using `formatBerlinDateTime()` from `src/lib/utils.ts`.
5. Team Cards: Must include Photo, Name, Role badge, Study Program, LinkedIn button, and Instagram button.
6. Service Layer: All data fetching must go through `src/services/`.
