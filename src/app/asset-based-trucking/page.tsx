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
  Gauge,
  FileCheck,
  Wrench,
  Ship,
  Warehouse,
  HandCoins,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Asset-Based Trucking Services Mobile AL | Fairway Logistics",
  description:
    "Asset-based trucking services in Mobile, AL. Company-owned fleet with guaranteed capacity, professional drivers, and full FTL, LTL, dedicated, and regional trucking. Fairway Logistics LLC.",
  keywords: [
    "asset-based trucking Mobile",
    "trucking company Mobile AL",
    "FTL trucking Alabama",
    "LTL trucking Gulf Coast",
    "dedicated trucking Mobile Alabama",
    "company-owned fleet trucking",
    "regional trucking Gulf Coast",
    "OTR trucking Alabama",
  ],
  openGraph: {
    title: "Asset-Based Trucking Services Mobile AL | Fairway Logistics",
    description:
      "Company-owned fleet trucking with guaranteed capacity, professional drivers, and full compliance. FTL, LTL, dedicated routes, and regional service.",
    url: "https://fairwaylogisticsllc.com/asset-based-trucking",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Asset-Based Trucking Services - Fairway Logistics",
      },
    ],
  },
};

/* ---------- Data ---------- */

const services = [
  {
    icon: Truck,
    title: "Full Truckload (FTL)",
    description:
      "Dedicated truck for your freight from origin to destination. No stops, no co-loading — just direct, efficient delivery on our own equipment with our own drivers.",
    features: [
      "Direct point-to-point service",
      "Dry van, flatbed, and step deck",
      "48-foot and 53-foot trailers",
      "Expedited service available",
    ],
  },
  {
    icon: Package,
    title: "Less Than Truckload (LTL)",
    description:
      "Cost-effective shipping for loads that do not require a full trailer. We consolidate freight efficiently to deliver competitive rates without sacrificing transit time.",
    features: [
      "Competitive partial-load pricing",
      "Regular consolidation schedules",
      "Gulf Coast regional LTL",
      "Residential and commercial delivery",
    ],
  },
  {
    icon: Users,
    title: "Dedicated Routes",
    description:
      "Assign a truck and driver exclusively to your lanes for consistent, predictable service. Ideal for manufacturers, distributors, and retailers with regular shipping schedules.",
    features: [
      "Same driver, same truck",
      "Customized schedules",
      "Priority capacity guarantee",
      "Volume-based pricing",
    ],
  },
  {
    icon: Gauge,
    title: "Regional & OTR",
    description:
      "From Gulf Coast regional runs to over-the-road hauls across the Southeast, our fleet covers the distances your freight requires with reliability at every mile.",
    features: [
      "Gulf Coast regional coverage",
      "Southeast OTR service",
      "Multi-stop routes",
      "Cross-border capable",
    ],
  },
];

const advantages = [
  {
    icon: Truck,
    title: "Company-Owned Fleet",
    description:
      "Unlike brokers who rely on third-party carriers, we own every truck in our fleet. This gives you guaranteed capacity, consistent equipment quality, and a direct relationship with the carrier hauling your freight.",
  },
  {
    icon: Shield,
    title: "Safety & Compliance",
    description:
      "Our fleet is maintained to DOT standards with regular inspections. All drivers undergo rigorous qualification, continuous training, and drug testing. Our safety record exceeds industry benchmarks.",
  },
  {
    icon: Clock,
    title: "Capacity Guarantee",
    description:
      "Brokers cannot guarantee capacity during peak seasons or tight markets. As an asset-based carrier, we commit to your loads and deliver — even when everyone else is scrambling for trucks.",
  },
  {
    icon: HandCoins,
    title: "No Broker Markup",
    description:
      "When you ship with Fairway, you are paying the carrier directly. No middleman margin, no hidden fees, no surprise surcharges. Transparent, competitive pricing on every load.",
  },
  {
    icon: FileCheck,
    title: "Driver Quality",
    description:
      "Our drivers are W-2 employees — not independent contractors. They are trained on your facilities, your freight requirements, and your expectations. Consistency you can count on.",
  },
  {
    icon: Wrench,
    title: "Maintained Equipment",
    description:
      "Every truck and trailer in our fleet undergoes scheduled preventive maintenance. Clean, well-maintained equipment means fewer breakdowns, fewer delays, and better representation at your dock.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Request a Quote",
    description:
      "Tell us about your freight — origin, destination, commodity, weight, and any special requirements. We respond with a competitive, all-inclusive rate within 2 hours.",
  },
  {
    step: "02",
    title: "Schedule & Dispatch",
    description:
      "Once you approve the quote, we assign a truck and driver. You receive driver contact details, truck number, and estimated pickup and delivery times.",
  },
  {
    step: "03",
    title: "Pickup & Transit",
    description:
      "Our driver arrives on time, loads your freight, and begins transit. Real-time GPS tracking keeps you informed at every stage. Our dispatch team monitors the load around the clock.",
  },
  {
    step: "04",
    title: "Delivery & Documentation",
    description:
      "Freight is delivered on schedule. Digital proof of delivery is provided immediately. Invoicing is clean, transparent, and delivered electronically for easy processing.",
  },
];

