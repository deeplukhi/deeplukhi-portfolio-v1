import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 pb-10 px-6">
      <div className="container mx-auto">
        {/* Main Hero Content */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="relative mb-8 opacity-0 animate-slide-up">
            <h1 className="hero-name">
              DEEP
              <span className="hero-title ml-4 align-middle">softwareDeveloper</span>
            </h1>
            <h1 className="hero-name">LU<span className="bg-foreground text-background px-2">KHI</span></h1>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12 opacity-0 animate-slide-up stagger-2">
            <a
              href="#contact"
              className="btn-outline flex items-center justify-center gap-2"
            >
              viewResume
            </a>
            <a
              href="mailto:deeplukhi11@gmail.com"
              className="btn-primary flex items-center justify-center gap-2"
            >
              sayHello
            </a>
          </div>
        </div>
      </div>

      {/* Diagonal Skills Banner */}
      <div className="diagonal-banner opacity-0 animate-fade-in stagger-3">
        <div className="flex animate-marquee">
          <div className="flex gap-8 items-center whitespace-nowrap px-8">
            <span className="marquee-text">backendDevelopment</span>
            <span className="text-2xl">&lt;&gt;</span>
            <span className="marquee-text">dataStructures</span>
            <span className="text-2xl">&lt;&gt;</span>
            <span className="marquee-text">algorithms</span>
            <span className="text-2xl">&lt;&gt;</span>
            <span className="marquee-text">problemSolving</span>
            <span className="text-2xl">&lt;&gt;</span>
            <span className="marquee-text">systemDesign</span>
            <span className="text-2xl">&lt;&gt;</span>
            <span className="marquee-text">cleanCode</span>
            <span className="text-2xl">&lt;&gt;</span>
          </div>
          <div className="flex gap-8 items-center whitespace-nowrap px-8">
            <span className="marquee-text">backendDevelopment</span>
            <span className="text-2xl">&lt;&gt;</span>
            <span className="marquee-text">dataStructures</span>
            <span className="text-2xl">&lt;&gt;</span>
            <span className="marquee-text">algorithms</span>
            <span className="text-2xl">&lt;&gt;</span>
            <span className="marquee-text">problemSolving</span>
            <span className="text-2xl">&lt;&gt;</span>
            <span className="marquee-text">systemDesign</span>
            <span className="text-2xl">&lt;&gt;</span>
            <span className="marquee-text">cleanCode</span>
            <span className="text-2xl">&lt;&gt;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
