export interface Initiative {
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: "Active" | "Beta" | "Planning";
  badgeColor: string;
  githubUrl?: string;
  linkText?: string;
  icon: string;
}

export const initiativesData: Initiative[] = [
  {
    id: "internal-cms",
    title: "Chapter Management CMS & Portal",
    tagline: "Role-Based Operating System for GDG Passau",
    description:
      "A Next.js & TypeScript internal platform streamlining member check-ins, event RSVP queues, speaker logistics, and digital certificate generation.",
    status: "Active",
    badgeColor: "#4285F4", // Blue
    githubUrl: "https://github.com/gdg-on-campus-passau",
    linkText: "View Open Repository",
    icon: "LayoutDashboard",
  },
  {
    id: "tech-newspaper",
    title: "Passau Student Tech Chronicle",
    tagline: "Bi-Monthly Student Engineering Blog",
    description:
      "Curated publication featuring deep dives from university students into AI papers, EU AI Act interpretations, web architecture breakdowns, and campus project post-mortems.",
    status: "Active",
    badgeColor: "#EA4335", // Red
    linkText: "Read Latest Edition",
    icon: "BookOpen",
  },
  {
    id: "legaltech-sandbox",
    title: "LegalTech & GDPR Sandbox",
    tagline: "Compliance-First Architecture Starter Kits",
    description:
      "Open-source starter templates for Bavarian student founders ensuring their databases, auth flows, and LLM telemetry strictly satisfy GDPR and the EU AI Act by default.",
    status: "Beta",
    badgeColor: "#34A853", // Green
    githubUrl: "https://github.com/gdg-on-campus-passau",
    linkText: "Explore Templates",
    icon: "ShieldCheck",
  },
  {
    id: "open-source-incubator",
    title: "Three-River Open Source Incubator",
    tagline: "Ship Deployable Code for the Passau Community",
    description:
      "Connecting local NGOs, student initiatives, and university faculty with student engineering squads to build and maintain open-source public goods.",
    status: "Planning",
    badgeColor: "#FBBC04", // Yellow
    linkText: "Propose a Project",
    icon: "GitBranch",
  },
];
