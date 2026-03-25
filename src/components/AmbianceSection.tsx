import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ambiance1 from "@/assets/ambiance-1.jpg";
import ambiance2 from "@/assets/ambiance-2.jpg";
import ambiance3 from "@/assets/ambiance-3.jpg";

// Full screen cover polygon
const FULL_COVER = "polygon(-5% -5%, 105% -5%, 105% 105%, -5% 105%)";

const AmbianceSection = () => {
  const [activeLayout, setActiveLayout] = useState<1 | 2 | 3>(1);
  const [hasPlayedInitial, setHasPlayedInitial] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const shapeControls = useAnimation();
  const textControls = useAnimation();

  // Detect mobile for responsive clip-paths
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Responsive layouts configuration
  const layouts = {
    1: {
      shapeFinal: isMobile
        ? "polygon(-5% -5%, 85% -5%, 105% 105%, -5% 105%)" // Wider on mobile
        : "polygon(-5% -5%, 50% -5%, 65% 105%, -5% 105%)",
      textParentClass: "inset-y-0 left-[8%] md:left-0 w-[75%] md:w-[45%] items-start pl-0 md:pl-24",
      textAlign: "text-left",
      title: "Timeless\nAesthetics",
      subtitle: "Crafted meticulously to soothe the senses and ignite inspiration everywhere.",
    },
    2: {
      shapeFinal: isMobile
        ? "polygon(5% -5%, 95% -5%, 95% 105%, 5% 105%)" // Almost full on mobile
        : "polygon(25% -5%, 75% -5%, 65% 105%, 35% 105%)",
      textParentClass: "inset-0 flex items-center justify-center p-6",
      textAlign: "text-center",
      title: "Curated\nElegance",
      subtitle: "Every element harmonized to create an atmosphere of refined sophistication.",
    },
    3: {
      shapeFinal: isMobile
        ? "polygon(15% -5%, 105% -5%, 105% 105%, -5% 105%)" // Wider on mobile
        : "polygon(50% -5%, 105% -5%, 105% 105%, 35% 105%)",
      textParentClass: "inset-y-0 right-[8%] md:right-0 w-[75%] md:w-[45%] items-end pr-0 md:pr-24 ml-auto",
      textAlign: "text-right",
      title: "Boundless\nSerenity",
      subtitle: "A sanctuary where time slows and every moment becomes a memory worth savoring.",
    },
  };

  const layout = layouts[activeLayout];

  // Initial scroll-triggered entrance animation
  const handleViewportEnter = async () => {
    if (hasPlayedInitial) return;
    setHasPlayedInitial(true);

    await shapeControls.set({ clipPath: FULL_COVER, opacity: 1 });
    await textControls.set({ opacity: 0, y: 30 });

    await shapeControls.start({
      clipPath: layouts[1].shapeFinal,
      transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
    });

    await textControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  };

  // Smooth morphing transition
  const switchToMode = async (mode: 1 | 2 | 3) => {
    if (mode === activeLayout) return;

    await textControls.start({
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeIn" },
    });

    await shapeControls.start({
      clipPath: FULL_COVER,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    });

    setActiveLayout(mode);
    await new Promise((r) => setTimeout(r, 150));

    await shapeControls.start({
      clipPath: layouts[mode].shapeFinal,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    });

    await textControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  };

  return (
    <>
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-accent/80 to-transparent shadow-[0_0_10px_rgba(212,175,55,0.5)]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-['NewYork'] text-4xl md:text-5xl lg:text-6xl text-primary-foreground tracking-wide">
              Our Ambiance
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto mb-20 md:mb-32 mt-12 px-4 md:px-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -top-6 -left-2 md:-top-12 md:-left-16 bg-background border border-accent/30 p-3 md:p-6 shadow-2xl z-20 pointer-events-none"
            >
              <p className="font-heading text-base md:text-2xl text-foreground font-bold">Premium Reserve</p>
              <div className="w-6 h-[2px] bg-accent mt-1 md:mt-2" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="absolute -bottom-6 -right-2 md:-bottom-12 md:-right-16 bg-[#0f1914] border border-accent/40 p-3 md:p-8 shadow-2xl z-20 pointer-events-none"
            >
              <p className="font-['NewYork'] text-base md:text-2xl text-accent tracking-widest">Est. 2026</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="h-[280px] md:h-[450px] overflow-hidden border border-white/10 relative z-10"
            >
              <img
                src={ambiance1}
                alt="Main Ambiance Presentation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        onViewportEnter={handleViewportEnter}
        viewport={{ once: true, amount: 0.1 }}
        className="snap-start relative w-full h-[100svh] overflow-hidden bg-background shadow-2xl border-t border-accent/20"
      >
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-0 bottom-0 z-20 left-0 right-[25%] md:right-[26%]">
            <img src={ambiance2} alt="Gallery 1" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-0 bottom-0 z-30 left-[75%] right-[10%] md:left-[74%] md:right-[13%]">
            <img src={ambiance3} alt="Gallery 2" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-0 bottom-0 z-40 left-[90%] right-0 md:left-[87%] md:right-0">
            <img src={ambiance1} alt="Gallery 3" className="w-full h-full object-cover grayscale-[20%]" />
          </div>
        </div>

        <motion.div
          animate={shapeControls}
          initial={{ clipPath: FULL_COVER, opacity: 1 }}
          className="absolute inset-0 bg-[#0f1914] z-50 pointer-events-auto border-x-accent/5 overflow-hidden"
        >
          <motion.div
            animate={textControls}
            initial={{ opacity: 0, y: 30 }}
            className={`absolute flex flex-col justify-center pointer-events-auto drop-shadow-2xl transition-all duration-700 ease-in-out px-4 md:px-0 ${layout.textParentClass}`}
          >
            <h3 className={`font-['NewYork'] text-3xl md:text-6xl text-accent mb-3 md:mb-4 tracking-wider leading-tight ${layout.textAlign}`}>
              {layout.title.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h3>
            <p className={`font-body text-xs md:text-base text-[#fcf9f2] opacity-90 leading-relaxed max-w-xs md:max-w-lg ${layout.textAlign}`}>
              {layout.subtitle}
            </p>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 z-[100] flex gap-4 md:gap-8 bg-[#0f1914]/80 backdrop-blur-md px-6 md:px-10 py-3 border border-accent/30 shadow-2xl md:rounded-none">
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => switchToMode(num as 1 | 2 | 3)}
              className={`text-[10px] md:text-sm tracking-[0.2em] uppercase font-bold transition-all duration-500 ease-out focus:outline-none px-2 py-1 ${activeLayout === num
                ? "text-accent scale-110 drop-shadow-[0_0_80px_rgba(212,175,55,1)]"
                : "text-[#fcf9f2]/60 hover:text-accent/90"
                }`}
            >
              {num === 1 ? "I" : num === 2 ? "II" : "III"}
            </button>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default AmbianceSection;
