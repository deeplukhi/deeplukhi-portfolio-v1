import { Briefcase, GraduationCap, Trophy } from "lucide-react";
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
            <div className="experience-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-foreground text-background">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Backend Developer Intern</h3>
                  <p className="text-muted-foreground mono-text text-sm">Vailora Technolab</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <span className="mono-text">Jan 2026 - Present</span>
                <span>•</span>
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
        </ScrollAnimation>

        {/* Education */}
        <ScrollAnimation delay={0.2}>
          <h3 className="text-2xl font-bold mb-6">Education</h3>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.3}>
          <div className="experience-card mb-16">
            <div className="flex items-start gap-4">
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
          <h3 className="text-2xl font-bold mb-6">Achievements</h3>
        </ScrollAnimation>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "550+ DSA Problems", subtitle: "Solved" },
            { title: "GFG University Rank #1", subtitle: "Top Performer" },
            { title: "Active Competitive Programmer", subtitle: "LeetCode" },
            { title: "Hackathon Participant", subtitle: "Team Events" },
          ].map((achievement, index) => (
            <ScrollAnimation key={achievement.title} delay={0.5 + index * 0.1}>
              <div className="experience-card flex items-center gap-4">
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
