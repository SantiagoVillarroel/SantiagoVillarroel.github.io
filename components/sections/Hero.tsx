"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
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
          Hi, I'm Santiago 👋
        </h1>

        <p className="text-lg text-muted-foreground mb-8">
          I build modern web applications with React, Next.js and clean architecture.
        </p>

        <div className="flex justify-center gap-4">
          <Button size="lg">View Projects</Button>
          <Button variant="outline" size="lg">
            Contact Me
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
