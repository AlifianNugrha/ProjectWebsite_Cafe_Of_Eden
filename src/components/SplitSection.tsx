import { motion } from "framer-motion";

const SplitSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Gold Divider Line (Pemisah Pages) */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent z-50 shadow-[0_0_15px_rgba(212,175,55,0.6)]" />

      {/* Left Column (30% width) - Warna "yang tadi" */}
      <div className="w-full md:w-[30%] bg-[#ebf0ec] p-12 flex flex-col justify-center items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-['NewYork'] text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            The<br />Experience
          </h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mb-6" />
          <p className="font-body text-sm text-foreground/70 leading-relaxed uppercase tracking-widest">
            A Journey In Every Sip
          </p>
        </motion.div>
      </div>

      {/* Right Column (70% width) - Dark Premium Area */}
      <div className="w-full md:w-[70%] bg-[#0f1914] p-8 md:p-24 flex items-center relative z-10">
        {/* Premium Card Layout inside the 70% area */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.3, type: "spring" }}
          className="w-full max-w-4xl bg-[#15231c] border border-accent/20 p-10 md:p-16 xl:p-24 relative shadow-2xl"
        >
          {/* Decorative Inner border */}
          <div className="absolute inset-4 md:inset-6 border border-accent/10 pointer-events-none" />
          
          <h3 className="font-['RelationshipOfMelodrama'] text-3xl md:text-4xl text-primary-foreground mb-8">
            Exclusively Yours
          </h3>
          <p className="font-body text-base md:text-lg text-[#fcf9f2]/80 leading-relaxed mb-10 font-light">
            Indulge in an atmosphere designed to evoke elegance, tranquility, and inspiration. Every detail from the seating to the lighting has been thoughtfully curated to offer a sanctuary away from the rushing world. Embrace the premium touch.
          </p>

          <button className="px-10 py-4 bg-transparent border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-500 font-body text-xs tracking-[0.2em] uppercase">
            Reserve a Table
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SplitSection;
