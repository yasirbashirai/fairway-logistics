"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";

const serviceLinks = [
  { label: "Asset-Based Trucking", href: "/asset-based-trucking" },
  { label: "Port of Mobile Drayage", href: "/port-of-mobile-drayage" },
  { label: "Freight Brokerage", href: "/freight-brokerage" },
  { label: "Warehousing", href: "/warehousing-mobile-al" },
  { label: "Import / Export Logistics", href: "/import-export-logistics" },
  { label: "Gulf Coast Drayage", href: "/gulf-coast-container-drayage" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Request a Quote", href: "/request-quote" },
  { label: "Carrier Partners", href: "/carrier-partners" },
  { label: "Safety & Compliance", href: "/safety-compliance" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Resources", href: "/resources" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-neutral-300">
      {/* Gold accent top line */}
      <div className="h-1 bg-gold-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-10">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 — Company Info */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.jpg"
                alt="Fairway Logistics LLC"
                width={160}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400 mb-6">
              Fairway Logistics LLC is an asset-based logistics company
              headquartered in Mobile, Alabama, proudly serving the Gulf Coast
              region with reliable freight and transportation solutions.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold hover:text-dark transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 text-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 text-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact + Newsletter */}
          <div>
            <h3 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>456 Dauphin Street, Mobile, AL 36602</span>
              </li>
              <li>
                <a
                  href="tel:+12517251929"
                  className="flex items-center gap-3 text-sm hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  (251) 725-1929
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@fairwaylogisticsllc.com"
                  className="flex items-center gap-3 text-sm hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                  info@fairwaylogisticsllc.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                24/7 Operations
              </li>
            </ul>

            {/* Newsletter */}
            <h4 className="text-white font-heading font-semibold text-sm mb-3">
              Newsletter
            </h4>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-gold-gradient text-dark font-bold px-4 py-2.5 rounded-lg text-sm hover:shadow-lg hover:shadow-gold/20 transition-all flex-shrink-0"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>&copy; {currentYear} Fairway Logistics LLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <span className="text-neutral-700">|</span>
            <Link href="/terms-of-service" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
            <span className="text-neutral-700">|</span>
            <Link href="/sitemap.xml" className="hover:text-gold transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
