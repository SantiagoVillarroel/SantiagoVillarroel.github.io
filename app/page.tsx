import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
