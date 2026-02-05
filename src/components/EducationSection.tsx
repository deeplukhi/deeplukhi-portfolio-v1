import { GraduationCap } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const EducationSection = () => {
    return (
        <section id="education" className="py-24 px-6 bg-secondary/30">
            <div className="container mx-auto max-w-4xl">
                <ScrollAnimation>
                    <h2 className="section-title">Education</h2>
                </ScrollAnimation>

                <ScrollAnimation delay={0.2}>
                    <div className="mb-16">
                        <div className="experience-card p-6 flex items-start gap-4 hover:bg-transparent">
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
            </div>
        </section>
    );
};

export default EducationSection;
