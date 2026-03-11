"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Truck,
  CheckCircle,
  Headphones,
  ArrowUpRight,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollReveal";

/* ── Location data with page slugs ── */
const locations = [
  {
    city: "Mobile",
    stateAbbr: "AL",
    slug: "mobile-al",
    description: "HQ — Full-service terminal with warehousing & drayage",
  },
  {
    city: "Baldwin County",
    stateAbbr: "AL",
    slug: "baldwin-county-al",
    description: "Last-mile delivery across the eastern shore corridor",
  },
  {
    city: "Pensacola",
    stateAbbr: "FL",
    slug: "pensacola-fl",
    description: "Cross-border Florida panhandle freight solutions",
  },
  {
    city: "Gulfport",
    stateAbbr: "MS",
    slug: "gulfport-ms",
    description: "Port drayage & intermodal connections",
  },
  {
    city: "Biloxi",
    stateAbbr: "MS",
    slug: "biloxi-ms",
    description: "Regional distribution & dedicated routes",
  },
  {
    city: "New Orleans",
    stateAbbr: "LA",
    slug: "new-orleans-la",
    description: "Gulf gateway — port-to-door logistics",
  },
];

/* ── Stats row data ── */
const stats = [
  {
    icon: Clock,
    value: 15,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Truck,
    value: 500,
    suffix: "+",
    label: "Shipments Monthly",
  },
  {
    icon: CheckCircle,
    value: 98,
    suffix: "%",
    label: "On-Time Rate",
  },
  {
    icon: Headphones,
    value: 24,
    suffix: "/7",
    label: "Operations",
  },
];

export default function CoverageMap() {
  return (
    <section className="bg-navy-radial py-20 sm:py-28 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold-400/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section Header ── */}
        <ScrollReveal className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold-400/40 bg-gold-400/5 text-gold-400 font-accent uppercase tracking-widest text-xs mb-4">
            Coverage Area
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white">
            Gulf Coast{" "}
            <span className="text-gold-gradient">&amp; Beyond</span>
          </h2>

          <div className="section-divider mx-auto mt-4" />

          <p className="mt-4 text-navy-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            From our home base in Mobile, AL we serve the entire Gulf Coast
            region with asset-based reliability — and connect you nationwide.
          </p>
        </ScrollReveal>

        {/* ── Two-Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT — Map Visual */}
          <ScrollReveal direction="left">
            <div className="relative rounded-2xl overflow-hidden group">
              {/* Gulf coast image */}
              <Image
                src="/images/gulf-coast.jpg"
                alt="Gulf Coast coverage map showing service areas across Alabama, Florida, Mississippi, and Louisiana"
                width={720}
                height={480}
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/40 to-transparent rounded-2xl" />

              {/* Subtle dot pattern */}
              <div className="absolute inset-0 dot-pattern opacity-30 rounded-2xl" />

              {/* Overlaid text */}
              <div className="absolute bottom-6 left-6 z-10">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1">
                  Gulf Coast Coverage
                </h3>
                <p className="text-sm text-navy-200 tracking-wide">
                  AL &bull; FL &bull; MS &bull; LA &bull; Nationwide
                </p>
              </div>

              {/* Floating stat badges — absolute positioned around the image */}
              <div className="absolute top-4 right-4 glass-card rounded-lg px-3 py-2 text-center transition-transform duration-300 hover:scale-110">
                <span className="block text-lg font-heading font-bold text-gold-400">
                  4
                </span>
                <span className="text-xs text-navy-200">States</span>
              </div>

              <div className="absolute bottom-16 sm:bottom-4 left-4 glass-card rounded-lg px-3 py-2 text-center z-20 transition-transform duration-300 hover:scale-110">
                <span className="block text-lg font-heading font-bold text-gold-400">
                  6
                </span>
                <span className="text-xs text-navy-200">Port Cities</span>
              </div>

              <div className="absolute bottom-4 right-4 glass-card rounded-lg px-3 py-2 text-center transition-transform duration-300 hover:scale-110">
                <span className="block text-lg font-heading font-bold text-gold-400">
                  24/7
                </span>
                <span className="text-xs text-navy-200">Operations</span>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT — Location Cards Grid */}
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            staggerDelay={0.08}
          >
            {locations.map((loc) => (
              <StaggerItem key={loc.slug}>
                <Link
                  href={`/logistics-services-${loc.slug}`}
                  className="glass-card-light rounded-xl p-4 flex items-start gap-3 group/card transition-all duration-300 hover:border-gold-400/30 hover:scale-[1.02] hover:glow-gold-sm block h-full"
                >
                  {/* Gold icon circle */}
                  <div className="w-10 h-10 rounded-full bg-gold-400/10 flex-shrink-0 flex items-center justify-center transition-colors duration-300 group-hover/card:bg-gold-400/20">
                    <MapPin className="w-5 h-5 text-gold-400" />
                  </div>

                  {/* Text content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-heading font-bold text-white leading-tight">
                        {loc.city}
                      </p>
                      <ArrowUpRight className="w-3.5 h-3.5 text-navy-500 transition-all duration-300 group-hover/card:text-gold-400 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                    </div>
                    <p className="text-gold-400 text-xs font-semibold mt-0.5">
                      {loc.stateAbbr}
                    </p>
                    <p className="text-sm text-navy-300 mt-1 leading-snug">
                      {loc.description}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* ── Stats Row ── */}
        <div className="mt-16">
          {/* Divider line */}
          <div className="h-px bg-gradient-to-r from-transparent via-navy-700/50 to-transparent mb-12" />

          <StaggerContainer
            className="grid grid-cols-2 sm:grid-cols-4 gap-8"
            staggerDelay={0.12}
            delay={0.2}
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <StaggerItem key={stat.label}>
                  <div className="text-center group/stat">
                    {/* Gold icon circle */}
                    <div className="w-14 h-14 mx-auto rounded-full bg-gold-400/10 flex items-center justify-center mb-3 transition-all duration-300 group-hover/stat:bg-gold-400/20 group-hover/stat:scale-110">
                      <Icon className="w-6 h-6 text-gold-400" />
                    </div>

                    {/* Animated counter number */}
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      className="text-3xl sm:text-4xl font-accent font-bold text-gold-gradient metric-counter"
                    />

                    {/* Label */}
                    <p className="text-sm text-navy-300 mt-1 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Bottom tagline */}
          <ScrollReveal delay={0.4}>
            <p className="text-center text-navy-400 text-sm mt-10 max-w-lg mx-auto">
              Asset-based means we own the trucks, employ the drivers, and
              control the entire chain — so your freight is never
              double-brokered.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
