import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import ServiceExplorer from "@/components/ServiceExplorer";
import WhyFairway from "@/components/WhyFairway";
import CoverageMap from "@/components/CoverageMap";
import TrackingWidget from "@/components/TrackingWidget";
import QuoteCalculator from "@/components/QuoteCalculator";
import IndustrySection from "@/components/IndustrySection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CaseStudy from "@/components/CaseStudy";
import FAQSection from "@/components/FAQSection";
import BlogPreview from "@/components/BlogPreview";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title:
    "Fairway Logistics LLC | Asset-Based Trucking & Freight Services | Gulf Coast",
  description:
    "Gulf Coast's premier asset-based logistics company. Port of Mobile drayage, container shipping, trucking, warehousing & freight brokerage. FMCSA registered, fully insured. Instant quotes available. Call (251) 725-1929.",
  keywords: [
    "Gulf Coast logistics",
    "Port of Mobile drayage",
    "asset-based trucking Mobile AL",
    "freight services Gulf Coast",
    "container drayage Alabama",
    "warehousing Mobile Alabama",
    "freight brokerage Gulf Coast",
    "import export logistics Mobile",
    "trucking company Mobile AL",
    "Fairway Logistics",
    "instant freight quote",
    "shipment tracking",
    "3PL Gulf Coast",
    "supply chain solutions",
  ],
  openGraph: {
    title:
      "Fairway Logistics LLC | Asset-Based Trucking & Freight Services | Gulf Coast",
    description:
      "Gulf Coast's premier asset-based logistics company. Real assets. Real reliability. Get an instant freight quote today.",
    url: "https://fairwaylogisticsllc.com",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1920,
        height: 1080,
        alt: "Fairway Logistics — Gulf Coast Freight & Trucking",
      },
    ],
  },
  alternates: {
    canonical: "https://fairwaylogisticsllc.com",
  },
};

/* FAQ structured data for SEO */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What areas does Fairway Logistics serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve the entire Gulf Coast region including Mobile AL, Baldwin County AL, Pensacola FL, Biloxi MS, Gulfport MS, and New Orleans LA. We also provide nationwide freight solutions through our carrier network.",
      },
    },
    {
      "@type": "Question",
      name: "Do you own your own trucks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Unlike many freight brokers, Fairway Logistics is an asset-based carrier. We own and maintain our fleet of trucks and equipment, giving you guaranteed capacity and direct control over your shipments.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I get a freight quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can get an instant estimate using our online quote calculator. For detailed quotes, our team responds within 2 business hours. Call us at (251) 725-1929 for immediate assistance.",
      },
    },
    {
      "@type": "Question",
      name: "Is Fairway Logistics FMCSA registered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We are fully FMCSA registered, DOT compliant, and carry comprehensive insurance coverage. Safety and compliance are foundational to our operations.",
      },
    },
    {
      "@type": "Question",
      name: "How can I track my shipment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use our shipment tracking portal on this website by entering your PRO number or BOL. You can also contact our 24/7 operations team at (251) 725-1929 for real-time updates.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Hero — Full viewport with truck image, stats, CTAs */}
      <HeroSection />

      {/* 2. Trust Badges + Logo Marquee */}
      <LogoMarquee />

      {/* 3. Interactive Service Explorer — Tabbed service details */}
      <ServiceExplorer />

      {/* 4. Why Choose Fairway — 4 advantage cards */}
      <WhyFairway />

      {/* 5. Shipment Tracking Widget */}
      <section id="tracking" className="py-20 sm:py-28 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div>
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">
                Shipment Tracking
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                Real-Time Visibility Into Every Load
              </h2>
              <p className="text-navy-300 text-lg leading-relaxed mb-8">
                Track your shipments in real time with our advanced tracking
                portal. Enter your PRO number or BOL for instant status updates,
                location data, and estimated delivery times.
              </p>
              <ul className="space-y-4">
                {[
                  "GPS-powered real-time location tracking",
                  "Automated status notifications via email & SMS",
                  "Estimated time of arrival updates",
                  "Proof of delivery documentation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-navy-200"
                  >
                    <span className="w-5 h-5 rounded-full bg-gold-400/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-gold-400" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Tracking widget */}
            <TrackingWidget />
          </div>
        </div>
      </section>

      {/* 6. Coverage Map + Stats */}
      <CoverageMap />

      {/* 7. Instant Quote Calculator */}
      <QuoteCalculator />

      {/* 8. Industries Served */}
      <IndustrySection />

      {/* 9. Testimonials */}
      <TestimonialCarousel />

      {/* 10. Case Study */}
      <CaseStudy />

      {/* 11. FAQ Section */}
      <FAQSection />

      {/* 12. Blog / Insights Preview */}
      <BlogPreview />

      {/* 13. Final CTA Banner */}
      <CTABanner />
    </>
  );
}
