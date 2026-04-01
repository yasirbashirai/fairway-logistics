"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Truck,
  CheckCircle,
  Headphones,
  ArrowUpRight,
  Globe,
  Shield,
} from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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
  { icon: Clock, value: 15, suffix: "+", label: "Years Experience" },
  { icon: Truck, value: 500, suffix: "+", label: "Shipments Monthly" },
  { icon: CheckCircle, value: 98, suffix: "%", label: "On-Time Rate" },
  { icon: Headphones, value: 24, suffix: "/7", label: "Operations" },
];

/* ── US State SVG Paths (simplified continental US) ── */
const assetStates = ["AL", "MS", "LA", "FL"];

interface StateData {
  id: string;
  name: string;
  d: string;
}

const usStates: StateData[] = [
  { id: "WA", name: "Washington", d: "M125,10 L175,10 L180,18 L182,35 L170,40 L160,38 L142,42 L130,38 L118,30 L120,18 Z" },
  { id: "OR", name: "Oregon", d: "M118,30 L130,38 L142,42 L160,38 L170,40 L172,55 L168,72 L155,78 L120,75 L110,60 L108,45 Z" },
  { id: "CA", name: "California", d: "M108,45 L110,60 L120,75 L155,78 L148,95 L140,115 L135,140 L125,155 L110,155 L100,140 L95,120 L92,95 L95,75 L100,55 Z" },
  { id: "NV", name: "Nevada", d: "M120,75 L155,78 L162,85 L168,110 L160,135 L140,140 L135,140 L140,115 L148,95 L155,78 Z" },
  { id: "ID", name: "Idaho", d: "M170,40 L182,35 L190,30 L198,35 L200,55 L195,75 L185,80 L172,75 L168,72 L170,55 Z" },
  { id: "MT", name: "Montana", d: "M190,30 L198,35 L250,25 L280,22 L280,48 L260,52 L240,50 L220,55 L200,55 Z" },
  { id: "WY", name: "Wyoming", d: "M200,55 L220,55 L240,50 L260,52 L262,75 L260,95 L205,95 L195,90 L195,75 Z" },
  { id: "UT", name: "Utah", d: "M155,78 L168,72 L172,75 L185,80 L195,75 L195,90 L205,95 L200,115 L185,118 L168,110 L162,85 Z" },
  { id: "CO", name: "Colorado", d: "M205,95 L260,95 L262,120 L258,135 L205,138 L200,115 Z" },
  { id: "AZ", name: "Arizona", d: "M120,135 L140,140 L160,135 L168,110 L185,118 L200,115 L205,138 L195,170 L175,178 L150,175 L130,165 Z" },
  { id: "NM", name: "New Mexico", d: "M205,138 L258,135 L260,160 L258,185 L205,188 L195,170 Z" },
  { id: "ND", name: "North Dakota", d: "M280,22 L340,18 L345,45 L280,48 Z" },
  { id: "SD", name: "South Dakota", d: "M280,48 L345,45 L348,72 L342,78 L280,80 Z" },
  { id: "NE", name: "Nebraska", d: "M280,80 L342,78 L350,85 L358,105 L280,108 Z" },
  { id: "KS", name: "Kansas", d: "M280,108 L358,105 L360,135 L282,138 Z" },
  { id: "OK", name: "Oklahoma", d: "M282,138 L360,135 L362,155 L365,165 L310,168 L290,165 L270,165 L268,148 L282,145 Z" },
  { id: "TX", name: "Texas", d: "M268,148 L270,165 L290,165 L310,168 L365,165 L370,180 L365,200 L350,225 L330,240 L310,248 L290,245 L275,235 L260,220 L245,210 L240,195 L245,180 L258,185 L260,160 L258,148 Z" },
  { id: "MN", name: "Minnesota", d: "M340,18 L345,15 L385,12 L395,18 L398,52 L390,58 L348,58 L345,45 Z" },
  { id: "IA", name: "Iowa", d: "M348,58 L390,58 L398,62 L405,82 L398,88 L350,88 L348,72 Z" },
  { id: "MO", name: "Missouri", d: "M350,88 L398,88 L405,95 L410,115 L405,135 L395,140 L380,142 L370,140 L358,135 L355,108 Z" },
  { id: "AR", name: "Arkansas", d: "M370,140 L380,142 L395,140 L398,158 L395,172 L375,175 L365,172 L362,155 L360,145 Z" },
  { id: "LA", name: "Louisiana", d: "M365,172 L375,175 L395,172 L400,185 L405,198 L398,210 L385,215 L375,208 L368,198 L365,185 Z" },
  { id: "WI", name: "Wisconsin", d: "M385,12 L395,18 L420,15 L432,22 L438,45 L430,55 L420,58 L405,55 L398,52 Z" },
  { id: "IL", name: "Illinois", d: "M405,55 L420,58 L425,65 L428,85 L425,105 L422,120 L418,130 L412,138 L405,135 L410,115 L405,95 L398,88 L405,82 L405,62 Z" },
  { id: "MS", name: "Mississippi", d: "M398,158 L412,155 L420,158 L425,175 L422,192 L415,205 L405,210 L400,198 L405,198 L400,185 L395,172 Z" },
  { id: "AL", name: "Alabama", d: "M420,158 L438,155 L445,160 L448,178 L445,198 L440,210 L425,215 L415,205 L422,192 L425,175 Z" },
  { id: "TN", name: "Tennessee", d: "M405,135 L412,138 L418,130 L425,135 L460,128 L490,125 L498,130 L492,140 L460,142 L420,148 L398,150 L398,142 Z" },
  { id: "KY", name: "Kentucky", d: "M418,118 L425,118 L460,115 L485,110 L498,115 L502,122 L498,130 L490,125 L460,128 L425,135 L418,130 L422,120 Z" },
  { id: "IN", name: "Indiana", d: "M425,65 L440,62 L448,68 L450,88 L448,105 L440,112 L425,118 L422,120 L425,105 L428,85 Z" },
  { id: "MI", name: "Michigan", d: "M432,22 L438,18 L455,15 L470,20 L478,30 L475,48 L465,52 L455,48 L448,42 L442,35 L438,45 L430,55 L420,58 L425,48 Z" },
  { id: "OH", name: "Ohio", d: "M448,68 L465,62 L480,58 L495,62 L502,72 L500,90 L495,105 L485,110 L460,115 L448,118 L448,105 L450,88 Z" },
  { id: "GA", name: "Georgia", d: "M438,155 L460,152 L470,155 L478,170 L480,190 L475,205 L465,215 L450,218 L440,210 L445,198 L448,178 L445,160 Z" },
  { id: "FL", name: "Florida", d: "M440,210 L450,218 L465,215 L475,220 L485,225 L492,235 L495,252 L490,268 L480,278 L470,275 L465,260 L462,248 L455,240 L445,230 L435,222 L425,215 L440,210 Z" },
  { id: "SC", name: "South Carolina", d: "M470,155 L488,148 L502,150 L510,158 L505,168 L495,175 L480,178 L478,170 Z" },
  { id: "NC", name: "North Carolina", d: "M460,128 L460,135 L462,142 L470,145 L488,148 L502,150 L520,142 L540,135 L545,130 L535,125 L510,122 L498,130 L492,128 Z" },
  { id: "VA", name: "Virginia", d: "M490,105 L498,108 L515,108 L535,112 L545,118 L545,130 L535,125 L510,122 L498,115 L485,110 L495,105 Z" },
  { id: "WV", name: "West Virginia", d: "M490,90 L498,88 L508,92 L515,100 L515,108 L498,108 L490,105 L495,100 Z" },
  { id: "PA", name: "Pennsylvania", d: "M480,58 L500,55 L530,52 L548,55 L550,68 L545,78 L530,82 L515,82 L508,82 L502,72 L495,62 Z" },
  { id: "NY", name: "New York", d: "M500,28 L520,22 L540,18 L558,22 L565,35 L560,48 L550,52 L548,55 L530,52 L500,55 L495,48 L498,35 Z" },
  { id: "VT", name: "Vermont", d: "M548,10 L555,8 L560,15 L558,30 L552,32 L548,25 Z" },
  { id: "NH", name: "New Hampshire", d: "M555,8 L565,5 L570,12 L568,28 L562,32 L558,22 L560,15 Z" },
  { id: "ME", name: "Maine", d: "M565,5 L572,2 L582,5 L588,15 L585,28 L578,35 L570,32 L568,28 L570,12 Z" },
  { id: "MA", name: "Massachusetts", d: "M558,35 L565,35 L572,38 L578,35 L580,40 L572,42 L560,42 L555,40 Z" },
  { id: "CT", name: "Connecticut", d: "M555,42 L560,42 L568,45 L565,50 L558,50 L555,48 Z" },
  { id: "RI", name: "Rhode Island", d: "M568,42 L572,42 L575,45 L572,48 L568,48 Z" },
  { id: "NJ", name: "New Jersey", d: "M548,55 L555,55 L558,62 L555,72 L550,78 L545,78 L548,68 Z" },
  { id: "DE", name: "Delaware", d: "M545,78 L550,78 L552,82 L550,88 L545,88 L542,85 Z" },
  { id: "MD", name: "Maryland", d: "M515,82 L530,82 L545,82 L542,85 L545,88 L550,88 L548,95 L540,100 L530,98 L520,95 L515,92 L508,92 Z" },
];

