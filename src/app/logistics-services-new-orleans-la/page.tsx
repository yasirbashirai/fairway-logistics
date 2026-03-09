import type { Metadata } from "next";
import {
  Anchor,
  Truck,
  Warehouse,
  Ship,
  MapPin,
  CheckCircle,
  Package,
  Fuel,
  Building2,
  Route,
  Globe,
  ShoppingBag,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import MetricsSection from "@/components/MetricsSection";
import QuoteForm from "@/components/QuoteForm";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Gulf Coast Logistics in New Orleans, LA | Fairway Logistics",
  description:
    "New Orleans Gulf Coast logistics services including port drayage, container trucking, petrochemical freight, and supply chain solutions. Serving the Port of New Orleans, Mississippi River corridor, and I-10/I-55 crossroads.",
  keywords: [
    "New Orleans Gulf Coast logistics",
    "New Orleans port drayage",
    "New Orleans freight services",
    "Port of New Orleans trucking",
    "Louisiana petrochemical logistics",
    "New Orleans container shipping",
    "Mississippi River freight",
  ],
  openGraph: {
    title: "Gulf Coast Logistics in New Orleans, LA | Fairway Logistics",
    description:
      "Comprehensive logistics and freight services in New Orleans, LA. Port drayage, petrochemical corridor freight, and supply chain solutions from Fairway Logistics.",
    url: "https://fairwaylogisticsllc.com/logistics-services-new-orleans-la",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Gulf Coast Logistics in New Orleans, LA - Fairway Logistics",
      },
    ],
  },
};

/* ---------- Local advantages ---------- */
const localAdvantages = [
  {
    title: "Port of New Orleans — Top 15 U.S. Port",
    description:
      "The Port of New Orleans (Port NOLA) is one of the busiest ports in the nation, handling over 90 million tons of cargo annually across its Mississippi River terminals and the Napoleon Avenue Container Terminal. As the only U.S. port system connected to six Class I railroads, Port NOLA offers unmatched intermodal flexibility for shippers moving goods between Gulf Coast waterways and inland markets.",
  },
  {
    title: "I-10 & I-55 Interstate Crossroads",
    description:
      "New Orleans sits at the junction of I-10 (the southern coast-to-coast corridor) and I-55 (connecting south to Jackson, MS, Memphis, TN, and St. Louis, MO). This crossroads geography makes New Orleans a natural distribution hub for freight moving between the Gulf Coast, the Mississippi Valley, and the Midwest.",
  },
  {
    title: "Petrochemical Corridor Access",
    description:
      "The Mississippi River petrochemical corridor between New Orleans and Baton Rouge — often called 'Cancer Alley' by critics but more accurately the heart of American chemical manufacturing — contains over 150 plants and refineries. These facilities generate enormous freight volumes of raw materials, finished chemicals, equipment, and maintenance supplies.",
  },
  {
    title: "French Quarter & Hospitality Economy",
    description:
      "New Orleans hosts approximately 18 million visitors annually, with the French Quarter, Convention Center, and Superdome driving a hospitality industry that requires constant provisioning. Restaurants, hotels, event venues, and Mardi Gras supply chains create unique last-mile logistics challenges in the city's dense historic core.",
  },
];

/* ---------- FAQ ---------- */
const faqs = [
  {
    question: "Do you provide drayage services at the Port of New Orleans?",
    answer:
      "Yes. Fairway Logistics provides container drayage services at the Port of New Orleans, including the Napoleon Avenue Container Terminal and the adjacent facilities along the Mississippi River. We coordinate container pickup, delivery, and repositioning, working with port terminal operators and steamship lines to ensure efficient cargo flow. Our team manages chassis logistics, booking confirmations, and customs release coordination.",
  },
  {
    question: "Can you handle petrochemical corridor freight between New Orleans and Baton Rouge?",
    answer:
      "Absolutely. We transport equipment, materials, and supplies for chemical plants, refineries, and industrial facilities along the Mississippi River corridor between New Orleans and Baton Rouge. Our drivers are trained in hazmat protocols, and we coordinate with plant security and receiving departments for scheduled deliveries to these controlled-access industrial sites.",
  },
  {
    question: "How far is New Orleans from your Mobile headquarters?",
    answer:
      "New Orleans is approximately 150 miles west of our Mobile headquarters along I-10 — about a two-and-a-half-hour drive. We maintain regular freight lanes between Mobile and New Orleans, enabling daily service between the two cities and their respective ports. Our brokerage division also provides extended coverage throughout the greater New Orleans metropolitan area.",
  },
  {
    question: "Do you deliver to the French Quarter and downtown New Orleans?",
    answer:
      "Yes, though we understand the unique challenges of navigating the French Quarter's narrow streets, limited loading zones, and time-restricted delivery windows. Our experienced drivers coordinate with receiving locations to schedule deliveries during approved hours, typically early morning before tourist activity peaks. We handle restaurant provisioning, hotel supply deliveries, and event logistics throughout the downtown core.",
  },
];

