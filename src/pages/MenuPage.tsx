import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type MenuItem = {
  name: string;
  price: string;
  badge?: "Best Seller" | "New";
  category: string;
  description: string;
};

const menuItems: MenuItem[] = [
  {
    name: "Eden Signature Latte",
    price: "38",
    badge: "Best Seller",
    category: "Coffee",
    description: "Our signature blend with a hint of botanical sweetness and silky foam."
  },
  {
    name: "Cappuccino Royale",
    price: "35",
    category: "Coffee",
    description: "Rich espresso topped with a thick layer of creamy, velvety milk foam."
  },
  {
    name: "Americano Noir",
    price: "28",
    category: "Coffee",
    description: "A bold and clean extraction of our premium dark roast beans."
  },
  {
    name: "Affogato Al Eden",
    price: "42",
    badge: "New",
    category: "Coffee",
    description: "Vanilla bean gelato drowned in a double shot of hot, intense espresso."
  },
  {
    name: "Ceremonial Matcha",
    price: "38",
    category: "Non-Coffee",
    description: "Premium grade matcha whisped to perfection with creamy oat milk."
  },
  {
    name: "Midnight Chocolate",
    price: "40",
    category: "Non-Coffee",
    description: "70% dark cocoa blend with a touch of sea salt and whipped Ganache."
  },
  {
    name: "Taro Velvet",
    price: "36",
    badge: "New",
    category: "Non-Coffee",
    description: "Sweet and earthy purple yam infusion with a smooth, violet texture."
  },
  {
    name: "Bulgogi Croissant",
    price: "45",
    badge: "Best Seller",
    category: "Main Course",
    description: "Flaky French pastry stuffed with savory marinated beef and melted cheese."
  },
  {
    name: "Truffle Tagliatelle",
    price: "65",
    category: "Main Course",
    description: "Hand-made pasta tossed in a luxurious black truffle cream sauce."
  },
  {
    name: "Chicken Katsu Glaze",
    price: "55",
    category: "Main Course",
    description: "Crispy chicken thigh served over jasmine rice with our secret honey glaze."
  },
  {
    name: "Signature Macaron",
    price: "48",
    badge: "Best Seller",
    category: "Pastry & Dessert",
    description: "A curation of 6 delicate almond shells with seasonal floral fillings."
  },
  {
    name: "Burnt Cheesecake",
    price: "45",
    category: "Pastry & Dessert",
    description: "Basque-style cheesecake with a caramelized top and molten center."
  },
  {
    name: "Tiramisu Della Casa",
    price: "42",
    category: "Pastry & Dessert",
    description: "Espresso-soaked ladyfingers layered with rich mascarpone and cocoa."
  },
];

const categories = ["All", "Coffee", "Non-Coffee", "Main Course", "Pastry & Dessert"];

const MenuPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

  useEffect(() => {
    document.title = "The Menu — Cafe At Eden";
  }, []);

  return (
    <main className="min-h-screen bg-[#0f1914] text-[#fcf9f2] overflow-x-hidden pt-20">
      {/* Decorative Texture Overlays */}
      <div className="fixed inset-0 pointer-events-none opacity-10 mix-blend-overlay z-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />

      {/* Hero Section */}
      <section className="relative py-20 border-b border-accent/10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          {/* Black overlay for better text visibility */}
          <div className="absolute inset-0 bg-[#0f1914]/70 z-10" />
        </motion.div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-accent text-xs md:text-sm tracking-[0.5em] uppercase mb-6"
          >
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-['NewYork'] text-4xl md:text-8xl text-accent tracking-wider mb-4 leading-tight"
          >
            Our <span className="font-['RelationshipOfMelodrama'] italic text-[#fcf9f2] lowercase">Menu</span>
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            className="h-[1px] bg-accent/40 mx-auto"
          />
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-[80px] bg-[#0f1914]/90 backdrop-blur-xl z-30 border-b border-accent/5 py-6">
        <div className="container mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex justify-center gap-6 md:gap-12 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`group relative py-2 flex items-center gap-2 font-body text-[10px] md:text-xs tracking-[0.3em] uppercase transition-all duration-300 ${
                  active === cat ? "text-accent" : "text-[#fcf9f2]/40 hover:text-accent/60"
                }`}
              >
                <img 
                  src="/logo.png" 
                  alt="Eden Icon" 
                  className={`w-3 h-3 md:w-5 md:h-5 object-contain transition-all duration-500 ${
                    active === cat ? "brightness-110 opacity-100" : "brightness-50 opacity-40 grayscale group-hover:grayscale-0"
                  }`}
                />
                {cat}
                {active === cat && (
                  <motion.div 
                    layoutId="activeCategoryMenu"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-accent"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Listing */}
      <section className="py-20 container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 md:gap-y-20">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx % 2 * 0.1, duration: 0.8 }}
                className="group relative"
              >
                <div className="flex justify-between items-end mb-4 gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3">
                      <h3 className="font-['NewYork'] text-xl md:text-2xl text-accent/90 tracking-wide uppercase group-hover:text-accent transition-colors duration-500">
                        {item.name}
                      </h3>
                      {item.badge && (
                        <span className="px-2 py-0.5 border border-accent/30 text-[8px] tracking-widest text-accent uppercase font-bold rounded-sm">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Decorative dots connecting name to price */}
                  <div className="hidden md:block flex-grow border-b border-dotted border-accent/20 mb-2 mx-2" />

                  <div className="text-right">
                    <p className="font-['NewYork'] text-lg md:text-2xl text-accent">
                      <span className="text-[10px] md:text-xs mr-1 opacity-60 uppercase">Rp</span>
                      {item.price}k
                    </p>
                  </div>
                </div>

                <p className="font-body text-xs md:text-sm text-[#fcf9f2]/60 leading-relaxed max-w-[85%] italic tracking-wide">
                  {item.description}
                </p>

                {/* Subtle bottom border on hover */}
                <div className="absolute -bottom-6 left-0 w-0 h-[1px] bg-gradient-to-r from-accent/40 to-transparent group-hover:w-full transition-all duration-1000" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-40">
            <p className="font-['RelationshipOfMelodrama'] text-4xl text-accent/30 lowercase">coming soon to eden</p>
          </div>
        )}
      </section>

      {/* Curator's Note Section (Redesigned) */}
      <section className="py-32 relative flex justify-center items-center">
        <div className="absolute inset-0 bg-[#0a110d] opacity-50 z-0" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 w-full max-w-2xl px-8 py-16 md:py-24 border border-accent/20 bg-[#0f1914] text-center shadow-2xl mx-6"
        >
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-accent/30" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-accent/30" />

          <p className="font-body text-accent/40 text-[10px] tracking-[0.4em] uppercase mb-8">
            Seasonal Selections
          </p>

          <h2 className="font-['NewYork'] text-3xl md:text-5xl mb-8 leading-tight text-[#fcf9f2]">
            Rare & <span className="font-['RelationshipOfMelodrama'] italic text-accent lowercase">Handcrafted</span>
          </h2>

          <p className="font-body text-xs md:text-sm text-[#fcf9f2]/60 leading-relaxed mb-10 max-w-sm mx-auto italic px-4">
            "Ask our resident curator for a bespoke selection from our daily reserve, perfectly paired to your mood."
          </p>

          <div className="mt-8">
            <p className="font-['RelationshipOfMelodrama'] text-3xl text-accent opacity-80">
              Sincerely, Eden.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default MenuPage;
