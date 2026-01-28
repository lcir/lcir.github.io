import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface MarkdownParseResult<T> {
  data: T;
  content: string;
  sections: Record<string, string>;
}

export async function parseMarkdown<T>(raw: string): Promise<MarkdownParseResult<T>> {
  const parsed = matter(raw);
  const sections = splitSections(parsed.content);
  return {
    data: parsed.data as T,
    content: parsed.content,
    sections
  };
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const processed = await remark().use(html).process(markdown);
  return processed.toString();
}

function splitSections(content: string): Record<string, string> {
  const lines = content.split(/\r?\n/);
  const sections: Record<string, string> = {};
  let currentId: string | null = null;
  let buffer: string[] = [];

  const flush = () => {
    if (currentId) {
      sections[currentId] = buffer.join("\n").trim();
    }
  };

  for (const line of lines) {
    const match = line.match(/^##\s+(.+)$/);
    if (match) {
      flush();
      currentId = match[1].trim();
      buffer = [];
    } else {
      buffer.push(line);
    }
  }

  flush();
  return sections;
}
