import type { Metadata } from "next";
import {
  ShoppingCart,
  Clock,
  CheckCircle,
  Truck,
  Package,
  BarChart3,
  Boxes,
  Calendar,
  ArrowRight,
  Store,
  Warehouse,
  Zap,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Retail & Distribution Logistics | Fairway Logistics",
  description:
    "Retail and distribution logistics on the Gulf Coast. Store distribution, e-commerce fulfillment support, seasonal surge capacity, last-mile connections, and inventory management logistics. Fairway Logistics LLC.",
  keywords: [
    "retail logistics Gulf Coast",
    "distribution logistics Alabama",
    "store distribution freight",
    "e-commerce fulfillment logistics",
    "seasonal freight capacity",
    "last-mile logistics Gulf Coast",
    "retail supply chain Mobile AL",
    "distribution center freight",
  ],
  openGraph: {
    title: "Retail & Distribution Logistics | Fairway Logistics",
    description:
      "Asset-based logistics for retail and distribution operations. Store delivery, seasonal surge capacity, and supply chain solutions across the Gulf Coast.",
    url: "https://fairwaylogisticsllc.com/retail-distribution-logistics",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Retail & Distribution Logistics - Fairway Logistics",
      },
    ],
  },
};

/* ---------- Data ---------- */

const retailChallenges = [
  {
    icon: Calendar,
    title: "Seasonal Demand Spikes",
    description:
      "Retail freight volume does not stay constant — it surges during back-to-school, holiday shopping, and seasonal promotional periods. During these peaks, broker-dependent shippers scramble for capacity and pay premium spot rates. As an asset-based carrier, Fairway provides guaranteed capacity during your busiest periods. When every other carrier is overcommitted, our company-owned fleet is available for your loads because we plan for your seasonal demand in advance.",
  },
  {
    icon: Clock,
    title: "Tight Delivery Windows",
    description:
      "Retail distribution centers and stores operate on strict appointment schedules. A truck that arrives late misses its appointment, gets rescheduled, and creates a ripple effect across your supply chain. Fairway maintains a 98% on-time delivery rate because we control our own dispatch, drivers, and equipment — giving us the ability to prioritize and execute on the tight delivery windows retail operations demand.",
  },
  {
    icon: BarChart3,
    title: "Inventory Optimization Pressure",
    description:
      "Modern retail operates on lean inventory models where shelf stock is replenished frequently rather than warehoused in bulk. This requires more frequent, smaller shipments with higher delivery precision. Our LTL consolidation programs and scheduled route services help retailers maintain optimal inventory levels without the cost of excess safety stock.",
  },
  {
    icon: Package,
    title: "Multi-Stop Distribution Complexity",
    description:
      "Retail distribution often involves multi-stop routes delivering to multiple store locations from a single origin. Each stop has its own delivery requirements, receiving hours, and unloading procedures. Fairway plans and executes multi-stop retail routes with the precision and driver familiarity that keeps your stores stocked without delivery disruptions.",
  },
];

const solutions = [
  {
    icon: Truck,
    title: "Store Distribution",
    description:
      "Reliable freight from your distribution center to your retail locations. Full truckload for high-volume stores and LTL consolidation for smaller locations — all on consistent schedules your store managers can plan around.",
    features: [
      "DC-to-store delivery routes",
      "Scheduled recurring service",
      "Multi-stop optimization",
      "Appointment-based delivery",
    ],
  },
  {
    icon: Boxes,
    title: "E-Commerce Fulfillment Support",
    description:
      "Supporting the middle mile of e-commerce logistics — moving inventory from ports and manufacturers to fulfillment centers and distribution hubs. We bridge the gap between production and the last-mile carriers that deliver to consumers.",
    features: [
      "Port-to-warehouse transport",
      "Fulfillment center delivery",
      "Cross-dock operations",
      "High-frequency replenishment",
    ],
  },
  {
    icon: Calendar,
    title: "Seasonal Surge Capacity",
    description:
      "Guaranteed truck capacity during your peak seasons. We work with retail clients to forecast volume surges and pre-commit fleet resources so you never face capacity shortages during your most critical selling periods.",
    features: [
      "Pre-committed peak capacity",
      "Holiday season coverage",
      "Promotional event support",
      "Flexible scaling up and down",
    ],
  },
  {
    icon: Store,
    title: "Last-Mile Connection",
    description:
      "While we are not a parcel carrier, we provide the critical link between long-haul transport and last-mile delivery networks. Our freight moves your products to the distribution points where last-mile carriers take over for final consumer delivery.",
    features: [
      "Hub and spoke distribution",
      "Transfer point logistics",
      "Regional distribution support",
      "Carrier coordination",
    ],
  },
];

const fulfillmentCapabilities = [
  {
    title: "Port-to-Distribution Center",
    description:
      "Imported retail goods arriving at the Port of Mobile need fast, reliable transport to distribution centers. Our drayage and trucking services move containers and deconsolidated freight from the port to your DC efficiently, helping you get imported merchandise shelf-ready faster.",
  },
  {
    title: "Cross-Dock Operations",
    description:
      "For retailers who need to sort, consolidate, and redirect freight without long-term warehousing, our cross-dock capabilities enable rapid throughput. Inbound loads are broken down and reassembled into outbound shipments within hours, reducing handling time and warehouse costs.",
  },
  {
    title: "Regional Distribution Network",
    description:
      "The Gulf Coast sits at a strategic crossroads for retail distribution across the Southeast. Fairway provides regional distribution services that leverage our proximity to the Port of Mobile, I-10, I-65, and the rail network to move retail freight efficiently throughout Alabama, Mississippi, Louisiana, Florida, and Georgia.",
  },
  {
    title: "Inventory Flow Management",
    description:
      "We work with retailers and distributors to create freight schedules that align with your inventory management systems. Whether you operate on a push or pull inventory model, our scheduled services provide the predictable freight flows that keep your shelves stocked and your carrying costs low.",
  },
];

