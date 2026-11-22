import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { GoogleIcon, LinkedInIcon, InstagramIcon, WhatsAppIcon, GitHubIcon } from "@/components/ui/BrandIcons";
import { MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#F8F9FA] dark:bg-[#1E1F23] border-t border-[#E8EAED] dark:border-[#2D2F34] text-[#5F6368] dark:text-[#9AA0A6] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 border border-[#E8EAED] shadow-xs flex items-center justify-center">
                <Image
                  src="/images/logo/gdg-passau-logo.png"
                  alt="GDG on Campus Passau Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#202124] dark:text-[#F1F3F4] font-display">
                  {siteConfig.shortName}
                </h3>
                <p className="text-xs text-[#5F6368] dark:text-[#9AA0A6]">
                  {siteConfig.university} &bull; Bavaria, Germany
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[#5F6368] dark:text-[#9AA0A6] max-w-sm">
              The premier technical and interdisciplinary student network at the University of Passau. 
              Bridging engineering, AI, and technical law to transform ideas into working prototypes.
            </p>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white dark:bg-neutral-800 border border-[#E8EAED] dark:border-[#2D2F34] flex items-center justify-center text-[#202124] dark:text-[#F1F3F4] hover:text-[#4285F4] dark:hover:text-[#4285F4] hover:border-[#4285F4] shadow-2xs transition-colors"
              >
                <LinkedInIcon size={17} />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white dark:bg-neutral-800 border border-[#E8EAED] dark:border-[#2D2F34] flex items-center justify-center text-[#202124] dark:text-[#F1F3F4] hover:text-[#EA4335] dark:hover:text-[#EA4335] hover:border-[#EA4335] shadow-2xs transition-colors"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Community"
                className="w-9 h-9 rounded-full bg-white dark:bg-neutral-800 border border-[#E8EAED] dark:border-[#2D2F34] flex items-center justify-center text-[#202124] dark:text-[#F1F3F4] hover:text-[#34A853] dark:hover:text-[#34A853] hover:border-[#34A853] shadow-2xs transition-colors"
              >
                <WhatsAppIcon size={17} />
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Organization"
                className="w-9 h-9 rounded-full bg-white dark:bg-neutral-800 border border-[#E8EAED] dark:border-[#2D2F34] flex items-center justify-center text-[#202124] dark:text-[#F1F3F4] hover:text-black dark:hover:text-white shadow-2xs transition-colors"
              >
                <GitHubIcon size={17} />
              </a>
              <a
                href={siteConfig.socials.bevy}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Official GDG Bevy Chapter"
                className="w-9 h-9 rounded-full bg-white dark:bg-neutral-800 border border-[#E8EAED] dark:border-[#2D2F34] flex items-center justify-center hover:shadow-xs transition-colors"
              >
                <GoogleIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#202124] dark:text-[#F1F3F4]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/team" className="hover:text-[#4285F4] dark:hover:text-blue-400 transition-colors">
                  Leadership & Teams
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[#4285F4] dark:hover:text-blue-400 transition-colors">
                  Upcoming & Past Events
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-[#4285F4] dark:hover:text-blue-400 transition-colors">
                  Partners & Companies
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#4285F4] dark:hover:text-blue-400 transition-colors">
                  Community Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#4285F4] dark:hover:text-blue-400 transition-colors">
                  Contact & Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Initiatives */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#202124] dark:text-[#F1F3F4]">
              Initiatives
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-[#202124] dark:text-[#F1F3F4] font-medium">Peer Mentorship</span>
                <p className="text-xs text-[#5F6368] dark:text-[#9AA0A6]">Master&apos;s to Bachelor&apos;s pairs</p>
              </li>
              <li>
                <span className="text-[#202124] dark:text-[#F1F3F4] font-medium">Civic Hackathons</span>
                <p className="text-xs text-[#5F6368] dark:text-[#9AA0A6]">Code for Passau 2026</p>
              </li>
              <li>
                <span className="text-[#202124] dark:text-[#F1F3F4] font-medium">Tech-Law Synergy</span>
                <p className="text-xs text-[#5F6368] dark:text-[#9AA0A6]">GDPR & AI Ethics Audits</p>
              </li>
              <li>
                <span className="text-[#202124] dark:text-[#F1F3F4] font-medium">Google Tech Trips</span>
                <p className="text-xs text-[#5F6368] dark:text-[#9AA0A6]">Google Munich GSEC Visits</p>
              </li>
            </ul>
          </div>

          {/* Campus Location */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#202124] dark:text-[#F1F3F4]">
              Campus Hub
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#EA4335] shrink-0 mt-0.5" />
                <span>
                  University of Passau
                  <br />
                  Innstraße 41
                  <br />
                  94032 Passau, Germany
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-4 h-4 text-[#4285F4] shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[#4285F4] dark:hover:text-blue-400 break-all text-xs"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-12 pt-8 border-t border-[#E8EAED] dark:border-[#2D2F34] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="flex items-center gap-1 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} {siteConfig.name}.</span>
            <span className="hidden sm:inline">Built with passion by Passau students.</span>
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/impressum"
              className="text-[#5F6368] dark:text-[#9AA0A6] hover:text-[#202124] dark:hover:text-[#F1F3F4] underline-offset-4 hover:underline"
            >
              Impressum (Legal Notice)
            </Link>
            <Link
              href="/privacy"
              className="text-[#5F6368] dark:text-[#9AA0A6] hover:text-[#202124] dark:hover:text-[#F1F3F4] underline-offset-4 hover:underline"
            >
              Privacy Policy (Datenschutz)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
