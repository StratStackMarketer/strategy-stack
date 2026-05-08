import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Zap, Rocket, Sparkles, Phone, MessageSquare, RefreshCw,
  ArrowRight, Check, Calendar, Target, Award
} from 'lucide-react';
import { AnimatedGrid } from '../components/ui/AnimatedGrid';
import { CloudGraphics } from '../components/ui/CloudGraphics';
import { Contact } from '../components/sections';
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  { id: 'packs', label: '30-Day Blitz Packs' },
  { id: 'addons', label: 'AI Product Add-Ons' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'after', label: 'After 30 Days' },
  { id: 'faq', label: 'FAQ' },
];

const BLITZ_PACKS = [
  {
    id: 'website',
    icon: Zap,
    color: 'bg-purple-400',
    name: 'Website 30-Day Blitz',
    price: '$987',
    tagline: 'Conversion-focused website overhaul in 30 days.',
    description: 'Full audit, UX improvements, page speed optimization, and lead capture upgrades — all delivered and live within 30 days. Perfect when your website looks fine but isn\'t converting.',
    deliverables: [
      'Complete website audit with prioritized fix list',
      'Mobile responsiveness improvements',
      'Page speed optimization (Core Web Vitals targets)',
      'Lead capture form upgrades and placement',
      'CTA copy and design optimization',
      'Analytics and conversion tracking setup',
      '30-day results review with continuation roadmap',
    ],
    bestFor: 'Site that looks good but isn\'t converting visitors into leads',
  },
  {
    id: 'gbp',
    icon: Rocket,
    color: 'bg-green-400',
    name: 'GBP 30-Day Blitz',
    price: '$747',
    tagline: 'Dominate local search in one focused month.',
    description: 'Complete Google Business Profile optimization, 30 days of posts, review generation campaign, and local ranking push. The fastest path to "found in local search."',
    deliverables: [
      'Full GBP audit and optimization',
      'Categories, services, and attributes alignment',
      'Photo strategy and uploads (10+ optimized photos)',
      '30 days of GBP posts (offers, updates, news)',
      'Active review generation campaign',
      'Q&A management and competitor monitoring',
      'Local ranking report with continuation plan',
    ],
    bestFor: 'Businesses invisible in local search or with sparse profiles',
  },
  {
    id: 'social',
    icon: Sparkles,
    color: 'bg-cyan-400',
    name: 'Social Media 30-Day Blitz',
    price: '$478',
    tagline: 'Re-energize your social presence in one month.',
    description: 'Complete content calendar, designed posts, scheduling, and engagement monitoring across 3 platforms for 30 days. Perfect when your social has gone quiet.',
    deliverables: [
      'Brand voice and content strategy doc',
      '30 days of designed posts (image + copy)',
      'Cross-platform scheduling (3 channels of your choice)',
      'Daily engagement monitoring and response',
      'Hashtag and audience research',
      'End-of-month performance report',
      'Content library handoff and continuation plan',
    ],
    bestFor: 'Businesses with quiet or inconsistent social presence',
  },
];

const ADDON_PACKS = [
  { name: 'AI Voice Receptionist', price: 'From $287/mo', icon: Phone, color: 'bg-yellow-400', desc: '24/7 call answering, qualification, and appointment booking' },
  { name: 'AI Lead Follow-Up Agent', price: 'From $287/mo', icon: Zap, color: 'bg-primary', desc: '60-second response, qualification, and nurture automation' },
  { name: 'Website Chatbot', price: 'From $178/mo', icon: MessageSquare, color: 'bg-cyan-400', desc: '24/7 lead capture and qualification on your website' },
  { name: 'Database Reactivation', price: 'From $178/mo', icon: RefreshCw, color: 'bg-green-400', desc: 'Re-engage cold leads and past customers' },
];

