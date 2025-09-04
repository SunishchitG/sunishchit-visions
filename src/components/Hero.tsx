import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

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
      <div className="relative z-10 max-w-6xl mx-auto px-6 animate-fade-in">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-white drop-shadow-lg">Sunishchit</span>
              <span className="block text-white drop-shadow-lg">Ghimire</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/95 font-light max-w-xl mx-auto lg:mx-0 drop-shadow-md">
              Computer Science Student & Software Developer
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 text-white/90 text-base drop-shadow-md">
              <MapPin className="h-5 w-5" />
              <span>Howard University • Washington, DC</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button variant="outline" size="lg" className="bg-white/20 border-white/40 text-white hover:bg-white hover:text-primary transition-smooth backdrop-blur-sm w-full sm:w-auto">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="bg-white/20 border-white/40 text-white hover:bg-white hover:text-primary transition-smooth backdrop-blur-sm w-full sm:w-auto">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg" className="bg-white/20 border-white/40 text-white hover:bg-white hover:text-primary transition-smooth backdrop-blur-sm w-full sm:w-auto">
                <Mail className="h-5 w-5 mr-2" />
                Contact
              </Button>
            </div>
          </div>
          
          {/* Photo Section */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Photo Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-white/5 rounded-3xl backdrop-blur-sm transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                
                {/* Main Photo */}
                <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-elegant group-hover:shadow-glow transition-all duration-500">
                  <img 
                    src={profilePhoto} 
                    alt="Sunishchit Ghimire - Professional Headshot" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Photo Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/15 rounded-full backdrop-blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
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