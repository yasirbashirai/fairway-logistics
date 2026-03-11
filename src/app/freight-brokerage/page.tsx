import Link from "next/link";
import type { Metadata } from "next";
import {
  Truck,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  MapPin,
  Package,
  Zap,
  Users,
  Handshake,
  Eye,
  FileSearch,
  Ship,
  Warehouse,
  DollarSign,
  Container,
  BarChart3,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Gulf Coast Freight Brokerage Services | Fairway Logistics",
  description:
    "Asset-backed freight brokerage on the Gulf Coast. Vetted carrier network, competitive rates, full visibility, and all modes including FTL, LTL, flatbed, and specialized freight. Fairway Logistics LLC.",
  keywords: [
    "Gulf Coast freight brokerage",
    "freight broker Mobile AL",
    "freight brokerage services",
    "asset-backed brokerage",
    "FTL freight broker",
    "LTL freight broker Gulf Coast",
    "flatbed freight broker Alabama",
    "specialized freight brokerage",
  ],
  openGraph: {
    title: "Gulf Coast Freight Brokerage Services | Fairway Logistics",
    description:
      "Asset-backed freight brokerage with vetted carriers, competitive rates, and full visibility. All modes covered across the Gulf Coast and beyond.",
    url: "https://fairwaylogisticsllc.com/freight-brokerage",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Freight Brokerage Services - Fairway Logistics",
      },
    ],
  },
};

/* ---------- Data ---------- */

const modes = [
  {
    icon: Truck,
    title: "Full Truckload (FTL)",
    description:
      "Dedicated truckload capacity through our vetted carrier network. Dry van, refrigerated, flatbed, and step deck trailers available across all lanes.",
  },
  {
    icon: Package,
    title: "Less Than Truckload (LTL)",
    description:
      "Cost-effective partial-load shipping with our network of regional and national LTL carriers. Competitive rates with reliable transit times.",
  },
  {
    icon: Container,
    title: "Flatbed & Specialized",
    description:
      "Open-deck, oversized, overweight, and specialized equipment through carriers we have vetted for safety, insurance, and performance.",
  },
  {
    icon: Shield,
    title: "Hazmat & Regulated",
    description:
      "Hazardous materials, temperature-controlled, and other regulated freight matched with properly certified and permitted carriers.",
  },
];

const benefits = [
  {
    icon: Truck,
    title: "Asset-Backed Brokerage",
    description:
      "Unlike pure brokers, Fairway owns and operates a fleet. When our trucks are available, you get asset-based service. When you need additional capacity, our brokerage arm taps into a vetted carrier network. This hybrid model is our unique differentiator — you get the reliability of an asset carrier with the flexibility of a brokerage.",
  },
  {
    icon: FileSearch,
    title: "Rigorous Carrier Vetting",
    description:
      "Every carrier in our network undergoes a thorough vetting process: authority verification, insurance confirmation, safety score review, operating history check, and reference verification. We do not cut corners on carrier selection because your freight is our reputation.",
  },
  {
    icon: Eye,
    title: "Full Shipment Visibility",
    description:
      "Real-time tracking, proactive status updates, and exception alerts keep you informed at every stage. Our operations team monitors every brokered load with the same attention we give our own fleet shipments.",
  },
  {
    icon: DollarSign,
    title: "Competitive Market Rates",
    description:
      "Our high volume across multiple lanes and long-standing carrier relationships give us rate leverage that we pass on to our clients. We negotiate aggressively on your behalf while maintaining the service quality you expect.",
  },
  {
    icon: Handshake,
    title: "Single Point of Contact",
    description:
      "Your dedicated logistics coordinator manages all brokered shipments, whether you ship once a month or fifty times a week. One call, one contact, complete accountability.",
  },
  {
    icon: BarChart3,
    title: "Technology Platform",
    description:
      "Digital quoting, electronic BOLs, automated tracking, and detailed reporting. Our technology platform streamlines the shipping process and gives you data-driven insights into your freight spend.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Submit Your Shipment",
    description:
      "Provide shipment details online or by phone: origin, destination, commodity, weight, dimensions, and timeline. Our team responds with competitive carrier options within 30 minutes.",
  },
  {
    step: "02",
    title: "Carrier Selection",
    description:
      "We match your shipment with the optimal carrier from our vetted network based on lane expertise, equipment match, rate, and performance history. You approve before we book.",
  },
  {
    step: "03",
    title: "Pickup & Monitoring",
    description:
      "The selected carrier picks up your freight on schedule. Our operations team tracks the load in real-time and provides proactive updates. Any issues are communicated immediately.",
  },
  {
    step: "04",
    title: "Delivery & Settlement",
    description:
      "Freight is delivered on time. Digital proof of delivery is captured and shared. Clean, transparent invoicing is processed — no hidden fees, no surprise charges.",
  },
];

