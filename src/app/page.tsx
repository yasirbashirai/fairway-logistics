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

export default function HomePage() {
  return (
    <>
      {/* ============================================================= */}
      {/* SECTION 1 — HERO                                               */}
      {/* ============================================================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80)",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Decorative elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center py-32">
          {/* Eyebrow */}
          <p className="text-gold-400 font-accent uppercase tracking-[0.3em] text-sm mb-6 animate-fade-in-up">
            Asset-Based Gulf Coast Logistics
          </p>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight mb-6 animate-fade-in-up stagger-1">
            Asset-Backed Logistics.
            <br />
            <span className="text-gold-gradient">Delivered with Precision.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up stagger-2">
            Gulf Coast&apos;s premier logistics infrastructure &mdash; from Port
            of Mobile drayage to nationwide freight solutions. Real assets. Real
            reliability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-3">
            <Link
              href="/request-quote"
              className="bg-gold-gradient text-dark-700 font-bold px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-gold-400/25 hover:scale-105 transition-all duration-300 text-base flex items-center gap-2"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="tel:+12517251929"
              className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:border-gold-400 hover:text-gold-400 transition-all duration-300 text-base flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Speak With Operations
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
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
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700">
              Integrated Gulf Coast Freight Solutions
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              From port drayage to final-mile delivery, we provide end-to-end
              logistics services powered by our own fleet and regional expertise.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          {/* 3x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div
                key={svc.href}
                className={`animate-fade-in-up stagger-${i + 1}`}
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
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1920&q=80"
                  alt="Port of Mobile container operations"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 bg-dark-700 rounded-xl p-5 shadow-2xl hidden sm:block">
                <p className="text-gold-gradient text-3xl font-bold font-accent">
                  15+
                </p>
                <p className="text-neutral-400 text-sm">Years Experience</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
                About Fairway Logistics
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700 mb-6">
                Gulf Coast&apos;s Asset-Based Logistics Partner
              </h2>
              <div className="gold-border-left pl-6 mb-6">
                <p className="text-neutral-600 leading-relaxed">
                  Unlike freight brokers who rely entirely on third-party
                  carriers, Fairway Logistics operates its own fleet of trucks
                  and equipment. This means better pricing, guaranteed capacity,
                  and direct control over your shipment from pickup to delivery.
                </p>
              </div>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Based in Mobile, Alabama, we specialize in Gulf Coast port
                operations, regional trucking, and warehousing. Our team has deep
                expertise in Port of Mobile drayage, cross-border logistics, and
                specialized freight handling for the industries that power the
                Gulf Coast economy.
              </p>

              {/* Key differentiators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 text-gold-400" />
                  </div>
                  <span className="text-sm font-semibold text-dark-700">
                    Company-Owned Fleet
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                    <Anchor className="w-5 h-5 text-gold-400" />
                  </div>
                  <span className="text-sm font-semibold text-dark-700">
                    Port Specialists
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-gold-400" />
                  </div>
                  <span className="text-sm font-semibold text-dark-700">
                    FMCSA Compliant
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold-400" />
                  </div>
                  <span className="text-sm font-semibold text-dark-700">
                    24/7 Operations
                  </span>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-gold-400 font-bold hover:gap-3 transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
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
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Regional Coverage
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700">
              Our Service Coverage
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              Strategically positioned across the Gulf Coast with direct access
              to major ports, interstates, and rail terminals.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          {/* Coverage visual */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map visual */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
                alt="Aerial view of Gulf Coast port operations"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-dark-700/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gold-400 mx-auto mb-3" />
                  <p className="text-white font-heading font-bold text-2xl">
                    Gulf Coast Coverage
                  </p>
                  <p className="text-neutral-300 text-sm mt-1">
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
                  className="group flex items-start gap-3 p-4 rounded-xl border border-neutral-200 hover:border-gold-400 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-gradient group-hover:text-dark-700 transition-all duration-300">
                    <MapPin className="w-5 h-5 text-gold-400 group-hover:text-dark-700" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-dark-700 group-hover:text-gold-400 transition-colors">
                      {area.city}, {area.state}
                    </p>
                    <p className="text-xs text-neutral-500 mt-0.5">
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
      {/* SECTION 7 — INDUSTRIES                                         */}
      {/* ============================================================= */}
      <IndustryGrid />

      {/* ============================================================= */}
      {/* SECTION 8 — TESTIMONIALS                                       */}
      {/* ============================================================= */}
      <TestimonialsSection />

      {/* ============================================================= */}
      {/* SECTION 9 — QUOTE FORM                                         */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-dark-gradient relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Get Your Freight Quote in Minutes
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
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
      {/* SECTION 10 — FINAL CTA                                         */}
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
