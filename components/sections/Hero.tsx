"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n-context";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl font-bold mb-6">
          {t("hero.greeting", "Hi, I'm Santiago")} 👋
        </h1>

        <p className="text-lg text-muted-foreground mb-8">
          {t("hero.subtitle", "I build modern web applications with React, Next.js and clean architecture.")}
        </p>

        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#projects">{t("hero.viewProjects", "View Projects")}</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">{t("hero.contactMe", "Contact Me")}</a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
