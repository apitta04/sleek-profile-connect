
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Analytics from "@/components/Analytics";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Analytics />
    </div>
  );
};

export default Index;
