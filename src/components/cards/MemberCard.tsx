"use client";

import { useState } from "react";
import Image from "next/image";
import { TeamMember } from "@/types";
import { LinkedInIcon, InstagramIcon, GitHubIcon } from "@/components/ui/BrandIcons";
import { Globe, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

interface MemberCardProps {
  member: TeamMember;
  accentColor?: string;
  isFeatured?: boolean;
}

export function MemberCard({
  member,
  accentColor = "#4285F4",
  isFeatured = false,
}: MemberCardProps) {
  const [imageError, setImageError] = useState(false);

  // Compute initials fallback
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-[#1E1F23] border border-[#E8EAED] dark:border-[#2D2F34] p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        isFeatured
          ? "ring-2 ring-blue-500/20 dark:ring-blue-400/20 shadow-md"
          : "shadow-xs"
      )}
    >
      {/* Top Accent Strip indicator */}
      <div
        className="absolute top-0 left-6 right-6 h-1 rounded-b-full transition-opacity opacity-75 group-hover:opacity-100"
        style={{ backgroundColor: accentColor }}
      />

      <div>
        {/* Photo and Badges Header */}
        <div className="flex items-start justify-between gap-4 mb-4 pt-1">
          <div className="relative">
            <div
              className={cn(
                "relative rounded-2xl overflow-hidden border-2 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 shadow-xs",
                isFeatured ? "w-20 h-20 sm:w-24 sm:h-24" : "w-16 h-16 sm:w-20 sm:h-20"
              )}
              style={{ borderColor: member.isLead ? accentColor : "#E8EAED" }}
            >
              {!imageError && member.photoUrl ? (
                <Image
                  src={member.photoUrl}
                  alt={`Photo of ${member.name}`}
                  fill
                  sizes="(max-width: 640px) 80px, 96px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={() => setImageError(true)}
                />
              ) : (
                <span
                  className="font-bold text-lg text-neutral-600 dark:text-neutral-300"
                  style={{ color: accentColor }}
                >
                  {initials}
                </span>
              )}
            </div>

            {member.isLead && (
              <span
                className="absolute -bottom-2 -right-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white shadow-xs"
                style={{ backgroundColor: accentColor }}
              >
                Lead
              </span>
            )}
          </div>

          {/* Social Links on Top Right */}
          <div className="flex items-center gap-1.5">
            {/* LinkedIn Button - MANDATORY */}
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name}'s LinkedIn profile`}
              title={`${member.name}'s LinkedIn`}
              className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-[#4285F4] dark:hover:text-[#4285F4] hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-[#E8EAED] dark:border-[#2D2F34] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <LinkedInIcon size={14} />
            </a>

            {/* Instagram Button - MANDATORY */}
            <a
              href={member.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name}'s Instagram profile`}
              title={`${member.name}'s Instagram`}
              className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-[#EA4335] dark:hover:text-[#EA4335] hover:bg-red-50 dark:hover:bg-red-950/40 border border-[#E8EAED] dark:border-[#2D2F34] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <InstagramIcon size={14} />
            </a>

            {/* Optional GitHub Button */}
            {member.socials.github && (
              <a
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name}'s GitHub profile`}
                title={`${member.name}'s GitHub`}
                className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-[#E8EAED] dark:border-[#2D2F34] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
              >
                <GitHubIcon size={14} />
              </a>
            )}

            {/* Optional Website Button */}
            {member.socials.website && (
              <a
                href={member.socials.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name}'s personal website`}
                title={`${member.name}'s Website`}
                className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-[#E8EAED] dark:border-[#2D2F34] flex items-center justify-center transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Name and Role */}
        <div className="space-y-1">
          <h3 className="font-semibold text-lg text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
            {member.name}
          </h3>

          <div className="inline-flex items-center gap-1.5">
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: `${accentColor}18`,
                color: accentColor,
              }}
            >
              {member.role}
            </span>
          </div>

          {/* Study Program / Focus */}
          {member.major && (
            <p className="flex items-center gap-1.5 text-xs text-[#5F6368] dark:text-[#9AA0A6] pt-1">
              <GraduationCap className="w-3.5 h-3.5 shrink-0 text-neutral-400" />
              <span>{member.major}</span>
            </p>
          )}

          {/* Short Bio */}
          {member.bio && (
            <p className="text-xs text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed pt-2 line-clamp-3">
              {member.bio}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
