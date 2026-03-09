import type { Metadata } from "next";
import {
  Flame,
  Clock,
  CheckCircle,
  Truck,
  Shield,
  AlertTriangle,
  Gauge,
  HardHat,
  Pipette,
  Weight,
  FileCheck,
  Zap,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Energy & Industrial Freight | Fairway Logistics",
  description:
    "Energy and industrial freight services on the Gulf Coast. Oil and gas logistics, petrochemical transport, refinery supply chains, pipeline materials, and heavy haul for the energy sector. Fairway Logistics LLC.",
  keywords: [
    "energy logistics Gulf Coast",
    "oil and gas freight Alabama",
    "petrochemical transport Mobile",
    "refinery logistics Gulf Coast",
    "pipeline materials hauling",
    "industrial freight services",
    "heavy haul energy sector",
    "hazmat transport Gulf Coast",
  ],
  openGraph: {
    title: "Energy & Industrial Freight | Fairway Logistics",
    description:
      "Specialized freight services for the Gulf Coast energy and industrial sector. Oil and gas, petrochemical, refinery supply chain, and heavy-haul logistics.",
    url: "https://fairwaylogisticsllc.com/energy-industrial-freight",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Energy & Industrial Freight - Fairway Logistics",
      },
    ],
  },
};

/* ---------- Data ---------- */

const challenges = [
  {
    icon: AlertTriangle,
    title: "Hazmat Compliance & Regulations",
    description:
      "The energy sector moves some of the most heavily regulated freight in the country. From crude oil and refined petroleum products to chemical feedstocks and industrial gases, every shipment must comply with DOT hazmat regulations, placarding requirements, and shipping documentation standards. Fairway maintains full hazmat endorsements and our drivers undergo specialized hazmat training to ensure every load moves in full compliance.",
  },
  {
    icon: Clock,
    title: "Refinery Turnaround Deadlines",
    description:
      "Refinery turnarounds and shutdowns operate on compressed timelines where delays cost hundreds of thousands of dollars per day. Equipment, replacement parts, catalysts, and supplies must arrive precisely on schedule. Our asset-based model gives us the dispatch control to prioritize turnaround freight and guarantee the delivery windows these critical projects demand.",
  },
  {
    icon: Weight,
    title: "Heavy & Oversized Industrial Equipment",
    description:
      "Heat exchangers, pressure vessels, compressors, large-diameter pipe, and other industrial equipment frequently exceed standard weight and dimensional limits. Fairway coordinates heavy-haul logistics including permit acquisition, route surveys, escort vehicles, and specialized rigging to move oversize energy-sector freight safely and legally.",
  },
  {
    icon: Shield,
    title: "Site Security & Access Protocols",
    description:
      "Refineries, petrochemical plants, and pipeline construction sites have strict security and access requirements. Our drivers are experienced with TWIC card protocols, facility-specific safety orientations, PPE requirements, and the controlled entry procedures that energy-sector facilities require. We prepare our drivers for your site before they arrive.",
  },
  {
    icon: Gauge,
    title: "24/7 Operational Demands",
    description:
      "Energy operations do not stop for weekends or holidays. Refineries, drilling operations, and pipeline construction run around the clock, and they need logistics support that matches their operational tempo. Fairway provides 24/7 dispatch and driver availability to support the continuous operations that define the energy industry.",
  },
];

