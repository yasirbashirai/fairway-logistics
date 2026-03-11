import type { Metadata } from "next";
import {
  Anchor,
  Truck,
  Warehouse,
  Ship,
  MapPin,
  CheckCircle,
  Package,
  Container,
  Fish,
  Building2,
  Route,
  Dice5,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import MetricsSection from "@/components/MetricsSection";
import QuoteForm from "@/components/QuoteForm";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Drayage & Logistics in Gulfport, MS | Fairway Logistics",
  description:
    "Gulfport drayage company offering container trucking, port logistics, and freight services at the Port of Gulfport. Serving Mississippi's Gulf Coast gaming, seafood, and manufacturing industries.",
  keywords: [
    "Gulfport drayage company",
    "Port of Gulfport drayage",
    "Gulfport MS logistics",
    "Mississippi port trucking",
    "Gulfport container trucking",
    "Mississippi Gulf Coast freight",
    "Gulfport warehouse services",
  ],
  openGraph: {
    title: "Drayage & Logistics in Gulfport, MS | Fairway Logistics",
    description:
      "Port drayage and logistics services at the Port of Gulfport, MS. Asset-based container trucking and freight brokerage from Fairway Logistics.",
    url: "https://fairwaylogisticsllc.com/logistics-services-gulfport-ms",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Drayage & Logistics in Gulfport, MS - Fairway Logistics",
      },
    ],
  },
};

/* ---------- Local advantages ---------- */
const localAdvantages = [
  {
    title: "Port of Gulfport — Mississippi's Gateway",
    description:
      "The Port of Gulfport, operated by the Mississippi State Port Authority, is a significant Gulf Coast cargo port handling containerized goods, frozen poultry, forest products, and project cargo. Its recently reconstructed facilities — rebuilt and expanded after Hurricane Katrina — feature modern container handling equipment and increased throughput capacity.",
  },
  {
    title: "I-10 & Highway 49 Junction",
    description:
      "Gulfport sits at the intersection of I-10 (east-west Gulf Coast corridor) and Highway 49 (running north to Hattiesburg and Jackson). This crossroads position makes Gulfport a natural distribution point for freight moving between the Mississippi coast and the state's interior markets.",
  },
  {
    title: "Gaming & Hospitality Supply Chains",
    description:
      "Mississippi's Gulf Coast gaming industry, centered in Gulfport and neighboring Biloxi, generates enormous supply chain demand. Casinos, resort hotels, convention centers, and entertainment venues require constant provisioning — from food and beverages to furniture, linens, and gaming equipment.",
  },
  {
    title: "Seafood Processing Capital",
    description:
      "The Mississippi Gulf Coast is a major center for commercial fishing and seafood processing. Gulfport's seafood industry requires temperature-controlled transportation, cold chain integrity, and reliable scheduling to move shrimp, oysters, crab, and fish to markets across the nation.",
  },
];

/* ---------- FAQ ---------- */
const faqs = [
  {
    question: "How quickly can you dray containers from the Port of Gulfport?",
    answer:
      "We coordinate container drayage from the Port of Gulfport with typical pickup within 24 hours of container availability. Our dispatchers maintain direct communication with the Mississippi State Port Authority terminal operations to track vessel arrivals, container releases, and gate schedules. For urgent shipments, we can arrange expedited same-day pickup when containers are available.",
  },
  {
    question: "Do you handle refrigerated shipments for the Gulfport seafood industry?",
    answer:
      "Yes. Through our carrier network, we provide temperature-controlled transportation for Gulfport's seafood processors and distributors. We understand the cold chain requirements — maintaining precise temperatures from the processing plant through transit to the final destination — and work with refrigerated carriers who specialize in perishable goods logistics.",
  },
  {
    question: "Can you supply logistics for the Mississippi Gulf Coast casino resorts?",
    answer:
      "Absolutely. We serve multiple casino resort properties along the Mississippi Gulf Coast with scheduled supply chain deliveries, including food service provisions, FF&E (furniture, fixtures, and equipment), gaming equipment, and construction materials for ongoing renovation projects. Our team coordinates delivery windows with property receiving departments to minimize disruption to guest operations.",
  },
  {
    question: "What is the distance from your base in Mobile to Gulfport?",
    answer:
      "Gulfport is approximately 90 miles west of our Mobile headquarters along I-10, making it roughly a 90-minute drive. This proximity enables us to provide daily freight service between the two ports and maintain responsive dispatch capabilities for Gulfport-area pickups and deliveries.",
  },
];

