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

export function ProjectDetailPage({ slug }: { slug: string }) {
  const { lang } = useLanguage();
  const project = portfolioProjects.find((item) => item.id === slug);

  if (!project) {
    return (
      <div className="page project-detail-page">
        <SiteNav />
        <p className="project-back">
          <Link href="/portfolio">{lang === "cz" ? "← Zpět na portfolio" : "← Back to portfolio"}</Link>
        </p>
        <h1>{lang === "cz" ? "Projekt nenalezen" : "Project not found"}</h1>
      </div>
    );
  }

  const overview = project.overview?.[lang] ?? [project.detail[lang]];
  const highlights = project.highlights?.[lang];

  return (
    <div className="page project-detail-page">
      <SiteNav />

      <p className="project-back">
        <Link href="/portfolio">{lang === "cz" ? "← Zpět na portfolio" : "← Back to portfolio"}</Link>
      </p>

      <header className="project-detail-hero">
        <div className="project-detail-titlebar">
          <p className="project-language">{project.language}</p>
          <span className={`status status-${project.status}`}>
            {statusLabel(project.status, lang)}
          </span>
        </div>
        <h1>{project.title}</h1>
        <p className="tagline">{project.summary[lang]}</p>

        <div className="project-detail-links">
          {project.url && (
            <a className="button-link" href={project.url} target="_blank" rel="noreferrer">
              {lang === "cz" ? "Živá ukázka ↗" : "Live demo ↗"}
            </a>
          )}
          {project.repo ? (
            <a className="button-link ghost" href={project.repo} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          ) : (
            <span className="repo-note">
              {lang === "cz" ? "Soukromý repozitář" : "Private repository"}
            </span>
          )}
        </div>
        {project.url && (
          <p className="project-url">
            {lang === "cz" ? "Běží na: " : "Running at: "}
            <a href={project.url} target="_blank" rel="noreferrer">
              {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </a>
          </p>
        )}
      </header>

      {project.image && (
        <figure className="project-shot">
          <img src={project.image} alt={`${project.title} — screenshot`} />
        </figure>
      )}

      <section className="project-section">
        <h2>{lang === "cz" ? "O projektu" : "About"}</h2>
        {overview.map((paragraph, index) => (
          <p key={index} className="project-detail-text">
            {paragraph}
          </p>
        ))}
      </section>

      {highlights && highlights.length > 0 && (
        <section className="project-section">
          <h2>{lang === "cz" ? "Funkce" : "Features"}</h2>
          <ul className="project-highlights">
            {highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="project-section">
        <h2>{lang === "cz" ? "Technologický stack" : "Tech stack"}</h2>
        {project.tech && project.tech.length > 0 ? (
          <table className="tech-table">
            <tbody>
              {project.tech.map((row) => (
                <tr key={row.layer.en}>
                  <th scope="row">{row.layer[lang]}</th>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="stack">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        )}
      </section>

      <section className="project-section">
        <h2>Focus</h2>
        <p className="project-detail-text">{project.focus[lang]}</p>
      </section>
    </div>
  );
}
