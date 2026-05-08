import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Check, X, Zap, Rocket, Crown, Phone, MessageSquare, RefreshCw,
  ArrowRight, Shield, Sparkles, Calendar, Settings
} from 'lucide-react';
import { AnimatedGrid } from '../components/ui/AnimatedGrid';
import { CloudGraphics } from '../components/ui/CloudGraphics';
import { Contact } from '../components/sections';
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  { id: 'retainers', label: 'Monthly Retainers' },
  { id: 'blitz', label: '30-Day Blitz Packs' },
  { id: 'addons', label: 'AI Products' },
  { id: 'compare', label: 'Compare Plans' },
  { id: 'faq', label: 'FAQ' },
];

const TIERS = [
  {
    name: 'Starter',
    icon: Zap,
    price: '495',
    color: 'bg-cyan-400',
    description: 'Perfect for businesses just starting with AI-powered marketing.',
    bestFor: 'Solo operators or small teams testing the waters',
    features: [
      'Google Business Profile optimization',
      'SEO foundation setup & configuration',
      'AI content calendar (1 month)',
      'Review management setup',
      'Monthly performance reporting',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    icon: Rocket,
    price: '995',
    color: 'bg-primary',
    description: 'The sweet spot. Everything you need to dominate locally.',
    bestFor: 'Established businesses ready to scale lead generation',
    features: [
      'Everything in Starter, plus:',
      'Full SEO audit & ongoing optimization',
      'Google Ads setup & management ($300/mo ad spend included)',
      'Social media content (4 posts/week)',
      'Reputation management & review responses',
      'Monthly strategy calls (2x)',
      'Advanced analytics & ROI tracking',
    ],
    popular: true,
  },
  {
    name: 'Scale',
    icon: Crown,
    price: '1,495',
    color: 'bg-yellow-400',
    description: 'Full-service marketing. Automation. Custom solutions.',
    bestFor: 'High-volume or multi-location operations',
    features: [
      'Everything in Growth, plus:',
      'Email marketing campaigns (automated)',
      'Retargeting & conversion optimization',
      'Custom website landing pages',
      'Lead scoring & nurturing automation',
      'Weekly strategy calls + on-demand support',
      'Custom reporting dashboard',
    ],
    popular: false,
  },
];

const BLITZ_PACKS = [
  {
    name: 'Website 30-Day Blitz',
    price: '$987',
    color: 'bg-purple-400',
    icon: Zap,
    description: 'Full conversion audit, UX fixes, page speed optimization, and lead capture improvements — all in 30 days.',
    deliverables: [
      'Complete website audit & action plan',
      'Mobile responsiveness fixes',
      'Page speed optimization (Core Web Vitals)',
      'Lead capture form improvements',
      'CTA placement and copy optimization',
      'Analytics setup and tracking',
      'Final results review and roadmap',
    ],
  },
  {
    name: 'GBP 30-Day Blitz',
    price: '$747',
    color: 'bg-green-400',
    icon: Rocket,
    description: 'Complete Google Business Profile optimization, 30 days of posts, review generation campaign, and local ranking push.',
    deliverables: [
      'Full GBP audit and optimization',
      'Category and service alignment',
      'Photo strategy and uploads',
      '30 days of GBP posts',
      'Review generation campaign',
      'Q&A management setup',
      'Local ranking report and roadmap',
    ],
  },
  {
    name: 'Social Media 30-Day Blitz',
    price: '$478',
    color: 'bg-cyan-400',
    icon: Sparkles,
    description: 'Complete content calendar, designed posts, scheduling, and engagement monitoring across 3 platforms for 30 days.',
    deliverables: [
      'Brand voice and content strategy',
      '30 days of designed posts',
      'Cross-platform scheduling (3 channels)',
      'Engagement monitoring',
      'Hashtag and audience strategy',
      'Performance reporting',
      'Continuation roadmap',
    ],
  },
];

const ADDONS = [
  { name: 'AI Voice Receptionist', price: '$287', icon: Phone, color: 'bg-yellow-400', desc: 'Answers calls, books appointments, handles FAQs 24/7' },
  { name: 'AI Lead Follow-Up Agent', price: '$287', icon: Zap, color: 'bg-primary', desc: '60-second response, qualification, and nurture automation' },
  { name: 'Website Chatbot', price: '$178', icon: MessageSquare, color: 'bg-cyan-400', desc: '24/7 lead capture and qualification on your website' },
  { name: 'Database Reactivation', price: '$178', icon: RefreshCw, color: 'bg-green-400', desc: 'Re-engage cold leads and past customers automatically' },
];

const COMPARE_FEATURES = [
  { category: 'Strategy & Reporting', items: [
    { name: 'Monthly performance reporting', starter: true, growth: true, scale: true },
    { name: 'Strategy calls', starter: '—', growth: '2x/month', scale: 'Weekly' },
    { name: 'Advanced analytics & ROI tracking', starter: false, growth: true, scale: true },
    { name: 'Custom reporting dashboard', starter: false, growth: false, scale: true },
    { name: 'On-demand support', starter: false, growth: false, scale: true },
  ]},
  { category: 'SEO & Content', items: [
    { name: 'SEO foundation setup', starter: true, growth: true, scale: true },
    { name: 'Full SEO audit & ongoing optimization', starter: false, growth: true, scale: true },
    { name: 'AI content calendar', starter: '1 month', growth: 'Ongoing', scale: 'Ongoing' },
    { name: 'Social media content', starter: false, growth: '4 posts/wk', scale: '4 posts/wk' },
  ]},
  { category: 'Paid Advertising', items: [
    { name: 'Google Ads setup & management', starter: false, growth: true, scale: true },
    { name: 'Ad spend included', starter: false, growth: '$300/mo', scale: '$300/mo' },
    { name: 'Retargeting & conversion optimization', starter: false, growth: false, scale: true },
    { name: 'Email marketing automation', starter: false, growth: false, scale: true },
  ]},
  { category: 'Reputation & Local', items: [
    { name: 'Google Business Profile optimization', starter: true, growth: true, scale: true },
    { name: 'Review management setup', starter: true, growth: true, scale: true },
    { name: 'Reputation management & review responses', starter: false, growth: true, scale: true },
  ]},
  { category: 'Conversion & Automation', items: [
    { name: 'Custom website landing pages', starter: false, growth: false, scale: true },
    { name: 'Lead scoring & nurturing automation', starter: false, growth: false, scale: true },
  ]},
];

const FAQS = [
  { q: 'Do you have long-term contracts?', a: 'No. Every plan is month-to-month. Cancel any time, zero penalty. We earn your business every cycle.' },
  { q: 'Is there a free trial?', a: 'Yes — start with a free marketing audit. It shows exactly what working with us would look like before you spend a dollar. No credit card required.' },
  { q: 'What\'s your satisfaction guarantee?', a: 'If you\'re not seeing measurable results in the first 60 days of a retainer, we\'ll work an additional month free. We\'re that confident in the system.' },
  { q: 'Can I switch tiers later?', a: 'Yes. Upgrade or downgrade any time. Most clients start at Starter or with a Blitz Pack and move up as results compound.' },
  { q: 'What\'s the difference between a Blitz Pack and a retainer?', a: 'A Blitz Pack is a one-time, fixed-price 30-day campaign focused on one specific objective. A retainer is ongoing monthly work covering the full system. Many clients start with a Blitz to test, then convert to a retainer.' },
  { q: 'Are AI products included in retainers?', a: 'The AI Lead Follow-Up Agent is included in Growth and Scale plans. Other AI products (Voice Receptionist, Chatbot, Reactivation) are available as add-ons starting at $178/mo.' },
  { q: 'Are there setup fees?', a: 'No setup fees on retainers. Blitz Packs are single-payment with everything included. Some à la carte services may have one-time setup fees, listed transparently before you commit.' },
  { q: 'What if I need something custom?', a: 'Multi-location, white-label, complex integrations — we quote those individually. Talk to us about your situation and we\'ll build something that fits.' },
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

function CompareCheck({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="h-5 w-5 text-green-500 mx-auto" />;
  if (value === false || value === '—') return <X className="h-4 w-4 text-gray-300 mx-auto" />;
  return <span className="text-sm font-bold text-gray-700">{value}</span>;
}

export function PricingPackagingPage() {
  const [pricingMode, setPricingMode] = useState<'retainer' | 'blitz'>('retainer');
  const active = useActiveSection(NAV_ITEMS.map(n => n.id));

  return (
    <>
      {/* Hero */}
      <section
        className="min-h-[60vh] pt-32 pb-16 bg-white relative overflow-hidden z-10"
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

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-heading mb-6 leading-none">
            Pricing that's <span className="text-primary">transparent.</span><br />
            Packaging that <span className="text-primary">flexes.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl">
            Monthly retainers, single-payment 30-day blitz packs, AI product add-ons, or à la carte services. No long-term contracts. No hidden fees. Pick what fits.
          </motion.p>

          {/* Mode toggle */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="inline-flex bg-gray-100 border-3 border-black brutal-shadow-md p-1 mb-8">
            <button
              onClick={() => setPricingMode('retainer')}
              className={`px-6 py-3 font-bold text-sm uppercase tracking-wider transition-colors ${pricingMode === 'retainer' ? 'bg-primary text-white' : 'text-gray-600'}`}
            >
              Monthly Retainer
            </button>
            <button
              onClick={() => setPricingMode('blitz')}
              className={`px-6 py-3 font-bold text-sm uppercase tracking-wider transition-colors ${pricingMode === 'blitz' ? 'bg-primary text-white' : 'text-gray-600'}`}
            >
              30-Day Blitz
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-sm text-gray-500">
            {pricingMode === 'retainer' ? 'Ongoing monthly work. Compounds over time.' : 'Single payment. One specific objective. Done in 30 days.'}
          </motion.div>
        </div>
      </section>

      <StickySubNav active={active} />

      {/* Retainers */}
      <section id="retainers" className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 max-w-2xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary text-white border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider mb-6">
              Monthly Retainers
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-4">Three tiers. Built to scale with you.</h2>
            <p className="text-xl text-gray-600">Each tier is a complete marketing system — strategy, execution, AI, and reporting. Upgrade any time.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {TIERS.map((tier, i) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`card-brutal bg-white relative ${tier.popular ? 'lg:-mt-4 lg:mb-4 lg:scale-105 brutal-shadow-xl' : ''}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 border-3 border-black brutal-shadow-sm px-4 py-1 z-10">
                      <span className="text-xs font-bold uppercase tracking-wider">Most Popular</span>
                    </div>
                  )}
                  <div className={`p-6 ${tier.color} border-b-4 border-black`}>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="h-8 w-8" />
                      <span className="text-xs font-bold uppercase tracking-widest opacity-70">Tier 0{i + 1}</span>
                    </div>
                    <h3 className="text-3xl font-heading mb-2">{tier.name}</h3>
                    <p className="text-sm leading-snug">{tier.description}</p>
                  </div>
                  <div className="p-6">
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-heading">${tier.price}</span>
                        <span className="text-gray-500">/mo</span>
                      </div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mt-2">{tier.bestFor}</p>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, j) => {
                        const isHeader = feature.startsWith('Everything in');
                        return (
                          <li key={j} className={`flex items-start gap-2 text-sm ${isHeader ? 'font-bold text-gray-900 pt-2 border-t border-gray-100' : 'text-gray-700'}`}>
                            {!isHeader && <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />}
                            <span className={isHeader ? 'pl-0' : ''}>{feature}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <Link
                      to="/how-it-works/audits"
                      className={`btn-brutal ${tier.popular ? 'btn-brutal-primary' : 'btn-brutal-white'} w-full justify-center text-center py-3`}
                    >
                      Start with a Free Audit
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="text-center text-gray-500 mt-8 text-sm">All retainers are month-to-month. No long-term contracts.</p>
        </div>
      </section>

      {/* Blitz Packs */}
      <section id="blitz" className="py-20 bg-gray-900 text-white relative overflow-hidden z-10">
        <AnimatedGrid gridSize={60} darkMode={true} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 max-w-2xl mx-auto">
            <span className="inline-block px-4 py-2 bg-yellow-400 text-black border-3 border-white brutal-shadow-sm font-bold text-sm uppercase tracking-wider mb-6">
              30-Day Blitz Packs
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-4">One problem. One month. Fixed price.</h2>
            <p className="text-xl text-gray-400">Single-payment campaigns built around one clear objective. No retainer required. No ongoing commitment.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {BLITZ_PACKS.map((pack, i) => {
              const Icon = pack.icon;
              return (
                <motion.div
                  key={pack.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-brutal bg-white text-black"
                >
                  <div className={`p-5 ${pack.color} border-b-3 border-black`}>
                    <Icon className="h-7 w-7 mb-3" />
                    <h3 className="text-xl font-bold leading-tight">{pack.name}</h3>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="text-4xl font-heading">{pack.price}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">single payment</div>
                    </div>
                    <p className="text-gray-600 text-sm mb-5">{pack.description}</p>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">What's included</p>
                    <ul className="space-y-2 mb-6">
                      {pack.deliverables.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-10">
            <Link to="/booster-packs" className="btn-brutal bg-yellow-400 text-black border-3 border-white px-6 py-3 font-bold inline-flex items-center gap-2">
              See All Booster Packs <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Add-ons / AI Products */}
      <section id="addons" className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 max-w-2xl mx-auto">
            <span className="inline-block px-4 py-2 bg-cyan-400 border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider mb-6">
              AI Product Add-Ons
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-4">Add AI to any plan</h2>
            <p className="text-xl text-gray-600">Available as add-ons to retainers or à la carte. The Lead Follow-Up Agent is already included in Growth and Scale.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {ADDONS.map((addon, i) => {
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
                    <h3 className="font-bold text-sm leading-tight">{addon.name}</h3>
                  </div>
                  <div className="p-5">
                    <div className="text-3xl font-heading mb-1">From {addon.price}<span className="text-base text-gray-500">/mo</span></div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">add-on or à la carte</p>
                    <p className="text-sm text-gray-600">{addon.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-10">
            <Link to="/products" className="btn-brutal btn-brutal-white px-6 py-3 font-bold inline-flex items-center gap-2">
              See AI Products in Detail <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="compare" className="py-20 bg-gray-50 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading mb-4">Compare retainer plans</h2>
            <p className="text-xl text-gray-600">Side-by-side feature breakdown for Starter, Growth, and Scale.</p>
          </motion.div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-4 border-black bg-white min-w-[700px]">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-gray-100 border-b-4 border-black w-2/5">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Feature</span>
                  </th>
                  <th className="p-4 bg-cyan-400 border-b-4 border-l-2 border-black text-center">
                    <div className="font-heading text-lg">Starter</div>
                    <div className="text-xs">$495/mo</div>
                  </th>
                  <th className="p-4 bg-primary text-white border-b-4 border-l-2 border-black text-center">
                    <div className="font-heading text-lg">Growth</div>
                    <div className="text-xs">$995/mo</div>
                  </th>
                  <th className="p-4 bg-yellow-400 border-b-4 border-l-2 border-black text-center">
                    <div className="font-heading text-lg">Scale</div>
                    <div className="text-xs">$1,495/mo</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_FEATURES.map((cat) => (
                  <>
                    <tr key={cat.category} className="bg-gray-100">
                      <td colSpan={4} className="p-3 border-b border-gray-300">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-700">{cat.category}</span>
                      </td>
                    </tr>
                    {cat.items.map((item, i) => (
                      <tr key={`${cat.category}-${i}`} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-3 border-b border-gray-200 text-sm text-gray-800">{item.name}</td>
                        <td className="p-3 border-b border-l-2 border-gray-200 text-center"><CompareCheck value={item.starter} /></td>
                        <td className="p-3 border-b border-l-2 border-gray-200 text-center"><CompareCheck value={item.growth} /></td>
                        <td className="p-3 border-b border-l-2 border-gray-200 text-center"><CompareCheck value={item.scale} /></td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading mb-4">What's always included</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Regardless of which plan or pack you choose. No exceptions.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Calendar, color: 'bg-yellow-400', title: 'Month-to-month', body: 'No annual contracts. Cancel any time. Zero penalty.' },
              { icon: Shield, color: 'bg-cyan-400', title: '60-day guarantee', body: 'No measurable results in 60 days? We work an additional month free.' },
              { icon: Sparkles, color: 'bg-purple-400', title: 'No setup fees', body: 'On retainers. Blitz Packs are single payment, all-in.' },
              { icon: Settings, color: 'bg-green-400', title: 'Free audit first', body: 'Every engagement starts with a free audit. No commitment to start.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-brutal bg-white p-6">
                  <div className={`inline-flex p-3 ${item.color} border-3 border-black brutal-shadow-sm mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.body}</p>
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
              { to: '/solutions', label: 'Bundled solutions' },
              { to: '/booster-packs', label: 'Booster packs' },
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

export default PricingPackagingPage;
