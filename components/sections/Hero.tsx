"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n-context";
import { useState } from "react";

export default function Hero() {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-[50vh] flex items-center justify-center px-6 mt-20"
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
          <div className="flex items-center gap-2 bg-muted rounded px-3 py-2">
            <span className="font-mono text-base select-all">santiagovillarroel001@gmail.com</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText("santiagovillarroel001@gmail.com");
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              }}
              className="p-1 rounded hover:bg-primary/20 transition"
              aria-label="Copy email"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            </button>
            {copied && (
              <span className="ml-2 text-xs text-green-500">Copied!</span>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
