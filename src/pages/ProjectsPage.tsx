import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

const allProjects = [
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
    title: "Inventory Management API",
    description: "RESTful API using Node.js, Express, and MySQL with full CRUD operations, validation, search & pagination support, and structured MVC architecture.",
    tags: ["Node.js", "Express", "MySQL", "REST API"],
    github: "https://github.com/deeplukhi/inventory-management-api",
  },
  {
    title: "Authentication API",
    description: "Secure authentication system using JWT & bcrypt with login, register, token verification, cookie-based session handling, and modular structure.",
    tags: ["Node.js", "JWT", "bcrypt", "Security"],
    github: "https://github.com/deeplukhi/Authentication-API",
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

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <section className="py-24 px-6">
          <div className="container mx-auto">
            <ScrollAnimation>
              <h2 className="section-title text-center mb-4">All Projects</h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                A collection of projects I've built — from full-stack applications to algorithmic tools.
              </p>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.map((project, index) => (
                <ScrollAnimation
                  key={project.title}
                  delay={index * 0.1}
                  direction="up"
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

            <ScrollAnimation delay={0.6} className="mt-12 text-center">
              <a
                href="/"
                className="btn-custom mx-auto border border-border hover:bg-muted"
              >
                Back to Home <ArrowUpRight size={18} className="ml-2" />
              </a>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
