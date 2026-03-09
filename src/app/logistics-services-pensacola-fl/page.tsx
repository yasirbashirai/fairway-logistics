import type { Metadata } from "next";
import {
  Truck,
  Warehouse,
  MapPin,
  CheckCircle,
  Package,
  Shield,
  Plane,
  Anchor,
  Route,
  Building2,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import MetricsSection from "@/components/MetricsSection";
import QuoteForm from "@/components/QuoteForm";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Freight Services in Pensacola, FL | Fairway Logistics",
  description:
    "Pensacola freight services including trucking, military logistics, port drayage, and freight brokerage. Serving NAS Pensacola, the aerospace/defense sector, and I-10 corridor businesses.",
  keywords: [
    "Pensacola freight services",
    "Pensacola FL logistics",
    "Pensacola trucking company",
    "NAS Pensacola logistics",
    "Pensacola port drayage",
    "Northwest Florida freight",
    "Pensacola defense logistics",
  ],
  openGraph: {
    title: "Freight Services in Pensacola, FL | Fairway Logistics",
    description:
      "Gulf Coast freight and logistics services in Pensacola, FL. Asset-based trucking, defense logistics, and freight brokerage from Fairway Logistics.",
    url: "https://fairwaylogisticsllc.com/logistics-services-pensacola-fl",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Freight Services in Pensacola, FL - Fairway Logistics",
      },
    ],
  },
};

/* ---------- Local advantages ---------- */
const localAdvantages = [
  {
    title: "Military & Defense Logistics Hub",
    description:
      "NAS Pensacola is the home of naval aviation and hosts the Blue Angels, while Corry Station and Saufley Field add to the military footprint. The defense sector generates billions in procurement and supply chain activity, from aircraft parts to base provisioning, requiring logistics providers with security clearances and military shipping expertise.",
  },
  {
    title: "I-10 Corridor Gateway to Florida",
    description:
      "Pensacola sits at the western gateway of Florida on I-10, making it the first major logistics node for freight entering or leaving the state. This position is critical for east-west freight flow connecting the Gulf Coast states and for accessing Florida's massive consumer market.",
  },
  {
    title: "Aerospace & Advanced Manufacturing",
    description:
      "The Pensacola metro area has cultivated a strong aerospace and advanced manufacturing cluster, with companies like VT Mobile Aerospace Engineering, ST Engineering, and numerous defense contractors requiring precision freight handling for high-value components.",
  },
  {
    title: "Tourism-Driven Supply Chains",
    description:
      "Pensacola Beach, Perdido Key, and the downtown entertainment district draw millions of visitors annually. Hotels, restaurants, attractions, and event venues require year-round logistics support with seasonal surges that demand flexible carrier capacity.",
  },
];

/* ---------- FAQ ---------- */
const faqs = [
  {
    question: "Do you provide freight services to military installations in Pensacola?",
    answer:
      "Yes. Fairway Logistics supports freight delivery to and from NAS Pensacola, Corry Station, and Saufley Field. Our drivers hold the required identification and understand the access procedures, gate protocols, and shipping/receiving requirements at these installations. We handle everything from general cargo to specialized defense shipments.",
  },
  {
    question: "How far is your Mobile headquarters from Pensacola?",
    answer:
      "Our headquarters at 456 Dauphin Street in Mobile is approximately 60 miles west of downtown Pensacola via I-10 — about a one-hour drive. This proximity allows us to provide same-day freight service to the Pensacola metro area, including Pensacola Beach, Perdido Key, Pace, Milton, and Gulf Breeze.",
  },
  {
    question: "Can you handle aerospace component shipments in the Pensacola area?",
    answer:
      "Absolutely. We transport aerospace components, tooling, and precision-manufactured parts for defense contractors and MRO facilities in the Pensacola region. Our team understands the white-glove handling, time-critical scheduling, and chain-of-custody documentation these shipments require.",
  },
  {
    question: "What parts of the Pensacola metro area do you service?",
    answer:
      "We serve the entire Pensacola metropolitan area, including downtown Pensacola, Pensacola Beach, Perdido Key, Gulf Breeze, Navarre, Pace, Milton, and Cantonment. We also cover the Escambia and Santa Rosa County industrial zones along the I-10 and Highway 29 corridors.",
  },
];

