import Link from "next/link";
import type { Metadata } from "next";
import {
  Anchor,
  Truck,
  Warehouse,
  Ship,
  MapPin,
  ArrowRight,
  CheckCircle,
  Globe,
  Package,
  Shield,
  Clock,
  Building2,
  Route,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import MetricsSection from "@/components/MetricsSection";
import QuoteForm from "@/components/QuoteForm";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Gulf Coast Logistics Solutions | Fairway Logistics",
  description:
    "Comprehensive Gulf Coast logistics solutions from Mobile, AL. Asset-based trucking, port drayage, warehousing, and freight brokerage serving Alabama, Mississippi, Louisiana, Florida, and Texas.",
  keywords: [
    "Gulf Coast logistics",
    "Mobile AL logistics",
    "Gulf Coast freight",
    "Port of Mobile drayage",
    "Gulf Coast trucking",
    "Southeast logistics",
    "Gulf Coast shipping",
  ],
  openGraph: {
    title: "Gulf Coast Logistics Solutions | Fairway Logistics",
    description:
      "Asset-based logistics solutions across the Gulf Coast. Container drayage, trucking, warehousing, and freight brokerage from Mobile, AL.",
    url: "https://fairwaylogisticsllc.com/gulf-coast-logistics",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Gulf Coast Logistics Solutions - Fairway Logistics",
      },
    ],
  },
};

/* ---------- Service Areas ---------- */
const serviceAreas = [
  {
    city: "Mobile, AL",
    href: "/logistics-services-mobile-al",
    description:
      "Our headquarters and primary hub. Full-service logistics including port drayage, warehousing, and regional distribution.",
  },
  {
    city: "Baldwin County, AL",
    href: "/logistics-services-baldwin-county-al",
    description:
      "Serving Daphne, Fairhope, Gulf Shores, and surrounding areas with dedicated freight and last-mile delivery solutions.",
  },
  {
    city: "New Orleans, LA",
    href: "/logistics-services-new-orleans-la",
    description:
      "Cross-border logistics, port operations, and intermodal services connecting Louisiana to Gulf Coast markets.",
  },
  {
    city: "Gulfport, MS",
    href: "/logistics-services-gulfport-ms",
    description:
      "Port of Gulfport drayage, container transport, and regional freight coverage across southern Mississippi.",
  },
  {
    city: "Biloxi, MS",
    href: "/logistics-services-biloxi-ms",
    description:
      "Freight services for the Mississippi Gulf Coast including manufacturing, hospitality, and energy sectors.",
  },
  {
    city: "Pensacola, FL",
    href: "/logistics-services-pensacola-fl",
    description:
      "Northwest Florida logistics coverage with cross-dock, warehousing, and regional trucking solutions.",
  },
];

/* ---------- Services ---------- */
const services = [
  {
    icon: <Ship className="w-6 h-6" />,
    title: "Container Drayage",
    description:
      "Port-to-door container transport with priority gate access at the Port of Mobile and efficient chassis management.",
    href: "/gulf-coast-container-drayage",
    features: [
      "20' and 40' container handling",
      "Priority port gate access",
      "Same-day container pickup",
      "Chassis pool management",
    ],
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Asset-Based Trucking",
    description:
      "Company-owned fleet providing FTL and LTL services across the Gulf Coast and beyond with guaranteed capacity.",
    href: "/asset-based-trucking",
    features: [
      "Full truckload (FTL)",
      "Less than truckload (LTL)",
      "Dedicated fleet options",
      "Expedited & team drivers",
    ],
  },
  {
    icon: <Warehouse className="w-6 h-6" />,
    title: "Warehousing & Distribution",
    description:
      "Strategically located warehouse facilities in Mobile, AL offering short and long-term storage with distribution services.",
    href: "/warehousing-mobile-al",
    features: [
      "Climate-controlled storage",
      "Cross-docking services",
      "Inventory management",
      "Pick, pack & ship",
    ],
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Freight Brokerage",
    description:
      "Access to a vetted carrier network for lanes beyond our fleet coverage. Same reliability, expanded reach.",
    href: "/freight-brokerage",
    features: [
      "Vetted carrier network",
      "Nationwide coverage",
      "Competitive spot rates",
      "Full shipment visibility",
    ],
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Import/Export Logistics",
    description:
      "End-to-end international freight management including customs coordination, documentation, and last-mile delivery.",
    href: "/import-export-logistics",
    features: [
      "Customs coordination",
      "Documentation support",
      "Door-to-port service",
      "Bonded warehouse access",
    ],
  },
  {
    icon: <Anchor className="w-6 h-6" />,
    title: "Port of Mobile Drayage",
    description:
      "Specialized drayage services at the Port of Mobile with deep terminal relationships and fast container turns.",
    href: "/port-of-mobile-drayage",
    features: [
      "Preferred carrier status",
      "Fast chassis turns",
      "Terminal expertise",
      "Pre-pull & storage options",
    ],
  },
];

