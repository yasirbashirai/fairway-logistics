"use client";

import Link from "next/link";
import {
  Factory,
  HardHat,
  Zap,
  Building2,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";
import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollReveal";

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

function IndustryCard({
  icon: Icon,
  title,
  description,
  href,
}: (typeof industries)[number]) {
  return (
    <Link
      href={href}
      className="group glass-card-light rounded-2xl p-6 hover:border-gold-400/30 transition-all duration-300 block h-full"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-full bg-gold-400/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-gold-400" />
      </div>

      {/* Title */}
      <h3 className="font-heading font-bold text-white text-lg">{title}</h3>

      {/* Description */}
      <p className="text-sm text-navy-300 mt-2 leading-relaxed">
        {description}
      </p>

      {/* Learn More link */}
      <span className="text-gold-400 text-sm font-semibold mt-4 inline-flex items-center gap-1">
        Learn More
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
}

export default function IndustrySection() {
  const topRow = industries.slice(0, 3);
  const bottomRow = industries.slice(3);

  return (
    <section className="bg-navy-950 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              INDUSTRIES WE SERVE
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Logistics Solutions by Industry
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
        </ScrollReveal>

        {/* Top row — 3 cards */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {topRow.map((ind) => (
            <StaggerItem key={ind.href}>
              <IndustryCard {...ind} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom row — 2 cards, centred */}
        <StaggerContainer
          className="flex flex-col sm:flex-row justify-center gap-6 mt-6"
          staggerDelay={0.1}
          delay={0.3}
        >
          {bottomRow.map((ind) => (
            <StaggerItem
              key={ind.href}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <IndustryCard {...ind} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
