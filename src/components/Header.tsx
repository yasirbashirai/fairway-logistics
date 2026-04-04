"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  Truck,
  Ship,
  Handshake,
  Warehouse,
  Globe,
  Container,
  MapPin,
  Factory,
  HardHat,
  Zap,
  Building2,
  ShoppingCart,
  Mail,
  Package,
  Weight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const services = [
  {
    label: "Asset-Based Trucking",
    href: "/asset-based-trucking",
    icon: Truck,
    desc: "Full truckload shipping with our own dedicated fleet",
  },
  {
    label: "Gulf Coast Container Drayage",
    href: "/gulf-coast-container-drayage",
    icon: Container,
    desc: "Multi-port container drayage across the Gulf Coast",
  },
  {
    label: "Heavy Haul & Over-Dimensional",
    href: "/heavy-haul",
    icon: Weight,
    desc: "Oversized & overweight freight specialists",
  },
  {
    label: "Freight Brokerage",
    href: "/freight-brokerage",
    icon: Handshake,
    desc: "Nationwide carrier network — coast to coast",
  },
  {
    label: "Warehousing",
    href: "/warehousing-mobile-al",
    icon: Warehouse,
    desc: "200,000 sq ft BONDED warehouse in Mobile",
  },
  {
    label: "Import / Export Logistics",
    href: "/import-export-logistics",
    icon: Globe,
    desc: "International freight coordination & customs",
  },
];

const assetRegions = [
  { label: "Mobile, AL (HQ)", href: "/logistics-services-mobile-al" },
  { label: "Baldwin County, AL", href: "/logistics-services-baldwin-county-al" },
  { label: "Pensacola, FL", href: "/logistics-services-pensacola-fl" },
  { label: "Biloxi, MS", href: "/logistics-services-biloxi-ms" },
  { label: "Gulfport, MS", href: "/logistics-services-gulfport-ms" },
  { label: "New Orleans, LA", href: "/logistics-services-new-orleans-la" },
];

const regions = assetRegions;

const industries = [
  { label: "Manufacturing", href: "/logistics-for-manufacturing", icon: Factory },
  { label: "Construction", href: "/logistics-for-construction", icon: HardHat },
  { label: "Energy & Industrial", href: "/energy-industrial-freight", icon: Zap },
  {
    label: "Government & Municipal",
    href: "/government-municipal-logistics",
    icon: Building2,
  },
  {
    label: "Retail & Distribution",
    href: "/retail-distribution-logistics",
    icon: ShoppingCart,
  },
];

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const dropdownVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: 6,
    scale: 0.97,
    transition: { duration: 0.15, ease: "easeIn" as const },
  },
};

const mobileMenuVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring" as const, damping: 30, stiffness: 300 },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.25, ease: "easeIn" as const },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const accordionVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.25, ease: "easeOut" as const },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" as const },
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* Desktop dropdown hover handlers with debounce */
  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 180);
  };

  /* Mobile accordion toggle */
  const toggleMobileSubmenu = (key: string) =>
    setMobileSubmenu((prev) => (prev === key ? null : key));

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy-950/95 backdrop-blur-xl shadow-2xl shadow-black/30"
            : "bg-transparent"
        }`}
      >
        {/* -------------------------------------------------------- */}
        {/*  Top Utility Bar                                         */}
        {/* -------------------------------------------------------- */}
        <div
          className={`hidden md:block border-b border-white/10 transition-all duration-500 ease-in-out ${
            scrolled
              ? "max-h-0 overflow-hidden opacity-0 border-transparent"
              : "max-h-12 opacity-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-xs font-body text-navy-300">
            {/* Left: Credentials */}
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5 text-gold-400" />
                FMCSA Licensed
              </span>
              <span className="text-white/20">|</span>
              <span>DOT Registered</span>
            </div>

            {/* Right: Phone + Email */}
            <div className="flex items-center gap-5">
              <a
                href="tel:+12517251929"
                className="flex items-center gap-1.5 hover:text-gold-400 transition-colors duration-200"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                (251) 725-1929
              </a>
              <span className="text-white/20">|</span>
              <a
                href="mailto:info@fairwaylogisticsllc.com"
                className="flex items-center gap-1.5 hover:text-gold-400 transition-colors duration-200"
              >
                <Mail className="w-3.5 h-3.5 text-gold-400" />
                info@fairwaylogisticsllc.com
              </a>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------- */}
        {/*  Main Navigation Bar                                      */}
        {/* -------------------------------------------------------- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative flex-shrink-0 group">
            <Image
              src="/logo.png"
              alt="Fairway Logistics LLC"
              width={160}
              height={48}
              className="h-12 w-auto object-contain rounded-lg transition-transform duration-200 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 font-heading text-sm font-semibold text-white">
            {/* Services — Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-3.5 py-2.5 rounded-lg hover:text-gold-400 transition-colors duration-200">
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="glass-card bg-navy-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/40 w-[560px] p-5 grid grid-cols-2 gap-2">
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 group"
                        >
                          <div className="flex-shrink-0 mt-0.5 w-9 h-9 rounded-lg bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 transition-colors duration-200">
                            <s.icon className="w-5 h-5 text-gold-400" />
                          </div>
                          <div>
                            <span className="block text-white font-heading font-semibold text-sm group-hover:text-gold-400 transition-colors duration-200">
                              {s.label}
                            </span>
                            <span className="text-navy-300 text-xs leading-relaxed font-body font-normal">
                              {s.desc}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Regions — Dropdown List */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("regions")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-3.5 py-2.5 rounded-lg hover:text-gold-400 transition-colors duration-200">
                Regions
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "regions" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === "regions" && (
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="glass-card bg-navy-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/40 w-72 p-3">
                      <p className="px-3 pt-1 pb-2 text-[10px] uppercase tracking-widest text-gold-400 font-semibold">Asset Coverage (In-House Fleet)</p>
                      {assetRegions.map((r) => (
                        <Link
                          key={r.href}
                          href={r.href}
                          className="flex items-center gap-2.5 px-4 py-2 rounded-xl hover:bg-white/5 text-white hover:text-gold-400 transition-all duration-200 text-sm font-body font-normal"
                        >
                          <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          {r.label}
                        </Link>
                      ))}
                      <div className="border-t border-navy-700/50 my-2" />
                      <p className="px-3 pt-1 pb-2 text-[10px] uppercase tracking-widest text-emerald-400 font-semibold">Brokerage Coverage</p>
                      <div className="px-4 py-2 text-sm text-navy-300 font-body font-normal">
                        <span className="text-emerald-400 font-semibold">Nationwide</span> — All 48 states via 2,000+ carrier network
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries — Dropdown List */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("industries")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-3.5 py-2.5 rounded-lg hover:text-gold-400 transition-colors duration-200">
                Industries
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "industries" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === "industries" && (
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="glass-card bg-navy-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/40 w-72 p-2">
                      {industries.map((ind) => (
                        <Link
                          key={ind.href}
                          href={ind.href}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white/5 text-white hover:text-gold-400 transition-all duration-200 text-sm font-body font-normal"
                        >
                          <ind.icon className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          {ind.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Simple Links */}
            <Link
              href="/about"
              className="px-3.5 py-2.5 rounded-lg hover:text-gold-400 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="px-3.5 py-2.5 rounded-lg hover:text-gold-400 transition-colors duration-200"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="px-3.5 py-2.5 rounded-lg hover:text-gold-400 transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Right Side — Phone + CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+12517251929"
              className="flex items-center gap-2 text-sm text-white hover:text-gold-400 transition-colors duration-200 font-body"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span className="font-semibold">(251) 725-1929</span>
            </a>

            {/* Get a Quote — Gold CTA */}
            <Link
              href="/request-quote"
              className="btn-primary bg-gradient-to-r from-gold-400 to-amber-500 text-navy-950 font-heading font-bold text-sm px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-gold-400/25 hover:scale-105 transition-all duration-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* ------------------------------------------------------------ */}
      {/*  Mobile Slide-In Menu                                         */}
      {/* ------------------------------------------------------------ */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden">
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-navy-950/98 backdrop-blur-2xl border-l border-white/10 shadow-2xl shadow-black/50 overflow-y-auto"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="p-6 min-h-full flex flex-col">
                {/* Close + Logo */}
                <div className="flex items-center justify-between mb-8">
                  <Image
                    src="/logo.png"
                    alt="Fairway Logistics LLC"
                    width={130}
                    height={40}
                    className="h-10 w-auto object-contain rounded-lg"
                  />
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Phone CTA Card */}
                <a
                  href="tel:+12517251929"
                  className="flex items-center gap-3 text-white mb-6 pb-6 border-b border-white/10"
                >
                  <div className="bg-gradient-to-r from-gold-400 to-amber-500 p-2.5 rounded-xl">
                    <Phone className="w-4 h-4 text-navy-950" />
                  </div>
                  <div>
                    <p className="text-xs text-navy-300 font-body">Call Us 24/7</p>
                    <p className="font-heading font-bold text-sm">(251) 725-1929</p>
                  </div>
                </a>

                {/* Navigation Items */}
                <nav className="space-y-1 flex-1">
                  {/* Services Accordion */}
                  <div>
                    <button
                      onClick={() => toggleMobileSubmenu("services")}
                      className="w-full flex items-center justify-between px-3 py-3 text-white hover:text-gold-400 rounded-xl hover:bg-white/5 transition-colors duration-200 font-heading font-semibold text-sm"
                    >
                      Services
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          mobileSubmenu === "services" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileSubmenu === "services" && (
                        <motion.div
                          className="overflow-hidden"
                          variants={accordionVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <div className="pl-3 space-y-0.5 pb-2">
                            {services.map((s) => (
                              <Link
                                key={s.href}
                                href={s.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-navy-200 hover:text-gold-400 rounded-xl hover:bg-white/5 transition-colors duration-200 font-body"
                              >
                                <s.icon className="w-4 h-4 text-gold-400 flex-shrink-0" />
                                {s.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Regions Accordion */}
                  <div>
                    <button
                      onClick={() => toggleMobileSubmenu("regions")}
                      className="w-full flex items-center justify-between px-3 py-3 text-white hover:text-gold-400 rounded-xl hover:bg-white/5 transition-colors duration-200 font-heading font-semibold text-sm"
                    >
                      Regions
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          mobileSubmenu === "regions" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileSubmenu === "regions" && (
                        <motion.div
                          className="overflow-hidden"
                          variants={accordionVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <div className="pl-3 space-y-0.5 pb-2">
                            <p className="px-3 pt-1 pb-1 text-[10px] uppercase tracking-widest text-gold-400 font-semibold">Asset Coverage</p>
                            {assetRegions.map((r) => (
                              <Link
                                key={r.href}
                                href={r.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-navy-200 hover:text-gold-400 rounded-xl hover:bg-white/5 transition-colors duration-200 font-body"
                              >
                                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
                                {r.label}
                              </Link>
                            ))}
                            <div className="border-t border-navy-700/50 my-1.5" />
                            <p className="px-3 pt-1 pb-1 text-[10px] uppercase tracking-widest text-emerald-400 font-semibold">Brokerage Coverage</p>
                            <p className="px-3 py-2 text-sm text-navy-300 font-body"><span className="text-emerald-400 font-semibold">Nationwide</span> — All 48 states</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Industries Accordion */}
                  <div>
                    <button
                      onClick={() => toggleMobileSubmenu("industries")}
                      className="w-full flex items-center justify-between px-3 py-3 text-white hover:text-gold-400 rounded-xl hover:bg-white/5 transition-colors duration-200 font-heading font-semibold text-sm"
                    >
                      Industries
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          mobileSubmenu === "industries" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileSubmenu === "industries" && (
                        <motion.div
                          className="overflow-hidden"
                          variants={accordionVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <div className="pl-3 space-y-0.5 pb-2">
                            {industries.map((ind) => (
                              <Link
                                key={ind.href}
                                href={ind.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-navy-200 hover:text-gold-400 rounded-xl hover:bg-white/5 transition-colors duration-200 font-body"
                              >
                                <ind.icon className="w-4 h-4 text-gold-400 flex-shrink-0" />
                                {ind.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Simple Links */}
                  <Link
                    href="/about"
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-3 text-white hover:text-gold-400 rounded-xl hover:bg-white/5 transition-colors duration-200 font-heading font-semibold text-sm"
                  >
                    About
                  </Link>
                  <Link
                    href="/portfolio"
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-3 text-white hover:text-gold-400 rounded-xl hover:bg-white/5 transition-colors duration-200 font-heading font-semibold text-sm"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-3 text-white hover:text-gold-400 rounded-xl hover:bg-white/5 transition-colors duration-200 font-heading font-semibold text-sm"
                  >
                    Contact
                  </Link>
                </nav>

                {/* Bottom CTA Section */}
                <div className="mt-8 space-y-3 pt-6 border-t border-white/10">
                  <Link
                    href="/request-quote"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center bg-gradient-to-r from-gold-400 to-amber-500 text-navy-950 font-heading font-bold text-sm px-6 py-3.5 rounded-xl hover:shadow-lg hover:shadow-gold-400/25 transition-all duration-200"
                  >
                    Get a Quote
                  </Link>
                </div>

                {/* Credentials Footer */}
                <div className="mt-6 pt-4 border-t border-white/10 text-navy-400 text-xs font-body space-y-2">
                  <p className="flex items-center gap-2">
                    <Package className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                    FMCSA Licensed &bull; DOT Registered
                  </p>
                  <a
                    href="mailto:info@fairwaylogisticsllc.com"
                    className="flex items-center gap-2 hover:text-gold-400 transition-colors duration-200"
                  >
                    <Mail className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                    info@fairwaylogisticsllc.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
