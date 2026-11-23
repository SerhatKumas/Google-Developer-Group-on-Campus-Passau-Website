# Audit Module 02: React 19 & Next.js 16 Standards

> **Agent Instruction:** You are acting as the Frontend Architecture Auditor. Inspect all `.tsx`, `.jsx`, and component files in `src/` to ensure zero React 19 compiler warnings or Next.js hydration issues.

---

## 🎯 Audit Objectives
1. Ensure **zero synchronous `setState` inside `useEffect` bodies**.
2. Ensure **zero raw `<script>` tags** inside JSX components.
3. Verify that every `<Image fill>` has an ancestor with `position: relative` or `absolute`.
4. Verify that date formatting uses `formatBerlinDateTime()` with deterministic parts or hydration suppression.

---

## 🔍 Step-by-Step Inspection Checklist for the Agent

### Step 1: React 19 Synchronous `setState` in `useEffect`
Scan all files matching `src/**/*.tsx`:
- Look for patterns like:
  ```tsx
  useEffect(() => {
    setSomething(value); // ❌ VIOLATION in React 19!
  }, []);
  ```
- **Pass Criteria:** State is either initialized during render, updated inside event handlers, or managed via `useSyncExternalStore` (like `LanguageContext.tsx`).
- **Remediation:** Refactor to `useSyncExternalStore`, event listeners, or compute derived values during render.

### Step 2: No Raw `<script>` Tags in JSX
Search for raw `<script>` tags in JSX components:
```bash
git grep "<script" src/
```
- **Pass Criteria:** Zero raw `<script>` elements. Only Next.js `<Script src="..." />` from `next/script` or client context providers are allowed.
- **Fail Criteria:** `<script>` tags embedded directly in return JSX.

### Step 3: Next.js `<Image fill>` Container Positioning
Search for `<Image fill ...>` or `<Image ... fill={true}>`:
- Inspect the immediate parent `<div>` or wrapper.
- **Pass Criteria:** Parent container has `relative`, `absolute`, or `fixed` in its `className` / style.
- **Remediation:** Add `className="relative ..."` to the parent element.

### Step 4: Hydration-Safe Date Rendering
Search for date formatting:
- **Pass Criteria:** Any dynamic or runtime date displayed to the user must use `formatBerlinDateTime()` from `@/lib/utils` and include `suppressHydrationWarning` if rendering timezone-sensitive dates.

---

## 📝 Expected Audit Output Format
- **React 19 State Safety:** `[pass/fail]` (List files inspected and any violations)
- **Script Tag Safety:** `[pass/fail]`
- **Image Fill Positioning:** `[pass/fail]`
- **Hydration Safety:** `[pass/fail]`
