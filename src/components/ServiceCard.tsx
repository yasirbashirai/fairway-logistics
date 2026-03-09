import Link from "next/link";
import { CheckCircle } from "lucide-react";
import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  features: string[];
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  features,
}: ServiceCardProps) {
  return (
    <Link href={href} className="block service-card group">
      <div className="relative bg-white rounded-2xl border border-neutral-200 hover:border-gold-400 hover:shadow-xl hover:-translate-y-1.5 shadow-sm overflow-hidden h-full flex flex-col transition-all duration-300">
        {/* Gold top border accent */}
        <div className="h-1 bg-gold-400" />

        <div className="p-8 flex-1 flex flex-col">
          {/* Icon in gold-tinted container */}
          <div className="w-14 h-14 rounded-lg bg-gold-400/10 flex items-center justify-center text-gold-400 mb-5">
            {icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-heading font-bold text-dark-700 mb-3">
            {title}
          </h3>

          {/* Description */}
          <p className="text-neutral-600 leading-relaxed mb-5">
            {description}
          </p>

          {/* Features list with checkmark bullets */}
          {features.length > 0 && (
            <ul className="space-y-2.5 mb-6 flex-1">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-neutral-600"
                >
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {/* Learn More link */}
          <div className="flex items-center gap-1 text-gold-400 font-semibold text-sm mt-auto pt-3">
            Learn More
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
