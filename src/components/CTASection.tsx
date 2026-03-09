import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CTASection({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
}: CTASectionProps) {
  return (
    <section className="bg-dark-700 relative overflow-hidden py-16 sm:py-24">
      {/* Gold decorative gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />

      {/* Decorative blur circles */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
          {title}
        </h2>

        {/* Section divider */}
        <div className="section-divider mx-auto mt-4 mb-8" />

        <p className="text-neutral-400 mt-4 text-lg max-w-2xl mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href={primaryButtonHref}
            className="bg-gold-gradient text-dark-700 font-bold px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-gold-400/20 hover:scale-105 transition-all duration-200"
          >
            {primaryButtonText}
          </Link>

          {secondaryButtonText && secondaryButtonHref && (
            <Link
              href={secondaryButtonHref}
              className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:border-gold-400 transition-all duration-200"
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