const faqs = [
  {
    question: "Can you guarantee truck capacity during peak retail seasons?",
    answer:
      "Yes. This is one of the primary advantages of working with an asset-based carrier for retail logistics. Because we own our fleet, we can pre-commit truck capacity for your peak seasons based on historical volume data and your sales forecasts. While brokers struggle to find available trucks during holiday surges and pay inflated spot rates, our clients have guaranteed capacity at pre-negotiated rates. We recommend planning your peak-season logistics at least 60 days in advance.",
  },
  {
    question: "Do you handle multi-stop retail delivery routes?",
    answer:
      "Yes. Multi-stop distribution is a core part of our retail logistics service. We plan optimized routes that deliver from your distribution center to multiple store locations in a single run, with each stop scheduled to align with the receiving hours and appointment requirements of each location. Our drivers become familiar with your stores, your receiving docks, and your unloading procedures — providing consistency that new or rotating drivers cannot match.",
  },
  {
    question: "How do you support e-commerce fulfillment logistics?",
    answer:
      "We support e-commerce fulfillment through middle-mile logistics — the critical transport segment between manufacturers or ports and fulfillment centers. We move palletized and containerized inventory from production facilities and the Port of Mobile to e-commerce fulfillment centers and distribution hubs across the Gulf Coast and Southeast. Our scheduled services ensure your fulfillment centers maintain the inventory levels needed to meet consumer delivery expectations.",
  },
  {
    question: "What is your on-time delivery rate for retail distribution?",
    answer:
      "Our overall on-time delivery rate is 98%, and for dedicated retail distribution routes, our performance is even higher. We achieve this through our asset-based model — controlling the trucks, drivers, and dispatch — combined with proactive route planning, GPS tracking, and real-time communication. Retail appointment windows are non-negotiable, and our operations team treats every delivery window as a commitment.",
  },
];

/* ---------- Page ---------- */

export default function RetailDistributionLogisticsPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Retail & Distribution Logistics"
        subtitle="Asset-based freight solutions for retail supply chains across the Gulf Coast. Store distribution, seasonal surge capacity, e-commerce fulfillment support, and the delivery precision that retail operations demand."
        breadcrumbs={[
          { label: "Industries" },
          { label: "Retail & Distribution" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=80"
      />

      {/* TRUST BADGES */}
      <TrustBadges variant="light" />

      {/* RETAIL CHALLENGES */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
              Retail Industry
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark mb-6">
              Retail Logistics{" "}
              <span className="text-gold-gradient">Demands Precision.</span>
            </h2>

            <div className="gold-border-left pl-6 mb-6">
              <p className="text-neutral-600 leading-relaxed text-lg">
                In retail, empty shelves mean lost sales. The modern retail
                supply chain runs on tight delivery schedules, lean inventory,
                and the ability to scale freight capacity with seasonal
                demand. Generic freight providers are not built for this —
                but Fairway is.
              </p>
            </div>

            <p className="text-neutral-600 leading-relaxed mb-6">
              The Gulf Coast retail landscape is diverse and growing. From
              national chain stores and regional retailers to e-commerce
              fulfillment operations and wholesale distributors, the retail
              sector in Alabama, Mississippi, and the broader Southeast
              requires logistics partners who can deliver with the consistency,
              speed, and flexibility that consumer-facing businesses demand.
              A single missed delivery can leave shelves empty during a
              promotion, delay an online order, or break customer trust that
              took years to build.
            </p>

            <p className="text-neutral-600 leading-relaxed">
              Fairway Logistics provides retail and distribution freight
              services as an asset-based carrier with a company-owned fleet
              stationed in Mobile, Alabama. Our model eliminates the capacity
              uncertainty that plagues broker-dependent retailers during peak
              seasons. When holiday volume surges, back-to-school demand
              spikes, or promotional events require additional freight
              capacity, our trucks are available because we committed them
              to your schedule — not because a broker found a truck at the
              last minute on the spot market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {retailChallenges.map((challenge, i) => (
              <div
                key={challenge.title}
                className={`bg-neutral-50 rounded-xl border border-neutral-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <challenge.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-heading font-bold text-dark mb-2">
                  {challenge.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Our Solutions
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Retail Freight Solutions
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              Purpose-built logistics for the retail and distribution sector,
              from store replenishment to e-commerce fulfillment support.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, i) => (
              <div
                key={solution.title}
                className={`bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-dark">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="text-sm text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULFILLMENT CAPABILITIES */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Fulfillment & Distribution Capabilities
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fulfillmentCapabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`bg-neutral-50 rounded-xl border border-neutral-200 p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Warehouse className="w-6 h-6 text-gold" />
                  <h3 className="text-lg font-heading font-bold text-dark">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Common Questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Retail Logistics FAQ
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-neutral-200 p-6"
              >
                <h3 className="text-lg font-heading font-bold text-dark mb-3">
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
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Request a Retail Distribution Quote
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Tell us about your retail freight requirements and we will build
              a distribution solution that keeps your shelves stocked and your
              customers happy.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Keep Your Shelves Stocked"
        description="Partner with an asset-based carrier that understands retail logistics. Guaranteed seasonal capacity, precise delivery schedules, and the reliability your stores depend on."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
