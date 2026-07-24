import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import AchievementsSection from "@/components/AchievementsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Small delay to ensure DOM is ready after mount
    const timer = setTimeout(scrollToHash, 100);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <SectionDivider orientation="up" />
        <AboutSection />
        <SectionDivider orientation="down" />
        <ProjectsSection />
        <SectionDivider orientation="up" />
        <ExperienceSection />
        <SectionDivider orientation="down" />
        <EducationSection />
        <SectionDivider orientation="up" />
        <AchievementsSection />
        <SectionDivider orientation="down" />
        <SkillsSection />
        <SectionDivider orientation="up" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
