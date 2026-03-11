import Link from "next/link";
import type { Metadata } from "next";
import {
  Anchor,
  Truck,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  MapPin,
  Package,
  RotateCcw,
  Zap,
  Ship,
  Container,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Port of Mobile Drayage Services | Fairway Logistics",
  description:
    "Reliable container drayage services at the Port of Mobile, AL. Asset-based fleet with fast turnaround, chassis availability, and deep port relationships. Import & export drayage by Fairway Logistics.",
  keywords: [
    "Port of Mobile drayage",
    "container drayage Mobile AL",
    "drayage services Port of Mobile",
    "APM Terminals drayage",
    "intermodal drayage Mobile Alabama",
    "import export drayage Gulf Coast",
    "chassis management Mobile",
  ],
  openGraph: {
    title: "Port of Mobile Drayage Services | Fairway Logistics",
    description:
      "Asset-based container drayage at the Port of Mobile. Fast turnaround, chassis availability, and trusted port relationships.",
    url: "https://fairwaylogisticsllc.com/port-of-mobile-drayage",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Port of Mobile Drayage Services - Fairway Logistics",
      },
    ],
  },
};

/* ---------- Data ---------- */

const benefits = [
  {
    icon: Truck,
    title: "Asset-Based Fleet",
    description:
      "Our company-owned trucks and chassis mean guaranteed capacity at the port — no scrambling for third-party carriers during peak volumes.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround Times",
    description:
      "With priority gate access and experienced drivers who know every terminal lane, we consistently deliver some of the fastest turn times at the port.",
  },
  {
    icon: RotateCcw,
    title: "Chassis Availability",
    description:
      "We maintain our own chassis pool and have agreements with major chassis providers, eliminating the delays that plague broker-dependent operations.",
  },
  {
    icon: Shield,
    title: "Port Relationships",
    description:
      "Years of reliable operations at APM Terminals and other Port of Mobile facilities have earned us preferred carrier status and priority scheduling.",
  },
  {
    icon: Zap,
    title: "Real-Time Tracking",
    description:
      "GPS tracking on every container move gives you full visibility from port pickup through final delivery, with automated status updates.",
  },
  {
    icon: Package,
    title: "Import & Export Handling",
    description:
      "Whether you are importing raw materials or exporting finished goods, our team manages the entire drayage cycle including empty returns.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Container Notification",
    description:
      "We monitor vessel arrivals and container availability at APM Terminals. As soon as your container is discharged and cleared, we receive the notification and begin scheduling.",
  },
  {
    step: "02",
    title: "Dispatch & Pickup",
    description:
      "Our local drivers, who know the port layout intimately, are dispatched to the terminal. With our own chassis and priority gate access, we pick up your container quickly.",
  },
  {
    step: "03",
    title: "Secure Transport",
    description:
      "Your container is transported on our company-owned equipment with GPS tracking. You receive real-time status updates via our tracking system throughout transit.",
  },
  {
    step: "04",
    title: "Delivery & Return",
    description:
      "We deliver to your warehouse, distribution center, or rail terminal. After unloading, we handle the empty container return to the port, completing the drayage cycle.",
  },
];

const faqs = [
  {
    question: "What is container drayage at the Port of Mobile?",
    answer:
      "Container drayage is the short-haul transportation of shipping containers between the Port of Mobile terminals (primarily APM Terminals) and local warehouses, distribution centers, rail yards, or other nearby destinations. It is a critical first and last mile in the international supply chain, and Fairway Logistics specializes in providing fast, reliable drayage with our own fleet of trucks and chassis.",
  },
  {
    question: "How fast can you pick up a container once it is available?",
    answer:
      "In most cases, we can pick up a container within 2-4 hours of it becoming available at the terminal. Our drivers are based locally in Mobile, and our strong relationships with APM Terminals give us priority gate access. We monitor vessel schedules proactively so we can pre-position drivers for the fastest possible turnaround.",
  },
  {
    question: "Do you provide chassis for container drayage?",
    answer:
      "Yes. Fairway Logistics maintains our own chassis pool and has agreements with major chassis providers at the Port of Mobile. This means you never have to worry about chassis shortages or delays — we handle all chassis management as part of our drayage service at no additional hassle to you.",
  },
  {
    question: "What is the service area for Port of Mobile drayage?",
    answer:
      "Our standard drayage service area covers a 100-mile radius from the Port of Mobile, including all of Mobile County, Baldwin County, the greater Mobile metropolitan area, and extending into Mississippi and the Florida panhandle. For destinations beyond this radius, we offer extended drayage and full truckload services.",
  },
  {
    question: "Can you handle both import and export containers?",
    answer:
      "Absolutely. We provide full-cycle drayage for both import and export containers. For imports, we pick up loaded containers and deliver them to your facility, then return the empty. For exports, we pick up loaded containers from your facility and deliver them to the port terminal for loading onto outbound vessels.",
  },
];

const serviceAreas = [
  "Mobile, AL",
  "Prichard, AL",
  "Saraland, AL",
  "Theodore, AL",
  "Daphne, AL",
  "Fairhope, AL",
  "Spanish Fort, AL",
  "Bay Minette, AL",
  "Pascagoula, MS",
  "Biloxi, MS",
  "Pensacola, FL",
  "Atmore, AL",
];

