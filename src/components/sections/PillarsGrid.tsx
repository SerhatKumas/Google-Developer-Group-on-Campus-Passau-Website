import { siteConfig } from "@/config/site";
import { PillarCard } from "@/components/cards/PillarCard";

export function PillarsGrid() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-[#121316] border-b border-[#E8EAED] dark:border-[#2D2F34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-[#4285F4] dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Core Foundations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
            The 6 Pillars of GDG Passau
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed">
            Our strategic blueprint designed to ensure every member—from Bachelor&apos;s to Master&apos;s—graduates 
            1–2 steps ahead with real product proficiency, cross-faculty rapport, and strong industry networks.
          </p>
        </div>

        {/* 6-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.pillars.map((pillar) => (
            <PillarCard
              key={pillar.id}
              title={pillar.title}
              tagline={pillar.tagline}
              description={pillar.description}
              accent={pillar.accent}
              iconName={pillar.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
