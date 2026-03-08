const experiences = [
  {
    role: "Software Engineering Intern",
    company: "TechCorp India",
    period: "May 2025 – Jul 2025",
    points: [
      "Developed RESTful APIs serving 10K+ daily requests using Node.js and Express",
      "Improved frontend performance by 35% through code splitting and lazy loading",
      "Collaborated with a team of 5 engineers in an Agile environment",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "Mozilla Firefox",
    period: "Jan 2025 – Present",
    points: [
      "Resolved 12+ issues related to accessibility and UI improvements",
      "Participated in code reviews and community discussions",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "IIT Delhi — Data Structures",
    period: "Aug 2024 – Dec 2024",
    points: [
      "Conducted weekly doubt-clearing sessions for 60+ students",
      "Designed and evaluated programming assignments and quizzes",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-10">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
