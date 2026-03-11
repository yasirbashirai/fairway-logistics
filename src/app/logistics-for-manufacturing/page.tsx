import type { Metadata } from "next";
import {
  Factory,
  Clock,
  CheckCircle,
  Truck,
  Package,
  Settings,
  BarChart3,
  Shield,
  Cog,
  ArrowRight,
  Boxes,
  Wrench,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Logistics for Manufacturing | Fairway Logistics",
  description:
    "Manufacturing logistics solutions on the Gulf Coast. JIT delivery, raw material transport, finished goods distribution, and vendor-managed inventory for auto parts, aerospace, steel, and chemical manufacturers. Fairway Logistics LLC.",
  keywords: [
    "manufacturing logistics Gulf Coast",
    "JIT delivery Alabama",
    "raw material transport Mobile",
    "finished goods distribution",
    "manufacturing supply chain Gulf Coast",
    "vendor-managed inventory logistics",
    "auto parts logistics Alabama",
    "aerospace logistics Gulf Coast",
  ],
  openGraph: {
    title: "Logistics for Manufacturing | Fairway Logistics",
    description:
      "Asset-based manufacturing logistics solutions. JIT delivery, raw material transport, finished goods distribution, and production line supply across the Gulf Coast.",
    url: "https://fairwaylogisticsllc.com/logistics-for-manufacturing",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Manufacturing Logistics Solutions - Fairway Logistics",
      },
    ],
  },
};

/* ---------- Data ---------- */

const challenges = [
  {
    icon: Clock,
    title: "Just-in-Time Delivery Precision",
    description:
      "Production lines cannot wait. When a shipment is late by even a few hours, it can idle workers, halt assembly, and cascade into missed customer deadlines. Our asset-based fleet operates on the tight schedules that JIT manufacturing demands, with real-time tracking and proactive communication so you always know where your materials are.",
  },
  {
    icon: Cog,
    title: "Complex Supply Chain Coordination",
    description:
      "Manufacturing supply chains involve dozens of suppliers, multiple inbound lanes, and precise sequencing of raw materials. Fairway coordinates multi-stop pickups, consolidation, and timed deliveries to ensure your production schedule stays on track without the bottlenecks that disrupt output.",
  },
  {
    icon: Package,
    title: "Fragile & High-Value Freight",
    description:
      "From precision-machined aerospace components to sensitive electronic assemblies, manufacturing freight often requires careful handling and specialized securing. Our trained drivers understand load securement protocols, and our well-maintained equipment protects your cargo from origin to destination.",
  },
  {
    icon: BarChart3,
    title: "Demand Fluctuations & Capacity",
    description:
      "Manufacturing output fluctuates with orders, seasons, and market cycles. Brokers struggle to guarantee capacity during surges. As an asset-based carrier, Fairway provides guaranteed truck availability when you need to ramp up shipments — and the flexibility to scale down without long-term contract penalties.",
  },
  {
    icon: Shield,
    title: "Regulatory & Compliance Requirements",
    description:
      "Chemical manufacturers, auto parts suppliers, and aerospace producers face strict freight compliance standards including hazmat regulations, chain-of-custody documentation, and specialized insurance requirements. Fairway maintains full FMCSA compliance, hazmat endorsements, and the documentation protocols that regulated industries require.",
  },
];

const services = [
  {
    icon: Truck,
    title: "Raw Material Inbound Transport",
    description:
      "Reliable inbound freight for steel, aluminum, polymers, chemicals, and other raw materials. We coordinate multi-origin pickups and deliver on your production schedule with JIT precision.",
    features: [
      "Multi-stop consolidation runs",
      "Timed delivery windows",
      "Flatbed and specialized trailers",
      "Hazmat-certified transport",
    ],
  },
  {
    icon: Package,
    title: "Finished Goods Distribution",
    description:
      "Get your manufactured products to distributors, retailers, and end customers across the Gulf Coast and Southeast. Full truckload and LTL options with consistent transit times.",
    features: [
      "Full truckload direct delivery",
      "LTL consolidation programs",
      "Distribution center delivery",
      "Multi-stop route optimization",
    ],
  },
  {
    icon: Settings,
    title: "Production Line Supply",
    description:
      "Sequenced delivery of components and sub-assemblies directly to your production floor. We align our pickup and delivery schedules to your manufacturing cadence, minimizing inventory carrying costs.",
    features: [
      "Line-side delivery coordination",
      "Sequenced parts delivery",
      "Kanban replenishment support",
      "Cross-dock capabilities",
    ],
  },
  {
    icon: Boxes,
    title: "Vendor-Managed Inventory Logistics",
    description:
      "Reduce your warehousing burden with logistics that support vendor-managed inventory programs. We handle the transport leg of VMI, ensuring materials arrive when consumption triggers replenishment.",
    features: [
      "Scheduled replenishment runs",
      "Inventory buffer transport",
      "Supplier pickup coordination",
      "Real-time shipment visibility",
    ],
  },
];

