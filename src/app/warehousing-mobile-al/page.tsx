import Link from "next/link";
import type { Metadata } from "next";
import {
  Warehouse,
  Truck,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  MapPin,
  Package,
  Zap,
  BarChart3,
  Boxes,
  ScanLine,
  RefreshCw,
  Ship,
  HandCoins,
  Container,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Warehousing & Distribution Mobile AL | Fairway Logistics",
  description:
    "Warehousing and distribution services in Mobile, AL near the Port of Mobile. Scalable warehouse space, cross-docking, inventory management, and technology-enabled distribution. Fairway Logistics LLC.",
  keywords: [
    "Mobile warehousing",
    "warehousing Mobile AL",
    "distribution center Mobile Alabama",
    "cross-docking Mobile",
    "inventory management Gulf Coast",
    "warehouse near Port of Mobile",
    "transloading services Mobile",
    "3PL warehousing Alabama",
  ],
  openGraph: {
    title: "Warehousing & Distribution Mobile AL | Fairway Logistics",
    description:
      "Strategic warehousing near the Port of Mobile. Scalable space, cross-docking, inventory management, and integrated distribution services.",
    url: "https://fairwaylogisticsllc.com/warehousing-mobile-al",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Warehousing & Distribution Mobile AL - Fairway Logistics",
      },
    ],
  },
};

/* ---------- Data ---------- */

const capabilities = [
  {
    icon: Boxes,
    title: "General Warehousing",
    description:
      "Secure, climate-monitored warehouse space for short-term and long-term storage. Racked and floor-level storage options to accommodate any inventory profile.",
  },
  {
    icon: RefreshCw,
    title: "Cross-Docking",
    description:
      "Minimize storage costs by moving freight directly from inbound to outbound trailers. Our cross-dock operation reduces handling and accelerates delivery timelines.",
  },
  {
    icon: ScanLine,
    title: "Inventory Management",
    description:
      "Barcode scanning, lot tracking, FIFO/LIFO rotation, and real-time inventory counts. Our WMS gives you complete visibility into your stock levels at all times.",
  },
  {
    icon: Package,
    title: "Pick, Pack & Ship",
    description:
      "Order fulfillment services including picking, packing, labeling, and shipping. We handle individual orders or bulk distribution with accuracy and speed.",
  },
  {
    icon: Container,
    title: "Container Transloading",
    description:
      "Unload ocean containers and transload cargo into domestic trailers for regional distribution. Strategic for importers bringing goods through the Port of Mobile.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    description:
      "Detailed reporting on inventory turns, order accuracy, storage utilization, and throughput metrics. Data-driven insights to optimize your distribution strategy.",
  },
];

const advantages = [
  {
    icon: MapPin,
    title: "Port Proximity",
    description:
      "Located minutes from the Port of Mobile, our warehouse facilities enable rapid container deconsolidation and distribution — cutting transit time and reducing per diem charges on import containers.",
  },
  {
    icon: Zap,
    title: "Scalable Space",
    description:
      "Whether you need 5,000 or 50,000 square feet, our flexible warehousing model scales with your business. Seasonal surges, product launches, and inventory buildups are handled seamlessly.",
  },
  {
    icon: ScanLine,
    title: "Technology-Enabled",
    description:
      "Our warehouse management system provides real-time inventory visibility, automated reorder alerts, and digital documentation. Access your inventory data anytime from any device.",
  },
  {
    icon: Truck,
    title: "Integrated Transportation",
    description:
      "Unlike standalone warehouses, Fairway combines warehousing with our own trucking fleet. This means seamless inbound receiving from port drayage and outbound distribution on company-owned trucks.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Assessment",
    description:
      "We evaluate your storage requirements, inventory profile, throughput needs, and distribution patterns to design an optimal warehousing solution.",
  },
  {
    step: "02",
    title: "Setup & Integration",
    description:
      "We configure warehouse space, set up inventory in our WMS, establish receiving and shipping protocols, and integrate with your ordering systems.",
  },
  {
    step: "03",
    title: "Inbound Receiving",
    description:
      "Freight arrives by truck or container. Our team receives, inspects, barcodes, and puts away inventory according to your specifications and our quality standards.",
  },
  {
    step: "04",
    title: "Storage & Fulfillment",
    description:
      "Inventory is stored securely and fulfilled against your orders. Pick, pack, and ship operations run daily with real-time tracking and reporting.",
  },
];

