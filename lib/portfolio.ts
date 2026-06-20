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
  /** Optional screenshot shown on the card and the detail page. */
  image?: string;
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
    image: "/chordbook.png",
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
    id: "homas-telemetry",
    title: "Homas Telemetry",
    url: "https://homas-telemetry.ptw.cz/",
    visibility: "private",
    status: "active",
    language: "TypeScript",
    image: "/homas-telemetry.png",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL",
      "Fastify",
      "MCP",
      "PostgreSQL",
      "Drizzle ORM"
    ],
    summary: {
      cz: "Domácí telemetry stack — senzory přes Node-RED ingestují do backendu, který data vystavuje přes GraphQL dashboard i MCP server pro AI asistenty.",
      en: "A home telemetry stack — sensors ingest via Node-RED into a backend that exposes the data through a GraphQL dashboard and an MCP server for AI assistants."
    },
    detail: {
      cz: "Veřejně běžící dashboard na https://homas-telemetry.ptw.cz/ nad domácím telemetry stackem. Backend (Fastify + GraphQL Yoga + Drizzle/PostgreSQL) má dvě oddělené síťové plochy: privátní ingest (Node-RED → POST /ingest) a veřejné query API, které vystavuje GraphQL (s živými subscriptions) i MCP server. Frontend je React SPA (Apollo + graphql-ws + Recharts + Tailwind) zobrazující u každé lokality online stav, poslední měření (teplota, vlhkost, WiFi RSSI) a historické agregace s grafy. MCP plocha (`/mcp`, Streamable HTTP) dává AI asistentům přístup k telemetrii přes sadu toolů včetně dvou s LLM (ask_telemetry, summarize_anomalies).",
      en: "A publicly running dashboard at https://homas-telemetry.ptw.cz/ on top of a home telemetry stack. The backend (Fastify + GraphQL Yoga + Drizzle/PostgreSQL) has two separated network surfaces: a private ingest API (Node-RED → POST /ingest) and a public query API exposing both GraphQL (with live subscriptions) and an MCP server. The frontend is a React SPA (Apollo + graphql-ws + Recharts + Tailwind) showing, per location, online status, the latest reading (temperature, humidity, WiFi RSSI) and historical aggregates with charts. The MCP surface (`/mcp`, Streamable HTTP) gives AI assistants access to the telemetry through a set of tools, two of them LLM-backed (ask_telemetry, summarize_anomalies)."
    },
    focus: {
      cz: "Telemetry ingestion, GraphQL i MCP query plocha, AI nad daty, dashboard UI, observabilita",
      en: "Telemetry ingestion, GraphQL and MCP query surfaces, AI over data, dashboard UI, observability"
    },
    overview: {
      cz: [
        "Homas Telemetry je domácí senzorový stack — měření z více lokalit (garden, closet, kids a další) tečou přes Node-RED do backendu a zobrazují se na jednom dashboardu.",
        "Backend (Fastify + GraphQL Yoga + Drizzle/PostgreSQL) rozděluje provoz na privátní ingest plochu (POST /ingest) a veřejné query API, které stejná data vystavuje dvěma způsoby: jako GraphQL pro dashboard a jako MCP server pro AI asistenty.",
        "Frontend je React SPA (Apollo Client, graphql-ws subscriptions, Recharts, Tailwind) s živými updaty; celý projekt slouží jako prostor pro praktickou práci s časovými řadami, AI nad daty a provozní observabilitou (Sentry, metriky)."
      ],
      en: [
        "Homas Telemetry is a home sensor stack — readings from several locations (garden, closet, kids and more) flow through Node-RED into a backend and surface on a single dashboard.",
        "The backend (Fastify + GraphQL Yoga + Drizzle/PostgreSQL) splits traffic into a private ingest surface (POST /ingest) and a public query API that exposes the same data two ways: as GraphQL for the dashboard and as an MCP server for AI assistants.",
        "The frontend is a React SPA (Apollo Client, graphql-ws subscriptions, Recharts, Tailwind) with live updates; the whole project is a space for practical work with time-series data, AI over data and operational observability (Sentry, metrics)."
      ]
    },
    highlights: {
      cz: [
        "Dashboard: přehled „všech lokalit“ i detail jedné lokality (taby), online/offline stav, poslední měření (teplota, vlhkost, WiFi RSSI) a historické agregace 24 h / 7 d / 30 d s grafy.",
        "Oddělené síťové plochy backendu: privátní ingest (Node-RED → POST /ingest) a veřejné query API — bezpečnostně izolované vstupy a výstupy.",
        "GraphQL API (Yoga) s živými subscriptions, které frontend přes graphql-ws průběžně dotahuje do grafů.",
        "MCP server „homas-telemetry-mcp“ na `/mcp` přes Streamable HTTP se správou session — dává AI asistentům přímý přístup k telemetrii.",
        "MCP tools: list_locations, list_metric_keys, query_readings (kurzorová stránkování), get_latest, get_aggregates (5m/15m/1h).",
        "Dva AI tools nad MCP: ask_telemetry (otázka v přirozeném jazyce → bezpečný query plán a odpověď) a summarize_anomalies (shrnutí anomálií v okně) — postavené nad OpenAI.",
        "Observabilita: MCP server i AI tools obalené Sentry a per-tool metrikami; coverage gates a CI v GitHub Actions."
      ],
      en: [
        "Dashboard: an \"all locations\" overview plus a single-location detail (tabs), online/offline status, the latest reading (temperature, humidity, WiFi RSSI) and 24 h / 7 d / 30 d historical aggregates with charts.",
        "Separated backend network surfaces: a private ingest API (Node-RED → POST /ingest) and a public query API — security-isolated inputs and outputs.",
        "A GraphQL API (Yoga) with live subscriptions that the frontend streams into the charts via graphql-ws.",
        "An MCP server \"homas-telemetry-mcp\" at `/mcp` over Streamable HTTP with session management — giving AI assistants direct access to the telemetry.",
        "MCP tools: list_locations, list_metric_keys, query_readings (cursor pagination), get_latest, get_aggregates (5m/15m/1h).",
        "Two LLM-backed MCP tools: ask_telemetry (natural-language question → safe query plan and answer) and summarize_anomalies (anomaly summary over a window) — built on OpenAI.",
        "Observability: the MCP server and AI tools are wrapped with Sentry and per-tool metrics; coverage gates and CI in GitHub Actions."
      ]
    },
    tech: [
      { layer: { cz: "Frontend", en: "Frontend" }, value: "React 19 + Apollo Client + graphql-ws + Recharts + Tailwind v4" },
      { layer: { cz: "Backend", en: "Backend" }, value: "Node.js + TypeScript, Fastify 5, GraphQL Yoga" },
      { layer: { cz: "MCP", en: "MCP" }, value: "MCP TypeScript SDK (Streamable HTTP) na /mcp, 7 toolů" },
      { layer: { cz: "AI", en: "AI" }, value: "OpenAI — ask_telemetry, summarize_anomalies" },
      { layer: { cz: "Databáze", en: "Database" }, value: "PostgreSQL + Drizzle ORM (časové řady + agregace)" },
      { layer: { cz: "Ingest", en: "Ingest" }, value: "Privátní plocha: Node-RED → POST /ingest" },
      { layer: { cz: "Observabilita", en: "Observability" }, value: "Sentry + metriky, coverage gates, GitHub Actions" }
    ]
  },
  {
    id: "plastic-models",
    title: "Plastikoví veteráni",
    url: "https://plastic-models.lcir.cz/",
    visibility: "private",
    status: "active",
    language: "TypeScript",
    image: "/plastic-models.png",
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "React Router",
      "REST API",
      "Media catalog",
      "Admin CMS"
    ],
    summary: {
      cz: "Kurátorská online galerie postavených plastikových modelů vojenské techniky — tanků, letadel a lodí — s detaily, fotogaleriemi a barevně značeným filtrováním.",
      en: "A curated online gallery of built plastic scale models of military hardware — tanks, aircraft and ships — with detail pages, photo galleries and color-coded tag filtering."
    },
    detail: {
      cz: "Veřejně běžící galerie na https://plastic-models.lcir.cz/ s podtitulem „Model Archive“. Každý model má vlastní stránku s historickým popisem, fotogalerií a specifikacemi (země původu, typ, období výroby, měřítko, výrobce), které slouží i jako barevně odlišené štítky pro filtrování. Frontend je React/Vite SPA s ručně psaným fontem a „papírovým“ vzhledem; obsah se načítá z REST API a obrázky se servírují z mediálního úložiště. Součástí je i administrace chráněná přihlášením pro správu modelů a štítků.",
      en: "A publicly running gallery at https://plastic-models.lcir.cz/ subtitled \"Model Archive\". Each model has its own page with a historical write-up, a photo gallery and specs (country of origin, type, production period, scale, manufacturer) that double as color-coded tags for filtering. The frontend is a React/Vite SPA with a handwritten font and a \"paper\" aesthetic; content is loaded from a REST API and images are served from a media store. It also includes a login-protected admin area for managing models and tags."
    },
    focus: {
      cz: "Doménové modelování katalogu, prezentační UI, obsahová administrace, produkční provoz",
      en: "Catalog domain modeling, presentation UI, content administration, production operations"
    },
    overview: {
      cz: [
        "Plastikoví veteráni jsou kurátorská galerie postavených plastikových modelů — „v míru slepeno to, co kdysi burácelo v boji“. Sbírka cílí na vojenskou techniku: tanky, stíhací letouny i bitevní lodě ve vitrínové kvalitě.",
        "Projekt běží v produkci na vlastní doméně a slouží jako prostor pro praktickou full-stack architekturu — od prezentačního UI přes doménové modelování katalogu až po obsahovou administraci.",
        "Frontend je samostatná React/Vite SPA, která čte obsah z REST API; modely, fotografie i štítky se spravují přes přihlášením chráněnou administraci."
      ],
      en: [
        "Plastikoví veteráni is a curated gallery of built plastic models — \"glued together in peace, what once roared in battle\". The collection focuses on military hardware: tanks, fighter planes and battleships in display-case quality.",
        "The project runs in production on its own domain and serves as a space for practical full-stack architecture — from presentation UI through catalog domain modeling to content administration.",
        "The frontend is a standalone React/Vite SPA that reads content from a REST API; models, photos and tags are managed through a login-protected admin area."
      ]
    },
    highlights: {
      cz: [
        "Galerie modelů s kartami a detailními stránkami — historický popis, fotogalerie s více snímky a přehled specifikací u každého kusu.",
        "Strukturované specifikace (země původu, typ, období výroby, měřítko, výrobce), které se zároveň zobrazují jako barevně odlišené štítky pro orientaci a filtrování.",
        "Prezentační vzhled s ručně psaným fontem a teplou „papírovou“ paletou, který odkazuje na sběratelský a vitrínový charakter sbírky.",
        "REST API (`/api/models`) jako zdroj obsahu pro SPA; obrázky se servírují z odděleného mediálního úložiště.",
        "Administrace chráněná přihlášením pro správu modelů a štítků — vkládání a editace obsahu bez zásahu do kódu."
      ],
      en: [
        "Model gallery with cards and detail pages — a historical write-up, a multi-image photo gallery and a specs overview for each build.",
        "Structured specs (country of origin, type, production period, scale, manufacturer) that also render as color-coded tags for orientation and filtering.",
        "Presentation styling with a handwritten font and a warm \"paper\" palette that nods to the collector's, display-case nature of the collection.",
        "A REST API (`/api/models`) as the content source for the SPA; images are served from a separate media store.",
        "A login-protected admin area for managing models and tags — adding and editing content without touching code."
      ]
    },
    tech: [
      { layer: { cz: "Frontend", en: "Frontend" }, value: "React + Vite + TypeScript (SPA)" },
      { layer: { cz: "Routing", en: "Routing" }, value: "React Router" },
      { layer: { cz: "Obsah", en: "Content" }, value: "REST API (/api/models)" },
      { layer: { cz: "Administrace", en: "Admin" }, value: "Přihlášením chráněná správa modelů a štítků" },
      { layer: { cz: "Média", en: "Media" }, value: "Oddělené úložiště obrázků (/media/…)" },
      { layer: { cz: "Vzhled", en: "Styling" }, value: "Patrick Hand font, „papírová“ paleta" }
    ]
  }
];
