import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Gold gradient line — top */}
      <div className="h-0.5 bg-gold-gradient relative z-10" />

      {/* Background image + dark overlay */}
      <div className="relative py-20 sm:py-28">
        {/* Truck background image */}
        <Image
          src="/images/truckings.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority={false}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-navy-900/85" />

        {/* Decorative gold glow circles */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-gold-400/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-gold-400/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-400/4 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Ready to Streamline Your Logistics?
          </h2>

          <div className="section-divider mx-auto mt-4 mb-6" />

          <p className="text-navy-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Partner with an asset-based logistics provider with nationwide
            reach. Competitive rates, guaranteed capacity, and a dedicated
            operations team — from Gulf Coast to coast.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link href="/request-quote" className="btn-primary">
              Request a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a href="tel:+12517251929" className="btn-ghost">
              <Phone className="w-5 h-5" />
              Call (251) 725-1929
            </a>
          </div>
        </div>
      </div>

      {/* Gold gradient line — bottom */}
      <div className="h-0.5 bg-gold-gradient relative z-10" />
    </section>
  );
}