const faqs = [
  {
    question: "Where are your warehouse facilities located in Mobile, AL?",
    answer:
      "Our warehouse facilities are strategically located in the Mobile, Alabama metropolitan area, within minutes of the Port of Mobile and APM Terminals. This proximity allows us to receive import containers quickly, minimizing per diem charges, and positions your inventory for fast regional distribution across the Gulf Coast. Our address is convenient to I-10 and I-65 for efficient outbound trucking.",
  },
  {
    question: "What is the minimum space commitment for warehousing?",
    answer:
      "We offer flexible warehousing solutions starting from as little as a few pallets. For dedicated space, our minimum commitment is typically 2,500 square feet with a month-to-month option available after an initial three-month term. We understand that businesses have fluctuating storage needs, so our contracts are designed to scale with your inventory levels.",
  },
  {
    question: "Can you handle container transloading from the Port of Mobile?",
    answer:
      "Absolutely. Container transloading is one of our core capabilities. We pick up loaded containers from the Port of Mobile using our own drayage fleet, transport them to our warehouse, unload and sort the contents, and then stage or ship the cargo on domestic trailers. This integrated drayage-to-warehouse pipeline saves time and reduces handling costs compared to using separate drayage and warehouse providers.",
  },
  {
    question: "Do you offer climate-controlled or temperature-sensitive storage?",
    answer:
      "Our facilities include climate-monitored storage areas that maintain consistent temperature and humidity levels suitable for a wide range of products. For products requiring strict temperature control such as pharmaceuticals or food-grade items, please contact us to discuss your specific requirements so we can confirm compatibility with our current capabilities.",
  },
  {
    question: "How do I track my inventory in your warehouse?",
    answer:
      "Our warehouse management system (WMS) provides real-time inventory visibility through an online portal. You can view current stock levels, track inbound and outbound movements, monitor order fulfillment status, and generate reports at any time. We also send automated alerts for low stock levels and provide monthly inventory summary reports.",
  },
];

/* ---------- Page ---------- */

