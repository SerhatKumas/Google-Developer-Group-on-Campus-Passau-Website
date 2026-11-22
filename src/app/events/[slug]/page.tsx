import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getEvents, getEventBySlug } from "@/services";
import { formatBerlinDateTime, generateGoogleCalendarUrl } from "@/lib/utils";
import { LinkedInIcon } from "@/components/ui/BrandIcons";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Users,
  Building,
} from "lucide-react";

interface EventDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: EventDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };

  return {
    title: `${event.title} | Events`,
    description: event.summary,
    openGraph: {
      title: event.title,
      description: event.summary,
      images: [event.coverImage],
    },
  };
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const isCompleted = event.status === "Completed";

  const googleCalUrl = generateGoogleCalendarUrl({
    title: event.title,
    description: `${event.summary}\n\nLocation: ${event.location}`,
    location: `${event.location}${event.room ? `, ${event.room}` : ""}`,
    startDate: event.startDate,
    endDate: event.endDate,
  });

  return (
    <div className="py-10 sm:py-16 bg-white dark:bg-[#121316]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Back Link */}
        <div className="mb-6">
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#5F6368] dark:text-[#9AA0A6] hover:text-[#4285F4] dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Events</span>
          </Link>
        </div>

        {/* Cover Image Banner */}
        <div className="relative w-full aspect-21/9 rounded-3xl overflow-hidden shadow-lg border border-[#E8EAED] dark:border-[#2D2F34] bg-neutral-100 dark:bg-neutral-800 mb-8">
          <Image
            src={event.coverImage}
            alt={event.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Badges Overlay */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#202124] backdrop-blur-xs shadow-xs">
              {event.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-900/90 text-white backdrop-blur-xs border border-white/20">
              {event.status}
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-display mb-2">
              {event.title}
            </h1>
          </div>
        </div>

        {/* Grid Layout: Main Details + Sidebar Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview / Description */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#202124] dark:text-[#F1F3F4] font-display">
                About this Event
              </h2>
              <div className="text-sm sm:text-base text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed whitespace-pre-line">
                {event.description}
              </div>
            </section>

            {/* Agenda / Schedule if available */}
            {event.agenda && event.agenda.length > 0 && (
              <section className="space-y-4 border-t border-[#E8EAED] dark:border-[#2D2F34] pt-8">
                <h2 className="text-xl font-bold text-[#202124] dark:text-[#F1F3F4] font-display flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#4285F4]" />
                  <span>Agenda & Schedule</span>
                </h2>
                <div className="space-y-3">
                  {event.agenda.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#F8F9FA] dark:bg-[#1E1F23] border border-[#E8EAED] dark:border-[#2D2F34] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 text-[#4285F4] dark:text-blue-300 shrink-0">
                        {item.time}
                      </span>
                      <span className="text-sm font-semibold text-[#202124] dark:text-[#F1F3F4] flex-1">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Speakers / Hosts if available */}
            {event.speakers && event.speakers.length > 0 && (
              <section className="space-y-4 border-t border-[#E8EAED] dark:border-[#2D2F34] pt-8">
                <h2 className="text-xl font-bold text-[#202124] dark:text-[#F1F3F4] font-display flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#34A853]" />
                  <span>Speakers & Session Hosts</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {event.speakers.map((spk, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#F8F9FA] dark:bg-[#1E1F23] border border-[#E8EAED] dark:border-[#2D2F34] flex items-center justify-between gap-3"
                    >
                      <div>
                        <h3 className="font-semibold text-sm text-[#202124] dark:text-[#F1F3F4]">
                          {spk.name}
                        </h3>
                        <p className="text-xs text-[#5F6368] dark:text-[#9AA0A6]">{spk.role}</p>
                        {spk.organization && (
                          <p className="text-xs text-neutral-400">{spk.organization}</p>
                        )}
                      </div>
                      {spk.linkedinUrl && (
                        <a
                          href={spk.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${spk.name} LinkedIn`}
                          className="w-8 h-8 rounded-full bg-white dark:bg-neutral-800 border border-[#E8EAED] dark:border-[#2D2F34] text-[#4285F4] flex items-center justify-center shrink-0 hover:scale-105 transition-transform"
                        >
                          <LinkedInIcon size={14} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Event Photo Gallery for Completed Events */}
            {event.galleryImages && event.galleryImages.length > 0 && (
              <section className="space-y-4 border-t border-[#E8EAED] dark:border-[#2D2F34] pt-8">
                <h2 className="text-xl font-bold text-[#202124] dark:text-[#F1F3F4] font-display">
                  Event Photo Gallery & Memories
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {event.galleryImages.map((src, idx) => (
                    <div
                      key={idx}
                      className="relative rounded-2xl overflow-hidden aspect-4/3 bg-neutral-100 dark:bg-neutral-800 border border-[#E8EAED] dark:border-[#2D2F34] group"
                    >
                      <Image
                        src={src}
                        alt={`${event.title} photo ${idx + 1}`}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Cards (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Facts Card */}
            <div className="rounded-2xl bg-[#F8F9FA] dark:bg-[#1E1F23] border border-[#E8EAED] dark:border-[#2D2F34] p-6 space-y-4 shadow-xs">
              <h3 className="font-bold text-base text-[#202124] dark:text-[#F1F3F4] font-display border-b border-[#E8EAED] dark:border-[#2D2F34] pb-3">
                Event Logistics
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#4285F4] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#202124] dark:text-[#F1F3F4]">
                      Date & Time (Europe/Berlin)
                    </span>
                    <span suppressHydrationWarning className="text-[#5F6368] dark:text-[#9AA0A6]">
                      {formatBerlinDateTime(event.startDate)}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#EA4335] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#202124] dark:text-[#F1F3F4]">
                      Location
                    </span>
                    <span className="text-[#5F6368] dark:text-[#9AA0A6]">
                      {event.location}
                      {event.room ? ` (${event.room})` : ""}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 text-[#34A853] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#202124] dark:text-[#F1F3F4]">
                      Host Organization
                    </span>
                    <span className="text-[#5F6368] dark:text-[#9AA0A6]">
                      GDG on Campus Passau
                    </span>
                  </div>
                </div>
              </div>

              {/* RSVP Action Button */}
              {!isCompleted && event.registrationUrl && (
                <div className="pt-2">
                  <a
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white bg-[#4285F4] hover:bg-[#1A73E8] shadow-md transition-colors"
                  >
                    <span>Register / RSVP Now</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              )}

              {/* Calendar Button */}
              {!isCompleted && (
                <a
                  href={googleCalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-[#202124] dark:text-[#F1F3F4] bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-[#E8EAED] dark:border-[#2D2F34] transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#4285F4]" />
                  <span>Add to Google Calendar</span>
                </a>
              )}
            </div>

            {/* Prerequisites */}
            {event.prerequisites && event.prerequisites.length > 0 && (
              <div className="rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-[#E8EAED] dark:border-[#2D2F34] p-5 space-y-3">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#202124] dark:text-[#F1F3F4]">
                  What to Bring & Prerequisites
                </h4>
                <ul className="space-y-2 text-xs text-[#5F6368] dark:text-[#9AA0A6]">
                  {event.prerequisites.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34A853] shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
