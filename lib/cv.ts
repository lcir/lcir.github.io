import { promises as fs } from "fs";
import path from "path";
import { CvData, CvDataMap, Lang } from "./types";
import { markdownToHtml, parseMarkdown } from "./markdown";

const CONTENT_DIR = path.join(process.cwd(), "content");

interface RawCvFrontmatter {
  name: string;
  role: string;
  tagline: string;
  location: string;
  contact: {
    email: string;
    linkedin: string;
    website: string;
  };
  topSkills: string[];
  skills: string[];
  experience: Array<{
    id: string;
    company: string;
    title: string;
    start: string;
    end: string;
    location: string;
    summary: string;
    stack: string[];
  }>;
  education: Array<{
    school: string;
    degree: string;
    field: string;
    start: string;
    end: string;
  }>;
}

async function loadCvFile(lang: Lang): Promise<CvData> {
  const file = lang === "cz" ? "cv.cz.md" : "cv.en.md";
  const filePath = path.join(CONTENT_DIR, file);
  const raw = await fs.readFile(filePath, "utf-8");
  const parsed = await parseMarkdown<RawCvFrontmatter>(raw);
  const detailsById: Record<string, string> = {};

  for (const [id, markdown] of Object.entries(parsed.sections)) {
    detailsById[id] = markdown ? await markdownToHtml(markdown) : "";
  }

  const experience = parsed.data.experience.map((item) => ({
    ...item,
    detailHtml: detailsById[item.id]
  }));

  return {
    name: parsed.data.name,
    role: parsed.data.role,
    tagline: parsed.data.tagline,
    location: parsed.data.location,
    contact: parsed.data.contact,
    topSkills: parsed.data.topSkills,
    skills: parsed.data.skills,
    experience,
    education: parsed.data.education
  };
}

export async function loadCvData(): Promise<CvDataMap> {
  const [cz, en] = await Promise.all([loadCvFile("cz"), loadCvFile("en")]);
  return { cz, en };
}
