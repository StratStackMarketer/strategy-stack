import type { FAQItem } from '../components/sections/FAQ';

// Universal FAQs (used on homepage and as base for verticals)
export const universalFAQs: FAQItem[] = [
  {
    question: "Do you require long-term contracts?",
    answer: "Nope. No contracts, no commitments. We believe in earning your business every month. You can cancel anytime — though we're confident you won't want to."
  },
  {
    question: "How is your pricing so much lower than other agencies?",
    answer: "AI and automation. We've built our entire operation around modern tools that let us deliver premium quality at a fraction of traditional agency costs. We pass those savings directly to you instead of pocketing them."
  },
  {
    question: "What's included in the free audit?",
    answer: "A comprehensive review of your current digital presence — website, SEO, Google Business Profile, social media, and competitor analysis. You'll get a detailed report with actionable recommendations, whether you work with us or not."
  },
  {
    question: "How quickly can you get started?",
    answer: "Fast. Once you're signed up, we kick off your audit immediately. Most clients are fully launched within 1-2 weeks, depending on the package and any custom requirements."
  },
  {
    question: "What if I don't see results?",
    answer: "Our 90-day guarantee has you covered. If you don't see measurable improvement in your marketing metrics within 90 days, we keep working for free until you do. No fine print, no exceptions."
  },
  {
    question: "Do I need to attend a bunch of meetings?",
    answer: "Only if you want to. We've built our process to minimize meetings — you get a real-time dashboard, async updates, and direct access to your account manager. Meetings are available when YOU need them, not when we need to fill a calendar."
  },
  {
    question: "Can I customize my package?",
    answer: "Absolutely. Our tiers are starting points. Need something specific? We'll build a custom package that fits your business. Mix and match services, add à la carte items — whatever works for you."
  },
];

// Home Services specific FAQs
export const homeServicesFAQs: FAQItem[] = [
  {
    question: "Do you work with contractors outside Indianapolis?",
    answer: "Yes! While we're Indianapolis-based and know the local market inside out, we work with home service businesses across the country. Our strategies adapt to your specific market."
  },
  {
    question: "What types of home service businesses do you work with?",
    answer: "HVAC, plumbing, roofing, electrical, landscaping, cleaning services, painting, pest control — if you're in home services, we've probably worked with someone like you. Our strategies are tailored to the trades."
  },
  {
    question: "Can you help me get more Google reviews?",
    answer: "That's a core part of what we do. Our reputation management system automates review requests, makes it easy for happy customers to leave reviews, and helps you respond professionally to all feedback."
  },
  {
    question: "I've been burned by marketing agencies before. Why should I trust you?",
    answer: "We get it — our industry has a lot of overpromisers. That's why we have no contracts, transparent pricing, and a results guarantee. You'll have a real-time dashboard showing exactly what we're doing and how it's performing. No smoke and mirrors."
  },
  {
    question: "Do you handle website design for contractors?",
    answer: "Yes. We offer website design and redesign services optimized for home service businesses — fast-loading, mobile-friendly, built to convert visitors into leads. Pricing starts at $299 depending on complexity."
  },
  ...universalFAQs.slice(0, 3),
];

// Property Management specific FAQs
export const propertyManagementFAQs: FAQItem[] = [
  {
    question: "Do you understand multifamily marketing metrics?",
    answer: "Absolutely. We speak your language — cost-per-lease, occupancy rates, NOI, renewal rates. We've spent 10+ years in multifamily and know that vanity metrics don't pay the bills. We focus on what actually drives leasing performance."
  },
  {
    question: "Can you help with resident retention marketing?",
    answer: "Yes. Retention is often cheaper than acquisition. We build automated renewal campaigns, resident engagement sequences, and reputation management systems that keep your residents happy and renewing."
  },
  {
    question: "Do you integrate with property management software?",
    answer: "We work with most major PMS platforms — Yardi, RealPage, AppFolio, Entrata, and others. Our systems can pull data and push leads where you need them."
  },
  {
    question: "How do you handle marketing for multiple properties?",
    answer: "We can manage individual property marketing or portfolio-wide campaigns. Our dashboard lets you see performance by property, region, or portfolio — whatever view you need."
  },
  {
    question: "What about ILS listings and syndication?",
    answer: "We optimize your presence across all major ILS platforms and ensure consistent NAP (name, address, phone) across the web. Better listings = more qualified traffic = faster leasing."
  },
  ...universalFAQs.slice(0, 3),
];

