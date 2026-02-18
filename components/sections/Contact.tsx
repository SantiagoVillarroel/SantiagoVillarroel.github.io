"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/lib/i18n-context";

export default function Contact() {
  const { t } = useI18n();

  return (
    <section
      id="contact"
      className="max-w-2xl mx-auto px-6 py-32"
    >
      <h2 className="text-3xl font-bold mb-8">{t("contact.title", "Contact")}</h2>

      <form className="space-y-4">
        <Input placeholder={t("contact.name", "Your name")} />
        <Input type="email" placeholder={t("contact.email", "Your email")} />
        <Textarea placeholder={t("contact.message", "Your message")} rows={5} />

        <Button size="lg" className="w-full">
          {t("contact.send", "Send message")}
        </Button>
      </form>
    </section>
  );
}
