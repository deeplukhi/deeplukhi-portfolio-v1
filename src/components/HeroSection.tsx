

import { motion } from "framer-motion";
import GlitchWrapper from "./GlitchWrapper";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-background pt-40 lg:pt-56">
      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col justify-center">
        <div className="flex flex-col relative max-w-5xl mx-auto w-full">

          {/* Centered Content Wrapper */}
          <div className="flex flex-col items-center justify-center w-full mb-12">
            <div className="mb-16 w-full max-w-4xl">
              {/* First Name with Subtitle */}
              <div className="flex items-baseline gap-1 mb-2 justify-center">
                <h1 className="hero-name text-foreground flex">
                  <GlitchWrapper text="DEEP" className="flex">
                    {Array.from("DEEP").map((letter, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1, delay: index * 0.1 }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </GlitchWrapper>
                </h1>
                <motion.span
                  className="hero-subtitle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  softwareEngineer
                </motion.span>
              </div>

              {/* Last Name with Highlight - Responsive Alignment */}
              <div
                className="flex items-center pl-[37%] md:pl-[clamp(27rem,22vw,10rem)]"
              >
                <div className="hero-name whitespace-nowrap text-foreground flex">
                  <GlitchWrapper text="LUKHI" className="flex">
                    {Array.from("LUK").map((letter, index) => (
                      <motion.span
                        key={`luk-${index}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1, delay: 0.4 + index * 0.1 }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                    <span className="hero-name-highlight flex">
                      {Array.from("HI").map((letter, index) => (
                        <motion.span
                          key={`hi-${index}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.1, delay: 0.7 + index * 0.1 }}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </span>
                  </GlitchWrapper>
                </div>
                <div className="h-[4px] bg-foreground flex-grow ml-0" style={{ marginRight: '-100vw' }}></div>
                <motion.div
                  className="h-[4px] bg-foreground flex-grow ml-0"
                  style={{ marginRight: '-100vw', transformOrigin: 'left' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Buttons - Mobile Responsive Layout */}
            <div className="flex flex-row items-center justify-center gap-3 md:gap-6 mt-12 md:mt-16  w-full px-2">
              <a
                href="/DEEP_LUKHI.pdf"
                download="DEEP_LUKHI_Resume.pdf"
                className="btn-custom border border-foreground text-foreground h-12 md:h-16 flex-1 max-w-[160px] md:max-w-[256px] text-sm md:text-lg"
              >
                viewResume
              </a>
              <a
                href="#contact"
                className="btn-custom bg-foreground text-background hover:bg-foreground/90 border border-foreground h-12 md:h-16 flex-1 max-w-[160px] md:max-w-[256px] text-sm md:text-lg"
              >
                sayHello
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Diagonal Skills Banner */}
      <div className="mt-24 mb-32 relative w-full">
        <div className="relative transform -rotate-3 scale-105 origin-center">
          {/* Shadow Layer */}
          <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 md:translate-x-2 md:translate-y-2 pointer-events-none" />

          {/* White Card Layer */}
          <div className="relative w-full bg-white border border-black py-6">
            <div className="flex animate-marquee text-black">
              <div className="flex gap-8 items-center whitespace-nowrap px-8">
                <span className="marquee-text">webDevelopment</span>
                <span className="text-2xl">&lt;&gt;</span>
                <span className="marquee-text">dataStructures</span>
                <span className="text-2xl">&lt;&gt;</span>
                <span className="marquee-text">algorithms</span>
                <span className="text-2xl">&lt;&gt;</span>
                <span className="marquee-text">systemDesign</span>
                <span className="text-2xl">&lt;&gt;</span>
                <span className="marquee-text">cleanCode</span>
                <span className="text-2xl">&lt;&gt;</span>
              </div>
              <div className="flex gap-8 items-center whitespace-nowrap px-8">
                <span className="marquee-text">webDevelopment</span>
                <span className="text-2xl">&lt;&gt;</span>
                <span className="marquee-text">dataStructures</span>
                <span className="text-2xl">&lt;&gt;</span>
                <span className="marquee-text">algorithms</span>
                <span className="text-2xl">&lt;&gt;</span>
                <span className="marquee-text">systemDesign</span>
                <span className="text-2xl">&lt;&gt;</span>
                <span className="marquee-text">cleanCode</span>
                <span className="text-2xl">&lt;&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
