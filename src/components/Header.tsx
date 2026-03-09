"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const services = [
  {
    label: "Asset-Based Trucking",
    href: "/asset-based-trucking",
    icon: Truck,
    desc: "Full truckload with our own fleet",
  },
  {
    label: "Port of Mobile Drayage",
    href: "/port-of-mobile-drayage",
    icon: Ship,
    desc: "Container drayage at the Port of Mobile",
  },
  {
    label: "Freight Brokerage",
    href: "/freight-brokerage",
    icon: Handshake,
    desc: "Access to a nationwide carrier network",
  },
  {
    label: "Warehousing",
    href: "/warehousing-mobile-al",
    icon: Warehouse,
    desc: "Secure warehousing & distribution",
  },
  {
    label: "Import / Export Logistics",
    href: "/import-export-logistics",
    icon: Globe,
    desc: "International freight coordination",
  },
  {
    label: "Gulf Coast Container Drayage",
    href: "/gulf-coast-container-drayage",
    icon: Container,
    desc: "Regional container transport",
  },
];

const regions = [
  { label: "Mobile, AL", href: "/logistics-services-mobile-al" },
  { label: "Baldwin County, AL", href: "/logistics-services-baldwin-county-al" },
  { label: "Pensacola, FL", href: "/logistics-services-pensacola-fl" },
  { label: "Biloxi, MS", href: "/logistics-services-biloxi-ms" },
  { label: "Gulfport, MS", href: "/logistics-services-gulfport-ms" },
  { label: "New Orleans, LA", href: "/logistics-services-new-orleans-la" },
];

