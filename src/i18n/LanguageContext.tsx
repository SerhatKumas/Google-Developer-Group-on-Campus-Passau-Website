"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { Locale, Translations } from "./types";
import { en } from "./translations/en";
import { de } from "./translations/de";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: Translations;
}

const translationsMap: Record<Locale, Translations> = {
  en,
  de,
};

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("locale-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("locale-change", callback);
  };
}

function getSnapshot(): Locale {
  if (typeof window === "undefined") return "en";
  try {
    const stored = localStorage.getItem("gdg-locale");
    if (stored === "de" || stored === "en") return stored;
  } catch {
    // Ignore private browsing exceptions
  }
  return "en";
}

function getServerSnapshot(): Locale {
  return "en";
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  toggleLocale: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    try {
      document.documentElement.lang = locale;
    } catch {
      // Ignore
    }
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    try {
      localStorage.setItem("gdg-locale", newLocale);
      document.documentElement.lang = newLocale;
    } catch {
      // Ignore
    }
    window.dispatchEvent(new Event("locale-change"));
  };

  const toggleLocale = () => {
    const nextLocale: Locale = locale === "en" ? "de" : "en";
    setLocale(nextLocale);
  };

  const t = translationsMap[locale] || en;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
