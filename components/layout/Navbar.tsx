"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../theme-toggle";
import LanguageSelector from "@/components/language-selector";
import { useI18n } from "@/lib/i18n-context";
import { useState } from "react";

export default function Navbar() {
    const { t, locale } = useI18n();
    const [open, setOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur border-b"
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="font-semibold text-lg">
                    Santiago's Portfolio
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <Link href="#about" className="text-muted-foreground hover:text-foreground">
                        {t("nav.about", "About")}
                    </Link>
                    <Link href="#projects" className="text-muted-foreground hover:text-foreground">
                        {t("nav.projects", "Projects")}
                    </Link>

                    <Button
                        variant="outline"
                        size="sm"
                        asChild
                    >
                        <a
                            href={locale === "en" ? "/resume-en.pdf" : "/resume-es.pdf"}
                            download
                        >
                            {t("nav.resume", "Resume")}
                        </a>
                    </Button>

                    <ThemeToggle />
                    <LanguageSelector />
                </div>
            </div>
        </motion.nav>
    );
}
