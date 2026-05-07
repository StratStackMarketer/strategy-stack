import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Globe, Star, Share2, ArrowRight, BarChart3, Target, Lightbulb, Search, TrendingUp, AlertCircle } from 'lucide-react';
import { AnimatedGrid } from '../components/ui/AnimatedGrid';
import { CloudGraphics } from '../components/ui/CloudGraphics';
import { Contact } from '../components/sections';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const auditAreas = [
  {
    icon: Globe,
    color: 'bg-cyan-400',
    title: 'Website Audit',
    items: [
      'Mobile-friendliness & page speed',
      'SEO fundamentals (title tags, meta, schema)',
      'Lead capture forms & CTAs',
      'User experience & navigation',
      'Content quality & relevance signals',
      'Technical health (broken links, crawlability)',
    ],
  },
  {
    icon: Star,
    color: 'bg-yellow-400',
    title: 'Google Business Profile',
    items: [
      'Profile completeness score',
      'Review velocity & response rate',
      'Photo quality & recency',
      'Category & service accuracy',
      'Local ranking signals',
      'Q&A and post activity',
    ],
  },
  {
    icon: Share2,
    color: 'bg-purple-400',
    title: 'Social Media',
    items: [
      'Posting consistency & frequency',
      'Engagement rate vs. benchmarks',
      'Profile optimization across platforms',
      'Content quality & brand alignment',
      'Audience growth trend',
      'Response time to comments & DMs',
    ],
  },
];

const withAudit = [
  'Know exactly what\'s costing you leads before spending a dollar',
  'Prioritized fix list — highest-impact items addressed first',
  'Personalized outreach and offers based on your real findings',
  'Benchmark your digital presence against competitors in your market',
  'Clear roadmap: what to fix, in what order, with expected impact',
  'Score tracks progress over time — you can measure improvement',
];

const withoutAudit = [
  'Budget goes to marketing without knowing what\'s actually broken',
  'Generic advice that may not apply to your specific situation',
  'Same pitch every business gets — relevant or not',
  'No idea where you stand relative to who you\'re competing against',
  'Strategy by gut feel — try things and hope they work',
  'No baseline to measure against, so you can\'t tell if things improve',
];

const faqs = [
  { q: 'Is it really free?', a: 'Yes — no credit card, no commitment. We run the audit, share the findings, and let the results speak for themselves. The only ask is 15 minutes to walk through what we found.' },
  { q: 'Who sees my results?', a: 'Just you. We don\'t share your audit data with anyone. It\'s your competitive information — we treat it that way.' },
  { q: 'How long does the audit take?', a: 'We deliver the full report within 48 hours of your request. The walkthrough call is 15-30 minutes at a time that works for you.' },
  { q: 'What happens after the audit?', a: 'Nothing you didn\'t ask for. We share findings, answer questions, and if it makes sense, we\'ll suggest how we can help. If the timing isn\'t right, the report is yours to keep and act on yourself.' },
  { q: 'Do I need to prepare anything?', a: 'Just your website URL and the social profiles you want included. We do the rest.' },
];