const faqs = [
  {
    question: "What makes Fairway different from other freight brokers?",
    answer:
      "The most significant difference is that Fairway Logistics is an asset-based carrier that also offers brokerage services. Most freight brokers do not own any trucks — they are purely middlemen. Fairway owns and operates a fleet, which means we understand trucking from the carrier side. This gives us better insight into fair rates, realistic timelines, and carrier challenges. When our own fleet has capacity, your freight moves on our trucks. When you need additional capacity or specialized equipment, our brokerage network provides the coverage.",
  },
  {
    question: "How do you vet the carriers in your brokerage network?",
    answer:
      "Every carrier must pass our multi-point vetting process before hauling a single load for our clients. We verify FMCSA operating authority, confirm insurance coverage and limits, review CSA safety scores, check operating history and complaint records, and contact references from other brokers and shippers. Carriers that do not meet our standards are not approved. We also conduct ongoing monitoring of carrier safety and compliance records throughout our relationship.",
  },
  {
    question: "What freight modes do you broker?",
    answer:
      "We broker all major freight modes including full truckload (dry van, refrigerated, flatbed, step deck), less-than-truckload, specialized and oversized freight, hazmat, temperature-controlled, and intermodal. If it moves by truck or intermodal rail, we can arrange it through our carrier network.",
  },
  {
    question: "Do you offer volume pricing for regular shippers?",
    answer:
      "Yes. For customers with consistent shipping volume, we offer contract pricing that locks in competitive rates on your regular lanes. Volume commitments allow us to negotiate better carrier rates, and we pass those savings through. Our dedicated accounts team works with you to identify the optimal pricing structure based on your shipping patterns.",
  },
  {
    question: "What happens if there is a problem with a brokered shipment?",
    answer:
      "Our operations team monitors every brokered shipment in real-time. If an issue arises — delay, breakdown, service failure — we intervene immediately. We have backup carriers on standby for critical lanes, and our own fleet can step in for emergency coverage in our operating area. Full cargo insurance coverage applies to all brokered loads, and our claims process is transparent and responsive.",
  },
];

/* ---------- Page ---------- */

