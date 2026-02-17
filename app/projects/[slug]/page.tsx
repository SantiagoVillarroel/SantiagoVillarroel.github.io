import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BackToProjects from "@/components/navigation/BackToProjects";
import ArchitectureGraph from "@/components/projects/ArchitectureGraph";
import { projects } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Params {
  params: { slug: string } | Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <div className="flex gap-2">
          <span className="text-sm font-semibold px-3 py-1 rounded-full inline-block bg-muted">
            {project.status}
          </span>
          <BackToProjects />
        </div>
      </div>

      {project.image && (
        <div className="mb-6">
          <Image src={project.image} alt={project.title} width={1200} height={400} className="rounded-md object-cover" />
        </div>
      )}

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Overview</h2>
        <Card>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{project.overview ?? project.description}</p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Problem</h2>
        <Card>
          <CardContent>
            <p className="text-muted-foreground">{project.problem ?? "TBD: Describe the problem this project solves."}</p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Architecture</h2>
        {project.architectureGraph ? (
          <ArchitectureGraph data={project.architectureGraph} />
        ) : (
          <Card>
            <CardContent>
              <p className="text-muted-foreground">{project.architecture ?? "TBD: Add architecture overview, diagrams, and components."}</p>
            </CardContent>
          </Card>
        )}
      </section>
    </main>
  );
}
