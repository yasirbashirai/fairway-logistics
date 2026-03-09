"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, X } from "lucide-react";

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

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden animate-fade-in-up">
      <div className="bg-gold-gradient px-4 py-3 flex items-center justify-between gap-3 shadow-lg shadow-black/30">
        <div className="flex items-center gap-3 min-w-0">
          <a
            href="tel:+12517251929"
            className="flex items-center gap-2 text-dark font-bold text-sm shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden xs:inline">(251) 725-1929</span>
          </a>
          <Link
            href="/request-quote"
            className="bg-dark text-white font-bold text-xs px-4 py-2 rounded-lg hover:bg-dark-light transition-colors whitespace-nowrap"
          >
            Get a Freight Quote
          </Link>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-dark/60 hover:text-dark p-1 flex-shrink-0"
          aria-label="Dismiss"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
