"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/lib/i18n-context";
import { useState } from "react";
import { Copy } from "lucide-react";

export default function Footer() {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);
  const email = "santiagovillarroel001@gmail.com";
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

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
          <Link href="https://github.com/SantiagoVillarroel" target="_blank">{t("footer.github", "GitHub")}</Link>
        </div>
        <div className="flex justify-center items-center gap-2 mt-2">
          <span>{email}</span>
          <button
            onClick={handleCopy}
            className="p-1 rounded hover:bg-muted transition"
            aria-label="Copy email"
          >
            <Copy size={16} />
          </button>
          {copied && (
            <span className="ml-2 text-xs text-green-500">Copied!</span>
          )}
        </div>
        <p className="text-xs text-muted-foreground">
          {t("footer.copyright", "© {year} Santiago. Built with Next.js + Tailwind.").replace("{year}", new Date().getFullYear().toString())}
        </p>
      </div>
    </motion.footer>
  );
}
