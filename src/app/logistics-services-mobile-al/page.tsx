import type { Metadata } from "next";
import {
  Anchor,
  Truck,
  Warehouse,
  Ship,
  MapPin,
  CheckCircle,
  Package,
  Shield,
  Clock,
  Route,
  Building2,
  HardHat,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import MetricsSection from "@/components/MetricsSection";
import QuoteForm from "@/components/QuoteForm";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Logistics Services in Mobile, AL | Fairway Logistics",
  description:
    "Asset-based logistics company in Mobile, AL offering port drayage, container trucking, warehousing, and freight brokerage. Serving the Port of Mobile, I-10/I-65 corridors, and Mobile's industrial base.",
  keywords: [
    "logistics company Mobile AL",
    "Mobile Alabama logistics",
    "Port of Mobile drayage",
    "Mobile AL trucking",
    "Mobile freight services",
    "I-65 corridor logistics",
    "Mobile warehouse services",
  ],
  openGraph: {
    title: "Logistics Services in Mobile, AL | Fairway Logistics",
    description:
      "Headquartered in Mobile, AL — Fairway Logistics delivers asset-based trucking, port drayage, and warehousing across the Gulf Coast.",
    url: "https://fairwaylogisticsllc.com/logistics-services-mobile-al",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Logistics Services in Mobile, AL - Fairway Logistics",
      },
    ],
  },
};

/* ---------- Local advantages ---------- */
const localAdvantages = [
  {
    title: "Port of Mobile Access",
    description:
      "Direct drayage connections to the Port of Mobile's container terminal, bulk cargo facilities, and the APM Terminals operations — ensuring rapid cargo movement from vessel to destination.",
  },
  {
    title: "I-10 & I-65 Interchange",
    description:
      "Our headquarters at 456 Dauphin Street places us at the crossroads of two major interstate corridors, connecting the Gulf Coast east-west and reaching north to Birmingham, Nashville, and beyond.",
  },
  {
    title: "Brookley Aeroplex Proximity",
    description:
      "Located minutes from the Brookley Aeroplex — home to Airbus's A320 final assembly line and ST Engineering's aircraft MRO facilities — we support aerospace supply chain logistics daily.",
  },
  {
    title: "Industrial Manufacturing Hub",
    description:
      "Mobile's industrial base includes Austal USA's shipbuilding operations, the AM/NS Calvert steel mill, and dozens of chemical manufacturers along the Mobile River, all requiring specialized freight handling.",
  },
];

/* ---------- FAQ ---------- */
const faqs = [
  {
    question: "How quickly can you pick up containers from the Port of Mobile?",
    answer:
      "As a Mobile-based asset carrier, we typically arrange same-day container pickup from the Port of Mobile's APM Terminals facility. Our drivers are familiar with the port's gate procedures, chassis pools, and terminal layouts, allowing us to minimize dwell time and get your cargo moving within hours of vessel discharge.",
  },
  {
    question: "Do you serve the AM/NS Calvert steel mill and other heavy industrial sites?",
    answer:
      "Yes. We regularly haul flatbed and specialized loads to and from the AM/NS Calvert steel mill north of Mobile, as well as chemical plants along the Mobile River industrial corridor. Our drivers hold TWIC cards and are trained in hazmat and heavy-haul safety protocols required at these facilities.",
  },
  {
    question: "What areas around Mobile do you cover for local delivery?",
    answer:
      "From our Dauphin Street headquarters, we provide same-day and next-day delivery throughout Mobile County, including Prichard, Saraland, Chickasaw, Theodore, and the industrial zones along Highway 43 and the I-65 corridor north to Satsuma and Citronelle.",
  },
  {
    question: "Can you handle Airbus and aerospace supply chain shipments from Brookley?",
    answer:
      "Absolutely. We work with aerospace suppliers and contractors operating at the Brookley Aeroplex, transporting oversized components, tooling, and JIT parts deliveries. Our team understands the precision timing and security requirements that aerospace logistics demand.",
  },
];

