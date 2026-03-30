import Link from "next/link";

const posts = [
  {
    category: "Featured Experience",
    title: "Heavy Haul & Over-Dimensional: What We Move Every Day",
    excerpt:
      "From construction equipment and industrial machinery to structural steel and energy components — see how our heavy haul division handles the loads others can't. Permit coordination, route surveys, and escort services included.",
    date: "Mar 15, 2026",
    slug: "gulf-coast-port-congestion-guide-2026",
    gradientFrom: "from-gold-300",
    gradientTo: "to-gold-500",
  },
  {
    category: "Company News",
    title: "Fairway Logistics Expands Fleet with 15 New Trucks",
    excerpt:
      "Our latest fleet expansion adds 15 new late-model trucks. More capacity for our customers, better fuel efficiency, and expanded coverage across the Southeast and nationwide brokerage lanes.",
    date: "Mar 1, 2026",
    slug: "fairway-expands-fleet-15-new-trucks",
    gradientFrom: "from-gold-400",
    gradientTo: "to-gold-600",
  },
  {
    category: "Featured Experience",
    title: "Inside Our 200,000 Sq Ft Bonded Warehouse",
    excerpt:
      "A look at our U.S. Customs bonded warehouse in Mobile, AL — container transloading, cross-docking, inventory management, and seamless integration with our own drayage and trucking fleet.",
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
            <Link
              key={post.slug}
              href={`/resources/${post.slug}`}
              className="block"
            >
              <article className="glass-card rounded-2xl overflow-hidden hover:border-gold-400/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-400/5 transition-all duration-300 group flex flex-col h-full">
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
                    <span className="text-sm text-gold-400 font-semibold group-hover:text-gold-300 transition-colors">
                      Read More &rarr;
                    </span>
                  </div>
                </div>
              </article>
            </Link>
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
