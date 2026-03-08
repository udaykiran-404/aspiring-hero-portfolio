import AnimatedSection from "./AnimatedSection";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">About Me</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-12 mt-8 items-start">
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              I'm a 3rd year BTech student at <span className="text-primary font-medium">Indian Institute of Technology, Delhi</span>, 
              majoring in Computer Science &amp; Engineering. I love turning complex problems into simple, 
              beautiful, and intuitive solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me participating in hackathons, contributing to open-source 
              projects, or exploring the latest in AI research. I'm currently seeking internship opportunities 
              in software development.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="hidden md:flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-border ring-2 ring-primary/20 ring-offset-4 ring-offset-background">
                <img src={profilePhoto} alt="Udaykiran" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl -z-10" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              {[
                { label: "Name", value: "Udaykiran" },
                { label: "University", value: "IIT Delhi" },
                { label: "Degree", value: "B.Tech CSE (2022–2026)" },
                { label: "CGPA", value: "8.7 / 10" },
                { label: "Location", value: "New Delhi, India" },
                { label: "Email", value: "rahul.sharma@example.com" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground text-sm">{item.label}</span>
                  <span className="text-foreground font-medium text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