const FAQS = [
  { q: 'Can I run multiple booster packs at the same time?', a: 'Yes. Many clients run a Website Blitz and a GBP Blitz simultaneously. Or layer in an AI Product add-on alongside a Blitz. We coordinate the timing so they reinforce each other.' },
  { q: 'What if I need more than 30 days?', a: 'After 30 days you can: continue with another Blitz, convert to a monthly retainer (often at a discount), or part ways with everything we built — your decision, no pressure.' },
  { q: 'Is there a guarantee?', a: 'If we don\'t deliver everything outlined in the pack within 30 days, we work an additional 2 weeks free. Our completion rate is 100% — but you\'re covered either way.' },
  { q: 'Do I keep what we build?', a: 'Yes. Everything we create — content, design improvements, profile optimizations, automations — is yours to keep regardless of whether you continue with us.' },
  { q: 'How fast can we start?', a: 'Most Blitz Packs kick off within 3-5 business days of payment. We aim for fast: discovery call, kickoff call, then execution begins.' },
  { q: 'What\'s the difference between a Blitz Pack and an Add-On?', a: 'A Blitz Pack is a 30-day, single-payment campaign with a clear end date. An Add-On is an ongoing monthly capability (AI Voice, Chatbot, etc.) that keeps running. They\'re built to work together.' },
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

export function BoosterPacksPage() {
  const active = useActiveSection(NAV_ITEMS.map(n => n.id));

  return (
    <>
      {/* Hero */}
      <section
        className="min-h-[70vh] pt-32 pb-20 bg-white relative overflow-hidden z-10"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 96%, 0 100%)' }}
      >
        <AnimatedGrid gridSize={40} darkMode={false} />
        <CloudGraphics darkMode={false} density="medium" />
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <span className="inline-block px-4 py-2 bg-yellow-400 border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider">
              Pricing & Packaging
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-6xl md:text-8xl font-heading mb-6 leading-none">
            One problem.<br />
            30 days.<br />
            <span className="text-primary">Fixed price.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl">
            Single-payment campaigns built around one specific objective. No retainer required. No ongoing commitment. Just focused execution and clear results in 30 days.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
            <a href="#packs" className="btn-brutal btn-brutal-primary text-lg px-8 py-4">
              See Booster Packs <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <Link to="/how-it-works/audits" className="btn-brutal btn-brutal-white text-lg px-8 py-4">
              Get a Free Audit First
            </Link>
          </motion.div>
        </div>
      </section>

      <StickySubNav active={active} />

      {/* What Booster Packs Are */}
      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading mb-6">What's a Booster Pack?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">A focused 30-day campaign targeting one specific area of your marketing. Single payment. Defined deliverables. Clear end date. Perfect when you want fast results without the commitment of a monthly retainer — or when there's one area clearly underperforming and you want to fix it before going broader.</p>
          </motion.div>
        </div>
      </section>

      {/* 30-Day Blitz Packs */}
      <section id="packs" className="py-20 bg-gray-50 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 max-w-2xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary text-white border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider mb-6">
              30-Day Blitz Packs
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-4">Three blitz packs. Three focus areas.</h2>
            <p className="text-xl text-gray-600">Pick the area that needs the most attention — or run multiple in parallel.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {BLITZ_PACKS.map((pack, i) => {
              const Icon = pack.icon;
              return (
                <motion.div
                  key={pack.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-brutal bg-white flex flex-col"
                >
                  <div className={`p-6 ${pack.color} border-b-4 border-black`}>
                    <Icon className="h-8 w-8 mb-4" />
                    <h3 className="text-2xl font-heading mb-2 leading-tight">{pack.name}</h3>
                    <p className="text-sm font-bold mb-4">{pack.tagline}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-heading">{pack.price}</span>
                      <span className="text-sm opacity-70">single payment</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-gray-600 text-sm mb-5">{pack.description}</p>
                    <div className="mb-5 p-3 bg-gray-100 border-2 border-black">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Best For</p>
                      <p className="text-sm font-bold">{pack.bestFor}</p>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">What's included</p>
                    <ul className="space-y-2 mb-6 flex-grow">
                      {pack.deliverables.map((d, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <Link to="/how-it-works/audits" className="btn-brutal btn-brutal-primary w-full justify-center text-center py-3 text-sm">
                      Start with a Free Audit
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Product Add-Ons */}
      <section id="addons" className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 max-w-2xl mx-auto">
            <span className="inline-block px-4 py-2 bg-cyan-400 border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider mb-6">
              AI Product Add-Ons
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-4">Layer AI on any blitz</h2>
            <p className="text-xl text-gray-600">Available à la carte — works alongside any Blitz Pack or as a standalone capability.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {ADDON_PACKS.map((addon, i) => {
              const Icon = addon.icon;
              return (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="card-brutal bg-white"
                >
                  <div className={`p-5 ${addon.color} border-b-3 border-black flex items-center gap-3`}>
                    <Icon className="h-5 w-5" />
                    <span className="font-bold text-sm leading-tight">{addon.name}</span>
                  </div>
                  <div className="p-5">
                    <div className="text-2xl font-heading mb-1">{addon.price}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">add-on or à la carte</div>
                    <p className="text-sm text-gray-600">{addon.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-900 text-white relative overflow-hidden z-10">
        <AnimatedGrid gridSize={60} darkMode={true} />
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-yellow-400 text-black border-3 border-white brutal-shadow-sm font-bold text-sm uppercase tracking-wider mb-6">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-4">From signup to results in 30 days</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: '01', icon: Target, title: 'Choose your pack', body: 'Pick the Blitz that targets your highest-impact gap. Pay once. We take it from there.' },
              { n: '02', icon: Calendar, title: 'Kickoff call', body: 'Within 3-5 days. We align on goals, gather context, and lock the 30-day plan.' },
              { n: '03', icon: Sparkles, title: '30-day execution', body: 'We run the campaign. You get progress updates without the meeting overhead.' },
              { n: '04', icon: Award, title: 'Results review', body: 'Day 30: full results report and recommendation on what to do next. No pressure.' },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white border-4 border-white brutal-shadow-md text-2xl font-heading mb-4">{step.n}</div>
                  <Icon className="h-6 w-6 text-yellow-400 mx-auto mb-3" />
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* After 30 Days */}
      <section id="after" className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-400 border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider mb-6">
              After 30 Days
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-4">Three paths forward</h2>
            <p className="text-xl text-gray-600">No pressure. No upsell push. Just the option that fits where you are.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { color: 'bg-yellow-400', title: 'Continue with us', body: 'Convert to a monthly retainer (often at a discount) or run another Blitz targeting a different area. Most clients pick this path.' },
              { color: 'bg-cyan-400', title: 'Take it from here', body: 'Keep everything we built and run with it yourself. The improvements compound — no further work required.' },
              { color: 'bg-gray-200', title: 'Step away clean', body: 'Part ways with no obligation. Everything we created is still yours. We hope to work together again someday.' },
            ].map((path, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-brutal bg-white">
                <div className={`p-3 ${path.color} border-b-3 border-black text-center`}>
                  <span className="font-bold text-sm uppercase tracking-widest">Option {String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3">{path.title}</h3>
                  <p className="text-gray-600 text-sm">{path.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50 relative z-10">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl font-heading">Common questions</h2>
          </motion.div>
          {FAQS.map((faq, i) => (
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
              { to: '/solutions', label: 'All solutions' },
              { to: '/pricing-packaging', label: 'Full pricing' },
              { to: '/products', label: 'AI products' },
              { to: '/services', label: 'À la carte services' },
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

export default BoosterPacksPage;
