
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
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
            JD
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          John Doe
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-4">
          Full Stack Developer & Creative Problem Solver
        </p>
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          Passionate about creating elegant solutions to complex problems. 
          I build modern web applications with clean code and beautiful user experiences.
        </p>
        <div className="flex items-center justify-center space-x-4 mb-12">
          <Button variant="outline" size="lg" className="flex items-center space-x-2">
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </Button>
          <Button variant="outline" size="lg" className="flex items-center space-x-2">
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </Button>
        </div>
        <button
          onClick={() => scrollToSection("skills")}
          className="animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
