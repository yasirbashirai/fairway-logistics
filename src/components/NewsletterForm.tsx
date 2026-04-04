"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "newsletter", email }),
      });

      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <p className="text-fwgreen-400 text-sm font-semibold">
        Subscribed! Thank you.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        placeholder="Your email address"
        aria-label="Email address for newsletter"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 min-w-0 bg-navy-800/60 border border-navy-600 rounded-lg px-3 py-2.5 text-sm text-white placeholder-navy-400 focus:border-gold-400 focus:ring-1 focus:ring-gold-400/30 focus:outline-none transition-all duration-300"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-gold-gradient text-navy-950 font-bold px-4 py-2.5 rounded-lg text-sm hover:shadow-lg hover:shadow-gold-400/20 transition-all duration-300 flex-shrink-0 disabled:opacity-50"
      >
        {status === "sending" ? "..." : "Subscribe"}
      </button>
    </form>
  );
}
