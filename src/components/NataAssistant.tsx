import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NataAssistant = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FAB */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-gold flex items-center justify-center hover:brightness-110 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with NATA"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl shadow-eden overflow-hidden border border-border bg-background"
          >
            {/* Header */}
            <div className="bg-primary px-5 py-4">
              <h4 className="font-heading text-lg font-bold text-primary-foreground">
                NATA ☕
              </h4>
              <p className="text-primary-foreground/60 font-body text-xs">
                Your personal cafe assistant
              </p>
            </div>

            {/* Messages */}
            <div className="p-4 h-64 overflow-y-auto">
              <div className="bg-muted rounded-xl px-4 py-3 mb-3">
                <p className="font-body text-sm text-foreground">
                  Halo! ✨ Selamat datang di Cafe At Eden. Ada yang bisa NATA bantu? Mau tanya menu, lokasi, atau jam buka? ☕
                </p>
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-border p-3 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ketik pesan..."
                className="flex-1 bg-muted rounded-full px-4 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="w-9 h-9 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:brightness-110 transition-all">
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NataAssistant;
