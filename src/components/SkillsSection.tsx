import ScrollAnimation from "./ScrollAnimation";

const skillCategories = [
  {
    title: "programmingLanguages",
    skills: ["C", "C++", "JavaScript"],
  },
  {
    title: "backendDevelopment",
    skills: ["Node.js", "Express.js", "MySQL", "PostgreSQL", "Prisma"],
  },
  {
    title: "coreConcepts",
    skills: ["Data Structures & Algorithms", "Object Oriented Programming", "STL", "System Design Basics"],
  },
  {
    title: "tools&Platforms",
    skills: ["Git", "GitHub", "VS Code", "Linux (Basic)", "Docker", "Postman", "Swagger", "Grafana"],
  },
  {
    title: "other",
    skills: ["Open Source Contribution", "Problem Solving", "Clean Code Architecture"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimation>
          <h2 className="section-title">Skills</h2>
        </ScrollAnimation>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <ScrollAnimation key={category.title} delay={index * 0.1}>
              <div>
                <h3 className="mono-text text-sm text-muted-foreground mb-4">
                  {`<${category.title}>`}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
                <h3 className="mono-text text-sm text-muted-foreground mt-4">
                  {`</${category.title}>`}
                </h3>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
