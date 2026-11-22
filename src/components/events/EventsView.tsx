"use client";

import { useState, useMemo } from "react";
import { EventCategory, EventItem } from "@/types";
import { EventCard } from "@/components/cards/EventCard";
import { Search, Sparkles, Calendar, History } from "lucide-react";
import { cn } from "@/lib/utils";

interface EventsViewProps {
  events: EventItem[];
}

const CATEGORIES: ("All" | EventCategory)[] = [
  "All",
  "Workshops & Peer Training",
  "Hackathons & Startups",
  "Social & Mixers",
  "Career & Industry",
  "AI & Tech-Law",
];

export function EventsView({ events }: EventsViewProps) {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const [selectedCategory, setSelectedCategory] = useState<"All" | EventCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = useMemo(() => {
    return events.filter((e) => {
      // 1. Tab condition
      const isPast = e.status === "Completed";
      if (tab === "upcoming" && isPast) return false;
      if (tab === "past" && !isPast) return false;

      // 2. Category condition
      if (selectedCategory !== "All" && e.category !== selectedCategory) return false;

      // 3. Search query condition
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = e.title.toLowerCase().includes(query);
        const matchesSummary = e.summary.toLowerCase().includes(query);
        const matchesLocation = e.location.toLowerCase().includes(query);
        return matchesTitle || matchesSummary || matchesLocation;
      }

      return true;
    });
  }, [events, tab, selectedCategory, searchQuery]);

  const upcomingCount = events.filter((e) => e.status !== "Completed").length;
  const pastCount = events.filter((e) => e.status === "Completed").length;

  return (
    <div className="space-y-8">
      {/* 1. Main Upcoming vs. Past Tabs & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E8EAED] dark:border-[#2D2F34] pb-6">
        {/* Toggle Buttons */}
        <div className="inline-flex p-1 rounded-2xl bg-neutral-100 dark:bg-neutral-800/80 border border-[#E8EAED] dark:border-[#2D2F34]">
          <button
            onClick={() => setTab("upcoming")}
            type="button"
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all",
              tab === "upcoming"
                ? "bg-white dark:bg-[#121316] text-[#4285F4] dark:text-blue-400 shadow-xs"
                : "text-[#5F6368] dark:text-[#9AA0A6] hover:text-[#202124] dark:hover:text-white"
            )}
          >
            <Calendar className="w-4 h-4" />
            <span>Upcoming Events ({upcomingCount})</span>
          </button>

          <button
            onClick={() => setTab("past")}
            type="button"
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all",
              tab === "past"
                ? "bg-white dark:bg-[#121316] text-[#4285F4] dark:text-blue-400 shadow-xs"
                : "text-[#5F6368] dark:text-[#9AA0A6] hover:text-[#202124] dark:hover:text-white"
            )}
          >
            <History className="w-4 h-4" />
            <span>Past Events & Recaps ({pastCount})</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search events, keywords..."
            className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs sm:text-sm bg-neutral-50 dark:bg-neutral-800/80 border border-[#E8EAED] dark:border-[#2D2F34] text-[#202124] dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
          />
        </div>
      </div>

      {/* 2. Category Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            type="button"
            className={cn(
              "px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all",
              selectedCategory === cat
                ? "bg-[#202124] text-white dark:bg-white dark:text-[#202124] shadow-xs"
                : "bg-neutral-100 dark:bg-neutral-800 text-[#5F6368] dark:text-[#9AA0A6] hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-[#202124] dark:hover:text-white"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. Event Cards Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-2">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 rounded-3xl bg-[#F8F9FA] dark:bg-[#1E1F23] border border-[#E8EAED] dark:border-[#2D2F34]">
          <Sparkles className="w-8 h-8 text-[#4285F4] mx-auto mb-3" />
          <h3 className="text-lg font-bold text-[#202124] dark:text-[#F1F3F4] font-display">
            No events found
          </h3>
          <p className="text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6] mt-1">
            Try adjusting your search terms or category filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            type="button"
            className="mt-4 px-4 py-2 rounded-full text-xs font-semibold text-[#4285F4] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
