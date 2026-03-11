"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!dismissed) setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
        >
          <div className="bg-gold-gradient px-4 py-3 flex items-center justify-between gap-3 shadow-lg shadow-black/30">
            <div className="flex items-center gap-3 min-w-0">
              <a
                href="tel:+12517251929"
                className="flex items-center gap-2 text-navy-900 font-bold text-sm shrink-0"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xs:inline">(251) 725-1929</span>
              </a>
              <Link
                href="/request-quote"
                className="bg-navy-900 text-white font-bold text-xs px-4 py-2 rounded-lg hover:bg-navy-800 transition-colors whitespace-nowrap"
              >
                Get Quote
              </Link>
            </div>
            <button
              onClick={() => setDismissed(true)}
              className="text-navy-900/60 hover:text-navy-900 p-1 flex-shrink-0"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
