import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Users,
  ShieldCheck,
  Briefcase,
  Terminal,
  BookOpen,
  Calendar,
  Lock,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Cloud,
  Code2,
} from "lucide-react";
import { WhatsAppIcon, GoogleIcon, GitHubIcon } from "@/components/ui/BrandIcons";

export const metadata: Metadata = {
  title: "Member & Leadership Dashboard",
  description:
    "Unified dashboard portal for active members, executive leads, and ecosystem partners at Google Developer Group on Campus Passau.",
};

export default function DashboardPage() {
  return (
    <div className="py-12 sm:py-18 bg-white dark:bg-[#121316] min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-[#4285F4] dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Unified Community Portal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
            Member &amp; Leadership Dashboard
          </h1>
          <p className="text-sm sm:text-base text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed">
            A centralized hub designed for active student members, executive leads, and community partners 
            collaborating at the University of Passau.
          </p>
        </div>

        {/* Portal Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 1. Member Space */}
          <div className="rounded-2xl border border-[#E8EAED] dark:border-[#2D2F34] bg-neutral-50/50 dark:bg-[#1A1C1E] p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-200">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-[#4285F4] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4285F4]">
                  Active Students
                </span>
                <h2 className="text-xl font-bold text-[#202124] dark:text-[#F1F3F4] font-display mt-1">
                  Member Space
                </h2>
                <p className="text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6] mt-2 leading-relaxed">
                  Access workshop starter code, study jam slides, Google Cloud learning tracks, and direct project teams.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-[#5F6368] dark:text-[#9AA0A6]">
                  <Cloud className="w-4 h-4 text-[#4285F4]" />
                  <span>Google Cloud Credits &amp; Free Sandbox</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5F6368] dark:text-[#9AA0A6]">
                  <Code2 className="w-4 h-4 text-[#34A853]" />
                  <span>Workshop Starter Repos &amp; Solutions</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5F6368] dark:text-[#9AA0A6]">
                  <BookOpen className="w-4 h-4 text-[#FBBC04]" />
                  <span>AI &amp; Cloud Study Jam Tracks</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E8EAED] dark:border-[#2D2F34] space-y-2">
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#4285F4] hover:bg-[#1A73E8] rounded-xl transition-colors"
              >
                <WhatsAppIcon size={16} />
                <span>Join Member WhatsApp Hub</span>
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-[#25272B] hover:bg-neutral-100 dark:hover:bg-[#2D2F34] border border-[#E8EAED] dark:border-[#2D2F34] rounded-xl transition-colors"
              >
                <GitHubIcon size={14} />
                <span>GitHub Chapter Repos</span>
              </a>
            </div>
          </div>

          {/* 2. Core Leadership Portal */}
          <div className="rounded-2xl border-2 border-blue-200 dark:border-blue-900/60 bg-gradient-to-b from-blue-50/40 to-transparent dark:from-blue-950/20 p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-200 relative">
            <div className="absolute top-4 right-4">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/70 text-[#4285F4] dark:text-blue-300">
                Core Team
              </span>
            </div>

            <div className="space-y-5">
              <div className="w-12 h-12 rounded-xl bg-[#4285F4] text-white flex items-center justify-center shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4285F4]">
                  Leads &amp; Organizers
                </span>
                <h2 className="text-xl font-bold text-[#202124] dark:text-[#F1F3F4] font-display mt-1">
                  Leads Workspace
                </h2>
                <p className="text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6] mt-2 leading-relaxed">
                  Operational workspace for Technical Leads, Event Coordinators, Marketing Directors, and Legal Officers.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-[#5F6368] dark:text-[#9AA0A6]">
                  <Calendar className="w-4 h-4 text-[#EA4335]" />
                  <span>University Room &amp; Event Scheduling</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5F6368] dark:text-[#9AA0A6]">
                  <Terminal className="w-4 h-4 text-[#4285F4]" />
                  <span>Website &amp; Infrastructure Deployments</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5F6368] dark:text-[#9AA0A6]">
                  <Lock className="w-4 h-4 text-[#34A853]" />
                  <span>Chapter Governance &amp; Budget Logs</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E8EAED] dark:border-[#2D2F34] space-y-2">
              <Link
                href="/contact?intent=lead"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#202124] dark:bg-[#2D2F34] hover:bg-black dark:hover:bg-[#383A3F] rounded-xl transition-colors shadow-xs"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Lead Sign-In / Access Key</span>
              </Link>
              <p className="text-[11px] text-center text-[#5F6368] dark:text-[#9AA0A6]">
                OAuth authentication launching for Fall 2026
              </p>
            </div>
          </div>

          {/* 3. Partners & Mentors Portal */}
          <div className="rounded-2xl border border-[#E8EAED] dark:border-[#2D2F34] bg-neutral-50/50 dark:bg-[#1A1C1E] p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-200">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-[#FBBC04] flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#FBBC04]">
                  Ecosystem &amp; Industry
                </span>
                <h2 className="text-xl font-bold text-[#202124] dark:text-[#F1F3F4] font-display mt-1">
                  Partners &amp; Speakers
                </h2>
                <p className="text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6] mt-2 leading-relaxed">
                  Collaborate with GDG Passau on sponsored hackathons, guest keynote presentations, and tech talent recruitment.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-[#5F6368] dark:text-[#9AA0A6]">
                  <Sparkles className="w-4 h-4 text-[#FBBC04]" />
                  <span>Submit Guest Speaker Proposal</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5F6368] dark:text-[#9AA0A6]">
                  <GoogleIcon size={16} />
                  <span>Google Developer Chapter Synergy</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5F6368] dark:text-[#9AA0A6]">
                  <Users className="w-4 h-4 text-[#4285F4]" />
                  <span>Passau CS &amp; Tech Law Talent Network</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E8EAED] dark:border-[#2D2F34] space-y-2">
              <Link
                href="/partners"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#34A853] hover:bg-[#2D9247] rounded-xl transition-colors"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-[#25272B] hover:bg-neutral-100 dark:hover:bg-[#2D2F34] border border-[#E8EAED] dark:border-[#2D2F34] rounded-xl transition-colors"
              >
                <span>General Inquiries</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
