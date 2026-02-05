

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-background pt-40 lg:pt-56">
      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col justify-center">
        <div className="flex flex-col relative max-w-5xl mx-auto w-full">

          {/* Centered Content Wrapper */}
          <div className="flex flex-col items-center justify-center w-full mb-12">
            <div className="mb-16 w-full max-w-4xl">
              {/* First Name with Subtitle */}
              <div className="flex items-baseline gap-1 mb-2 justify-center animate-fade-in-custom" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                <h1 className="hero-name text-foreground">DEEP</h1>
                <span className="hero-subtitle">softwareEngineer</span>
              </div>

              {/* Last Name with Highlight - offset to start at second E of DEEP */}
              <div
                className="flex items-center animate-fade-in-custom"
                style={{ paddingLeft: 'clamp(27rem, 22vw,10rem)', animationDelay: '0.3s', animationFillMode: 'both' }}
              >
                <h1 className="hero-name whitespace-nowrap text-foreground">
                  LUK<span className="hero-name-highlight">HI</span>
                </h1>
                <div className="h-[4px] bg-foreground flex-grow ml-0" style={{ marginRight: '-100vw' }}></div>
                <div className="h-[4px] bg-foreground flex-grow ml-0 animate-scale-in-line" style={{ marginRight: '-100vw', animationDelay: '0.5s', animationFillMode: 'both' }}></div>
              </div>
            </div>

            {/* Buttons - Reduced Top Margin and Distance */}
            <div className="flex items-center gap-6 mt-16 opacity-0 animate-slide-up stagger-2">
              <a
                href="/DEEP_LUKHI.pdf"
                download="DEEP_LUKHI_Resume.pdf"
                className="btn-custom border border-foreground text-foreground h-16 w-64 text-lg"
              >
                viewResume
              </a>
              <a
                href="#contact"
                className="btn-custom bg-foreground text-background hover:bg-foreground/90 border border-foreground h-16 w-64 text-lg"
              >
                sayHello
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Diagonal Skills Banner - Scroll Reveal */}
      <motion.div
        className="mt-24 mb-32 relative w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
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
      </motion.div>
    </section>
  );
};

export default HeroSection;
