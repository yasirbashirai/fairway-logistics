"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  Ship,
  Handshake,
  Warehouse,
  Globe,
  Container,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Weight,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Service data ────────────────────────────────────────────────── */

interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  features: string[];
}

const serviceRoutes: Record<string, string> = {
  trucking: "/asset-based-trucking",
  "gulf-drayage": "/gulf-coast-container-drayage",
  "heavy-haul": "/heavy-haul",
  brokerage: "/freight-brokerage",
  warehousing: "/warehousing-mobile-al",
  "import-export": "/import-export-logistics",
};

const services: Service[] = [
  {
    id: "trucking",
    icon: Truck,
    title: "Asset-Based Trucking",
    shortDesc: "Company-owned fleet for reliable freight",
    description:
      "Our company-owned fleet delivers full truckload, less-than-truckload, and flatbed services with real-time GPS tracking nationwide from our Gulf Coast base.",
    image: "/images/truck-road.jpg",
    features: [
      "Company-owned fleet",
      "FTL & LTL options",
      "Flatbed & step-deck",
      "GPS real-time tracking",
    ],
  },
  {
    id: "gulf-drayage",
    icon: Container,
    title: "Gulf Coast Container Drayage",
    shortDesc: "Multi-port regional drayage",
    description:
      "Container drayage across Gulf Coast ports including the Port of Mobile with same-day pickup, chassis management, intermodal connections, and transload services.",
    image: "/images/gulf-coast.jpg",
    features: [
      "Multi-port coverage",
      "Same-day container pickup",
      "Chassis management",
      "Transload services",
    ],
  },
  {
    id: "heavy-haul",
    icon: Weight,
    title: "Heavy Haul & Over-Dimensional",
    shortDesc: "Oversized and overweight freight specialists",
    description:
      "Specialized heavy haul and over-dimensional transport for oversized equipment, machinery, and construction materials. Full permit coordination and route planning nationwide.",
    image: "/images/truck-road.jpg",
    features: [
      "Over-dimensional loads",
      "Permit coordination",
      "Route planning & surveys",
      "Escort & pilot car services",
    ],
  },
  {
    id: "brokerage",
    icon: Handshake,
    title: "Freight Brokerage",
    shortDesc: "Vetted carrier network nationwide",
    description:
      "Access our vetted network of 2,000+ carriers for competitive rates, full shipment visibility, and on-demand capacity for any lane or load type — coast to coast.",
    image: "/images/trucks.jpg",
    features: [
      "2,000+ carrier network",
      "Nationwide coverage",
      "Full shipment visibility",
      "Capacity on demand",
    ],
  },
  {
    id: "warehousing",
    icon: Warehouse,
    title: "Warehousing & Distribution",
    shortDesc: "200,000 sq ft BONDED warehouse",
    description:
      "200,000 sq ft BONDED warehouse facility in Mobile, AL offering cross-docking, inventory management, pick & pack, climate-controlled storage, and container transloading.",
    image: "/images/warehouse.jpg",
    features: [
      "200,000 sq ft BONDED facility",
      "Cross-docking",
      "Inventory management",
      "Pick & pack",
    ],
  },
  {
    id: "import-export",
    icon: Globe,
    title: "Import & Export Logistics",
    shortDesc: "International freight coordination",
    description:
      "End-to-end international logistics coordination including customs clearance, documentation support, port-to-door delivery, and full trade compliance.",
    image: "/images/hero.jpg",
    features: [
      "Customs coordination",
      "Documentation support",
      "Port-to-door",
      "Trade compliance",
    ],
  },
];

/* ── Animation variants ──────────────────────────────────────────── */

const panelVariants = {
  enter: { opacity: 0, x: 30 },
  center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.25 } },
};

const accordionVariants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

/* ── Component ───────────────────────────────────────────────────── */