/* ---------- Page ---------- */

export default function PortOfMobileDrayagePage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Port of Mobile Drayage Services"
        subtitle="Asset-based container drayage with fast turnaround, dedicated chassis, and deep relationships at APM Terminals and the Port of Mobile."
        breadcrumbs={[
          { label: "Services", href: "/gulf-coast-logistics" },
          { label: "Port of Mobile Drayage" },
        ]}
        backgroundImage="/images/gulf-coast.jpg"
      />

      {/* TRUST BADGES */}
      <TrustBadges variant="light" />

      {/* SERVICE OVERVIEW */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/gulf-coast.jpg"
                  alt="Aerial view of Port of Mobile container terminal operations"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-gold-400/10" />
            </div>

            <div>
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
                Port of Mobile Drayage
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
                Your Trusted Drayage Partner at{" "}
                <span className="text-gold-gradient">the Port of Mobile</span>
              </h2>

              <div className="gold-border-left pl-6 mb-6">
                <p className="text-navy-300 leading-relaxed text-lg">
                  The Port of Mobile is one of the fastest-growing container ports
                  on the Gulf Coast, and Fairway Logistics has been a trusted
                  drayage provider here since day one.
                </p>
              </div>

              <p className="text-navy-300 leading-relaxed mb-6">
                As an asset-based carrier with company-owned trucks and chassis, we
                provide the kind of reliability that broker-dependent drayage
                companies simply cannot match. Our drivers know every gate, every
                lane, and every process at APM Terminals — the primary container
                terminal at the Port of Mobile. That familiarity translates into
                faster pickups, fewer delays, and lower per-container costs for
                our clients.
              </p>

              <p className="text-navy-300 leading-relaxed mb-8">
                Whether you are importing containerized cargo from Asia, Europe, or
                Latin America, or exporting goods through the Port of Mobile, our
                drayage services cover the complete cycle: container pickup, secure
                transport, delivery to your facility, and empty return. We also
                coordinate with rail terminals for intermodal connections, making us
                your single point of contact for first-mile and last-mile container
                movements.
              </p>

              <div className="space-y-3">
                {[
                  "Company-owned trucks and chassis at the port",
                  "Priority gate access at APM Terminals",
                  "Import and export container handling",
                  "Intermodal rail connections available",
                  "Same-day pickup when containers are available",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="py-16 sm:py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Why Fairway
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              The Fairway Drayage Advantage
            </h2>
            <p className="text-navy-400 mt-4 max-w-2xl mx-auto">
              Our asset-based approach to Port of Mobile drayage delivers
              measurable benefits that keep your supply chain moving.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`bg-navy-950 rounded-xl border border-navy-800 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              How Port of Mobile Drayage Works
            </h2>
            <p className="text-navy-400 mt-4 max-w-2xl mx-auto">
              From vessel arrival to final delivery, our streamlined process
              ensures your containers move efficiently.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, i) => (
              <div key={item.step} className={`relative animate-fade-in-up stagger-${i + 1}`}>
                <div className="text-5xl font-heading font-bold text-gold-400/20 mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed">
                  {item.description}
                </p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-gold-400/30">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-16 sm:py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
                Coverage Area
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
                Port of Mobile Drayage Service Area
              </h2>
              <p className="text-navy-300 leading-relaxed mb-6">
                Our standard drayage service covers a 100-mile radius from the Port
                of Mobile, encompassing all major commercial and industrial areas in
                southwest Alabama, southeast Mississippi, and the Florida panhandle.
                Extended drayage services are available for destinations beyond this
                radius.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {serviceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span className="text-sm text-navy-200">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/gulf-coast.jpg"
                  alt="Container yard near Port of Mobile"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Common Questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Port of Mobile Drayage FAQ
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
              Request a Port of Mobile Drayage Quote
            </h2>
            <p className="text-navy-300 max-w-2xl mx-auto">
              Tell us about your container drayage needs and our team will
              respond with a competitive quote within 2 hours.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-16 sm:py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Explore More
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Related Services
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Ship className="w-6 h-6" />}
              title="Gulf Coast Container Drayage"
              description="Expand your reach with multi-port drayage across the entire Gulf Coast region."
              href="/gulf-coast-container-drayage"
              features={["Multi-port access", "Regional coverage", "Intermodal connections"]}
            />
            <ServiceCard
              icon={<Container className="w-6 h-6" />}
              title="Import & Export Logistics"
              description="End-to-end international freight coordination through Gulf Coast ports."
              href="/import-export-logistics"
              features={["Customs facilitation", "Documentation support", "Trade lane management"]}
            />
            <ServiceCard
              icon={<Package className="w-6 h-6" />}
              title="Warehousing & Distribution"
              description="Strategic warehousing near the Port of Mobile for seamless container deconsolidation."
              href="/warehousing-mobile-al"
              features={["Port proximity", "Cross-docking", "Inventory management"]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready for Reliable Port of Mobile Drayage?"
        description="Partner with the Gulf Coast's trusted asset-based drayage provider. Fast turnaround, competitive rates, and a team that knows the port inside and out."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
