import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-primary text-sm tracking-widest uppercase mb-4"
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Udaykiran
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4"
        >
          BTech Computer Science &amp; Engineering
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="my-8 max-w-lg mx-auto"
        >
          <blockquote className="border-l-2 border-primary/40 pl-4 italic text-foreground/70 text-base md:text-lg leading-relaxed">
            "I don't just write code — I craft experiences. Every line is a step toward solving real-world problems with elegance and impact."
          </blockquote>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-muted-foreground max-w-xl mx-auto mb-10 text-sm"
        >
          Passionate about full-stack development, machine learning, and building products that matter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:udaykiran@example.com" className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="inline-flex animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
