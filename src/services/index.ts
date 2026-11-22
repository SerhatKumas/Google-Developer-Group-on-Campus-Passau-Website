import { teamsData, teamMembersData } from "@/data/team";
import { eventsData } from "@/data/events";
import { partnersData, collaborationModels } from "@/data/partners";
import { galleryPhotosData } from "@/data/gallery";
import { initiativesData } from "@/data/initiatives";
import { faqsData } from "@/data/faq";
import { EventItem, GalleryPhoto, Partner, Team, TeamMember } from "@/types";

/**
 * Service layer abstraction designed for seamless transition from
 * local mock data to the upcoming GDG Passau Role-Based Management CMS API.
 */
const IS_REMOTE_API = process.env.DATA_SOURCE === "api" && Boolean(process.env.NEXT_PUBLIC_API_BASE_URL);
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export async function getTeams(): Promise<Team[]> {
  if (IS_REMOTE_API) {
    try {
      const res = await fetch(`${API_BASE}/api/teams`, { next: { revalidate: 60 } });
      if (res.ok) return (await res.json()).data;
    } catch {
      // Fallback to mock data if API is unreachable
    }
  }
  return teamsData.sort((a, b) => a.order - b.order);
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  if (IS_REMOTE_API) {
    try {
      const res = await fetch(`${API_BASE}/api/members`, { next: { revalidate: 60 } });
      if (res.ok) return (await res.json()).data;
    } catch {
      // Fallback
    }
  }
  return teamMembersData.sort((a, b) => a.order - b.order);
}

export async function getTeamsWithMembers(): Promise<{ team: Team; members: TeamMember[] }[]> {
  const [teams, members] = await Promise.all([getTeams(), getTeamMembers()]);
  return teams.map((team) => ({
    team,
    members: members
      .filter((m) => m.teamId === team.id)
      .sort((a, b) => (b.isLead ? 1 : 0) - (a.isLead ? 1 : 0) || a.order - b.order),
  }));
}

export async function getExecutiveLeads(): Promise<TeamMember[]> {
  const members = await getTeamMembers();
  return members.filter((m) => m.isExecutive).sort((a, b) => a.order - b.order);
}

export async function getEvents(): Promise<EventItem[]> {
  if (IS_REMOTE_API) {
    try {
      const res = await fetch(`${API_BASE}/api/events`, { next: { revalidate: 60 } });
      if (res.ok) return (await res.json()).data;
    } catch {
      // Fallback
    }
  }
  return [...eventsData].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );
}

export async function getEventBySlug(slug: string): Promise<EventItem | undefined> {
  const events = await getEvents();
  return events.find((e) => e.slug === slug);
}

export async function getUpcomingEvents(): Promise<EventItem[]> {
  const events = await getEvents();
  return events
    .filter((e) => e.status !== "Completed")
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
}

export async function getPastEvents(): Promise<EventItem[]> {
  const events = await getEvents();
  return events
    .filter((e) => e.status === "Completed")
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
}

export async function getFeaturedEvents(): Promise<EventItem[]> {
  const events = await getEvents();
  return events.filter((e) => e.featured);
}

export async function getPartners(): Promise<Partner[]> {
  if (IS_REMOTE_API) {
    try {
      const res = await fetch(`${API_BASE}/api/partners`, { next: { revalidate: 60 } });
      if (res.ok) return (await res.json()).data;
    } catch {
      // Fallback
    }
  }
  return partnersData;
}

export async function getCollaborationModels() {
  return collaborationModels;
}

export async function getGalleryPhotos(): Promise<GalleryPhoto[]> {
  if (IS_REMOTE_API) {
    try {
      const res = await fetch(`${API_BASE}/api/gallery`, { next: { revalidate: 60 } });
      if (res.ok) return (await res.json()).data;
    } catch {
      // Fallback
    }
  }
  return galleryPhotosData;
}

export async function getInitiatives() {
  return initiativesData;
}

export async function getFaqs() {
  return faqsData;
}
