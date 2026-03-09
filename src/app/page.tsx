import Link from "next/link";
import type { Metadata } from "next";
import {
  Anchor,
  Container,
  Truck,
  Warehouse,
  Handshake,
  Ship,
  MapPin,
  ArrowRight,
  ChevronDown,
  Shield,
  Clock,
  Phone,
  CheckCircle,
  Globe,
  Award,
  Users,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import MetricsSection from "@/components/MetricsSection";
import IndustryGrid from "@/components/IndustryGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustBadges from "@/components/TrustBadges";
import QuoteForm from "@/components/QuoteForm";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title:
    "Fairway Logistics LLC | Asset-Based Trucking & Freight Services | Gulf Coast",
  description:
    "Gulf Coast's premier asset-based logistics company. Port of Mobile drayage, container shipping, trucking, warehousing & freight brokerage. FMCSA registered, fully insured. Call 251-725-1929.",
  keywords: [
    "Gulf Coast logistics",
    "Port of Mobile drayage",
    "asset-based trucking Mobile AL",
    "freight services Gulf Coast",
    "container drayage Alabama",
    "warehousing Mobile Alabama",
    "freight brokerage Gulf Coast",
    "import export logistics Mobile",
    "trucking company Mobile AL",
    "Fairway Logistics",
    "drayage services Alabama",
    "freight company Gulf Coast",
    "logistics company Mobile AL",
    "container shipping Alabama",
    "flatbed trucking Gulf Coast",
  ],
  openGraph: {
    title:
      "Fairway Logistics LLC | Asset-Based Trucking & Freight Services | Gulf Coast",
    description:
      "Gulf Coast's premier asset-based logistics company. Port of Mobile drayage, trucking, warehousing & freight brokerage. Real assets. Real reliability.",
    url: "https://fairwaylogisticsllc.com",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Fairway Logistics LLC - Gulf Coast Freight & Trucking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fairway Logistics LLC | Asset-Based Gulf Coast Logistics",
    description:
      "Port of Mobile drayage, asset-based trucking, warehousing & freight brokerage. Real assets. Real reliability.",
  },
  alternates: {
    canonical: "https://fairwaylogisticsllc.com",
  },
};

/* ---------- Service data ---------- */
const services = [
  {
    icon: <Anchor className="w-6 h-6" />,
    title: "Port of Mobile Drayage",
    description:
      "Direct port-to-destination container drayage from the Port of Mobile. Fast chassis turns, priority gate access, and asset-backed reliability.",
    href: "/port-of-mobile-drayage",
    features: [
      "Same-day container pickup",
      "Chassis management",
      "Bonded carrier services",
      "Real-time container tracking",
    ],
  },
  {
    icon: <Container className="w-6 h-6" />,
    title: "Gulf Coast Container Drayage",
    description:
      "Regional container drayage across Gulf Coast ports including Gulfport, New Orleans, and Pensacola with intermodal connections.",
    href: "/gulf-coast-container-drayage",
    features: [
      "Multi-port coverage",
      "Intermodal connections",
      "Last-mile delivery",
      "Transload services",
    ],
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Asset-Based Trucking",
    description:
      "Company-owned fleet providing FTL, LTL, flatbed, and specialized hauling across the Southeast and nationwide.",
    href: "/asset-based-trucking",
    features: [
      "Company-owned fleet",
      "FTL & LTL options",
      "Flatbed & step-deck",
      "Oversized load permits",
    ],
  },
  {
    icon: <Warehouse className="w-6 h-6" />,
    title: "Warehousing & Distribution",
    description:
      "Strategically located warehouse facilities in Mobile, AL with cross-docking, inventory management, and distribution services.",
    href: "/warehousing-mobile-al",
    features: [
      "Cross-docking",
      "Inventory management",
      "Pick & pack fulfillment",
      "Climate-controlled storage",
    ],
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Freight Brokerage",
    description:
      "Access to a vetted carrier network for overflow capacity, specialized lanes, and competitive spot market rates.",
    href: "/freight-brokerage",
    features: [
      "Vetted carrier network",
      "Competitive rate sourcing",
      "Capacity on demand",
      "Full shipment visibility",
    ],
  },
  {
    icon: <Ship className="w-6 h-6" />,
    title: "Import & Export Logistics",
    description:
      "End-to-end international freight coordination including customs brokerage, documentation, and port-to-door delivery.",
    href: "/import-export-logistics",
    features: [
      "Customs coordination",
      "Documentation support",
      "Port-to-door service",
      "Trade compliance",
    ],
  },
];

