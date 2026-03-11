import Link from "next/link";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumbs: Breadcrumb[];
  backgroundImage?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[350px] sm:min-h-[400px] flex items-end">
      {/* ── Background ── */}
      {backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-navy-950" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 page-hero-overlay" />

      {/* ── Content (positioned at the bottom) ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-12 pt-32">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-navy-300 mb-4"
          >
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <span key={crumb.label + index} className="flex items-center gap-2">
                  {index > 0 && (
                    <span className="text-navy-500" aria-hidden="true">
                      /
                    </span>
                  )}
                  {isLast || !crumb.href ? (
                    <span className={isLast ? "text-gold-400" : ""}>{crumb.label}</span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="hover:text-gold-400 transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </span>
              );
            })}
          </nav>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
          {title}
        </h1>

        {/* Section divider */}
        <div className="section-divider mt-4" />

        {/* Subtitle */}
        <p className="text-lg text-navy-200 mt-3 max-w-2xl">{subtitle}</p>
      </div>

      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-gradient" />
    </section>
  );
}