export default function WarehousingMobileALPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        title="Warehousing & Distribution Services"
        subtitle="Strategic warehousing near the Port of Mobile with scalable space, advanced inventory management, and integrated transportation on our own fleet."
        breadcrumbs={[
          { label: "Services", href: "/gulf-coast-logistics" },
          { label: "Warehousing & Distribution" },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=80"
      />

      {/* TRUST BADGES */}
      <TrustBadges variant="light" />

      {/* SERVICE OVERVIEW */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=80"
                  alt="Fairway Logistics warehouse and distribution center in Mobile AL"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-gold/10" />
            </div>

            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                Mobile Warehousing
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark mb-6">
                Warehousing That{" "}
                <span className="text-gold-gradient">Works With Your Fleet</span>
              </h2>

              <div className="gold-border-left pl-6 mb-6">
                <p className="text-neutral-600 leading-relaxed text-lg">
                  Most warehouses store your goods. Fairway Logistics stores,
                  distributes, and transports them — all under one roof with one
                  company-owned operation.
                </p>
              </div>

              <p className="text-neutral-600 leading-relaxed mb-6">
                Our warehouse facilities in Mobile, Alabama, are strategically
                located minutes from the Port of Mobile and major interstate
                corridors. This positioning allows us to receive import containers
                the same day they clear the terminal, transload cargo into domestic
                trailers, and distribute across the Gulf Coast on our own trucking
                fleet — all without third-party handoffs.
              </p>

              <p className="text-neutral-600 leading-relaxed mb-8">
                Whether you need short-term storage during peak seasons, long-term
                warehousing for ongoing inventory, cross-docking for time-sensitive
                freight, or full pick-pack-ship fulfillment, our technology-enabled
                facilities and experienced team deliver. With real-time WMS
                visibility, barcode tracking, and integrated transportation, your
                supply chain runs smoother and costs less.
              </p>

              <div className="space-y-3">
                {[
                  "Minutes from Port of Mobile for fast container receiving",
                  "Integrated with our own drayage and trucking fleet",
                  "Real-time WMS with online inventory portal",
                  "Flexible space — scale up or down as needed",
                  "Cross-docking and transloading capabilities",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-sm font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Warehouse & Distribution Services
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              Comprehensive warehousing capabilities designed for importers,
              manufacturers, distributors, and retailers on the Gulf Coast.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <cap.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-heading font-bold text-dark mb-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY ADVANTAGES */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              The Fairway Advantage
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Why Choose Fairway Warehousing
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((adv, i) => (
              <div
                key={adv.title}
                className={`flex gap-5 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <adv.icon className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-dark mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    {adv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Getting Started
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              How Our Warehousing Works
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, i) => (
              <div key={item.step} className={`relative animate-fade-in-up stagger-${i + 1}`}>
                <div className="text-5xl font-heading font-bold text-gold/20 mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-heading font-bold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-gold/30">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC LOCATION */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                Strategic Location
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark mb-6">
                Perfectly Positioned in Mobile, AL
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Our warehouse location in Mobile provides exceptional access to
                the Port of Mobile, Interstate 10, Interstate 65, and the Gulf
                Coast&apos;s major commercial corridors. This strategic positioning
                reduces transit times and costs for both inbound port cargo and
                outbound regional distribution.
              </p>

              <div className="space-y-4 mb-6">
                {[
                  { label: "Port of Mobile / APM Terminals", time: "15 minutes" },
                  { label: "Interstate 10 (East-West)", time: "5 minutes" },
                  { label: "Interstate 65 (North-South)", time: "10 minutes" },
                  { label: "Mobile Regional Airport", time: "20 minutes" },
                  { label: "CSX Intermodal Terminal", time: "15 minutes" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between border-b border-neutral-100 pb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="text-sm text-neutral-700">{item.label}</span>
                    </div>
                    <span className="text-sm font-semibold text-gold">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1511578194003-00c80e42dc9b?w=1920&q=80"
                  alt="Strategic warehouse location near Port of Mobile"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Common Questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Warehousing FAQ
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-neutral-200 p-6"
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
              Request a Warehousing Quote
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Tell us about your storage and distribution needs. Our team will
              design a customized warehousing solution and respond within one
              business day.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Explore More
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Related Services
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Ship className="w-6 h-6" />}
              title="Port of Mobile Drayage"
              description="Seamless container drayage from port to warehouse on our own fleet."
              href="/port-of-mobile-drayage"
              features={["Same-day pickup", "Chassis included", "Direct to warehouse"]}
            />
            <ServiceCard
              icon={<Truck className="w-6 h-6" />}
              title="Asset-Based Trucking"
              description="Outbound distribution on company-owned trucks for complete supply chain control."
              href="/asset-based-trucking"
              features={["FTL & LTL", "Dedicated routes", "Regional coverage"]}
            />
            <ServiceCard
              icon={<Container className="w-6 h-6" />}
              title="Import & Export Logistics"
              description="End-to-end international freight management through Gulf Coast ports."
              href="/import-export-logistics"
              features={["Customs facilitation", "Documentation", "Port management"]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Warehouse Space in Mobile, AL?"
        description="Strategic warehousing with integrated drayage and trucking. One provider for receiving, storing, and distributing your freight."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
