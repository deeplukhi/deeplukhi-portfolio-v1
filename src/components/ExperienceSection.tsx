import { Briefcase, Calendar } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimation>
          <h2 className="section-title">Experience</h2>
        </ScrollAnimation>

        {/* Work Experience */}
        <ScrollAnimation delay={0.1}>
          <div className="mb-16">
            <div className="experience-card p-6 flex flex-col md:flex-row gap-6 hover:bg-transparent">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Briefcase size={20} />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold">Backend Developer Intern</h3>
                  <div className="flex items-center gap-2 text-primary/80 text-sm font-medium bg-primary/5 py-1 px-3 rounded-full w-fit">
                    <Calendar size={14} />
                    Jan 2026 - Present
                  </div>
                </div>

                <h4 className="text-lg text-muted-foreground mb-4">Vailora Technolab</h4>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <span className="mono-text">6 Months</span>
                  <span>•</span>
                  <span className="mono-text">Remote</span>
                </div>

                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1.5">›</span>
                    Working on backend development using Node.js & databases
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1.5">›</span>
                    Developing real-world software solutions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1.5">›</span>
                    Building scalable APIs and business logic
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1.5">›</span>
                    Collaborating with team on production projects
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1.5">›</span>
                    Learning industry-level coding practices
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ExperienceSection;
