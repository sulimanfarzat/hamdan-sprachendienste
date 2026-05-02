"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import deDict from "../dictionaries/de.json";
import arDict from "../dictionaries/ar.json";

export type Locale = "de" | "ar";
export type Dict = typeof deDict;

const dictionaries: Record<Locale, Dict> = {
  de: deDict,
  ar: arDict as Dict,
};

interface LanguageContextValue {
  locale: Locale;
  dict: Dict;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  mounted: boolean;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "de",
  dict: deDict,
  setLocale: () => {},
  toggle: () => {},
  mounted: false,
});

const applyToHtml = (l: Locale) => {
  if (typeof document === "undefined") return;
  document.documentElement.lang = l;
  document.documentElement.dir = dictionaries[l].meta.dir;
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("de");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = typeof window !== "undefined"
      ? (localStorage.getItem("locale") as Locale | null)
      : null;
    const resolved: Locale = stored === "ar" || stored === "de" ? stored : "de";
    setLocaleState(resolved);
    applyToHtml(resolved);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", l);
    }
    applyToHtml(l);
  };

  const toggle = () => setLocale(locale === "de" ? "ar" : "de");

  return (
    <LanguageContext.Provider value={{
      locale,
      dict: dictionaries[locale],
      setLocale,
      toggle,
      mounted,
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
