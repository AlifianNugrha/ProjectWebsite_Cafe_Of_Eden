import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Placeholder grid items - user will replace src with real Instagram feed screenshots
const feedItems = [
  { id: 1, src: "/placeholder-feed-1.jpg", alt: "Instagram Feed 1" },
  { id: 2, src: "/placeholder-feed-2.jpg", alt: "Instagram Feed 2" },
  { id: 3, src: "/placeholder-feed-3.jpg", alt: "Instagram Feed 3" },
  { id: 4, src: "/placeholder-feed-4.jpg", alt: "Instagram Feed 4" },
  { id: 5, src: "/placeholder-feed-5.jpg", alt: "Instagram Feed 5" },
  { id: 6, src: "/placeholder-feed-6.jpg", alt: "Instagram Feed 6" },
  { id: 7, src: "/placeholder-feed-7.jpg", alt: "Instagram Feed 7" },
  { id: 8, src: "/placeholder-feed-8.jpg", alt: "Instagram Feed 8" },
  { id: 9, src: "/placeholder-feed-9.jpg", alt: "Instagram Feed 9", hideOnMobile: true },
];

const SocialSection = () => {
  const [frame, setFrame] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev >= 3 ? 1 : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#0f1914] relative overflow-hidden">
      {/* Top Gold Divider */}
      <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-xs tracking-[0.4em] uppercase mb-4">Follow Our Journey</p>
          <h2 className="font-['NewYork'] text-4xl md:text-5xl lg:text-6xl text-[#fcf9f2] tracking-wide mb-4">
            Our Social Media
          </h2>
          <p className="font-body text-sm text-accent tracking-[0.2em] uppercase">@cafeat.eden</p>
        </motion.div>

        {/* Instagram Feed Grid - 4 columns x 3 rows */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 max-w-5xl mx-auto">
          {feedItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`relative aspect-square overflow-hidden group bg-[#1a2e23] border border-accent/10 ${(item as any).hideOnMobile ? 'hidden md:block' : ''}`}
            >
              <div className="w-full h-full bg-gradient-to-br from-[#1a2e23] to-[#0f1914] flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-accent/20 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-accent/15 text-[8px] md:text-[10px] font-body uppercase tracking-wider">{item.id}</p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <svg className="w-8 h-8 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>

              {/* Gold Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent/30 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent/30 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Animated Frame Button like Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://instagram.com/cafeateden"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-16 py-6 min-w-[240px] hover:scale-105 transition-transform duration-300 hover:brightness-110"
          >
            <img
              src={`/button${frame}.png`}
              alt="Button Frame"
              className="absolute inset-0 w-full h-full object-contain -z-10 pointer-events-none scale-[1.5] md:scale-[1.8]"
            />
            <span className="relative z-10 font-['AppleGaramondLight'] text-[20px] md:text-[30px] tracking-widest uppercase text-[#fcf9f2] drop-shadow-lg">
              See More
            </span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Gold Divider */}
      <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
    </section>
  );
};

export default SocialSection;
