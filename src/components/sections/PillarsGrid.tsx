"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { PillarCard } from "@/components/cards/PillarCard";

export function PillarsGrid() {
  const { t } = useLanguage();

  const getPillarAccentAndIcon = (id: string) => {
    switch (id) {
      case "mentorship":
        return { accent: "#4285F4", icon: "Users" };
      case "synergy":
        return { accent: "#EA4335", icon: "Scale" };
      case "creation":
        return { accent: "#FBBC04", icon: "Hammer" };
      case "industry":
        return { accent: "#34A853", icon: "Briefcase" };
      case "community":
        return { accent: "#4285F4", icon: "HeartHandshake" };
      case "excellence":
      default:
        return { accent: "#34A853", icon: "Sparkles" };
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-[#121316] border-b border-[#E8EAED] dark:border-[#2D2F34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-[#4285F4] dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            {t.pillars.sectionTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
            {t.pillars.sectionTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed">
            {t.pillars.sectionSubtitle}
          </p>
        </div>

        {/* 6-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.pillars.items.map((pillar) => {
            const config = getPillarAccentAndIcon(pillar.id);
            return (
              <PillarCard
                key={pillar.id}
                title={pillar.title}
                tagline={pillar.tagline}
                description={pillar.description}
                accent={config.accent}
                iconName={config.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