const faqs = [
  {
    question: "What does asset-based trucking mean?",
    answer:
      "Asset-based trucking means the company you hire actually owns and operates the trucks and trailers that haul your freight. This is in contrast to freight brokers, who match your load with a third-party carrier they do not control. With Fairway Logistics, our company-owned fleet gives you guaranteed capacity, consistent driver quality, direct accountability, and pricing without broker markups.",
  },
  {
    question: "What types of trailers do you operate?",
    answer:
      "Our fleet includes 53-foot and 48-foot dry vans, flatbed trailers, step deck trailers, and container chassis. We can handle a wide range of freight types including palletized goods, building materials, machinery, steel, and containerized cargo. If you have specialized trailer needs, contact us and we will work to accommodate your requirements.",
  },
  {
    question: "What is your service area for trucking?",
    answer:
      "Our primary service area covers the Gulf Coast region including Alabama, Mississippi, Louisiana, the Florida panhandle, and Georgia. For dedicated and OTR services, we cover the entire Southeast United States. We also offer cross-country lanes for customers with recurring volume on specific routes.",
  },
  {
    question: "How do you ensure on-time delivery?",
    answer:
      "Our 98% on-time delivery rate is the result of proactive dispatch, GPS monitoring, driver communication, and contingency planning. Every load is tracked in real-time, and our operations team intervenes proactively if any delay risk is identified. Our asset-based model means we control the driver, the truck, and the schedule — giving us more control over outcomes than brokers can provide.",
  },
  {
    question: "Do you offer dedicated trucking for regular lanes?",
    answer:
      "Yes. Our dedicated trucking service assigns a specific truck and driver to your regular shipping lanes. This is ideal for manufacturers, distributors, and retailers who ship frequently on the same routes. Dedicated service provides the highest level of consistency, and volume-based pricing typically reduces your per-load cost compared to spot market rates.",
  },
];

/* ---------- Page ---------- */

