import { Briefcase, Calendar, GraduationCap, Trophy } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
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

        {/* Education */}
        <ScrollAnimation delay={0.2}>
          <h3 className="section-title">Education</h3>
        </ScrollAnimation>

        <ScrollAnimation delay={0.3}>
          <div className="mb-16">
            <div className="experience-card p-6 flex items-start gap-4">
              <div className="p-3 bg-foreground text-background">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="text-xl font-semibold">B.Tech – Information Technology</h4>
                <p className="text-muted-foreground">Bhagwan Mahavir University</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                  <span className="mono-text">2023 – Present</span>
                  <span>•</span>
                  <span className="mono-text font-semibold text-foreground">CGPA: 8.2</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Achievements */}
        <ScrollAnimation delay={0.4}>
          <h3 className="section-title">Achievements</h3>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "550+ DSA Problems", subtitle: "Solved" },
            { title: "GFG University Rank #1", subtitle: "Top Performer" },
            { title: "Active Competitive Programmer", subtitle: "LeetCode" },
            { title: "Hackathon Participant", subtitle: "Team Events" },
          ].map((achievement, index) => (
            <ScrollAnimation key={achievement.title} delay={0.5 + index * 0.1}>
              <div className="experience-card p-6 flex items-center gap-4">
                <Trophy size={24} className="text-foreground flex-shrink-0" />
                <div>
                  <div className="font-semibold">{achievement.title}</div>
                  <div className="text-sm text-muted-foreground mono-text">{achievement.subtitle}</div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