export function AuditsPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[70vh] pt-32 pb-20 bg-white relative overflow-hidden z-10"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 97%, 0 100%)' }}>
        <AnimatedGrid gridSize={40} darkMode={false} />
        <CloudGraphics darkMode={false} density="medium" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-4xl mx-auto text-center">
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-block px-4 py-2 bg-yellow-400 border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider">
                Free Marketing Audit
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-heading mb-6 leading-none">
              Your free audit.<br />
              <span className="text-primary">Real findings.</span><br />
              <span className="text-gray-500 text-4xl md:text-5xl">No strings attached.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
              We audit your website, Google Business Profile, and social media — and show you exactly what's costing you leads. Delivered in 48 hours.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#get-audit" className="btn-brutal btn-brutal-primary text-lg px-8 py-4">
                Get My Free Audit <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#what-we-audit" className="btn-brutal btn-brutal-white text-lg px-8 py-4">
                See What We Cover
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why We Lead With Audits */}
      <section className="section-full bg-gray-900 text-white relative overflow-hidden z-10">
        <AnimatedGrid gridSize={60} darkMode={true} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary border-3 border-white brutal-shadow-sm font-bold text-sm uppercase tracking-wider mb-6">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-6">Why we start with the audit — not the pitch</h2>
            <p className="text-xl text-gray-400">
              Most agencies lead with a sales call. We lead with evidence. Because the best client relationship starts with you knowing exactly where you stand — not taking our word for it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Search, color: 'bg-cyan-400', title: 'Find the real problem', body: 'Generic marketing advice fails because it ignores what\'s actually wrong. The audit finds the specific gaps costing your specific business leads.' },
              { icon: Target, color: 'bg-yellow-400', title: 'Earn your trust first', body: 'We\'d rather show you a real finding than tell you we\'re great. If the audit shows clear opportunities, you\'ll see for yourself why working together makes sense.' },
              { icon: Lightbulb, color: 'bg-purple-400', title: 'Give you something useful', body: 'Even if you never become a client, you walk away with a prioritized action plan you can implement yourself. That\'s the deal.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-brutal bg-white/5 border-white/20 p-6">
                  <div className={`inline-flex p-3 ${item.color} border-3 border-white brutal-shadow-sm mb-4`}>
                    <Icon className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Audit */}
      <section id="what-we-audit" className="section-full bg-white relative z-10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-cyan-400 border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider mb-6">
              The Audit
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-4">Three areas. 20+ checkpoints. One score.</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Every audit covers all three pillars of your digital presence. Each gets scored 0-100 with a prioritized fix list.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {auditAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-brutal bg-white p-6">
                  <div className={`w-full h-2 ${area.color} -mx-6 -mt-6 mb-6`} style={{ width: 'calc(100% + 3rem)' }} />
                  <div className={`inline-flex p-3 ${area.color} border-3 border-black brutal-shadow-sm mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                  <ul className="space-y-2">
                    {area.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Scoring system */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 p-8 bg-gray-900 text-white border-4 border-black brutal-shadow-xl">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-heading text-yellow-400 mb-2">0–100</div>
                <div className="text-gray-400 text-sm">Overall score per area</div>
              </div>
              {[
                { color: 'text-green-400', label: 'Good', desc: 'Working well — maintain' },
                { color: 'text-yellow-400', label: 'Okay', desc: 'Room to improve' },
                { color: 'text-red-400', label: 'Needs Fix', desc: 'Costing you leads now' },
              ].map((s, i) => (
                <div key={i}>
                  <div className={`text-2xl font-bold ${s.color} mb-2`}>{s.label}</div>
                  <div className="text-gray-400 text-sm">{s.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison: With vs Without */}
      <section className="section-full bg-gray-50 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary text-white border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider mb-6">
              The Difference
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-4">Marketing with audit guidance vs. without</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Strategy without data is just guessing. Here's what changes when you actually know what's wrong.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* With */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="card-brutal bg-white p-8">
              <div className="w-full h-2 bg-green-400 -mx-8 -mt-8 mb-8" style={{ width: 'calc(100% + 4rem)' }} />
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <h3 className="text-2xl font-bold">With AI Marketing Audit</h3>
              </div>
              <ul className="space-y-3">
                {withAudit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Without */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="card-brutal bg-white p-8">
              <div className="w-full h-2 bg-red-400 -mx-8 -mt-8 mb-8" style={{ width: 'calc(100% + 4rem)' }} />
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="h-8 w-8 text-red-500" />
                <h3 className="text-2xl font-bold">Without Audit Guidance</h3>
              </div>
              <ul className="space-y-3">
                {withoutAudit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Use It */}
      <section className="section-full bg-white relative z-10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading mb-4">What happens with your findings</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The audit isn't the end — it's the starting point for everything we do together.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { step: '01', icon: BarChart3, title: 'Score & prioritize', body: 'Every finding gets ranked by impact. We tell you what to fix first, not just what\'s wrong.' },
              { step: '02', icon: Target, title: 'Build your roadmap', body: 'The audit becomes the strategy. We map findings to specific services, timelines, and expected outcomes.' },
              { step: '03', icon: TrendingUp, title: 'Track improvement', body: 'We re-audit quarterly. Your score becomes a benchmark — you can see exactly how much ground you\'ve gained.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white border-4 border-black brutal-shadow-md text-2xl font-heading mb-4">{item.step}</div>
                  <div className="flex justify-center mb-3"><Icon className="h-6 w-6 text-primary" /></div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-full bg-gray-900 text-white relative z-10">
        <AnimatedGrid gridSize={60} darkMode={true} />
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl font-heading mb-4">Common questions</h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-6 bg-white/5 border border-white/10">
                <h3 className="font-bold text-lg mb-2 text-yellow-400">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 bg-white border-t-4 border-black">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 text-sm mb-6 uppercase tracking-wider font-bold">Next steps</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { to: '/how-it-works/ai-automation', label: 'How AI powers what we do →' },
              { to: '/how-it-works/what-to-expect', label: 'What working with us looks like →' },
              { to: '/solutions', label: 'See our solutions →' },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="btn-brutal btn-brutal-white px-6 py-3 text-sm">{link.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <div id="get-audit"><Contact /></div>
    </>
  );
}

export default AuditsPage;
