import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const serviceLinks = [
  { label: "Asset-Based Trucking", href: "/asset-based-trucking" },
  { label: "Port of Mobile Drayage", href: "/port-of-mobile-drayage" },
  { label: "Freight Brokerage", href: "/freight-brokerage" },
  { label: "Warehousing", href: "/warehousing-mobile-al" },
  { label: "Import / Export Logistics", href: "/import-export-logistics" },
  { label: "Gulf Coast Drayage", href: "/gulf-coast-container-drayage" },
];

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Request a Quote", href: "/request-quote" },
  { label: "Carrier Partners", href: "/carrier-partners" },
  { label: "Safety & Compliance", href: "/safety-compliance" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Resources", href: "/resources" },
];

const socialIcons = [
  { letter: "F", label: "Facebook" },
  { letter: "L", label: "LinkedIn" },
  { letter: "I", label: "Instagram" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Footer() {
  return (
    <footer className="bg-dark-700 text-neutral-300">
      {/* Gold gradient accent line */}
      <div className="h-1 bg-gold-gradient" />

      {/* Main footer content */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ---- Column 1: Company ---- */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.jpg"
                alt="Fairway Logistics LLC"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400 mb-6">
              Fairway Logistics LLC is an asset-based logistics company
              headquartered in Mobile, Alabama. We deliver reliable freight
              and transportation solutions across the Gulf Coast region.
            </p>

            {/* Contact info with gold icons */}
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span>456 Dauphin Street, Mobile, AL 36602</span>
              </li>
              <li>
                <a
                  href="tel:+12517251929"
                  className="flex items-center gap-3 text-sm hover:text-gold-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  (251) 725-1929
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@fairwaylogisticsllc.com"
                  className="flex items-center gap-3 text-sm hover:text-gold-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  info@fairwaylogisticsllc.com
                </a>
              </li>
            </ul>
          </div>

          {/* ---- Column 2: Our Services ---- */}
          <div>
            <ColumnHeading>Our Services</ColumnHeading>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Column 3: Quick Links ---- */}
          <div>
            <ColumnHeading>Quick Links</ColumnHeading>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Column 4: Contact Us ---- */}
          <div>
            <ColumnHeading>Contact Us</ColumnHeading>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span>456 Dauphin Street, Mobile, AL 36602</span>
              </li>
              <li>
                <a
                  href="tel:+12517251929"
                  className="flex items-center gap-3 text-sm hover:text-gold-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  (251) 725-1929
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@fairwaylogisticsllc.com"
                  className="flex items-center gap-3 text-sm hover:text-gold-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  info@fairwaylogisticsllc.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
                24/7 Operations
              </li>
            </ul>

            {/* Newsletter signup */}
            <h4 className="text-white font-heading font-semibold text-sm mb-3">
              Newsletter
            </h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-dark-600 border border-neutral-600 rounded-lg px-3 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-gold-400 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-gold-gradient text-dark-700 font-bold px-4 py-2.5 rounded-lg text-sm hover:shadow-lg hover:shadow-gold-400/20 transition-all flex-shrink-0"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ---- Bottom Bar ---- */}
      <div className="border-t border-neutral-700 mt-12 pt-8 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-neutral-500">
            &copy; 2026 Fairway Logistics, LLC. All rights reserved.
          </p>

          {/* Social media placeholder icons */}
          <div className="flex items-center gap-3">
            {socialIcons.map(({ letter, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="border border-neutral-600 rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold text-neutral-400 hover:border-gold-400 hover:text-gold-400 transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Column Heading                                                     */
/* ------------------------------------------------------------------ */

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-white font-heading font-bold text-lg">
        {children}
      </h3>
      <div className="w-10 h-0.5 bg-gold-400 mt-2" />
    </div>
  );
}
