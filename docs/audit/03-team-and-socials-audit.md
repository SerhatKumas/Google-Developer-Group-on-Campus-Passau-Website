# Audit Module 03: Team Member Cards & Social Links Protocol

> **Agent Instruction:** You are acting as the Community & Representation Auditor. Verify that all team members are completely represented and have verified social links.

---

## 🎯 Audit Objectives
1. Verify that **every member card on `/team`** includes required fields: Photo, Name, Role badge, and Major.
2. Ensure that **every single member card** renders active **LinkedIn** and **Instagram** buttons.
3. Confirm that all external social links contain `rel="noopener noreferrer"` and `target="_blank"`.

---

## 🔍 Step-by-Step Inspection Checklist for the Agent

### Step 1: Member Data Completeness (`src/data/team.ts`)
Inspect `teamMembersData` in `src/data/team.ts`:
- Check that each member object has:
  - `id`: Non-empty string
  - `name`: Full real name (e.g. "Serhat Kumaş", "Elena Weber")
  - `role`: Official title / squad role
  - `major`: Academic program at University of Passau
  - `photoUrl`: Valid photo or avatar image URL
  - `socials.linkedin`: Valid URL starting with `https://www.linkedin.com/` or `https://linkedin.com/`
  - `socials.instagram`: Valid URL starting with `https://www.instagram.com/` or `https://instagram.com/`
- **Fail Criteria:** Missing `linkedin` or `instagram` URLs, or generic placeholders like `"#"`.

### Step 2: MemberCard Component Protocol (`src/components/cards/MemberCard.tsx`)
Inspect `src/components/cards/MemberCard.tsx`:
- Look at the social button links:
  - Must render `<LinkedInIcon />` link with `href={member.socials.linkedin}`
  - Must render `<InstagramIcon />` link with `href={member.socials.instagram}`
  - Must have `target="_blank"` and `rel="noopener noreferrer"`.
  - Must include accessible `aria-label` (e.g. `${member.name} on LinkedIn`).

---

## 📝 Expected Audit Output Format
- **Data File Completeness (`team.ts`):** `[pass/fail]` (Total members verified)
- **Component Button Protocol (`MemberCard.tsx`):** `[pass/fail]`
- **Security Attributes (`rel="noopener noreferrer"`):** `[pass/fail]`
