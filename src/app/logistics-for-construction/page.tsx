import type { Metadata } from "next";
import {
  HardHat,
  Clock,
  CheckCircle,
  Truck,
  Package,
  Shield,
  MapPin,
  Weight,
  Ruler,
  Building2,
  ArrowRight,
  Boxes,
  AlertTriangle,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Construction & Materials Logistics | Fairway Logistics",
  description:
    "Construction freight and building materials logistics in Alabama and the Gulf Coast. Heavy equipment transport, aggregate hauling, steel delivery, and project-site logistics for contractors and developers. Fairway Logistics LLC.",
  keywords: [
    "construction freight Alabama",
    "building materials logistics Gulf Coast",
    "heavy equipment transport Mobile",
    "aggregate hauling Alabama",
    "steel delivery Gulf Coast",
    "construction logistics services",
    "flatbed trucking construction",
    "project-site freight delivery",
  ],
  openGraph: {
    title: "Construction & Materials Logistics | Fairway Logistics",
    description:
      "Specialized freight solutions for construction projects. Building materials, heavy equipment, aggregate, and steel delivery across the Gulf Coast.",
    url: "https://fairwaylogisticsllc.com/logistics-for-construction",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Construction & Materials Logistics - Fairway Logistics",
      },
    ],
  },
};

/* ---------- Data ---------- */

const challenges = [
  {
    icon: Clock,
    title: "Project Timeline Pressure",
    description:
      "Construction projects operate on rigid schedules where a single late material delivery can idle an entire crew and cascade into costly delays. General contractors and subcontractors need freight partners who commit to delivery windows and consistently meet them. Our asset-based fleet gives us direct control over dispatching, ensuring your materials arrive when your crew is ready to install them.",
  },
  {
    icon: Weight,
    title: "Heavy & Oversized Loads",
    description:
      "Construction freight is not standard freight. Steel beams, precast concrete, heavy equipment, and oversized structural components require flatbed expertise, proper load securement, and sometimes permit coordination for oversize loads. Fairway operates flatbed and step deck trailers with drivers trained in heavy and irregular load handling.",
  },
  {
    icon: MapPin,
    title: "Difficult Job Site Access",
    description:
      "Construction sites are not loading docks. They are often unpaved, congested, and difficult to navigate with a full-size tractor-trailer. Our drivers have experience delivering to active construction sites with limited access, coordinating with site foremen, and adapting to the changing conditions that are typical on developing project sites.",
  },
  {
    icon: AlertTriangle,
    title: "Material Sequencing & Staging",
    description:
      "Construction projects require materials to arrive in a specific sequence — you cannot install drywall before the framing lumber arrives. Fairway coordinates material sequencing logistics so that your deliveries align with your construction schedule, reducing on-site storage needs and keeping your project on track.",
  },
  {
    icon: Shield,
    title: "Damage Prevention",
    description:
      "Building materials are susceptible to damage during transit. Lumber can warp, glass can break, finishes can scratch, and moisture-sensitive materials can be ruined by exposure. Our drivers use proper dunnage, tarping, and securement techniques to protect your materials from the yard to the job site.",
  },
];

const services = [
  {
    icon: Truck,
    title: "Flatbed & Heavy Haul",
    description:
      "Purpose-built for construction freight. Our flatbed fleet handles steel, lumber, precast concrete, structural components, and other materials that require open-deck loading and specialized securement.",
    features: [
      "48-foot and 53-foot flatbeds",
      "Step deck trailers available",
      "Oversize load coordination",
      "Certified load securement",
    ],
  },
  {
    icon: Boxes,
    title: "Building Materials Transport",
    description:
      "From lumber yards to job sites, we move the full range of building materials that commercial and residential construction projects require. Dry van and flatbed options based on material type and protection needs.",
    features: [
      "Lumber and engineered wood",
      "Roofing and siding materials",
      "Drywall and insulation",
      "Plumbing and electrical supplies",
    ],
  },
  {
    icon: Building2,
    title: "Project-Site Logistics",
    description:
      "Construction logistics is more than trucking — it is coordinating deliveries to align with your build schedule. We work with your project managers to sequence material deliveries, manage staging, and minimize site congestion.",
    features: [
      "Delivery scheduling coordination",
      "Material sequencing plans",
      "Multi-site delivery routes",
      "Crane-ready load positioning",
    ],
  },
  {
    icon: Ruler,
    title: "Aggregate & Bulk Materials",
    description:
      "Sand, gravel, crushed stone, fill dirt, and other aggregates are the foundation of every construction project. We provide reliable bulk material hauling to keep your site supplied without interruption.",
    features: [
      "Sand and gravel hauling",
      "Crushed stone delivery",
      "Fill and base material",
      "Scheduled recurring deliveries",
    ],
  },
];

const materialTypes = [
  "Structural Steel & Rebar",
  "Lumber & Engineered Wood",
  "Precast Concrete Panels",
  "Roofing Materials",
  "HVAC Equipment",
  "Electrical Switchgear",
  "Plumbing Fixtures & Pipe",
  "Glass & Curtain Wall Systems",
  "Drywall & Interior Finishes",
  "Aggregate & Fill Materials",
  "Heavy Construction Equipment",
  "Modular & Prefab Components",
];

