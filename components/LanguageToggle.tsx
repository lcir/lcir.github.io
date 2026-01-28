"use client";

import { useLanguage } from "./LanguageProvider";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-toggle" role="group" aria-label="Language selector">
      <button
        type="button"
        className={lang === "cz" ? "active" : ""}
        onClick={() => setLang("cz")}
      >
        CZ
      </button>
      <span className="divider" aria-hidden="true">/</span>
      <button
        type="button"
        className={lang === "en" ? "active" : ""}
        onClick={() => setLang("en")}
      >
        EN
      </button>
    </div>
  );
}
