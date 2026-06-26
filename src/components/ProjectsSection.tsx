import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const projects = [
  {
    title: "SnippetVault",
    description: "Modern code snippet manager — Create, organize, search, and share code snippets with syntax highlighting, tags, collections, and dark mode.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Monaco Editor", "OAuth"],
    github: "https://github.com/deeplukhi/Snippet-Manager-Frontend",
    githubBackend: "https://github.com/deeplukhi/Snippet-Manager-Backend",
    live: "https://snippetvault-v1.vercel.app/",
  },
  {
    title: "ClipWise",
    description: "YouTube Video Summarizer — AI-powered transcript analysis that generates summaries, key points, and multiple export formats from any YouTube video.",
    tags: ["React", "TypeScript", "Express", "Prisma", "AI", "Socket.io"],
    github: "https://github.com/deeplukhi/ClipWise-frontend",
    githubBackend: "https://github.com/deeplukhi/ClipWise-backend",
    live: "https://clipwisee.vercel.app/",
  },
  {
    title: "Flight Route Planner",
    description: "Graph-based route finder implementing Dijkstra algorithm for cheapest & fastest routes with priority queue optimization and CLI interface.",
    tags: ["C++", "Dijkstra", "Graph", "Algorithms"],
    github: "https://github.com/deeplukhi/FlightRoutePlanner",
  },
  {
    title: "Social Recommendation Engine",
    description: "Graph-based recommendation system using BFS & collaborative filtering with adjacency list implementation and scalable recommendation logic.",
    tags: ["C++", "BFS", "Graph", "Recommendations"],
    github: "https://github.com/deeplukhi/Social-Recommendation-Engine",
  },
  {
    title: "CLI Authentication System",
    description: "File-based authentication system in C++ with password hashing, layered architecture, input validation, and Makefile automation.",
    tags: ["C++", "Authentication", "Security", "CLI"],
    github: "https://github.com/deeplukhi/cli-authentication-cpp",
  },
  {
    title: "CLI Calculator Engine",
    description: "Modular calculator in C++ featuring expression evaluation, comprehensive error handling, and clean OOP design patterns.",
    tags: ["C++", "OOP", "Expression Parser", "CLI"],
    github: "https://github.com/deeplukhi/CLI_CALCULATOR_ENGINE",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <ScrollAnimation>
          <h2 className="section-title">Projects</h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollAnimation
              key={project.title}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "up" : "up"}
            >
              <div className="project-card group h-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-foreground transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-1">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-muted rounded-full transition-colors"
                        aria-label={`View ${project.title} live`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-muted rounded-full transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={20} />
                    </a>
                    {project.githubBackend && (
                      <a
                        href={project.githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-muted rounded-full transition-colors"
                        aria-label={`View ${project.title} backend on GitHub`}
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-tag text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* View All Projects Link */}
        <ScrollAnimation delay={0.6} className="mt-12">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/projects"
              className="btn-custom border border-border hover:bg-muted"
            >
              View All Projects <ArrowUpRight size={18} className="ml-2" />
            </a>
            <a
              href="https://github.com/deeplukhi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-custom border border-border hover:bg-muted"
            >
              View on GitHub <ArrowUpRight size={18} className="ml-2" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section >
  );
};

export default ProjectsSection;
