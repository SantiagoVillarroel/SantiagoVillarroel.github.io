import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
/*
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
*/

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
