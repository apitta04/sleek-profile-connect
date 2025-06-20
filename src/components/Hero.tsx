
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
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-lg shadow-purple-500/25">
            AP
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
            Anish Pitta
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-purple-300 mb-8">
          Electrical Engineering Student
        </p>
        
        {/* Key Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-4 border border-purple-500/20">
            <div className="flex items-center justify-center mb-2">
              <GraduationCap className="w-5 h-5 text-purple-300" />
            </div>
            <p className="text-sm text-purple-300 font-semibold">Texas Tech University</p>
            <p className="text-xs text-gray-400">EE + CS & Business Minor</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 border border-blue-500/20">
            <div className="flex items-center justify-center mb-2">
              <Calendar className="w-5 h-5 text-blue-300" />
            </div>
            <p className="text-sm text-blue-300 font-semibold">GPA: 3.46</p>
            <p className="text-xs text-gray-400">Expected May 2026</p>
          </div>
          
          <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-lg p-4 border border-pink-500/20">
            <div className="flex items-center justify-center mb-2">
              <Mail className="w-5 h-5 text-pink-300" />
            </div>
            <p className="text-sm text-pink-300 font-semibold">Contact</p>
            <p className="text-xs text-gray-400">anishpitta12@gmail.com</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-4 border border-purple-500/20">
            <div className="flex items-center justify-center mb-2">
              <MapPin className="w-5 h-5 text-purple-300" />
            </div>
            <p className="text-sm text-purple-300 font-semibold">Location</p>
            <p className="text-xs text-gray-400">Austin, TX</p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-gradient-to-r from-gray-900/60 to-gray-800/60 rounded-xl p-8 mb-8 border border-purple-500/20 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About
            </span>
          </h3>
          <p className="text-gray-300 text-left leading-relaxed max-w-3xl mx-auto">
            I'm an Electrical Engineering student at Texas Tech University with a strong interest in semiconductor technology, hardware design, and embedded systems. I enjoy working on hands-on projects that combine creativity and technical problem-solving—especially those that bring real-world systems to life.
          </p>
          <br />
          <p className="text-gray-300 text-left leading-relaxed max-w-3xl mx-auto">
            Through leading multiple hardware-focused projects, I've developed practical skills in circuit design, sensor integration, and microcontroller programming. I was recently accepted into Texas Tech's Semiconductor Design & Engineering (SDE) program, where I'll gain deeper exposure to the semiconductor industry through mentorship, technical training, and professional development.
          </p>
          <br />
          <p className="text-gray-300 text-left leading-relaxed max-w-3xl mx-auto">
            I'm actively seeking internship opportunities where I can apply my knowledge, grow my experience, and contribute to impactful, innovative work in semiconductors and embedded systems. Always open to connecting with like-minded professionals and learning from those in the industry.
          </p>
        </div>

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
          className="animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-purple-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
