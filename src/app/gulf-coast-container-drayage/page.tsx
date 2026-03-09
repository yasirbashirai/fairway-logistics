import Link from "next/link";
import type { Metadata } from "next";
import {
  Anchor,
  Truck,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  MapPin,
  Package,
  Globe,
  Zap,
  Ship,
  Container,
  Route,
  Train,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Gulf Coast Container Drayage | Fairway Logistics",
  description:
    "Gulf Coast container drayage services covering Mobile, New Orleans, Gulfport, and Pensacola. Asset-based fleet with multi-port access, dedicated equipment, and regional expertise. Fairway Logistics LLC.",
  keywords: [
    "Gulf Coast container drayage",
    "container drayage services",
    "multi-port drayage Gulf Coast",
    "drayage Mobile AL",
    "drayage New Orleans",
    "drayage Gulfport MS",
    "intermodal drayage Southeast",
    "regional container transport",
  ],
  openGraph: {
    title: "Gulf Coast Container Drayage | Fairway Logistics",
    description:
      "Multi-port container drayage across the Gulf Coast. Asset-based fleet serving Mobile, New Orleans, Gulfport, and Pensacola.",
    url: "https://fairwaylogisticsllc.com/gulf-coast-container-drayage",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Gulf Coast Container Drayage - Fairway Logistics",
      },
    ],
  },
};

/* ---------- Data ---------- */

const ports = [
  {
    name: "Port of Mobile",
    location: "Mobile, AL",
    description:
      "Our home port and primary hub. With deep relationships at APM Terminals and company-owned chassis on site, we provide the fastest drayage service available.",
    features: ["APM Terminals access", "On-site chassis", "Same-day pickup"],
  },
  {
    name: "Port of New Orleans",
    location: "New Orleans, LA",
    description:
      "Full drayage coverage at the Port of New Orleans and the Napoleon Avenue Container Terminal. We handle import/export containers and coordinate intermodal rail connections.",
    features: ["Napoleon Avenue Terminal", "Intermodal rail", "Import/export cycles"],
  },
  {
    name: "Port of Gulfport",
    location: "Gulfport, MS",
    description:
      "Container drayage services at the Mississippi State Port Authority facility in Gulfport, supporting regional importers and exporters along the Mississippi coast.",
    features: ["State Port Authority", "Regional distribution", "Breakbulk capable"],
  },
  {
    name: "Port of Pensacola",
    location: "Pensacola, FL",
    description:
      "Serving the western Florida panhandle with container drayage from the Port of Pensacola to regional warehouses and distribution centers.",
    features: ["Florida panhandle coverage", "Project cargo", "Local delivery"],
  },
];

const benefits = [
  {
    icon: Globe,
    title: "Multi-Port Coverage",
    description:
      "A single logistics partner for container drayage at every major Gulf Coast port — Mobile, New Orleans, Gulfport, and Pensacola. One call, one contract, multiple ports.",
  },
  {
    icon: Truck,
    title: "Dedicated Equipment",
    description:
      "Company-owned day cabs, chassis, and container trailers positioned across the region. No waiting for third-party capacity when your container hits the dock.",
  },
  {
    icon: Route,
    title: "Regional Expertise",
    description:
      "Our drivers and dispatchers know Gulf Coast port procedures, gate systems, and local routes. This expertise means fewer delays and faster transit times.",
  },
  {
    icon: Train,
    title: "Intermodal Connections",
    description:
      "Seamless coordination with CSX and Norfolk Southern rail terminals throughout the Gulf Coast for container-on-flatcar and trailer-on-flatcar movements.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Night and weekend pickups, early-morning gate appointments, and rush drayage available. We adapt to your supply chain schedule, not the other way around.",
  },
  {
    icon: Zap,
    title: "Real-Time Visibility",
    description:
      "GPS tracking on every drayage move with automated status updates. Know exactly where your container is from port pickup through final delivery.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Book & Schedule",
    description:
      "Submit your drayage request online or by phone. Provide the port, container number, and delivery destination. We confirm scheduling and pricing within 30 minutes.",
  },
  {
    step: "02",
    title: "Port Coordination",
    description:
      "We monitor vessel schedules, container availability, and terminal appointments. When your container is ready, our pre-positioned driver is dispatched immediately.",
  },
  {
    step: "03",
    title: "Pickup & Transit",
    description:
      "Our driver picks up the container with company-owned chassis, secures the load, and begins transit. You receive real-time tracking updates throughout the move.",
  },
  {
    step: "04",
    title: "Delivery & Completion",
    description:
      "Container is delivered to your designated location. After unloading, we handle empty return to the port or repositioning. Digital POD is provided immediately.",
  },
];

const faqs = [
  {
    question: "What ports do you cover for Gulf Coast container drayage?",
    answer:
      "Fairway Logistics provides container drayage services at four major Gulf Coast ports: Port of Mobile (AL), Port of New Orleans (LA), Port of Gulfport (MS), and Port of Pensacola (FL). We have equipment and drivers positioned at each location for fast response and reliable service across the entire region.",
  },
  {
    question: "What is the advantage of using one drayage provider for multiple ports?",
    answer:
      "Using a single drayage provider across multiple Gulf Coast ports simplifies your logistics operations significantly. You get one point of contact, one billing relationship, consistent service standards, and unified tracking across all port locations. This eliminates the complexity of managing separate vendors at each port and gives you better rate leverage across your total volume.",
  },
  {
    question: "Do you offer intermodal drayage services?",
    answer:
      "Yes. We coordinate container drayage with both CSX and Norfolk Southern rail terminals across the Gulf Coast. Whether your container needs to move from a port to a rail yard, or from a rail yard to a final destination, our intermodal drayage services provide seamless door-to-door coverage.",
  },
  {
    question: "How do you handle per diem and demurrage charges?",
    answer:
      "We understand that per diem and demurrage charges can be significant. Our operations team proactively monitors free time windows, schedules pickups to avoid charges, and expedites empty returns. We have consistently saved our clients thousands of dollars per month by minimizing container dwell time through efficient scheduling and fast turnaround.",
  },
  {
    question: "Can you handle overweight or specialized containers?",
    answer:
      "Yes. We have equipment rated for overweight containers and can handle specialized cargo including hazmat, temperature-controlled, and open-top containers. Our fleet includes heavy-haul chassis and specialized trailers to accommodate non-standard container requirements across all Gulf Coast ports.",
  },
];

