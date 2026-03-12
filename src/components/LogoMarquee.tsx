"use client";

import { motion } from "framer-motion";
import {
  Shield,
  ShieldCheck,
  Award,
  Truck,
  Anchor,
  Building2,
  Ship,
  Factory,
  Package,
  Container,
  Warehouse,
  Forklift,
  Star,
  Quote,
} from "lucide-react";

// Trust badge data
const trustBadges = [
  { icon: Shield, label: "FMCSA Registered" },
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Award, label: "Safety Certified" },
  { icon: Truck, label: "Asset-Based Carrier" },
];

// Client data with industry descriptors, icons, and testimonials
const clients = [
  {
    name: "Gulf Coast Manufacturing",
    industry: "Manufacturing",
    icon: Factory,
    initial: "G",
    rating: 5,
    testimonial: "Fairway has been our go-to carrier for 3 years. Consistent, reliable, and always on time.",
    person: "James R., Logistics Director",
  },
  {
    name: "Southern Import Group",
    industry: "Import / Export",
    icon: Container,
    initial: "S",
    rating: 5,
    testimonial: "Their drayage operations at Port of Mobile are unmatched. We've cut demurrage fees by 40%.",
    person: "Maria L., Supply Chain VP",
  },
  {
    name: "Coastal Builders Inc",
    industry: "Construction",
    icon: Building2,
    initial: "C",
    rating: 5,
    testimonial: "Reliable flatbed service for our oversized loads. They handle complex freight like no one else.",
    person: "Tom K., Procurement Manager",
  },
  {
    name: "Mobile Port Authority",
    industry: "Port Operations",
    icon: Anchor,
    initial: "M",
    rating: 5,
    testimonial: "A trusted partner in port logistics. Fairway's team is professional and always responsive.",
    person: "Sandra W., Operations Lead",
  },
  {
    name: "Bay Area Distributors",
    industry: "Distribution",
    icon: Package,
    initial: "B",
    rating: 5,
    testimonial: "Switched from a broker to Fairway and saved 18% on our core lanes. Direct carrier relationship matters.",
    person: "Kevin D., CEO",
  },
  {
    name: "Delta Freight Co",
    industry: "Freight",
    icon: Truck,
    initial: "D",
    rating: 4,
    testimonial: "Great capacity availability even during peak season. That's the asset-based advantage.",
    person: "Rachel P., Freight Coordinator",
  },
  {
    name: "Emerald Coast Shipping",
    industry: "Shipping",
    icon: Ship,
    initial: "E",
    rating: 5,
    testimonial: "From Pensacola to New Orleans, Fairway covers the Gulf Coast seamlessly.",
    person: "David M., Shipping Manager",
  },
  {
    name: "Dixie Industrial Supply",
    industry: "Industrial",
    icon: Warehouse,
    initial: "D",
    rating: 4,
    testimonial: "Their warehousing solutions in Mobile have transformed our distribution strategy.",
    person: "Angela T., Operations Director",
  },
];

// Container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