const sectors = [
  {
    title: "Automotive & Auto Parts",
    description:
      "The Gulf Coast is home to major automotive assembly plants and a dense network of tier-one and tier-two parts suppliers. Fairway provides the JIT delivery precision that automotive manufacturing demands, from stamped steel components to assembled modules delivered on tight production schedules.",
  },
  {
    title: "Aerospace & Defense",
    description:
      "Mobile's Airbus Final Assembly Line and the region's growing aerospace cluster require logistics partners who understand the handling, documentation, and timing requirements of aviation-grade components. Our drivers are trained on aerospace freight protocols.",
  },
  {
    title: "Steel & Metals",
    description:
      "From steel coils and plate to aluminum extrusions, metals manufacturing requires flatbed expertise, proper load securement, and the heavy-haul capability to move dense commodities safely. Our flatbed fleet is built for this work.",
  },
  {
    title: "Chemical & Petrochemical",
    description:
      "The Gulf Coast petrochemical corridor from Mobile to New Orleans produces billions in chemicals, plastics, and specialty compounds. Fairway provides hazmat-certified transport for chemical manufacturers with full regulatory compliance.",
  },
];

const faqs = [
  {
    question: "Can you handle just-in-time delivery schedules for our manufacturing plant?",
    answer:
      "Yes. JIT delivery is one of our core capabilities. Our asset-based model gives us direct control over dispatching, driver assignments, and scheduling — which means we can commit to the tight delivery windows that JIT manufacturing requires. We use real-time GPS tracking and proactive communication to ensure your materials arrive precisely when your production line needs them, not a moment too late.",
  },
  {
    question: "What types of manufacturing freight can Fairway transport?",
    answer:
      "We transport the full range of manufacturing commodities including raw steel, aluminum, polymers, chemical feedstocks, auto parts, aerospace components, finished assemblies, and packaged goods. Our fleet includes dry vans, flatbeds, step decks, and we have hazmat endorsements for regulated materials. If your freight has specialized requirements, contact us and we will work out a solution.",
  },
  {
    question: "How do you ensure freight security for high-value manufactured goods?",
    answer:
      "As an asset-based carrier, your freight is on our trucks with our drivers at all times — no hand-offs to unknown third parties. Our trucks are GPS-tracked 24/7, and our drivers are W-2 employees who undergo background checks and continuous training. For high-value shipments, we offer sealed trailer protocols and direct-to-destination routing with no unnecessary stops.",
  },
  {
    question: "Do you serve manufacturing facilities outside of Mobile, Alabama?",
    answer:
      "Our primary service area covers the entire Gulf Coast corridor from New Orleans to Pensacola, and we regularly serve manufacturing facilities throughout Alabama, Mississippi, Louisiana, the Florida panhandle, and Georgia. For dedicated lanes and high-volume accounts, we provide service across the Southeast United States and beyond.",
  },
];

/* ---------- Page ---------- */

