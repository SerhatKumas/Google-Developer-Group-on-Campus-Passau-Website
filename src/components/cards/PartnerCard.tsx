import Image from "next/image";
import { Partner } from "@/types";
import { ExternalLink } from "lucide-react";

interface PartnerCardProps {
  partner: Partner;
}

export function PartnerCard({ partner }: PartnerCardProps) {
  const getTierBadge = () => {
    switch (partner.tier) {
      case "Platinum":
        return (
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-[#4285F4] dark:bg-blue-950/50 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            Platinum Partner
          </span>
        );
      case "Gold":
        return (
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
            Gold Sponsor
          </span>
        );
      case "Academic":
        return (
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            Academic Faculty
          </span>
        );
      default:
        return (
          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
            Campus Initiative
          </span>
        );
    }
  };

  return (
    <div className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-[#1E1F23] border border-[#E8EAED] dark:border-[#2D2F34] p-6 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div>
        {/* Header: Logo & Badge */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-[#E8EAED] dark:border-[#2D2F34] bg-neutral-50 dark:bg-neutral-800 p-1 flex items-center justify-center shrink-0">
            <Image
              src={partner.logoUrl}
              alt={`${partner.name} logo`}
              fill
              sizes="56px"
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          {getTierBadge()}
        </div>

        {/* Title and Collaboration Role */}
        <h3 className="font-semibold text-lg text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display mb-1">
          {partner.name}
        </h3>

        <p className="text-xs font-semibold text-[#4285F4] dark:text-blue-400 mb-2">
          {partner.collaborationType}
        </p>

        <p className="text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed line-clamp-3">
          {partner.description}
        </p>
      </div>

      {/* Website Link */}
      <div className="pt-4 mt-4 border-t border-[#E8EAED] dark:border-[#2D2F34]">
        <a
          href={partner.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5F6368] dark:text-[#9AA0A6] hover:text-[#4285F4] dark:hover:text-blue-400 transition-colors"
        >
          <span>Visit Website</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
