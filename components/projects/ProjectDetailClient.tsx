"use client";

import Image from "next/image";
import BackToProjects from "@/components/navigation/BackToProjects";
import ArchitectureGraph from "@/components/projects/ArchitectureGraph";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n-context";
import { Project } from "@/lib/projects";

interface ProjectDetailClientProps {
  project: Project;
}

// Helper to convert slug to camelCase for translation keys
const slugToCamelCase = (slug: string): string => {
  return slug
    .split('-')
    .map((word, index) => {
      if (index === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
};

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const { t } = useI18n();
  const projectKey = slugToCamelCase(project.slug);

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
          <Image
            src={project.image}
            alt={project.title}
            width={1000}
            height={200}
            className="rounded-md object-cover"
          />
        </div>
      )}

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">{t("projects.overview", "Overview")}</h2>
        <Card>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {t(`projectDetails.${projectKey}.overview`, project.overview ?? project.description)}
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">{t("projects.problem", "Problem")}</h2>
        <Card>
          <CardContent>
            <p className="text-muted-foreground">
              {t(`projectDetails.${projectKey}.problem`, project.problem ?? "TBD: Describe the problem this project solves.")}
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">{t("projects.architecture", "Architecture")}</h2>
        {project.architectureGraph ? (
          <ArchitectureGraph data={project.architectureGraph} />
        ) : (
          <Card>
            <CardContent>
              <p className="text-muted-foreground">
                {project.architecture ?? "TBD: Add architecture overview, diagrams, and components."}
              </p>
            </CardContent>
          </Card>
        )}
      </section>
    </main>
  );
}
