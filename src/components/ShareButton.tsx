"use client";

import { Share2 } from "lucide-react";

export default function ShareButton({ title }: { title: string }) {
  return (
    <button
      className="inline-flex items-center gap-2 text-navy-300 hover:text-gold-400 transition-colors text-sm cursor-pointer"
      onClick={() => {
        if (typeof navigator !== "undefined" && navigator.share) {
          navigator.share({
            title,
            url: window.location.href,
          });
        } else if (typeof navigator !== "undefined" && navigator.clipboard) {
          navigator.clipboard.writeText(window.location.href);
        }
      }}
    >
      <Share2 className="w-4 h-4" />
      Share this article
    </button>
  );
}
