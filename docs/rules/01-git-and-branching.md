# Rule 01: Git Workflow & Branching Strategy

## 1. Absolute Prohibition: Never Develop on `main`
**Direct development, direct commits, and direct pushes on the `main` branch are strictly prohibited for both human engineers and AI agents.**
Every agent must create and switch to an isolated, scoped branch (`feat/<name>`, `fix/<name>`, `refactor/<name>`, `chore/<name>`) before creating or editing any files.

```bash
# Mandatory first step for every agent before any code modification:
git checkout -b feat/your-feature-name
```

## 2. Branch Naming Conventions
All development must occur on isolated, scoped branches:

| Branch Type | Prefix | Format | Example | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Feature** | `feat/` | `feat/<scope>-<description>` | `feat/events-rsvp-flow` | New pages, components, features |
| **Bugfix** | `fix/` | `fix/<scope>-<description>` | `fix/mobile-nav-overflow` | Bug fixes and patches |
| **Refactor** | `refactor/` | `refactor/<scope>-<description>` | `refactor/services-layer` | Code improvements without behavior changes |
| **Chore / Setup** | `chore/` | `chore/<scope>-<description>` | `chore/upgrade-deps` | Tooling, dependencies, config |
| **Docs** | `docs/` | `docs/<scope>-<description>` | `docs/api-readme` | Documentation and guidelines |

### Rules for Branch Names:
- Always lowercase.
- Use hyphens (`-`) instead of spaces or underscores.
- Keep branch names concise (under 40 characters).
- Example: `git checkout -b feat/cms-role-matrix`

---

## 2. Git Hygiene & Workflow Rules

1. **Rebase Before PR:** Always rebase your feature branch onto upstream `main` before submitting a PR:
   ```bash
   git fetch origin
   git rebase origin/main
   ```
2. **Atomic Commits:** One feature or fix per pull request. Do not mix unrelated refactoring with feature code.
3. **Secrets Prevention:** Never commit `.env.local`, credentials, API keys, or private certificates. Verify `.gitignore` before committing.
4. **Clean Tree:** Delete remote branches immediately after merging.
