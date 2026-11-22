"use client";

import { useSyncExternalStore } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const emptySubscribe = () => () => {};

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!isClient) {
    return (
      <div className="h-9 w-18 rounded-full bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
    );
  }

  return (
    <div
      role="group"
      aria-label="Language selection"
      className="inline-flex items-center p-1 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-[#E8EAED] dark:border-[#2D2F34] shadow-2xs"
    >
      <button
        onClick={() => setLocale("en")}
        type="button"
        aria-pressed={locale === "en"}
        className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
          locale === "en"
            ? "bg-[#4285F4] text-white shadow-xs"
            : "text-[#5F6368] dark:text-[#9AA0A6] hover:text-[#202124] dark:hover:text-white"
        }`}
        title="Switch to English"
      >
        EN
      </button>

      <button
        onClick={() => setLocale("de")}
        type="button"
        aria-pressed={locale === "de"}
        className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
          locale === "de"
            ? "bg-[#4285F4] text-white shadow-xs"
            : "text-[#5F6368] dark:text-[#9AA0A6] hover:text-[#202124] dark:hover:text-white"
        }`}
        title="Auf Deutsch wechseln"
      >
        DE
      </button>
    </div>
  );
}