export default function LogisticsServicesPensacolaFL() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <PageHero
        title="Logistics & Freight Services in Pensacola, Florida"
        subtitle="Reliable Gulf Coast freight solutions for Pensacola's defense, aerospace, tourism, and manufacturing sectors — backed by asset-based capacity from nearby Mobile, AL."
        backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
        breadcrumbs={[
          { label: "Gulf Coast Logistics", href: "/gulf-coast-logistics" },
          { label: "Pensacola, FL" },
        ]}
      />

      {/* ---------- Regional Overview ---------- */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in-up">
              <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">
                Pensacola Coverage
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700 mt-2 mb-6">
                Pensacola: Where Defense Meets Commerce on the Gulf
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Pensacola, Florida, occupies a unique position in the Gulf Coast
                  logistics landscape. As the westernmost major city in Florida and the
                  birthplace of U.S. naval aviation, Pensacola blends a significant
                  military presence with a thriving tourism economy and a growing
                  aerospace manufacturing sector. These diverse industries create complex
                  Pensacola freight services requirements that demand a logistics provider
                  with regional expertise and reliable capacity.
                </p>
                <p>
                  NAS Pensacola — the &quot;Cradle of Naval Aviation&quot; — anchors the
                  city&apos;s defense economy. The base and its satellite facilities at
                  Corry Station and Saufley Field employ thousands of military and
                  civilian personnel, generating a constant flow of materiel, equipment,
                  and supplies that require secure, timely transportation. Beyond the
                  military, Pensacola&apos;s private-sector aerospace cluster includes
                  VT Mobile Aerospace Engineering&apos;s aircraft maintenance facility
                  and a network of precision manufacturing suppliers.
                </p>
                <p>
                  Fairway Logistics operates just one hour west of Pensacola on the I-10
                  corridor, giving us the proximity to provide same-day freight service
                  while maintaining our asset-based fleet and dispatch center in Mobile.
                  We serve manufacturers along the Pensacola I-10 industrial corridor,
                  hotels and restaurants on Pensacola Beach and Perdido Key, defense
                  contractors near the naval air station, and commercial businesses
                  throughout Escambia and Santa Rosa Counties.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-up stagger-2">
              <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200">
                <h3 className="text-xl font-heading font-bold text-dark-700 mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold-400" />
                  Pensacola Logistics Snapshot
                </h3>
                <ul className="space-y-4">
                  {[
                    "NAS Pensacola: Home of Naval Aviation & Blue Angels",
                    "Port of Pensacola: General cargo & project freight",
                    "I-10 corridor: Western gateway to Florida",
                    "VT MAE & ST Engineering aerospace MRO facilities",
                    "Pensacola Beach & Perdido Key tourism economy",
                    "University of West Florida research & technology park",
                    "Escambia & Santa Rosa County industrial zones",
                    "60 miles east of Mobile via I-10 — same-day service",
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
              Freight & Logistics Services in Pensacola
            </h2>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
              Comprehensive freight solutions serving Pensacola&apos;s defense
              installations, aerospace manufacturers, hospitality industry, and
              commercial businesses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Shield className="w-6 h-6" />}
              title="Defense & Military Logistics"
              description="Secure freight transportation for NAS Pensacola, Corry Station, and defense contractors throughout the Pensacola metro area. Experienced with military shipping protocols."
              href="/government-municipal-logistics"
              features={[
                "Military installation deliveries",
                "Security-cleared drivers",
                "Government freight compliance",
                "Base access coordination",
              ]}
            />
            <ServiceCard
              icon={<Truck className="w-6 h-6" />}
              title="Asset-Based Trucking"
              description="Company-owned trucks providing guaranteed capacity on the Mobile-Pensacola I-10 corridor and throughout Northwest Florida with reliable scheduling."
              href="/asset-based-trucking"
              features={[
                "I-10 corridor dedicated runs",
                "Dry van & flatbed fleet",
                "Same-day Pensacola service",
                "GPS tracking & real-time ETAs",
              ]}
            />
            <ServiceCard
              icon={<Plane className="w-6 h-6" />}
              title="Aerospace Supply Chain"
              description="Precision freight handling for aircraft components, MRO parts, and aerospace manufacturing shipments requiring time-critical delivery and careful handling."
              href="/logistics-for-manufacturing"
              features={[
                "White-glove component handling",
                "Time-critical deliveries",
                "Chain-of-custody documentation",
                "AOG emergency response",
              ]}
            />
            <ServiceCard
              icon={<Anchor className="w-6 h-6" />}
              title="Port of Pensacola Services"
              description="Drayage and freight coordination through the Port of Pensacola for project cargo, breakbulk, and general freight shipments arriving by vessel."
              href="/gulf-coast-container-drayage"
              features={[
                "Port drayage services",
                "Project cargo coordination",
                "Breakbulk handling",
                "Inland transport connections",
              ]}
            />
            <ServiceCard
              icon={<Package className="w-6 h-6" />}
              title="Freight Brokerage"
              description="Extended reach through our brokerage network for Pensacola shippers needing long-haul capacity, specialized equipment, or Florida-wide distribution."
              href="/freight-brokerage"
              features={[
                "National carrier access",
                "Florida distribution network",
                "Competitive rate sourcing",
                "Single-point accountability",
              ]}
            />
            <ServiceCard
              icon={<Building2 className="w-6 h-6" />}
              title="Hospitality & Tourism Freight"
              description="Reliable supply chain support for Pensacola Beach hotels, downtown restaurants, and entertainment venues with delivery schedules that work around peak tourist hours."
              href="/retail-distribution-logistics"
              features={[
                "Hotel & resort provisioning",
                "Restaurant supply delivery",
                "Seasonal capacity flexibility",
                "Off-peak delivery scheduling",
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
              Why Pensacola Is a Key Gulf Coast Logistics Market
            </h2>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
              Pensacola&apos;s defense heritage, aerospace growth, and tourism economy
              create a logistics landscape that rewards regional knowledge and reliable
              capacity.
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
              Pensacola Freight Services FAQs
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
              Request a Quote for Pensacola Freight Services
            </h2>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
              From defense shipments at NAS Pensacola to hospitality deliveries on
              Pensacola Beach, our team is ready to move your freight. Call{" "}
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
        title="Pensacola's Gulf Coast Freight Partner"
        description="Just one hour from our Mobile headquarters, Pensacola gets the same asset-based reliability and local expertise that has made Fairway Logistics the Gulf Coast's trusted logistics provider."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call 251-725-1929"
        secondaryButtonHref="tel:251-725-1929"
      />
    </>
  );
}
