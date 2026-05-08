import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Search, Code, Palette, MapPin, Share2,
  ArrowRight, Plus
} from 'lucide-react';
import { AnimatedGrid } from '../components/ui/AnimatedGrid';
import { CloudGraphics } from '../components/ui/CloudGraphics';
import { Contact } from '../components/sections';
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  { id: 'seo', label: 'SEO / AIEO' },
  { id: 'web-dev', label: 'Web Development' },
  { id: 'web-design', label: 'Web Design' },
  { id: 'gbp', label: 'Google Business Profile' },
  { id: 'social-media', label: 'Social Media' },
];

const CATEGORIES = [
  {
    id: 'seo',
    icon: Search,
    color: 'bg-cyan-400',
    name: 'SEO / AIEO',
    tagline: 'Get found by buyers actively looking — by humans and by AI.',
    description: 'Modern search means showing up in Google AND in AI answer engines like ChatGPT, Perplexity, and Claude. We build optimization strategies for both — so you\'re visible wherever your buyers are searching.',
    services: [
      { name: 'On-page optimization', price: 'From $178/mo', desc: 'Title tags, meta descriptions, header structure, content optimization, and internal linking architecture.' },
      { name: 'Keyword research & plan', price: 'From $178/mo', desc: 'Strategic keyword targeting based on your buyer\'s actual search behavior — not generic volume metrics.' },
      { name: 'Copywriting', price: 'From $178/mo', desc: 'SEO-driven content written for humans first, search engines second. Conversion-focused, voice-aligned.' },
      { name: 'Page load speed optimization', price: 'From $178/mo', desc: 'Core Web Vitals, image optimization, render blocking, code splitting — fast sites rank higher and convert more.' },
      { name: 'Internal page linking', price: 'From $178/mo', desc: 'Strategic linking between pages to spread authority and guide buyers through your site.' },
      { name: 'Meta-tags and headers', price: 'From $178/mo', desc: 'Schema markup, OG tags, structured data — every signal Google needs to rank you correctly.' },
      { name: 'External backlink generation', price: 'From $178/mo', desc: 'Quality backlinks from relevant sources. No spammy networks, no shortcuts that backfire.' },
      { name: 'Blog post content creation', price: 'From $178/mo', desc: 'Long-form content built around buyer-intent topics. Compounds in value over time.' },
    ],
  },
  {
    id: 'web-dev',
    icon: Code,
    color: 'bg-red-400',
    name: 'Web Development',
    tagline: 'Build pages and sites that actually convert considered buyers.',
    description: 'High-consideration buyers behave differently than impulse shoppers. They compare, return, research, and need trust signals at every stage. Our development is built around how they actually buy.',
    services: [
      { name: 'Landing page development / optimization', price: 'Starting @ $489', desc: 'Single-purpose pages built for one campaign or one offer. Conversion-tested layouts.' },
      { name: 'Custom or revised template website', price: 'Starting @ $587', desc: 'Full multi-page sites — either built from scratch or adapted from a template foundation.' },
    ],
  },
  {
    id: 'web-design',
    icon: Palette,
    color: 'bg-yellow-400',
    name: 'Web Design / Redesign',
    tagline: 'A site that looks current and converts. Both matter.',
    description: 'Bad design erodes trust before a buyer ever reads your copy. We build sites that signal credibility, mobile-first responsiveness, and a clear conversion path — whether you need a fresh build or a refresh.',
    services: [
      { name: 'Website design / redesign', price: 'Starting @ $587', desc: 'Full design or redesign with brand-aligned visual identity, conversion-optimized layouts, and modern UX patterns.' },
      { name: 'Existing website redesign / refresh', price: 'Starting @ $348', desc: 'Visual refresh and modernization on your existing site structure. Faster turnaround than a full rebuild.' },
    ],
  },
  {
    id: 'gbp',
    icon: MapPin,
    color: 'bg-green-400',
    name: 'Google Business Profile (powered by AI)',
    tagline: 'Win local search and turn your GBP into a lead magnet.',
    description: 'For most local businesses, GBP is more important than your website. It\'s where buyers compare before they call. We optimize, monitor, and automate every part of it — using AI to do what would take a human 10x the time.',
    services: [
      { name: 'GBP setup / optimization', price: 'From $178/mo', desc: 'Full profile audit, category accuracy, photo strategy, services configuration, and ongoing optimization.' },
      { name: 'Google Reviews monitoring & automation', price: 'From $178/mo', desc: 'Monitor incoming reviews, AI-drafted responses for your approval, automated review request flows after service completion.' },
      { name: 'By-owner content publishing', price: 'From $178/mo', desc: 'Regular GBP posts — offers, updates, photos, Q&A — that keep your profile active and ranking.' },
      { name: 'Automated review and referral generation', price: 'From $178/mo', desc: 'Systematic outreach to past customers via email + SMS to generate reviews and referral momentum.' },
    ],
  },
  {
    id: 'social-media',
    icon: Share2,
    color: 'bg-purple-400',
    name: 'Social Media Management',
    tagline: 'Content and presence that builds authority across the consideration journey.',
    description: 'High-consideration buyers research you for weeks before they call. Your social presence is part of that research. We build content systems that show up consistently — across the platforms your buyers actually use.',
    services: [
      { name: 'Channel setup / optimization or refresh', price: 'Starting @ $278', desc: 'One-time setup, optimization, or refresh of your profiles across platforms. Brand-aligned, fully configured.' },
      { name: 'Post content calendar planning & scheduling', price: 'From $178/mo', desc: 'Monthly editorial calendar built around your business rhythms, audience, and goals. Reviewed, approved, scheduled.' },
      { name: 'Post content brand strategy', price: 'From $178/mo', desc: 'Voice, tone, visual guidelines, and post type mix — so every piece of content reinforces your brand.' },
      { name: 'Theme, concept, and ideation', price: 'From $178/mo', desc: 'Ongoing development of content themes and campaign concepts — not just one-off posts, but coherent narratives.' },
      { name: 'Post content library generation', price: 'From $178/mo', desc: 'Build a backlog of evergreen content you can pull from anytime — never run out of things to post.' },
      { name: 'Post scheduling & publishing', price: 'From $178/mo', desc: 'Hands-off posting across all channels with optimal timing per platform. We execute, you don\'t lift a finger.' },
      { name: 'Post image / graphic design', price: 'From $178/mo', desc: 'Custom visuals built to your brand standards — designed to stop scrolling, not just fill the feed.' },
      { name: 'Downloadable content generation', price: 'From $178', desc: 'Lead magnets, guides, playbooks, and templates that turn followers into leads. Per-asset pricing.' },
    ],
  },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-30% 0px -60% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);
  return active;
}