export default function LogisticsServicesGulfportMS() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <PageHero
        title="Drayage & Logistics Services in Gulfport, Mississippi"
        subtitle="Container drayage at the Port of Gulfport, regional trucking, and freight brokerage serving Mississippi's Gulf Coast gaming, seafood, and manufacturing industries."
        backgroundImage="/images/gulf-coast.jpg"
        breadcrumbs={[
          { label: "Gulf Coast Logistics", href: "/gulf-coast-logistics" },
          { label: "Gulfport, MS" },
        ]}
      />

      {/* ---------- Regional Overview ---------- */}
      <section className="py-16 sm:py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in-up">
              <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">
                Gulfport Coverage
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2 mb-6">
                Gulfport: Mississippi&apos;s Port City on the Move
              </h2>
              <div className="space-y-4 text-navy-300 leading-relaxed">
                <p>
                  Gulfport, Mississippi, is the second-largest city in the state and the
                  economic engine of the Mississippi Gulf Coast. Home to the Port of
                  Gulfport — the state&apos;s largest commercial seaport — the city serves
                  as a critical node in Gulf Coast trade, handling everything from
                  containerized consumer goods and frozen poultry exports to forest
                  products and project cargo. As a Gulfport drayage company with
                  asset-based capacity, Fairway Logistics provides the container trucking
                  and freight services that keep this port city&apos;s supply chains running.
                </p>
                <p>
                  The Mississippi State Port Authority has invested hundreds of millions in
                  rebuilding and modernizing the Port of Gulfport since Hurricane Katrina.
                  The result is a state-of-the-art facility with expanded container
                  capacity, upgraded infrastructure, and deepened channels capable of
                  handling larger vessels. This modernization has attracted new shipping
                  lines and cargo volumes, creating growing demand for reliable drayage
                  providers who can efficiently move containers between the port and
                  regional distribution points.
                </p>
                <p>
                  Beyond the port, Gulfport&apos;s economy thrives on the gaming and
                  hospitality industry, with major casino resorts lining the beachfront
                  along Highway 90. The city&apos;s seafood processing facilities handle
                  millions of pounds of Gulf shrimp, oysters, and fish annually. And
                  Gulfport&apos;s position at the junction of I-10 and Highway 49 makes it
                  a natural freight distribution point for the entire southern Mississippi
                  region, reaching north to Hattiesburg and Jackson.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-up stagger-2">
              <div className="bg-navy-900 rounded-xl p-8 border border-navy-800">
                <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold-400" />
                  Gulfport Logistics Snapshot
                </h3>
                <ul className="space-y-4">
                  {[
                    "Port of Gulfport: Mississippi's largest commercial port",
                    "Mississippi State Port Authority modernized facilities",
                    "I-10 & Highway 49 interchange — crossroads position",
                    "Major casino resort corridor along Highway 90",
                    "Gulf Coast seafood processing and cold chain hub",
                    "CSX rail service connections for intermodal freight",
                    "Stennis Space Center nearby — aerospace logistics",
                    "90 miles from Mobile — daily service coverage",
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
              Drayage & Freight Services in Gulfport, MS
            </h2>
            <p className="text-navy-300 mt-4 max-w-2xl mx-auto">
              From Port of Gulfport container drayage to casino resort provisioning,
              we deliver the logistics solutions Mississippi&apos;s coast depends on.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Anchor className="w-6 h-6" />}
              title="Port of Gulfport Drayage"
              description="Container pickup, delivery, and repositioning at the Port of Gulfport. We coordinate with the Mississippi State Port Authority for efficient terminal operations."
              href="/gulf-coast-container-drayage"
              features={[
                "Container pickup & delivery",
                "MSPA terminal coordination",
                "Import/export container drayage",
                "Chassis management",
              ]}
            />
            <ServiceCard
              icon={<Truck className="w-6 h-6" />}
              title="Regional Trucking"
              description="Asset-based trucking along the I-10 corridor between Mobile and New Orleans, with north-south coverage on Highway 49 to Hattiesburg and Jackson."
              href="/asset-based-trucking"
              features={[
                "I-10 corridor dedicated lanes",
                "Highway 49 north-south service",
                "Company-owned fleet reliability",
                "GPS-tracked shipments",
              ]}
            />
            <ServiceCard
              icon={<Ship className="w-6 h-6" />}
              title="Import/Export Services"
              description="Complete import and export logistics through the Port of Gulfport, including customs coordination, container drayage, and inland distribution."
              href="/import-export-logistics"
              features={[
                "Customs broker coordination",
                "FCL container handling",
                "Inland transportation",
                "Export load planning",
              ]}
            />
            <ServiceCard
              icon={<Building2 className="w-6 h-6" />}
              title="Casino & Hospitality Freight"
              description="Specialized supply chain logistics for Mississippi Gulf Coast casino resorts and hospitality properties — from food service to FF&E and gaming equipment."
              href="/retail-distribution-logistics"
              features={[
                "Casino resort provisioning",
                "FF&E delivery coordination",
                "Food & beverage supply chains",
                "Scheduled delivery windows",
              ]}
            />
            <ServiceCard
              icon={<Package className="w-6 h-6" />}
              title="Freight Brokerage"
              description="Access to vetted carriers nationwide for Gulfport shippers needing capacity beyond our fleet — with the same service standards and accountability."
              href="/freight-brokerage"
              features={[
                "Refrigerated carrier network",
                "National coverage expansion",
                "Spot & contract pricing",
                "Full shipment transparency",
              ]}
            />
            <ServiceCard
              icon={<Warehouse className="w-6 h-6" />}
              title="Transload & Cross-Dock"
              description="Container transloading and cross-dock services for Port of Gulfport cargo that needs to be broken down, consolidated, or transferred to domestic trailers."
              href="/warehousing-mobile-al"
              features={[
                "Container stripping & stuffing",
                "Cross-dock operations",
                "Cargo consolidation",
                "Short-term storage available",
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
              Strategic Advantages
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2">
              Why Gulfport Is a Key Drayage Market
            </h2>
            <p className="text-navy-300 mt-4 max-w-2xl mx-auto">
              Mississippi&apos;s port city combines modernized maritime infrastructure
              with a diverse economy that generates year-round freight demand.
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
              Gulfport Drayage & Logistics FAQs
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
              Request a Quote for Gulfport Drayage & Logistics
            </h2>
            <p className="text-navy-300 mt-4 max-w-2xl mx-auto">
              Need containers moved from the Port of Gulfport or freight delivered
              along the Mississippi coast? Call{" "}
              <a href="tel:251-725-1929" className="text-gold-400 font-semibold hover:underline">
                251-725-1929
              </a>{" "}
              or fill out the form below.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <CTASection
        title="Your Gulfport Drayage Partner"
        description="From the Port of Gulfport's container terminal to the casino resorts of Highway 90, Fairway Logistics delivers the drayage and freight solutions Mississippi's coast relies on."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call 251-725-1929"
        secondaryButtonHref="tel:251-725-1929"
      />
    </>
  );
}
