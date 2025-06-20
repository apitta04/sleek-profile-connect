
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
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://your-ecommerce-demo.com",
      tech: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      github: "https://github.com/yourusername/taskmanager",
      demo: "https://your-taskmanager-demo.com",
      tech: ["React", "Firebase", "Material-UI"]
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
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div className="text-center flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">
              A showcase of my recent work and contributions
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center space-x-2">
                <Upload className="w-4 h-4" />
                <span>Add Project</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Add New Project</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Project Title</Label>
                  <Input
                    id="title"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="github">GitHub URL</Label>
                  <Input
                    id="github"
                    value={newProject.github}
                    onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="demo">Demo URL</Label>
                  <Input
                    id="demo"
                    value={newProject.demo}
                    onChange={(e) => setNewProject({ ...newProject, demo: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="tech">Technologies (comma separated)</Label>
                  <Input
                    id="tech"
                    value={newProject.tech}
                    onChange={(e) => setNewProject({ ...newProject, tech: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="image">Image URL (optional)</Label>
                  <Input
                    id="image"
                    value={newProject.image}
                    onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                  />
                </div>
                <Button onClick={addProject} className="w-full">
                  Add Project
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild>
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
