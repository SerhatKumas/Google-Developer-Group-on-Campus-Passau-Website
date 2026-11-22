# CLAUDE.md — Claude Code Guidelines for GDG on Campus Passau

## Commands
- **Dev Server:** `npm run dev` (starts on http://localhost:3000)
- **Production Build:** `npm run build`
- **Lint:** `npm run lint`
- **Start:** `npm run start`

## Architecture & Code Structure
- **Next.js 16 App Router:** Server Components by default. Keep interactive components strictly at the leaves with `'use client'`.
- **Styling:** Tailwind CSS v4 using Google brand tokens (`--google-blue`, `--google-red`, `--google-yellow`, `--google-green`). No arbitrary hex codes.
- **Service Layer (`/src/services`):** Decoupled async functions (`getEvents`, `getTeamsWithMembers`, `getPartners`, `getGalleryPhotos`). Components must never query databases or external APIs directly.
- **Central Config (`/src/config/site.ts`):** Single source of truth for all links, socials, addresses, and chapter metadata.

## Critical React 19 & Next.js Gotchas
1. **No synchronous `setState` in `useEffect`:** Causes `react-hooks/set-state-in-effect`. Use `useSyncExternalStore` for external state like `localStorage`.
2. **No raw `<script>` tags in JSX:** Use client context providers or Next.js `<Script>` from `next/script`.
3. **Image `fill` parent:** Every parent of Next.js `<Image fill ... />` must have `position: relative` (e.g. `className="relative ..."`).
4. **Deterministic Dates:** Always format Europe/Berlin dates using `formatBerlinDateTime(dateStr)` from `src/lib/utils.ts` to prevent SSR/client hydration mismatches.

## Mandatory Team Member Card Protocol
Every member card on `/team` MUST render:
1. Avatar/Photo (with initials fallback)
2. Full Name
3. Role / Title badge
4. Study Program / Major
5. **LinkedIn button** (`target="_blank"`, `rel="noopener noreferrer"`, accessible `aria-label`)
6. **Instagram button** (`target="_blank"`, `rel="noopener noreferrer"`, accessible `aria-label`)

## Git & PR Protocol
- **Never Develop on `main` Branch:** Direct commits or editing on `main` are strictly prohibited. Agents must ALWAYS create a scoped branch (`feat/<name>`, `fix/<name>`) first.
- **Branch names:** `feat/<scope>-<desc>`, `fix/<scope>-<desc>`, `refactor/<scope>-<desc>`.
- **Commits:** Conventional Commits: `<type>(<scope>): <summary>` (types: `feat`, `fix`, `refactor`, `style`, `chore`, `docs`).
- **Verification:** Run `npm run lint && npm run build` and ensure exit code `0` before pushing.
