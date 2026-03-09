import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  features?: string[];
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
      <div className="relative bg-white rounded-xl border border-neutral-200 overflow-hidden h-full flex flex-col">
        {/* Gold top border */}
        <div className="h-1 bg-gold-gradient" />

        <div className="p-6 flex-1 flex flex-col">
          {/* Icon */}
          <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:bg-gold-gradient group-hover:text-dark transition-all duration-300">
            {icon}
          </div>

          {/* Title */}
          <h3 className="text-lg font-heading font-bold text-dark mb-2 group-hover:text-gold transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-neutral-600 leading-relaxed mb-4">
            {description}
          </p>

          {/* Features list */}
          {features && features.length > 0 && (
            <ul className="space-y-1.5 mb-4 flex-1">
              {features.map((feat, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-xs text-neutral-500"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
          )}

          {/* Arrow link */}
          <div className="flex items-center gap-1.5 text-gold font-semibold text-sm mt-auto pt-2">
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