const industries = [
  { label: "Manufacturing", href: "/logistics-for-manufacturing", icon: Factory },
  { label: "Construction", href: "/logistics-for-construction", icon: HardHat },
  { label: "Energy & Industrial", href: "/energy-industrial-freight", icon: Zap },
  {
    label: "Government & Municipal",
    href: "/government-municipal-logistics",
    icon: Building2,
  },
  { label: "Retail & Distribution", href: "/retail-distribution-logistics", icon: ShoppingCart },
];

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

  /* Lock body when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const toggleMobileSubmenu = (key: string) =>
    setMobileSubmenu((prev) => (prev === key ? null : key));

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dark-700/95 backdrop-blur-md shadow-xl"
            : "bg-dark-700/80 backdrop-blur-sm"
        }`}
      >
        {/* Top bar — visible on md+ */}
        <div
          className={`hidden md:block border-b border-white/10 transition-all duration-300 ${
            scrolled ? "max-h-0 overflow-hidden opacity-0 border-none" : "max-h-12 opacity-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm text-neutral-300">
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              456 Dauphin Street, Mobile, AL 36602
            </span>
            <a
              href="tel:+12517251929"
              className="flex items-center gap-2 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              (251) 725-1929
            </a>
          </div>
        </div>

        {/* Main nav bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="relative flex-shrink-0">
            <div className="bg-black rounded-lg p-1">
              <Image
                src="/logo.jpg"
                alt="Fairway Logistics LLC"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-white">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-3 py-2 rounded-md hover:text-gold-400 transition-colors">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 pt-2 animate-fade-in">
                  <div className="bg-dark-700 border border-neutral-700 rounded-xl shadow-2xl w-[520px] p-4 grid grid-cols-2 gap-2">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <s.icon className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="block text-white group-hover:text-gold-400 transition-colors font-semibold text-sm">
                            {s.label}
                          </span>
                          <span className="text-neutral-400 text-xs">{s.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Regions dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("regions")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-3 py-2 rounded-md hover:text-gold-400 transition-colors">
                Regions <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "regions" && (
                <div className="absolute top-full left-0 pt-2 animate-fade-in">
                  <div className="bg-dark-700 border border-neutral-700 rounded-xl shadow-2xl w-64 p-2">
                    {regions.map((r) => (
                      <Link
                        key={r.href}
                        href={r.href}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-white/5 text-white hover:text-gold-400 transition-colors text-sm"
                      >
                        <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
                        {r.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Industries dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("industries")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 px-3 py-2 rounded-md hover:text-gold-400 transition-colors">
                Industries <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "industries" && (
                <div className="absolute top-full left-0 pt-2 animate-fade-in">
                  <div className="bg-dark-700 border border-neutral-700 rounded-xl shadow-2xl w-72 p-2">
                    {industries.map((ind) => (
                      <Link
                        key={ind.href}
                        href={ind.href}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/5 text-white hover:text-gold-400 transition-colors text-sm"
                      >
                        <ind.icon className="w-4 h-4 text-gold-400 flex-shrink-0" />
                        {ind.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="px-3 py-2 rounded-md hover:text-gold-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 rounded-md hover:text-gold-400 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right side — phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+12517251929"
              className="flex items-center gap-2 text-sm text-white hover:text-gold-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span className="font-semibold">(251) 725-1929</span>
            </a>
            <Link
              href="/request-quote"
              className="bg-gold-gradient text-dark-700 font-bold text-sm px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-gold-400/20 hover:scale-105 transition-all duration-200"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile slide-out */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-dark-700 shadow-2xl transition-transform duration-300 overflow-y-auto ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            {/* Close + logo */}
            <div className="flex items-center justify-between mb-8">
              <Image
                src="/logo.jpg"
                alt="Fairway Logistics LLC"
                width={130}
                height={40}
                className="h-9 w-auto"
              />
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Phone */}
            <a
              href="tel:+12517251929"
              className="flex items-center gap-3 text-white mb-6 pb-6 border-b border-white/10"
            >
              <div className="bg-gold-gradient p-2 rounded-lg">
                <Phone className="w-4 h-4 text-dark-700" />
              </div>
              <div>
                <p className="text-xs text-neutral-400">Call Us 24/7</p>
                <p className="font-semibold">(251) 725-1929</p>
              </div>
            </a>

            {/* Nav items */}
            <nav className="space-y-1">
              {/* Services */}
              <div>
                <button
                  onClick={() => toggleMobileSubmenu("services")}
                  className="w-full flex items-center justify-between px-3 py-3 text-white hover:text-gold-400 rounded-lg hover:bg-white/5 transition-colors"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileSubmenu === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileSubmenu === "services" && (
                  <div className="pl-4 space-y-0.5 mb-1">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 px-3 py-2.5 text-sm text-neutral-300 hover:text-gold-400 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <s.icon className="w-4 h-4 text-gold-400 flex-shrink-0" />
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Regions */}
              <div>
                <button
                  onClick={() => toggleMobileSubmenu("regions")}
                  className="w-full flex items-center justify-between px-3 py-3 text-white hover:text-gold-400 rounded-lg hover:bg-white/5 transition-colors"
                >
                  Regions
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileSubmenu === "regions" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileSubmenu === "regions" && (
                  <div className="pl-4 space-y-0.5 mb-1">
                    {regions.map((r) => (
                      <Link
                        key={r.href}
                        href={r.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 px-3 py-2.5 text-sm text-neutral-300 hover:text-gold-400 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
                        {r.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Industries */}
              <div>
                <button
                  onClick={() => toggleMobileSubmenu("industries")}
                  className="w-full flex items-center justify-between px-3 py-3 text-white hover:text-gold-400 rounded-lg hover:bg-white/5 transition-colors"
                >
                  Industries
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileSubmenu === "industries" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileSubmenu === "industries" && (
                  <div className="pl-4 space-y-0.5 mb-1">
                    {industries.map((ind) => (
                      <Link
                        key={ind.href}
                        href={ind.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 px-3 py-2.5 text-sm text-neutral-300 hover:text-gold-400 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <ind.icon className="w-4 h-4 text-gold-400 flex-shrink-0" />
                        {ind.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-white hover:text-gold-400 rounded-lg hover:bg-white/5 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-white hover:text-gold-400 rounded-lg hover:bg-white/5 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/request-quote"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-gold-gradient text-dark-700 font-bold px-6 py-3.5 rounded-lg hover:shadow-lg transition-all"
              >
                Request a Quote
              </Link>
            </div>

            {/* Address */}
            <div className="mt-8 pt-6 border-t border-white/10 text-neutral-400 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                456 Dauphin Street, Mobile, AL 36602
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
