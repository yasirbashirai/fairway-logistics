import type { Metadata } from "next";
import {
  Truck,
  Warehouse,
  MapPin,
  CheckCircle,
  Package,
  TreePine,
  ShoppingBag,
  Route,
  Building2,
  Palmtree,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import MetricsSection from "@/components/MetricsSection";
import QuoteForm from "@/components/QuoteForm";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Logistics Services in Baldwin County, AL | Fairway Logistics",
  description:
    "Baldwin County logistics provider offering trucking, freight brokerage, and supply chain solutions across Foley, Daphne, Fairhope, Gulf Shores, and the Eastern Shore. I-10 corridor access.",
  keywords: [
    "Baldwin County logistics",
    "Foley AL trucking",
    "Daphne logistics",
    "Fairhope freight services",
    "Gulf Shores supply chain",
    "Eastern Shore logistics",
    "Baldwin County industrial park",
  ],
  openGraph: {
    title: "Logistics Services in Baldwin County, AL | Fairway Logistics",
    description:
      "Serving Baldwin County's growing commercial and industrial base with asset-based trucking, freight brokerage, and warehousing solutions.",
    url: "https://fairwaylogisticsllc.com/logistics-services-baldwin-county-al",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Logistics Services in Baldwin County, AL - Fairway Logistics",
      },
    ],
  },
};

/* ---------- Local advantages ---------- */
const localAdvantages = [
  {
    title: "I-10 Corridor Connectivity",
    description:
      "Baldwin County sits directly on the I-10 corridor, providing seamless east-west freight movement between Mobile, Pensacola, and the broader Gulf Coast. The Baldwin Beach Express and the Foley Beach Express further connect inland industrial areas to the coastal tourism centers.",
  },
  {
    title: "Fastest-Growing County in Alabama",
    description:
      "Baldwin County is Alabama's largest county by area and one of its fastest-growing by population. This growth drives demand for construction materials, retail distribution, restaurant supplies, and residential building logistics — all areas where Fairway Logistics excels.",
  },
  {
    title: "Expanding Industrial Parks",
    description:
      "The South Alabama Mega Site near Bay Minette, the Central Baldwin Industrial Park in Robertsdale, and the growing commercial zones along Highway 59 in Foley provide new logistics opportunities for manufacturing, food processing, and distribution operations.",
  },
  {
    title: "Agricultural & Seafood Heritage",
    description:
      "Baldwin County remains one of Alabama's most productive agricultural regions, with sod farms, nurseries, pecan orchards, and cattle operations requiring reliable freight service. The Gulf seafood industry in Bayou La Batre and along the coast adds temperature-controlled shipping demand.",
  },
];

/* ---------- FAQ ---------- */
const faqs = [
  {
    question: "Do you deliver to Gulf Shores and Orange Beach during peak tourist season?",
    answer:
      "Yes, and we understand the unique challenges of beach-season logistics. From March through October, Baldwin County's coastal communities see their populations surge with vacationers. We coordinate delivery windows to avoid peak traffic on Highway 59 and the Beach Express, schedule early-morning drops for restaurants and hotels, and maintain the scheduling flexibility needed to keep hospitality supply chains running during the busiest months.",
  },
  {
    question: "Can you handle freight to Baldwin County's new industrial developments?",
    answer:
      "Absolutely. We're actively serving the South Alabama Mega Site near Bay Minette, where major manufacturers are establishing operations, as well as industrial parks in Robertsdale, Loxley, and Summerdale. Our team stays current on access routes, delivery gate protocols, and construction-phase logistics requirements for these developing sites.",
  },
  {
    question: "How do you reach Baldwin County from your Mobile headquarters?",
    answer:
      "Our Mobile headquarters is just across Mobile Bay from Baldwin County, connected via I-10 and the George Wallace Tunnel, or through the Bankhead Tunnel and Causeway. Most Baldwin County locations — Daphne, Fairhope, Foley, Gulf Shores — are within 30 to 60 minutes of our dispatch center, enabling same-day service across the county.",
  },
  {
    question: "Do you serve the agricultural and seafood industries in Baldwin County?",
    answer:
      "Yes. We transport agricultural products from Baldwin County's farms and nurseries, as well as temperature-sensitive seafood shipments from processors along the coast. Our network includes refrigerated carriers for perishable loads, and we understand the seasonal timing that these industries demand.",
  },
];