export default function ServiceExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(0);

  const active = services[activeIndex];

  return (
    <section id="services" className="bg-navy-radial py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-gold-400 uppercase tracking-widest text-sm font-accent font-semibold">
            OUR SERVICES
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
            Comprehensive Logistics Solutions
          </h2>
          <div className="section-divider mx-auto mt-6" />
        </ScrollReveal>

        {/* ── Desktop: side tabs + detail panel ───────────────────── */}
        <div className="hidden lg:flex gap-8">
          {/* Tab column */}
          <ScrollReveal direction="left" className="lg:w-1/3 space-y-2">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isActive = i === activeIndex;
              return (
                <button
                  key={svc.id}
                  onClick={() => setActiveIndex(i)}
                  className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "glass-card-gold border-l-[3px] border-gold-400 text-white"
                      : "bg-transparent text-navy-300 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-5 h-5 flex-shrink-0 ${
                        isActive ? "text-gold-400" : "text-navy-400"
                      }`}
                    />
                    <span className="font-heading font-semibold text-sm">
                      {svc.title}
                    </span>
                  </div>
                  <p
                    className={`mt-1 ml-8 text-xs ${
                      isActive ? "text-navy-200" : "text-navy-500"
                    }`}
                  >
                    {svc.shortDesc}
                  </p>
                </button>
              );
            })}
          </ScrollReveal>

          {/* Detail panel */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                variants={panelVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Image with overlay */}
                <div className="relative rounded-2xl overflow-hidden h-80">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover"
                  />
                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
                  {/* Overlaid text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-heading font-bold text-white">
                      {active.title}
                    </h3>
                    <p className="mt-2 text-navy-200 text-sm leading-relaxed max-w-lg">
                      {active.description}
                    </p>
                  </div>
                </div>

                {/* Features grid */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {active.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center gap-2 text-navy-200 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>

                {/* Learn more link */}
                <Link
                  href={serviceRoutes[active.id]}
                  className="inline-flex items-center gap-1.5 mt-6 text-gold-400 text-sm font-semibold hover:text-gold-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Mobile: accordion cards ─────────────────────────────── */}
        <div className="lg:hidden space-y-3">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            const isOpen = expandedMobile === i;
            return (
              <ScrollReveal key={svc.id} delay={i * 0.05}>
                <div className="rounded-xl overflow-hidden border border-navy-700/50">
                  {/* Accordion header */}
                  <button
                    onClick={() =>
                      setExpandedMobile(isOpen ? null : i)
                    }
                    className={`w-full flex items-center justify-between px-5 py-4 transition-colors ${
                      isOpen
                        ? "glass-card-gold border-l-[3px] border-gold-400"
                        : "bg-navy-800/40 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`w-5 h-5 ${
                          isOpen ? "text-gold-400" : "text-navy-400"
                        }`}
                      />
                      <span
                        className={`font-heading font-semibold text-sm ${
                          isOpen ? "text-white" : "text-navy-300"
                        }`}
                      >
                        {svc.title}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-navy-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Accordion body */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={accordionVariants}
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        className="overflow-hidden"
                      >
                        <div className="px-5 py-4 bg-navy-800/20">
                          {/* Image */}
                          <div className="relative rounded-xl overflow-hidden h-48">
                            <Image
                              src={svc.image}
                              alt={svc.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />
                          </div>

                          {/* Description */}
                          <p className="mt-4 text-navy-200 text-sm leading-relaxed">
                            {svc.description}
                          </p>

                          {/* Features */}
                          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {svc.features.map((feat) => (
                              <div
                                key={feat}
                                className="flex items-center gap-2 text-navy-200 text-xs"
                              >
                                <CheckCircle className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                                {feat}
                              </div>
                            ))}
                          </div>

                          {/* Learn more */}
                          <Link
                            href={serviceRoutes[svc.id]}
                            className="inline-flex items-center gap-1.5 mt-4 text-gold-400 text-sm font-semibold hover:text-gold-300 transition-colors"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
