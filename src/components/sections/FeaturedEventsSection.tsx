"use client";

import Link from "next/link";
import { EventItem } from "@/types";
import { EventCard } from "@/components/cards/EventCard";
import { ArrowRight, Calendar } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface FeaturedEventsSectionProps {
  events: EventItem[];
}

export function FeaturedEventsSection({ events }: FeaturedEventsSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-[#F8F9FA] dark:bg-[#1E1F23] border-b border-[#E8EAED] dark:border-[#2D2F34] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/50 text-[#EA4335] dark:text-red-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.featuredEvents.sectionTag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
              {t.featuredEvents.sectionTitle}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5F6368] dark:text-[#9AA0A6] max-w-xl">
              {t.featuredEvents.sectionSubtitle}
            </p>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#4285F4] dark:text-blue-400 hover:text-[#1A73E8] group"
          >
            <span>{t.featuredEvents.viewAllCta}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3-Column Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.slice(0, 3).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
