
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-background pt-32 lg:pt-40">
      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col justify-center">
        <div className="flex flex-col relative max-w-5xl mx-auto w-full">

          {/* Centered Content Wrapper */}
          <div className="flex flex-col items-center justify-center w-full mb-32">

            {/* Top Row: DEEP + Role */}
            <div className="flex items-baseline gap-4 md:gap-8 opacity-0 animate-slide-up relative -left-12">
              <h1 className="hero-name text-foreground">
                DEEP
              </h1>
              <span className="hero-role text-muted-foreground/50 !text-sm md:!text-xl font-normal lowercase tracking-wide">
                software Engineer
              </span>
            </div>

            {/* Bottom Row: LUKHI + Black Block */}
            <div className="relative mt-[-2vw] md:mt-[-1vw] opacity-0 animate-slide-up stagger-1 ml-12">
              {/* LUKHI Container */}
              <div className="relative">
                {/* Black Block - Starts -20px left of text, extends to right viewport edge */}
                <div className="absolute top-[10%] bottom-[15%] left-[-10px] w-[100vw] bg-foreground -z-10 pointer-events-none" />

                <h1 className="hero-name text-white mix-blend-difference relative z-10">
                  LUKHI
                </h1>
              </div>
            </div>

            {/* Buttons - Increased Top Margin */}
            <div className="flex items-center gap-6 mt-24 opacity-0 animate-slide-up stagger-2">
              <a
                href="/DEEP_LUKHI.pdf"
                download="DEEP_LUKHI_Resume.pdf"
                className="btn-custom border border-foreground text-foreground hover:bg-foreground hover:text-background"
              >
                viewResume
              </a>
              <a
                href="#contact"
                className="btn-custom bg-foreground text-background hover:bg-foreground/90 border border-foreground"
              >
                sayHello
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Diagonal Skills Banner - Scroll Reveal */}
      <motion.div
        className="diagonal-banner mt-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex animate-marquee">
          <div className="flex gap-8 items-center whitespace-nowrap px-8">
            <span className="marquee-text">webDevelopment</span>
            <span className="text-2xl">&lt;&gt;</span>
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
            <span className="marquee-text">webDevelopment</span>
            <span className="text-2xl">&lt;&gt;</span>
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
      </motion.div>
    </section>
  );
};

export default HeroSection;
