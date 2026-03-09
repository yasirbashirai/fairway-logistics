import Link from "next/link";
import type { Metadata } from "next";
import {
  Globe,
  Truck,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  MapPin,
  Package,
  Zap,
  FileText,
  Ship,
  Warehouse,
  Anchor,
  Container,
  Scale,
  ClipboardCheck,
  ArrowLeftRight,
  HandCoins,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Import & Export Logistics Gulf Coast | Fairway Logistics",
  description:
    "Import and export logistics services on the Gulf Coast. International freight coordination, customs facilitation, port management, and end-to-end supply chain visibility through Mobile, New Orleans, and Gulfport. Fairway Logistics LLC.",
  keywords: [
    "import export logistics Gulf Coast",
    "international freight Gulf Coast",
    "customs facilitation Mobile AL",
    "import logistics Port of Mobile",
    "export logistics Alabama",
    "international shipping Gulf Coast",
    "trade logistics Mobile Alabama",
    "freight forwarding Gulf Coast",
  ],
  openGraph: {
    title: "Import & Export Logistics Gulf Coast | Fairway Logistics",
    description:
      "End-to-end import and export logistics through Gulf Coast ports. Customs facilitation, port management, and integrated drayage and distribution.",
    url: "https://fairwaylogisticsllc.com/import-export-logistics",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Import & Export Logistics - Fairway Logistics",
      },
    ],
  },
};

/* ---------- Data ---------- */

const services = [
  {
    icon: Ship,
    title: "Ocean Freight Coordination",
    description:
      "We coordinate ocean freight movements through Gulf Coast ports, working with steamship lines and freight forwarders to ensure your containers arrive on schedule and are handled efficiently at the terminal.",
  },
  {
    icon: ClipboardCheck,
    title: "Customs Facilitation",
    description:
      "Our team works with licensed customs brokers to facilitate smooth clearance of your import shipments. We coordinate documentation, timing, and port logistics to minimize delays at the border.",
  },
  {
    icon: Anchor,
    title: "Port Management",
    description:
      "From vessel arrival to container pickup, we manage the port-side logistics — monitoring vessel schedules, tracking container availability, coordinating terminal appointments, and handling chassis management.",
  },
  {
    icon: FileText,
    title: "Documentation Support",
    description:
      "Bills of lading, commercial invoices, packing lists, certificates of origin — we help ensure your trade documentation is complete, accurate, and aligned with regulatory requirements.",
  },
  {
    icon: Container,
    title: "Container Drayage",
    description:
      "Our own asset-based drayage fleet picks up import containers and delivers export containers at Gulf Coast ports. No third-party dependency — we control the first and last mile.",
  },
  {
    icon: Warehouse,
    title: "Transloading & Distribution",
    description:
      "Import containers are transported to our warehouse for transloading into domestic trailers, sorting, storage, or direct distribution across the Gulf Coast and Southeast.",
  },
];

const tradeLanes = [
  {
    region: "Asia-Pacific",
    routes: ["China to Gulf Coast", "Vietnam to Mobile", "South Korea to Mobile", "Japan to Gulf Coast"],
    description:
      "Growing trade lanes connecting Asian manufacturing hubs to the Gulf Coast through the expanded Panama Canal route.",
  },
  {
    region: "Europe & Mediterranean",
    routes: ["Northern Europe to Mobile", "Mediterranean to Gulf Coast", "UK to Mobile", "Turkey to Gulf Coast"],
    description:
      "Direct and transshipment services connecting European markets to Gulf Coast importers and exporters.",
  },
  {
    region: "Latin America & Caribbean",
    routes: ["Mexico to Gulf Coast", "Central America to Mobile", "Brazil to Gulf Coast", "Colombia to Mobile"],
    description:
      "Proximity advantage for Gulf Coast trade with Latin American partners. Shorter transit times and competitive rates.",
  },
  {
    region: "Domestic Distribution",
    routes: ["Gulf Coast to Southeast", "Mobile to Midwest", "Port to rail intermodal", "Regional distribution"],
    description:
      "Inland distribution of import cargo from Gulf Coast ports to destinations across the Southeast and beyond.",
  },
];

