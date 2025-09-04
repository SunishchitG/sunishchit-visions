import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";

const projects = [
  {
    title: "Distributed File Storage Service",
    period: "March - April 2025",
    description: "Engineered a distributed file storage system using FastAPI, SQLAlchemy, AWS S3, and PostgreSQL, enabling secure and scalable cloud storage with user authentication, access control, and encryption.",
    highlights: [
      "Implemented user authentication, access control, and encryption",
      "Enhanced data confidentiality and integrity",
      "Optimized file upload/download throughput, reducing latency by 40%"
    ],
    technologies: ["Python", "FastAPI", "AWS S3", "PostgreSQL", "SQLAlchemy"],
    featured: true
  },
  {
    title: "AI-Powered Job Application Tracker",
    period: "Jan 2025",
    description: "Built a full-stack application with React + TypeScript frontend and Node.js/Express backend to streamline job tracking, featuring Chrome Extension for LinkedIn integration.",
    highlights: [
      "Integrated Chrome Extension for LinkedIn one-click job saving",
      "AI-assisted resume tailoring and job recommendations",
      "Deployed resume versioning and automated email reminders",
      "Improved application success rate by 30%"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "Chrome Extension", "AI"],
    featured: true
  },
  {
    title: "Fake News Detector Using NLP",
    period: "Dec 2024",
    description: "Collaborated with a team of four to design and implement a web-based platform for detecting misinformation using Flask, Python, and NLP models.",
    highlights: [
      "Contributed to model training and deployment pipeline",
      "Implemented text preprocessing and feature extraction",
      "Achieved 85% detection accuracy",
      "Built classification system with team collaboration"
    ],
    technologies: ["Python", "Flask", "NLP", "Machine Learning", "Text Processing"],
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions built with modern technologies and best practices
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`p-6 gradient-card shadow-card hover:shadow-elegant transition-smooth group animate-slide-up ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <Badge className="gradient-primary text-primary-foreground">Featured</Badge>
                  )}
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{project.period}</span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 transition-smooth hover:bg-primary hover:text-primary-foreground">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 transition-smooth hover:bg-primary hover:text-primary-foreground">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;