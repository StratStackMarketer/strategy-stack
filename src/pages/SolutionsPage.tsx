import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Zap, Repeat, Plus, Settings, ArrowRight, CheckCircle,
  Building2, Wrench, Car
} from 'lucide-react';
import { AnimatedGrid } from '../components/ui/AnimatedGrid';
import { CloudGraphics } from '../components/ui/CloudGraphics';
import { Contact } from '../components/sections';
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  { id: 'solutions', label: 'Solution Types' },
  { id: 'mapping', label: 'Find Your Fit' },
  { id: 'case-studies', label: 'Real Results' },
  { id: 'faq', label: 'FAQ' },
];

const SOLUTION_TYPES = [
  {
    id: 'blitz',
    icon: Zap,
    color: 'bg-yellow-400',
    name: '30-Day Blitz Packs',
    tagline: 'One specific problem. 30 days. Fixed price.',
    description: 'Single-payment campaigns built around one objective. Fast results in a defined window. Best for testing a new agency or fixing one clearly broken area.',
    startingPrice: 'From $478',
    bestFor: [
      'Testing us before committing to a retainer',
      'Fixing one specific area that\'s underperforming',
      'Project-based budgets, not monthly',
      'Need a fast result in a defined window',
    ],
    cta: 'See Booster Packs',
    ctaLink: '/booster-packs',
  },
  {
    id: 'retainer',
    icon: Repeat,
    color: 'bg-primary',
    name: 'Monthly Retainers',
    tagline: 'Ongoing infrastructure. Compounding results.',
    description: 'The full marketing system running month after month. Strategy, services, AI products, and reporting. Built to scale with your business as results compound.',
    startingPrice: '$495–$1,495/mo',
    bestFor: [
      'Established businesses ready to grow',
      'Want everything working together',
      'Need ongoing optimization and strategy',
      'Looking for a long-term marketing partner',
    ],
    cta: 'See Pricing Tiers',
    ctaLink: '/pricing-packaging#retainers',
  },
  {
    id: 'addon',
    icon: Plus,
    color: 'bg-cyan-400',
    name: 'AI Product Add-Ons',
    tagline: 'Add specific capabilities to any plan.',
    description: 'Available as add-ons to any retainer or à la carte. AI Voice Receptionist, Lead Follow-Up Agent, Website Chatbot, and Database Reactivation — pick what fits.',
    startingPrice: 'From $178/mo',
    bestFor: [
      'Already have marketing — need AI capability added',
      'One specific capability gap to fill',
      'Want to test AI products individually',
      'Have an existing agency, just need the AI layer',
    ],
    cta: 'See AI Products',
    ctaLink: '/products',
  },
  {
    id: 'custom',
    icon: Settings,
    color: 'bg-green-400',
    name: 'Custom Solutions',
    tagline: 'Multi-location, complex, or unique needs.',
    description: 'Multi-location operations, white-label arrangements, complex integrations, or non-standard requirements. Quoted individually based on scope.',
    startingPrice: 'Custom quote',
    bestFor: [
      'Multi-location or franchise operations',
      'Complex existing tech stack to integrate with',
      'White-label or partner arrangements',
      'Standard plans don\'t fit your situation',
    ],
    cta: 'Talk to Us',
    ctaLink: '/how-it-works/audits',
  },
];

