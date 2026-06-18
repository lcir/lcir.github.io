import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolioProjects } from "../../../lib/portfolio";
import { ProjectDetailPage } from "../../../components/ProjectDetailPage";

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.id === slug);
  if (!project) {
    return { title: "Portfolio — Lukáš Cír" };
  }
  return {
    title: `${project.title} — Portfolio`,
    description: project.summary.en
  };
}

export default async function ProjectRoute({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.id === slug);
  if (!project) {
    notFound();
  }
  return <ProjectDetailPage slug={slug} />;
}
