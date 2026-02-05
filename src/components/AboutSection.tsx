import ScrollAnimation from "./ScrollAnimation";
import { Trophy } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimation>
          <div className="flex flex-col items-center mb-12">
            <h2 className="section-title">About</h2>
          </div>
        </ScrollAnimation>

        <div className="space-y-6 text-center mx-auto">
          <ScrollAnimation delay={0.1}>
            <p className="about-text text-foreground text-sm md:text-base font-mono">
              Hey<span className="inline-block animate-pulse">👋</span>,! I'm Deep Lukhi,
              a passionate Software Engineering undergraduate focused on backend development and Data Structures & Algorithms.
              I specialize in writing clean, scalable, and efficient code using C++ and Node.js. Having solved
              550+ DSA problems, I've built multiple real-world projects
              involving APIs, authentication systems, and graph-based engines.
              I am continuously learning system design and modern backend practices to build high-quality software
              that makes a difference.
            </p>
          </ScrollAnimation>
        </div>

        {/* Stats */}
        <ScrollAnimation delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 pt-24 border-t border-border">
            {[
              { value: "550+", label: "problemsSolved" },
              { value: "7+", label: "projects" },
              {
                value: (
                  <div className="flex items-center justify-center gap-1">
                    <Trophy className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" />
                    <span>1</span>
                  </div>
                ),
                label: "gfgUniRank"
              },
              { value: "8.2", label: "cgpa" },
            ].map((stat, index) => (
              <ScrollAnimation key={stat.label} delay={0.5 + index * 0.1} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 flex justify-center items-center">{stat.value}</div>
                <div className="text-sm text-muted-foreground mono-text">{stat.label}</div>
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AboutSection;
