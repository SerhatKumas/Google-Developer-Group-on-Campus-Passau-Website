"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { EventItem } from "@/types";
import { formatBerlinDateTime, generateGoogleCalendarUrl, generateIcsFile } from "@/lib/utils";
import { Calendar, MapPin, ArrowUpRight, Download, CalendarPlus, ChevronDown } from "lucide-react";

interface EventCardProps {
  event: EventItem;
}

export function EventCard({ event }: EventCardProps) {
  const [calendarOpen, setCalendarOpen] = useState(false);

  const googleCalUrl = generateGoogleCalendarUrl({
    title: event.title,
    description: `${event.summary}\n\nLocation: ${event.location}${event.room ? ` (${event.room})` : ""}\nMore details: https://gdgpassau.de/events/${event.slug}`,
    location: `${event.location}${event.room ? `, ${event.room}` : ""}`,
    startDate: event.startDate,
    endDate: event.endDate,
  });

  const handleDownloadIcs = () => {
    const icsContent = generateIcsFile({
      title: event.title,
      description: `${event.summary}\n\nLocation: ${event.location}`,
      location: `${event.location}${event.room ? `, ${event.room}` : ""}`,
      startDate: event.startDate,
      endDate: event.endDate,
      url: `https://gdgpassau.de/events/${event.slug}`,
    });

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `${event.slug}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setCalendarOpen(false);
  };

  const getStatusBadge = (status: EventItem["status"]) => {
    switch (status) {
      case "Open for Registration":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#E6F4EA] text-[#137333] dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34A853] animate-pulse" />
            Open for Registration
          </span>
        );
      case "Spots Limited":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#FEF7E0] text-[#B06000] dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC04]" />
            Spots Limited
          </span>
        );
      case "Completed":
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
            Completed & Recapped
          </span>
        );
    }
  };

  return (
    <article className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-[#1E1F23] border border-[#E8EAED] dark:border-[#2D2F34] overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div>
        {/* Cover Image Container */}
        <div className="relative w-full aspect-16/9 bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
          <Image
            src={event.coverImage}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/95 dark:bg-neutral-900/95 text-[#202124] dark:text-[#F1F3F4] backdrop-blur-xs shadow-xs">
              {event.category}
            </span>
            {getStatusBadge(event.status)}
          </div>

          {/* Date Overlay at bottom */}
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <div className="flex items-center gap-1.5 text-xs font-medium text-white/90">
              <Calendar className="w-3.5 h-3.5 text-[#4285F4]" />
              <span suppressHydrationWarning>{formatBerlinDateTime(event.startDate)}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 sm:p-6 space-y-3">
          <h3 className="font-semibold text-lg text-[#202124] dark:text-[#F1F3F4] group-hover:text-[#4285F4] dark:group-hover:text-blue-400 transition-colors line-clamp-2 font-display">
            <Link href={`/events/${event.slug}`}>{event.title}</Link>
          </h3>

          <p className="text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6] line-clamp-2 leading-relaxed">
            {event.summary}
          </p>

          {/* Location Details */}
          <div className="flex items-start gap-1.5 text-xs text-[#5F6368] dark:text-[#9AA0A6] pt-1">
            <MapPin className="w-3.5 h-3.5 text-[#EA4335] shrink-0 mt-0.5" />
            <span className="line-clamp-1">
              {event.location}
              {event.room ? ` (${event.room})` : ""}
            </span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 sm:p-6 pt-0 border-t border-[#E8EAED]/50 dark:border-[#2D2F34]/50 flex items-center justify-between gap-2 mt-2">
        <Link
          href={`/events/${event.slug}`}
          className="text-xs sm:text-sm font-semibold text-[#4285F4] dark:text-blue-400 hover:text-[#1A73E8] inline-flex items-center gap-1 group/link"
        >
          <span>{event.status === "Completed" ? "View Recap & Photos" : "Event Details"}</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>

        {event.status !== "Completed" && (
          <div className="relative">
            <button
              onClick={() => setCalendarOpen(!calendarOpen)}
              type="button"
              className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[#202124] dark:text-[#F1F3F4] transition-colors"
              aria-label="Add event to calendar"
            >
              <CalendarPlus className="w-3.5 h-3.5 text-[#4285F4]" />
              <span className="hidden sm:inline">Add to Calendar</span>
              <ChevronDown className="w-3 h-3 text-neutral-400" />
            </button>

            {calendarOpen && (
              <div className="absolute right-0 bottom-full mb-2 w-48 rounded-xl bg-white dark:bg-[#1E1F23] border border-[#E8EAED] dark:border-[#2D2F34] shadow-xl py-1 z-30 animate-in fade-in zoom-in-95">
                <a
                  href={googleCalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setCalendarOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 text-xs text-[#202124] dark:text-[#F1F3F4] hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#4285F4]" />
                  <span>Google Calendar</span>
                </a>
                <button
                  onClick={handleDownloadIcs}
                  type="button"
                  className="w-full flex items-center gap-2 px-3 py-2 text-xs text-left text-[#202124] dark:text-[#F1F3F4] hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Download className="w-3.5 h-3.5 text-[#34A853]" />
                  <span>Apple / Outlook (.ics)</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
