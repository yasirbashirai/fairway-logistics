export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  content: ArticleSection[];
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export const articles: Article[] = [
  // --- BlogPreview articles ---
  {
    slug: "gulf-coast-port-congestion-guide-2026",
    title: "Navigating Gulf Coast Port Congestion: 2026 Shipper's Guide",
    excerpt:
      "Port delays across the Gulf Coast are impacting supply chains industry-wide. Learn proven strategies to minimize disruption, optimize your routing, and keep freight moving through peak congestion periods.",
    category: "Industry Insights",
    image: "/images/gulf-coast.jpg",
    date: "Mar 8, 2026",
    readTime: "10 min read",
    content: [
      {
        heading: "Understanding the Current Congestion Landscape",
        paragraphs: [
          "The Gulf Coast port corridor — spanning from New Orleans to Pensacola — has experienced unprecedented congestion in early 2026. Container volumes are up 18% year-over-year at the Port of Mobile, driven by reshoring initiatives and growing trade with Latin American markets.",
          "This surge in volume has created bottlenecks at terminal gates, extended dwell times, and pushed chassis availability to critical levels. Shippers who relied on traditional scheduling patterns are finding their supply chains under strain.",
        ],
      },
      {
        heading: "Key Factors Driving Congestion",
        paragraphs: [
          "Several converging factors are contributing to the current situation across Gulf Coast ports.",
        ],
        bullets: [
          "Increased container volume from reshoring and nearshoring trends",
          "Chassis shortages due to extended equipment dwell times",
          "Labor availability challenges during peak season",
          "Infrastructure projects at multiple terminals happening simultaneously",
          "Seasonal weather events causing intermittent delays",
        ],
      },
      {
        heading: "Proven Strategies to Navigate Congestion",
        paragraphs: [
          "The most effective approach combines proactive planning with flexible execution. Shippers who have maintained on-time delivery rates above 95% during this period share several common practices.",
          "First, diversify your port options. If your primary route goes through Mobile, maintain relationships with drayage providers at Gulfport and New Orleans as alternates. Second, extend your booking windows — the standard 48-hour notice is no longer sufficient. Leading shippers are booking 5-7 days in advance.",
        ],
      },
      {
        heading: "Working with Asset-Based Carriers",
        paragraphs: [
          "One of the biggest advantages during congestion periods is working with an asset-based carrier like Fairway Logistics. Unlike broker-only models, asset-based carriers control their own equipment and can prioritize your loads without bidding on the spot market.",
          "Our fleet of company-owned trucks means we can guarantee equipment availability even when spot market capacity tightens. We maintain dedicated chassis pools at the Port of Mobile, reducing the wait times that plague shippers relying on public chassis.",
        ],
      },
      {
        heading: "Looking Ahead: What to Expect in Q2 2026",
        paragraphs: [
          "Infrastructure improvements at the Port of Mobile are expected to increase gate throughput by 25% by mid-2026. Combined with new chassis pool agreements and expanded warehouse capacity, the congestion outlook is improving. However, shippers should maintain their diversification strategies and continue building strong carrier relationships to stay ahead of future disruptions.",
        ],
      },
    ],
  },
  {
    slug: "fairway-expands-fleet-15-new-trucks",
    title: "Fairway Logistics Expands Fleet with 15 New Trucks",
    excerpt:
      "We're investing in our future — and yours. Our latest fleet expansion adds 15 new late-model trucks to ensure reliable capacity, improved fuel efficiency, and enhanced service across all our lanes.",
    category: "Company News",
    image: "/images/trucks.jpg",
    date: "Mar 1, 2026",
    readTime: "5 min read",
    content: [
      {
        heading: "Investing in Growth and Reliability",
        paragraphs: [
          "Fairway Logistics is proud to announce the addition of 15 new late-model trucks to our fleet, bringing our total company-owned equipment count to over 60 units. This expansion represents our continued commitment to being the Gulf Coast's most reliable asset-based carrier.",
          "The new trucks include a mix of day cabs for regional drayage operations and sleeper cabs for longer Gulf Coast corridors, ensuring we have the right equipment for every lane we serve.",
        ],
      },
      {
        heading: "New Equipment Specifications",
        paragraphs: [
          "Every truck in this expansion was selected to maximize efficiency, safety, and driver comfort.",
        ],
        bullets: [
          "2026 Freightliner Cascadia models with advanced fuel efficiency",
          "EPA-compliant engines reducing emissions by 15% versus prior generation",
          "Advanced safety systems including collision mitigation and lane departure",
          "ELD-integrated telematics for real-time tracking and compliance",
          "Improved driver amenities to attract and retain top talent",
        ],
      },
      {
        heading: "What This Means for Our Customers",
        paragraphs: [
          "Increased fleet capacity means more guaranteed loads for our customers, especially during peak shipping seasons. You no longer need to worry about capacity crunches — Fairway's own trucks are ready to roll when you need them.",
          "The improved fuel efficiency also translates to more competitive rates. By reducing our operating costs, we can pass savings along to you without sacrificing service quality. Newer equipment also means fewer breakdowns and more consistent transit times.",
        ],
      },
      {
        heading: "Supporting Our Growing Service Network",
        paragraphs: [
          "This fleet expansion supports our growing footprint across all six Gulf Coast service areas — Mobile, Baldwin County, Pensacola, Biloxi, Gulfport, and New Orleans. Five of the new trucks are dedicated to Port of Mobile drayage operations, where demand has increased over 20% year-over-year.",
          "The remaining units will serve our expanding FTL and regional distribution routes, ensuring we maintain the on-time delivery rates our customers depend on.",
        ],
      },
    ],
  },
  {
    slug: "asset-based-carriers-save-money",
    title: "How Asset-Based Carriers Save You Money vs. Traditional Brokers",
    excerpt:
      "Discover why working directly with an asset-based carrier like Fairway eliminates broker markups, provides guaranteed capacity, and delivers better communication from pickup to delivery.",
    category: "Supply Chain",
    image: "/images/truck-road.jpg",
    date: "Feb 22, 2026",
    readTime: "7 min read",
    content: [
      {
        heading: "The Asset-Based Advantage",
        paragraphs: [
          "When you ship freight, you have two primary options: work with a freight broker who arranges carriers on your behalf, or work directly with an asset-based carrier that owns its own trucks. While both models have their place, understanding the financial and operational differences can save your business significant money.",
          "Fairway Logistics is an asset-based carrier — meaning we own our trucks, employ our drivers, and control our operations from end to end. Here's why that matters for your bottom line.",
        ],
      },
      {
        heading: "Eliminating the Broker Markup",
        paragraphs: [
          "Freight brokers typically add a 15-25% markup to the carrier's rate. This margin covers the broker's overhead, technology, sales team, and profit. When you work directly with an asset-based carrier, that markup disappears entirely.",
          "On a typical Gulf Coast lane paying $2,500 through a broker, you could be saving $375-$625 per load by working directly with the carrier. For a shipper moving 20 loads per month, that's $7,500-$12,500 in annual savings on a single lane.",
        ],
      },
      {
        heading: "Guaranteed Capacity vs. Spot Market Gambles",
        paragraphs: [
          "Brokers rely on available spot market capacity to cover your loads. During tight markets, this means your freight competes with every other shipper for limited trucks. Rates spike, service suffers, and your load may sit at the dock.",
        ],
        bullets: [
          "Asset-based carriers guarantee equipment availability for contracted customers",
          "No re-brokering risk — your freight stays on the carrier's own truck",
          "Consistent rates regardless of spot market fluctuations",
          "Priority scheduling during peak seasons and tight capacity periods",
          "Direct driver communication for real-time shipment updates",
        ],
      },
      {
        heading: "Better Communication and Accountability",
        paragraphs: [
          "When problems arise — and in freight, they sometimes do — you want direct access to the people controlling your shipment. With a broker, you're one step removed from the actual carrier. Information passes through intermediaries, delays in communication compound, and resolution takes longer.",
          "With Fairway, you communicate directly with our dispatch team, who are in constant contact with our drivers. If there's a weather delay or a scheduling change, you know immediately. This direct line of communication reduces errors, speeds resolution, and builds the trust that long-term shipping partnerships require.",
        ],
      },
      {
        heading: "Making the Right Choice for Your Business",
        paragraphs: [
          "Brokers are valuable when you need access to specialized equipment you don't regularly use, or when you're shipping to areas outside a carrier's network. But for your core lanes — the routes you ship regularly — partnering with an asset-based carrier like Fairway delivers better rates, more reliable service, and direct accountability.",
        ],
      },
    ],
  },
  // --- Resources page articles ---
  {
    slug: "understanding-port-drayage",
    title: "Understanding Port Drayage: A Complete Guide",
    excerpt:
      "Learn what port drayage is, how it works, and why choosing the right drayage provider can make or break your supply chain efficiency at Gulf Coast ports.",
    category: "Drayage",
    image: "/images/gulf-coast.jpg",
    date: "March 5, 2026",
    readTime: "8 min read",
    content: [
      {
        heading: "What Is Port Drayage?",
        paragraphs: [
          "Port drayage refers to the short-distance transport of shipping containers between a port terminal and a nearby destination — typically a warehouse, distribution center, or rail yard. It's the critical first or last mile of intermodal freight movement.",
          "While the distance is short (usually under 100 miles), drayage is one of the most complex segments of the supply chain. It involves coordinating with port authorities, managing chassis equipment, navigating terminal appointment systems, and meeting strict cutoff times.",
        ],
      },
      {
        heading: "How the Drayage Process Works",
        paragraphs: [
          "The typical drayage process follows a specific sequence that requires careful coordination at every step.",
        ],
        bullets: [
          "Vessel arrives at port and containers are offloaded to the terminal yard",
          "Customs clearance and documentation are completed",
          "Carrier receives release notification and schedules terminal appointment",
          "Driver arrives at the terminal, passes through the gate, and picks up the container",
          "Container is transported to the consignee's facility for unloading",
          "Empty container is returned to the terminal or designated return location",
        ],
      },
      {
        heading: "Why Your Drayage Provider Matters",
        paragraphs: [
          "The difference between a good drayage provider and a mediocre one can be measured in demurrage fees, detention charges, and missed delivery windows. A port-experienced carrier knows which terminal gates have shorter wait times, when to schedule appointments for maximum efficiency, and how to handle documentation issues before they become costly problems.",
          "Asset-based drayage providers like Fairway Logistics maintain dedicated equipment at the port, eliminating the chassis availability issues that delay broker-arranged drayage. Our drivers are port-certified and familiar with every terminal at the Port of Mobile.",
        ],
      },
      {
        heading: "Common Drayage Challenges and How to Avoid Them",
        paragraphs: [
          "Demurrage (fees charged when a container sits at port too long) and detention (fees for holding equipment beyond the free time) are the two most expensive drayage pitfalls. These charges can add $150-$300 per day to your shipping costs.",
          "To minimize these costs, work with a carrier who monitors container release status proactively, schedules pickups as soon as containers are available, and maintains backup equipment for high-priority loads.",
        ],
      },
      {
        heading: "Choosing the Right Drayage Partner",
        paragraphs: [
          "When evaluating drayage providers for Gulf Coast operations, prioritize carriers who own their equipment, have established relationships at your target ports, and can demonstrate consistent on-time performance. Ask about their chassis pool access, driver port certifications, and their process for handling customs holds or documentation discrepancies.",
        ],
      },
    ],
  },
  {
    slug: "gulf-coast-shipping-guide-2026",
    title: "Gulf Coast Shipping Guide 2026",
    excerpt:
      "Everything shippers need to know about moving freight through Gulf Coast ports in 2026 — from port updates and capacity trends to rate forecasts and regulatory changes.",
    category: "Industry Guide",
    image: "/images/trucks.jpg",
    date: "February 20, 2026",
    readTime: "12 min read",
    content: [
      {
        heading: "The Gulf Coast Shipping Landscape in 2026",
        paragraphs: [
          "The Gulf Coast continues to emerge as one of America's most dynamic freight corridors. Container volumes at Port of Mobile, Port of Gulfport, and Port of New Orleans have grown by a combined 22% since 2024, driven by reshoring trends, Panama Canal alternatives, and expanding Southeast manufacturing.",
          "For shippers navigating this growing corridor, understanding the landscape is essential for maintaining competitive logistics operations.",
        ],
      },
      {
        heading: "Port Updates and Infrastructure Improvements",
        paragraphs: [
          "Major infrastructure investments are transforming Gulf Coast port capabilities.",
        ],
        bullets: [
          "Port of Mobile: New container terminal expansion adding 650,000 TEU annual capacity",
          "Port of Gulfport: $250M restoration project nearing completion, adding modern berths",
          "Port of New Orleans: Intermodal rail improvements reducing inland transit times",
          "I-10 corridor improvements enhancing east-west trucking efficiency",
          "New warehousing developments in Mobile and Baldwin County corridors",
        ],
      },
      {
        heading: "Rate Trends and Capacity Outlook",
        paragraphs: [
          "Gulf Coast trucking rates have stabilized after the volatility of 2024-2025. FTL rates on core Gulf Coast lanes average $2.15-$2.85 per mile, competitive with national averages. Drayage rates at Port of Mobile remain 10-15% below major East Coast ports, a key advantage for cost-conscious shippers.",
          "Capacity is tightening on certain lanes, particularly Mobile-to-Atlanta and Mobile-to-Houston corridors. Shippers should secure contracted rates with asset-based carriers rather than relying on spot market availability.",
        ],
      },
      {
        heading: "Regulatory Changes to Watch",
        paragraphs: [
          "Several regulatory changes in 2026 affect Gulf Coast shippers. Updated FMCSA hours-of-service interpretations, new EPA emission standards for port equipment, and enhanced customs documentation requirements for agricultural imports are all impacting operations. Working with a compliant, knowledgeable carrier helps navigate these changes without supply chain disruptions.",
        ],
      },
      {
        heading: "Strategic Recommendations for 2026",
        paragraphs: [
          "To optimize your Gulf Coast shipping operations in 2026, focus on building dedicated carrier relationships rather than relying on transactional spot bookings. Diversify your port entry points to mitigate congestion risk. Invest in visibility tools to track shipments in real time. And consider warehousing options in Mobile or Baldwin County to buffer against supply chain variability.",
        ],
      },
    ],
  },
  {
    slug: "asset-based-vs-broker-only",
    title: "Asset-Based vs Broker-Only: Which Model Is Right for You?",
    excerpt:
      "Compare the advantages and trade-offs of working with an asset-based carrier versus a broker-only model. Understand which approach best fits your shipping needs.",
    category: "Logistics Strategy",
    image: "/images/truck-road.jpg",
    date: "February 10, 2026",
    readTime: "6 min read",
    content: [
      {
        heading: "Understanding the Two Models",
        paragraphs: [
          "In freight logistics, you'll encounter two primary service models: asset-based carriers who own their trucks and equipment, and freight brokers who arrange transportation using third-party carriers. Each model has distinct advantages depending on your shipping needs.",
          "Asset-based carriers like Fairway Logistics invest heavily in trucks, trailers, warehousing, and technology. Brokers invest in carrier networks, technology platforms, and sales relationships. Understanding what each brings to the table helps you make better logistics decisions.",
        ],
      },
      {
        heading: "When Asset-Based Carriers Excel",
        paragraphs: [
          "Asset-based carriers provide the most value in scenarios where reliability, consistency, and direct accountability matter most.",
        ],
        bullets: [
          "Regular lane shipments where consistent service is critical",
          "Time-sensitive freight that can't afford spot market uncertainty",
          "Port drayage where terminal relationships and equipment access matter",
          "High-value cargo requiring vetted, company-employed drivers",
          "Situations where direct communication with dispatch improves outcomes",
        ],
      },
      {
        heading: "When Brokers Add Value",
        paragraphs: [
          "Freight brokers serve an important role in the logistics ecosystem, particularly for occasional or specialized shipping needs.",
        ],
        bullets: [
          "One-time or infrequent shipments to unfamiliar markets",
          "Specialized equipment needs (temperature-controlled, oversized, etc.)",
          "Nationwide coverage beyond a carrier's primary service area",
          "Overflow capacity during unexpected demand spikes",
        ],
      },
      {
        heading: "The Hybrid Approach",
        paragraphs: [
          "Many successful shippers use a hybrid approach — partnering with an asset-based carrier for their core, high-volume lanes while using broker services for supplementary or specialized needs. This gives you the cost savings and reliability of direct carrier relationships on your most important routes, with the flexibility of broker networks when needed.",
          "At Fairway Logistics, we offer both asset-based trucking on our Gulf Coast lanes and brokerage services for destinations beyond our fleet's reach, giving you the best of both worlds from a single partner.",
        ],
      },
    ],
  },
  {
    slug: "reducing-freight-costs",
    title: "5 Proven Strategies for Reducing Freight Costs",
    excerpt:
      "Discover practical, actionable strategies to reduce your freight spend without sacrificing service quality. From lane optimization to consolidation tactics.",
    category: "Cost Optimization",
    image: "/images/warehouse.jpg",
    date: "January 28, 2026",
    readTime: "7 min read",
    content: [
      {
        heading: "Why Freight Cost Reduction Matters",
        paragraphs: [
          "Transportation costs typically represent 6-10% of a company's total revenue and 40-60% of total logistics spend. Even modest reductions can have a significant impact on profitability. The key is reducing costs without degrading the service quality that keeps your customers satisfied.",
        ],
      },
      {
        heading: "Strategy 1: Optimize Your Lane Mix",
        paragraphs: [
          "Analyze your shipping data to identify your top 10-15 lanes by volume. These core lanes are where you have the most negotiating leverage and where dedicated carrier relationships yield the best rates. Moving even 10% of your spot market spend to contracted rates on high-volume lanes can save 12-20% per load.",
        ],
      },
      {
        heading: "Strategy 2: Consolidate Shipments",
        paragraphs: [
          "Shipping multiple LTL loads when a single FTL would be more cost-effective is one of the most common freight cost mistakes. Review your shipping patterns for opportunities to consolidate smaller loads into full truckloads. A single FTL shipment typically costs 30-50% less than the equivalent volume shipped LTL.",
        ],
      },
      {
        heading: "Strategy 3: Reduce Accessorial Charges",
        paragraphs: [
          "Accessorial charges — detention, demurrage, liftgate, residential delivery — can add 15-25% to your freight bill. Most are avoidable with better planning.",
        ],
        bullets: [
          "Load and unload trucks within free time to avoid detention fees",
          "Ensure dock availability and staffing for scheduled deliveries",
          "Provide accurate weight, dimensions, and commodity information",
          "Verify delivery addresses are commercial with dock access",
          "Pick up containers from port within free time to avoid demurrage",
        ],
      },
      {
        heading: "Strategy 4: Partner with Asset-Based Carriers",
        paragraphs: [
          "Working directly with asset-based carriers eliminates the 15-25% broker margin on your core lanes. You also gain guaranteed capacity at predictable rates, reducing the costly spot market spikes that blow up transportation budgets during tight capacity periods.",
        ],
      },
      {
        heading: "Strategy 5: Leverage Technology for Visibility",
        paragraphs: [
          "Real-time shipment tracking, automated appointment scheduling, and data analytics help you identify inefficiencies and make better decisions. Carriers with modern tracking systems — like Fairway's GPS-enabled fleet — give you the visibility to proactively manage exceptions before they become expensive problems.",
        ],
      },
    ],
  },
  {
    slug: "import-export-documentation-guide",
    title: "Import/Export Documentation Guide for Gulf Coast Shippers",
    excerpt:
      "Navigate the paperwork of international shipping with this comprehensive guide to customs documentation, compliance requirements, and common pitfalls to avoid.",
    category: "Import/Export",
    image: "/images/hero.jpg",
    date: "January 15, 2026",
    readTime: "10 min read",
    content: [
      {
        heading: "The Documentation Landscape",
        paragraphs: [
          "International shipping through Gulf Coast ports requires a complex web of documentation. Incomplete or incorrect paperwork is the single most common cause of customs delays, and a single missing document can hold your cargo for days or even weeks. Understanding the requirements upfront saves time, money, and frustration.",
        ],
      },
      {
        heading: "Essential Import Documents",
        paragraphs: [
          "Every import shipment arriving at a Gulf Coast port requires a standard set of documents. Missing any of these can result in customs holds and storage charges.",
        ],
        bullets: [
          "Commercial Invoice — detailed description of goods, values, and terms of sale",
          "Bill of Lading (B/L) — the contract between shipper and carrier for goods transport",
          "Packing List — itemized contents of each container or package",
          "Customs Entry Form (CBP Form 3461) — filed by your customs broker",
          "ISF (10+2) Filing — required 24 hours before vessel departure from origin",
          "Arrival Notice — issued by the steamship line upon vessel arrival",
        ],
      },
      {
        heading: "Essential Export Documents",
        paragraphs: [
          "Exports require their own documentation set, with additional requirements for certain commodities and destinations.",
        ],
        bullets: [
          "Shipper's Letter of Instruction (SLI) — authorization for the freight forwarder",
          "Electronic Export Information (EEI) — filed via AESDirect for shipments over $2,500",
          "Certificate of Origin — verifies where goods were manufactured",
          "Commercial Invoice — with INCOTERMS and complete buyer/seller details",
          "Dock Receipt — proof of delivery to the port terminal",
        ],
      },
      {
        heading: "Common Documentation Pitfalls",
        paragraphs: [
          "The most frequent documentation errors we see at Gulf Coast ports include mismatched container numbers between the B/L and actual equipment, incorrect HS tariff codes leading to wrong duty calculations, late ISF filings resulting in $5,000 per-container penalties, and incomplete commercial invoices missing required valuation details.",
          "Each of these errors is preventable with proper processes and experienced logistics partners who review documentation before submission.",
        ],
      },
      {
        heading: "How Fairway Helps with Documentation",
        paragraphs: [
          "Our import/export logistics team at Fairway coordinates closely with customs brokers, freight forwarders, and port authorities to ensure your documentation is complete and accurate. We monitor container release status in real time and coordinate pickup immediately upon customs clearance, minimizing demurrage charges and keeping your supply chain moving.",
        ],
      },
    ],
  },
  {
    slug: "choosing-logistics-partner",
    title: "Choosing the Right Logistics Partner: A Decision Framework",
    excerpt:
      "A structured approach to evaluating and selecting the right logistics partner for your business. Key criteria, red flags, and questions every shipper should ask.",
    category: "Business Guide",
    image: "/images/truckings.jpg",
    date: "January 5, 2026",
    readTime: "9 min read",
    content: [
      {
        heading: "Why Your Logistics Partner Choice Matters",
        paragraphs: [
          "Your logistics partner directly impacts customer satisfaction, operational costs, and competitive positioning. A great partner reduces costs, improves delivery performance, and frees you to focus on your core business. A poor partner creates headaches, drives up costs, and damages customer relationships.",
          "Yet many businesses choose logistics partners based on price alone. While cost is important, the cheapest option often delivers the lowest service quality. Here's a framework for making a more informed decision.",
        ],
      },
      {
        heading: "The Five Critical Evaluation Criteria",
        paragraphs: [
          "When evaluating potential logistics partners, assess each candidate across these five dimensions.",
        ],
        bullets: [
          "Reliability — On-time delivery rate, claims ratio, and capacity consistency",
          "Capability — Services offered, geographic coverage, and equipment types",
          "Communication — Responsiveness, tracking capabilities, and proactive updates",
          "Compliance — FMCSA registration, insurance coverage, safety rating, and certifications",
          "Value — Total cost including hidden fees, not just the base rate",
        ],
      },
      {
        heading: "Red Flags to Watch For",
        paragraphs: [
          "Certain warning signs should give you pause during the evaluation process.",
        ],
        bullets: [
          "Rates significantly below market — often indicates corner-cutting on safety or service",
          "No asset ownership — purely brokered operations lack direct control",
          "Poor safety rating on FMCSA SAFER system",
          "Vague or missing insurance documentation",
          "No references from similar-sized businesses in your industry",
          "Inability to provide tracking or visibility tools",
        ],
      },
      {
        heading: "Questions Every Shipper Should Ask",
        paragraphs: [
          "Before signing with any carrier, ask these questions: Do you own your trucks or broker loads? What is your on-time delivery rate for the past 12 months? Can you provide three references from current customers? What technology do you use for tracking and communication? How do you handle service failures or claims? What is your driver turnover rate?",
          "The answers will reveal more about a carrier's true quality than any sales presentation.",
        ],
      },
      {
        heading: "Building a Long-Term Partnership",
        paragraphs: [
          "The best logistics relationships are partnerships, not transactions. Look for a carrier who invests time in understanding your business, proposes solutions proactively, and treats your freight as if their own reputation depends on it — because it does. At Fairway Logistics, we build our business on exactly this kind of partnership, and our 98% client retention rate reflects it.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(currentSlug: string, limit = 3): Article[] {
  const current = getArticleBySlug(currentSlug);
  if (!current) return articles.slice(0, limit);

  return articles
    .filter((a) => a.slug !== currentSlug)
    .sort((a, b) => (a.category === current.category ? -1 : b.category === current.category ? 1 : 0))
    .slice(0, limit);
}
