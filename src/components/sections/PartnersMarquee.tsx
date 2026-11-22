import Link from "next/link";
import Image from "next/image";
import { partnersData } from "@/data/partners";
import { ArrowRight, Building2 } from "lucide-react";

export function PartnersMarquee() {
  const featuredPartners = partnersData.filter((p) => p.featured);

  return (
    <section className="py-14 bg-[#F8F9FA] dark:bg-[#1E1F23] border-b border-[#E8EAED] dark:border-[#2D2F34] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 text-center sm:text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-[#4285F4] dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>Campus & Industry Network</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
              Collaborating with Leading Industry & University Partners
            </h3>
          </div>

          <Link
            href="/partners"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#4285F4] dark:text-blue-400 hover:text-[#1A73E8] group"
          >
            <span>Partner With Us</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Partner Logos Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
          {featuredPartners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center p-4 rounded-xl bg-white dark:bg-[#121316] border border-[#E8EAED] dark:border-[#2D2F34] shadow-2xs hover:shadow-xs transition-all h-20 group"
              title={`${partner.name} - ${partner.collaborationType}`}
            >
              <div className="relative w-full h-10 grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100 flex items-center justify-center">
                <Image
                  src={partner.logoUrl}
                  alt={partner.name}
                  fill
                  sizes="120px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
