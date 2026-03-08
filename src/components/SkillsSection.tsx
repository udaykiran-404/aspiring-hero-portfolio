const skills = {
  "Languages": ["C++", "Python", "JavaScript", "TypeScript", "Java", "SQL"],
  "Frontend": ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  "Backend": ["Node.js", "Express", "Django", "REST APIs"],
  "Tools & Platforms": ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Linux"],
  "CS Fundamentals": ["Data Structures", "Algorithms", "DBMS", "OS", "Computer Networks"],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-10">Skills & Technologies</h2>
        <div className="grid gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-foreground font-semibold mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-md border border-border bg-muted/50 text-foreground/80 hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
