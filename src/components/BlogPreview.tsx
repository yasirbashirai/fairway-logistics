import Link from "next/link";

const posts = [
  {
    category: "Industry Insights",
    title: "Navigating Gulf Coast Port Congestion: 2026 Shipper's Guide",
    excerpt:
      "Port delays across the Gulf Coast are impacting supply chains industry-wide. Learn proven strategies to minimize disruption, optimize your routing, and keep freight moving through peak congestion periods.",
    date: "Mar 8, 2026",
    slug: "gulf-coast-port-congestion-guide-2026",
    gradientFrom: "from-gold-300",
    gradientTo: "to-gold-500",
  },
  {
    category: "Company News",
    title: "Fairway Logistics Expands Fleet with 15 New Trucks",
    excerpt:
      "We're investing in our future — and yours. Our latest fleet expansion adds 15 new late-model trucks to ensure reliable capacity, improved fuel efficiency, and enhanced service across all our lanes.",
    date: "Mar 1, 2026",
    slug: "fairway-expands-fleet-15-new-trucks",
    gradientFrom: "from-gold-400",
    gradientTo: "to-gold-600",
  },
  {
    category: "Supply Chain",
    title: "How Asset-Based Carriers Save You Money vs. Traditional Brokers",
    excerpt:
      "Discover why working directly with an asset-based carrier like Fairway eliminates broker markups, provides guaranteed capacity, and delivers better communication from pickup to delivery.",
    date: "Feb 22, 2026",
    slug: "asset-based-carriers-save-money",
    gradientFrom: "from-gold-200",
    gradientTo: "to-gold-400",
  },
];

export default function BlogPreview() {
  return (
    <section className="bg-navy-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
            INSIGHTS &amp; RESOURCES
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Latest from Fairway
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* Blog cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="glass-card rounded-2xl overflow-hidden hover:border-gold-400/20 transition-all duration-300 group flex flex-col"
            >
              {/* Colored top strip */}
              <div
                className={`h-1 bg-gradient-to-r ${post.gradientFrom} ${post.gradientTo}`}
              />

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                {/* Category badge */}
                <span className="text-xs uppercase text-gold-400 bg-gold-400/10 px-3 py-1 rounded-full w-fit font-semibold tracking-wide mb-4">
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="font-heading font-bold text-white text-lg line-clamp-2 mb-3 group-hover:text-gold-200 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-navy-300 line-clamp-3 leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>

                {/* Bottom row: date + read more */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <span className="text-xs text-navy-400">{post.date}</span>
                  <Link
                    href={`/resources/${post.slug}`}
                    className="text-sm text-gold-400 font-semibold hover:text-gold-300 transition-colors"
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <Link
            href="/resources"
            className="text-gold-400 font-semibold hover:text-gold-300 transition-colors inline-flex items-center gap-1"
          >
            View All Resources &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
