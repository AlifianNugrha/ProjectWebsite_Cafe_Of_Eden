import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-white py-20 border-t border-accent/10">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">

        {/* BRAND COLUMN */}
        <div className="md:col-span-1 space-y-6">
          <h3 className="font-['NewYork'] text-3xl text-[#0f1914] tracking-wider leading-none">
            Cafe At Eden
          </h3>
          <p className="text-[#0f1914]/60 font-body text-xs md:text-sm leading-relaxed tracking-wide">
            Your Urban Oasis in Solo Raya. Premium coffee, artisan pastries, and an unforgettable theatrical experience.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="w-8 h-8 rounded-full border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-[#0f1914] transition-all">
              <Instagram size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-[#0f1914] transition-all">
              <Phone size={14} />
            </a>
          </div>
        </div>

        {/* SHOP/MAIN CONTENT COLUMN */}
        <div className="space-y-6">
          <h4 className="font-heading text-xs tracking-[0.4em] uppercase text-accent font-semibold">Discovery</h4>
          <div className="flex flex-col gap-4">
            {[
              { label: "Our Story", path: "/#about" },
              { label: "The Menu", path: "/menu" },
              { label: "Ambiance", path: "/#ambiance" },
              { label: "Location", path: "/#location" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.path}
                className="text-[#0f1914]/70 hover:text-accent transition-colors font-body text-sm tracking-widest uppercase text-[10px]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* SUPPORT COLUMN */}
        <div className="space-y-6">
          <h4 className="font-heading text-xs tracking-[0.4em] uppercase text-accent font-semibold">Information</h4>
          <div className="flex flex-col gap-4">
            {[
              { label: "Career", path: "#" },
              { label: "Private Event", path: "#" },
              { label: "Privacy Policy", path: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.path}
                className="text-[#0f1914]/70 hover:text-accent transition-colors font-body text-sm tracking-widest uppercase text-[10px]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CONNECT COLUMN */}
        <div className="space-y-6">
          <h4 className="font-heading text-xs tracking-[0.4em] uppercase text-accent font-semibold">Contact</h4>
          <div className="flex flex-col gap-5 text-[#0f1914]/70 font-body text-sm tracking-wide">
            <div className="flex items-start justify-center md:justify-start gap-3">
              <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
              <address className="not-italic text-[13px] leading-relaxed">
                Jln. Solo Raya No. 42,<br />
                Central Java, Indonesia
              </address>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Mail size={16} className="text-accent shrink-0" />
              <span className="text-[13px]">hello@cafeateden.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT AREA */}
      <div className="mt-20 pt-8 border-t border-[#0f1914]/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#0f1914]/40 font-body text-[10px] tracking-[0.4em] uppercase">
          © 2026 Cafe At Eden. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
