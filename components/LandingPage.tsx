"use client";

import { useMemo } from "react";
import Link from "next/link";
import type { CvData, CvDataMap } from "../lib/types";
import { useLanguage } from "./LanguageProvider";
import { SiteNav } from "./SiteNav";

interface LandingPageProps {
  data: CvDataMap;
}

export function LandingPage({ data }: LandingPageProps) {
  const { lang } = useLanguage();
  const cv = useMemo<CvData>(() => data[lang], [data, lang]);

  return (
    <div className="page landing">
      <SiteNav />
      <div className="landing-grid">
        <div className="landing-content">
          <p className="eyebrow">{lang === "cz" ? "Technický profil" : "Technical profile"}</p>
          <h1>{cv.name}</h1>
          <p className="role">{cv.role}</p>
          <p className="tagline">{cv.tagline}</p>
          <div className="route-cards" aria-label={lang === "cz" ? "Sekce webu" : "Site sections"}>
            <Link className="route-card primary" href="/cv">
              <span>{lang === "cz" ? "Profesní profil" : "Professional profile"}</span>
              <strong>{lang === "cz" ? "CV" : "Resume"}</strong>
              <small>
                {lang === "cz"
                  ? "Kariéra, zkušenosti a rozklikávací detail rolí."
                  : "Career, experience, and expandable role details."}
              </small>
            </Link>
            <Link className="route-card" href="/portfolio">
              <span>{lang === "cz" ? "Mimo práci" : "Outside work"}</span>
              <strong>Portfolio</strong>
              <small>
                {lang === "cz"
                  ? "Hobby projekty z embedded, telemetry a backend světa."
                  : "Hobby projects across embedded, telemetry, and backend work."}
              </small>
            </Link>
          </div>
          <span className="location">{cv.location}</span>
        </div>
        <div className="landing-art">
          <div className="avatar">
            <img src="/profile.png" alt={cv.name} />
            <div className="avatar-ring" />
          </div>
          <img
            className="wip-sticker"
            src="/wip-sticker.png"
            alt={lang === "cz" ? "Work in progress" : "Work in progress"}
          />
          <div className="signal-panel">
            <p>{lang === "cz" ? "Pracuju na pomezí" : "Working across"}</p>
            <div className="top-skills">
              {[
                lang === "cz" ? "Data platformy" : "Data platforms",
                "JVM backend",
                lang === "cz" ? "Engineering leadership" : "Engineering leadership"
              ].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