// Reusable client card component — enhanced with testimonials
function ClientCard({ client }: { client: (typeof clients)[number] }) {
  return (
    <div
      className="
        group/card relative flex-shrink-0 w-[320px]
        rounded-2xl border border-navy-700/40
        bg-gradient-to-br from-navy-800/60 to-navy-900/80 backdrop-blur-sm
        px-6 py-6
        transition-all duration-500 ease-out
        hover:border-gold-400/50 hover:shadow-[0_0_30px_-6px_rgba(212,162,67,0.2)]
        hover:-translate-y-1
      "
    >
      {/* Top gold accent line */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-gold-400/0 to-transparent group-hover/card:via-gold-400/60 transition-all duration-500 rounded-full" />

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-400/0 to-gold-400/0 group-hover/card:from-gold-400/5 group-hover/card:to-transparent transition-all duration-500 pointer-events-none" />

      <div className="relative">
        {/* Header row */}
        <div className="flex items-center gap-4 mb-4">
          {/* Monogram circle */}
          <div
            className="
              relative w-14 h-14 rounded-xl flex-shrink-0
              bg-gradient-to-br from-navy-700/80 to-navy-800
              border border-navy-600/40
              flex items-center justify-center
              transition-all duration-500
              group-hover/card:border-gold-400/40 group-hover/card:from-gold-400/10 group-hover/card:to-navy-800/90
              overflow-hidden
            "
          >
            {/* Corner accent */}
            <div className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-gold-400/0 group-hover/card:border-gold-400/50 rounded-tr-xl transition-all duration-500" />
            <div className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-gold-400/0 group-hover/card:border-gold-400/30 rounded-bl-xl transition-all duration-500" />
            <span className="text-xl font-bold text-gold-400/70 group-hover/card:text-gold-400 transition-colors duration-500 select-none">
              {client.initial}
            </span>
          </div>

          {/* Text content */}
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-white/90 group-hover/card:text-white truncate transition-colors duration-300">
              {client.name}
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              <client.icon className="w-3.5 h-3.5 text-navy-400 group-hover/card:text-gold-400/60 transition-colors duration-300 flex-shrink-0" />
              <p className="text-[11px] uppercase tracking-wider text-navy-400 group-hover/card:text-navy-300 transition-colors duration-300">
                {client.industry}
              </p>
            </div>
            {/* Star rating */}
            <div className="flex items-center gap-0.5 mt-1.5">
              {Array.from({ length: client.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 text-gold-400/50 fill-gold-400/50 group-hover/card:text-gold-400 group-hover/card:fill-gold-400 transition-colors duration-300"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial quote */}
        <div className="relative pl-4 border-l-2 border-gold-400/20 group-hover/card:border-gold-400/40 transition-colors duration-500">
          <Quote className="absolute -left-[11px] -top-1 w-5 h-5 text-gold-400/30 group-hover/card:text-gold-400/60 transition-colors duration-500 bg-navy-800 rounded-full p-0.5" />
          <p className="text-xs text-navy-300 group-hover/card:text-navy-200 leading-relaxed italic transition-colors duration-300">
            &ldquo;{client.testimonial}&rdquo;
          </p>
          <p className="text-[10px] text-navy-500 group-hover/card:text-gold-400/60 mt-2 font-medium transition-colors duration-300">
            — {client.person}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="relative bg-navy-900 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gold-400/3 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-[0.03] pointer-events-none" />

      {/* ── Part 1: Trust Badges ── */}
      <div className="relative py-8 border-t border-navy-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap items-center justify-center gap-4 lg:gap-6"
          >
            {trustBadges.map((badge) => (
              <motion.div
                key={badge.label}
                variants={badgeVariants}
                className="
                  group/badge flex items-center gap-3
                  rounded-full
                  border border-navy-700/50
                  bg-gradient-to-r from-navy-800/40 to-navy-800/20 backdrop-blur-sm
                  pl-1.5 pr-6 py-2
                  transition-all duration-300
                  hover:border-gold-400/40 hover:bg-navy-800/60
                  hover:shadow-[0_0_20px_-4px_rgba(212,162,67,0.15)]
                "
              >
                {/* Icon circle */}
                <div
                  className="
                    w-10 h-10 rounded-full
                    bg-gradient-to-br from-gold-400/20 to-gold-400/5
                    border border-gold-400/25
                    flex items-center justify-center flex-shrink-0
                    transition-all duration-300
                    group-hover/badge:from-gold-400/30 group-hover/badge:to-gold-400/15
                    group-hover/badge:border-gold-400/50
                    group-hover/badge:shadow-[0_0_16px_-3px_rgba(212,162,67,0.4)]
                  "
                >
                  <badge.icon className="w-4.5 h-4.5 text-gold-400 transition-transform duration-300 group-hover/badge:scale-110" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-navy-200 group-hover/badge:text-white transition-colors duration-300">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Gold gradient separator ── */}
      <div className="relative h-px">
        <div className="absolute inset-0 bg-navy-800" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-2/3 max-w-xl h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
      </div>

      {/* ── Part 2: Client Testimonial Marquee ── */}
      <div className="relative py-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-3 mb-10"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/40" />
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-gold-400" />
              <p className="text-sm uppercase tracking-[0.2em] text-gold-400 font-semibold">
                Trusted by Industry Leaders
              </p>
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/40" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white text-center">
            What Our Partners Say
          </h3>
          <p className="text-navy-400 text-sm max-w-lg text-center">
            Hear from the businesses that trust Fairway Logistics to move their freight across the Gulf Coast
          </p>
        </motion.div>

        {/* Marquee container */}
        <div className="relative overflow-hidden group">
          {/* Fade edges — wider for premium feel */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-navy-900 via-navy-900/90 to-transparent z-10 pointer-events-none" />

          {/* Scrolling track — pauses on section hover */}
          <div className="marquee-track group-hover:[animation-play-state:paused]">
            {/* First set */}
            {clients.map((client) => (
              <ClientCard key={client.name} client={client} />
            ))}

            {/* Duplicate set for seamless loop */}
            {clients.map((client) => (
              <ClientCard key={`dup-${client.name}`} client={client} />
            ))}
          </div>
        </div>

        {/* Stats row below marquee */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-8 lg:gap-12"
        >
          {[
            { value: "200+", label: "Trusted Partners" },
            { value: "98%", label: "Client Retention" },
            { value: "15+", label: "Years of Trust" },
            { value: "4.9/5", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group/stat">
              <p className="text-3xl font-accent font-bold text-gold-gradient group-hover/stat:glow-gold-text transition-all duration-300">
                {stat.value}
              </p>
              <p className="text-xs text-navy-400 uppercase tracking-wider mt-1 group-hover/stat:text-navy-300 transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="h-px bg-navy-800" />
    </section>
  );
}