export default function LogisticsServicesBaldwinCountyAL() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <PageHero
        title="Logistics Services in Baldwin County, Alabama"
        subtitle="From the Eastern Shore's growing commercial hubs to the Gulf Shores tourism corridor, Fairway Logistics provides reliable freight and supply chain solutions across Alabama's largest county."
        backgroundImage="/images/truck-road.jpg"
        breadcrumbs={[
          { label: "Gulf Coast Logistics", href: "/gulf-coast-logistics" },
          { label: "Baldwin County, AL" },
        ]}
      />

      {/* ---------- Regional Overview ---------- */}
      <section className="py-16 sm:py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in-up">
              <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">
                Baldwin County Coverage
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2 mb-6">
                Logistics for Alabama&apos;s Fastest-Growing Region
              </h2>
              <div className="space-y-4 text-navy-300 leading-relaxed">
                <p>
                  Baldwin County, Alabama, stretches from the Eastern Shore communities
                  of Daphne, Fairhope, and Spanish Fort along Mobile Bay to the sugar-white
                  beaches of Gulf Shores and Orange Beach on the Gulf of Mexico. In between
                  lies a rapidly expanding corridor of industrial parks, agricultural
                  operations, retail centers, and tourism infrastructure — all of which
                  depend on efficient Baldwin County logistics to keep goods flowing.
                </p>
                <p>
                  The county&apos;s commercial growth has accelerated dramatically in recent
                  years. The South Alabama Mega Site near Bay Minette has attracted major
                  manufacturing investments, while the Highway 59 corridor through Foley
                  and Robertsdale has seen an explosion of distribution centers, retail
                  developments, and food processing operations. These businesses need a
                  logistics partner that understands Baldwin County&apos;s roads, seasonal
                  traffic patterns, and delivery constraints — and that partner is Fairway
                  Logistics.
                </p>
                <p>
                  Operating from our headquarters in nearby Mobile, we serve every corner
                  of Baldwin County with asset-based trucking, freight brokerage, and
                  warehousing solutions. Whether you&apos;re shipping construction materials
                  to a new development in Spanish Fort, restocking a restaurant in
                  Fairhope&apos;s downtown district, or moving manufactured goods from Bay
                  Minette to the interstate, our drivers and dispatchers know the routes,
                  the timing, and the local requirements that make Baldwin County
                  logistics work.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-up stagger-2">
              <div className="bg-navy-900 rounded-xl p-8 border border-navy-800">
                <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold-400" />
                  Communities We Serve
                </h3>
                <ul className="space-y-4">
                  {[
                    "Daphne — Eastern Shore commercial hub",
                    "Fairhope — Downtown retail & hospitality corridor",
                    "Spanish Fort — Eastern Shore industrial & retail growth",
                    "Foley — Highway 59 distribution & food processing",
                    "Gulf Shores & Orange Beach — Coastal tourism supply chain",
                    "Bay Minette — County seat & South Alabama Mega Site",
                    "Robertsdale — Central Baldwin industrial parks",
                    "Loxley — I-10 interchange commercial zone",
                    "Summerdale — Agricultural processing & distribution",
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
              Baldwin County Logistics Solutions
            </h2>
            <p className="text-navy-300 mt-4 max-w-2xl mx-auto">
              Tailored logistics services for Baldwin County&apos;s unique mix of
              tourism, agriculture, manufacturing, and residential growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Truck className="w-6 h-6" />}
              title="Regional Trucking"
              description="Asset-based trucking from Mobile to every corner of Baldwin County. Dry van, flatbed, and specialized equipment for construction, retail, and industrial deliveries."
              href="/asset-based-trucking"
              features={[
                "Same-day Baldwin County delivery",
                "Dry van & flatbed options",
                "Seasonal capacity planning",
                "Route optimization for beach traffic",
              ]}
            />
            <ServiceCard
              icon={<ShoppingBag className="w-6 h-6" />}
              title="Retail & Hospitality Distribution"
              description="Keeping Baldwin County's booming retail corridors and Gulf Coast resorts stocked year-round with reliable delivery schedules that account for seasonal demand spikes."
              href="/retail-distribution-logistics"
              features={[
                "Restaurant & hotel supply chains",
                "Peak season capacity guarantees",
                "Early-morning delivery windows",
                "Multi-stop route consolidation",
              ]}
            />
            <ServiceCard
              icon={<Building2 className="w-6 h-6" />}
              title="Construction Material Hauling"
              description="Flatbed and heavy-haul services supporting Baldwin County's residential and commercial construction boom — from lumber and steel to roofing and concrete supplies."
              href="/logistics-for-construction"
              features={[
                "Job-site delivery coordination",
                "Flatbed & step-deck capacity",
                "Building material specialists",
                "New development access expertise",
              ]}
            />
            <ServiceCard
              icon={<Package className="w-6 h-6" />}
              title="Freight Brokerage"
              description="Connecting Baldwin County shippers with our network of vetted carriers for long-haul and specialty freight that extends beyond our own fleet's geographic range."
              href="/freight-brokerage"
              features={[
                "National carrier network access",
                "Competitive rate negotiations",
                "Full load visibility & tracking",
                "Dedicated account management",
              ]}
            />
            <ServiceCard
              icon={<TreePine className="w-6 h-6" />}
              title="Agricultural Freight"
              description="Moving Baldwin County's agricultural products — sod, nursery stock, pecans, cattle, and produce — to markets across the Southeast with reliable timing and care."
              href="/asset-based-trucking"
              features={[
                "Temperature-controlled options",
                "Farm-to-market scheduling",
                "Seasonal harvest capacity",
                "Nursery & sod transport",
              ]}
            />
            <ServiceCard
              icon={<Warehouse className="w-6 h-6" />}
              title="Cross-Docking & Storage"
              description="Short-term warehousing and cross-dock services in the Mobile area for Baldwin County businesses that need staging, consolidation, or deconsolidation of freight."
              href="/warehousing-mobile-al"
              features={[
                "Cross-dock operations",
                "Short-term cargo staging",
                "Freight consolidation",
                "Overflow storage solutions",
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
              Why Baldwin County Businesses Choose Fairway
            </h2>
            <p className="text-navy-300 mt-4 max-w-2xl mx-auto">
              We understand the seasonal rhythms, growing pains, and geographic
              complexities that define Baldwin County logistics.
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
              Baldwin County Logistics FAQs
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
              Request a Quote for Baldwin County Logistics
            </h2>
            <p className="text-navy-300 mt-4 max-w-2xl mx-auto">
              From Daphne to Gulf Shores, Fairway Logistics has Baldwin County
              covered. Call{" "}
              <a href="tel:251-725-1929" className="text-gold-400 font-semibold hover:underline">
                251-725-1929
              </a>{" "}
              or complete the form below for a customized freight quote.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <CTASection
        title="Baldwin County's Logistics Partner"
        description="Whether you're building in Bay Minette or restocking in Gulf Shores, Fairway Logistics delivers the reliable freight solutions Baldwin County's growing economy demands."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call 251-725-1929"
        secondaryButtonHref="tel:251-725-1929"
      />
    </>
  );
}
