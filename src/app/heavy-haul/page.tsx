import Link from "next/link";
import type { Metadata } from "next";
import {
  Weight,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  MapPin,
  FileCheck,
  Truck,
  Ruler,
  Route,
  AlertTriangle,
  Ship,
  Warehouse,
  Container,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Heavy Haul & Over-Dimensional Transport | Fairway Logistics",
  description:
    "Specialized heavy haul and over-dimensional freight transport. Oversized equipment, machinery, and construction materials moved safely nationwide. Full permit coordination, route planning, and escort services. Fairway Logistics LLC.",
  keywords: [
    "heavy haul transport",
    "over-dimensional freight",
    "oversized load shipping",
    "heavy equipment transport",
    "overweight freight",
    "permit loads",
    "wide load transport",
    "heavy haul trucking",
    "specialized freight",
    "flatbed heavy haul",
  ],
  openGraph: {
    title: "Heavy Haul & Over-Dimensional Transport | Fairway Logistics",
    description:
      "Specialized heavy haul and over-dimensional freight transport nationwide. Full permit coordination, route surveys, and escort services.",
    url: "https://fairwaylogisticsllc.com/heavy-haul",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Heavy Haul & Over-Dimensional Transport - Fairway Logistics",
      },
    ],
  },
};

/* ---------- Data ---------- */

const capabilities = [
  {
    icon: Weight,
    title: "Overweight Loads",
    description:
      "Transport of loads exceeding standard weight limits with proper permitting, multi-axle trailers, and compliant routing for safe delivery.",
  },
  {
    icon: Ruler,
    title: "Over-Dimensional Freight",
    description:
      "Wide, tall, and long loads that exceed standard dimensions. We handle permit coordination, route surveys, and all logistics for oversized cargo.",
  },
  {
    icon: Route,
    title: "Route Planning & Surveys",
    description:
      "Comprehensive route analysis including bridge clearances, road restrictions, utility lines, and turn radius evaluations for safe transport.",
  },
  {
    icon: AlertTriangle,
    title: "Escort & Pilot Car Services",
    description:
      "Certified pilot car and escort vehicle services for loads requiring traffic management, ensuring safety and compliance on every move.",
  },
  {
    icon: FileCheck,
    title: "Permit Coordination",
    description:
      "Full state and federal permit management for oversize and overweight loads. We handle all paperwork across every state in your route.",
  },
  {
    icon: Shield,
    title: "Specialized Equipment",
    description:
      "Access to RGN (removable gooseneck), lowboy, step-deck, multi-axle, and extendable trailers to handle any heavy haul requirement.",
  },
];

const equipmentTypes = [
  "Construction equipment & heavy machinery",
  "Industrial plant components & modules",
  "Wind energy components (blades, towers, nacelles)",
  "Transformers & electrical equipment",
  "Bridge beams & structural steel",
  "Military & government equipment",
  "Oil & gas field equipment",
  "Manufacturing equipment & presses",
];

export default function HeavyHaulPage() {
  return (
    <>
      <PageHero
        title="Heavy Haul & Over-Dimensional Transport"
        subtitle="Specialized transport for oversized, overweight, and over-dimensional freight. Full permit coordination, route planning, and nationwide coverage."
        breadcrumbs={[
          { label: "Services", href: "/gulf-coast-logistics" },
          { label: "Heavy Haul & Over-Dimensional" },
        ]}
        backgroundImage="/images/truck-road.jpg"
      />

      <TrustBadges variant="light" />

      {/* SERVICE OVERVIEW */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/truck-road.jpg"
                  alt="Heavy haul over-dimensional transport"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-gold-400/10" />
            </div>

            <div>
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
                Heavy Haul Specialists
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
                Moving What Others{" "}
                <span className="text-gold-gradient">Can&apos;t</span>
              </h2>

              <div className="gold-border-left pl-6 mb-6">
                <p className="text-navy-300 leading-relaxed text-lg">
                  When your freight is too heavy, too wide, or too tall for
                  standard transport, Fairway Logistics has the equipment,
                  expertise, and permits to get it done safely.
                </p>
              </div>

              <p className="text-navy-300 leading-relaxed mb-6">
                Our heavy haul division specializes in the transport of oversized
                and overweight cargo nationwide. From construction equipment and
                industrial machinery to wind energy components and structural
                steel, we plan every detail — permits, route surveys, escorts,
                and specialized trailer selection — so your freight arrives on
                time and damage-free.
              </p>

              <p className="text-navy-300 leading-relaxed mb-8">
                Based in Mobile, Alabama, with assets across the Gulf Coast and
                brokerage capabilities nationwide, we combine asset-based
                reliability with the specialized knowledge heavy haul demands.
              </p>

              <div className="space-y-3">
                {[
                  "Nationwide heavy haul coverage",
                  "Full permit coordination — all 48 states",
                  "Specialized trailer fleet (RGN, lowboy, multi-axle)",
                  "Certified escort and pilot car services",
                  "24/7 dispatch and project management",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-16 sm:py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Heavy Haul Services
            </h2>
            <p className="text-navy-400 mt-4 max-w-2xl mx-auto">
              End-to-end heavy haul and over-dimensional transport with every
              detail managed from planning through delivery.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`bg-navy-950 rounded-xl border border-navy-800 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center mb-4">
                  <cap.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE HAUL */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
                What We Haul
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
                Equipment & Cargo Types
              </h2>
              <p className="text-navy-300 leading-relaxed mb-8">
                Our heavy haul division has experience transporting a wide range
                of oversized and overweight cargo across all industries.
              </p>

              <div className="space-y-3">
                {equipmentTypes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-navy-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/trucks.jpg"
                  alt="Heavy haul equipment and specialized trailers"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-gold-400/10" />
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section className="py-16 sm:py-24 bg-dark-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Request a Heavy Haul Quote
            </h2>
            <p className="text-navy-300 max-w-2xl mx-auto">
              Tell us about your oversized or overweight load. Our heavy haul
              team will provide a detailed quote with route planning and permit
              requirements.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-16 sm:py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Explore More
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Related Services
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Truck className="w-6 h-6" />}
              title="Asset-Based Trucking"
              description="Full truckload and flatbed services on our company-owned fleet."
              href="/asset-based-trucking"
              features={["FTL & LTL", "Flatbed & step-deck", "Nationwide"]}
            />
            <ServiceCard
              icon={<Container className="w-6 h-6" />}
              title="Gulf Coast Drayage"
              description="Container drayage across Gulf Coast ports with intermodal connections."
              href="/gulf-coast-container-drayage"
              features={["Multi-port", "Same-day pickup", "Transloading"]}
            />
            <ServiceCard
              icon={<Warehouse className="w-6 h-6" />}
              title="Warehousing & Distribution"
              description="200,000 sq ft bonded warehouse with integrated transportation."
              href="/warehousing-mobile-al"
              features={["Bonded facility", "Cross-docking", "Pick & pack"]}
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Need Heavy Haul or Over-Dimensional Transport?"
        description="Our specialized team handles the permits, route planning, escorts, and equipment — so you don't have to. Get a quote today."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
