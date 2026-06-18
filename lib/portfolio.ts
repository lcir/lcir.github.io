import type { Lang } from "./types";

export type PortfolioStatus = "active" | "experiment" | "private";

export interface TechRow {
  layer: Record<Lang, string>;
  value: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  repo?: string;
  url?: string;
  visibility: "public" | "private";
  status: PortfolioStatus;
  language: string;
  stack: string[];
  summary: Record<Lang, string>;
  detail: Record<Lang, string>;
  focus: Record<Lang, string>;
  /** Optional richer content shown on the project detail page. */
  overview?: Record<Lang, string[]>;
  highlights?: Record<Lang, string[]>;
  tech?: TechRow[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "chordbook",
    title: "Chordbook",
    url: "https://chords.ptw.cz/",
    visibility: "private",
    status: "active",
    language: "TypeScript / Kotlin",
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Mantine",
      "Kotlin",
      "Spring Boot",
      "PostgreSQL",
      "Keycloak",
      "MinIO",
      "Docker"
    ],
    summary: {
      cz: "Multi-user webová aplikace pro správu akordů a osobního zpěvníku s interaktivním editorem hmatů (chord diagramů) pro kytaru a ukulele.",
      en: "A multi-user web app for managing chords and a personal songbook, with an interactive fretboard (chord-diagram) editor for guitar and ukulele."
    },
    detail: {
      cz: "Plnohodnotný full-stack projekt provozovaný v produkci na https://chords.ptw.cz/. Nabízí knihovnu akordů s vlastním editorem hmatů (barré, prázdné/tlumené struny, posun pražce), zpěvník v ChordPro formátu s transpozicí, kapodastrem a tempem, kolekce zpěvníků a tisk do A4/PDF. Součástí je i vestavěný katalog akordů (chords-db) a katalog písní z public-domain materiálu, ze kterých se dá importovat do vlastní sbírky. Frontend i backend žijí v jednom monorepu, infrastruktura běží přes Docker Compose a produkční multi-arch image se staví v GitHub Actions a publikují do GHCR.",
      en: "A full-stack project running in production at https://chords.ptw.cz/. It offers a chord library with a custom fretboard editor (barre, open/muted strings, base-fret shift), a ChordPro songbook with transposition, capo and tempo, songbook collections, and A4/PDF printing. It also bundles a chord catalog (chords-db) and a public-domain song catalog you can import into your own collection. Frontend and backend live in a single monorepo, infrastructure runs via Docker Compose, and production multi-arch images are built in GitHub Actions and published to GHCR."
    },
    focus: {
      cz: "Full-stack architektura, autentizace přes Keycloak, doménové modelování hudby, produkční provoz",
      en: "Full-stack architecture, Keycloak authentication, music domain modeling, production operations"
    },
    overview: {
      cz: [
        "Chordbook je multi-user webová aplikace pro muzikanty, která drží pohromadě osobní knihovnu akordů a zpěvník. Inspiroval se neckdiagrams.com a cílí na kytaru a ukulele.",
        "Projekt běží v produkci na vlastní doméně a slouží jako prostor pro praktickou full-stack architekturu — od interaktivního UI přes doménové modelování hudby až po provoz přes Docker a CI/CD.",
        "Frontend i backend žijí v jednom monorepu; infrastruktura (databáze, autentizace, úložiště, reverzní proxy) se zvedá přes Docker Compose a produkční multi-arch image se staví v GitHub Actions a publikují do GHCR."
      ],
      en: [
        "Chordbook is a multi-user web app for musicians that keeps a personal chord library and a songbook in one place. Inspired by neckdiagrams.com, it targets guitar and ukulele.",
        "The project runs in production on its own domain and serves as a playground for practical full-stack architecture — from interactive UI through music domain modeling to operations via Docker and CI/CD.",
        "Frontend and backend live in a single monorepo; the infrastructure (database, auth, storage, reverse proxy) comes up via Docker Compose, and production multi-arch images are built in GitHub Actions and published to GHCR."
      ]
    },
    highlights: {
      cz: [
        "Knihovna akordů s vlastním interaktivním editorem hmatů — klikání prstů, tažením přes struny barré, prázdné/tlumené struny, posun pražce a čísla prstů.",
        "Vestavěný katalog akordů (z open-source chords-db) i katalog písní z public-domain materiálu — vyhledávání, multi-výběr a import jedním klikem do vlastní sbírky.",
        "Zpěvník v ChordPro formátu s náhledem, transpozicí, tóninou, kapodastrem, tempem a doporučeným rytmem.",
        "Kolekce (pojmenované zpěvníky) s vlastním řazením písní, které řídí i pořadí při tisku.",
        "Tisk na straně klienta (A4) — celý zpěvník, jedna píseň, nebo mřížka akordových diagramů; lze i „Uložit jako PDF“.",
        "Autentizace přes Keycloak: in-app login a registrace proxované backendem, tokeny v httpOnly cookies, data izolovaná per uživatel."
      ],
      en: [
        "Chord library with a custom interactive fretboard editor — click to place fingers, drag across strings for a barre, open/muted strings, base-fret shift and finger numbers.",
        "Bundled chord catalog (from the open-source chords-db) and a public-domain song catalog — search, multi-select and one-click import into your own collection.",
        "ChordPro songbook with preview, transposition, key, capo, tempo and recommended strumming.",
        "Collections (named songbooks) with custom song ordering that also drives print order.",
        "Client-side printing (A4) — a whole songbook, a single song, or a grid of chord diagrams; you can also \"Save as PDF\".",
        "Keycloak authentication: in-app login and registration proxied by the backend, tokens in httpOnly cookies, data isolated per user."
      ]
    },
    tech: [
      { layer: { cz: "Frontend", en: "Frontend" }, value: "React + Vite + TypeScript + Mantine" },
      { layer: { cz: "Backend", en: "Backend" }, value: "Spring Boot 4 + Kotlin (Gradle)" },
      { layer: { cz: "Databáze", en: "Database" }, value: "PostgreSQL (Flyway migrace)" },
      { layer: { cz: "Autentizace", en: "Auth" }, value: "Keycloak (resource server, httpOnly cookies)" },
      { layer: { cz: "Úložiště souborů", en: "File storage" }, value: "MinIO (S3-kompatibilní)" },
      { layer: { cz: "Infrastruktura", en: "Infrastructure" }, value: "Docker Compose + Caddy (HTTPS reverse proxy)" },
      { layer: { cz: "CI/CD", en: "CI/CD" }, value: "GitHub Actions → multi-arch image v GHCR" },
      { layer: { cz: "Monitoring", en: "Monitoring" }, value: "Sentry (frontend + backend)" }
    ]
  },
  {
    id: "garden-temperature",
    title: "Garden Temperature",
    visibility: "private",
    status: "private",
    language: "C++",
    stack: ["C++", "IoT", "Telemetry", "Sensors"],
    summary: {
      cz: "Hobby telemetry projekt pro měření a sledování teplotních dat ze zahrady.",
      en: "A hobby telemetry project for measuring and tracking garden temperature data."
    },
    detail: {
      cz: "Projekt držím jako prostor pro práci s embedded měřením, sběrem dat a praktickým provozem malého domácího telemetry stacku.",
      en: "A practical playground for embedded measurement, data collection, and operating a small home telemetry stack."
    },
    focus: {
      cz: "Senzory, stabilita sběru dat, domácí observabilita",
      en: "Sensors, stable data collection, home observability"
    }
  },
  {
    id: "bose-soundtouch-remote-control",
    title: "Bose SoundTouch Remote Control",
    repo: "https://github.com/lcir/bose-soundtouch-remote-control",
    visibility: "public",
    status: "active",
    language: "C++",
    stack: ["C++", "ESP", "HTTP control", "Embedded UI"],
    summary: {
      cz: "Remote control pro Bose SoundTouch SA-5 postavený mimo běžnou pracovní doménu.",
      en: "A remote control for Bose SoundTouch SA-5 built outside the usual work domain."
    },
    detail: {
      cz: "Malý embedded projekt propojující fyzické ovládání, síťovou komunikaci a praktickou integraci s domácím audio zařízením.",
      en: "A small embedded project connecting physical controls, network communication, and practical integration with home audio hardware."
    },
    focus: {
      cz: "Embedded networking, UX fyzického ovladače, domácí automatizace",
      en: "Embedded networking, physical controller UX, home automation"
    }
  },
  {
    id: "boss-footswitch-codex",
    title: "Boss Footswitch Codex",
    repo: "https://github.com/lcir/boss-footswitch-codex",
    visibility: "public",
    status: "experiment",
    language: "C",
    stack: ["C", "Bluetooth", "Embedded", "Audio gear"],
    summary: {
      cz: "Bluetooth foot switch pro Boss Katana 50 GEN 3 s důrazem na nízkoúrovňovou implementaci.",
      en: "A Bluetooth foot switch for Boss Katana 50 GEN 3 with a low-level implementation focus."
    },
    detail: {
      cz: "Experiment s ovládáním hudebního vybavení přes embedded zařízení a Bluetooth komunikaci.",
      en: "An experiment in controlling music gear through embedded hardware and Bluetooth communication."
    },
    focus: {
      cz: "Bluetooth protokol, embedded C, ovládání hardware",
      en: "Bluetooth protocol, embedded C, hardware control"
    }
  },
  {
    id: "boss-footswitch-claude",
    title: "Boss Footswitch Claude",
    repo: "https://github.com/lcir/boss-footswitch-claude",
    visibility: "public",
    status: "experiment",
    language: "C++",
    stack: ["C++", "Bluetooth", "Embedded", "Audio gear"],
    summary: {
      cz: "Druhá varianta Bluetooth foot switch projektu pro Boss Katana 50 GEN 3.",
      en: "A second Bluetooth foot switch variant for Boss Katana 50 GEN 3."
    },
    detail: {
      cz: "Paralelní implementace stejné produktové myšlenky, užitečná pro porovnávání návrhu, struktury a vývojového workflow.",
      en: "A parallel implementation of the same product idea, useful for comparing design, structure, and development workflow."
    },
    focus: {
      cz: "Alternativní návrh, C++ firmware, iterace prototypu",
      en: "Alternative design, C++ firmware, prototype iteration"
    }
  },
  {
    id: "homas-telemetry-be",
    title: "Homas Telemetry",
    visibility: "private",
    status: "private",
    language: "TypeScript",
    stack: ["TypeScript", "Backend", "Telemetry", "Automation"],
    summary: {
      cz: "Soukromý backendový projekt v organizaci PtWcz zaměřený na telemetry workflow.",
      en: "A private PtWcz backend project focused on telemetry workflows."
    },
    detail: {
      cz: "Projekt používám jako prostor pro návrh backendových hranic, ingestion logiky a provozních kontrol nad technickými daty.",
      en: "A project space for backend boundaries, ingestion logic, and operational checks around technical data."
    },
    focus: {
      cz: "Backend architektura, telemetry data, provozní kvalita",
      en: "Backend architecture, telemetry data, operational quality"
    }
  },
  {
    id: "plastic-model-gallery-be",
    title: "Plastic Model Gallery",
    visibility: "private",
    status: "private",
    language: "Backend",
    stack: ["Backend", "Media catalog", "Domain modeling", "API"],
    summary: {
      cz: "Soukromý PtWcz projekt pro katalogizaci a prezentaci plastikových modelů.",
      en: "A private PtWcz project for cataloging and presenting plastic model builds."
    },
    detail: {
      cz: "Hobby doména mimo pracovní oblast, vhodná pro modelování dat, správu obsahu a postupné stavění produktové struktury.",
      en: "A hobby domain outside the day job, useful for data modeling, content management, and gradually shaping a product structure."
    },
    focus: {
      cz: "Doménové modelování, katalog, obsahový backend",
      en: "Domain modeling, catalog, content backend"
    }
  }
];
