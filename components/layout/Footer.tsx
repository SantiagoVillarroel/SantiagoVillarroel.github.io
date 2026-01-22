"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
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
          <Link href="https://github.com" target="_blank">GitHub</Link>
          <Link href="https://linkedin.com" target="_blank">LinkedIn</Link>
          <Link href="https://twitter.com" target="_blank">X / Twitter</Link>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Santiago. Built with Next.js + Tailwind.
        </p>
      </div>
    </motion.footer>
  );
}
