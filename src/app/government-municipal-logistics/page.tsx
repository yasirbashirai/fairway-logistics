import type { Metadata } from "next";
import {
  Landmark,
  Clock,
  CheckCircle,
  Truck,
  Shield,
  FileCheck,
  Users,
  AlertTriangle,
  MapPin,
  Lock,
  Award,
  Building,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Government & Municipal Logistics | Fairway Logistics",
  description:
    "Government and municipal logistics services in the Southeast. Federal, state, and local government freight, military base support, emergency logistics, and compliance with government procurement requirements. Fairway Logistics LLC.",
  keywords: [
    "government freight services Southeast",
    "municipal logistics Alabama",
    "military base logistics Gulf Coast",
    "government contract trucking",
    "emergency disaster logistics",
    "federal freight services",
    "government procurement compliance",
    "municipal supply chain services",
  ],
  openGraph: {
    title: "Government & Municipal Logistics | Fairway Logistics",
    description:
      "Specialized logistics for government agencies. Federal, state, and local government freight, military base support, and emergency response logistics.",
    url: "https://fairwaylogisticsllc.com/government-municipal-logistics",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Government & Municipal Logistics - Fairway Logistics",
      },
    ],
  },
};

/* ---------- Data ---------- */

const capabilities = [
  {
    icon: Landmark,
    title: "Federal Government Freight",
    description:
      "Fairway Logistics provides freight services for federal government agencies with full compliance to federal procurement standards. We understand the documentation requirements, chain-of-custody protocols, and accountability standards that federal contracts demand. Our asset-based model gives government agencies the transparency and control they require — your freight is on our trucks with our drivers, fully trackable from origin to destination.",
    features: [
      "Federal procurement compliance",
      "Chain-of-custody documentation",
      "Security-cleared personnel available",
      "Detailed reporting and invoicing",
    ],
  },
  {
    icon: Building,
    title: "State & Local Government",
    description:
      "State departments of transportation, county governments, municipal public works, and local agencies throughout Alabama, Mississippi, and the Gulf Coast region rely on Fairway for dependable freight services. From road maintenance materials to office supplies and equipment, we handle the logistics that keep government operations running.",
    features: [
      "State procurement compliance",
      "Municipal supply chain support",
      "Public works material delivery",
      "Government fleet supplementation",
    ],
  },
  {
    icon: Shield,
    title: "Military Base Support",
    description:
      "The Gulf Coast is home to several major military installations including Brookley Industrial Complex in Mobile, Keesler Air Force Base in Biloxi, Naval Air Station Pensacola, and Stennis Space Center in Mississippi. Fairway provides freight logistics support for military base operations including supply delivery, equipment transport, and construction material hauling for base improvement projects.",
    features: [
      "Military installation access",
      "Base supply chain logistics",
      "Construction material delivery",
      "Equipment and asset transport",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Emergency & Disaster Logistics",
    description:
      "The Gulf Coast is no stranger to hurricanes, tropical storms, and natural disasters. When disaster strikes, government agencies need immediate freight capacity to move emergency supplies, equipment, and relief materials. As an asset-based carrier with trucks and drivers in the Gulf Coast region, Fairway can deploy quickly when emergency logistics support is needed — no waiting for brokers to source capacity.",
    features: [
      "Rapid deployment capability",
      "Emergency supply transport",
      "Debris removal support",
      "FEMA coordination experience",
    ],
  },
];

const complianceItems = [
  {
    icon: FileCheck,
    title: "Procurement Standards",
    description:
      "We maintain compliance with federal, state, and local procurement standards including SAM.gov registration, required insurance minimums, and small business certifications. Our billing and documentation processes meet the audit requirements of government contracts.",
  },
  {
    icon: Lock,
    title: "Security & Vetting",
    description:
      "Our drivers undergo thorough background checks and can obtain additional security clearances as required by specific government contracts. We maintain TWIC cards for facility access and follow all security protocols required by military and federal installations.",
  },
  {
    icon: Award,
    title: "Insurance & Bonding",
    description:
      "Fairway carries insurance coverage that meets or exceeds government contract requirements including commercial auto liability, cargo insurance, general liability, and workers compensation. We provide certificates of insurance promptly upon request.",
  },
  {
    icon: FileCheck,
    title: "Reporting & Accountability",
    description:
      "Government agencies require detailed reporting on shipment status, delivery confirmation, and cost accounting. We provide comprehensive documentation including electronic proof of delivery, detailed invoicing with required cost breakdowns, and shipment tracking reports.",
  },
];

const governmentExperience = [
  {
    title: "Municipal Public Works",
    description:
      "Delivering road materials, infrastructure supplies, water system components, and maintenance equipment for city and county public works departments across the Gulf Coast.",
  },
  {
    title: "Military Installation Support",
    description:
      "Providing freight logistics for Gulf Coast military bases including supply delivery, construction materials for base improvements, and equipment transport.",
  },
  {
    title: "State DOT Projects",
    description:
      "Hauling construction materials, signage, barriers, and equipment for Alabama and Mississippi Department of Transportation road and bridge projects.",
  },
  {
    title: "Emergency Response",
    description:
      "Deploying trucks rapidly for hurricane preparedness, storm recovery, emergency supply distribution, and disaster relief efforts throughout the Gulf Coast region.",
  },
];

const faqs = [
  {
    question: "Is Fairway Logistics registered for government contracts?",
    answer:
      "Yes. Fairway Logistics is registered in SAM.gov and maintains all required registrations and certifications for federal government contracting. We also comply with state and local procurement requirements across Alabama, Mississippi, Louisiana, and Florida. If your agency has specific registration or certification requirements, contact us and we will ensure we meet them.",
  },
  {
    question: "Can you provide freight services to military bases on the Gulf Coast?",
    answer:
      "Yes. We regularly provide freight services to and from military installations in the Gulf Coast region. Our drivers can obtain the required access credentials for military base deliveries, and we follow all security protocols and entry procedures that military installations require. Our asset-based model ensures that the same trained, vetted drivers consistently serve your military logistics needs.",
  },
  {
    question: "How quickly can you deploy trucks for emergency logistics?",
    answer:
      "As an asset-based carrier with trucks and drivers stationed in the Gulf Coast region, we can deploy freight capacity within hours of an emergency activation. During hurricane season, we pre-position resources and maintain emergency response plans so that when a storm hits, we are ready to move emergency supplies, equipment, and relief materials immediately. We have supported emergency logistics during multiple Gulf Coast weather events.",
  },
  {
    question: "What documentation and reporting do you provide for government shipments?",
    answer:
      "We provide comprehensive documentation tailored to government requirements including electronic proof of delivery, detailed cost-coded invoicing, shipment tracking reports, driver and equipment records, and any additional documentation your contract requires. We understand that government agencies have strict audit and accountability standards, and our documentation processes are designed to meet them.",
  },
];

/* ---------- Page ---------- */

export default function GovernmentMunicipalLogisticsPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Government & Municipal Logistics Services"
        subtitle="Asset-based freight solutions for federal, state, and local government agencies. Military base support, emergency logistics, and full compliance with government procurement standards."
        breadcrumbs={[
          { label: "Industries" },
          { label: "Government & Municipal" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=1920&q=80"
      />

      {/* TRUST BADGES */}
      <TrustBadges variant="light" />

      {/* CAPABILITIES OVERVIEW */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Government Logistics
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700 mb-6">
              Reliable Freight for{" "}
              <span className="text-gold-gradient">Government Operations.</span>
            </h2>

            <div className="gold-border-left pl-6 mb-6">
              <p className="text-neutral-600 leading-relaxed text-lg">
                Government agencies at every level need logistics partners
                who deliver on time, maintain full compliance, and provide
                the accountability that public-sector operations demand.
                Fairway Logistics serves this sector with an asset-based
                model that eliminates the uncertainty of broker-dependent
                freight.
              </p>
            </div>

            <p className="text-neutral-600 leading-relaxed mb-6">
              The Southeast United States is home to dozens of federal
              agencies, military installations, state departments, and
              municipal governments that require consistent, reliable freight
              services. From routine supply deliveries to emergency disaster
              response logistics, government operations depend on carriers
              who can meet strict procurement standards, provide detailed
              documentation, and deliver with the accountability that
              taxpayer-funded operations require.
            </p>

            <p className="text-neutral-600 leading-relaxed">
              Fairway Logistics is uniquely positioned to serve government
              clients as an asset-based carrier headquartered in Mobile,
              Alabama — a city with deep connections to military operations,
              port commerce, and Gulf Coast government infrastructure. Our
              company-owned fleet gives government agencies a direct
              relationship with the carrier hauling their freight, not a
              broker searching for available trucks. This means guaranteed
              capacity, consistent driver quality, transparent pricing, and
              the documentation trail that government contracts require.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`bg-neutral-50 rounded-xl border border-neutral-200 p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center">
                    <cap.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-dark-700">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  {cap.description}
                </p>
                <ul className="space-y-2">
                  {cap.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                      <span className="text-sm text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE & SECURITY */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Compliance & Security
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700">
              Meeting Government Standards
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              Government logistics requires a higher standard of compliance,
              documentation, and accountability. Here is how Fairway meets
              these requirements.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceItems.map((item, i) => (
              <div
                key={item.title}
                className={`bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-heading font-bold text-dark-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNMENT EXPERIENCE */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Our Experience
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700">
              Government Sector Experience
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {governmentExperience.map((exp, i) => (
              <div
                key={exp.title}
                className={`bg-neutral-50 rounded-xl border border-neutral-200 p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Landmark className="w-6 h-6 text-gold-400" />
                  <h3 className="text-lg font-heading font-bold text-dark-700">
                    {exp.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Common Questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700">
              Government Logistics FAQ
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-neutral-200 p-6"
              >
                <h3 className="text-lg font-heading font-bold text-dark-700 mb-3">
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
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Request a Government Logistics Quote
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Tell us about your government agency&apos;s freight requirements.
              We will provide a compliant, competitive solution tailored to
              your needs.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Freight Services Government Agencies Can Trust"
        description="Partner with an asset-based carrier that understands government procurement, compliance, and accountability. Reliable freight for public-sector operations."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
