## Pull Request Description

### 1. Summary of Changes
<!-- Provide a clear, concise overview of what this PR does and why. -->

### 2. Type of Change
<!-- Mark the relevant option(s) with an "x". -->
- [ ] `feat`: New feature / page / component
- [ ] `fix`: Bug fix
- [ ] `refactor`: Code refactoring without behavioral changes
- [ ] `style`: UI / design token adjustment
- [ ] `perf`: Performance improvement
- [ ] `db`: Database schema / migration update
- [ ] `api`: Backend endpoint update
- [ ] `docs`: Documentation updates

### 3. Affected Scope
<!-- E.g., home, team, events, partners, gallery, contact, cms, api -->
- **Scope:** 

### 4. Verification & Testing
<!-- Detail the steps you took to verify these changes. -->
- [ ] Ran `npm run lint` — 0 errors, 0 warnings
- [ ] Ran `npm run build` — compiled cleanly with Turbopack
- [ ] Tested responsive layout (Mobile 375px, Tablet 768px, Desktop 1280px+)
- [ ] Tested in both Light mode and Dark mode
- [ ] Verified accessibility: buttons have `aria-label`, images have `alt`

### 5. Mandatory Checks for Specific Features
- [ ] **Team Page / Member Cards:** Verified every member card includes LinkedIn and Instagram buttons with `rel="noopener noreferrer"`.
- [ ] **Next.js Images:** Verified parent containers of `<Image fill ... />` have `position: relative` or `relative` class.
- [ ] **Dates & Localization:** Verified dates use `formatBerlinDateTime()` without triggering client/server hydration errors.
- [ ] **GDPR / Privacy:** No user PII or credentials are logged or exposed.

### 6. AI-Driven Development (AIDD) Disclosure
- **AI Tool Used:** (e.g. Antigravity / Claude Code / Cursor / GitHub Copilot / Manual)
- **Prompt Summary:** 
<!-- Brief 1-2 sentence description of what the AI was directed to accomplish -->