const PROBLEM_MAP = [
  { situation: 'Leads go cold before I can call back', solution: 'AI Lead Follow-Up Agent (add-on)', link: '/products' },
  { situation: 'One area of my marketing is clearly broken', solution: '30-Day Blitz Pack targeting that area', link: '/booster-packs' },
  { situation: 'I want to test you before committing', solution: '30-Day Blitz Pack or Starter Retainer', link: '/booster-packs' },
  { situation: 'I need everything working together', solution: 'Growth or Scale retainer', link: '/pricing-packaging' },
  { situation: 'I\'m not sure what\'s actually wrong', solution: 'Free marketing audit first', link: '/how-it-works/audits' },
  { situation: 'Multiple locations or franchise setup', solution: 'Scale tier or Custom Solution quote', link: '/pricing-packaging' },
  { situation: 'I just need one capability added', solution: 'AI Product add-on (à la carte)', link: '/products' },
  { situation: 'Calls coming in after hours go unanswered', solution: 'AI Voice Receptionist add-on', link: '/products' },
  { situation: 'Cold CRM database I want to revive', solution: 'Database Reactivation Agent', link: '/products' },
  { situation: 'GBP feels invisible in local search', solution: 'GBP 30-Day Blitz', link: '/booster-packs' },
];

const CASE_STUDIES = [
  {
    company: 'Greenfield Residential',
    vertical: 'Property Management',
    icon: Building2,
    color: 'bg-primary',
    headline: '34% more leasing inquiries in 30 days',
    solution: 'GBP 30-Day Blitz Pack',
    description: 'A property management company struggling with vacancy used a focused 30-day GBP blitz to dramatically increase leasing inquiries. Profile completeness and review velocity drove the results.',
    metric: '+34%',
    metricLabel: 'Leasing inquiries',
  },
  {
    company: 'Reliable Roofing Co.',
    vertical: 'Home Services',
    icon: Wrench,
    color: 'bg-yellow-400',
    headline: '2.4x leads, 51% lower cost per acquisition',
    solution: 'Growth Retainer',
    description: 'A home services contractor tired of inconsistent lead flow moved to a Growth retainer. Three months in: lead volume more than doubled while cost per acquisition was cut in half.',
    metric: '2.4x',
    metricLabel: 'More leads',
  },
  {
    company: 'Independent Used Auto Group',
    vertical: 'Automotive',
    icon: Car,
    color: 'bg-red-400',
    headline: 'Full AI stack — receptionist, follow-up, social',
    solution: 'Custom Solution',
    description: 'An independent dealership built a custom solution combining AI Voice Receptionist, Lead Follow-Up Agent, and Social Media Management. Full coverage from first touch to closed deal.',
    metric: 'Full AI',
    metricLabel: 'Stack deployed',
  },
];

