import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just chat about technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <Card className="p-8 gradient-card shadow-card hover:shadow-elegant transition-smooth group">
            <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-smooth">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-smooth">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">sunishchit.ghimire@bison.howard.edu</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Social Links Card */}
          <Card className="p-8 gradient-card shadow-card hover:shadow-elegant transition-smooth group">
            <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-smooth">Let's Connect</h3>
            <div className="space-y-4">
              <Button
                onClick={() => window.open('https://github.com/SunishchitG', '_blank')}
                variant="outline"
                size="lg"
                className="w-full justify-start text-left h-16 transition-smooth hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="h-6 w-6 mr-4" />
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-sm opacity-70">View my code and projects</p>
                </div>
                <ExternalLink className="h-4 w-4 ml-auto" />
              </Button>

              <Button
                onClick={() => window.open('https://www.linkedin.com/in/sunishchit03087256/', '_blank')}
                variant="outline"
                size="lg"
                className="w-full justify-start text-left h-16 transition-smooth hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-6 w-6 mr-4" />
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-sm opacity-70">Connect professionally</p>
                </div>
                <ExternalLink className="h-4 w-4 ml-auto" />
              </Button>

              <Button
                onClick={() => window.open('https://yourportfolio.com', '_blank')}
                variant="outline"
                size="lg"
                className="w-full justify-start text-left h-16 transition-smooth hover:bg-primary hover:text-primary-foreground"
              >
                <ExternalLink className="h-6 w-6 mr-4" />
                <div>
                  <p className="font-semibold">Portfolio</p>
                  <p className="text-sm opacity-70">Explore more of my work</p>
                </div>
                <ExternalLink className="h-4 w-4 ml-auto" />
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Open to internship opportunities and collaborative projects
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
