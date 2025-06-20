import { useState } from "react";
import { Github, ExternalLink, Upload, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Chicken Coop Automation with Predator Deterrent System",
      description: "Collaborated with a team of four students to automate a chicken coop using a Raspberry Pi and Python. Designed a system to control the coop door, opening and closing it automatically at nightfall, based on the assumption that all chickens seek the coop for security. Integrated a predator detection system capable of identifying animals and deploying various deterrent methods. Ensured all external components were weather-resistant.",
      image: "https://images.unsplash.com/photo-1548204973-d4b5a6b05b50?w=400&h=300&fit=crop",
      github: "",
      demo: "",
      tech: ["Raspberry Pi", "Python", "Automation", "IoT", "Weather-resistant Design"],
      period: "January 2025 - Present",
      type: "Microcontroller Lab"
    },
    {
      id: 2,
      title: "Lock-In - 2-Factor Authentication System",
      description: "As a participant in a hackathon, I led a team to build 'Lock-In,' a 2-factor authentication system using Arduino, integrating Face ID with OpenCV to recognize owners' faces and RFID tags to detect valid and invalid tags. We utilized Python, OpenCV, and embedded systems for seamless operation.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      github: "",
      demo: "",
      tech: ["Arduino", "Face ID", "OpenCV", "Python", "RFID", "Embedded Systems"],
      period: "September 2024",
      type: "Hackathon Project",
      award: "HackWesTX 2024 Project"
    },
    {
      id: 3,
      title: "Tracer Bot",
      description: "Designed and implemented an office rover using an Artix-7 FPGA (Basys3 board) to autonomously identify card colors, drive by tracking a metal line using IPS sensors, communicate via IR signals, and perform tasks like picking and dropping off packages.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      github: "",
      demo: "",
      tech: ["FPGA", "Artix-7", "Basys3", "IPS Sensors", "IR Communication", "Autonomous Navigation"],
      period: "August 2024 – September 2024",
      type: "Project Lab"
    },
    {
      id: 4,
      title: "Four-Way Traffic Light System",
      description: "Designed and implemented a four-way traffic signal circuit on a breadboard using logic gates. Simulated real-world traffic light operation by controlling LEDs to represent signal changes",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
      github: "",
      demo: "",
      tech: ["Logic Gates", "Circuit Design", "LED Control", "Breadboard"],
      period: "August 2023 – December 2023",
      type: "Student Project"
    },
    {
      id: 5,
      title: "Solar Tracker",
      description: "Developed a dome-shaped solar tracking system using photoresistors to detect light intensity. Designed a mechanism that adjusts solar panel orientation based on the sun's position to maximize energy absorption.",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=400&h=300&fit=crop",
      github: "",
      demo: "",
      tech: ["Photoresistors", "Solar Panels", "Light Detection", "Energy Optimization"],
      period: "August 2023 – December 2023",
      type: "Student Project"
    },
    {
      id: 6,
      title: "Random Number Generator Circuit",
      description: "Designed and built a digital circuit that generates random numbers using logic gates and a clock signal. Implemented using a 555 timer, counters, and a seven-segment display",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      github: "",
      demo: "",
      tech: ["555 Timer", "Logic Gates", "Counters", "Seven-segment Display", "Digital Circuit"],
      period: "August 2022 – May 2022",
      type: "Student Project"
    },
    {
      id: 7,
      title: "Self-Cleaning Bot",
      description: "Developed an autonomous robot equipped with rotating brushes and a suction system to clean surfaces efficiently. Integrated sensors for obstacle detection and path optimization",
      image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=400&h=300&fit=crop",
      github: "",
      demo: "",
      tech: ["Autonomous Navigation", "Sensors", "Suction System", "Path Optimization"],
      period: "August 2018 – July 2020",
      type: "Student Project",
      award: "Best Invention Award - Oakland Schools of Education Foundation"
    }
  ]);

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    github: "",
    demo: "",
    tech: "",
    image: ""
  });

  const addProject = () => {
    if (newProject.title && newProject.description) {
      const project = {
        id: Date.now(),
        ...newProject,
        tech: newProject.tech.split(",").map(t => t.trim()),
        image: newProject.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
        period: "Custom Project",
        type: "Personal Project"
      };
      setProjects([...projects, project]);
      setNewProject({ title: "", description: "", github: "", demo: "", tech: "", image: "" });
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-purple-900/10 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div className="text-center flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                Engineering Projects
              </span>
            </h2>
            <p className="text-xl text-gray-300 animate-fade-in">
              A showcase of my engineering and technical projects
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 animate-fade-in">
                <Upload className="w-4 h-4" />
                <span>Add Project</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg bg-gray-900/95 border-purple-500/30 backdrop-blur-sm">
              <DialogHeader>
                <DialogTitle className="text-purple-300">Add New Project</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-gray-300">Project Title</Label>
                  <Input
                    id="title"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    className="bg-gray-800/50 border-purple-500/30 text-white backdrop-blur-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="description" className="text-gray-300">Description</Label>
                  <Textarea
                    id="description"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    className="bg-gray-800/50 border-purple-500/30 text-white backdrop-blur-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="github" className="text-gray-300">GitHub URL</Label>
                  <Input
                    id="github"
                    value={newProject.github}
                    onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
                    className="bg-gray-800/50 border-purple-500/30 text-white backdrop-blur-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="demo" className="text-gray-300">Demo URL</Label>
                  <Input
                    id="demo"
                    value={newProject.demo}
                    onChange={(e) => setNewProject({ ...newProject, demo: e.target.value })}
                    className="bg-gray-800/50 border-purple-500/30 text-white backdrop-blur-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="tech" className="text-gray-300">Technologies (comma separated)</Label>
                  <Input
                    id="tech"
                    value={newProject.tech}
                    onChange={(e) => setNewProject({ ...newProject, tech: e.target.value })}
                    className="bg-gray-800/50 border-purple-500/30 text-white backdrop-blur-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="image" className="text-gray-300">Image URL (optional)</Label>
                  <Input
                    id="image"
                    value={newProject.image}
                    onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                    className="bg-gray-800/50 border-purple-500/30 text-white backdrop-blur-sm"
                  />
                </div>
                <Button onClick={addProject} className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105 transition-all duration-300">
                  Add Project
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="group hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 border-purple-500/20 hover:scale-[1.02] animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.award && (
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                    <Award className="w-3 h-3" />
                    <span>Hackathon Project</span>
                  </div>
                )}
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg text-purple-300 leading-tight">{project.title}</CardTitle>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-pink-300 font-medium">{project.type}</span>
                  <span className="text-sm text-blue-300">{project.period}</span>
                </div>
                <CardDescription className="text-gray-300 text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {project.award && (
                  <div className="mb-4 p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                    <p className="text-purple-300 text-sm font-medium">🏆 {project.award}</p>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30 hover:scale-105 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:scale-105 transition-all duration-300">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105 transition-all duration-300">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