const FAQS = [
  { q: 'What\'s the difference between a solution and a service?', a: 'Services are individual capabilities (SEO, ads, web design, etc.). Solutions are pre-built combinations of services and AI products designed around a specific outcome — built to work together.' },
  { q: 'Can I mix and match solution types?', a: 'Yes. Most clients do. Retainer clients add Booster Packs for specific campaigns. Blitz clients often convert to retainers after seeing initial results. Add-ons stack onto any plan.' },
  { q: 'How do I know which solution is right for me?', a: 'Start with a free marketing audit. We\'ll tell you exactly which solution fits based on what we find — no guessing, no upsell pressure.' },
  { q: 'Is there a contract?', a: 'No long-term contracts on anything. Retainers are month-to-month. Blitz packs are single-payment with no ongoing commitment. Add-ons can be cancelled any time.' },
  { q: 'Can I switch from a Blitz to a retainer (or vice versa)?', a: 'Yes — and most clients do. Blitz first to test, then retainer once results prove out. Or retainer with a Blitz layered in for a specific push. Total flexibility.' },
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

export function SolutionsPage() {
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
              What We Do
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-6xl md:text-8xl font-heading mb-6 leading-none">
            Pre-built systems for<br />
            <span className="text-primary">the problems</span><br />
            we see most.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl">
            We've packaged our most effective service and product combinations into ready-to-run solutions. Pick the one that matches your situation — or tell us your problem and we'll build something custom.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
            <Link to="/how-it-works/audits" className="btn-brutal btn-brutal-primary text-lg px-8 py-4">
              Not sure which fits? Get a Free Audit <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="#mapping" className="btn-brutal btn-brutal-white text-lg px-8 py-4">
              Find Your Fit
            </a>
          </motion.div>
        </div>
      </section>

      <StickySubNav active={active} />

      {/* Solution Types */}
      <section id="solutions" className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading mb-4">Four ways to work with us</h2>
            <p className="text-xl text-gray-600">From a one-time campaign to a full marketing partnership. Pick what fits.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {SOLUTION_TYPES.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <motion.div
                  key={sol.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-brutal bg-white"
                >
                  <div className={`p-6 ${sol.color} border-b-4 border-black`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-white/30 border-3 border-black">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-widest opacity-70">Solution {String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-3xl font-heading mb-2">{sol.name}</h3>
                    <p className="text-base font-bold mb-3">{sol.tagline}</p>
                    <div className="text-2xl font-heading">{sol.startingPrice}</div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-5">{sol.description}</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Best for</p>
                    <ul className="space-y-2 mb-6">
                      {sol.bestFor.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link to={sol.ctaLink} className="btn-brutal btn-brutal-white w-full justify-center text-center py-3 text-sm">
                      {sol.cta} <ArrowRight className="ml-2 h-4 w-4 inline" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problem → Solution Mapping */}
      <section id="mapping" className="py-20 bg-gray-900 text-white relative overflow-hidden z-10">
        <AnimatedGrid gridSize={60} darkMode={true} />
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-yellow-400 text-black border-3 border-white brutal-shadow-sm font-bold text-sm uppercase tracking-wider mb-6">
              Find Your Fit
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-4">Tell us your situation. We'll point to the right solution.</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Skip the sales call. Find what fits in 30 seconds.</p>
          </motion.div>

          <div className="border-4 border-white bg-white text-black">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-4 bg-primary text-white font-bold text-sm uppercase tracking-widest border-b-4 md:border-b-4 border-black">
                Your situation
              </div>
              <div className="p-4 bg-yellow-400 font-bold text-sm uppercase tracking-widest border-b-4 border-black md:border-l-2">
                Recommended solution
              </div>
            </div>
            {PROBLEM_MAP.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`grid grid-cols-1 md:grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <div className="p-4 border-b border-gray-200 md:border-r-2 text-gray-800">
                  <span className="md:hidden text-xs font-bold uppercase tracking-widest text-gray-400 block mb-1">Situation</span>
                  "{row.situation}"
                </div>
                <div className="p-4 border-b border-gray-200">
                  <span className="md:hidden text-xs font-bold uppercase tracking-widest text-gray-400 block mb-1">Solution</span>
                  <Link to={row.link} className="text-primary hover:text-purple-700 font-bold inline-flex items-center gap-2">
                    {row.solution} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 max-w-2xl mx-auto">
            <span className="inline-block px-4 py-2 bg-cyan-400 border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider mb-6">
              Real Results
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-4">One result per solution type</h2>
            <p className="text-xl text-gray-600">How real clients used these solutions and what they got out of them.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {CASE_STUDIES.map((cs, i) => {
              const Icon = cs.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-brutal bg-white"
                >
                  <div className={`p-6 ${cs.color} ${cs.color === 'bg-primary' ? 'text-white' : ''} border-b-4 border-black`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-white/30 border-3 border-black">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest opacity-80">{cs.vertical}</span>
                    </div>
                    <div className="text-5xl font-heading mb-1">{cs.metric}</div>
                    <div className="text-sm font-bold uppercase tracking-wider opacity-90">{cs.metricLabel}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-1">{cs.headline}</h3>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">{cs.company}</div>
                    <p className="text-gray-600 text-sm mb-4">{cs.description}</p>
                    <div className="pt-4 border-t-2 border-gray-100">
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Solution used</div>
                      <div className="text-sm font-bold text-primary">{cs.solution}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
              { to: '/products', label: 'AI products' },
              { to: '/services', label: 'À la carte services' },
              { to: '/booster-packs', label: 'Booster packs' },
              { to: '/pricing-packaging', label: 'Full pricing' },
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

export default SolutionsPage;
