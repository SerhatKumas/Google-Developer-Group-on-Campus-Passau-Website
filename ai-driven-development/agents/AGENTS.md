# Google Developer Group (GDG) on Campus Passau — AI & Engineering Rules

> **Target Audience:** All student engineers, core team leads, and their AI coding agents (Antigravity, Cursor, Claude Code, GitHub Copilot).
> **Operating Principle:** This project follows **AI-Driven Development (AIDD)**. Every AI agent working on this codebase must adhere strictly to these non-negotiable rules.

---

## 1. Git Workflow & Branching Strategy

### 1.1 Absolute Prohibition: Never Develop on `main`
**Direct development, direct commits, and direct pushes on `main` are strictly forbidden for both humans and AI agents.**
Agents MUST ALWAYS create and switch to a scoped branch (`feat/<name>`, `fix/<name>`, `chore/<name>`) before making any code modifications or edits.

### 1.2 Branch Naming Conventions
All development must happen on isolated branches:

| Branch Type | Format | Example | Purpose |
| :--- | :--- | :--- | :--- |
| **Feature** | `feat/<scope>-<description>` | `feat/events-rsvp-flow` | New pages, components, features |
| **Bugfix** | `fix/<scope>-<description>` | `fix/mobile-nav-overflow` | Bug fixes and patches |
| **Refactor** | `refactor/<scope>-<description>` | `refactor/service-layer` | Code improvements without behavior changes |
| **Chore / Setup** | `chore/<scope>-<description>` | `chore/upgrade-deps` | Tooling, dependencies, config |
| **Docs** | `docs/<scope>-<description>` | `docs/api-readme` | Documentation and guidelines |

- Use lowercase, hyphens instead of spaces, and keep branch names concise (under 40 characters).
- Example: `git checkout -b feat/cms-member-roles`

### 1.2 Git Hygiene Rules
1. **Always rebase onto upstream `main`** before submitting a PR:
   ```bash
   git fetch origin
   git rebase origin/main
   ```
2. **Never commit secrets or environment variables:** `.env.local` must remain in `.gitignore`. Only commit generic `.env.example`.
3. **Keep PRs atomic:** One feature or fix per pull request. Do not mix refactoring with new feature implementations.

---

## 2. Commit Message Standards (Conventional Commits v1.0.0)

All commit messages from human developers and AI agents **MUST** follow the Conventional Commits specification:

### 2.1 Format
```text
<type>(<scope>): <short imperative summary>

[optional detailed body explaining why and what changed]

[optional footer(s): Breaking Changes, Closes #123]
```

### 2.2 Allowed Types
- `feat`: A new user-facing feature or enhancement.
- `fix`: A bug fix.
- `refactor`: Code change that neither fixes a bug nor adds a feature.
- `style`: Formatting, missing semicolons, white-space changes (no code logic change).
- `perf`: Code change that improves performance.
- `test`: Adding missing tests or correcting existing tests.
- `build`: Changes that affect the build system or external dependencies.
- `ci`: Changes to CI configuration files and scripts.
- `chore`: Maintenance tasks, repo config, auxiliary tools.
- `docs`: Documentation only changes.

### 2.3 Scopes
Use one of the recognized scopes:
`home`, `team`, `events`, `partners`, `gallery`, `contact`, `ui`, `cms`, `auth`, `db`, `api`, `design-system`

---

## 3. Pull Request (PR) & Push Protocol

Before pushing any commit or opening a Pull Request, you and your AI agent **MUST run and pass**:
```bash
npm run lint && npm run build
```
If either command fails, **DO NOT PUSH**. Fix all errors first.

---

## 4. Frontend Architecture & Development Rules

### 4.1 Framework & React 19 Standards
- **Next.js 16+ App Router:** Keep components as **Server Components** by default. Add `'use client'` only to interactive leaf components (forms, modals, filter chips, theme toggles).
- **React 19 Rule:** **NEVER call `setState` synchronously within a `useEffect` body.** This triggers the `react-hooks/set-state-in-effect` compiler error. For browser storage, use `useSyncExternalStore` or event-driven updates.
- **Never render raw `<script>` tags** inside JSX components. Use Next.js `<Script>` from `next/script` or state synchronization in client providers.

### 4.2 Styling & Google Brand Design Tokens (Tailwind CSS v4)
- All colors must adhere to the official Google color system defined in `globals.css`:
  - Primary Blue: `#4285F4` (Hover: `#1A73E8`)
  - Accent Red: `#EA4335`
  - Accent Yellow: `#FBBC04`
  - Community Green: `#34A853`
  - Dark Mode Surfaces: `#121316` (background) and `#1E1F23` (cards/surfaces)
- **Do not invent arbitrary hex codes.** Use CSS custom variables (`var(--google-blue)`, etc.) or design tokens.
- **Pill UI:** Action buttons use `rounded-full`; cards and bento containers use `rounded-2xl` or `rounded-3xl` with crisp 1px borders.

### 4.3 Images & Assets
- When using Next.js `<Image fill ... />`, the immediate parent container **MUST** have computed `position: relative`, `position: absolute`, or `position: fixed` (e.g. `className="relative ..."`).
- Always specify `sizes` on `fill` images to prevent multi-megabyte payloads on mobile.
- Store static chapter assets in `/public/images/` or `/src/assets/logo/`.

### 4.4 Mandatory Member Card Protocol
Any component or view displaying team members (Executive Leads, Core Team Leads, or regular members) **MUST** include:
1. Avatar/Photo (with initials fallback)
2. Full Name
3. Role / Title badge
4. Study Program / Major
5. **LinkedIn button** (`target="_blank"`, `rel="noopener noreferrer"`, accessible `aria-label`)
6. **Instagram button** (`target="_blank"`, `rel="noopener noreferrer"`, accessible `aria-label`)

---

## 5. Backend & API Route Standards

All backend endpoints are located in `src/app/api/` and must follow strict RESTful conventions:

### 5.1 Validation & Request Handling
- Every POST/PUT/PATCH request **MUST validate incoming JSON using `zod`** schemas.
- Reject invalid payloads with `400 Bad Request` and descriptive error details.

### 5.2 Uniform JSON Response Envelope
All API endpoints must return a standardized JSON structure:
```typescript
// Success
{
  "success": true,
  "data": { ... },
  "message": "Optional human-readable confirmation"
}

// Error
{
  "success": false,
  "error": "Error message for UI",
  "details": [ ... ]
}
```

---

## 6. Database & CMS Integration Standards

- **Service Layer Decoupling:** UI components must NEVER query the database directly. All queries must flow through `/src/services/*.ts`.
- **RBAC Matrix:** `SUPER_ADMIN`, `TEAM_LEAD`, `CORE_MEMBER`, `PUBLIC_MEMBER`.
- **GDPR Compliance:** No user PII or passwords in logs; automated erasure endpoint; consent tracking.
