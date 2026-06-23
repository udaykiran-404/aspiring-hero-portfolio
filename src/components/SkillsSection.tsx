import AnimatedSection from "./AnimatedSection";

const skills = {
  "Programming": ["C", "C++", "Java", "Python"],
  "Web Development": ["HTML", "CSS", "JavaScript", "Python Full Stack"],
  "AI / ML": ["Machine Learning", "Pandas", "Scikit-learn", "Data Analysis"],
  "Databases & Tools": ["MySQL", "Firebase", "GitHub", "Linux", "VS Code"],
  "Core CS": ["Data Structures & Algorithms", "DBMS", "OOP", "Operating Systems"],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-10">Skills & Technologies</h2>
        </AnimatedSection>
        <div className="grid gap-8">
          {Object.entries(skills).map(([category, items], i) => (
            <AnimatedSection key={category} delay={i * 0.1}>
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
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