export default function FreightBrokeragePage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Freight Brokerage Services"
        subtitle="Asset-backed freight brokerage with a rigorously vetted carrier network, competitive rates, and the reliability of a company that owns its own trucks."
        breadcrumbs={[
          { label: "Services", href: "/gulf-coast-logistics" },
          { label: "Freight Brokerage" },
        ]}
        backgroundImage="/images/truck-road.jpg"
      />

      {/* TRUST BADGES */}
      <TrustBadges variant="light" />

      {/* SERVICE OVERVIEW */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
                Freight Brokerage
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
                Not Just a Broker.{" "}
                <span className="text-gold-gradient">A Carrier That Brokers.</span>
              </h2>

              <div className="gold-border-left pl-6 mb-6">
                <p className="text-navy-300 leading-relaxed text-lg">
                  Most freight brokers have never loaded a truck, managed a
                  driver, or maintained a piece of equipment. Fairway Logistics
                  has. That experience makes us a fundamentally better brokerage.
                </p>
              </div>

              <p className="text-navy-300 leading-relaxed mb-6">
                As an asset-based logistics company that also operates a freight
                brokerage, Fairway Logistics brings a unique perspective to carrier
                selection and load management. We understand what it takes to
                deliver on time because we do it ourselves every day with our own
                fleet. That operational knowledge informs how we vet carriers,
                negotiate rates, and manage your freight through our brokerage
                network.
              </p>

              <p className="text-navy-300 leading-relaxed mb-8">
                Our hybrid model means you always get the best option: when our
                fleet has capacity on your lane, you get the reliability of
                asset-based service. When you need additional capacity, specialized
                equipment, or coverage in lanes outside our fleet footprint, our
                brokerage arm matches your shipment with the right carrier from our
                vetted network. Either way, you deal with one company, one invoice,
                and one team that is accountable for the outcome.
              </p>

              <div className="space-y-3">
                {[
                  "Asset-backed: we own trucks, not just a license",
                  "Every carrier vetted for safety, insurance, and performance",
                  "All modes: FTL, LTL, flatbed, specialized, hazmat",
                  "Real-time tracking on every brokered load",
                  "Transparent pricing with no hidden fees",
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
                  src="/images/truckings.jpg"
                  alt="Freight brokerage operations and fleet management"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-2xl bg-gold-400/10" />
            </div>
          </div>
        </div>
      </section>

      {/* FREIGHT MODES */}
      <section className="py-16 sm:py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Coverage
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Freight Modes We Broker
            </h2>
            <p className="text-navy-400 mt-4 max-w-2xl mx-auto">
              Access to the right equipment for every type of freight, sourced
              from a carrier network we have built and vetted ourselves.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modes.map((mode, i) => (
              <div
                key={mode.title}
                className={`bg-navy-950 rounded-xl border border-navy-800 p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center">
                    <mode.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white">
                    {mode.title}
                  </h3>
                </div>
                <p className="text-sm text-navy-300 leading-relaxed">
                  {mode.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Why Fairway
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              The Asset-Backed Brokerage Advantage
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`bg-navy-900 rounded-xl border border-navy-800 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 sm:py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              How Our Freight Brokerage Works
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, i) => (
              <div key={item.step} className={`relative animate-fade-in-up stagger-${i + 1}`}>
                <div className="text-5xl font-heading font-bold text-gold-400/20 mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed">
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

      {/* SERVICE AREA */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/truck-road.jpg"
                  alt="Freight brokerage coverage across the United States"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
                Nationwide Reach
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
                Gulf Coast Roots, National Coverage
              </h2>
              <p className="text-navy-300 leading-relaxed mb-6">
                While our asset-based fleet focuses on the Gulf Coast region, our
                brokerage network provides carrier coverage across all 48
                contiguous states. Whether your freight needs to move locally or
                cross-country, we have vetted carriers ready.
              </p>
              <div className="space-y-3">
                {[
                  "Gulf Coast — our strongest lane density and carrier relationships",
                  "Southeast — extensive coverage with high-performance carriers",
                  "Nationwide — vetted carriers in all 48 contiguous states",
                  "Specialized — oversize, hazmat, and temperature-controlled lanes",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm text-navy-200">{item}</span>
                  </div>
                ))}
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
              Freight Brokerage FAQ
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
              Get a Quote
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Request a Freight Brokerage Quote
            </h2>
            <p className="text-navy-300 max-w-2xl mx-auto">
              Submit your shipment details and our team will match you with the
              optimal carrier at a competitive rate — typically within 30 minutes.
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
              description="When you want a company-owned truck, our fleet delivers guaranteed capacity with no middleman."
              href="/asset-based-trucking"
              features={["Company-owned fleet", "FTL & LTL", "Dedicated routes"]}
            />
            <ServiceCard
              icon={<Ship className="w-6 h-6" />}
              title="Gulf Coast Container Drayage"
              description="Container drayage at every major Gulf Coast port on our own equipment."
              href="/gulf-coast-container-drayage"
              features={["Multi-port coverage", "Own chassis", "Intermodal"]}
            />
            <ServiceCard
              icon={<Warehouse className="w-6 h-6" />}
              title="Warehousing & Distribution"
              description="Store and distribute with integrated warehousing near the Port of Mobile."
              href="/warehousing-mobile-al"
              features={["Port proximity", "WMS technology", "Cross-docking"]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Freight Capacity? We Have It."
        description="Asset-backed brokerage means you get the reliability of a carrier with the flexibility of a broker. One call to cover any load, any lane."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
