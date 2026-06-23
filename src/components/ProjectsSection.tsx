import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Pave Guardian",
    description: "A smart pothole detection & mapping system. Built an ML model using mobile accelerometer data to detect road anomalies (datasets from Kaggle), with community-based reporting and map visualization for real-time tracking.",
    tech: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    github: "https://github.com/udaykiran-404/pave-guardian",
    live: null,
  },
  {
    title: "VidhyaSarathi",
    description: "An AI-based career guidance system for 10th-grade students that provides career recommendations based on aptitude quizzes, using AI APIs for personalized reporting and Firebase for secure data storage.",
    tech: ["Python", "AI APIs", "Firebase"],
    github: "https://github.com/udaykiran-404/VidhyaSarathi-AI-based-career-guidance-",
    live: null,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-10">Projects</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <div className="group p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono text-xs text-primary/70 bg-primary/5 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
