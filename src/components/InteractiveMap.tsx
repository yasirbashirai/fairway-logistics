"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Building2,
  Anchor,
  Warehouse,
  Truck,
  ArrowRight,
  Navigation,
  CircleDot,
  Radio,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Location data ── */
interface Location {
  id: string;
  city: string;
  state: string;
  stateAbbr: string;
  slug: string;
  description: string;
  isHQ: boolean;
  type: "hq" | "service-center" | "coverage";
  stats: { label: string; value: string }[];
  /* SVG coordinates (percentage-based within viewBox) */
  x: number;
  y: number;
}

const locations: Location[] = [
  {
    id: "mobile",
    city: "Mobile",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "mobile-al",
    description:
      "Our headquarters and primary hub. Full-service terminal with warehousing, drayage, and complete freight management capabilities.",
    isHQ: true,
    type: "hq",
    stats: [
      { label: "Role", value: "Primary Hub / HQ" },
      { label: "Port Access", value: "Direct" },
      { label: "Warehouse", value: "Yes — 50,000 sq ft" },
      { label: "Services", value: "Full-Service Terminal" },
    ],
    x: 520,
    y: 230,
  },
  {
    id: "baldwin",
    city: "Baldwin County",
    state: "Alabama",
    stateAbbr: "AL",
    slug: "baldwin-county-al",
    description:
      "Last-mile delivery operations across the eastern shore corridor, serving residential and commercial destinations throughout Baldwin County.",
    isHQ: false,
    type: "service-center",
    stats: [
      { label: "Role", value: "Service Center" },
      { label: "Port Access", value: "Via Mobile HQ" },
      { label: "Warehouse", value: "No" },
      { label: "Services", value: "Last-Mile Delivery" },
    ],
    x: 560,
    y: 280,
  },
  {
    id: "pensacola",
    city: "Pensacola",
    state: "Florida",
    stateAbbr: "FL",
    slug: "pensacola-fl",
    description:
      "Florida panhandle freight solutions connecting Gulf Coast logistics to the Sunshine State's western markets and military installations.",
    isHQ: false,
    type: "service-center",
    stats: [
      { label: "Role", value: "Service Center" },
      { label: "Port Access", value: "Port Pensacola" },
      { label: "Warehouse", value: "No" },
      { label: "Services", value: "Panhandle Freight" },
    ],
    x: 640,
    y: 270,
  },
  {
    id: "gulfport",
    city: "Gulfport",
    state: "Mississippi",
    stateAbbr: "MS",
    slug: "gulfport-ms",
    description:
      "Port drayage and intermodal connections at the Port of Gulfport, one of the Gulf's busiest shipping terminals for containerized cargo.",
    isHQ: false,
    type: "service-center",
    stats: [
      { label: "Role", value: "Service Center" },
      { label: "Port Access", value: "Port of Gulfport" },
      { label: "Warehouse", value: "Yes — Partner" },
      { label: "Services", value: "Port Drayage / Intermodal" },
    ],
    x: 400,
    y: 290,
  },
  {
    id: "biloxi",
    city: "Biloxi",
    state: "Mississippi",
    stateAbbr: "MS",
    slug: "biloxi-ms",
    description:
      "Regional distribution hub with dedicated routes serving the Mississippi Gulf Coast's commercial and industrial sectors.",
    isHQ: false,
    type: "service-center",
    stats: [
      { label: "Role", value: "Service Center" },
      { label: "Port Access", value: "Via Gulfport" },
      { label: "Warehouse", value: "No" },
      { label: "Services", value: "Regional Distribution" },
    ],
    x: 440,
    y: 300,
  },
  {
    id: "nola",
    city: "New Orleans",
    state: "Louisiana",
    stateAbbr: "LA",
    slug: "new-orleans-la",
    description:
      "Gulf gateway operations with port-to-door logistics connecting the Port of New Orleans to destinations across the Southeast.",
    isHQ: false,
    type: "coverage",
    stats: [
      { label: "Role", value: "Coverage Area" },
      { label: "Port Access", value: "Port of New Orleans" },
      { label: "Warehouse", value: "Partner Network" },
      { label: "Services", value: "Port-to-Door" },
    ],
    x: 240,
    y: 260,
  },
];

/* ── Helper: connection lines from HQ to each location ── */
const hq = locations.find((l) => l.isHQ)!;

/* ── Legend items ── */
const legendItems = [
  { icon: Building2, label: "Headquarters", color: "bg-gold-400" },
  { icon: CircleDot, label: "Service Center", color: "bg-emerald-400" },
  { icon: Radio, label: "Coverage Area", color: "bg-sky-400" },
];

