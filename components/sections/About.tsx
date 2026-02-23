"use client";

import { useI18n } from "@/lib/i18n-context";

export default function About() {
  const { t } = useI18n();

  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 py-8"
    >
      <h2 className="text-3xl font-bold mb-6">{t("about.title", "About")}</h2>

      <p className="text-muted-foreground leading-relaxed">
        {t(
          "about.description",
          "Full-stack developer experienced in web, APIs, AI, automation, and cloud deployment. I build scalable solutions using React, Next.js, Node.js, Python, and cloud platforms like AWS. Passionate about integrating AI and automation to solve real-world problems."
        )}
      </p>
    </section>
  );
}
