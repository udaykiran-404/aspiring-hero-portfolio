import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "EcoTrack",
    description: "A full-stack web app that helps users track their carbon footprint with personalized suggestions to reduce environmental impact.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "SmartNotes AI",
    description: "An AI-powered note-taking application that automatically summarizes lectures and generates flashcards using NLP.",
    tech: ["Python", "Flask", "OpenAI API", "PostgreSQL"],
    github: "https://github.com",
    live: null,
  },
  {
    title: "Campus Connect",
    description: "A real-time campus event management platform with features like RSVPs, notifications, and event analytics.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "PathFinder Visualizer",
    description: "An interactive visualization tool for graph algorithms like Dijkstra's, A*, and BFS with customizable grids.",
    tech: ["React", "TypeScript", "Canvas API"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
