# Contributing to GDG on Campus Passau

Welcome to the **Google Developer Group (GDG) on Campus Passau** engineering repository! We operate under an **AI-Driven Development (AIDD)** framework where student engineers and autonomous AI agents collaborate to build high-quality software for the University of Passau.

---

## 🚀 Quick Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gdg-on-campus-passau/website.git
   cd website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌿 Git & Branching Rules

- **Branch naming convention:**
  - `feat/<scope>-<description>` (e.g., `feat/events-filter-chips`)
  - `fix/<scope>-<description>` (e.g., `fix/theme-toggle-flicker`)
  - `refactor/<scope>-<description>` (e.g., `refactor/services-layer`)
  - `chore/<scope>-<description>` (e.g., `chore/bump-react-types`)

- **Workflow:**
  1. Branch off `main`:
     ```bash
     git checkout main
     git pull origin main
     git checkout -b feat/my-new-feature
     ```
  2. Implement changes following the [AGENTS.md](./AGENTS.md) rules.
  3. Run validation before committing:
     ```bash
     npm run lint
     npm run build
     ```
  4. Commit with Conventional Commits:
     ```bash
     git commit -m "feat(events): add working ics calendar download"
     ```
  5. Push to your branch and open a PR:
     ```bash
     git push -u origin feat/my-new-feature
     ```

---

## 📝 Commit Messages (Conventional Commits)

Format: `<type>(<scope>): <subject>`

- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`
- Scopes: `home`, `team`, `events`, `partners`, `gallery`, `contact`, `cms`, `api`, `auth`, `db`
- Example: `feat(team): add lead badge and study program to member cards`

---

## 🎨 Frontend Guidelines
- **Framework:** Next.js 16+ (App Router), React 19.
- **Styling:** Tailwind CSS v4 using Google brand tokens (`--google-blue: #4285F4`, `--google-red: #EA4335`, `--google-yellow: #FBBC04`, `--google-green: #34A853`).
- **Icons:** `lucide-react` + custom SVG brand icons in `src/components/ui/BrandIcons.tsx`.
- **Images:** Every `<Image fill>` parent element must be positioned (`relative`, `absolute`, or `fixed`).
- **Dates:** Always format dates with `formatBerlinDateTime(dateStr)` from `src/lib/utils.ts` to prevent hydration mismatches.

---

## 🛡️ Backend & Database Guidelines
- **API Routes:** All API handlers live in `src/app/api/` and validate request bodies with `zod`.
- **Response Format:** Standard envelope `{ success: boolean, data?: T, error?: string }`.
- **CMS Ready:** Never call databases directly from UI components. Always use the service layer `src/services/`.
- **GDPR:** Strict compliance with EU DSGVO (no unencrypted PII, right to erasure support).

---

## 🤖 AI-Driven Development (AIDD)
If you are developing with an AI assistant (Cursor, Antigravity, Claude Code):
- Make sure your assistant reads `AGENTS.md` before generating code.
- Ensure the AI never modifies the Next.js block at the top of `AGENTS.md`.
- Review every line of AI-generated code before submitting your PR.
