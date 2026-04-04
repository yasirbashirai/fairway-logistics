import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: {
    default:
      "Fairway Logistics LLC | Asset-Based Trucking, Heavy Haul & Freight Services | Nationwide",
    template: "%s | Fairway Logistics LLC",
  },
  description:
    "Nationwide logistics with asset-based reliability. Trucking, heavy haul, drayage, freight brokerage, bonded warehousing & import/export. FMCSA registered, fully insured. Headquartered in Mobile, AL. Call (251) 725-1929.",
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
    "drayage services Alabama",
    "freight company Gulf Coast",
    "logistics company Mobile AL",
    "container shipping Alabama",
    "flatbed trucking Gulf Coast",
    "3PL Gulf Coast",
    "supply chain Mobile AL",
  ],
  authors: [{ name: "Fairway Logistics LLC" }],
  creator: "Fairway Logistics LLC",
  publisher: "Fairway Logistics LLC",
  metadataBase: new URL("https://fairwaylogisticsllc.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Fairway Logistics LLC | Asset-Based Trucking & Freight Services",
    description:
      "Gulf Coast logistics solutions: full truckload, drayage, warehousing, and freight brokerage from Mobile, Alabama. Real assets. Real reliability.",
    url: "https://fairwaylogisticsllc.com",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1920,
        height: 1080,
        alt: "Fairway Logistics truck at Port of Mobile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fairway Logistics LLC | Gulf Coast Freight & Trucking",
    description:
      "Asset-based logistics serving the Gulf Coast. Full truckload, drayage, warehousing & more.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* Comprehensive Schema.org structured data */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://fairwaylogisticsllc.com/#organization",
      name: "Fairway Logistics LLC",
      url: "https://fairwaylogisticsllc.com",
      logo: {
        "@type": "ImageObject",
        url: "https://fairwaylogisticsllc.com/logo.png",
      },
      sameAs: [],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-251-725-1929",
        contactType: "customer service",
        email: "info@fwllogistics.com",
        availableLanguage: "English",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://fairwaylogisticsllc.com/#localbusiness",
      name: "Fairway Logistics LLC",
      description:
        "Asset-based logistics company serving the Gulf Coast region with full truckload, drayage, warehousing, freight brokerage, and import/export services.",
      url: "https://fairwaylogisticsllc.com",
      telephone: "+1-251-725-1929",
      email: "info@fwllogistics.com",
      image: "https://fairwaylogisticsllc.com/images/hero.jpg",
      logo: "https://fairwaylogisticsllc.com/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "456 Dauphin Street",
        addressLocality: "Mobile",
        addressRegion: "AL",
        postalCode: "36602",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 30.6954,
        longitude: -88.0399,
      },
      areaServed: [
        { "@type": "Country", name: "United States" },
      ],
      serviceType: [
        "Full Truckload Shipping",
        "Heavy Haul & Over-Dimensional Transport",
        "Container Drayage",
        "Nationwide Freight Brokerage",
        "Bonded Warehousing & Distribution",
        "Import/Export Logistics",
        "Flatbed & Specialized Hauling",
      ],
      priceRange: "$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://fairwaylogisticsllc.com/#website",
      url: "https://fairwaylogisticsllc.com",
      name: "Fairway Logistics LLC",
      publisher: {
        "@id": "https://fairwaylogisticsllc.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://fairwaylogisticsllc.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-navy-950 text-navy-100">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
