import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import ServiceExplorer from "@/components/ServiceExplorer";
import WhyFairway from "@/components/WhyFairway";
import CoverageMap from "@/components/CoverageMap";
import InteractiveMap from "@/components/InteractiveMap";
import QuoteCalculator from "@/components/QuoteCalculator";
import IndustrySection from "@/components/IndustrySection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CaseStudy from "@/components/CaseStudy";
import FAQSection from "@/components/FAQSection";
import BlogPreview from "@/components/BlogPreview";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title:
    "Fairway Logistics LLC | Asset-Based Trucking, Heavy Haul & Freight Brokerage | Nationwide",
  description:
    "Nationwide logistics powered by asset-based reliability. Trucking, heavy haul, drayage, freight brokerage, bonded warehousing & import/export. FMCSA registered, fully insured. Headquartered in Mobile, AL. Call (251) 725-1929.",
  keywords: [
    "nationwide freight services",
    "asset-based trucking",
    "heavy haul transport",
    "freight brokerage",
    "bonded warehouse Mobile AL",
    "container drayage Gulf Coast",
    "over-dimensional freight",
    "import export logistics",
    "trucking company Mobile AL",
    "Fairway Logistics",
    "national freight brokerage",
    "3PL logistics",
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
      name: "Where does Fairway Logistics operate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide nationwide freight brokerage with 2,000+ carriers. Our asset-based fleet operates primarily across the Gulf Coast and Southeast. Our 200,000 sq ft bonded warehouse and HQ are in Mobile, AL.",
      },
    },
    {
      "@type": "Question",
      name: "Do you own your own trucks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We are an asset-based carrier — we own trucks, trailers, chassis, and a 200,000 sq ft bonded warehouse. We also run a full nationwide freight brokerage. This gives you guaranteed capacity on our fleet plus access to 2,000+ carriers for any lane.",
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
      name: "How can I get updates on my shipment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact our 24/7 operations team at (251) 725-1929 for real-time updates on your shipment status, location, and estimated delivery time.",
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

      {/* 5. Coverage Map + Stats */}
      <CoverageMap />

      {/* 6b. Interactive Service Network Map */}
      <InteractiveMap />

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
