import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const MenuTeaserSection = () => {
  const [frame, setFrame] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev >= 3 ? 1 : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:py-32 bg-[#ebf0ec] overflow-hidden">
      {/* Decorative Overlays (Matching Highlights exactly) */}
      <img
        src="/background.png"
        alt="Section Background Base"
        className="absolute inset-0 w-full h-full object-cover z-20 pointer-events-none mix-blend-soft-light opacity-[1.8] blur-md"
      />
      <img
        src="/light.png"
        alt="Light Effect Overlay"
        className="absolute inset-0 w-full h-full object-cover z-30 pointer-events-none mix-blend-screen opacity-70"
      />

      {/* Reveal Gates (Matching Highlights Animation) */}
      <motion.div
        initial={{ x: "0%" }}
        whileInView={{ x: "-100%" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="absolute inset-y-0 left-0 w-1/2 bg-[#0f1914] z-40 border-r border-accent/20 flex items-center justify-end pointer-events-none"
      >
        <div className="w-1 md:w-2 h-32 bg-accent/50 rounded-full mr-1 md:mr-2 shadow-gold" />
      </motion.div>
      <motion.div
        initial={{ x: "0%" }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="absolute inset-y-0 right-0 w-1/2 bg-[#0f1914] z-40 border-l border-accent/20 flex items-center justify-start pointer-events-none"
      >
        <div className="w-1 md:w-2 h-32 bg-accent/50 rounded-full ml-1 md:ml-2 shadow-gold" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* LEFT COLUMN: THE 'SAHA' LETTER IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 1, type: "spring" }}
            className="relative order-1 md:order-1"
          >
            <div className="relative group flex justify-center">
              <img
                src="/saha.png"
                alt="Cafe At Eden Letter"
                className="w-full max-w-[320px] md:max-w-[480px] transition-transform duration-700 group-hover:scale-105 rounded-xl md:rounded-none"
              />
              <div className="absolute inset-0 bg-accent/5 blur-[80px] -z-10 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-700" />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: TEXT & CUSTOM ANIMATED BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4, duration: 1 }}
            className="text-center md:text-left flex flex-col items-center md:items-start order-2 md:order-2"
          >
            <p className="font-body text-[#0f1914]/40 text-[10px] md:text-sm tracking-[0.4em] mb-4">
              A Taste of Eden
            </p>
            
            <h2 className="font-['NewYork'] text-3xl md:text-5xl lg:text-7xl text-[#0f1914] mb-3 tracking-wider leading-tight">
              Curated for the<br />
              <span className="font-['RelationshipOfMelodrama'] italic text-accent text-4xl md:text-7xl lg:text-8xl lowercase opacity-90 block">
                Connoisseur
              </span>
            </h2>

            <div className="max-w-md mb-8 md:mb-10 px-4 md:px-0">
              <p className="font-body text-[13px] md:text-base text-[#0f1914]/70 leading-relaxed tracking-wide">
                Beyond traditional boundaries, we offer a carefully
                selected menu where each ingredient tells a story.
              </p>
            </div>

            <Link to="/menu" className="w-full md:w-auto flex justify-center md:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group relative inline-flex items-center justify-center px-10 py-5 md:px-16 md:py-6 min-w-[240px] md:min-w-[290px] hover:brightness-110 transition-all duration-300"
              >
                <img
                  src={`/button${frame}.png`}
                  alt="Button Frame"
                  className="absolute inset-0 w-full h-full object-contain -z-10 pointer-events-none scale-[2.2] md:scale-[2.4]"
                  style={{ filter: "brightness(0.4) sepia(1) hue-rotate(-50deg) saturate(20) contrast(1.2)" }}
                />
                <span className="relative z-10 font-['AppleGaramondLight'] text-[16px] md:text-[28px] tracking-[0.1em] text-[#0f1914] drop-shadow-md whitespace-nowrap">
                  Explore menu
                </span>
              </motion.div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MenuTeaserSection;
