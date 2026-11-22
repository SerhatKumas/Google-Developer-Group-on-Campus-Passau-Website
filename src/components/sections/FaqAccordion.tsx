"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function FaqAccordion() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-[#121316] border-b border-[#E8EAED] dark:border-[#2D2F34]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#4285F4]" />
            <span>{t.faq.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
            {t.faq.sectionTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5F6368] dark:text-[#9AA0A6]">
            {t.faq.sectionSubtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {t.faq.items.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-[#E8EAED] dark:border-[#2D2F34] bg-[#F8F9FA] dark:bg-[#1E1F23] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  type="button"
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-semibold text-base sm:text-lg text-[#202124] dark:text-[#F1F3F4] hover:text-[#4285F4] dark:hover:text-blue-400 transition-colors focus:outline-none"
                >
                  <span className="font-display">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ml-4",
                      isOpen && "rotate-180 text-[#4285F4]"
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed border-t border-[#E8EAED]/60 dark:border-[#2D2F34]/60 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final CTA Box */}
        <div className="mt-14 rounded-3xl bg-neutral-900 text-white p-8 sm:p-10 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#4285F4]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#34A853]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold font-display">
              {t.faq.ctaBoxTitle}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {t.faq.ctaBoxSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#4285F4] hover:bg-[#1A73E8] text-white text-sm font-semibold transition-all shadow-md"
              >
                <span>{t.faq.ctaBoxButton}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/20 transition-all"
              >
                <span>{t.faq.ctaBoxContact}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
