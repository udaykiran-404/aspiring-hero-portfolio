import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "C++", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 80 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 70 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 78 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express", level: 80 },
      { name: "Django", level: 65 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 60 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 78 },
      { name: "Linux", level: 72 },
    ],
  },
];

const csTopics = ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Computer Networks"];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-12">Skills & Technologies</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {skillGroups.map((group, gi) => (
            <AnimatedSection key={group.category} delay={gi * 0.1}>
              <h3 className="text-foreground font-semibold text-lg mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-foreground/80">{skill.name}</span>
                      <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-border/60 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary/70 to-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: gi * 0.1 + si * 0.06,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CS Fundamentals as a horizontal strip */}
        <AnimatedSection delay={0.4} className="mt-14">
          <h3 className="text-foreground font-semibold text-lg mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            CS Fundamentals
          </h3>
          <div className="flex flex-wrap gap-3">
            {csTopics.map((topic, i) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                className="px-4 py-2.5 rounded-lg border border-border bg-background/60 text-sm text-foreground/80 hover:border-primary/50 hover:text-primary transition-colors"
              >
                {topic}
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SkillsSection;
