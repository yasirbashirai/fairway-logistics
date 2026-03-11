"use client";

import { Shield, ShieldCheck, Award, Truck } from "lucide-react";

// Trust badge data
const trustBadges = [
  { icon: Shield, label: "FMCSA Registered" },
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Award, label: "Safety Certified" },
  { icon: Truck, label: "Asset-Based Carrier" },
];

// Placeholder client names
const clientNames = [
  "Gulf Coast Manufacturing",
  "Southern Import Group",
  "Coastal Builders Inc",
  "Mobile Port Authority",
  "Bay Area Distributors",
  "Delta Freight Co",
  "Emerald Coast Shipping",
  "Dixie Industrial Supply",
];

export default function LogoMarquee() {
  return (
    <section className="bg-navy-900 border-t border-b border-navy-800">
      {/* Part 1 — Trust Badges */}
      <div className="py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                  <badge.icon className="w-5 h-5 text-gold-400" />
                </div>
                <span className="text-sm font-semibold text-white whitespace-nowrap">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Part 2 — Logo Marquee */}
      <div className="py-6 border-t border-navy-800">
        {/* Label */}
        <p className="text-center text-xs uppercase tracking-widest text-navy-400 mb-4">
          Trusted by industry leaders
        </p>

        {/* Marquee container */}
        <div className="relative overflow-hidden group">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-900 to-transparent z-10 pointer-events-none" />

          {/* Scrolling track — pauses on hover */}
          <div className="marquee-track group-hover:[animation-play-state:paused]">
            {/* First set */}
            {clientNames.map((name) => (
              <div
                key={name}
                className="glass-card-light rounded-lg px-6 py-3 flex-shrink-0"
              >
                <span className="text-navy-300 font-medium whitespace-nowrap text-sm">
                  {name}
                </span>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {clientNames.map((name) => (
              <div
                key={`dup-${name}`}
                className="glass-card-light rounded-lg px-6 py-3 flex-shrink-0"
              >
                <span className="text-navy-300 font-medium whitespace-nowrap text-sm">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
