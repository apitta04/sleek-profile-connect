
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-lg shadow-purple-500/25">
            AP
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
            Anish Pitta
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-purple-300 mb-4">
          Computer Science Student & Software Developer
        </p>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Passionate about creating innovative solutions through code. Currently pursuing my degree while building 
          real-world applications and contributing to open source projects.
        </p>
        <div className="flex items-center justify-center space-x-4 mb-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="flex items-center space-x-2 border-purple-500 text-purple-300 hover:bg-purple-500/10"
            asChild
          >
            <a href="https://www.linkedin.com/in/anish-pitta/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="flex items-center space-x-2 border-blue-500 text-blue-300 hover:bg-blue-500/10"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </Button>
        </div>
        <button
          onClick={() => scrollToSection("experience")}
          className="animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-purple-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
