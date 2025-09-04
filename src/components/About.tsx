import { Card } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Computer Science student at Howard University with hands-on experience 
            in software development, research, and teaching. I enjoy building innovative solutions 
            and contributing to meaningful projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 gradient-card shadow-card hover:shadow-elegant transition-smooth group">
            <div className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-smooth">
                <GraduationCap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-muted-foreground mb-2">Howard University</p>
              <p className="text-sm font-medium text-primary">Bachelor of Science in Computer Science</p>
              <p className="text-sm text-muted-foreground mt-2">Expected Graduation: May 2026</p>
            </div>
          </Card>
          
          <Card className="p-8 gradient-card shadow-card hover:shadow-elegant transition-smooth group">
            <div className="text-center">
              <div className="w-16 h-16 bg-tech-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-smooth">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
              <p className="text-2xl font-bold text-primary mb-2">3.79/4.0</p>
              <p className="text-sm text-muted-foreground">Cumulative GPA</p>
            </div>
          </Card>
          
          <Card className="p-8 gradient-card shadow-card hover:shadow-elegant transition-smooth group">
            <div className="text-center">
              <div className="w-16 h-16 bg-tech-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-smooth">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Relevant Coursework</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Senior Project, Operating Systems, Algorithms, Data Structures, 
                Large Scale Programming, Cloud Computing
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;