import { ArrowUpRight, Github } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const projects = [
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-muted rounded-full transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={20} />
                  </a>
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

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-6 text-sm font-medium hover:gap-2 transition-all mono-text"
                >
                  github <ArrowUpRight size={16} />
                </a>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* DSA Mini Projects Link */}
        <ScrollAnimation delay={0.6} className="mt-12 text-center">
          <a
            href="https://github.com/deeplukhi/DSA-Mini-Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline"
          >
            View DSA Mini Projects <ArrowUpRight size={18} />
          </a>
        </ScrollAnimation>
      </div>
    </section >
  );
};

export default ProjectsSection;
