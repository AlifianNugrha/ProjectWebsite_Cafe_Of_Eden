import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import heroCafe from "@/assets/hero-cafe.jpg";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState(1);

  useEffect(() => {
    // Frame animation interval: cycles 1 -> 2 -> 3 exactly once per second
    const interval = setInterval(() => {
      setFrame((prev) => (prev >= 3 ? 1 : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // This timeline will pin the hero and 'open' it by animating the clip-path
      // so it rolls up like a curtain, revealing the next section underneath.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      });

      // Animate the hero container downwards slightly for a parallax effect as it scrolls UP out of view
      tl.to(containerRef.current, {
        y: 100, // gentle parallax push
        ease: "none",
      });

      // Simultaneously make the content text recede/fade slightly as it rolls up
      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=80%",
          scrub: 1,
        },
        y: -100,
        opacity: 0,
        scale: 0.9,
      });

    }, containerRef);

    return () => ctx.revert(); // clean up on unmount
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden z-0"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroCafe}
          alt="Cafe At Eden interior with pastry display"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-70" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-4xl -translate-y-[40px] md:-translate-y-[30px]"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-accent font-vogue text-sm tracking-[0.3em] uppercase mb-6"
        >
          Your Urban Oasis in Solo Raya
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-['NewYork'] text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] md:leading-[0.95] mb-10 md:mb-32 tracking-wider"
        >
          THE FINEST COFFEE
          <br />
          <span className="text-gradient-gold font-['NewYork']">&amp; PASTRY</span> EXPERIENCE
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative top-[40px] md:top-[80px]"
        >
          <Link
            to="/menu"
            className="group relative inline-flex items-center justify-center px-20 py-8 min-w-[280px] hover:scale-105 transition-transform duration-300 hover:brightness-110"
          >
            {/* The animated frame PNG placed as a background, scaled appropriately */}
            <img
              src={`/button${frame}.png`}
              alt="Background Frame"
              className="absolute inset-0 w-full h-full object-contain -z-10 pointer-events-none scale-[1.5] md:scale-[2.0]"
            />
            {/* The original text restored on top of the frame */}
            <span className="relative z-10 font-['AppleGaramondLight'] text-[25px] tracking-widest uppercase text-primary-foreground drop-shadow-lg">
              Explore Our Menu
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
      >
        <ArrowDown className="text-primary-foreground/40" size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
