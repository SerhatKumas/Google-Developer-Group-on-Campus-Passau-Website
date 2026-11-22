"use client";

import { useState } from "react";
import Link from "next/link";
import { Team, TeamMember } from "@/types";
import { MemberCard } from "@/components/cards/MemberCard";
import { Sparkles, Users, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamViewProps {
  executiveLeads: TeamMember[];
  teamsWithMembers: { team: Team; members: TeamMember[] }[];
}

export function TeamView({ executiveLeads, teamsWithMembers }: TeamViewProps) {
  // Exclude executive team from the 4 sub-teams tabs
  const coreTeamsWithMembers = teamsWithMembers.filter((item) => item.team.id !== "executive");

  const [activeTab, setActiveTab] = useState<string>("all");

  const visibleTeams =
    activeTab === "all"
      ? coreTeamsWithMembers
      : coreTeamsWithMembers.filter((item) => item.team.id === activeTab);

  return (
    <div className="space-y-16 sm:space-y-20">
      {/* 1. Executive Leadership Tier (Featured Top Tier) */}
      <section>
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-[#4285F4] dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Executive Board</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
            Executive Leadership
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6]">
            Guiding overall strategy, university administration alignment, and interdisciplinary collaboration across faculties.
          </p>
        </div>

        {/* 2 Executive Leads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {executiveLeads.map((exec) => (
            <MemberCard
              key={exec.id}
              member={exec}
              accentColor="#4285F4"
              isFeatured={true}
            />
          ))}
        </div>
      </section>

      {/* 2. Interactive Core Teams Filter Tabs */}
      <section className="space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8EAED] dark:border-[#2D2F34] pb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
              Core Leadership Teams
            </h2>
            <p className="text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6]">
              Browse the 4 specialized squads driving our tech, events, marketing, and community operations.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveTab("all")}
              type="button"
              className={cn(
                "px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap",
                activeTab === "all"
                  ? "bg-[#4285F4] text-white shadow-xs"
                  : "bg-neutral-100 dark:bg-neutral-800 text-[#5F6368] dark:text-[#9AA0A6] hover:text-[#202124] dark:hover:text-white"
              )}
            >
              All Teams ({coreTeamsWithMembers.reduce((acc, curr) => acc + curr.members.length, 0)})
            </button>
            {coreTeamsWithMembers.map((item) => (
              <button
                key={item.team.id}
                onClick={() => setActiveTab(item.team.id)}
                type="button"
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap",
                  activeTab === item.team.id
                    ? "text-white shadow-xs"
                    : "bg-neutral-100 dark:bg-neutral-800 text-[#5F6368] dark:text-[#9AA0A6] hover:text-[#202124] dark:hover:text-white"
                )}
                style={{
                  backgroundColor: activeTab === item.team.id ? item.team.accentColor : undefined,
                }}
              >
                {item.team.name}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Render Each Active Core Team */}
        <div className="space-y-14">
          {visibleTeams.map(({ team, members }) => {
            const teamLead = members.find((m) => m.isLead);
            const teamRegularMembers = members.filter((m) => !m.isLead);

            return (
              <div
                key={team.id}
                className="rounded-3xl bg-[#F8F9FA]/70 dark:bg-[#1E1F23]/50 border border-[#E8EAED] dark:border-[#2D2F34] p-6 sm:p-8 space-y-6"
              >
                {/* Team Header Strip */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#E8EAED] dark:border-[#2D2F34] pb-5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: team.accentColor }}
                      />
                      <h3 className="text-xl sm:text-2xl font-bold text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
                        {team.name}
                      </h3>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white dark:bg-neutral-800 border border-[#E8EAED] dark:border-[#2D2F34] text-neutral-500">
                        {members.length} members
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6]">
                      {team.description}
                    </p>
                  </div>
                </div>

                {/* Team Members Grid - Team Lead clearly highlighted first */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {teamLead && (
                    <MemberCard
                      member={teamLead}
                      accentColor={team.accentColor}
                      isFeatured={true}
                    />
                  )}
                  {teamRegularMembers.map((member) => (
                    <MemberCard
                      key={member.id}
                      member={member}
                      accentColor={team.accentColor}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Join the Team CTA Banner */}
      <section className="rounded-3xl bg-neutral-100 dark:bg-[#1E1F23] border border-[#E8EAED] dark:border-[#2D2F34] p-8 sm:p-12 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-[#4285F4] flex items-center justify-center mx-auto">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
            Want to Join One of Our Core Teams?
          </h3>
          <p className="text-sm text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed">
            Whether you want to build web tools, manage corporate partnerships, create reels, or consult on GDPR compliance—we recruit motivated Passau students every semester.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?intent=team"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#4285F4] hover:bg-[#1A73E8] shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Apply for a Core Team Role</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
