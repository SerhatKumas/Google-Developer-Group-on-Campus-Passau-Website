"use client";

import { useState } from "react";
import Link from "next/link";
import { faqsData } from "@/data/faq";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const { t } = useLanguage();

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
          {faqsData.map((faq) => {
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

        {/* Final Join CTA Banner */}
        <div className="mt-16 rounded-3xl bg-linear-to-r from-blue-600 via-blue-700 to-indigo-700 p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display">
              {t.faq.ctaBoxTitle}
            </h3>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              {t.faq.ctaBoxSubtitle}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white text-[#4285F4] hover:bg-neutral-100 shadow-md transition-colors"
              >
                <span>{t.faq.ctaBoxContact}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/team"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/20 transition-colors"
              >
                <span>{t.faq.ctaBoxButton}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
