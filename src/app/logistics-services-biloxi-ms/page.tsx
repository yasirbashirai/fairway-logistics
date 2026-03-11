import type { Metadata } from "next";
import {
  Truck,
  Warehouse,
  MapPin,
  CheckCircle,
  Package,
  Shield,
  Container,
  Building2,
  Route,
  Anchor,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import MetricsSection from "@/components/MetricsSection";
import QuoteForm from "@/components/QuoteForm";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Container Trucking in Biloxi, MS | Fairway Logistics",
  description:
    "Biloxi container trucking and logistics services for the Mississippi Gulf Coast. Serving Keesler Air Force Base, casino resorts, and businesses with port drayage and freight solutions.",
  keywords: [
    "Biloxi container trucking",
    "Biloxi MS logistics",
    "Biloxi freight services",
    "Keesler AFB logistics",
    "Mississippi Gulf Coast trucking",
    "Biloxi casino logistics",
    "Biloxi supply chain services",
  ],
  openGraph: {
    title: "Container Trucking in Biloxi, MS | Fairway Logistics",
    description:
      "Container trucking and logistics services in Biloxi, MS. Serving the gaming industry, Keesler Air Force Base, and Mississippi Gulf Coast businesses.",
    url: "https://fairwaylogisticsllc.com/logistics-services-biloxi-ms",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Container Trucking in Biloxi, MS - Fairway Logistics",
      },
    ],
  },
};

/* ---------- Local advantages ---------- */
const localAdvantages = [
  {
    title: "Keesler Air Force Base — Military Logistics Anchor",
    description:
      "Keesler AFB is one of the largest military training installations in the country, home to the 81st Training Wing and the 403rd Wing. The base generates continuous logistics demand for materiel, equipment, construction supplies, and daily provisioning — requiring carriers who understand Department of Defense shipping standards and base access protocols.",
  },
  {
    title: "Casino Resort Corridor",
    description:
      "Biloxi's beachfront casino resorts — including Beau Rivage, Hard Rock, IP Casino, and Golden Nugget — represent a multi-billion-dollar hospitality industry that depends on seamless supply chains. From kitchen provisions and beverage deliveries to gaming equipment and renovation materials, these properties require daily logistics support.",
  },
  {
    title: "Port of Gulfport Proximity",
    description:
      "Biloxi is just 13 miles east of the Port of Gulfport, making container trucking between the port and Biloxi-area businesses fast and cost-effective. Containers discharged at Gulfport can reach Biloxi distribution points within minutes, supporting just-in-time inventory strategies for local manufacturers and retailers.",
  },
  {
    title: "Gulf Islands National Seashore Corridor",
    description:
      "The Gulf Islands National Seashore and the barrier islands off Biloxi's coast attract significant tourism, while the Highway 90 beachfront corridor connecting Biloxi to Ocean Springs, Gautier, and Pascagoula creates a continuous commercial zone with diverse freight needs from restaurants and shops to marine services.",
  },
];

/* ---------- FAQ ---------- */
const faqs = [
  {
    question: "Do you provide container trucking from the Port of Gulfport to Biloxi?",
    answer:
      "Yes, this is one of our core service lanes. The Port of Gulfport is just 13 miles west of downtown Biloxi on I-10, and we provide daily container drayage between the port and Biloxi-area businesses, warehouses, and distribution points. Whether you need a single container delivered or regular scheduled drayage, our asset-based fleet handles it with the reliability and speed that Biloxi container trucking demands.",
  },
  {
    question: "Can you deliver to Keesler Air Force Base?",
    answer:
      "Yes. Fairway Logistics serves Keesler Air Force Base with freight deliveries that comply with Department of Defense shipping requirements. Our team coordinates with base logistics personnel on delivery scheduling, gate access procedures, and documentation requirements. We handle general cargo, construction materials, and specialized military shipments to the base.",
  },
  {
    question: "How do you handle logistics for Biloxi's casino resorts?",
    answer:
      "We work with casino resort purchasing and receiving departments to establish scheduled delivery windows that avoid guest arrival/departure peaks. Our services include food and beverage supply chain deliveries, FF&E (furniture, fixtures, and equipment) transportation for property renovations, gaming equipment logistics, and general merchandise replenishment — all coordinated to minimize loading dock congestion.",
  },
  {
    question: "Do you cover Ocean Springs and the Jackson County coast?",
    answer:
      "Absolutely. Our Biloxi service area extends east along the I-10 and Highway 90 corridors to Ocean Springs, Gautier, Moss Point, and Pascagoula. We also serve the Ingalls Shipbuilding area in Pascagoula for industrial and defense-related freight. The entire Harrison County and Jackson County coastline falls within our regular service territory.",
  },
];

