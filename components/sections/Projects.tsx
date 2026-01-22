"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Legal AI Assistant",
    description: "AI-powered legal document analysis and chat system.",
  },
  {
    title: "Prolog Education Tool",
    description: "Visual query-based learning platform for logic programming.",
  },
  {
    title: "Discounts App",
    description: "Full-stack app with NestJS and React Native.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <h2 className="text-3xl font-bold mb-12">Projects</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {project.description}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
