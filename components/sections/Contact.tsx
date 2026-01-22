"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-2xl mx-auto px-6 py-32"
    >
      <h2 className="text-3xl font-bold mb-8">Contact</h2>

      <form className="space-y-4">
        <Input placeholder="Your name" />
        <Input type="email" placeholder="Your email" />
        <Textarea placeholder="Your message" rows={5} />

        <Button size="lg" className="w-full">
          Send message
        </Button>
      </form>
    </section>
  );
}
