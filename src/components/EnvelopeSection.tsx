import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EnvelopeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // === ENVELOPE WRAPPING ===
  const bottomFlapY = useTransform(scrollYProgress, [0.05, 0.3], ["100%", "0%"]);
  const leftFlapX = useTransform(scrollYProgress, [0.2, 0.45], ["-100%", "0%"]);
  const rightFlapX = useTransform(scrollYProgress, [0.2, 0.45], ["100%", "0%"]);
  const topFlapRotate = useTransform(scrollYProgress, [0.4, 0.6], [180, 0]);

  // === SEAL STAMPS ===
  const sealScale = useTransform(scrollYProgress, [0.58, 0.65, 0.75], [0, 1.1, 1]);
  const sealRotate = useTransform(scrollYProgress, [0.58, 0.75], [-20, 0]);

  return (
    <section ref={sectionRef} className="snap-start relative h-[180vh] md:h-[220vh]">
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col items-center justify-start md:justify-center overflow-y-auto md:overflow-hidden bg-white px-4 md:px-0 pt-20 pb-12 md:py-0">
        
        {/* === THE BIG LETTER CARD (Improved Mobile Accessibility) === */}
        <div className="relative w-full max-w-[450px] md:max-w-[1000px] md:w-[75vw] bg-[#1a3328] border border-accent/20 shadow-2xl z-10 overflow-hidden flex flex-col items-center justify-center shadow-[0_0_80px_rgba(0,0,0,0.5)] flex-shrink-0 min-h-[450px] md:min-h-[550px] p-8 md:p-16">
          
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiPjwvcmVjdD4KPC9zdmc+')]" />
          
          <div className="relative z-10 text-center flex flex-col items-center justify-center">
            <p className="font-body text-accent/50 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4 md:mb-8">A Letter From</p>
            <h3 className="font-['NewYork'] text-5xl md:text-7xl lg:text-9xl text-accent tracking-tighter leading-none">
              At Eden
            </h3>
          </div>
        </div>

        {/* === ENVELOPE FLAPS (MATCH WHOLE SCREEN) === */}
        <motion.div style={{ y: bottomFlapY }} className="absolute bottom-0 left-0 right-0 h-full bg-[#12241b] z-20 shadow-[0_-15px_50px_rgba(0,0,0,0.6)]">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(212,175,55,0.05) 20px, rgba(212,175,55,0.05) 21px)" }} />
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
        </motion.div>

        <motion.div style={{ x: leftFlapX }} className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#162b21] z-30 shadow-[15px_0_40px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-accent/20" />
        </motion.div>

        <motion.div style={{ x: rightFlapX }} className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#162b21] z-30 shadow-[-15px_0_40px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-accent/20" />
        </motion.div>

        <motion.div style={{ rotateX: topFlapRotate, transformOrigin: "top center" }} className="absolute top-0 left-0 right-0 h-1/2 z-40 overflow-hidden">
          <div className="w-full h-full bg-[#1f3a2e] shadow-[0_15px_50px_rgba(0,0,0,0.7)]" style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)" }} />
          <div className="absolute inset-0 border-b-2 border-accent/20 pointer-events-none" style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)" }} />
        </motion.div>

        {/* Wax Seal */}
        <motion.div
          style={{ scale: sealScale, rotate: sealRotate }}
          className="absolute z-50 w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)] border-[8px] md:border-[10px] border-accent top-[38%] md:top-auto"
        >
          <div className="absolute inset-0 bg-[#0f1914] rounded-full z-0 opacity-100" />
          <img src="/logo.png" alt="Cafe At Eden Logo" className="relative z-10 w-full h-full object-contain p-6 md:p-8 brightness-125" />
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(212,175,55,0.3)] pointer-events-none" />
          <div className="absolute -inset-4 rounded-full border-[3px] border-accent animate-pulse pointer-events-none z-[-1]" />
        </motion.div>

      </div>
    </section>
  );
};

export default EnvelopeSection;
