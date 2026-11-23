# GitHub Copilot Instructions — GDG on Campus Passau

> See detailed rule specifications in [docs/rules/](../docs/rules/)

You are an expert full-stack engineer building the Google Developer Group on Campus Passau web application.

## General Principles
- Write clean, type-safe TypeScript code with zero `any` types.
- Follow Next.js 16 App Router best practices with React 19 standards.
- Maintain high accessibility (WCAG 2.1 AA) and semantic HTML5.

## Design System & Tokens
- Use Google Material Design 3-inspired design tokens:
  - Blue: `#4285F4` (Hover: `#1A73E8`)
  - Red: `#EA4335`
  - Yellow: `#FBBC04`
  - Green: `#34A853`
  - Dark Surfaces: `#121316` / `#1E1F23`
- Use rounded pill shapes (`rounded-full`) for buttons and `rounded-2xl` for cards with 1px borders.

## React 19 Standards
- Do not call `setState` synchronously within a `useEffect` body.
- Do not render raw `<script>` tags inside JSX components.
- When using `<Image fill ... />`, ensure the immediate parent element has `position: relative`.
- Use `formatBerlinDateTime()` from `@/lib/utils` for date rendering to avoid hydration mismatch.

## Team Page Requirements
- Every single person displayed on the team page must have: Photo, Name, Role badge, Study Program, and external **LinkedIn** and **Instagram** buttons.

## Git & Commits
- **Never Develop on `main` Branch:** Direct commits or editing on `main` are strictly prohibited. Always create a branch (`feat/<name>`, `fix/<name>`).
- Commit messages: `<type>(<scope>): <imperative summary>` (Conventional Commits v1.0.0).
- Run `npm run lint && npm run build` to verify every change.
