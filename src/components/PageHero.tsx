import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  backgroundImage?: string;
  gradientText?: boolean;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80",
  gradientText = false,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[340px] sm:min-h-[400px] flex items-end">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 page-hero-overlay" />

      {/* Gold accent bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-gradient" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-10 pt-32">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-sm text-neutral-400 mb-4"
          >
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-gold transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Title */}
        <h1
          className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight ${
            gradientText ? "text-gold-gradient" : "text-white"
          }`}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-4 text-lg text-neutral-300 max-w-2xl">{subtitle}</p>
        )}

        {/* Decorative divider */}
        <div className="section-divider mt-6" />
      </div>
    </section>
  );
}