const capabilities = [
  {
    icon: Truck,
    title: "Oil & Gas Logistics",
    description:
      "Comprehensive freight services for upstream, midstream, and downstream oil and gas operations. We transport drilling supplies, production equipment, tubular goods, and refined products across the Gulf Coast energy corridor.",
    features: [
      "Drilling supply delivery",
      "Tubular goods transport",
      "Production equipment hauling",
      "Oilfield consumables",
    ],
  },
  {
    icon: Pipette,
    title: "Petrochemical Transport",
    description:
      "The Mobile-to-New-Orleans petrochemical corridor is one of the densest concentrations of chemical manufacturing in the world. Fairway provides hazmat-certified transport for chemical feedstocks, intermediates, and finished chemical products.",
    features: [
      "Hazmat-certified drivers",
      "Chemical feedstock transport",
      "Intermediate product logistics",
      "DOT-compliant documentation",
    ],
  },
  {
    icon: Zap,
    title: "Refinery Supply Chain",
    description:
      "Supporting Gulf Coast refineries with the equipment, parts, and materials they need to maintain continuous operations. From routine supply runs to urgent turnaround freight, we keep refineries running.",
    features: [
      "Turnaround and shutdown support",
      "Catalyst and chemical delivery",
      "Spare parts logistics",
      "Maintenance material supply",
    ],
  },
  {
    icon: Weight,
    title: "Heavy Haul & Oversize",
    description:
      "When standard trucking is not enough, our heavy-haul capabilities move the oversized and overweight equipment that energy projects require. Pressure vessels, heat exchangers, transformers, and large-diameter pipe — permitted and delivered.",
    features: [
      "Permit coordination",
      "Route planning and surveys",
      "Escort vehicle arrangement",
      "Specialized trailer options",
    ],
  },
];

const safetyProtocols = [
  {
    title: "Hazmat Training & Certification",
    description:
      "Every driver who transports hazmat freight for Fairway undergoes initial hazmat training, recurrent certification, and specialized commodity-specific instruction. We maintain training records and certifications that exceed DOT minimums.",
  },
  {
    title: "TWIC Card Compliance",
    description:
      "All drivers serving port facilities, refineries, and other MTSA-regulated facilities hold valid Transportation Worker Identification Credentials (TWIC). This ensures uninterrupted access to secure energy-sector facilities.",
  },
  {
    title: "Equipment Inspection Standards",
    description:
      "Trucks and trailers used for energy-sector freight undergo enhanced pre-trip inspections beyond standard DOT requirements. We check securement hardware, placarding, spill kits, and emergency response equipment before every energy-sector dispatch.",
  },
  {
    title: "Emergency Response Preparedness",
    description:
      "Our drivers carry commodity-specific emergency response guides, spill containment equipment, and know how to execute emergency procedures in the event of an incident. We maintain a 24/7 emergency response hotline staffed by trained personnel.",
  },
];

const faqs = [
  {
    question: "Are your drivers hazmat-certified for energy-sector freight?",
    answer:
      "Yes. All Fairway drivers who transport hazmat freight hold valid CDL hazmat endorsements and undergo specialized training in hazardous materials handling, emergency response procedures, and DOT compliance. Our training program covers placarding, shipping papers, compatibility requirements, and commodity-specific protocols. We maintain comprehensive training records and ensure all certifications remain current.",
  },
  {
    question: "Can you support refinery turnaround and shutdown logistics?",
    answer:
      "Absolutely. Refinery turnarounds are one of our core energy-sector specialties. We understand the compressed timelines and the cost of delays. Our asset-based fleet allows us to pre-position trucks and dedicate capacity to turnaround projects, ensuring equipment, parts, catalysts, and supplies arrive on the schedule your turnaround plan requires. We provide 24/7 dispatch support during turnaround periods.",
  },
  {
    question: "What areas of the Gulf Coast petrochemical corridor do you serve?",
    answer:
      "We serve the entire Gulf Coast petrochemical corridor from Pascagoula, Mississippi through Mobile, Alabama and westward through the Louisiana Gulf Coast to New Orleans, Baton Rouge, and Lake Charles. This corridor includes some of the largest refineries, chemical plants, and industrial facilities in North America, and our fleet operates in it daily.",
  },
  {
    question: "Do you handle oversize energy equipment transport?",
    answer:
      "Yes. We regularly transport oversize and overweight energy-sector equipment including pressure vessels, heat exchangers, large-diameter pipe, compressors, transformers, and modular process units. For loads that exceed standard legal limits, we coordinate all required permits, route planning, pilot cars, and any special equipment needed for safe transport. Contact us with your equipment specifications for a detailed logistics plan.",
  },
];

/* ---------- Page ---------- */

export default function EnergyIndustrialFreightPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Energy & Industrial Freight Services"
        subtitle="Asset-based logistics for the Gulf Coast energy sector. Oil and gas, petrochemical, refinery supply chain, and heavy-haul services built for the demands of industrial operations."
        breadcrumbs={[
          { label: "Industries" },
          { label: "Energy & Industrial" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&q=80"
      />

      {/* TRUST BADGES */}
      <TrustBadges variant="light" />

      {/* INDUSTRY OVERVIEW */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                Energy & Industrial
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark mb-6">
                Powering the Gulf Coast{" "}
                <span className="text-gold-gradient">Energy Corridor.</span>
              </h2>

              <div className="gold-border-left pl-6 mb-6">
                <p className="text-neutral-600 leading-relaxed text-lg">
                  The Gulf Coast from Mobile to New Orleans is one of the most
                  critical energy and petrochemical corridors in North America.
                  Fairway Logistics provides the specialized freight services
                  this industry demands.
                </p>
              </div>

              <p className="text-neutral-600 leading-relaxed mb-6">
                The Gulf Coast energy sector encompasses some of the largest
                refineries, chemical manufacturing complexes, natural gas
                processing facilities, and offshore support operations in
                the United States. This dense industrial corridor generates
                billions in economic output and requires a logistics
                infrastructure that can handle hazardous materials, oversized
                equipment, time-critical turnaround freight, and the 24/7
                operational tempo of continuous industrial processes.
              </p>

              <p className="text-neutral-600 leading-relaxed mb-8">
                Fairway Logistics serves the Gulf Coast energy sector as an
                asset-based carrier with hazmat-certified drivers, specialized
                equipment, and deep familiarity with the refineries,
                petrochemical plants, and industrial facilities along the I-10
                and I-65 corridors. Our company-owned fleet means we control
                driver quality, equipment condition, and schedule compliance —
                critical factors when transporting regulated materials into
                secure industrial facilities. We are not a broker searching
                for trucks — we are the carrier that shows up on time, every time.
              </p>

              <div className="space-y-3">
                {[
                  "Hazmat-certified drivers and equipment",
                  "TWIC card holders for secure facility access",
                  "Heavy-haul and oversize load capabilities",
                  "24/7 dispatch for continuous operations",
                  "Gulf Coast petrochemical corridor expertise",
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
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&q=80"
                  alt="Energy and industrial facilities on the Gulf Coast"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-gold/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ENERGY SECTOR CHALLENGES */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Industry Challenges
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Energy Sector Freight Challenges
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              Energy and industrial logistics demand capabilities that standard
              freight carriers cannot provide. Here is how Fairway meets these
              challenges.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, i) => (
              <div
                key={challenge.title}
                className={`bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up stagger-${Math.min(i + 1, 6)}`}
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

      {/* SPECIALIZED CAPABILITIES */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Our Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Specialized Energy Freight Services
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              Purpose-built logistics for oil and gas, petrochemical, refinery,
              and heavy industrial operations across the Gulf Coast.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`bg-neutral-50 rounded-xl border border-neutral-200 p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                    <cap.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-dark">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  {cap.description}
                </p>
                <ul className="space-y-2">
                  {cap.features.map((feature) => (
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

      {/* SAFETY IN ENERGY LOGISTICS */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Safety First
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Safety in Energy Logistics
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              In the energy sector, safety is not a feature — it is a
              requirement. Our safety protocols exceed industry standards.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {safetyProtocols.map((protocol, i) => (
              <div
                key={protocol.title}
                className={`bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-gold" />
                  <h3 className="text-lg font-heading font-bold text-dark">
                    {protocol.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {protocol.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Common Questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Energy Freight FAQ
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-neutral-50 rounded-xl border border-neutral-200 p-6"
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
              Request an Energy & Industrial Freight Quote
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Tell us about your energy-sector freight requirements and our
              specialized team will provide a detailed logistics plan and
              competitive rate.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Power Your Operations With Reliable Freight"
        description="Partner with an asset-based carrier built for the Gulf Coast energy corridor. Hazmat-certified, safety-focused, and ready to support your operations 24/7."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