export default function LogisticsServicesNewOrleansLA() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <PageHero
        title="Logistics Services in New Orleans, Louisiana"
        subtitle="Connecting the Port of New Orleans, the Mississippi River petrochemical corridor, and the Crescent City's vibrant hospitality economy with asset-based Gulf Coast logistics."
        backgroundImage="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1920&q=80"
        breadcrumbs={[
          { label: "Gulf Coast Logistics", href: "/gulf-coast-logistics" },
          { label: "New Orleans, LA" },
        ]}
      />

      {/* ---------- Regional Overview ---------- */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in-up">
              <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">
                New Orleans Coverage
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700 mt-2 mb-6">
                New Orleans: America&apos;s Most Strategic Port City
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  New Orleans occupies what may be the most strategically important
                  logistics position in North America. Situated at the mouth of the
                  Mississippi River — the continent&apos;s primary inland waterway — and at
                  the crossroads of I-10 and I-55, New Orleans is where river barge
                  traffic, ocean-going vessels, six Class I railroads, and major interstate
                  highways all converge. For New Orleans Gulf Coast logistics, there is
                  simply no substitute for understanding this city&apos;s layered
                  transportation network.
                </p>
                <p>
                  The Port of New Orleans ranks among the top 15 U.S. ports by tonnage,
                  handling containerized cargo, breakbulk, project freight, and bulk
                  commodities across its Mississippi River terminals. The Napoleon Avenue
                  Container Terminal processes hundreds of thousands of TEUs annually,
                  with direct services to Latin America, Europe, Asia, and Africa. Beyond
                  the port, the New Orleans area is home to the Louisiana Offshore Oil
                  Port (LOOP), the largest privately owned crude oil terminal in the
                  country, and the Mississippi River petrochemical corridor extends
                  northwest to Baton Rouge with over 150 chemical plants and refineries.
                </p>
                <p>
                  Fairway Logistics extends our Gulf Coast logistics network from Mobile
                  to New Orleans along the I-10 corridor, providing container drayage at
                  Port NOLA, freight services for petrochemical facilities, supply chain
                  support for the hospitality industry, and regional trucking throughout
                  the greater New Orleans metro area — including Metairie, Kenner, the
                  West Bank, and the Northshore communities across Lake Pontchartrain.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-up stagger-2">
              <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200">
                <h3 className="text-xl font-heading font-bold text-dark-700 mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold-400" />
                  New Orleans Logistics Snapshot
                </h3>
                <ul className="space-y-4">
                  {[
                    "Port of New Orleans: Top 15 U.S. port — 90M+ tons annually",
                    "Only U.S. port connected to 6 Class I railroads",
                    "Napoleon Avenue Container Terminal — global shipping lines",
                    "Mississippi River: 14,500-mile inland waterway network",
                    "I-10 & I-55 interstate crossroads",
                    "150+ petrochemical plants on the river corridor",
                    "18M+ annual visitors — massive hospitality supply chain",
                    "150 miles from Mobile HQ via I-10 — daily service",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="py-16 sm:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700 mt-2">
              Logistics & Freight Services in New Orleans
            </h2>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
              Comprehensive logistics solutions for one of America&apos;s busiest port
              cities — from container drayage to petrochemical freight and hospitality
              supply chains.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Anchor className="w-6 h-6" />}
              title="Port of New Orleans Drayage"
              description="Container drayage at the Napoleon Avenue Container Terminal and Mississippi River terminals. Efficient port-to-door and port-to-rail coordination for import and export cargo."
              href="/gulf-coast-container-drayage"
              features={[
                "Napoleon Avenue Terminal service",
                "Import/export container moves",
                "Steamship line coordination",
                "Chassis pool management",
              ]}
            />
            <ServiceCard
              icon={<Fuel className="w-6 h-6" />}
              title="Petrochemical Corridor Freight"
              description="Specialized freight services for chemical plants, refineries, and industrial facilities along the Mississippi River corridor between New Orleans and Baton Rouge."
              href="/energy-industrial-freight"
              features={[
                "Chemical plant deliveries",
                "Refinery supply logistics",
                "Hazmat-trained drivers",
                "Industrial site access expertise",
              ]}
            />
            <ServiceCard
              icon={<Globe className="w-6 h-6" />}
              title="International Trade Logistics"
              description="End-to-end management of import and export shipments through Port NOLA, leveraging the port's global shipping line connections to Latin America, Europe, and Asia."
              href="/import-export-logistics"
              features={[
                "Customs coordination",
                "FCL & LCL support",
                "Trade compliance guidance",
                "Multi-modal connections",
              ]}
            />
            <ServiceCard
              icon={<Truck className="w-6 h-6" />}
              title="I-10 Corridor Trucking"
              description="Asset-based trucking along the Mobile-New Orleans I-10 corridor with daily service, plus I-55 northbound connections to Jackson and Memphis."
              href="/asset-based-trucking"
              features={[
                "Daily Mobile-NOLA freight lanes",
                "I-55 northbound service",
                "Company-owned fleet reliability",
                "Real-time GPS tracking",
              ]}
            />
            <ServiceCard
              icon={<ShoppingBag className="w-6 h-6" />}
              title="Hospitality & Event Logistics"
              description="Supply chain support for New Orleans' world-famous hospitality industry — restaurants, hotels, convention venues, and special events including Mardi Gras and Jazz Fest."
              href="/retail-distribution-logistics"
              features={[
                "French Quarter delivery expertise",
                "Restaurant provisioning",
                "Convention & event freight",
                "Seasonal surge capacity",
              ]}
            />
            <ServiceCard
              icon={<Package className="w-6 h-6" />}
              title="Freight Brokerage"
              description="Access to our nationwide carrier network for New Orleans shippers needing capacity for long-haul, temperature-controlled, oversized, or specialty freight."
              href="/freight-brokerage"
              features={[
                "National carrier network",
                "Specialized equipment sourcing",
                "Competitive rate negotiations",
                "Single-point accountability",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ---------- Metrics ---------- */}
      <MetricsSection />

      {/* ---------- Local Advantages ---------- */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">
              Strategic Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700 mt-2">
              Why New Orleans Is a Critical Logistics Market
            </h2>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
              The Crescent City&apos;s position at the mouth of the Mississippi River
              and the junction of major interstates makes it indispensable to Gulf
              Coast and national supply chains.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {localAdvantages.map((advantage, i) => (
              <div
                key={i}
                className={`gold-border-left pl-6 py-4 animate-fade-in-up stagger-${i + 1}`}
              >
                <h3 className="text-lg font-heading font-bold text-dark-700 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
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
      <section className="py-16 sm:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700 mt-2">
              New Orleans Logistics FAQs
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-neutral-200 p-6 animate-fade-in-up"
              >
                <h3 className="text-lg font-heading font-bold text-dark-700 mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Quote Form ---------- */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700 mt-2">
              Request a Quote for New Orleans Logistics
            </h2>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
              Whether you need containers drayed from Port NOLA, chemicals hauled along
              the river corridor, or supplies delivered to a French Quarter restaurant,
              Fairway Logistics has the capacity and expertise. Call{" "}
              <a href="tel:251-725-1929" className="text-gold-400 font-semibold hover:underline">
                251-725-1929
              </a>{" "}
              or complete the form below.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <CTASection
        title="New Orleans' Gulf Coast Logistics Connection"
        description="From the Port of New Orleans to the petrochemical corridor, Fairway Logistics bridges the Gulf Coast with asset-based capacity and the local knowledge that America's most strategic port city demands."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call 251-725-1929"
        secondaryButtonHref="tel:251-725-1929"
      />
    </>
  );
}