function StickySubNav({ active }: { active: string }) {
  return (
    <div className="sticky top-[64px] z-40 bg-white border-b-4 border-black shadow-sm">
      <div className="container mx-auto px-6">
        <nav className="flex overflow-x-auto scrollbar-hide">
          {NAV_ITEMS.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex-shrink-0 px-5 py-4 text-xs md:text-sm font-bold uppercase tracking-wider border-b-4 -mb-[4px] transition-colors whitespace-nowrap ${
                active === item.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-black hover:border-gray-300'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

function CategorySection({ category, index }: { category: typeof CATEGORIES[0]; index: number }) {
  const Icon = category.icon;
  const isEven = index % 2 === 0;

  return (
    <section id={category.id} className={`py-20 ${isEven ? 'bg-white' : 'bg-gray-50'} relative`}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className={`inline-flex p-3 ${category.color} border-3 border-black brutal-shadow-sm`}>
              <Icon className="h-7 w-7" />
            </div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Service Category {String(index + 1).padStart(2, '0')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading mb-3 leading-tight">{category.name}</h2>
          <p className="text-xl text-primary font-bold mb-4">{category.tagline}</p>
          <p className="text-lg text-gray-600 leading-relaxed">{category.description}</p>
        </motion.div>

        {/* Service grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {category.services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-brutal bg-white p-6 hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-bold text-lg leading-tight">{service.name}</h3>
                <span className={`flex-shrink-0 px-3 py-1 ${category.color} border-2 border-black text-xs font-bold whitespace-nowrap`}>
                  {service.price}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesPage() {
  const active = useActiveSection(NAV_ITEMS.map(n => n.id));

  return (
    <>
      {/* Hero */}
      <section
        className="min-h-[80vh] pt-32 pb-24 bg-white relative overflow-hidden z-10"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 96%, 0 100%)' }}
      >
        <AnimatedGrid gridSize={40} darkMode={false} />
        <CloudGraphics darkMode={false} density="medium" />
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <span className="inline-block px-4 py-2 bg-cyan-400 border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider">
              What We Do
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-6xl md:text-8xl font-heading mb-6 leading-none">
            Marketing services<br />
            <span className="text-primary">built around</span><br />
            how buyers actually buy.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl">
            SEO, web development, design, Google Business Profile, and social media — every service is built for businesses where customers research, compare, and take time to decide.
          </motion.p>

          {/* Category preview cards */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-5 mb-10">
            {CATEGORIES.map(c => {
              const Icon = c.icon;
              return (
                <a key={c.id} href={`#${c.id}`} className="flex-shrink-0 snap-start w-44 md:w-auto card-brutal bg-white p-4 group hover:-translate-y-1 transition-transform">
                  <div className={`inline-flex p-2 ${c.color} border-3 border-black brutal-shadow-sm mb-3`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="font-bold text-sm leading-tight group-hover:text-primary transition-colors">{c.name}</div>
                </a>
              );
            })}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row gap-4">
            <Link to="/how-it-works/audits" className="btn-brutal btn-brutal-primary text-lg px-8 py-4">
              Get a Free Audit <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/pricing-packaging" className="btn-brutal btn-brutal-white text-lg px-8 py-4">
              See Full Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      <StickySubNav active={active} />

      {/* Service category sections */}
      {CATEGORIES.map((cat, i) => (
        <CategorySection key={cat.id} category={cat} index={i} />
      ))}

      {/* Approach */}
      <section className="section-full bg-gray-900 text-white relative overflow-hidden z-10">
        <AnimatedGrid gridSize={60} darkMode={true} />
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-yellow-400 text-black border-3 border-white brutal-shadow-sm font-bold text-sm uppercase tracking-wider mb-6">
              How We Approach Services
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-4">Strategy first. Activity never.</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">We don't sell hours or "deliverables." We sell outcomes. Every service starts here.</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: '01', title: 'Audit first', body: 'Free marketing audit before we recommend anything. Fix the right thing in the right order.' },
              { n: '02', title: 'Strategy, not activity', body: 'Every service has a measurable goal. We don\'t do "things" — we build toward outcomes.' },
              { n: '03', title: 'Execute and report', body: 'Monthly reporting on revenue metrics, not impressions. You know what\'s working every cycle.' },
              { n: '04', title: 'Optimize continuously', body: 'No set-and-forget. Every month builds on the last. Compounding results over time.' },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white border-4 border-white brutal-shadow-md text-2xl font-heading mb-4">{step.n}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* À la carte vs bundles callout */}
      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-brutal bg-yellow-400 p-8 md:p-12 border-4 border-black brutal-shadow-xl">
            <div className="flex items-start gap-4 mb-4">
              <Plus className="h-8 w-8 flex-shrink-0" />
              <div>
                <h3 className="text-3xl font-heading mb-2">Want it all together?</h3>
                <p className="text-lg mb-6">Most clients save significantly by bundling these services into a monthly retainer ($495–$1,495/mo) or running a focused 30-Day Blitz instead of going piece by piece.</p>
                <Link to="/pricing-packaging" className="btn-brutal bg-black text-white border-3 border-black px-6 py-3 font-bold inline-flex items-center gap-2">
                  See Bundled Pricing <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-full bg-gray-50 relative z-10">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl font-heading">Common questions</h2>
          </motion.div>
          {[
            { q: 'Do I need all five service categories?', a: 'No. Start with what your free audit shows is the highest-impact gap. Add more services when those start producing results.' },
            { q: 'Can I just buy one service à la carte?', a: 'Yes. Every service is available individually. Most clients eventually consolidate into a retainer because it\'s cheaper, but you can start with whatever makes sense.' },
            { q: 'How long before I see results from SEO?', a: 'SEO compounds. You\'ll see early wins (rankings movement, GBP improvements) within weeks. Meaningful traffic and lead growth typically takes 8–12 weeks.' },
            { q: 'What\'s "AIEO" — and is that something I need?', a: 'AI Engine Optimization. As more buyers research through ChatGPT, Perplexity, and Claude instead of (or alongside) Google, your business needs to show up there too. We build for both.' },
            { q: 'Are services contracted?', a: 'No. All services are month-to-month. You can cancel any time. We earn your business every cycle.' },
            { q: 'Do services come with reporting?', a: 'Yes. Every service includes monthly performance reporting tied to revenue metrics — not impressions, clicks, or vanity numbers.' },
          ].map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="mb-4 p-6 bg-white border-3 border-black brutal-shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-primary">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom links */}
      <section className="py-12 bg-white border-t-4 border-black">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-400 text-xs mb-5 uppercase tracking-widest font-bold">Also worth seeing</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { to: '/products', label: 'AI products' },
              { to: '/solutions', label: 'Bundled solutions' },
              { to: '/pricing-packaging', label: 'Full pricing' },
              { to: '/how-it-works/audits', label: 'Free audit' },
            ].map(link => (
              <Link key={link.to} to={link.to} className="btn-brutal btn-brutal-white px-5 py-3 text-sm">{link.label} →</Link>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default ServicesPage;
