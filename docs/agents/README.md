# AI Agent Master Directory — GDG on Campus Passau

This directory contains the master configuration and instructions for the 4 primary AI coding agents used by the GDG on Campus Passau team.

## Files:
- **`AGENTS.md`**: Master instructions for Google Antigravity and general LLM agent orchestrators.
- **`CLAUDE.md`**: Master instructions for Anthropic's Claude Code CLI and Claude Desktop.
- **`CURSORRULES.md`**: Master instructions for Cursor IDE and Windsurf.
- **`COPILOT.md`**: Master instructions for GitHub Copilot Chat & Copilot Workspace.

## Why are there pointer files in the project root?
AI coding tools look for their configuration files in hardcoded root paths:
- Next.js and Antigravity look for `AGENTS.md` at project root (if deleted, `next dev` will automatically recreate `AGENTS.md`).
- Claude Code looks for `CLAUDE.md` in the current working directory.
- Cursor looks for `.cursorrules` at project root.
- GitHub Copilot looks for `.github/copilot-instructions.md`.

To keep the repository clean while maintaining 100% agent compatibility, the root files act as lightweight pointers directing the agents to read the master documentation in this folder and in `docs/rules/`.
