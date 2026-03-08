import { Mail, MapPin, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-4">Get In Touch</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Let's build something great together
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="text-muted-foreground max-w-lg mx-auto mb-10">
            I'm currently looking for internship and full-time opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a href="mailto:rahul.sharma@example.com" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" /> rahul.sharma@example.com
            </a>
            <span className="hidden sm:block text-border">|</span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" /> +91 98765 43210
            </span>
            <span className="hidden sm:block text-border">|</span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" /> New Delhi, India
            </span>
          </div>
          <a
            href="mailto:rahul.sharma@example.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            Say Hello
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
