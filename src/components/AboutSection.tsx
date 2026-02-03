const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title">About</h2>
        
        <div className="space-y-6">
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Hey<span className="inline-block animate-pulse">👋</span>,! I'm <span className="text-foreground font-semibold">Deep Lukhi</span>, 
            a passionate Software Engineering undergraduate focused on backend development and Data Structures & Algorithms. 
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            I specialize in writing clean, scalable, and efficient code using <span className="mono-text text-foreground">C++</span> and{" "}
            <span className="mono-text text-foreground">Node.js</span>. Having solved{" "}
            <span className="text-foreground font-semibold">550+ DSA problems</span>, I've built multiple real-world projects 
            involving APIs, authentication systems, and graph-based engines.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            I am continuously learning system design and modern backend practices to build high-quality software 
            that makes a difference.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">550+</div>
            <div className="text-sm text-muted-foreground mono-text">problemsSolved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">7+</div>
            <div className="text-sm text-muted-foreground mono-text">projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">#1</div>
            <div className="text-sm text-muted-foreground mono-text">gfgUniRank</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">8.2</div>
            <div className="text-sm text-muted-foreground mono-text">cgpa</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