const faqs = [
  {
    question: "Can you deliver to active construction sites with limited access?",
    answer:
      "Yes. Our drivers have extensive experience delivering to active construction sites, including sites with unpaved access roads, tight turning radii, and limited staging areas. We coordinate with your site foreman or project manager before delivery to understand site conditions, preferred entry points, and any access restrictions. Our goal is to get your materials where you need them without disrupting other work on-site.",
  },
  {
    question: "What types of construction materials can you haul?",
    answer:
      "We transport virtually every type of construction material including structural steel, rebar, lumber, engineered wood products, precast concrete, roofing materials, HVAC equipment, plumbing and electrical supplies, drywall, insulation, glass, aggregate, and heavy construction equipment. Our fleet includes dry vans for weather-sensitive materials and flatbeds for steel, lumber, and oversized items.",
  },
  {
    question: "Do you handle oversize or overweight construction loads?",
    answer:
      "Yes. We regularly transport oversize and overweight construction freight including steel beams, precast panels, heavy equipment, and modular building components. For loads that exceed standard legal dimensions or weight limits, we coordinate the required permits, route planning, and escort vehicles. Contact us with your load specifications and we will provide a complete solution.",
  },
  {
    question: "Can you provide recurring scheduled deliveries to a construction project?",
    answer:
      "Absolutely. Many of our construction clients require recurring deliveries on a set schedule — for example, weekly aggregate deliveries or bi-weekly material drops aligned with their construction phases. We set up dedicated routes and schedules for ongoing projects, giving you consistent delivery times, the same driver familiarity with your site, and volume-based pricing.",
  },
];

/* ---------- Page ---------- */

export default function LogisticsForConstructionPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Construction & Materials Freight Solutions"
        subtitle="Asset-based freight for construction projects across the Gulf Coast. Building materials, heavy equipment, aggregate hauling, and project-site logistics — delivered on your build schedule."
        breadcrumbs={[
          { label: "Industries" },
          { label: "Construction & Materials" },
        ]}
        backgroundImage="/images/truck-road.jpg"
      />

      {/* TRUST BADGES */}
      <TrustBadges variant="light" />

      {/* INDUSTRY OVERVIEW */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
                Construction Industry
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
                The Gulf Coast Construction Boom{" "}
                <span className="text-gold-gradient">Needs Reliable Freight.</span>
              </h2>

              <div className="gold-border-left pl-6 mb-6">
                <p className="text-navy-300 leading-relaxed text-lg">
                  From commercial developments in downtown Mobile to
                  infrastructure projects along the I-10 corridor, the Gulf
                  Coast is in the middle of a sustained construction boom —
                  and every project needs materials delivered on time.
                </p>
              </div>

              <p className="text-navy-300 leading-relaxed mb-6">
                The construction industry across Alabama, Mississippi, and the
                broader Gulf Coast region is experiencing record activity.
                New commercial developments, residential subdivisions,
                industrial facilities, infrastructure upgrades, and hurricane
                recovery projects are all driving demand for dependable
                construction freight services. General contractors,
                subcontractors, and material suppliers need logistics partners
                who understand the unique demands of construction delivery —
                tight schedules, heavy loads, difficult site access, and the
                critical importance of material sequencing.
              </p>

              <p className="text-navy-300 leading-relaxed mb-8">
                Fairway Logistics provides asset-based construction freight
                services throughout the Gulf Coast. Our company-owned fleet
                includes the flatbed, step deck, and dry van trailers that
                construction projects require, driven by professionals who
                understand job-site delivery. We do not rely on brokers to
                find trucks — we dispatch our own equipment, which means
                guaranteed capacity and accountability on every load.
              </p>

              <div className="space-y-3">
                {[
                  "Flatbed fleet for steel, lumber, and heavy materials",
                  "Job-site delivery by experienced drivers",
                  "Material sequencing and scheduling coordination",
                  "Oversize and heavy-haul capabilities",
                  "Serving the Gulf Coast construction corridor",
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
                  src="/images/truck-road.jpg"
                  alt="Construction site receiving material delivery"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-gold-400/10" />
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-16 sm:py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Construction Challenges
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Freight Challenges in Construction
            </h2>
            <p className="text-navy-400 mt-4 max-w-2xl mx-auto">
              Construction freight is unlike standard commercial shipping.
              Here are the challenges we solve for contractors and material
              suppliers every day.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, i) => (
              <div
                key={challenge.title}
                className={`bg-navy-950 rounded-xl border border-navy-800 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up stagger-${Math.min(i + 1, 6)}`}
              >
                <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center mb-4">
                  <challenge.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  {challenge.title}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIZED SERVICES */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Specialized Construction Freight Services
            </h2>
            <p className="text-navy-400 mt-4 max-w-2xl mx-auto">
              Purpose-built logistics for the construction industry, from bulk
              aggregates to precision-scheduled material deliveries.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`bg-navy-900 rounded-xl border border-navy-800 p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-navy-300 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                      <span className="text-sm text-navy-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIAL TYPES */}
      <section className="py-16 sm:py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              What We Haul
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Construction Materials We Transport
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {materialTypes.map((material, i) => (
              <div
                key={material}
                className="bg-navy-950 rounded-xl border border-navy-800 p-4 flex items-center gap-3 hover:shadow-lg hover:border-gold/30 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-sm font-medium text-white">{material}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Common Questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Construction Freight FAQ
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-navy-900 rounded-xl border border-navy-800 p-6"
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
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Request a Construction Freight Quote
            </h2>
            <p className="text-navy-300 max-w-2xl mx-auto">
              Tell us about your construction project freight needs. We will
              provide a competitive rate and delivery plan tailored to your
              build schedule.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Build With Confidence"
        description="Partner with an asset-based carrier that understands construction logistics. Reliable material delivery, heavy-haul capability, and the job-site expertise your project demands."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
