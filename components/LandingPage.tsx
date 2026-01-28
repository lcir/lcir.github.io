"use client";

import { useMemo } from "react";
import Link from "next/link";
import type { CvData, CvDataMap } from "../lib/types";
import { useLanguage } from "./LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";

interface LandingPageProps {
  data: CvDataMap;
}

export function LandingPage({ data }: LandingPageProps) {
  const { lang } = useLanguage();
  const cv = useMemo<CvData>(() => data[lang], [data, lang]);

  return (
    <div className="page landing">
      <LanguageToggle />
      <div className="landing-grid">
        <div className="landing-content">
          <p className="eyebrow">{lang === "cz" ? "Osobní profil" : "Personal profile"}</p>
          <h1>{cv.name}</h1>
          <p className="role">{cv.role}</p>
          <p className="tagline">{cv.tagline}</p>
          <div className="cta-row">
            <Link className="cta" href="/cv">
              {lang === "cz" ? "Otevřít CV" : "Open CV"}
            </Link>
            <span className="location">{cv.location}</span>
          </div>
        </div>
        <div className="landing-art">
          <div className="avatar">
            <img src="/profile.png" alt={cv.name} />
            <div className="avatar-ring" />
            <div className="avatar-flag">{lang === "cz" ? "CZ" : "EN"}</div>
          </div>
          <div className="top-skills">
            {cv.topSkills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
