import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: {
    default: "Fairway Logistics LLC | Asset-Based Trucking & Freight Services | Gulf Coast",
    template: "%s | Fairway Logistics LLC",
  },
  description:
    "Fairway Logistics LLC is an asset-based logistics company serving the Gulf Coast region from Mobile, AL. Full truckload, drayage, warehousing, freight brokerage, and import/export services.",
  keywords: [
    "logistics",
    "freight",
    "trucking",
    "Gulf Coast logistics",
    "Mobile AL trucking",
    "Port of Mobile drayage",
    "asset-based carrier",
    "freight brokerage",
    "warehousing Mobile AL",
    "import export logistics",
    "container drayage",
    "Fairway Logistics",
  ],
  authors: [{ name: "Fairway Logistics LLC" }],
  creator: "Fairway Logistics LLC",
  publisher: "Fairway Logistics LLC",
  metadataBase: new URL("https://fairwaylogisticsllc.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fairway Logistics LLC | Asset-Based Trucking & Freight Services",
    description:
      "Gulf Coast logistics solutions including full truckload, drayage, warehousing, and freight brokerage from Mobile, Alabama.",
    url: "https://fairwaylogisticsllc.com",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Fairway Logistics LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fairway Logistics LLC | Gulf Coast Freight & Trucking",
    description:
      "Asset-based logistics serving the Gulf Coast. Full truckload, drayage, warehousing & more.",
    images: ["/logo.jpg"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://fairwaylogisticsllc.com",
  name: "Fairway Logistics LLC",
  description:
    "Asset-based logistics company serving the Gulf Coast region with full truckload, drayage, warehousing, freight brokerage, and import/export services.",
  url: "https://fairwaylogisticsllc.com",
  telephone: "+1-251-725-1929",
  email: "info@fairwaylogisticsllc.com",
  image: "https://fairwaylogisticsllc.com/logo.jpg",
  logo: "https://fairwaylogisticsllc.com/logo.jpg",
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
    { "@type": "State", name: "Alabama" },
    { "@type": "State", name: "Mississippi" },
    { "@type": "State", name: "Louisiana" },
    { "@type": "State", name: "Florida" },
  ],
  serviceType: [
    "Full Truckload Shipping",
    "Container Drayage",
    "Freight Brokerage",
    "Warehousing",
    "Import/Export Logistics",
    "Flatbed & Specialized Hauling",
  ],
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
  sameAs: [],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