export default function AssetBasedTruckingPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Asset-Based Trucking Services"
        subtitle="Company-owned fleet with guaranteed capacity, professional drivers, and the reliability that only an asset-based carrier can deliver."
        breadcrumbs={[
          { label: "Services", href: "/gulf-coast-logistics" },
          { label: "Asset-Based Trucking" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80"
      />

      {/* TRUST BADGES */}
      <TrustBadges variant="light" />

      {/* SERVICE OVERVIEW */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                Asset-Based Trucking
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark mb-6">
                We Own the Trucks.{" "}
                <span className="text-gold-gradient">That Changes Everything.</span>
              </h2>

              <div className="gold-border-left pl-6 mb-6">
                <p className="text-neutral-600 leading-relaxed text-lg">
                  In a freight market flooded with brokers, Fairway Logistics
                  stands apart. We own and operate our fleet — which means when we
                  commit to your load, it gets moved. Period.
                </p>
              </div>

              <p className="text-neutral-600 leading-relaxed mb-6">
                The difference between asset-based trucking and broker-dependent
                shipping is the difference between certainty and hope. Brokers
                scramble to find available carriers; we dispatch our own trucks.
                Brokers add a margin on top of the carrier rate; we quote you
                direct. Brokers cannot control driver quality or equipment
                condition; we train our drivers and maintain our trucks to the
                highest standards.
              </p>

              <p className="text-neutral-600 leading-relaxed mb-8">
                Based in Mobile, Alabama, our fleet serves the entire Gulf Coast
                region and beyond with full truckload, less-than-truckload,
                dedicated route, and regional/OTR services. Whether you need a
                single spot shipment or a long-term dedicated solution, our
                asset-based model delivers the reliability, capacity, and pricing
                transparency that your supply chain demands.
              </p>

              <div className="space-y-3">
                {[
                  "Company-owned trucks — not a brokerage",
                  "Guaranteed capacity even in tight markets",
                  "Professional W-2 employee drivers",
                  "DOT-compliant maintained equipment",
                  "Transparent pricing with no broker markup",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-sm font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
                  alt="Fairway Logistics company-owned fleet trucks"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-gold/10" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE TYPES */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Trucking Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Trucking Solutions for Every Need
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              From single shipments to dedicated fleet solutions, our
              asset-based trucking covers the full range of freight requirements.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-dark">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
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

      {/* ASSET-BASED ADVANTAGES */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              The Difference
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Asset-Based vs. Broker-Only: Why It Matters
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, i) => (
              <div
                key={adv.title}
                className={`bg-neutral-50 rounded-xl border border-neutral-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <adv.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-heading font-bold text-dark mb-2">
                  {adv.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {adv.description}
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
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Simple Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              How It Works
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, i) => (
              <div key={item.step} className={`relative animate-fade-in-up stagger-${i + 1}`}>
                <div className="text-5xl font-heading font-bold text-gold/20 mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-heading font-bold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-gold/30">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80"
                  alt="Fairway Logistics trucks on Gulf Coast highway"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                Coverage
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark mb-6">
                Service Area
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Our primary trucking service area covers the Gulf Coast region,
                with expanding coverage across the Southeast. For dedicated lanes
                and high-volume accounts, we service routes throughout the
                continental United States.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-dark mb-2">
                    Primary Service Area
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Alabama",
                      "Mississippi",
                      "Louisiana",
                      "Florida Panhandle",
                      "Georgia",
                      "Tennessee",
                    ].map((area) => (
                      <div key={area} className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="text-sm text-neutral-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-dark mb-2">
                    Extended Coverage
                  </h3>
                  <p className="text-sm text-neutral-600">
                    OTR and dedicated routes available throughout the Southeast,
                    Mid-Atlantic, and Midwest. Contact us for specific lane
                    availability and pricing.
                  </p>
                </div>
              </div>
            </div>
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
              Asset-Based Trucking FAQ
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
              Request an Asset-Based Trucking Quote
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Skip the brokers. Get a direct quote from the carrier that owns
              the trucks and employs the drivers.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Explore More
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Related Services
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Ship className="w-6 h-6" />}
              title="Port of Mobile Drayage"
              description="Extend your trucking with container drayage at the Port of Mobile."
              href="/port-of-mobile-drayage"
              features={["APM Terminals", "Chassis included", "Fast turnaround"]}
            />
            <ServiceCard
              icon={<Warehouse className="w-6 h-6" />}
              title="Warehousing & Distribution"
              description="Combine trucking with strategic warehousing near the Port of Mobile."
              href="/warehousing-mobile-al"
              features={["Cross-docking", "Inventory management", "Port proximity"]}
            />
            <ServiceCard
              icon={<HandCoins className="w-6 h-6" />}
              title="Freight Brokerage"
              description="When you need capacity beyond our fleet, our asset-backed brokerage has you covered."
              href="/freight-brokerage"
              features={["Vetted carriers", "All modes", "Full visibility"]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ship Direct with an Asset-Based Carrier"
        description="Experience the difference of working with a trucking company that owns its fleet. Guaranteed capacity, competitive rates, and real accountability."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
