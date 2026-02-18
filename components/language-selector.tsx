"use client";

import { useI18n } from "@/lib/i18n-context";
import { Button } from "@/components/ui/button";

export default function LanguageSelector() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex gap-1">
      <Button
        variant={locale === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => setLocale("en")}
        className="text-xs px-2"
      >
        EN
      </Button>
      <Button
        variant={locale === "es" ? "default" : "outline"}
        size="sm"
        onClick={() => setLocale("es")}
        className="text-xs px-2"
      >
        ES
      </Button>
    </div>
  );
}