const advantages = [
  {
    icon: Globe,
    title: "End-to-End Visibility",
    description:
      "Track your international shipments from origin port through Gulf Coast arrival, customs clearance, drayage, warehousing, and final delivery. One platform, complete transparency at every step of the supply chain.",
  },
  {
    icon: Anchor,
    title: "Gulf Coast Port Expertise",
    description:
      "Deep operational knowledge at the Port of Mobile, Port of New Orleans, and Port of Gulfport. We know the terminals, the procedures, the contacts, and the fastest ways to move your cargo through the system.",
  },
  {
    icon: Scale,
    title: "Compliance Support",
    description:
      "International trade comes with regulatory complexity. Our team helps ensure your shipments comply with customs requirements, trade regulations, and documentation standards — reducing delays and avoiding penalties.",
  },
  {
    icon: ArrowLeftRight,
    title: "Integrated Domestic Logistics",
    description:
      "Unlike standalone freight forwarders, Fairway owns trucks, chassis, and warehouse space. Your import cargo moves from the vessel to your customer on our integrated logistics network — no handoff gaps.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Planning & Coordination",
    description:
      "We work with you and your overseas partners to plan the shipment — selecting the optimal port, coordinating ocean booking, and preparing documentation for a smooth arrival.",
  },
  {
    step: "02",
    title: "Port Arrival & Clearance",
    description:
      "We monitor the vessel and container status at the Gulf Coast port. Once the container is discharged, we coordinate customs clearance and terminal pickup scheduling.",
  },
  {
    step: "03",
    title: "Drayage & Transport",
    description:
      "Our asset-based drayage fleet picks up the cleared container and transports it to your warehouse, our facility for transloading, or directly to the rail terminal for inland movement.",
  },
  {
    step: "04",
    title: "Distribution & Delivery",
    description:
      "Cargo is transloaded, stored, or distributed as needed. Our trucking fleet handles final-mile delivery across the Gulf Coast and Southeast, completing the import cycle.",
  },
];

const faqs = [
  {
    question: "Do you handle customs clearance directly?",
    answer:
      "Fairway Logistics facilitates customs clearance by coordinating with licensed customs brokers on your behalf. While we are not a licensed customs broker ourselves, we work closely with trusted partners who handle the formal entry and clearance process. Our role is to ensure the port-side logistics — documentation, timing, container availability, and drayage — are perfectly aligned with the customs process so there are no delays once your cargo is cleared.",
  },
  {
    question: "Which Gulf Coast ports do you handle import and export cargo through?",
    answer:
      "We handle import and export logistics through the Port of Mobile (AL), Port of New Orleans (LA), and Port of Gulfport (MS). Our primary hub is the Port of Mobile, where we have the deepest relationships and fastest turnaround times, but we provide full coverage at all three ports with our own equipment and drivers.",
  },
  {
    question: "Can you help with export logistics as well as imports?",
    answer:
      "Absolutely. Our export logistics services include pickup of loaded containers from your facility, transport to the Gulf Coast port terminal, and coordination with the steamship line for vessel loading. We handle the domestic transportation and port delivery side of the export process, and work with freight forwarders and customs brokers on documentation and booking as needed.",
  },
  {
    question: "What types of cargo do you handle for international shipments?",
    answer:
      "We handle containerized cargo of virtually all types through Gulf Coast ports, including consumer goods, raw materials, building supplies, machinery, automotive parts, agricultural products, chemicals, and project cargo. Our equipment handles standard 20-foot and 40-foot containers, high-cube containers, open-top containers, and flat racks. For hazmat or temperature-controlled cargo, please contact us to confirm capabilities on your specific lane.",
  },
  {
    question: "How do you reduce per diem and demurrage charges on imports?",
    answer:
      "Per diem and demurrage charges are a major cost concern for importers. Fairway Logistics minimizes these charges through proactive vessel monitoring, pre-scheduled drayage pickups, fast container turnaround with our own fleet and chassis, and efficient empty container returns. Our local presence at the Port of Mobile means we can pick up containers within hours of availability, consistently keeping our clients within their free time windows.",
  },
];

/* ---------- Page ---------- */

