
import { useState } from "react";
import { Github, ExternalLink, Upload } from "lucide-react";
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
      title: "Student Management System",
      description: "A full-stack web application for managing student records with authentication and CRUD operations",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      github: "https://github.com/anishpitta/student-management",
      demo: "https://student-management-demo.com",
      tech: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      id: 2,
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts and responsive design",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      github: "https://github.com/anishpitta/weather-app",
      demo: "https://weather-app-demo.com",
      tech: ["JavaScript", "API Integration", "CSS3", "HTML5"]
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and skills with modern design and animations",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      github: "https://github.com/anishpitta/portfolio",
      demo: "https://anishpitta.dev",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
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
        image: newProject.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              A showcase of my recent work and contributions
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                <Upload className="w-4 h-4" />
                <span>Add Project</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg bg-gray-900 border-purple-500/20">
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
                    className="bg-gray-800 border-purple-500/30 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="description" className="text-gray-300">Description</Label>
                  <Textarea
                    id="description"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    className="bg-gray-800 border-purple-500/30 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="github" className="text-gray-300">GitHub URL</Label>
                  <Input
                    id="github"
                    value={newProject.github}
                    onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
                    className="bg-gray-800 border-purple-500/30 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="demo" className="text-gray-300">Demo URL</Label>
                  <Input
                    id="demo"
                    value={newProject.demo}
                    onChange={(e) => setNewProject({ ...newProject, demo: e.target.value })}
                    className="bg-gray-800 border-purple-500/30 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="tech" className="text-gray-300">Technologies (comma separated)</Label>
                  <Input
                    id="tech"
                    value={newProject.tech}
                    onChange={(e) => setNewProject({ ...newProject, tech: e.target.value })}
                    className="bg-gray-800 border-purple-500/30 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="image" className="text-gray-300">Image URL (optional)</Label>
                  <Input
                    id="image"
                    value={newProject.image}
                    onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                    className="bg-gray-800 border-purple-500/30 text-white"
                  />
                </div>
                <Button onClick={addProject} className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Add Project
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 border-purple-500/20">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-purple-300">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
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