export default function LogisticsServicesMobileAL() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <PageHero
        title="Logistics Services in Mobile, Alabama"
        subtitle="Headquartered on Dauphin Street in the heart of Mobile — your asset-based logistics partner for port drayage, trucking, warehousing, and freight brokerage across the Gulf Coast."
        backgroundImage="/images/hero.jpg"
        breadcrumbs={[
          { label: "Gulf Coast Logistics", href: "/gulf-coast-logistics" },
          { label: "Mobile, AL" },
        ]}
      />

      {/* ---------- Regional Overview ---------- */}
      <section className="py-16 sm:py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in-up">
              <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">
                Our Home Base
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2 mb-6">
                Mobile, Alabama: Where Gulf Coast Logistics Begins
              </h2>
              <div className="space-y-4 text-navy-300 leading-relaxed">
                <p>
                  Mobile is more than our home — it is the logistical nerve center of the
                  central Gulf Coast. Situated where the Mobile River meets Mobile Bay,
                  this port city has been a vital trade gateway since the French founded it
                  in 1702. Today, Mobile ranks among the fastest-growing container ports in
                  North America, and Fairway Logistics is proud to operate from the center
                  of it all at 456 Dauphin Street, Mobile, AL 36602.
                </p>
                <p>
                  The Port of Mobile handles over 60 million tons of cargo annually,
                  including containerized goods, steel, coal, and forest products. With the
                  port&apos;s recent expansion of its container terminal and the deepening of
                  the ship channel to 50 feet, Mobile is positioned to capture even more
                  international trade. As a logistics company in Mobile, AL, Fairway
                  Logistics provides the critical last-mile and regional distribution
                  services that connect the port to manufacturers, retailers, and
                  construction sites across the Southeast.
                </p>
                <p>
                  Mobile&apos;s strategic position at the junction of Interstate 10 (the
                  southern transcontinental corridor) and Interstate 65 (the north-south
                  spine connecting the Gulf to the Great Lakes) makes it an ideal hub for
                  freight distribution. Whether your cargo arrives by vessel at the Port of
                  Mobile, by rail on CSX or Norfolk Southern lines, or by truck from the
                  Brookley Aeroplex, our fleet and brokerage network can move it where it
                  needs to go — on time and within budget.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-up stagger-2">
              <div className="bg-navy-900 rounded-xl p-8 border border-navy-800">
                <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold-400" />
                  Mobile at a Glance
                </h3>
                <ul className="space-y-4">
                  {[
                    "Port of Mobile: 60M+ tons of cargo annually",
                    "Airbus A320 final assembly at Brookley Aeroplex",
                    "Austal USA: largest aluminum shipbuilder in the Western Hemisphere",
                    "AM/NS Calvert: 5.3M ton/year steel production facility",
                    "I-10 & I-65 interstate interchange",
                    "CSX & Norfolk Southern rail connections",
                    "Mobile Aeroplex at Brookley — 1,650-acre industrial complex",
                    "Growing petrochemical corridor along the Mobile River",
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
              What We Offer in Mobile
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2">
              Logistics Services Available in Mobile, AL
            </h2>
            <p className="text-navy-300 mt-4 max-w-2xl mx-auto">
              From port drayage at the APM Terminals container facility to last-mile
              deliveries across Mobile County, we provide end-to-end logistics solutions
              tailored to Mobile&apos;s diverse industrial landscape.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Anchor className="w-6 h-6" />}
              title="Port of Mobile Drayage"
              description="Container pickup and delivery from APM Terminals and bulk cargo facilities at the Port of Mobile. Same-day dispatch with TWIC-certified drivers."
              href="/port-of-mobile-drayage"
              features={[
                "Same-day container pickup",
                "TWIC-certified drivers",
                "Chassis pool coordination",
                "Import/export handling",
              ]}
            />
            <ServiceCard
              icon={<Truck className="w-6 h-6" />}
              title="Asset-Based Trucking"
              description="Our own fleet of trucks operating from Mobile, providing reliable capacity for local, regional, and OTR shipments along I-10 and I-65."
              href="/asset-based-trucking"
              features={[
                "Company-owned equipment",
                "Dry van & flatbed capacity",
                "GPS-tracked fleet",
                "Dedicated lane options",
              ]}
            />
            <ServiceCard
              icon={<Warehouse className="w-6 h-6" />}
              title="Mobile Warehousing"
              description="Secure warehouse facilities in the Mobile area for short-term storage, cross-docking, and transload operations supporting port and manufacturing cargo."
              href="/warehousing-mobile-al"
              features={[
                "Cross-dock capabilities",
                "Transloading services",
                "Inventory management",
                "Climate-controlled options",
              ]}
            />
            <ServiceCard
              icon={<Package className="w-6 h-6" />}
              title="Freight Brokerage"
              description="Access thousands of vetted carriers through our brokerage division for shipments beyond our fleet's reach — with the same accountability and service standards."
              href="/freight-brokerage"
              features={[
                "Vetted carrier network",
                "Competitive spot & contract rates",
                "Full shipment visibility",
                "Claims management support",
              ]}
            />
            <ServiceCard
              icon={<HardHat className="w-6 h-6" />}
              title="Industrial & Construction Freight"
              description="Specialized hauling for Mobile's shipbuilding, steel production, and construction sectors — including Austal USA, AM/NS Calvert, and heavy civil projects."
              href="/logistics-for-construction"
              features={[
                "Flatbed & step-deck loads",
                "Heavy-haul coordination",
                "Job-site delivery scheduling",
                "Permit & escort services",
              ]}
            />
            <ServiceCard
              icon={<Ship className="w-6 h-6" />}
              title="Import/Export Logistics"
              description="End-to-end management of international shipments through the Port of Mobile, including customs coordination, drayage, and inland transportation."
              href="/import-export-logistics"
              features={[
                "Customs broker coordination",
                "Bonded carrier services",
                "FCL & LCL handling",
                "Trade compliance support",
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
              Why Mobile Matters
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2">
              Strategic Advantages of Mobile, AL Logistics
            </h2>
            <p className="text-navy-300 mt-4 max-w-2xl mx-auto">
              Our headquarters in downtown Mobile places us at the epicenter of Gulf
              Coast commerce — minutes from the port, the interstates, and the region&apos;s
              largest industrial employers.
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
              Mobile, AL Logistics FAQs
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
              Request a Quote for Mobile, AL Logistics
            </h2>
            <p className="text-navy-300 mt-4 max-w-2xl mx-auto">
              Whether you need containers moved from the Port of Mobile, flatbed hauling
              to AM/NS Calvert, or warehousing in the Mobile area, our team is ready to
              build a solution. Call us at{" "}
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
        title="Mobile's Trusted Logistics Partner"
        description="From the Port of Mobile to the I-65 corridor, Fairway Logistics delivers the asset-based capacity and local expertise your supply chain demands."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call 251-725-1929"
        secondaryButtonHref="tel:251-725-1929"
      />
    </>
  );
}
