import { Metadata } from "next";
import { getEvents } from "@/services";
import { EventsView } from "@/components/events/EventsView";
import { Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Events & Workshops",
  description:
    "Explore upcoming hackathons, AI workshops, Google Munich tech trips, and interdisciplinary GDPR clinics hosted by GDG on Campus Passau.",
};

export const revalidate = 60;

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="py-12 sm:py-18 bg-white dark:bg-[#121316]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/50 text-[#EA4335] dark:text-red-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Campus Activities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
            Events, Hackathons & Tech Trips
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed">
            Hands-on learning, civic coding marathons, and networking sessions designed for builders and idea owners at the University of Passau.
          </p>
        </div>

        {/* Filterable Events Grid */}
        <EventsView events={events} />
      </div>
    </div>
  );
}
