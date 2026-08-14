import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, ExternalLink, Navigation } from "lucide-react";

const branches = [
  {
    name: "Solo Baru",
    address: "Jl. Ir. Soekarno, Solo Baru",
    hours: "08:00 - 22:00",
    phone: "+62 271 223 445",
    tag: "Signature Space"
  },
  {
    name: "Pakuwon Mall",
    address: "Lantai LG, Pakuwon Mall Solo",
    hours: "10:00 - 22:00",
    phone: "+62 271 556 778",
    tag: "Urban Retreat"
  },
  {
    name: "Coyudan",
    address: "Jl. Gatot Subroto, No. 45 Solo",
    hours: "08:00 - 22:00",
    phone: "+62 271 889 001",
    tag: "Heritage House"
  },
  {
    name: "Grogol",
    address: "Jl. Raya Grogol, Sukoharjo",
    hours: "08:00 - 21:00",
    phone: "+62 271 334 556",
    tag: "Minimalist Garden"
  },
];

const LocationsPage = () => {
  useEffect(() => {
    document.title = "Locations — Cafe At Eden";
  }, []);

  return (
    <main className="min-h-[85vh] bg-[#ebf0ec] text-[#0f1914] pt-24 pb-12 relative flex flex-col justify-center overflow-x-hidden">
    {/* Background Texture confined to this page only */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.6] mix-blend-soft-light z-0 bg-[url('/background.png')]" />

    <div className="container mx-auto px-6 relative z-10">
      {/* Super Compact Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6 md:mb-10"
      >
        <p className="font-body text-accent text-[8px] md:text-[10px] tracking-[0.4em] uppercase mb-2">
          Sanctuaries
        </p>
        <h1 className="font-['NewYork'] text-2xl md:text-5xl text-[#0f1914] tracking-widest leading-tight">
          Find Us <span className="font-['RelationshipOfMelodrama'] italic text-accent lowercase">Here</span>
        </h1>
      </motion.div>

      {/* 2x2 Grid that fits without overflowing footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 max-w-5xl mx-auto w-full">
        {branches.map((branch, i) => (
          <motion.div
            key={branch.name}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.04 }}
            className="group relative bg-white border border-[#0f1914]/5 p-5 md:p-6 transition-transform duration-500 rounded-sm"
          >
            <div className="relative z-10 flex flex-col">
              <span className="font-body text-[7px] md:text-[8px] tracking-[0.1em] uppercase text-accent mb-1 block opacity-60">
                {branch.tag}
              </span>
              
              <h3 className="font-['NewYork'] text-lg md:text-2xl text-[#0f1914] mb-3 tracking-wide group-hover:text-accent font-semibold transition-colors duration-500">
                {branch.name}
              </h3>

              <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                <div className="flex items-start gap-2">
                  <MapPin size={12} className="text-accent mt-0.5 shrink-0" />
                  <p className="font-body text-[9px] md:text-xs text-[#0f1914]/70 leading-relaxed">
                    {branch.address}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Clock size={12} className="text-accent shrink-0" />
                  <p className="font-body text-[9px] md:text-xs text-[#0f1914]/70">
                    {branch.hours}
                  </p>
                </div>
              </div>

              <a
                href="#"
                className="self-start inline-flex items-center gap-1.5 px-4 py-2 bg-[#0f1914] text-white font-body text-[7px] md:text-[9px] tracking-[0.2em] uppercase hover:bg-accent hover:text-[#0f1914] transition-all duration-300"
              >
                <ExternalLink size={10} />
                Maps
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </main>
);
};

export default LocationsPage;
