import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/contact/ContactForm";
import { CopyEmailButton } from "@/components/contact/CopyEmailButton";
import {
  GoogleIcon,
  LinkedInIcon,
  InstagramIcon,
  WhatsAppIcon,
  GitHubIcon,
} from "@/components/ui/BrandIcons";
import { MapPin, Mail, ArrowUpRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Community Hub",
  description:
    "Join our active WhatsApp group, visit our Google chapter page, or connect with student leads at the University of Passau.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-18 bg-white dark:bg-[#121316]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-[#4285F4] dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-1">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Stay Connected</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
            Community Hub & Contact
          </h1>
          <p className="text-sm sm:text-base text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed">
            Join 250+ students in our interactive WhatsApp hub, follow our updates on Instagram & LinkedIn, or send a direct inquiry to the leadership team.
          </p>
        </div>

        {/* 1. Direct Community Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* WhatsApp Group (Distinct Green Highlight) */}
          <a
            href={siteConfig.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border-2 border-emerald-300 dark:border-emerald-800 p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#34A853] text-white flex items-center justify-center shadow-xs">
                  <WhatsAppIcon size={24} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#34A853] text-white">
                  Most Active Hub
                </span>
              </div>
              <h3 className="font-bold text-lg text-[#202124] dark:text-[#F1F3F4] font-display">
                WhatsApp Community
              </h3>
              <p className="text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6] mt-1 leading-relaxed">
                Direct announcements, hackathon team formation, workshop reminders, and informal coffee chats.
              </p>
            </div>
            <div className="pt-4 mt-2 flex items-center gap-1.5 text-xs font-bold text-[#137333] dark:text-emerald-400 group-hover:underline">
              <span>Join WhatsApp Group</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          {/* Official GDG Bevy Chapter */}
          <a
            href={siteConfig.socials.bevy}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-white dark:bg-[#1E1F23] border border-[#E8EAED] dark:border-[#2D2F34] p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-[#E8EAED] dark:border-[#2D2F34] flex items-center justify-center">
                  <GoogleIcon size={22} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-[#4285F4] dark:bg-blue-950/40 dark:text-blue-300 border border-blue-200">
                  Google Chapter
                </span>
              </div>
              <h3 className="font-bold text-lg text-[#202124] dark:text-[#F1F3F4] font-display">
                Official Bevy Chapter
              </h3>
              <p className="text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6] mt-1 leading-relaxed">
                Official Google for Developers portal for official member registration and global badge credentials.
              </p>
            </div>
            <div className="pt-4 mt-2 flex items-center gap-1.5 text-xs font-bold text-[#4285F4] group-hover:underline">
              <span>Open Chapter Page</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          {/* LinkedIn Page */}
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-white dark:bg-[#1E1F23] border border-[#E8EAED] dark:border-[#2D2F34] p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-[#4285F4] flex items-center justify-center">
                  <LinkedInIcon size={22} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                  Professional
                </span>
              </div>
              <h3 className="font-bold text-lg text-[#202124] dark:text-[#F1F3F4] font-display">
                LinkedIn Organization
              </h3>
              <p className="text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6] mt-1 leading-relaxed">
                Connect with alumni, sponsor announcements, event recap galleries, and student leadership spotlights.
              </p>
            </div>
            <div className="pt-4 mt-2 flex items-center gap-1.5 text-xs font-bold text-[#4285F4] group-hover:underline">
              <span>Follow on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          {/* Instagram */}
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-white dark:bg-[#1E1F23] border border-[#E8EAED] dark:border-[#2D2F34] p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/40 text-[#EA4335] flex items-center justify-center">
                  <InstagramIcon size={22} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-50 text-[#EA4335] dark:bg-red-950/40 dark:text-red-300">
                  Social
                </span>
              </div>
              <h3 className="font-bold text-lg text-[#202124] dark:text-[#F1F3F4] font-display">
                Instagram (@passaugdgoc)
              </h3>
              <p className="text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6] mt-1 leading-relaxed">
                Event stories, student takeovers, behind-the-scenes build videos, and real-time reminders.
              </p>
            </div>
            <div className="pt-4 mt-2 flex items-center gap-1.5 text-xs font-bold text-[#EA4335] group-hover:underline">
              <span>Follow @passaugdgoc</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          {/* GitHub Organization */}
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-white dark:bg-[#1E1F23] border border-[#E8EAED] dark:border-[#2D2F34] p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center">
                  <GitHubIcon size={22} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                  Open Source
                </span>
              </div>
              <h3 className="font-bold text-lg text-[#202124] dark:text-[#F1F3F4] font-display">
                GitHub Organization
              </h3>
              <p className="text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6] mt-1 leading-relaxed">
                Explore chapter repos, code review templates, workshop exercises, and internal tooling projects.
              </p>
            </div>
            <div className="pt-4 mt-2 flex items-center gap-1.5 text-xs font-bold text-[#202124] dark:text-neutral-200 group-hover:underline">
              <span>View GitHub Repos</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          {/* Direct Email Card with One-Click Copy */}
          <div className="rounded-2xl bg-white dark:bg-[#1E1F23] border border-[#E8EAED] dark:border-[#2D2F34] p-6 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-[#FBBC04] flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <CopyEmailButton email={siteConfig.email} />
              </div>
              <h3 className="font-bold text-lg text-[#202124] dark:text-[#F1F3F4] font-display">
                Direct Email
              </h3>
              <p className="text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6] mt-1 leading-relaxed">
                For formal university matters, speaker invitations, or chapter governance inquiries.
              </p>
            </div>
            <div className="pt-4 mt-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-xs font-semibold text-[#4285F4] hover:underline break-all"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* 2. Interactive Contact Form & Campus Location Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Campus Map & Meetup Details Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#F8F9FA] dark:bg-[#1E1F23] border border-[#E8EAED] dark:border-[#2D2F34] p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/40 text-[#EA4335] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#202124] dark:text-[#F1F3F4] font-display">
                    University of Passau Campus
                  </h3>
                  <p className="text-xs text-[#5F6368] dark:text-[#9AA0A6] mt-0.5">
                    {siteConfig.address}
                  </p>
                </div>
              </div>

              {/* Campus Meetup Info */}
              <div className="space-y-3 text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6] border-t border-[#E8EAED] dark:border-[#2D2F34] pt-4">
                <p>
                  <strong className="text-[#202124] dark:text-[#F1F3F4] font-semibold block">
                    Typical Workshop Venues:
                  </strong>
                  IM Building (Informatik & Mathematik), CIP-Pools 025 & 026, and IT-Zentrum (ITZ).
                </p>
                <p>
                  <strong className="text-[#202124] dark:text-[#F1F3F4] font-semibold block">
                    Social & Coffee Hours:
                  </strong>
                  Café Museum (Old Town) and the Nikolakloster Courtyard along the Inn River.
                </p>
              </div>

              {/* Directions External Link */}
              <div className="pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${siteConfig.university}, ${siteConfig.address}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#202124] dark:text-[#F1F3F4] bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-[#E8EAED] dark:border-[#2D2F34] transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#EA4335]" />
                  <span>Open Campus in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