/* ---------- Coverage areas ---------- */
const coverageAreas = [
  {
    city: "Mobile",
    state: "AL",
    href: "/logistics-services-mobile-al",
    description: "Headquarters & Port of Mobile operations",
  },
  {
    city: "Baldwin County",
    state: "AL",
    href: "/logistics-services-baldwin-county-al",
    description: "Gulf Shores, Fairhope, Daphne coverage",
  },
  {
    city: "Pensacola",
    state: "FL",
    href: "/logistics-services-pensacola-fl",
    description: "Northwest Florida logistics hub",
  },
  {
    city: "Gulfport",
    state: "MS",
    href: "/logistics-services-gulfport-ms",
    description: "Port of Gulfport drayage & freight",
  },
  {
    city: "Biloxi",
    state: "MS",
    href: "/logistics-services-biloxi-ms",
    description: "Mississippi Gulf Coast services",
  },
  {
    city: "New Orleans",
    state: "LA",
    href: "/logistics-services-new-orleans-la",
    description: "Port of New Orleans & regional freight",
  },
];

/* ---------- Why Choose Us data ---------- */
const advantages = [
  {
    icon: <Truck className="w-7 h-7" />,
    title: "Asset-Based Fleet",
    description:
      "We own our trucks and equipment. No middlemen, no excuses — just direct control over every shipment.",
  },
  {
    icon: <Anchor className="w-7 h-7" />,
    title: "Gulf Coast Experts",
    description:
      "Deep knowledge of Gulf Coast ports, terminals, and regional freight lanes built over 15+ years.",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Technology-Driven",
    description:
      "Real-time GPS tracking, automated status updates, and instant digital quoting for every load.",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Safety First",
    description:
      "FMCSA compliant, fully insured, with rigorous driver safety programs and maintained equipment.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============================================================= */}
      {/* SECTION 1 — HERO                                               */}
      {/* ============================================================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80)",
          }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 hero-overlay" />
        {/* Extra vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-700/80 via-dark-700/40 to-transparent" />

        {/* Decorative blur circles */}
        <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gold-400/3 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
                <span className="hidden sm:block w-8 h-[2px] bg-gold-400" />
                <span className="bg-gold-400/10 border border-gold-400/30 text-gold-400 font-accent uppercase tracking-[0.25em] text-xs sm:text-sm px-4 py-2 rounded-full">
                  Asset-Based Gulf Coast Logistics
                </span>
              </div>

              {/* H1 */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.05] mb-8 animate-fade-in-up stagger-1">
                Asset-Backed Logistics.
                <br />
                <span className="text-gold-gradient">
                  Delivered with Precision.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-neutral-300 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-in-up stagger-2">
                Gulf Coast&apos;s premier logistics infrastructure &mdash; from
                Port of Mobile drayage to nationwide freight solutions. Company-owned
                fleet. Guaranteed capacity. Unmatched reliability.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fade-in-up stagger-3">
                <Link
                  href="/request-quote"
                  className="group bg-gold-gradient text-dark-700 font-bold px-10 py-4 rounded-lg hover:shadow-xl hover:shadow-gold-400/25 hover:scale-105 transition-all duration-300 text-base sm:text-lg flex items-center gap-2"
                >
                  Request a Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="tel:+12517251929"
                  className="border-2 border-white/30 text-white font-semibold px-10 py-4 rounded-lg hover:border-gold-400 hover:text-gold-400 hover:bg-gold-400/5 transition-all duration-300 text-base sm:text-lg flex items-center gap-2 backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5" />
                  Call (251) 725-1929
                </Link>
              </div>
            </div>

            {/* Right floating stats card — hidden on mobile */}
            <div className="hidden lg:flex lg:col-span-5 justify-end animate-fade-in-up stagger-4">
              <div className="bg-dark-700/90 backdrop-blur-xl border border-neutral-700/50 rounded-2xl p-8 shadow-2xl w-full max-w-sm">
                <p className="text-white font-heading font-bold text-lg mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-gold-400" />
                  By the Numbers
                </p>
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-neutral-700/50 pb-4">
                    <span className="text-neutral-400 text-sm">
                      Years of Experience
                    </span>
                    <span className="text-gold-gradient text-3xl font-black font-accent">
                      15+
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-neutral-700/50 pb-4">
                    <span className="text-neutral-400 text-sm">
                      Monthly Shipments
                    </span>
                    <span className="text-gold-gradient text-3xl font-black font-accent">
                      500+
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400 text-sm">
                      On-Time Delivery
                    </span>
                    <span className="text-gold-gradient text-3xl font-black font-accent">
                      98%
                    </span>
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-neutral-700/50">
                  <div className="flex items-center gap-2 text-fwgreen-500 text-sm font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    FMCSA Registered &bull; Fully Insured
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gold-400/70" />
        </div>

        {/* Gold accent bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-gradient" />
      </section>

      {/* ============================================================= */}
      {/* SECTION 2 — TRUST BAR                                          */}
      {/* ============================================================= */}
      <TrustBadges variant="dark" />

      {/* ============================================================= */}
      {/* SECTION 3 — SERVICES OVERVIEW                                  */}
      {/* ============================================================= */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-dark-700 mb-4">
              Integrated Gulf Coast Freight Solutions
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
              From port drayage to final-mile delivery, we provide end-to-end
              logistics services powered by our own fleet and regional expertise.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          {/* 3x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <div
                key={svc.href}
                className={`animate-fade-in-up stagger-${Math.min(i + 1, 6)}`}
              >
                <ServiceCard
                  icon={svc.icon}
                  title={svc.title}
                  description={svc.description}
                  href={svc.href}
                  features={svc.features}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 4 — ABOUT PREVIEW                                      */}
      {/* ============================================================= */}
      <section className="py-20 sm:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Image column */}
            <div className="relative animate-fade-in">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1920&q=80"
                  alt="Port of Mobile container operations"
                  className="w-full h-[420px] lg:h-[520px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative border accent */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-gold-400/20 -z-10 hidden lg:block" />
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 bg-dark-700 rounded-xl p-6 shadow-2xl hidden sm:block border border-neutral-700/50">
                <p className="text-gold-gradient text-4xl font-black font-accent">
                  15+
                </p>
                <p className="text-neutral-400 text-sm font-medium mt-1">
                  Years Experience
                </p>
              </div>
            </div>

            {/* Text column */}
            <div className="animate-fade-in-up stagger-2">
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4">
                About Fairway Logistics
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-dark-700 mb-8 leading-tight">
                Gulf Coast&apos;s Asset-Based
                <br className="hidden sm:block" /> Logistics Partner
              </h2>

              <div className="gold-border-left pl-6 mb-8">
                <p className="text-neutral-600 leading-relaxed text-lg">
                  Unlike freight brokers who rely entirely on third-party
                  carriers, Fairway Logistics operates its own fleet of trucks
                  and equipment. This means better pricing, guaranteed capacity,
                  and direct control over your shipment from pickup to delivery.
                </p>
              </div>

              <p className="text-neutral-600 leading-relaxed mb-10">
                Based at 456 Dauphin Street in Mobile, Alabama, we specialize in
                Gulf Coast port operations, regional trucking, and warehousing.
                Our team has deep expertise in Port of Mobile drayage,
                cross-border logistics, and specialized freight handling for the
                industries that power the Gulf Coast economy.
              </p>

              {/* Key differentiators — 2x2 grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {[
                  { icon: <Truck className="w-5 h-5 text-gold-400" />, label: "Company-Owned Fleet" },
                  { icon: <Anchor className="w-5 h-5 text-gold-400" />, label: "Port Specialists" },
                  { icon: <Shield className="w-5 h-5 text-gold-400" />, label: "FMCSA Compliant" },
                  { icon: <Clock className="w-5 h-5 text-gold-400" />, label: "24/7 Operations" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-neutral-100 hover:border-gold-400/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-sm font-bold text-dark-700">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-gold-400 font-bold text-lg hover:gap-3 transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 5 — METRICS                                            */}
      {/* ============================================================= */}
      <MetricsSection />

      {/* ============================================================= */}
      {/* SECTION 6 — COVERAGE MAP                                       */}
      {/* ============================================================= */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Regional Coverage
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-dark-700 mb-4">
              Our Service Coverage
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
              Strategically positioned across the Gulf Coast with direct access
              to major ports, interstates, and rail terminals.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          {/* Coverage visual */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Map visual */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
                alt="Aerial view of Gulf Coast port operations"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-dark-700/70" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gold-400/15 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-gold-400/30">
                    <MapPin className="w-8 h-8 text-gold-400" />
                  </div>
                  <p className="text-white font-heading font-black text-3xl mb-2">
                    Gulf Coast Coverage
                  </p>
                  <p className="text-neutral-300 text-sm tracking-widest uppercase">
                    AL &bull; FL &bull; MS &bull; LA &bull; Nationwide
                  </p>
                </div>
              </div>
            </div>

            {/* City list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coverageAreas.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="group flex items-start gap-4 p-4 rounded-xl border border-neutral-200 hover:border-gold-400 hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <div className="w-11 h-11 rounded-xl bg-gold-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-gradient transition-all duration-300">
                    <MapPin className="w-5 h-5 text-gold-400 group-hover:text-dark-700 transition-colors" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-dark-700 group-hover:text-gold-400 transition-colors text-base">
                      {area.city}, {area.state}
                    </p>
                    <p className="text-sm text-neutral-500 mt-1 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 7 — WHY CHOOSE US                                      */}
      {/* ============================================================= */}
      <section className="py-20 sm:py-28 bg-dark-700 relative overflow-hidden">
        {/* Decorative gold blur circles */}
        <div className="absolute top-20 -left-32 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-32 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-400/3 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Why Fairway Logistics
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              The Fairway Advantage
            </h2>
            <p className="text-neutral-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
              When you partner with Fairway, you get the reliability of an
              asset-based carrier with the flexibility of a full-service logistics
              provider.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          {/* 4 advantage cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, i) => (
              <div
                key={adv.title}
                className={`group bg-dark-600 border border-neutral-700 rounded-2xl p-8 text-center hover:border-gold-400/50 hover:shadow-lg hover:shadow-gold-400/5 transition-all duration-300 animate-fade-in-up stagger-${Math.min(i + 1, 4)}`}
              >
                {/* Icon circle */}
                <div className="w-16 h-16 rounded-2xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-400/20 transition-colors duration-300">
                  <span className="text-gold-400">{adv.icon}</span>
                </div>
                <h3 className="text-white font-heading font-bold text-lg mb-3">
                  {adv.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 8 — INDUSTRIES                                         */}
      {/* ============================================================= */}
      <IndustryGrid />

      {/* ============================================================= */}
      {/* SECTION 9 — TESTIMONIALS                                       */}
      {/* ============================================================= */}
      <TestimonialsSection />

      {/* ============================================================= */}
      {/* SECTION 10 — QUOTE FORM                                        */}
      {/* ============================================================= */}
      <section className="py-20 sm:py-28 bg-dark-gradient relative overflow-hidden">
        {/* Gold line at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />

        {/* Decorative gold blur circles */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gold-400/3 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Get Your Freight Quote in Minutes
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Tell us about your shipment and our logistics team will provide a
              competitive quote within 2 business hours. No commitment required.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          {/* Form */}
          <QuoteForm />
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 11 — FINAL CTA                                         */}
      {/* ============================================================= */}
      <CTASection
        title="Ready to Streamline Your Logistics?"
        description="Partner with Gulf Coast's leading asset-based logistics provider. Get competitive rates, guaranteed capacity, and a dedicated operations team — all backed by our own fleet."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
