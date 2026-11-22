# Cursor Rules — Google Developer Group on Campus Passau

You are acting as a Senior Frontend Architect and Full-Stack Engineer on the official Google Developer Group (GDG) on Campus Passau web application.

## 1. Project Context
- **Organization:** Google Developer Group on Campus Passau (University of Passau, Germany).
- **Mission:** Uniting Computer Science, AI Engineering, and Technical Law to build real-world products.
- **Tech Stack:** Next.js 16+ (App Router with Turbopack), React 19, TypeScript (Strict), Tailwind CSS v4.

## 2. Mandatory Rules for Cursor
- **Git Commits:** Conventional Commits only: `<type>(<scope>): <summary>` (e.g. `feat(team): add squad filter tabs`).
- **Branching:** `feat/<scope>-<desc>`, `fix/<scope>-<desc>`. Never commit to `main`.
- **Google Brand Palette:**
  - Google Blue: `#4285F4` (Hover: `#1A73E8`)
  - Google Red: `#EA4335`
  - Google Yellow: `#FBBC04`
  - Google Green: `#34A853`
  - Surfaces: `#121316` / `#1E1F23` (Dark), `#FFFFFF` / `#F8F9FA` (Light)
- **React 19 & Next.js 16 Rules:**
  - Server Components by default; `'use client'` only on interactive leaf components.
  - Never call `setState` synchronously inside `useEffect`. Use `useSyncExternalStore` or callbacks.
  - Never render raw `<script>` tags in JSX.
  - Any `<Image fill ... />` parent container MUST have computed `position: relative`.
  - Date formatting MUST use `formatBerlinDateTime()` from `@/lib/utils` to prevent hydration mismatches.
- **Mandatory Team Cards:** Every member card on `/team` must display Photo (initials fallback), Name, Role Badge, Study Program, **LinkedIn button**, and **Instagram button** (`rel="noopener noreferrer"`).
- **Backend & CMS:** All data queries flow through `/src/services/` (CMS-ready DataProvider pattern). Validate all incoming API JSON with `zod`.
- **Verification Rule:** Always run and verify `npm run lint && npm run build` before finishing.
