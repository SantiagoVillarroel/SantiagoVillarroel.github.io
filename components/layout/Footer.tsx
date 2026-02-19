"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/lib/i18n-context";

export default function Footer() {
  const { t } = useI18n();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 py-10 text-center space-y-4">
        <div className="flex justify-center gap-6 text-sm text-muted-foreground">
          <Link href="https://github.com" target="_blank">{t("footer.github", "GitHub")}</Link>
          <Link href="https://linkedin.com" target="_blank">{t("footer.linkedin", "LinkedIn")}</Link>
          <Link href="https://twitter.com" target="_blank">{t("footer.twitter", "X / Twitter")}</Link>
          <Link href="mailto:santiagovillarroel001@gmail.com" className="hover:text-foreground transition-colors">
            Email
          </Link>
        </div>

        <p className="text-xs text-muted-foreground">
          {t("footer.copyright", "© {year} Santiago. Built with Next.js + Tailwind.").replace("{year}", new Date().getFullYear().toString())}
        </p>
      </div>
    </motion.footer>
  );
}
