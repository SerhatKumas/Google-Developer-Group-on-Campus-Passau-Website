# Google Developer Group (GDG) on Campus Passau — Official Chapter Website

> **Innovate. Bridge. Build.**  
> *The Premier Technical & Interdisciplinary Network at the University of Passau.*

## 📌 Repository Description

This repository houses the official, production-grade, photo-rich web application for **Google Developer Group (GDG) on Campus Passau** — a voluntary, student-led technical and interdisciplinary chapter at the **University of Passau, Germany**.

The platform is purpose-built to centralize technical talent across **Computer Science**, **AI Engineering**, and **Technical Law**, serving as an interactive digital hub for chapter events, peer-to-peer mentorship programs, hackathons, and corporate partnerships.

> 🔒 **Proprietary & Exclusive Notice:**  
> This codebase, design system, and all associated digital assets are **strictly proprietary** to Google Developer Group on Campus Passau. Unauthorized copying, cloning, public deployment, redistribution, or claiming of this website by any third party is **strictly prohibited**. See [`LICENSE`](./LICENSE) for full legal terms.

---

## 🚀 Tech Stack

- **Framework:** Next.js 16+ (App Router with Turbopack & React 19)
- **Language:** TypeScript (Strict mode enabled, zero `any` types)
- **Styling:** Tailwind CSS v4 with Google brand color tokens (`#4285F4`, `#EA4335`, `#FBBC04`, `#34A853`)
- **Theme:** Accessible Light/Dark mode with automatic system detection & localStorage persistence
- **Icons:** `lucide-react` + Crisp custom SVGs (Google, LinkedIn, Instagram, WhatsApp, GitHub)
- **Forms & Validation:** `react-hook-form` + `zod`
- **Calendar Generator:** Direct Google Calendar links & downloadable `.ics` iCalendar files
- **Image Optimization:** `next/image` with responsive `sizes` and organized `/public/images/` structure

---

## 📁 Multi-Page Sitemap

1. **Home (`/`):**
   - Hero section with bold *"Innovate. Bridge. Build."* typography, dual CTAs, and dynamic bento photo collage.
   - Community impact metric strip (250+ Active Members, 18+ Events, 4 Core Teams, 12+ Partners).
   - 6 Core Pillars 6-card bento grid.
   - Featured Upcoming Events preview with calendar integration.
   - Community Moments photo strip.
   - Current Initiatives spotlight (Chapter CMS, Student Tech Chronicle, LegalTech Sandbox, Open Source Incubator).
   - Partner Logos strip & interactive FAQ accordion.

2. **Team (`/team`):**
   - **Executive Leadership (Featured Top Tier):** GDG on Campus Lead & Vice Lead with portrait photos, bios, role badges, study programs, and mandatory LinkedIn & Instagram buttons.
   - **4 Active Core Teams:** Technical & Software, Events & Partnerships, Social Media & Marketing, and Community, Law & Operations.
   - Interactive team filter tabs (*All Teams* + each core team).
   - **Every single member** displays photo/avatar, full name, role badge, study program, and direct LinkedIn & Instagram buttons.

3. **Events (`/events` & `/events/[slug]`):**
   - Upcoming vs. Past events switcher tabs.
   - Category filter chips (`All`, `Workshops & Peer Training`, `Hackathons & Startups`, `Social & Mixers`, `Career & Industry`, `AI & Tech-Law`) and live search.
   - Event cards with cover photos, Europe/Berlin formatted dates, location badges, RSVP links, and "Add to Calendar" (Google Calendar & `.ics` download).
   - Detailed event pages (`/events/[slug]`) with agendas, speakers, prerequisites, and photo recaps.

4. **Partners & Companies (`/partners`):**
   - Collaboration pitch highlighting University of Passau CS, AI Engineering, and Technical Law talent.
   - Two showcase sections: Partner Companies & Industry Sponsors (Google for Developers, ONE LOGIC, msg systems, iteratec) and Campus Initiatives (FMI, Fachschaft, LegalTech Lab, Enactus).
   - Collaboration models grid & validated **"Partner With Us"** inquiry form connected to `/api/partners/inquire`.

5. **Community Gallery (`/gallery`):**
   - Responsive category-filtered photo grid across *Hackathons*, *Workshops*, *Social Mixers*, *Tech Trips*, and *Team Moments*.
   - Keyboard-accessible **Lightbox Modal** (`Esc` to close, Left/Right arrow navigation, captions, date, and event links).

6. **Contact & Hub (`/contact`):**
   - Direct community channel cards: WhatsApp Community Group (distinct green accent), Official Google Bevy chapter page, Instagram (`@gdgpassau`), LinkedIn, GitHub, and email with one-click **"Copy Email"** button.
   - Interactive 3-category contact form (General Inquiry, Join a Core Team, Propose a Talk) connected to `/api/contact`.
   - University of Passau campus location card with directions.

7. **Legal Notice (`/impressum`) & GDPR Privacy Policy (`/privacy`):**
   - Compliant German § 5 TMG Impressum and EU GDPR Datenschutzerklärung.

---

## 🛠️ Getting Started

### 1. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 2. Run Local Development Server
\`\`\`bash
npm run dev
\`\`\`
Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Lint
\`\`\`bash
npm run lint
npm run build
npm run start
\`\`\`

---

## 🔌 Future Backend / CMS Readiness

The data architecture is structured so that transitioning from local mock datasets to the planned **GDG Passau Role-Based Management CMS** (REST API, Supabase, Firebase, or PostgreSQL) requires **zero UI refactoring**:

- **Repository Layer:** All components query data exclusively via `/src/services/index.ts`.
- **Environment Switching:** Set `DATA_SOURCE=api` and configure `NEXT_PUBLIC_API_BASE_URL` in `.env` to pull live data from your backend.
- **Strict Domain Models:** Defined in `/src/types/index.ts` with strict TypeScript types for all entities.
- **Centralized Links & Config:** Edit `/src/config/site.ts` to update social links, WhatsApp URLs, or contact addresses across the entire website instantly.

---

## ⚖️ License & Intellectual Property

**Copyright &copy; 2026 Google Developer Group (GDG) on Campus Passau. All Rights Reserved.**

This repository and all associated website code, layouts, animations, visual designs, assets, and documentation are **proprietary** to the **Google Developer Group on Campus Passau** voluntary student organization at the **University of Passau, Germany**.

- **Exclusive Permitted Use:** Only active leads, core team members, and authorized organizers of GDG on Campus Passau may modify, execute, and maintain this codebase for the chapter's official web presence.
- **Prohibitions:** Third parties, other student chapters, commercial entities, or individuals are **strictly prohibited** from copying, cloning, distributing, re-hosting, claiming authorship, or creating derivative works of this application.
- For complete terms and legal provisions, please review the full [**`LICENSE`**](./LICENSE) file.
