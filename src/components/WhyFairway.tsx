"use client";

import { Truck, Anchor, Globe, Shield } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const advantages = [
  {
    icon: Truck,
    title: "Asset-Based Fleet",
    description:
      "We own our trucks. No middlemen, no excuses — direct control over every shipment.",
  },
  {
    icon: Anchor,
    title: "Gulf Coast Experts",
    description:
      "15+ years of port knowledge, regional freight lanes, and Gulf Coast terminal expertise.",
  },
  {
    icon: Globe,
    title: "Technology-Driven",
    description:
      "Real-time GPS tracking, automated updates, and instant digital quoting.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "FMCSA compliant, fully insured, rigorous driver safety programs.",
  },
];

export default function WhyFairway() {
  return (
    <section className="relative bg-navy-900 py-16 sm:py-24 overflow-hidden">
      {/* Dot-pattern overlay */}
      <div className="absolute inset-0 dot-pattern pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
            WHY FAIRWAY LOGISTICS
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            The Fairway Advantage
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* Advantage cards */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.12}
        >
          {advantages.map((adv) => (
            <StaggerItem key={adv.title}>
              <div className="glass-card rounded-2xl p-8 group hover:border-gold-400/30 hover:-translate-y-1 hover:glow-gold-sm transition-all duration-300 h-full">
                {/* Gold line at top */}
                <div className="h-0.5 bg-gold-400 rounded-full -mt-8 mb-6 -mx-8 rounded-t-2xl" />

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center mb-5">
                  <adv.icon className="w-7 h-7 text-navy-900" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  {adv.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-navy-300 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
