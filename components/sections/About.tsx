"use client";

import { useI18n } from "@/lib/i18n-context";

export default function About() {
  const { t } = useI18n();

  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 py-16"
    >
      <h2 className="text-3xl font-bold mb-6">{t("about.title", "About")}</h2>

      <p className="text-muted-foreground leading-relaxed">
        {t("about.description", "I'm a software developer focused on building clean, scalable web applications. I enjoy working with React, Next.js, backend APIs, and exploring how AI can enhance developer and user experiences.")}
      </p>
    </section>
  );
}
