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
  Container,
  Globe,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Map tab types ── */
type MapTab = "brokerage" | "assets" | "drayage";

/* ── Location data for asset map ── */
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
      "Our headquarters and primary hub. Full-service terminal with 200,000 sq ft bonded warehouse, drayage, and complete freight management.",
    isHQ: true,
    type: "hq",
    stats: [
      { label: "Role", value: "Primary Hub / HQ" },
      { label: "Port Access", value: "Direct" },
      { label: "Warehouse", value: "Yes — 200,000 sq ft (Bonded)" },
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
      "Last-mile delivery operations across the eastern shore corridor, serving residential and commercial destinations.",
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
      "Florida panhandle freight solutions connecting to the Sunshine State's western markets and military installations.",
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
      "Port drayage and intermodal connections at the Port of Gulfport for containerized cargo.",
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
      "Regional distribution hub with dedicated routes serving the Mississippi Gulf Coast.",
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
      "Gulf gateway operations with port-to-door logistics connecting the Port of New Orleans to the Southeast.",
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

const hq = locations.find((l) => l.isHQ)!;

/* ── Map tabs ── */
const mapTabs: { id: MapTab; label: string; icon: React.ElementType; description: string }[] = [
  {
    id: "brokerage",
    label: "Brokerage Coverage",
    icon: Globe,
    description: "Nationwide freight brokerage with 2,000+ vetted carriers covering all 48 continental states.",
  },
  {
    id: "assets",
    label: "In-House Fleet",
    icon: Truck,
    description: "Our company-owned trucks and trailers primarily covering the South and Southeast from Mobile, AL.",
  },
  {
    id: "drayage",
    label: "Drayage Operations",
    icon: Container,
    description: "Container drayage at Gulf Coast ports including Mobile, Gulfport, and New Orleans.",
  },
];

/* ── US States for national map ── */
const usStates = [
  "WA", "OR", "CA", "NV", "ID", "MT", "WY", "UT", "CO", "AZ", "NM",
  "ND", "SD", "NE", "KS", "OK", "TX", "MN", "IA", "MO", "AR", "LA",
  "WI", "IL", "IN", "OH", "MI", "KY", "TN", "MS", "AL",
  "PA", "NY", "VT", "NH", "ME", "MA", "CT", "RI", "NJ", "DE", "MD",
  "VA", "WV", "NC", "SC", "GA", "FL",
];

/* ── Southeast states for asset fleet ── */
const southeastStates = [
  "AL", "MS", "LA", "FL", "GA", "TN", "SC", "NC", "AR", "TX",
];

/* ── Drayage ports ── */
const drayagePorts = [
  { name: "Port of Mobile", state: "AL", primary: true },
  { name: "Port of Gulfport", state: "MS", primary: false },
  { name: "Port of New Orleans", state: "LA", primary: false },
];

function getStatIcon(label: string) {
  if (label === "Port Access") return Anchor;
  if (label === "Warehouse") return Warehouse;
  if (label === "Services") return Truck;
  return Navigation;
}

export default function InteractiveMap() {
  const [activeTab, setActiveTab] = useState<MapTab>("brokerage");
  const [selected, setSelected] = useState<Location>(locations[0]);

  return (
    <section className="bg-navy-950 py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gold-400/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold-400/40 bg-gold-400/5 text-gold-400 font-accent uppercase tracking-widest text-xs mb-4">
            Coverage Maps
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white">
            Our Service{" "}
            <span className="text-gold-gradient">Network</span>
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="mt-4 text-navy-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            National brokerage coverage. Gulf Coast assets. Explore our reach.
          </p>
        </ScrollReveal>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {mapTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gold-400/15 border border-gold-400/40 text-gold-400"
                    : "bg-navy-800/40 border border-navy-700/30 text-navy-300 hover:border-gold-400/20 hover:text-gold-400"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active Tab Description */}
        <div className="text-center mb-8">
          <p className="text-navy-400 text-sm max-w-lg mx-auto">
            {mapTabs.find((t) => t.id === activeTab)?.description}
          </p>
        </div>

        {/* Map Content */}
        <AnimatePresence mode="wait">
          {/* === BROKERAGE (NATIONAL) MAP === */}
          {activeTab === "brokerage" && (
            <motion.div
              key="brokerage"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-card rounded-2xl p-6 sm:p-10 max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-6">
                  <Globe className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-semibold text-white">
                    Nationwide Brokerage Coverage
                  </span>
                </div>

                {/* US Map visualization */}
                <div className="relative bg-navy-900/50 rounded-xl p-8 mb-6">
                  <div className="grid grid-cols-11 gap-1 max-w-2xl mx-auto">
                    {usStates.map((state) => (
                      <div
                        key={state}
                        className="w-full aspect-square rounded-sm bg-emerald-400/30 border border-emerald-400/20 flex items-center justify-center"
                      >
                        <span className="text-[7px] sm:text-[9px] font-bold text-emerald-300/80">
                          {state}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-3 right-3 bg-navy-950/80 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm bg-emerald-400/40 border border-emerald-400/30" />
                      <span className="text-[10px] text-navy-300 font-medium">Brokerage Coverage</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: "States Covered", value: "48" },
                    { label: "Carrier Network", value: "2,000+" },
                    { label: "Load Types", value: "All" },
                    { label: "Availability", value: "24/7" },
                  ].map((stat) => (
                    <div key={stat.label} className="glass-card rounded-lg p-4 text-center">
                      <p className="text-2xl font-heading font-bold text-gold-gradient">{stat.value}</p>
                      <p className="text-xs text-navy-400 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* === IN-HOUSE FLEET (SOUTH/SOUTHEAST) MAP === */}
          {activeTab === "assets" && (
            <motion.div
              key="assets"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <ScrollReveal direction="left" className="lg:col-span-3">
                  <div className="glass-card rounded-2xl p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-gold-400" />
                        <span className="text-sm font-semibold text-white">
                          In-House Fleet Coverage — South &amp; Southeast
                        </span>
                      </div>
                    </div>

                    {/* SVG Map - South/Southeast States */}
                    <svg viewBox="100 50 700 380" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="3" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                        <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#0a1628" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#0d2847" stopOpacity="0.4" />
                        </linearGradient>
                      </defs>

                      <rect x="100" y="50" width="700" height="380" fill="url(#waterGrad)" rx="8" />
                      <text x="420" y="390" textAnchor="middle" fill="#1e3a5f" fontSize="14" fontWeight="600" fontFamily="sans-serif" opacity="0.6">
                        GULF OF MEXICO
                      </text>

                      {/* Texas */}
                      <motion.path
                        d="M 130,60 L 130,200 L 150,240 L 170,270 L 200,290 L 230,310 L 260,320 L 290,310 L 310,280 L 320,240 L 320,180 L 320,120 L 320,60 Z"
                        fill="#d4a243"
                        fillOpacity={0.2}
                        stroke="#d4a243"
                        strokeWidth="1.5"
                        strokeOpacity="0.4"
                      />
                      <text x="220" y="180" textAnchor="middle" fill="#d4a243" fontSize="13" fontWeight="700" fontFamily="sans-serif" opacity="0.7" className="pointer-events-none">TX</text>

                      {/* Louisiana */}
                      <motion.path
                        d="M 320,60 L 320,120 L 320,180 L 320,240 L 310,280 L 330,300 L 360,310 L 380,318 L 400,310 L 380,260 L 380,180 L 380,120 L 380,60 Z"
                        fill="#d4a243"
                        fillOpacity={0.25}
                        stroke="#d4a243"
                        strokeWidth="1.5"
                        strokeOpacity="0.4"
                      />
                      <text x="350" y="170" textAnchor="middle" fill="#d4a243" fontSize="13" fontWeight="700" fontFamily="sans-serif" opacity="0.7" className="pointer-events-none">LA</text>

                      {/* Arkansas */}
                      <motion.path
                        d="M 320,60 L 380,60 L 380,120 L 320,120 Z"
                        fill="#d4a243"
                        fillOpacity={0.15}
                        stroke="#d4a243"
                        strokeWidth="1"
                        strokeOpacity="0.3"
                      />
                      <text x="350" y="95" textAnchor="middle" fill="#d4a243" fontSize="10" fontWeight="700" fontFamily="sans-serif" opacity="0.5" className="pointer-events-none">AR</text>

                      {/* Mississippi */}
                      <motion.path
                        d="M 380,60 L 380,120 L 380,180 L 380,260 L 400,310 L 420,318 L 440,310 L 460,290 L 460,220 L 460,160 L 460,100 L 460,60 Z"
                        fill="#d4a243"
                        fillOpacity={0.25}
                        stroke="#d4a243"
                        strokeWidth="1.5"
                        strokeOpacity="0.4"
                      />
                      <text x="420" y="170" textAnchor="middle" fill="#d4a243" fontSize="13" fontWeight="700" fontFamily="sans-serif" opacity="0.7" className="pointer-events-none">MS</text>

                      {/* Alabama - highlighted as HQ */}
                      <motion.path
                        d="M 460,60 L 460,100 L 460,160 L 460,220 L 460,290 L 480,310 L 510,325 L 530,330 L 550,310 L 560,280 L 560,220 L 560,160 L 560,100 L 560,60 Z"
                        fill="#d4a243"
                        fillOpacity={0.35}
                        stroke="#d4a243"
                        strokeWidth="2"
                        strokeOpacity="0.6"
                      />
                      <text x="510" y="170" textAnchor="middle" fill="#d4a243" fontSize="13" fontWeight="700" fontFamily="sans-serif" opacity="0.9" className="pointer-events-none">AL</text>
                      <text x="510" y="185" textAnchor="middle" fill="#d4a243" fontSize="8" fontWeight="600" fontFamily="sans-serif" opacity="0.7" className="pointer-events-none">(HQ)</text>

                      {/* Tennessee */}
                      <motion.path
                        d="M 380,60 L 460,60 L 560,60 L 660,60 L 660,100 L 560,100 L 460,100 L 380,100 L 380,60 Z"
                        fill="#d4a243"
                        fillOpacity={0.15}
                        stroke="#d4a243"
                        strokeWidth="1"
                        strokeOpacity="0.3"
                      />
                      <text x="520" y="85" textAnchor="middle" fill="#d4a243" fontSize="10" fontWeight="700" fontFamily="sans-serif" opacity="0.5" className="pointer-events-none">TN</text>

                      {/* Georgia */}
                      <motion.path
                        d="M 560,100 L 560,160 L 560,220 L 560,280 L 580,300 L 610,310 L 630,290 L 640,250 L 640,200 L 640,150 L 640,100 Z"
                        fill="#d4a243"
                        fillOpacity={0.2}
                        stroke="#d4a243"
                        strokeWidth="1.5"
                        strokeOpacity="0.4"
                      />
                      <text x="600" y="200" textAnchor="middle" fill="#d4a243" fontSize="13" fontWeight="700" fontFamily="sans-serif" opacity="0.7" className="pointer-events-none">GA</text>

                      {/* Florida */}
                      <motion.path
                        d="M 560,280 L 580,300 L 610,310 L 630,290 L 660,280 L 690,270 L 720,260 L 750,280 L 740,310 L 720,340 L 700,360 L 680,370 L 660,350 L 650,320 L 630,300 L 610,310 L 580,300 L 560,280 Z"
                        fill="#d4a243"
                        fillOpacity={0.2}
                        stroke="#d4a243"
                        strokeWidth="1.5"
                        strokeOpacity="0.4"
                      />
                      <text x="680" y="300" textAnchor="middle" fill="#d4a243" fontSize="13" fontWeight="700" fontFamily="sans-serif" opacity="0.7" className="pointer-events-none">FL</text>

                      {/* Carolinas */}
                      <motion.path
                        d="M 640,100 L 640,150 L 660,100 L 740,80 L 770,90 L 770,120 L 740,130 L 700,140 L 660,150 L 640,150 Z"
                        fill="#d4a243"
                        fillOpacity={0.12}
                        stroke="#d4a243"
                        strokeWidth="1"
                        strokeOpacity="0.25"
                      />
                      <text x="710" y="115" textAnchor="middle" fill="#d4a243" fontSize="9" fontWeight="700" fontFamily="sans-serif" opacity="0.4" className="pointer-events-none">NC/SC</text>

                      {/* HQ Marker */}
                      <circle cx="510" cy="230" r="10" fill="#d4a243" stroke="#fff" strokeWidth="2.5">
                        <animate attributeName="r" from="8" to="18" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="510" cy="230" r="8" fill="#d4a243" stroke="#fff" strokeWidth="2" />
                      <circle cx="510" cy="230" r="3" fill="#060f1d" />
                      <text x="510" y="218" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="sans-serif" className="pointer-events-none">Mobile (HQ)</text>

                      {/* Route lines from HQ */}
                      {[
                        { x: 220, y: 180 }, // TX
                        { x: 350, y: 170 }, // LA
                        { x: 420, y: 170 }, // MS
                        { x: 600, y: 200 }, // GA
                        { x: 680, y: 300 }, // FL
                        { x: 520, y: 85 },  // TN
                      ].map((dest, i) => (
                        <line
                          key={`route-${i}`}
                          x1={510}
                          y1={230}
                          x2={dest.x}
                          y2={dest.y}
                          stroke="#d4a243"
                          strokeWidth="0.8"
                          strokeDasharray="6 4"
                          strokeOpacity="0.3"
                        >
                          <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite" />
                        </line>
                      ))}
                    </svg>

                    {/* Legend */}
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4 pt-4 border-t border-navy-800/50">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-gold-400" />
                        <span className="text-xs text-navy-400 font-medium">HQ — Mobile, AL</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-sm bg-gold-400/30 border border-gold-400/40" />
                        <span className="text-xs text-navy-400 font-medium">In-House Fleet Coverage</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-6 border-t border-dashed border-gold-400/50" />
                        <span className="text-xs text-navy-400 font-medium">Fleet Routes</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Info Panel */}
                <div className="lg:col-span-2">
                  <div className="glass-card-gold rounded-2xl p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gold-400/20 flex items-center justify-center">
                        <Truck className="w-6 h-6 text-gold-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold text-white">In-House Fleet</h3>
                        <p className="text-gold-400 text-sm font-semibold">South &amp; Southeast</p>
                      </div>
                    </div>

                    <p className="text-navy-300 text-sm leading-relaxed mb-6">
                      Our company-owned trucks operate primarily through the South and Southeast,
                      covering Alabama, Mississippi, Louisiana, Florida, Georgia, Tennessee, the
                      Carolinas, Arkansas, and Texas. Based out of Mobile, AL with 24/7 dispatch.
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        { label: "Fleet Base", value: "Mobile, AL" },
                        { label: "Coverage", value: "10+ States" },
                        { label: "Warehouse", value: "200K sq ft Bonded" },
                        { label: "Dispatch", value: "24/7 Operations" },
                      ].map((stat) => (
                        <div key={stat.label} className="glass-card rounded-lg p-3">
                          <p className="text-[11px] text-navy-400 uppercase tracking-wider font-medium mb-1">{stat.label}</p>
                          <p className="text-sm font-semibold text-white">{stat.value}</p>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/asset-based-trucking"
                      className="group flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-gold-400/10 border border-gold-400/30 text-gold-400 font-semibold text-sm hover:bg-gold-400/20 hover:border-gold-400/50 transition-all duration-300"
                    >
                      View Fleet Details
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* === DRAYAGE MAP === */}
          {activeTab === "drayage" && (
            <motion.div
              key="drayage"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <ScrollReveal direction="left" className="lg:col-span-3">
                  <div className="glass-card rounded-2xl p-4 sm:p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Container className="w-4 h-4 text-sky-400" />
                      <span className="text-sm font-semibold text-white">
                        Drayage Operations — Gulf Coast Ports
                      </span>
                    </div>

                    {/* SVG Drayage Map */}
                    <svg viewBox="100 50 700 380" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="waterGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#0a1628" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#0d2847" stopOpacity="0.4" />
                        </linearGradient>
                      </defs>

                      <rect x="100" y="50" width="700" height="380" fill="url(#waterGrad2)" rx="8" />
                      <text x="420" y="390" textAnchor="middle" fill="#1e3a5f" fontSize="14" fontWeight="600" fontFamily="sans-serif" opacity="0.6">GULF OF MEXICO</text>

                      {/* Water waves */}
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

                      {/* Coastline states - muted */}
                      <path d="M 130,60 L 130,200 L 200,280 L 300,310 L 320,280 L 320,60 Z" fill="#0f2035" fillOpacity="0.6" stroke="#1e3a5f" strokeWidth="1" />
                      <text x="230" y="160" textAnchor="middle" fill="#4a6a8a" fontSize="13" fontWeight="700" fontFamily="sans-serif" opacity="0.5">LA</text>

                      <path d="M 320,60 L 320,280 L 400,320 L 460,310 L 480,260 L 480,60 Z" fill="#0f2035" fillOpacity="0.6" stroke="#1e3a5f" strokeWidth="1" />
                      <text x="400" y="160" textAnchor="middle" fill="#4a6a8a" fontSize="13" fontWeight="700" fontFamily="sans-serif" opacity="0.5">MS</text>

                      <path d="M 480,60 L 480,260 L 460,310 L 530,340 L 560,310 L 600,260 L 600,60 Z" fill="#0f2035" fillOpacity="0.6" stroke="#1e3a5f" strokeWidth="1" />
                      <text x="540" y="160" textAnchor="middle" fill="#4a6a8a" fontSize="13" fontWeight="700" fontFamily="sans-serif" opacity="0.5">AL</text>

                      <path d="M 600,60 L 600,260 L 560,310 L 620,300 L 700,270 L 770,250 L 770,60 Z" fill="#0f2035" fillOpacity="0.5" stroke="#1e3a5f" strokeWidth="1" />
                      <text x="690" y="160" textAnchor="middle" fill="#4a6a8a" fontSize="13" fontWeight="700" fontFamily="sans-serif" opacity="0.5">FL</text>

                      {/* Port of New Orleans marker */}
                      <circle cx="250" cy="270" r="12" fill="none" stroke="#38bdf8" strokeWidth="1" opacity="0.4">
                        <animate attributeName="r" from="10" to="22" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="250" cy="270" r="8" fill="#38bdf8" stroke="#fff" strokeWidth="1.5" />
                      <text x="250" y="255" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="700" fontFamily="sans-serif">New Orleans</text>

                      {/* Port of Gulfport marker */}
                      <circle cx="420" cy="300" r="12" fill="none" stroke="#38bdf8" strokeWidth="1" opacity="0.4">
                        <animate attributeName="r" from="10" to="22" dur="2s" begin="0.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.5" to="0" dur="2s" begin="0.5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="420" cy="300" r="8" fill="#38bdf8" stroke="#fff" strokeWidth="1.5" />
                      <text x="420" y="287" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="700" fontFamily="sans-serif">Gulfport</text>

                      {/* Port of Mobile marker — PRIMARY */}
                      <circle cx="520" cy="240" r="14" fill="none" stroke="#d4a243" strokeWidth="1" opacity="0.4">
                        <animate attributeName="r" from="12" to="26" dur="2s" begin="1s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.5" to="0" dur="2s" begin="1s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="520" cy="240" r="10" fill="#d4a243" stroke="#fff" strokeWidth="2.5" />
                      <circle cx="520" cy="240" r="3" fill="#060f1d" />
                      <text x="520" y="225" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="sans-serif">Port of Mobile</text>
                      <text x="520" y="212" textAnchor="middle" fill="#d4a243" fontSize="7" fontWeight="600" fontFamily="sans-serif">(PRIMARY)</text>

                      {/* Connection lines from Mobile to other ports */}
                      <line x1="520" y1="240" x2="420" y2="300" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 4" strokeOpacity="0.4">
                        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite" />
                      </line>
                      <line x1="520" y1="240" x2="250" y2="270" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 4" strokeOpacity="0.4">
                        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite" />
                      </line>
                    </svg>

                    {/* Legend */}
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4 pt-4 border-t border-navy-800/50">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-gold-400" />
                        <span className="text-xs text-navy-400 font-medium">Primary Port (Mobile)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-sky-400" />
                        <span className="text-xs text-navy-400 font-medium">Additional Ports</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-6 border-t border-dashed border-sky-400/50" />
                        <span className="text-xs text-navy-400 font-medium">Drayage Routes</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Drayage Info Panel */}
                <div className="lg:col-span-2">
                  <div className="glass-card-gold rounded-2xl p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-sky-400/15 flex items-center justify-center">
                        <Container className="w-6 h-6 text-sky-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold text-white">Drayage Ops</h3>
                        <p className="text-sky-400 text-sm font-semibold">Gulf Coast Ports</p>
                      </div>
                    </div>

                    <p className="text-navy-300 text-sm leading-relaxed mb-6">
                      Container drayage at the Port of Mobile (primary), Port of Gulfport, and Port of
                      New Orleans. Own chassis fleet, same-day pickup, bonded carrier status, and direct
                      delivery to our 200,000 sq ft bonded warehouse for transloading.
                    </p>

                    <div className="space-y-3 mb-6">
                      {drayagePorts.map((port) => (
                        <div key={port.name} className="glass-card rounded-lg p-3 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Anchor className={`w-4 h-4 ${port.primary ? "text-gold-400" : "text-sky-400"}`} />
                            <span className="text-sm font-medium text-white">{port.name}</span>
                          </div>
                          {port.primary && (
                            <span className="text-[10px] bg-gold-400/15 text-gold-400 px-2 py-0.5 rounded-full font-bold uppercase">Primary</span>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        { label: "Pickup", value: "Same-Day" },
                        { label: "Chassis", value: "Own Fleet" },
                        { label: "Warehouse", value: "Bonded" },
                        { label: "Transloading", value: "Yes" },
                      ].map((stat) => (
                        <div key={stat.label} className="glass-card rounded-lg p-3">
                          <p className="text-[11px] text-navy-400 uppercase tracking-wider font-medium mb-1">{stat.label}</p>
                          <p className="text-sm font-semibold text-white">{stat.value}</p>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/gulf-coast-container-drayage"
                      className="group flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-gold-400/10 border border-gold-400/30 text-gold-400 font-semibold text-sm hover:bg-gold-400/20 hover:border-gold-400/50 transition-all duration-300"
                    >
                      View Drayage Details
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