export default function LogisticsForManufacturingPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Manufacturing Logistics Solutions"
        subtitle="Asset-based freight solutions built for the precision, reliability, and capacity that Gulf Coast manufacturers demand. JIT delivery, raw material transport, and finished goods distribution — on our trucks, on your schedule."
        breadcrumbs={[
          { label: "Industries" },
          { label: "Manufacturing Logistics" },
        ]}
        backgroundImage="/images/warehouse.jpg"
      />

      {/* TRUST BADGES */}
      <TrustBadges variant="light" />

      {/* INDUSTRY OVERVIEW */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
                Manufacturing Industry
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
                The Gulf Coast Manufacturing Economy{" "}
                <span className="text-gold-gradient">Runs on Reliable Freight.</span>
              </h2>

              <div className="gold-border-left pl-6 mb-6">
                <p className="text-navy-300 leading-relaxed text-lg">
                  From automotive assembly plants in Alabama to petrochemical
                  facilities along the I-10 corridor, Gulf Coast manufacturing
                  depends on logistics partners who can deliver raw materials on
                  time, every time.
                </p>
              </div>

              <p className="text-navy-300 leading-relaxed mb-6">
                The Gulf Coast region has experienced significant growth in
                advanced manufacturing over the past decade. Major automotive
                OEMs, aerospace companies including Airbus, steel producers,
                and chemical manufacturers have established operations here,
                drawn by port access, workforce availability, and strategic
                location. This manufacturing boom has created demand for
                logistics providers who understand the unique requirements of
                production-driven supply chains.
              </p>

              <p className="text-navy-300 leading-relaxed mb-8">
                Fairway Logistics serves this sector as an asset-based carrier
                with deep roots in the Gulf Coast industrial economy. We do not
                simply move freight — we integrate into your production workflow
                with JIT delivery precision, vendor-managed inventory logistics,
                and the guaranteed capacity that only a company-owned fleet can
                provide. When your production schedule depends on material
                arrivals, you need a carrier you control — not a broker
                searching for an available truck.
              </p>

              <div className="space-y-3">
                {[
                  "Just-in-time delivery for production schedules",
                  "Asset-based fleet — guaranteed capacity",
                  "Hazmat-certified for chemical manufacturers",
                  "Flatbed and specialized trailer options",
                  "Real-time GPS tracking on every shipment",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/warehouse.jpg"
                  alt="Manufacturing facility receiving freight delivery"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-gold-400/10" />
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES WE SOLVE */}
      <section className="py-16 sm:py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Manufacturing Challenges
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Logistics Challenges We Solve for Manufacturers
            </h2>
            <p className="text-navy-400 mt-4 max-w-2xl mx-auto">
              Manufacturing supply chains face unique pressures that generic
              freight providers are not equipped to handle. Here is how Fairway
              addresses them.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, i) => (
              <div
                key={challenge.title}
                className={`bg-navy-950 rounded-xl border border-navy-800 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up stagger-${Math.min(i + 1, 6)}`}
              >
                <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center mb-4">
                  <challenge.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  {challenge.title}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES FOR MANUFACTURERS */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Freight Services for Manufacturers
            </h2>
            <p className="text-navy-400 mt-4 max-w-2xl mx-auto">
              Tailored logistics solutions designed for the unique demands of
              manufacturing operations — from inbound raw materials to outbound
              finished goods.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`bg-navy-900 rounded-xl border border-navy-800 p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-navy-300 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                      <span className="text-sm text-navy-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANUFACTURING SECTORS */}
      <section className="py-16 sm:py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Sectors We Serve
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Gulf Coast Manufacturing Sectors
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectors.map((sector, i) => (
              <div
                key={sector.title}
                className={`bg-navy-950 rounded-xl border border-navy-800 p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Factory className="w-6 h-6 text-gold-400" />
                  <h3 className="text-lg font-heading font-bold text-white">
                    {sector.title}
                  </h3>
                </div>
                <p className="text-sm text-navy-300 leading-relaxed">
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY PLACEHOLDER */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-navy-900 rounded-2xl border border-navy-800 p-8 sm:p-12">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Case Study
            </p>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
              How a Gulf Coast Auto Parts Manufacturer Reduced Logistics Costs by 18%
            </h2>
            <p className="text-navy-300 leading-relaxed mb-6">
              A tier-two automotive supplier in Mobile was experiencing frequent
              delivery delays and unpredictable costs through their previous
              broker-based logistics arrangement. After switching to Fairway
              Logistics&apos; dedicated asset-based service, they achieved a 98.5%
              on-time delivery rate, reduced per-load costs by 18%, and
              eliminated the capacity uncertainty that had been disrupting their
              JIT production schedule.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-gold-gradient">98.5%</p>
                <p className="text-sm text-navy-400 mt-1">On-Time Rate</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gold-gradient">18%</p>
                <p className="text-sm text-navy-400 mt-1">Cost Reduction</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gold-gradient">0</p>
                <p className="text-sm text-navy-400 mt-1">Line Stoppages</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Common Questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Manufacturing Logistics FAQ
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-navy-950 rounded-xl border border-navy-800 p-6"
              >
                <h3 className="text-lg font-heading font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-navy-300 leading-relaxed text-sm">
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
              Request a Manufacturing Logistics Quote
            </h2>
            <p className="text-navy-300 max-w-2xl mx-auto">
              Tell us about your manufacturing freight needs and our team will
              provide a competitive, all-inclusive rate within 2 business hours.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Keep Your Production Lines Moving"
        description="Partner with an asset-based carrier that understands manufacturing logistics. Guaranteed capacity, JIT precision, and the reliability your production schedule demands."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