/* ── Stat icon mapping ── */
function getStatIcon(label: string) {
  if (label === "Port Access") return Anchor;
  if (label === "Warehouse") return Warehouse;
  if (label === "Services") return Truck;
  return Navigation;
}

export default function InteractiveMap() {
  const [selected, setSelected] = useState<Location>(locations[0]);

  return (
    <section className="bg-navy-950 py-20 sm:py-28 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gold-400/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section Header ── */}
        <ScrollReveal className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold-400/40 bg-gold-400/5 text-gold-400 font-accent uppercase tracking-widest text-xs mb-4">
            Interactive Coverage Map
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white">
            Our Service{" "}
            <span className="text-gold-gradient">Network</span>
          </h2>

          <div className="section-divider mx-auto mt-4" />

          <p className="mt-4 text-navy-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Click any location on the map to explore our service capabilities
            across the Gulf Coast region.
          </p>
        </ScrollReveal>

        {/* ── Map + Info Panel ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* LEFT — SVG Map (spans 3 columns on desktop) */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-4 sm:p-6 relative">
              {/* Map title bar */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span className="text-sm font-semibold text-white">
                    Gulf Coast Service Map
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-navy-600" />
                  <span className="w-2.5 h-2.5 rounded-full bg-navy-600" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gold-400" />
                </div>
              </div>

              {/* SVG Map */}
              <svg
                viewBox="100 50 700 380"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Gold glow filter for markers */}
                  <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Animated dash pattern */}
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d4a243" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#d4a243" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#d4a243" stopOpacity="0.1" />
                  </linearGradient>

                  {/* Water gradient */}
                  <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0a1628" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0d2847" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* ── Water / Gulf of Mexico ── */}
                <rect x="100" y="50" width="700" height="380" fill="url(#waterGrad)" rx="8" />

                {/* Water label */}
                <text x="420" y="390" textAnchor="middle" fill="#1e3a5f" fontSize="14" fontWeight="600" fontFamily="sans-serif" opacity="0.6">
                  GULF OF MEXICO
                </text>

                {/* Subtle water lines */}
                {[340, 355, 370].map((y, i) => (
                  <path
                    key={`wave-${i}`}
                    d={`M ${150 + i * 30} ${y} Q ${300 + i * 20} ${y - 8}, ${450 + i * 10} ${y} Q ${550 - i * 10} ${y + 8}, ${700 - i * 20} ${y}`}
                    fill="none"
                    stroke="#1e3a5f"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                ))}

                {/* ── State: Louisiana ── */}
                <motion.path
                  d="
                    M 130,60 L 130,140 L 140,160 L 150,180 L 160,200
                    L 170,220 L 180,240 L 200,250 L 210,270 L 220,280
                    L 235,290 L 250,300 L 260,310 L 240,320 L 220,310
                    L 200,305 L 190,310 L 200,320 L 220,325 L 250,330
                    L 270,325 L 290,310 L 300,295 L 310,280 L 300,260
                    L 310,240 L 320,220 L 320,180 L 320,140 L 320,100
                    L 320,60 Z
                  "
                  fill={selected.id === "nola" ? "#d4a243" : "#0f2035"}
                  fillOpacity={selected.id === "nola" ? 0.25 : 0.8}
                  stroke="#1e3a5f"
                  strokeWidth="1.5"
                  className="cursor-pointer transition-colors duration-300"
                  whileHover={{ fillOpacity: 0.5, fill: "#d4a243" }}
                  onClick={() => setSelected(locations.find((l) => l.id === "nola")!)}
                />
                <text x="230" y="160" textAnchor="middle" fill="#4a6a8a" fontSize="13" fontWeight="700" fontFamily="sans-serif" opacity="0.7" className="pointer-events-none">
                  LA
                </text>

                {/* ── State: Mississippi ── */}
                <motion.path
                  d="
                    M 320,60 L 320,100 L 320,140 L 320,180 L 320,220
                    L 310,240 L 300,260 L 310,280 L 300,295
                    L 320,305 L 340,310 L 360,315 L 380,318
                    L 400,320 L 420,318 L 440,315 L 460,310
                    L 470,290 L 480,260 L 480,220 L 480,180
                    L 480,140 L 480,100 L 480,60 Z
                  "
                  fill={
                    selected.id === "gulfport" || selected.id === "biloxi"
                      ? "#d4a243"
                      : "#0f2035"
                  }
                  fillOpacity={
                    selected.id === "gulfport" || selected.id === "biloxi" ? 0.25 : 0.7
                  }
                  stroke="#1e3a5f"
                  strokeWidth="1.5"
                  className="cursor-pointer transition-colors duration-300"
                  whileHover={{ fillOpacity: 0.5, fill: "#d4a243" }}
                  onClick={() => setSelected(locations.find((l) => l.id === "gulfport")!)}
                />
                <text x="400" y="160" textAnchor="middle" fill="#4a6a8a" fontSize="13" fontWeight="700" fontFamily="sans-serif" opacity="0.7" className="pointer-events-none">
                  MS
                </text>

                {/* ── State: Alabama ── */}
                <motion.path
                  d="
                    M 480,60 L 480,100 L 480,140 L 480,180
                    L 480,220 L 480,260 L 470,290 L 460,310
                    L 480,320 L 500,325 L 510,330 L 520,340
                    L 530,340 L 540,330 L 560,315 L 570,305
                    L 580,290 L 580,260 L 590,240 L 600,220
                    L 600,180 L 600,140 L 600,100 L 600,60 Z
                  "
                  fill={
                    selected.id === "mobile" || selected.id === "baldwin"
                      ? "#d4a243"
                      : "#132840"
                  }
                  fillOpacity={
                    selected.id === "mobile" || selected.id === "baldwin" ? 0.25 : 0.7
                  }
                  stroke="#1e3a5f"
                  strokeWidth="1.5"
                  className="cursor-pointer transition-colors duration-300"
                  whileHover={{ fillOpacity: 0.5, fill: "#d4a243" }}
                  onClick={() => setSelected(locations.find((l) => l.id === "mobile")!)}
                />
                <text x="540" y="160" textAnchor="middle" fill="#4a6a8a" fontSize="13" fontWeight="700" fontFamily="sans-serif" opacity="0.7" className="pointer-events-none">
                  AL
                </text>

                {/* ── State: Florida panhandle ── */}
                <motion.path
                  d="
                    M 600,60 L 600,100 L 600,140 L 600,180
                    L 600,220 L 590,240 L 580,260 L 580,290
                    L 570,305 L 590,310 L 620,300 L 650,290
                    L 680,280 L 710,270 L 740,260 L 770,250
                    L 770,220 L 770,180 L 770,140 L 770,100 L 770,60 Z
                  "
                  fill={selected.id === "pensacola" ? "#d4a243" : "#132840"}
                  fillOpacity={selected.id === "pensacola" ? 0.25 : 0.6}
                  stroke="#1e3a5f"
                  strokeWidth="1.5"
                  className="cursor-pointer transition-colors duration-300"
                  whileHover={{ fillOpacity: 0.5, fill: "#d4a243" }}
                  onClick={() => setSelected(locations.find((l) => l.id === "pensacola")!)}
                />
                <text x="690" y="160" textAnchor="middle" fill="#4a6a8a" fontSize="13" fontWeight="700" fontFamily="sans-serif" opacity="0.7" className="pointer-events-none">
                  FL
                </text>

                {/* ── Connection Lines from HQ ── */}
                {locations
                  .filter((l) => !l.isHQ)
                  .map((loc) => (
                    <motion.line
                      key={`line-${loc.id}`}
                      x1={hq.x}
                      y1={hq.y}
                      x2={loc.x}
                      y2={loc.y}
                      stroke="#d4a243"
                      strokeWidth={selected.id === loc.id ? 1.5 : 0.8}
                      strokeDasharray="6 4"
                      strokeOpacity={selected.id === loc.id ? 0.7 : 0.2}
                      className="pointer-events-none"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="0"
                        to="-20"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </motion.line>
                  ))}

                {/* ── Location Markers ── */}
                {locations.map((loc) => {
                  const isSelected = selected.id === loc.id;
                  const markerRadius = loc.isHQ ? 10 : 7;

                  return (
                    <g
                      key={loc.id}
                      className="cursor-pointer"
                      onClick={() => setSelected(loc)}
                    >
                      {/* Outer pulse ring */}
                      <circle
                        cx={loc.x}
                        cy={loc.y}
                        r={markerRadius + 6}
                        fill="none"
                        stroke={loc.isHQ ? "#d4a243" : loc.type === "coverage" ? "#38bdf8" : "#34d399"}
                        strokeWidth="1"
                        opacity="0.4"
                      >
                        <animate
                          attributeName="r"
                          from={markerRadius + 4}
                          to={markerRadius + 16}
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          from="0.5"
                          to="0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Second pulse ring (staggered) */}
                      <circle
                        cx={loc.x}
                        cy={loc.y}
                        r={markerRadius + 6}
                        fill="none"
                        stroke={loc.isHQ ? "#d4a243" : loc.type === "coverage" ? "#38bdf8" : "#34d399"}
                        strokeWidth="1"
                        opacity="0.3"
                      >
                        <animate
                          attributeName="r"
                          from={markerRadius + 4}
                          to={markerRadius + 16}
                          dur="2s"
                          begin="1s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          from="0.4"
                          to="0"
                          dur="2s"
                          begin="1s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Glow behind marker */}
                      {isSelected && (
                        <circle
                          cx={loc.x}
                          cy={loc.y}
                          r={markerRadius + 8}
                          fill={loc.isHQ ? "#d4a243" : "#34d399"}
                          opacity="0.15"
                          filter="url(#goldGlow)"
                        />
                      )}

                      {/* Main marker circle */}
                      <motion.circle
                        cx={loc.x}
                        cy={loc.y}
                        r={markerRadius}
                        fill={
                          loc.isHQ
                            ? "#d4a243"
                            : loc.type === "coverage"
                            ? "#38bdf8"
                            : "#34d399"
                        }
                        stroke={isSelected ? "#fff" : "rgba(255,255,255,0.3)"}
                        strokeWidth={isSelected ? 2.5 : 1.5}
                        whileHover={{ scale: 1.3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />

                      {/* Inner dot for HQ */}
                      {loc.isHQ && (
                        <circle
                          cx={loc.x}
                          cy={loc.y}
                          r={3}
                          fill="#060f1d"
                        />
                      )}

                      {/* Label */}
                      <text
                        x={loc.x}
                        y={loc.y - markerRadius - 8}
                        textAnchor="middle"
                        fill={isSelected ? "#fff" : "#94a3b8"}
                        fontSize="10"
                        fontWeight={isSelected ? "700" : "500"}
                        fontFamily="sans-serif"
                        className="pointer-events-none select-none"
                      >
                        {loc.city}
                        {loc.isHQ && (
                          <tspan fill="#d4a243" fontSize="8">
                            {" "}
                            (HQ)
                          </tspan>
                        )}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Legend */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4 pt-4 border-t border-navy-800/50">
                {legendItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-2">
                      <span
                        className={`w-3 h-3 rounded-full ${item.color}`}
                      />
                      <span className="text-xs text-navy-400 font-medium">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
                <div className="flex items-center gap-2">
                  <span className="w-6 border-t border-dashed border-gold-400/50" />
                  <span className="text-xs text-navy-400 font-medium">
                    Route Connection
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT — Info Panel (spans 2 columns on desktop) */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="glass-card-gold rounded-2xl p-6 sm:p-8"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      selected.isHQ
                        ? "bg-gold-400/20"
                        : selected.type === "coverage"
                        ? "bg-sky-400/15"
                        : "bg-emerald-400/15"
                    }`}
                  >
                    {selected.isHQ ? (
                      <Building2 className="w-6 h-6 text-gold-400" />
                    ) : (
                      <MapPin
                        className={`w-6 h-6 ${
                          selected.type === "coverage"
                            ? "text-sky-400"
                            : "text-emerald-400"
                        }`}
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white leading-tight">
                      {selected.city}
                    </h3>
                    <p className="text-gold-400 text-sm font-semibold mt-0.5">
                      {selected.state} ({selected.stateAbbr})
                    </p>
                    {selected.isHQ && (
                      <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-gold-400/15 text-gold-400 text-xs font-bold uppercase tracking-wider">
                        Headquarters
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-navy-300 text-sm sm:text-base leading-relaxed mb-6">
                  {selected.description}
                </p>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {selected.stats.map((stat) => {
                    const Icon = getStatIcon(stat.label);
                    return (
                      <div
                        key={stat.label}
                        className="glass-card rounded-lg p-3"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="w-3.5 h-3.5 text-gold-400/70" />
                          <span className="text-[11px] text-navy-400 uppercase tracking-wider font-medium">
                            {stat.label}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-white">
                          {stat.value}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Link */}
                <Link
                  href={`/logistics-services-${selected.slug}`}
                  className="group flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-gold-400/10 border border-gold-400/30 text-gold-400 font-semibold text-sm hover:bg-gold-400/20 hover:border-gold-400/50 transition-all duration-300"
                >
                  View {selected.city} Details
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {/* Quick nav: other locations */}
                <div className="mt-6 pt-5 border-t border-navy-800/50">
                  <p className="text-xs text-navy-500 uppercase tracking-wider font-medium mb-3">
                    Other Locations
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {locations
                      .filter((l) => l.id !== selected.id)
                      .map((loc) => (
                        <button
                          key={loc.id}
                          onClick={() => setSelected(loc)}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-navy-800/50 text-navy-300 border border-navy-700/30 hover:border-gold-400/30 hover:text-gold-400 transition-all duration-200"
                        >
                          {loc.city}
                        </button>
                      ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
