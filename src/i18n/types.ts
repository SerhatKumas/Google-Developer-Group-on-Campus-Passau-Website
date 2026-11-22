export type Locale = "en" | "de";

export interface Translations {
  nav: {
    home: string;
    team: string;
    events: string;
    partners: string;
    gallery: string;
    contact: string;
    joinUs: string;
    memberDashboard: string;
    joinCommunity: string;
    joinWhatsApp: string;
    officialBevy: string;
    campusTag: string;
  };
  hero: {
    chapterTagline: string;
    subtitle: string;
    innovate: string;
    bridge: string;
    build: string;
    leadDescription: {
      part1: string;
      cs: string;
      ai: string;
      law: string;
      part2: string;
    };
    joinCta: string;
    exploreEventsCta: string;
    memberCount: string;
    memberCountSub: string;
    scrollToExplore: string;
    bentoHackathonTag: string;
    bentoHackathonTitle: string;
    bentoHackathonSub: string;
    bentoMentorshipTag: string;
    bentoMentorshipTitle: string;
    bentoMentorshipSub: string;
  };
  stats: {
    activeMembers: string;
    events: string;
    coreTeams: string;
    partners: string;
  };
  pillars: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    items: {
      id: string;
      title: string;
      tagline: string;
      description: string;
    }[];
  };
  featuredEvents: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    viewAllCta: string;
    noUpcoming: string;
  };
  communityMoments: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    viewGalleryCta: string;
  };
  initiatives: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    statusActive: string;
    statusBeta: string;
    viewProject: string;
  };
  partners: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    partnerWithUsCta: string;
  };
  faq: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    ctaBoxTitle: string;
    ctaBoxSubtitle: string;
    ctaBoxButton: string;
    ctaBoxContact: string;
  };
  footer: {
    description: string;
    navigationHeader: string;
    initiativesHeader: string;
    hubHeader: string;
    legalHeader: string;
    rightsReserved: string;
    studentNotice: string;
    privacy: string;
    impressum: string;
    contact: string;
  };
}