// Automotive specific FAQs
export const automotiveFAQs: FAQItem[] = [
  {
    question: "Do you work with dealerships or service centers?",
    answer: "Both. Whether you're selling cars, fixing them, detailing them, or washing them — we've got strategies tailored to your specific automotive business. Different models, same results-focused approach."
  },
  {
    question: "How important is reputation management for automotive?",
    answer: "Critical. One bad review can cost you thousands in lost business. Our reputation management system helps you generate more positive reviews, respond professionally to negative ones, and maintain the online reputation that drives customers through your door."
  },
  {
    question: "Can you help with inventory advertising?",
    answer: "Yes. For dealerships, we set up dynamic inventory ads that automatically showcase your available vehicles to in-market shoppers. When a car sells, the ad updates. No manual work required."
  },
  {
    question: "What about service department marketing?",
    answer: "Service is where the profit is — we know that. We build campaigns to drive service appointments, promote seasonal specials, and keep your bays full. Automated reminders for oil changes, tire rotations, and scheduled maintenance are part of the package."
  },
  {
    question: "Do you understand automotive compliance requirements?",
    answer: "Yes. We're familiar with OEM co-op requirements, FTC advertising guidelines, and state-specific regulations. Your ads will be compliant AND effective."
  },
  ...universalFAQs.slice(0, 3),
];

// Retail specific FAQs
export const retailFAQs: FAQItem[] = [
  {
    question: "Can you help a small local retailer compete with big box stores?",
    answer: "That's exactly what we're built for. Local SEO, community engagement, personalized marketing — these are your advantages over the big guys. We help you leverage them with tools and strategies that used to be available only to enterprise retailers."
  },
  {
    question: "Do you work with e-commerce or just brick-and-mortar?",
    answer: "Both. Many of our retail clients are hybrid — physical store plus online sales. We build integrated strategies that drive foot traffic AND online conversions, with consistent branding across channels."
  },
  {
    question: "How do you drive foot traffic to my store?",
    answer: "Local SEO, Google Business Profile optimization, geo-targeted ads, social media engagement, and reputation management. We make sure when someone searches for what you sell in your area, they find YOU."
  },
  {
    question: "Can you help with seasonal promotions?",
    answer: "Absolutely. We plan campaigns around your key seasons — holiday, back-to-school, summer, whatever drives your business. Automated email sequences, social posts, and ads timed to when your customers are ready to buy."
  },
  {
    question: "What about loyalty programs and repeat customers?",
    answer: "Customer retention is huge for retail. We help set up email marketing, loyalty campaigns, and re-engagement sequences that keep customers coming back. Repeat customers are your most profitable — we help you nurture them."
  },
  ...universalFAQs.slice(0, 3),
];

// SaaS Startups specific FAQs
export const saasStartupsFAQs: FAQItem[] = [
  {
    question: "Do you understand SaaS metrics and the startup world?",
    answer: "We've lived it. 10+ years working with early-stage SaaS companies. We know MRR, CAC, LTV, churn, and why your board cares about them. Our strategies are designed to drive the metrics that matter to founders and investors."
  },
  {
    question: "Can you help with content marketing and SEO?",
    answer: "Yes — and it's often the highest-ROI channel for SaaS. We build content strategies that drive organic traffic, establish thought leadership, and generate MQLs. AI-powered content creation keeps costs down without sacrificing quality."
  },
  {
    question: "What about demand generation and paid acquisition?",
    answer: "We run targeted campaigns on Google, LinkedIn, and other channels relevant to your ICP. But we're always watching CAC vs. LTV — we won't burn your runway on inefficient spend."
  },
  {
    question: "How do you handle marketing for technical products?",
    answer: "We work closely with your team to understand your product and ICP. We can translate complex technical value props into messaging that resonates with your buyers — whether they're developers, IT leaders, or business users."
  },
  {
    question: "I'm a solo founder. Can I afford this?",
    answer: "That's why we exist. Traditional agencies want $10k/month retainers that would eat your entire runway. Our packages start at $495/month because we use AI to deliver agency-quality work at startup-friendly prices."
  },
  {
    question: "Do you integrate with our existing tools?",
    answer: "We work with HubSpot, Salesforce, Pipedrive, Segment, Mixpanel, and most other SaaS marketing and analytics tools. We plug into your stack, not replace it."
  },
  ...universalFAQs.slice(0, 2),
];

// FAQ sets by page key
export const faqsByPage: Record<string, FAQItem[]> = {
  home: universalFAQs,
  'home-services': homeServicesFAQs,
  'property-management': propertyManagementFAQs,
  automotive: automotiveFAQs,
  retail: retailFAQs,
  'saas-startups': saasStartupsFAQs,
};

export default faqsByPage;
