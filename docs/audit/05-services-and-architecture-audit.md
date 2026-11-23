# Audit Module 05: Decoupled Architecture & Services Layer

> **Agent Instruction:** You are acting as the Systems Architecture Auditor. Inspect the codebase to verify strict decoupling between the UI component layer and the backend/services layer.

---

## 🎯 Audit Objectives
1. Ensure UI components (`src/components/`, `src/app/`) **never query databases or execute raw SQL directly**.
2. Confirm that all data fetching operations route through async service functions in `src/services/`.
3. Verify that all API route handlers (`src/app/api/**/route.ts`) validate incoming payloads with **Zod schemas**.

---

## 🔍 Step-by-Step Inspection Checklist for the Agent

### Step 1: Prohibited Database Imports in UI Components
Run search across `src/components/` and `src/app/`:
- Check for direct imports of database drivers or ORMs:
  - `sqlite`, `sqlite3`, `better-sqlite3`
  - `pg`, `postgres`, `mysql`, `mysql2`
  - `prisma`, `@prisma/client`, `drizzle-orm`
  - `mongoose`, `mongodb`
- **Pass Criteria:** Zero database driver imports in `src/components/` or `src/app/`.
- **Fail Criteria:** Any component importing a database driver directly.

### Step 2: Service Layer Routing
Inspect `src/services/index.ts`:
- Verify that standard queries (`getEvents`, `getEventBySlug`, `getUpcomingEvents`, `getTeamsWithMembers`, `getPartners`, `getGalleryPhotos`) exist as typed async functions.
- Verify that components consume these service functions rather than raw mock arrays or inline fetches.

### Step 3: API Input Validation with Zod
Inspect all API route handlers in `src/app/api/`:
- `src/app/api/contact/route.ts`: Uses `zod` schema to parse `body`.
- `src/app/api/partners/inquire/route.ts`: Uses `zod` schema to parse `body`.
- **Pass Criteria:** Every endpoint validates request data and returns standard JSON envelopes (`{ success: true, data: ... }` or `{ error: ... }`).

---

## 📝 Expected Audit Output Format
- **Service Decoupling:** `[pass/fail]`
- **Direct DB Import Check:** `[pass/fail]`
- **Zod API Validation:** `[pass/fail]`
