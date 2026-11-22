import { Metadata } from "next";
import { getExecutiveLeads, getTeamsWithMembers } from "@/services";
import { TeamView } from "@/components/team/TeamView";
import { Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Core Leadership & Teams",
  description:
    "Meet the voluntary student leadership team powering GDG on Campus Passau across Technical & Software, Events, Marketing, and Legal Operations.",
};

export const revalidate = 60;

export default async function TeamPage() {
  const [executiveLeads, teamsWithMembers] = await Promise.all([
    getExecutiveLeads(),
    getTeamsWithMembers(),
  ]);

  return (
    <div className="py-12 sm:py-18 bg-white dark:bg-[#121316]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-[#4285F4] dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Voluntary Student Leadership</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
            Meet the Team Behind GDG Passau
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed">
            Passionate students across Computer Science, AI Engineering, Technical Law, and Business 
            driving Bavaria&apos;s premier interdisciplinary student developer community.
          </p>
        </div>

        {/* Dynamic Filterable Team View */}
        <TeamView
          executiveLeads={executiveLeads}
          teamsWithMembers={teamsWithMembers}
        />
      </div>
    </div>
  );
}
