import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C", "HTML/CSS", "Swift", "Kotlin", "Scala"],
    color: "bg-tech-blue"
  },
  {
    title: "Web & Frameworks",
    icon: Globe,
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "Flask", "Spark", "Tailwind CSS", "Numpy", "Pandas"],
    color: "bg-tech-purple"
  },
  {
    title: "Databases & Cloud",
    icon: Database,
    skills: ["AWS Services (S3, Lambda, ElastiCache, DRS)", "MongoDB", "PostgreSQL", "Cloud Computing"],
    color: "bg-primary"
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "VS Code", "Xcode", "Eclipse", "Android Studio", "Postman", "Linux"],
    color: "bg-accent"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proficient in modern technologies and frameworks for building scalable applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-8 gradient-card shadow-card hover:shadow-elegant transition-smooth group animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center group-hover:shadow-glow transition-smooth`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="bg-background hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default text-sm py-1 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;