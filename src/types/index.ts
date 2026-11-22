export interface SocialLinks {
  linkedin: string;
  instagram: string;
  github?: string;
  website?: string;
}

export type TeamId =
  | "executive"
  | "tech"
  | "events"
  | "marketing"
  | "community-law";

export interface Team {
  id: TeamId;
  slug: string;
  name: string;
  description: string;
  accentColor: string; // Google brand token
  order: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  isLead: boolean;
  isExecutive: boolean;
  teamId: TeamId;
  major?: string;
  bio?: string;
  photoUrl: string;
  socials: SocialLinks;
  order: number;
}

export type EventCategory =
  | "Workshops & Peer Training"
  | "Hackathons & Startups"
  | "Social & Mixers"
  | "Career & Industry"
  | "AI & Tech-Law";

export type EventStatus =
  | "Open for Registration"
  | "Spots Limited"
  | "Completed";

export interface EventSpeaker {
  name: string;
  role: string;
  organization?: string;
  avatarUrl?: string;
  linkedinUrl?: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  description?: string;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: EventCategory;
  status: EventStatus;
  startDate: string; // ISO 8601 string
  endDate: string; // ISO 8601 string
  location: string;
  room?: string;
  coverImage: string;
  galleryImages?: string[];
  registrationUrl?: string;
  speakers?: EventSpeaker[];
  agenda?: AgendaItem[];
  prerequisites?: string[];
  featured?: boolean;
}

export type PartnerType = "company" | "student_group" | "university";

export interface Partner {
  id: string;
  name: string;
  type: PartnerType;
  logoUrl: string;
  description: string;
  websiteUrl: string;
  collaborationType: string;
  tier?: "Platinum" | "Gold" | "Academic" | "Community";
  featured?: boolean;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: "Hackathons" | "Workshops" | "Social Mixers" | "Tech Trips" | "Team Moments";
  date: string;
  eventSlug?: string;
  aspectRatio?: "landscape" | "portrait" | "square";
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