export default function LogisticsServicesBiloxiMS() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <PageHero
        title="Container Trucking & Logistics in Biloxi, Mississippi"
        subtitle="Asset-based container trucking, military logistics, and casino resort supply chain solutions serving Biloxi and the Mississippi Gulf Coast."
        backgroundImage="/images/main.jpg"
        breadcrumbs={[
          { label: "Gulf Coast Logistics", href: "/gulf-coast-logistics" },
          { label: "Biloxi, MS" },
        ]}
      />

      {/* ---------- Regional Overview ---------- */}
      <section className="py-16 sm:py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in-up">
              <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">
                Biloxi Coverage
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2 mb-6">
                Biloxi: Gaming Capital Meets Military Stronghold
              </h2>
              <div className="space-y-4 text-navy-300 leading-relaxed">
                <p>
                  Biloxi, Mississippi, is a city of contrasts that converge on logistics.
                  On one side of town, the glittering casino resorts of the Highway 90
                  beachfront — Beau Rivage, Hard Rock Hotel &amp; Casino, IP Casino Resort,
                  and the Golden Nugget — drive a hospitality economy that demands
                  constant provisioning, from gourmet kitchen supplies to gaming equipment
                  and luxury furnishings. On the other side, Keesler Air Force Base
                  anchors a significant military presence, training thousands of airmen
                  annually and requiring a steady stream of defense materiel and base
                  supplies.
                </p>
                <p>
                  Between these two economic pillars, Biloxi&apos;s commercial landscape
                  includes a historic seafood industry centered on shrimping and oyster
                  harvesting, a growing technology sector around the Innovation and
                  Technology district, and a tourism infrastructure that extends from the
                  Biloxi Lighthouse and Beauvoir to the Gulf Islands National Seashore
                  and the barrier islands offshore. Each of these sectors generates
                  distinct Biloxi container trucking and freight requirements.
                </p>
                <p>
                  Fairway Logistics serves Biloxi from our Mobile, Alabama, headquarters
                  — approximately 90 miles east on I-10. This proximity, combined with
                  our asset-based fleet and experienced dispatchers, enables us to provide
                  daily container trucking from the nearby Port of Gulfport, scheduled
                  supply chain deliveries to casino properties, military-compliant
                  shipments to Keesler AFB, and general freight services throughout
                  Harrison County and the broader Mississippi Gulf Coast.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-up stagger-2">
              <div className="bg-navy-900 rounded-xl p-8 border border-navy-800">
                <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold-400" />
                  Biloxi Logistics Profile
                </h3>
                <ul className="space-y-4">
                  {[
                    "Keesler Air Force Base: Major USAF training installation",
                    "12+ beachfront casino resorts on Highway 90",
                    "13 miles from Port of Gulfport container terminal",
                    "I-10 east-west corridor access",
                    "Historic Biloxi seafood & shrimping industry",
                    "Gulf Islands National Seashore tourism corridor",
                    "Ocean Springs arts & dining district nearby",
                    "Ingalls Shipbuilding (Pascagoula) within service range",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                      <span className="text-navy-200 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="py-16 sm:py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2">
              Container Trucking & Logistics in Biloxi
            </h2>
            <p className="text-navy-300 mt-4 max-w-2xl mx-auto">
              Specialized logistics for Biloxi&apos;s gaming industry, military
              installations, and commercial businesses — with container trucking from
              the Port of Gulfport.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Container className="w-6 h-6" />}
              title="Container Trucking"
              description="Port-to-door container trucking from the Port of Gulfport to Biloxi businesses. Just 13 miles of I-10 separates the port from your dock — we make the connection seamless."
              href="/gulf-coast-container-drayage"
              features={[
                "Port of Gulfport drayage",
                "13-mile port-to-Biloxi corridor",
                "Import & export containers",
                "Same-day delivery available",
              ]}
            />
            <ServiceCard
              icon={<Shield className="w-6 h-6" />}
              title="Military & Defense Freight"
              description="Compliant freight services for Keesler Air Force Base, supporting base operations, construction projects, and military training logistics with secure, timely delivery."
              href="/government-municipal-logistics"
              features={[
                "Keesler AFB delivery experience",
                "DoD shipping compliance",
                "Base access coordination",
                "Construction material hauling",
              ]}
            />
            <ServiceCard
              icon={<Building2 className="w-6 h-6" />}
              title="Casino Resort Supply Chain"
              description="Dedicated logistics support for Biloxi's casino resorts — Beau Rivage, Hard Rock, IP Casino, and more — with scheduled deliveries that work around guest operations."
              href="/retail-distribution-logistics"
              features={[
                "Scheduled resort deliveries",
                "F&B supply chain management",
                "FF&E transportation",
                "Gaming equipment logistics",
              ]}
            />
            <ServiceCard
              icon={<Truck className="w-6 h-6" />}
              title="Regional Trucking"
              description="Asset-based trucking across the Mississippi Gulf Coast and the I-10 corridor, connecting Biloxi to Mobile, Gulfport, New Orleans, and points beyond."
              href="/asset-based-trucking"
              features={[
                "Company-owned fleet capacity",
                "I-10 corridor service",
                "Dry van & flatbed options",
                "Dedicated lane programs",
              ]}
            />
            <ServiceCard
              icon={<Package className="w-6 h-6" />}
              title="Freight Brokerage"
              description="Extended carrier network for Biloxi businesses needing long-haul, temperature-controlled, or specialized transportation beyond our own fleet's capabilities."
              href="/freight-brokerage"
              features={[
                "Refrigerated carrier access",
                "Nationwide coverage",
                "Competitive rate sourcing",
                "Dedicated account support",
              ]}
            />
            <ServiceCard
              icon={<Anchor className="w-6 h-6" />}
              title="Coastal & Marine Logistics"
              description="Freight services supporting Biloxi's seafood processors, marine services companies, and barrier island operations with specialized coastal logistics expertise."
              href="/asset-based-trucking"
              features={[
                "Seafood industry transport",
                "Marine supply deliveries",
                "Temperature-controlled options",
                "Coastal route expertise",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ---------- Metrics ---------- */}
      <MetricsSection />

      {/* ---------- Local Advantages ---------- */}
      <section className="py-16 sm:py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">
              Local Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2">
              Why Biloxi Businesses Trust Fairway Logistics
            </h2>
            <p className="text-navy-300 mt-4 max-w-2xl mx-auto">
              We understand the unique logistics demands of Biloxi&apos;s diverse
              economy — from military precision to hospitality flexibility.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {localAdvantages.map((advantage, i) => (
              <div
                key={i}
                className={`gold-border-left pl-6 py-4 animate-fade-in-up stagger-${i + 1}`}
              >
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  {advantage.title}
                </h3>
                <p className="text-navy-300 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Trust Badges ---------- */}
      <TrustBadges variant="light" />

      {/* ---------- FAQ ---------- */}
      <section className="py-16 sm:py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2">
              Biloxi Container Trucking FAQs
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-navy-950 rounded-xl border border-navy-800 p-6 animate-fade-in-up"
              >
                <h3 className="text-lg font-heading font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-navy-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Quote Form ---------- */}
      <section className="py-16 sm:py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2">
              Request a Quote for Biloxi Logistics
            </h2>
            <p className="text-navy-300 mt-4 max-w-2xl mx-auto">
              From container trucking off the Port of Gulfport to supply chain
              deliveries at Keesler AFB and the casino resorts, we&apos;re ready to
              serve Biloxi. Call{" "}
              <a href="tel:251-725-1929" className="text-gold-400 font-semibold hover:underline">
                251-725-1929
              </a>{" "}
              or submit the form below.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <CTASection
        title="Biloxi's Container Trucking Experts"
        description="Connecting the Port of Gulfport to Biloxi's casino resorts, military installations, and commercial businesses with reliable asset-based logistics."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call 251-725-1929"
        secondaryButtonHref="tel:251-725-1929"
      />
    </>
  );
}
