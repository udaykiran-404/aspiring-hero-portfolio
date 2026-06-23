import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    role: "Python Full Stack Developer Intern",
    company: "EduSkills (AICTE)",
    period: "Jan 2026 – Mar 2026",
    points: [
      "Developed full-stack web modules using Python, managing backend logic and data flow",
      "Integrated APIs and databases to improve application architecture and real-world development workflows",
    ],
  },
  {
    role: "AI-ML Virtual Intern",
    company: "EduSkills (Supported by Google for Developers)",
    period: "Jul 2025 – Sep 2025",
    points: [
      "Implemented machine learning workflows, including data preprocessing, model training, and evaluation",
      "Explored AI applications and developed predictive models using data analysis techniques",
    ],
  },
  {
    role: "Team Lead",
    company: "Google Developers Groups",
    period: "Volunteering",
    points: [
      "Led a team during a competitive hackathon, managing task distribution and collaboration under strict time constraints",
      "Contributed to idea generation and the development of functional technical solutions",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-10">Experience</h2>
        </AnimatedSection>
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors">
                <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-primary/60 border-2 border-background" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-foreground font-semibold">{exp.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-primary/80 text-sm mb-3">{exp.company}</p>
                <ul className="space-y-1.5">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                      <span className="text-primary/40 mt-1">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
