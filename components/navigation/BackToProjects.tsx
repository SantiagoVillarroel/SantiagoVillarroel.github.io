"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import React from "react";

export default function BackToProjects() {
  const router = useRouter();

  const handleClick = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      // Go back in history which preserves scroll position when possible
      window.history.back();
    } else {
      // Fallback to anchor on the homepage
      router.push("/#projects");
    }
  };

  return (
    <Button onClick={handleClick} size="sm">
      Back
    </Button>
  );
}
