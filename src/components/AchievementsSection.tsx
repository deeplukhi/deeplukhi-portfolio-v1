import { Trophy } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const AchievementsSection = () => {
    return (
        <section id="achievements" className="py-24 px-6 bg-secondary/30">
            <div className="container mx-auto max-w-4xl">
                <ScrollAnimation delay={0.1}>
                    <h2 className="section-title">Achievements</h2>
                </ScrollAnimation>

                <div className="grid sm:grid-cols-2 gap-4">
                    {[
                        { title: "550+ DSA Problems", subtitle: "Solved" },
                        { title: "GFG University Rank #1", subtitle: "Top Performer" },
                        { title: "Active Competitive Programmer", subtitle: "LeetCode" },
                        { title: "Hackathon Participant", subtitle: "Team Events" },
                    ].map((achievement, index) => (
                        <ScrollAnimation key={achievement.title} delay={0.2 + index * 0.1}>
                            <div className="experience-card p-6 flex items-center gap-4 hover:bg-transparent">
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

export default AchievementsSection;
