# Audit Module 04: Multi-Language (i18n) Parity & Completeness

> **Agent Instruction:** You are acting as the Internationalization (i18n) Auditor. Inspect the translation dictionaries and UI components to verify 100% bilingual parity between English and German.

---

## 🎯 Audit Objectives
1. Verify **100% key parity** between `src/i18n/translations/en.ts` and `src/i18n/translations/de.ts`.
2. Ensure there are **no empty strings**, `undefined`, or unpopulated fields in either language dictionary.
3. Verify that interactive components on the website (Navbar, Hero, FAQ, Initiatives, Partners, Event Cards, Footer) actually consume `t` from `useLanguage()`.

---

## 🔍 Step-by-Step Inspection Checklist for the Agent

### Step 1: Dictionary Key Parity
Inspect `src/i18n/types.ts`, `src/i18n/translations/en.ts`, and `src/i18n/translations/de.ts`:
- Check that every key declared in `Translations` interface exists in both `en` and `de`.
- Compare keys recursively:
  - `nav`: all 12 items matching
  - `hero`: all headline, subtitle, leadDescription, bento tags matching
  - `stats`: activeMembers, events, coreTeams, partners matching
  - `pillars`: all 6 pillar titles, taglines, descriptions matching
  - `events`: statusOpen, statusLimited, statusCompleted, viewDetails, viewRecap, calendar labels
  - `initiatives`: all 4 initiatives titles, taglines, descriptions, and linkTexts matching
  - `partners`: marqueeTag, marqueeTitle, partnerWithUsCta matching
  - `faq`: all 6 FAQ questions and answers matching
  - `footer`: description, campusSub, builtWithPassion, initiatives matching
- **Pass Criteria:** Zero missing keys in either language.
- **Fail Criteria:** Any key missing or untranslated.

### Step 2: Component Localization Coverage
Inspect the core UI components:
- `Navbar.tsx`: Uses `t.nav.*`
- `HeroEntrance.tsx`: Uses `t.hero.*`
- `PillarsGrid.tsx`: Uses `t.pillars.items`
- `FeaturedEventsSection.tsx`: Uses `t.featuredEvents.*`
- `CommunityMoments.tsx`: Uses `t.communityMoments.*`
- `InitiativesSpotlight.tsx`: Uses `t.initiatives.items`
- `PartnersMarquee.tsx`: Uses `t.partners.*`
- `FaqAccordion.tsx`: Uses `t.faq.items`
- `Footer.tsx`: Uses `t.footer.*`
- `EventCard.tsx`: Uses `t.events.*`

---

## 📝 Expected Audit Output Format
- **Key Parity (EN vs DE):** `[pass/fail]` (Report total keys and missing keys if any)
- **Empty Strings Check:** `[pass/fail]`
- **Component Coverage:** `[pass/fail]`
