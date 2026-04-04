import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  Award,
  ShieldCheck,
  Truck,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const serviceLinks = [
  { label: "Asset-Based Trucking", href: "/asset-based-trucking" },
  { label: "Gulf Coast Drayage", href: "/gulf-coast-container-drayage" },
  { label: "Heavy Haul & Over-Dimensional", href: "/heavy-haul" },
  { label: "Freight Brokerage", href: "/freight-brokerage" },
  { label: "Warehousing", href: "/warehousing-mobile-al" },
  { label: "Import / Export", href: "/import-export-logistics" },
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

const socialLinks = [
  { letter: "F", label: "Facebook", href: "#" },
  { letter: "in", label: "LinkedIn", href: "#" },
  { letter: "I", label: "Instagram", href: "#" },
  { letter: "X", label: "Twitter", href: "#" },
];

const trustBadges = [
  { icon: Shield, label: "FMCSA Registered" },
  { icon: ShieldCheck, label: "DOT Compliant" },
  { icon: Award, label: "Fully Insured" },
  { icon: Truck, label: "SmartWay Partner" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300">
      {/* Gold gradient accent line */}
      <div className="h-px bg-gold-gradient" />

      {/* ============================================================ */}
      {/*  Main Footer Content                                         */}
      {/* ============================================================ */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

            {/* ---- Column 1: Company ---- */}
            <div>
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/logo.png"
                  alt="Fairway Logistics LLC"
                  width={160}
                  height={48}
                  className="h-12 w-auto"
                />
              </Link>

              <p className="text-navy-300 text-sm leading-relaxed mb-6">
                Fairway Logistics LLC is a nationwide logistics company
                headquartered in Mobile, Alabama. Asset-based trucking, heavy
                haul, drayage, freight brokerage, and bonded warehousing —
                delivering reliable freight solutions coast to coast.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map(({ letter, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-navy-600 flex items-center justify-center text-sm font-semibold text-navy-300 hover:border-gold-400 hover:text-gold-400 transition-colors duration-300"
                  >
                    {letter}
                  </a>
                ))}
              </div>
            </div>

            {/* ---- Column 2: Our Services ---- */}
            <div>
              <SectionHeading>Our Services</SectionHeading>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-navy-300 hover:text-gold-400 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ---- Column 3: Quick Links ---- */}
            <div>
              <SectionHeading>Quick Links</SectionHeading>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-navy-300 hover:text-gold-400 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ---- Column 4: Contact Us ---- */}
            <div>
              <SectionHeading>Contact Us</SectionHeading>

              {/* Contact details */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span>456 Dauphin Street, Mobile, AL 36602</span>
                </li>
                <li>
                  <a
                    href="tel:+12517251929"
                    className="flex items-center gap-3 text-sm hover:text-gold-400 transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    (251) 725-1929
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@fairwaylogisticsllc.com"
                    className="flex items-center gap-3 text-sm hover:text-gold-400 transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    info@fairwaylogisticsllc.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>24/7 Operations</span>
                </li>
              </ul>

              {/* Newsletter signup with glass-card effect */}
              <div className="rounded-xl border border-navy-700/50 bg-navy-900/40 backdrop-blur-sm p-4">
                <h4 className="text-white font-semibold text-sm mb-3">
                  Subscribe to Our Newsletter
                </h4>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    aria-label="Email address for newsletter"
                    className="flex-1 min-w-0 bg-navy-800/60 border border-navy-600 rounded-lg px-3 py-2.5 text-sm text-white placeholder-navy-400 focus:border-gold-400 focus:ring-1 focus:ring-gold-400/30 focus:outline-none transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="bg-gold-gradient text-navy-950 font-bold px-4 py-2.5 rounded-lg text-sm hover:shadow-lg hover:shadow-gold-400/20 transition-all duration-300 flex-shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  Trust Badges Bar                                             */}
      {/* ============================================================ */}
      <div className="border-t border-navy-800/60 border-b border-b-navy-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-0 sm:divide-x sm:divide-navy-700">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 px-6 text-sm text-navy-300"
              >
                <Icon className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  Bottom Bar                                                   */}
      {/* ============================================================ */}
      <div className="border-t border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-navy-400">
              &copy; 2026 Fairway Logistics, LLC. All rights reserved.
            </p>

            {/* Legal links */}
            <div className="flex items-center gap-2 text-sm text-navy-400">
              <Link
                href="/privacy-policy"
                className="hover:text-gold-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span className="text-navy-600">|</span>
              <Link
                href="/terms-of-service"
                className="hover:text-gold-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Section Heading with gold underline accent                         */
/* ------------------------------------------------------------------ */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-white font-bold text-lg tracking-tight">
        {children}
      </h3>
      <div className="w-10 h-0.5 bg-gold-400 mt-2 rounded-full" />
    </div>
  );
}
