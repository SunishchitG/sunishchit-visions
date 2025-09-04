import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional workspace" 
          className="w-full h-full object-cover opacity-5 dark:opacity-3"
        />
        <div className="absolute inset-0 gradient-hero opacity-95"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        <div className="space-y-6">
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block text-white drop-shadow-lg">Sunishchit</span>
            <span className="block text-white drop-shadow-lg">Ghimire</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 font-light max-w-2xl mx-auto drop-shadow-md">
            Computer Science Student & Software Developer
          </p>
          
          <div className="flex items-center justify-center gap-2 text-white/90 text-lg drop-shadow-md">
            <MapPin className="h-5 w-5" />
            <span>Howard University • Washington, DC</span>
          </div>
          
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/20 border-white/40 text-white hover:bg-white hover:text-primary transition-smooth backdrop-blur-sm"
              onClick={() => window.open('https://github.com/SunishchitG', '_blank')}
            >
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/20 border-white/40 text-white hover:bg-white hover:text-primary transition-smooth backdrop-blur-sm"
              onClick={() => window.open('https://www.linkedin.com/in/sunishchit03087256/', '_blank')}
            >
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/20 border-white/40 text-white hover:bg-white hover:text-primary transition-smooth backdrop-blur-sm"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
