"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "@/messages/en.json";
import es from "@/messages/es.json";

type Locale = "en" | "es";

const messages: Record<Locale, typeof en> = { en, es };

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: typeof en;
  t: (key: string, defaultValue?: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load from localStorage on mount to preserve user preference
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && ["en", "es"].includes(saved)) {
      setLocaleState(saved);
      document.documentElement.lang = saved;
    } else {
      document.documentElement.lang = "en";
    }
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    document.documentElement.lang = newLocale;
    // Trigger re-render of all using components by triggering a layout shift detection
    window.dispatchEvent(new CustomEvent("localeChange", { detail: newLocale }));
  };

  // Simple nested key accessor (e.g., "projects.title")
  const t = (key: string, defaultValue: string = key): string => {
    const keys = key.split(".");
    let value: any = messages[locale];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return defaultValue;
      }
    }

    return typeof value === "string" ? value : defaultValue;
  };

  // Always provide context, even during hydration
  return (
    <I18nContext.Provider
      value={{
        locale,
        setLocale,
        messages: messages[locale],
        t,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
