"use client";

import { useMemo, useState } from "react";
import type { CvData, CvDataMap, ExperienceItem } from "../lib/types";
import { useLanguage } from "./LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";
import { Modal } from "./Modal";

interface CvPageProps {
  data: CvDataMap;
}

function formatPeriod(start: string, end: string) {
  return `${start} – ${end}`;
}

export function CvPage({ data }: CvPageProps) {
  const { lang } = useLanguage();
  const cv = useMemo<CvData>(() => data[lang], [data, lang]);
  const [active, setActive] = useState<ExperienceItem | null>(null);

  return (
    <div className="page cv-page">
      <LanguageToggle />
      <header className="cv-hero">
        <div>
          <p className="cv-kicker">{lang === "cz" ? "CV" : "Resume"}</p>
          <h1>{cv.name}</h1>
          <p className="role">{cv.role}</p>
          <p className="tagline">{cv.tagline}</p>
        </div>
        <div className="contact-box">
          <h2>{lang === "cz" ? "Kontakt" : "Contact"}</h2>
          <ul>
            <li>
              <span>Email</span>
              <a href={`mailto:${cv.contact.email}`}>{cv.contact.email}</a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a href={`https://${cv.contact.linkedin}`} target="_blank" rel="noreferrer">
                {cv.contact.linkedin}
              </a>
            </li>
            <li>
              <span>Web</span>
              <a href={`https://${cv.contact.website}`} target="_blank" rel="noreferrer">
                {cv.contact.website}
              </a>
            </li>
            <li>
              <span>{lang === "cz" ? "Místo" : "Location"}</span>
              <p>{cv.location}</p>
            </li>
          </ul>
        </div>
      </header>

      <section className="cv-section">
        <h2>{lang === "cz" ? "Top skills" : "Top skills"}</h2>
        <div className="chip-list">
          {cv.topSkills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="cv-section">
        <h2>{lang === "cz" ? "Dovednosti" : "Skills"}</h2>
        <div className="chip-list">
          {cv.skills.map((skill) => (
            <span key={skill} className="chip muted">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="cv-section">
        <h2>{lang === "cz" ? "Zkušenosti" : "Experience"}</h2>
        <div className="experience-grid">
          {cv.experience.map((item, index) => (
            <button
              type="button"
              key={item.id}
              className="experience-card"
              onClick={() => setActive(item)}
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <div className="card-header">
                <div>
                  <h3>{item.title}</h3>
                  <p className="company">{item.company}</p>
                </div>
                <span className="period">{formatPeriod(item.start, item.end)}</span>
              </div>
              <p className="summary">{item.summary}</p>
              <div className="stack">
                {item.stack.map((stackItem) => (
                  <span key={stackItem}>{stackItem}</span>
                ))}
              </div>
              <span className="card-cta">{lang === "cz" ? "Detail" : "Details"}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="cv-section">
        <h2>{lang === "cz" ? "Vzdělání" : "Education"}</h2>
        <div className="education-list">
          {cv.education.map((edu) => (
            <div key={`${edu.school}-${edu.start}`} className="education-card">
              <h3>{edu.school}</h3>
              <p>{edu.degree}</p>
              <p>{edu.field}</p>
              <span className="period">{formatPeriod(edu.start, edu.end)}</span>
            </div>
          ))}
        </div>
      </section>

      <Modal
        title={active ? `${active.title} · ${active.company}` : ""}
        isOpen={!!active}
        onClose={() => setActive(null)}
      >
        {active?.detailHtml ? (
          <div
            className="modal-content"
            dangerouslySetInnerHTML={{ __html: active.detailHtml }}
          />
        ) : (
          <p>{lang === "cz" ? "Detail zatím není vyplněn." : "Detail not provided yet."}</p>
        )}
        {active?.stack?.length ? (
          <div className="modal-stack">
            {active.stack.map((stackItem) => (
              <span key={stackItem}>{stackItem}</span>
            ))}
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
