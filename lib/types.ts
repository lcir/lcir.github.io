export type Lang = "cz" | "en";

export interface ContactInfo {
  email: string;
  linkedin: string;
  website: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  title: string;
  start: string;
  end: string;
  location: string;
  summary: string;
  stack: string[];
  detailHtml?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  field: string;
  start: string;
  end: string;
}

export interface CvData {
  name: string;
  role: string;
  tagline: string;
  location: string;
  contact: ContactInfo;
  topSkills: string[];
  skills: string[];
  experience: ExperienceItem[];
  education: EducationItem[];
}

export interface CvDataMap {
  cz: CvData;
  en: CvData;
}
