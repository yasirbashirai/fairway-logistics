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
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&q=80",
    date: "March 5, 2026",
    readTime: "8 min read",
    href: "#",
  },
  {
    title: "Gulf Coast Shipping Guide 2026",
    excerpt:
      "Everything shippers need to know about moving freight through Gulf Coast ports in 2026 — from port updates and capacity trends to rate forecasts and regulatory changes.",
    category: "Industry Guide",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    date: "February 20, 2026",
    readTime: "12 min read",
    href: "#",
  },
  {
    title: "Asset-Based vs Broker-Only: Which Model Is Right for You?",
    excerpt:
      "Compare the advantages and trade-offs of working with an asset-based carrier versus a broker-only model. Understand which approach best fits your shipping needs.",
    category: "Logistics Strategy",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    date: "February 10, 2026",
    readTime: "6 min read",
    href: "#",
  },
  {
    title: "5 Proven Strategies for Reducing Freight Costs",
    excerpt:
      "Discover practical, actionable strategies to reduce your freight spend without sacrificing service quality. From lane optimization to consolidation tactics.",
    category: "Cost Optimization",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    date: "January 28, 2026",
    readTime: "7 min read",
    href: "#",
  },
  {
    title: "Import/Export Documentation Guide for Gulf Coast Shippers",
    excerpt:
      "Navigate the paperwork of international shipping with this comprehensive guide to customs documentation, compliance requirements, and common pitfalls to avoid.",
    category: "Import/Export",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    date: "January 15, 2026",
    readTime: "10 min read",
    href: "#",
  },
  {
    title: "Choosing the Right Logistics Partner: A Decision Framework",
    excerpt:
      "A structured approach to evaluating and selecting the right logistics partner for your business. Key criteria, red flags, and questions every shipper should ask.",
    category: "Business Guide",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    date: "January 5, 2026",
    readTime: "9 min read",
    href: "#",
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
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
      />

      {/* ============================================================= */}
      {/* ARTICLES GRID                                                  */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Latest Articles
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Featured Resources
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
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
                    ? "bg-gold-gradient text-dark"
                    : "border border-neutral-200 text-neutral-600 hover:border-gold hover:text-gold"
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
                <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 bg-dark/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                        <Tag className="w-3 h-3 text-gold" />
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Gold accent */}
                  <div className="h-1 bg-gold-gradient" />

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-neutral-400 mb-3">
                      <span>{article.date}</span>
                      <span className="w-1 h-1 rounded-full bg-neutral-300" />
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-dark mb-3 group-hover:text-gold transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-sm text-neutral-600 leading-relaxed mb-4 flex-1 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-1.5 text-gold font-semibold text-sm mt-auto pt-2">
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
              <p className="text-neutral-500 text-lg">
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
      <section className="py-16 sm:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-gold" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Stay Ahead of the Curve
            </h2>
            <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
              Subscribe to our newsletter for monthly logistics insights,
              industry updates, and Gulf Coast shipping tips delivered straight
              to your inbox.
            </p>

            {subscribed ? (
              <div className="bg-dark-light rounded-xl border border-white/10 p-8">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  You&apos;re Subscribed!
                </h3>
                <p className="text-neutral-400 text-sm">
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
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-neutral-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="bg-gold-gradient text-dark font-bold text-sm px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-neutral-500 text-xs mt-4">
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* RESOURCE CATEGORIES                                            */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Browse By Topic
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
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
                className={`bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <cat.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-heading font-bold text-dark mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                  {cat.description}
                </p>
                <span className="text-xs text-gold font-semibold">
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
