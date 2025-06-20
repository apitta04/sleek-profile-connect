
import { Github, Linkedin, ArrowDown, Mail, MapPin, GraduationCap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Track page views
  useEffect(() => {
    const trackVisit = () => {
      const visits = parseInt(localStorage.getItem('portfolioVisits') || '0');
      localStorage.setItem('portfolioVisits', (visits + 1).toString());
      console.log(`Portfolio visits: ${visits + 1}`);
    };
    
    trackVisit();
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden shadow-2xl shadow-purple-500/30 ring-4 ring-purple-500/30 hover:ring-purple-400/50 transition-all duration-300">
            <img 
              src="/lovable-uploads/0fbb1bc5-9dd2-4cd9-b456-541f8a8cb94c.png" 
              alt="Anish Pitta"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
            Anish Pitta
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-purple-300 mb-8 animate-fade-in">
          Electrical Engineering Student
        </p>
        
        {/* Key Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-fade-in">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-400/30 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-2">
              <GraduationCap className="w-5 h-5 text-purple-300" />
            </div>
            <p className="text-sm text-purple-300 font-semibold">Texas Tech University</p>
            <p className="text-xs text-gray-400">EE + CS & Business Minor</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-4 border border-blue-400/30 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-2">
              <Calendar className="w-5 h-5 text-blue-300" />
            </div>
            <p className="text-sm text-blue-300 font-semibold">GPA: 3.46</p>
            <p className="text-xs text-gray-400">Expected May 2026</p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl p-4 border border-pink-400/30 backdrop-blur-sm hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-2">
              <Mail className="w-5 h-5 text-pink-300" />
            </div>
            <p className="text-sm text-pink-300 font-semibold">Contact</p>
            <p className="text-xs text-gray-400">anishpitta12@gmail.com</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl p-4 border border-purple-400/30 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-2">
              <MapPin className="w-5 h-5 text-purple-300" />
            </div>
            <p className="text-sm text-purple-300 font-semibold">Location</p>
            <p className="text-xs text-gray-400">Austin, TX</p>
          </div>
        </div>

        {/* About Section - Blended into background */}
        <div className="mb-8 animate-fade-in">
          <h3 className="text-2xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About
            </span>
          </h3>
          <p className="text-gray-300 text-left leading-relaxed max-w-3xl mx-auto mb-4">
            I'm an Electrical Engineering student at Texas Tech University with a strong interest in semiconductor technology, hardware design, and embedded systems. I enjoy working on hands-on projects that combine creativity and technical problem-solving—especially those that bring real-world systems to life.
          </p>
          <p className="text-gray-300 text-left leading-relaxed max-w-3xl mx-auto mb-4">
            Through leading multiple hardware-focused projects, I've developed practical skills in circuit design, sensor integration, and microcontroller programming. I was recently accepted into Texas Tech's Semiconductor Design & Engineering (SDE) program, where I'll gain deeper exposure to the semiconductor industry through mentorship, technical training, and professional development.
          </p>
          <p className="text-gray-300 text-left leading-relaxed max-w-3xl mx-auto">
            I'm actively seeking internship opportunities where I can apply my knowledge, grow my experience, and contribute to impactful, innovative work in semiconductors and embedded systems. Always open to connecting with like-minded professionals and learning from those in the industry.
          </p>
        </div>

        <div className="flex items-center justify-center space-x-6 mb-12 animate-fade-in">
          <Button 
            variant="outline" 
            size="lg" 
            className="flex items-center space-x-2 border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white bg-purple-500/10 backdrop-blur-sm shadow-lg shadow-purple-500/20 transform hover:scale-105 transition-all duration-300"
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
            className="flex items-center space-x-2 border-2 border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white bg-blue-500/10 backdrop-blur-sm shadow-lg shadow-blue-500/20 transform hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="https://github.com/apitta04" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </Button>
        </div>
        <button
          onClick={() => scrollToSection("experience")}
          className="animate-bounce hover:scale-110 transition-transform duration-300"
        >
          <ArrowDown className="w-6 h-6 text-purple-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
