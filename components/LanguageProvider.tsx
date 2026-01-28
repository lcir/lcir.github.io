"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Lang } from "../lib/types";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "lcir-lang";

function detectLanguage(): Lang {
  if (typeof navigator === "undefined") return "cz";
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith("cs") ? "cz" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("cz");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "cz" || stored === "en") {
      setLang(stored);
      return;
    }
    setLang(detectLanguage());
  }, []);

  const updateLang = (next: Lang) => {
    setLang(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  useEffect(() => {
    document.documentElement.lang = lang === "cz" ? "cs" : "en";
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang: updateLang }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
