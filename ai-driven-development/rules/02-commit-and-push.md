# Rule 02: Commit Messages & Pull Request Standards

## 1. Conventional Commits (v1.0.0)

All commit messages from human developers and AI agents **MUST** follow this specification:

### 1.1 Format
```text
<type>(<scope>): <short imperative summary>

[optional detailed body explaining why and what changed]

[optional footer(s): Breaking Changes, Closes #123]
```

### 1.2 Allowed Types
- `feat`: A new user-facing feature or enhancement.
- `fix`: A bug fix.
- `refactor`: Code change that neither fixes a bug nor adds a feature.
- `style`: Formatting, semicolons, whitespace (no code logic change).
- `perf`: Code change that improves performance.
- `test`: Adding missing tests or correcting existing tests.
- `build`: Changes affecting build system or external dependencies.
- `ci`: Changes to CI configuration files and scripts.
- `chore`: Maintenance tasks, repo config, auxiliary tools.
- `docs`: Documentation only changes.

### 1.3 Recognized Scopes
`home` | `team` | `events` | `partners` | `gallery` | `contact` | `ui` | `cms` | `auth` | `db` | `api` | `design-system`

### 1.4 Good vs. Bad Commit Examples
- ✅ `feat(events): add working Google Calendar and .ics generator`
- ✅ `fix(ui): resolve hydration mismatch on Europe/Berlin date formatting`
- ✅ `refactor(services): introduce DataProvider abstraction for upcoming CMS API`
- ❌ `fixed things` (Vague, missing type and scope)
- ❌ `WIP` (Never commit WIP to shared branches)
- ❌ `added stuff to events page` (Non-imperative, non-standard)

---

## 2. Pull Request (PR) Gate

Before opening any PR, run:
```bash
npm run lint && npm run build
```
Both commands must exit with code `0`. If any error or warning is reported, fix it before pushing.
Every PR must fill out `.github/pull_request_template.md`.
