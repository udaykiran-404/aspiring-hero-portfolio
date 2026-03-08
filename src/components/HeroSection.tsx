import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-glow" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Hello, I'm
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Rahul Sharma
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          BTech Computer Science &amp; Engineering
        </p>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Aspiring full-stack developer with a passion for building elegant solutions and exploring machine learning.
        </p>

        <div className="flex items-center justify-center gap-4 mb-16 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:rahul@example.com" className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <a href="#about" className="inline-flex animate-bounce text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