/* ---------- Why Gulf Coast ---------- */
const whyGulfCoast = [
  {
    icon: Anchor,
    title: "Strategic Port Access",
    description:
      "The Gulf Coast is home to some of the fastest-growing ports in the nation. The Port of Mobile alone handles over 60 million tons of cargo annually, providing direct access to global trade routes.",
  },
  {
    icon: Route,
    title: "Central U.S. Connectivity",
    description:
      "Gulf Coast ports connect to major interstate corridors — I-10, I-65, and I-59 — providing efficient inland distribution to 60% of the U.S. population within a two-day drive.",
  },
  {
    icon: Building2,
    title: "Growing Industrial Base",
    description:
      "The Gulf Coast region is experiencing rapid growth in manufacturing, energy, aerospace, and automotive sectors, driving demand for reliable logistics solutions.",
  },
  {
    icon: Clock,
    title: "Faster Transit Times",
    description:
      "Compared to congested West Coast ports, Gulf Coast ports offer shorter wait times, faster unloading, and more efficient landside operations for import freight.",
  },
];

export default function GulfCoastLogisticsPage() {
  return (
    <>
      {/* ============================================================= */}
      {/* HERO                                                           */}
      {/* ============================================================= */}
      <PageHero
        title="Gulf Coast Logistics Solutions"
        subtitle="Asset-based freight services from Mobile, Alabama — serving ports, manufacturers, and shippers across the entire Gulf Coast region."
        breadcrumbs={[{ label: "Gulf Coast Logistics" }]}
        backgroundImage="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1920&q=80"
      />

      {/* ============================================================= */}
      {/* OVERVIEW                                                       */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
                  alt="Gulf Coast logistics operations - Fairway Logistics fleet"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-gold/10" />
            </div>

            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                Regional Expertise
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark mb-6">
                Your Logistics Partner on the{" "}
                <span className="text-gold-gradient">Gulf Coast</span>
              </h2>

              <div className="gold-border-left pl-6 mb-6">
                <p className="text-neutral-600 leading-relaxed text-lg">
                  Fairway Logistics is an asset-based logistics company
                  headquartered in Mobile, Alabama. We own our trucks, know our
                  ports, and deliver freight across the Gulf Coast with the
                  reliability that comes from being a true operator — not just a
                  broker.
                </p>
              </div>

              <p className="text-neutral-600 leading-relaxed mb-6">
                From container drayage at the Port of Mobile to full truckload
                shipping across five Gulf Coast states, our team provides
                end-to-end freight solutions backed by company-owned equipment,
                real-time tracking, and 24/7 dispatch support.
              </p>

              <p className="text-neutral-600 leading-relaxed mb-8">
                Whether you&apos;re importing goods through Gulf ports, shipping
                raw materials to manufacturing facilities, or distributing
                finished products across the Southeast, Fairway Logistics has the
                fleet, the expertise, and the relationships to keep your supply
                chain moving.
              </p>

              <div className="space-y-3">
                {[
                  "Company-owned fleet across the Gulf Coast region",
                  "Port of Mobile preferred carrier with priority access",
                  "6 regional service centers from Pensacola to New Orleans",
                  "24/7 dispatch and real-time GPS tracking",
                  "FMCSA registered, fully insured, DOT compliant",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-sm font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SERVICE AREA MAP / LIST                                        */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Service Coverage
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Gulf Coast Service Areas
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              From our Mobile, AL headquarters, we serve shippers and
              receivers across the entire Gulf Coast corridor — Alabama,
              Mississippi, Louisiana, Florida panhandle, and beyond.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, i) => (
              <Link
                key={area.city}
                href={area.href}
                className={`group bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold-gradient transition-all duration-300">
                    <MapPin className="w-5 h-5 text-gold group-hover:text-dark" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-dark group-hover:text-gold transition-colors">
                    {area.city}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="flex items-center gap-1.5 text-gold font-semibold text-sm">
                  View Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* WHY GULF COAST LOCATION MATTERS                                */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Strategic Advantage
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Why Gulf Coast Logistics Matters
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              The Gulf Coast region is a critical hub for American commerce,
              and its importance continues to grow as shippers look for
              alternatives to congested coastal ports.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {whyGulfCoast.map((item, i) => (
              <div
                key={item.title}
                className={`bg-neutral-50 rounded-xl p-8 border border-neutral-100 hover:shadow-lg transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-heading font-bold text-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* ALL SERVICES                                                   */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Comprehensive Logistics Services
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              From port drayage to nationwide freight brokerage, we provide
              every logistics service Gulf Coast businesses need under one roof.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* METRICS                                                        */}
      {/* ============================================================= */}
      <MetricsSection />

      {/* ============================================================= */}
      {/* QUOTE FORM                                                     */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Request a Gulf Coast Freight Quote
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Tell us about your shipment and our Gulf Coast logistics team
              will provide a competitive, no-obligation quote within 2 hours.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* ============================================================= */}
      {/* CTA                                                            */}
      {/* ============================================================= */}
      <CTASection
        title="Ready to Simplify Your Gulf Coast Logistics?"
        description="Partner with an asset-based carrier who knows the Gulf Coast inside and out. Guaranteed capacity, competitive rates, and a team that delivers."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
