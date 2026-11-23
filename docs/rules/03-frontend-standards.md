# Rule 03: Frontend Architecture & Design Standards

## 1. Framework & React 19 Standards
- **Next.js 16+ App Router:** Keep components as **Server Components** by default. Add `'use client'` only to interactive leaf components (forms, modals, filter chips, theme toggles).
- **React 19 Rule:** **NEVER call `setState` synchronously within a `useEffect` body.** This triggers the `react-hooks/set-state-in-effect` compiler error. For browser storage, use `useSyncExternalStore` or event-driven updates.
- **Never render raw `<script>` tags** inside JSX components. Use Next.js `<Script>` from `next/script` or state synchronization in client providers.

## 2. Google Brand Design Tokens (Tailwind CSS v4)
All colors must adhere to the official Google color system defined in `globals.css`:
- **Google Blue (Primary CTA & Links):** `#4285F4` (Hover: `#1A73E8`)
- **Google Red (Highlights / Urgent):** `#EA4335`
- **Google Yellow (Accents / Badges):** `#FBBC04`
- **Google Green (Success / Open Registration):** `#34A853`
- **Surfaces & Neutrals:**
  - Background Primary: `#FFFFFF` (Dark: `#121316`)
  - Background Surface / Cards: `#F8F9FA` (Dark: `#1E1F23`)
  - Border / Divider: `#E8EAED` (Dark: `#2D2F34`)
  - Text Primary: `#202124` (Dark: `#F1F3F4`)
  - Text Secondary: `#5F6368` (Dark: `#9AA0A6`)
- **Do not invent arbitrary hex codes.** Use CSS custom variables (`var(--google-blue)`, etc.) or design tokens.
- **Pill UI:** Action buttons use `rounded-full`; cards and bento containers use `rounded-2xl` or `rounded-3xl` with crisp 1px borders.

## 3. Images & Next.js Image Optimization
- When using Next.js `<Image fill ... />`, the immediate parent container **MUST** have computed `position: relative`, `position: absolute`, or `position: fixed` (e.g. `className="relative ..."`).
- Always specify `sizes` on `fill` images to prevent multi-megabyte payloads on mobile.
- Store static chapter assets in `/public/images/` under designated subdirectories (`logo/`, `team/`, `events/`, `partners/`, `gallery/`).

## 4. Mandatory Member Card Protocol
Any component or view displaying team members (Executive Leads, Core Team Leads, or regular members) **MUST** include:
1. Avatar/Photo (with initials fallback)
2. Full Name
3. Role / Title badge
4. Study Program / Major
5. **LinkedIn button** (`target="_blank"`, `rel="noopener noreferrer"`, accessible `aria-label`)
6. **Instagram button** (`target="_blank"`, `rel="noopener noreferrer"`, accessible `aria-label`)

## 5. Date & Time Localization
Always use `formatBerlinDateTime()` from `@/lib/utils` (using `formatToParts`) to ensure deterministic output and prevent client/server hydration mismatches.
