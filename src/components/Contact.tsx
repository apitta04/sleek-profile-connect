
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-t from-purple-900/20 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Ready to collaborate? Let's discuss opportunities and projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-purple-300 mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                    <Mail className="w-6 h-6 text-purple-300" />
                  </div>
                  <div>
                    <p className="font-medium text-purple-300">Email</p>
                    <p className="text-gray-300">anish.pitta@email.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                    <Phone className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-300">Phone</p>
                    <p className="text-gray-300">Available upon request</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-pink-500/30">
                    <MapPin className="w-6 h-6 text-pink-300" />
                  </div>
                  <div>
                    <p className="font-medium text-pink-300">Location</p>
                    <p className="text-gray-300">Open to opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-purple-300 mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex items-center space-x-2 border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
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
                  className="flex items-center space-x-2 border-blue-500/30 text-blue-300 hover:bg-blue-500/10"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </Button>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-b from-gray-900 to-gray-800 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-purple-300">Send a Message</CardTitle>
              <CardDescription className="text-gray-300">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                    <Input id="firstName" placeholder="John" className="bg-gray-800 border-purple-500/30 text-white placeholder-gray-400" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="bg-gray-800 border-purple-500/30 text-white placeholder-gray-400" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-gray-800 border-purple-500/30 text-white placeholder-gray-400" />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                  <Input id="subject" placeholder="Project Discussion" className="bg-gray-800 border-purple-500/30 text-white placeholder-gray-400" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-300">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    className="min-h-[120px] bg-gray-800 border-purple-500/30 text-white placeholder-gray-400"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
