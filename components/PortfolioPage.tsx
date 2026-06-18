"use client";

import Link from "next/link";
import { portfolioProjects } from "../lib/portfolio";
import { useLanguage } from "./LanguageProvider";
import { SiteNav } from "./SiteNav";

function statusLabel(status: string, lang: "cz" | "en") {
  if (status === "active") return lang === "cz" ? "Aktivní" : "Active";
  if (status === "private") return lang === "cz" ? "Private repo" : "Private repo";
  return lang === "cz" ? "Experiment" : "Experiment";
}

export function PortfolioPage() {
  const { lang } = useLanguage();

  return (
    <div className="page portfolio-page">
      <SiteNav />
      <header className="portfolio-hero">
        <p className="cv-kicker">{lang === "cz" ? "Technické portfolio" : "Technical portfolio"}</p>
        <h1>{lang === "cz" ? "Hobby projekty mimo hlavní práci" : "Hobby projects outside the day job"}</h1>
        <p className="tagline">
          {lang === "cz"
            ? "Menší projekty, kde si sahám na embedded vývoj, telemetry, domácí automatizaci, backendové hranice a praktické produktové nápady."
            : "Small projects where I work with embedded development, telemetry, home automation, backend boundaries, and practical product ideas."}
        </p>
      </header>

      <section className="portfolio-grid" aria-label={lang === "cz" ? "Projekty" : "Projects"}>
        {portfolioProjects.map((project) => (
          <Link key={project.id} href={`/portfolio/${project.id}`} className="portfolio-card-link">
            <article className="portfolio-card">
              {project.image && (
                <div className="portfolio-card-thumb">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
              )}
              <div className="portfolio-card-header">
                <div>
                  <p className="project-language">{project.language}</p>
                  <h2>{project.title}</h2>
                </div>
                <span className={`status status-${project.status}`}>
                  {statusLabel(project.status, lang)}
                </span>
              </div>
              <p className="summary">{project.summary[lang]}</p>
              <p className="project-detail">{project.detail[lang]}</p>
              <div className="project-focus">
                <span>{lang === "cz" ? "Focus" : "Focus"}</span>
                <p>{project.focus[lang]}</p>
              </div>
              <div className="stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="project-footer">
                <span className="detail-cue">
                  {lang === "cz" ? "Zobrazit detail →" : "View details →"}
                </span>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </div>
  );
}