/* ---------- Page ---------- */

export default function GulfCoastContainerDrayagePage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Gulf Coast Container Drayage"
        subtitle="Multi-port container drayage across the Gulf Coast with asset-based equipment, dedicated drivers, and seamless intermodal connections."
        breadcrumbs={[
          { label: "Services", href: "/gulf-coast-logistics" },
          { label: "Gulf Coast Container Drayage" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
      />

      {/* TRUST BADGES */}
      <TrustBadges variant="light" />

      {/* SERVICE OVERVIEW */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
                Regional Drayage Coverage
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700 mb-6">
                One Partner for{" "}
                <span className="text-gold-gradient">Every Gulf Coast Port</span>
              </h2>

              <div className="gold-border-left pl-6 mb-6">
                <p className="text-neutral-600 leading-relaxed text-lg">
                  The Gulf Coast is home to some of the fastest-growing container
                  ports in the United States. Fairway Logistics provides reliable,
                  asset-based drayage at every major port in the region.
                </p>
              </div>

              <p className="text-neutral-600 leading-relaxed mb-6">
                Most drayage companies only operate at a single port, forcing
                shippers to juggle multiple vendors when they have containers
                arriving at different Gulf Coast terminals. Fairway Logistics
                eliminates that complexity. With company-owned trucks and chassis
                positioned at Mobile, New Orleans, Gulfport, and Pensacola, we
                serve as your single drayage partner for the entire region.
              </p>

              <p className="text-neutral-600 leading-relaxed mb-8">
                Our regional approach means consistent service quality, unified
                tracking, consolidated billing, and rate advantages that come from
                combining volume across multiple ports. Whether you are importing
                consumer goods through New Orleans, exporting lumber through Mobile,
                or receiving project cargo at Gulfport, Fairway Logistics has you
                covered with dedicated equipment and local expertise.
              </p>

              <div className="space-y-3">
                {[
                  "Four major Gulf Coast ports covered",
                  "Company-owned trucks and chassis at each port",
                  "Unified tracking and consolidated invoicing",
                  "Intermodal rail coordination across the region",
                  "Per diem and demurrage management",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-dark-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1920&q=80"
                  alt="Container port operations on the Gulf Coast"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-2xl bg-gold-400/10" />
            </div>
          </div>
        </div>
      </section>

      {/* PORT COVERAGE */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Port Network
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700">
              Gulf Coast Ports We Serve
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              Dedicated drayage operations at every major container port on the
              Gulf Coast, from Louisiana to Florida.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ports.map((port, i) => (
              <div
                key={port.name}
                className={`bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center">
                    <Anchor className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-dark-700">
                      {port.name}
                    </h3>
                    <p className="text-sm text-neutral-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {port.location}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  {port.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {port.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-gold-400/10 text-gold-400 font-medium px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Our Advantage
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700">
              Why Choose Fairway for Gulf Coast Drayage
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`bg-neutral-50 rounded-xl border border-neutral-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-heading font-bold text-dark-700 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Simple Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700">
              How Gulf Coast Drayage Works
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, i) => (
              <div key={item.step} className={`relative animate-fade-in-up stagger-${i + 1}`}>
                <div className="text-5xl font-heading font-bold text-gold-400/20 mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-heading font-bold text-dark-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-gold-400/30">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Common Questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700">
              Gulf Coast Drayage FAQ
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-neutral-50 rounded-xl border border-neutral-200 p-6"
              >
                <h3 className="text-lg font-heading font-bold text-dark-700 mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section className="py-16 sm:py-24 bg-dark-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Get a Quote
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Request a Gulf Coast Drayage Quote
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Tell us which port and where it needs to go. Our team will provide
              a competitive quote within 2 hours.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Explore More
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700">
              Related Services
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Anchor className="w-6 h-6" />}
              title="Port of Mobile Drayage"
              description="Specialized drayage at our home port with priority gate access and the fastest turnaround times."
              href="/port-of-mobile-drayage"
              features={["APM Terminals", "Same-day pickup", "Chassis included"]}
            />
            <ServiceCard
              icon={<Container className="w-6 h-6" />}
              title="Import & Export Logistics"
              description="End-to-end international freight coordination through Gulf Coast ports."
              href="/import-export-logistics"
              features={["Customs facilitation", "Documentation", "Trade lanes"]}
            />
            <ServiceCard
              icon={<Truck className="w-6 h-6" />}
              title="Asset-Based Trucking"
              description="Extend your drayage with full truckload service on our company-owned fleet."
              href="/asset-based-trucking"
              features={["Owned fleet", "Regional & OTR", "Capacity guarantee"]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Multi-Port Drayage Coverage?"
        description="Simplify your Gulf Coast logistics with one asset-based drayage partner covering every major port in the region."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
