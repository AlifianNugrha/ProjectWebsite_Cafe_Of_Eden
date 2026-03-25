import { motion } from "framer-motion";
import macaron from "@/assets/macaron.jpg";
import croissant from "@/assets/croissant.jpg";
import icedCoffee from "@/assets/iced-coffee.jpg";

const highlights = [
  {
    title: "Signature Macaron",
    desc: "Handcrafted daily with premium ingredients",
    image: macaron,
    badge: "Best Seller",
  },
  {
    title: "Bulgogi Croissant",
    desc: "Korean-inspired savory pastry perfection",
    image: croissant,
    badge: "New",
  },
  {
    title: "Eden Iced Coffee",
    desc: "Our signature dark roast, served cold",
    image: icedCoffee,
    badge: "Signature",
  },
];

const HighlightsSection = () => (
  <section className="py-24 relative overflow-hidden bg-[#ebf0ec]">
    {/* Section Background Image */}
    <img
      src="/background.png"
      alt="Section Background Base"
      className="absolute inset-0 w-full h-full object-cover z-20 pointer-events-none mix-blend-soft-light opacity-[2] blur-md"
    />
    {/* Light Flare / Effect Overlay */}
    <img
      src="/light.png"
      alt="Light Effect Overlay"
      className="absolute inset-0 w-full h-full object-cover z-30 pointer-events-none mix-blend-screen opacity-80"
    />
    {/* Left Gate Door Reveal */}
    <motion.div
      initial={{ x: "0%" }}
      whileInView={{ x: "-100%" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
      className="absolute inset-y-0 left-0 w-1/2 bg-primary z-40 border-r border-accent/30 flex items-center justify-end pointer-events-none"
    >
      {/* Decorative center lock/handle */}
      <div className="w-1 md:w-2 h-32 bg-accent/50 rounded-full mr-1 md:mr-2 shadow-gold" />
    </motion.div>

    {/* Right Gate Door Reveal */}
    <motion.div
      initial={{ x: "0%" }}
      whileInView={{ x: "100%" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
      className="absolute inset-y-0 right-0 w-1/2 bg-primary z-40 border-l border-accent/30 flex items-center justify-start pointer-events-none"
    >
      <div className="w-1 md:w-2 h-32 bg-accent/50 rounded-full ml-1 md:ml-2 shadow-gold" />
    </motion.div>

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="font-['RelationshipOfMelodrama'] text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide text-foreground">
          Our Highlights
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="group relative bg-texture-premium overflow-hidden transition-all duration-500 max-w-[320px] w-full mx-auto border-none"
          >
            <div className="aspect-square overflow-hidden">
              <motion.div
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4, duration: 0.8, type: "spring", stiffness: 100 }}
                className="w-full h-full"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-accent text-accent-foreground font-body text-xs font-semibold tracking-wider uppercase">
                {item.badge}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-['RelationshipOfMelodrama'] tracking-wide text-3xl font-normal mb-2 text-[#fcf9f2]">
                {item.title}
              </h3>
              <p className="font-body text-sm opacity-80 text-[#fcf9f2]">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HighlightsSection;