/* ── Hub & spoke line endpoints from Mobile, AL ── */
const mobileHQ = { x: 432, y: 185 };
const hubSpokes = [
  { x: 140, y: 100 },  // West Coast
  { x: 250, y: 35 },   // Mountain
  { x: 340, y: 90 },   // Midwest
  { x: 490, y: 50 },   // Northeast
  { x: 520, y: 140 },  // Mid-Atlantic
  { x: 290, y: 210 },  // Texas
  { x: 380, y: 190 },  // LA
];

/* ── Legend items ── */
const legendItems = [
  { color: "bg-gold-400", label: "Asset-Based Fleet", desc: "AL, MS, LA, FL" },
  { color: "bg-fwgreen-400", label: "Brokerage Coverage", desc: "All 48 States" },
];

/* ── Interactive US Map Component ── */
function NationwideMap() {
  const [hoveredState, setHoveredState] = useState<StateData | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const mapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const isInView = useInView(mapRef, { once: true, amount: 0.3 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (mapRef.current) {
      const rect = mapRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={mapRef}
      className="relative rounded-2xl overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 rounded-2xl" />
      <div className="absolute inset-0 dot-pattern opacity-20 rounded-2xl" />

      {/* Animated glow behind Gulf Coast */}
      <motion.div
        className="absolute"
        style={{ left: "55%", top: "55%", width: 200, height: 200, x: -100, y: -100 }}
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full bg-gold-400/20 blur-3xl" />
      </motion.div>

      {/* SVG Map */}
      <div className="relative p-4 sm:p-6">
        <motion.svg
          ref={svgRef}
          viewBox="80 -5 520 295"
          className="w-full h-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <defs>
            {/* Glow filter for asset states */}
            <filter id="glow-gold" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood floodColor="#d4a243" floodOpacity="0.4" />
              <feComposite in2="blur" operator="in" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Subtle glow for brokerage states */}
            <filter id="glow-green" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feFlood floodColor="#3b990f" floodOpacity="0.2" />
              <feComposite in2="blur" operator="in" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Gradient for asset states */}
            <linearGradient id="gold-fill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5df8c" />
              <stop offset="50%" stopColor="#d4a243" />
              <stop offset="100%" stopColor="#b8862e" />
            </linearGradient>

            {/* Gradient for brokerage states */}
            <linearGradient id="green-fill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5bb82e" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#2d7a0b" stopOpacity="0.25" />
            </linearGradient>
          </defs>

          {/* Hub & spoke connection lines from Mobile */}
          {hubSpokes.map((spoke, i) => (
            <motion.line
              key={`spoke-${i}`}
              x1={mobileHQ.x}
              y1={mobileHQ.y}
              x2={spoke.x}
              y2={spoke.y}
              stroke="rgba(212,162,67,0.12)"
              strokeWidth="1"
              strokeDasharray="4 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3 + i * 0.1 }}
            />
          ))}

          {/* State paths */}
          {usStates.map((state, i) => {
            const isAsset = assetStates.includes(state.id);
            const isHovered = hoveredState?.id === state.id;

            return (
              <motion.path
                key={state.id}
                d={state.d}
                fill={isAsset ? "url(#gold-fill)" : "url(#green-fill)"}
                stroke={
                  isHovered
                    ? isAsset
                      ? "#f5df8c"
                      : "#80cf4c"
                    : isAsset
                      ? "#d4a243"
                      : "rgba(91,184,46,0.3)"
                }
                strokeWidth={isHovered ? 2 : isAsset ? 1.5 : 0.8}
                filter={isHovered ? (isAsset ? "url(#glow-gold)" : "url(#glow-green)") : "none"}
                className="cursor-pointer transition-colors"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={
                  isInView
                    ? {
                        opacity: isAsset ? 1 : 0.85,
                        scale: isHovered ? 1.02 : 1,
                      }
                    : {}
                }
                transition={{
                  opacity: { duration: 0.5, delay: isAsset ? 0.2 : 0.4 + i * 0.015 },
                  scale: { duration: 0.2 },
                }}
                style={{ transformOrigin: "center", transformBox: "fill-box" }}
                onMouseEnter={() => setHoveredState(state)}
                onMouseLeave={() => setHoveredState(null)}
              />
            );
          })}

          {/* Mobile HQ Marker */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            style={{ transformOrigin: `${mobileHQ.x}px ${mobileHQ.y}px` }}
          >
            {/* Pulse ring */}
            <motion.circle
              cx={mobileHQ.x}
              cy={mobileHQ.y}
              r="12"
              fill="none"
              stroke="#d4a243"
              strokeWidth="1.5"
              animate={{ r: [12, 22], opacity: [0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.circle
              cx={mobileHQ.x}
              cy={mobileHQ.y}
              r="12"
              fill="none"
              stroke="#d4a243"
              strokeWidth="1"
              animate={{ r: [12, 18], opacity: [0.4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
            />
            {/* Center dot */}
            <circle cx={mobileHQ.x} cy={mobileHQ.y} r="5" fill="#d4a243" />
            <circle cx={mobileHQ.x} cy={mobileHQ.y} r="3" fill="#fdf8e8" />

            {/* HQ Label */}
            <rect x={mobileHQ.x + 8} y={mobileHQ.y - 12} width="62" height="18" rx="4" fill="rgba(6,15,29,0.85)" stroke="#d4a243" strokeWidth="0.8" />
            <text x={mobileHQ.x + 14} y={mobileHQ.y + 1} fill="#d4a243" fontSize="8" fontWeight="700" fontFamily="Montserrat, sans-serif">
              Mobile HQ
            </text>
          </motion.g>
        </motion.svg>

        {/* Hover tooltip */}
        <AnimatePresence>
          {hoveredState && (
            <motion.div
              className="absolute pointer-events-none z-30"
              style={{ left: mousePos.x + 12, top: mousePos.y - 40 }}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.15 }}
            >
              <div className="glass-card rounded-lg px-3 py-2 border border-gold-400/20 shadow-lg">
                <p className="text-white font-heading font-bold text-sm leading-tight">
                  {hoveredState.name}
                </p>
                <p className="text-xs mt-0.5">
                  {assetStates.includes(hoveredState.id) ? (
                    <span className="text-gold-400 font-semibold">Asset-Based Fleet</span>
                  ) : (
                    <span className="text-fwgreen-400 font-semibold">Brokerage Coverage</span>
                  )}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Legend */}
        <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 flex flex-col gap-2">
          {legendItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-sm ${item.color}`} />
              <span className="text-xs text-white font-semibold">{item.label}</span>
              <span className="text-xs text-navy-400 hidden sm:inline">({item.desc})</span>
            </div>
          ))}
        </div>

        {/* Coverage badge */}
        <motion.div
          className="absolute top-3 right-3 sm:top-5 sm:right-5 glass-card rounded-xl px-4 py-3 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.2, type: "spring" }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Globe className="w-4 h-4 text-gold-400" />
            <span className="text-gold-400 font-accent font-bold text-lg">48</span>
          </div>
          <span className="text-[10px] text-navy-300 font-medium uppercase tracking-wider">States Covered</span>
        </motion.div>
      </div>
    </div>
  );
}

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
            Nationwide{" "}
            <span className="text-gold-gradient">Brokerage Coverage</span>
          </h2>

          <div className="section-divider mx-auto mt-4" />

          <p className="mt-4 text-navy-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Gulf Coast assets. Nationwide brokerage. From our home base in
            Mobile, AL we connect you to every corner of the country.
          </p>

          {/* Quick coverage summary pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card-gold">
              <Shield className="w-4 h-4 text-gold-400" />
              <span className="text-sm text-gold-300 font-medium">Asset-Based Gulf Coast Fleet</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card-light border-fwgreen-400/20">
              <Globe className="w-4 h-4 text-fwgreen-400" />
              <span className="text-sm text-fwgreen-300 font-medium">15,000+ Carrier Network</span>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Two-Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT — Interactive US Map */}
          <ScrollReveal direction="left">
            <NationwideMap />
          </ScrollReveal>

          {/* RIGHT — Location Cards Grid */}
          <div>
            <div className="mb-5">
              <h3 className="text-xl font-heading font-bold text-white mb-1">
                Gulf Coast Service Hubs
              </h3>
              <p className="text-sm text-navy-400">
                Our asset-based terminals across the Gulf Coast region
              </p>
            </div>

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
