import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Splunk",
    role: "Software Development Engineer Intern",
    location: "Boulder, Colorado",
    period: "May 2025 - Aug 2025",
    description: [
      "Developed a chatbot agent that integrates with Splunk's Search Processing Language (SPL) to query and retrieve log data, enabling natural language interaction with Splunk dashboards.",
      "Implemented Python backend services with Splunk REST API to process user queries, parse responses, and return insights in real time",
      "Enhanced usability by supporting alert notifications and automated troubleshooting workflows, reducing manual dashboard searches",
      "Deployed on Splunk Enterprise/Cloud environment, showcasing expertise in data ingestion, query optimization, and log analytics"
    ],
    skills: ["Python", "Splunk", "REST API", "SPL", "Cloud Computing"]
  },
  {
    company: "Howard University",
    role: "Research Assistant",
    location: "Washington DC",
    period: "Feb 2024 - Apr 2025",
    description: [
      "Developed Python-based simulations to model quasiperiodic functions, quasicrystals, and tilings, applying computational methods to explore complex structural patterns",
      "Designed and implemented algorithms and data-driven models to analyze system behaviors, leveraging Python libraries for visualization and performance optimization",
      "Applied principles of computational modeling and algorithm design to support research on large-scale pattern recognition and structural analysis"
    ],
    skills: ["Python", "Algorithm Design", "Data Analysis", "Computational Modeling", "Research"]
  },
  {
    company: "Howard University",
    role: "Teaching Fellow",
    location: "Washington DC",
    period: "Sept 2023 - Dec 2023",
    description: [
      "Led weekly Pre-Calculus and Algebra sessions for 15+ first-year students, boosting pass rates from 75% to 95%",
      "Provided individualized support that improved test performance by 18%",
      "Collaborated with coordinators to design review resources aligned with curriculum, contributing to a 40% reduction in course failure rates"
    ],
    skills: ["Teaching", "Mathematics", "Curriculum Design", "Student Support", "Leadership"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building impactful solutions through internships, research, and leadership roles
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 gradient-card shadow-card hover:shadow-elegant transition-smooth group animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-smooth">{exp.role}</h3>
                  <p className="text-xl text-primary font-semibold mb-2">{exp.company}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6 text-muted-foreground">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 leading-relaxed">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-smooth">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;