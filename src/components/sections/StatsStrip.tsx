"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function StatsStrip() {
  const { t } = useLanguage();

  const stats = [
    { label: t.stats.activeMembers, value: "250+", accent: "#4285F4" },
    { label: t.stats.events, value: "18+", accent: "#EA4335" },
    { label: t.stats.coreTeams, value: "4", accent: "#FBBC04" },
    { label: t.stats.partners, value: "12+", accent: "#34A853" },
  ];

  return (
    <section className="border-b border-[#E8EAED] dark:border-[#2D2F34] bg-[#F8F9FA] dark:bg-[#1E1F23] py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative bg-white dark:bg-[#121316] rounded-2xl p-6 border border-[#E8EAED] dark:border-[#2D2F34] shadow-xs text-center flex flex-col items-center justify-center group hover:shadow-md transition-shadow"
            >
              <div
                className="absolute top-0 left-6 right-6 h-1 rounded-b-full transition-opacity opacity-75 group-hover:opacity-100"
                style={{ backgroundColor: stat.accent }}
              />
              <span
                className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display mb-1"
                style={{ color: stat.accent }}
              >
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#5F6368] dark:text-[#9AA0A6]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