export default function ImportExportLogisticsPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Import & Export Logistics"
        subtitle="End-to-end international freight coordination through Gulf Coast ports with integrated drayage, warehousing, and domestic distribution on our own fleet."
        breadcrumbs={[
          { label: "Services", href: "/gulf-coast-logistics" },
          { label: "Import & Export Logistics" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1920&q=80"
      />

      {/* TRUST BADGES */}
      <TrustBadges variant="light" />

      {/* SERVICE OVERVIEW */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
                International Logistics
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700 mb-6">
                From the Vessel to{" "}
                <span className="text-gold-gradient">Your Customer&apos;s Door</span>
              </h2>

              <div className="gold-border-left pl-6 mb-6">
                <p className="text-neutral-600 leading-relaxed text-lg">
                  International trade through the Gulf Coast is growing rapidly.
                  Fairway Logistics provides the domestic logistics infrastructure
                  that connects global trade routes to regional markets.
                </p>
              </div>

              <p className="text-neutral-600 leading-relaxed mb-6">
                When your containers arrive at a Gulf Coast port, the complexity is
                just beginning. Customs clearance, terminal coordination, chassis
                availability, drayage, transloading, warehousing, and final
                delivery — each step requires expertise, equipment, and
                coordination. Fairway Logistics handles the domestic side of
                international trade with our own trucks, our own warehouse, and our
                own team at the port.
              </p>

              <p className="text-neutral-600 leading-relaxed mb-8">
                Unlike freight forwarders who subcontract every domestic leg, our
                asset-based model means your import containers are picked up on our
                drayage fleet, transloaded at our warehouse, and distributed on our
                trucking fleet. For exports, we pick up at your facility and
                deliver to the port terminal. This integrated approach eliminates
                the coordination gaps that cause delays and extra costs in
                traditional import/export supply chains.
              </p>

              <div className="space-y-3">
                {[
                  "Asset-based drayage at Gulf Coast ports",
                  "Customs facilitation with trusted broker partners",
                  "Warehouse transloading near Port of Mobile",
                  "Domestic distribution on company-owned trucks",
                  "Full supply chain visibility from port to door",
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
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
                  alt="Aerial view of Gulf Coast port with import export container operations"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-gold-400/10" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700">
              Import & Export Logistics Services
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              Comprehensive international trade logistics covering every
              domestic touchpoint from port arrival to final delivery.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-heading font-bold text-dark-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRADE LANES */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Trade Lanes
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700">
              Key Trade Routes Through the Gulf Coast
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              The Gulf Coast connects global trade routes to the American
              Southeast, Midwest, and beyond.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tradeLanes.map((lane, i) => (
              <div
                key={lane.region}
                className={`bg-neutral-50 rounded-xl border border-neutral-200 p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-dark-700">
                    {lane.region}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  {lane.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {lane.routes.map((route) => (
                    <span
                      key={route}
                      className="text-xs bg-gold-400/10 text-gold-400 font-medium px-3 py-1 rounded-full"
                    >
                      {route}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY ADVANTAGES */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Why Fairway
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700">
              The Integrated Logistics Advantage
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((adv, i) => (
              <div
                key={adv.title}
                className={`flex gap-5 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-14 h-14 rounded-lg bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                  <adv.icon className="w-7 h-7 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-dark-700 mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    {adv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700">
              How Import & Export Logistics Works
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
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Common Questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700">
              Import & Export Logistics FAQ
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-neutral-200 p-6"
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
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Request an Import/Export Logistics Quote
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Tell us about your international freight needs and our team will
              design a comprehensive logistics solution for your trade lane.
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
              description="Our home port drayage with priority gate access and the fastest turnaround times."
              href="/port-of-mobile-drayage"
              features={["APM Terminals", "Own chassis", "Same-day pickup"]}
            />
            <ServiceCard
              icon={<Ship className="w-6 h-6" />}
              title="Gulf Coast Container Drayage"
              description="Multi-port drayage coverage across Mobile, New Orleans, Gulfport, and Pensacola."
              href="/gulf-coast-container-drayage"
              features={["Four ports", "Dedicated equipment", "Intermodal"]}
            />
            <ServiceCard
              icon={<Warehouse className="w-6 h-6" />}
              title="Warehousing & Distribution"
              description="Container transloading and distribution from our warehouse near the Port of Mobile."
              href="/warehousing-mobile-al"
              features={["Transloading", "WMS technology", "Port proximity"]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Streamline Your International Supply Chain"
        description="From the vessel to your customer's door — integrated import and export logistics with asset-based drayage, warehousing, and distribution."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
