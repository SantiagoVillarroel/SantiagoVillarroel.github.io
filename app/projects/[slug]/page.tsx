import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BackToProjects from "@/components/navigation/BackToProjects";
import ArchitectureGraph from "@/components/projects/ArchitectureGraph";
import { projects } from "@/lib/projects";
import ProjectDetailClient from "@/components/projects/ProjectDetailClient";

interface Params {
  params: { slug: string } | Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return <ProjectDetailClient project={project} />;
}