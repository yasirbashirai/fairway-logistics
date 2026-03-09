import Link from "next/link";
import { Factory, HardHat, Zap, Building2, ShoppingCart, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Reliable raw material inbound and finished goods outbound logistics for Gulf Coast manufacturers.",
    href: "/logistics-for-manufacturing",
  },
  {
    icon: HardHat,
    title: "Construction",
    description:
      "Heavy equipment, building materials, and oversized load transport to job sites across the region.",
    href: "/logistics-for-construction",
  },
  {
    icon: Zap,
    title: "Energy & Industrial",
    description:
      "Specialized hauling for oil & gas, petrochemical, and industrial equipment throughout the Gulf Coast.",
    href: "/energy-industrial-freight",
  },
  {
    icon: Building2,
    title: "Government & Municipal",
    description:
      "Compliant freight services for government agencies and municipal projects with full documentation.",
    href: "/government-municipal-logistics",
  },
  {
    icon: ShoppingCart,
    title: "Retail & Distribution",
    description:
      "Efficient supply chain solutions for retail fulfillment, warehousing, and last-mile distribution.",
    href: "/retail-distribution-logistics",
  },
];

export default function IndustryGrid() {
  return (
    <section className="py-16 sm:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
            Industries We Serve
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700">
            Logistics Solutions by Industry
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <Link
              key={ind.href}
              href={ind.href}
              className="group bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center text-gold-400 mb-4 group-hover:bg-gold-gradient group-hover:text-dark-700 transition-all duration-300">
                <ind.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-bold text-dark-700 mb-2 group-hover:text-gold-400 transition-colors">
                {ind.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                {ind.description}
              </p>
              <span className="flex items-center gap-1.5 text-gold-400 font-semibold text-sm">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
