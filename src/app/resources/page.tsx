"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Ship,
  Truck,
  DollarSign,
  FileText,
  Users,
  Send,
  CheckCircle,
  AlertCircle,
  Tag,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

/* ---------- Blog Articles ---------- */
const articles = [
  {
    title: "Understanding Port Drayage: A Complete Guide",
    excerpt:
      "Learn what port drayage is, how it works, and why choosing the right drayage provider can make or break your supply chain efficiency at Gulf Coast ports.",
    category: "Drayage",
    image:
      "/images/gulf-coast.jpg",
    date: "March 5, 2026",
    readTime: "8 min read",
    href: "/resources/understanding-port-drayage",
  },
  {
    title: "Gulf Coast Shipping Guide 2026",
    excerpt:
      "Everything shippers need to know about moving freight through Gulf Coast ports in 2026 — from port updates and capacity trends to rate forecasts and regulatory changes.",
    category: "Industry Guide",
    image:
      "/images/trucks.jpg",
    date: "February 20, 2026",
    readTime: "12 min read",
    href: "/resources/gulf-coast-shipping-guide-2026",
  },
  {
    title: "Asset-Based vs Broker-Only: Which Model Is Right for You?",
    excerpt:
      "Compare the advantages and trade-offs of working with an asset-based carrier versus a broker-only model. Understand which approach best fits your shipping needs.",
    category: "Logistics Strategy",
    image:
      "/images/truck-road.jpg",
    date: "February 10, 2026",
    readTime: "6 min read",
    href: "/resources/asset-based-vs-broker-only",
  },
  {
    title: "5 Proven Strategies for Reducing Freight Costs",
    excerpt:
      "Discover practical, actionable strategies to reduce your freight spend without sacrificing service quality. From lane optimization to consolidation tactics.",
    category: "Cost Optimization",
    image:
      "/images/warehouse.jpg",
    date: "January 28, 2026",
    readTime: "7 min read",
    href: "/resources/reducing-freight-costs",
  },
  {
    title: "Import/Export Documentation Guide for Gulf Coast Shippers",
    excerpt:
      "Navigate the paperwork of international shipping with this comprehensive guide to customs documentation, compliance requirements, and common pitfalls to avoid.",
    category: "Import/Export",
    image:
      "/images/hero.jpg",
    date: "January 15, 2026",
    readTime: "10 min read",
    href: "/resources/import-export-documentation-guide",
  },
  {
    title: "Choosing the Right Logistics Partner: A Decision Framework",
    excerpt:
      "A structured approach to evaluating and selecting the right logistics partner for your business. Key criteria, red flags, and questions every shipper should ask.",
    category: "Business Guide",
    image:
      "/images/truckings.jpg",
    date: "January 5, 2026",
    readTime: "9 min read",
    href: "/resources/choosing-logistics-partner",
  },
];

/* ---------- Categories for filter ---------- */
const categories = [
  "All",
  "Drayage",
  "Industry Guide",
  "Logistics Strategy",
  "Cost Optimization",
  "Import/Export",
  "Business Guide",
];

export default function ResourcesPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true);
    }
  };

  return (
    <>
      {/* ============================================================= */}
      {/* HERO                                                           */}
      {/* ============================================================= */}
      <PageHero
        title="Resources & Industry Insights"
        subtitle="Expert guides, industry analysis, and practical tips to help you navigate Gulf Coast logistics with confidence."
        breadcrumbs={[{ label: "Resources" }]}
        backgroundImage="/images/hero.jpg"
      />

      {/* ============================================================= */}
      {/* ARTICLES GRID                                                  */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Latest Articles
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Featured Resources
            </h2>
            <p className="text-navy-400 mt-4 max-w-2xl mx-auto">
              Stay informed with the latest insights on Gulf Coast freight,
              logistics best practices, and industry trends from the Fairway
              Logistics team.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gold-gradient text-white"
                    : "border border-navy-800 text-navy-300 hover:border-gold-400 hover:text-gold-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, i) => (
              <Link
                key={article.title}
                href={article.href}
                className={`group block animate-fade-in-up stagger-${(i % 6) + 1}`}
              >
                <div className="bg-navy-950 rounded-xl border border-navy-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 bg-navy-950/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                        <Tag className="w-3 h-3 text-gold-400" />
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Gold accent */}
                  <div className="h-1 bg-gold-gradient" />

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-navy-300 mb-3">
                      <span>{article.date}</span>
                      <span className="w-1 h-1 rounded-full bg-navy-700" />
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-white mb-3 group-hover:text-gold-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-sm text-navy-300 leading-relaxed mb-4 flex-1 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-1.5 text-gold-400 font-semibold text-sm mt-auto pt-2">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-navy-400 text-lg">
                No articles found in this category. Check back soon for new
                content.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================= */}
      {/* NEWSLETTER SIGNUP                                              */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-gold-400/10 flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-gold-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Stay Ahead of the Curve
            </h2>
            <p className="text-navy-300 mb-8 max-w-lg mx-auto">
              Subscribe to our newsletter for monthly logistics insights,
              industry updates, and Gulf Coast shipping tips delivered straight
              to your inbox.
            </p>

            {subscribed ? (
              <div className="bg-navy-900 rounded-xl border border-white/10 p-8">
                <div className="w-12 h-12 bg-fwgreen-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  You&apos;re Subscribed!
                </h3>
                <p className="text-navy-300 text-sm">
                  Thank you for subscribing. You&apos;ll receive our next
                  newsletter in your inbox.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-navy-500 focus:border-gold-400 focus:ring-1 focus:ring-gold outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="bg-gold-gradient text-white font-bold text-sm px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-gold-400/20 transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-navy-400 text-xs mt-4">
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* RESOURCE CATEGORIES                                            */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Browse By Topic
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Resource Categories
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Ship,
                title: "Drayage & Port Operations",
                description:
                  "Guides and insights on container drayage, port operations, and intermodal logistics.",
                count: "3 articles",
              },
              {
                icon: Truck,
                title: "Trucking & Transportation",
                description:
                  "Everything about FTL, LTL, fleet operations, and over-the-road freight management.",
                count: "4 articles",
              },
              {
                icon: DollarSign,
                title: "Cost & Rate Optimization",
                description:
                  "Strategies and tips for reducing freight costs while maintaining service quality.",
                count: "2 articles",
              },
              {
                icon: FileText,
                title: "Compliance & Documentation",
                description:
                  "Stay compliant with guides on import/export documentation, FMCSA regulations, and more.",
                count: "3 articles",
              },
              {
                icon: Users,
                title: "Industry Trends",
                description:
                  "Market analysis, capacity forecasts, and emerging trends in Gulf Coast logistics.",
                count: "5 articles",
              },
              {
                icon: BookOpen,
                title: "How-To Guides",
                description:
                  "Step-by-step guides to help you navigate common logistics challenges and decisions.",
                count: "4 articles",
              },
            ].map((cat, i) => (
              <div
                key={cat.title}
                className={`bg-navy-950 rounded-xl border border-navy-800 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center mb-4">
                  <cat.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed mb-3">
                  {cat.description}
                </p>
                <span className="text-xs text-gold-400 font-semibold">
                  {cat.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* CTA                                                            */}
      {/* ============================================================= */}
      <CTASection
        title="Need Logistics Solutions, Not Just Information?"
        description="Our team is ready to put these insights into action for your business. Get a free, no-obligation freight quote today."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
