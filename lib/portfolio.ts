import type { Lang } from "./types";

export type PortfolioStatus = "active" | "experiment" | "private";

export interface PortfolioProject {
  id: string;
  title: string;
  repo?: string;
  visibility: "public" | "private";
  status: PortfolioStatus;
  language: string;
  stack: string[];
  summary: Record<Lang, string>;
  detail: Record<Lang, string>;
  focus: Record<Lang, string>;
}

export const portfolioProjects: PortfolioProject[] = [
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
