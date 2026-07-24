import { Briefcase, Calendar, ArrowUpRight } from "lucide-react";
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
                    Feb 2026 - Jul 2026
                  </div>
                </div>

                <h4 className="text-lg text-muted-foreground mb-4">Vailora Technolab</h4>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <span className="mono-text">6 Months</span>
                  <span>•</span>
                  <span className="mono-text">Remote</span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Contributed across 4 production products — CMS POS, KitchenHub, CAPS24, and HRMS — owning features end-to-end from database design to frontend.
                </p>

                <a
                  href="/experience"
                  className="inline-flex items-center gap-2 text-sm font-medium border border-border px-5 py-2.5 hover:bg-muted transition-colors mono-text"
                >
                  View Detailed Experience <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ExperienceSection;
