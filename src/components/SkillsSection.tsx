import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Code2, Layout, Server, Wrench, GraduationCap } from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: Code2,
    items: ["C++", "Python", "JavaScript", "TypeScript", "Java", "SQL"],
  },
  {
    category: "Frontend",
    icon: Layout,
    items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "Django", "REST APIs"],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    items: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Linux"],
  },
  {
    category: "CS Fundamentals",
    icon: GraduationCap,
    items: ["Data Structures", "Algorithms", "DBMS", "OS", "Computer Networks"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-10">Skills & Technologies</h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <AnimatedSection key={group.category} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative p-5 rounded-xl border border-border bg-background/50 hover:border-primary/40 transition-colors duration-300 h-full"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-xl bg-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <group.icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-foreground font-semibold text-sm">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill, j) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.08 + j * 0.04 }}
                        className="px-2.5 py-1 text-xs rounded-full border border-border bg-muted/30 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
