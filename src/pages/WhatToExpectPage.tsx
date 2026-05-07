import { motion } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight, Clock, Shield, TrendingUp, MessageSquare } from 'lucide-react';
import { AnimatedGrid } from '../components/ui/AnimatedGrid';
import { CloudGraphics } from '../components/ui/CloudGraphics';
import { Testimonials, Contact } from '../components/sections';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const timeline = [
  { day: 'Day 1', color: 'bg-yellow-400', title: 'Discovery call + audit', items: ['30-minute intro call', 'Free audit request submitted', 'We begin audit analysis'] },
  { day: 'Days 2–3', color: 'bg-cyan-400', title: 'Strategy proposal', items: ['Full audit delivered', 'Findings walkthrough call (15–30 min)', 'Customized strategy + pricing proposal'] },
  { day: 'Days 4–7', color: 'bg-purple-400', title: 'System setup', items: ['AI systems configured', 'Integrations connected', 'First campaigns built and reviewed'] },
  { day: 'Day 8–14', color: 'bg-green-400', title: 'Launch', items: ['First campaign goes live', 'AI lead response active', 'Tracking and reporting confirmed'] },
  { day: 'Day 30', color: 'bg-orange-400', title: 'First results review', items: ['Monthly performance report', 'Strategy optimization call', 'Next 30-day plan set'] },
  { day: 'Ongoing', color: 'bg-primary text-white', title: 'Continuous improvement', items: ['Monthly reporting and calls', 'Proactive campaign optimization', 'Quarterly re-audit + benchmarking'] },
];

const newAgency = [
  { label: 'Contract', value: 'Month-to-month — cancel anytime, zero penalty' },
  { label: 'Reporting', value: 'Jobs booked, cost per acquisition, revenue' },
  { label: 'Coverage', value: 'AI runs 24/7 — nights, weekends, holidays' },
  { label: 'Time to results', value: '7–14 days to launch, 30 days to first results' },
  { label: 'Optimization', value: 'Proactive — we flag issues before you notice them' },
  { label: 'Starting price', value: '$495/month, all-in, no hidden fees' },
  { label: 'Transparency', value: 'You know exactly what we\'re doing and why' },
  { label: 'Your time', value: 'Under 30 minutes/month once live' },
];

const oldAgency = [
  { label: 'Contract', value: '12-month lock-in — results or not' },
  { label: 'Reporting', value: 'Impressions, clicks, "brand awareness"' },
  { label: 'Coverage', value: 'Business hours — leads after 5pm wait until Monday' },
  { label: 'Time to results', value: '60–90 day "ramp-up" before anything happens' },
  { label: 'Optimization', value: 'Reactive — you have to ask what\'s happening' },
  { label: 'Starting price', value: '$3,000–$10,000/month, often with add-ons' },
  { label: 'Transparency', value: 'Black box — trust us, it\'s working' },
  { label: 'Your time', value: 'Ongoing calls, reviews, and approvals required' },
];

const responsibilities = [
  { ours: 'Build and manage your AI lead response system', yours: 'Take discovery and close calls with qualified leads' },
  { ours: 'Create and optimize all campaigns', yours: 'Approve key strategic decisions' },
  { ours: 'Write content, ad copy, and nurture sequences', yours: 'Provide business context and goals' },
  { ours: 'Monitor performance and flag issues proactively', yours: 'Keep us updated on business changes' },
  { ours: 'Run monthly strategy and performance calls', yours: 'Deliver your service to new customers' },
  { ours: 'Re-audit your presence quarterly', yours: 'That\'s it — we handle the rest' },
];

const commitments = [
  { icon: Shield, color: 'bg-yellow-400', title: 'Month-to-month. Always.', body: 'No annual contracts. No lock-in. We earn your business every single month — that\'s how we\'ve built a 92% retention rate.' },
  { icon: TrendingUp, color: 'bg-cyan-400', title: 'Transparent reporting.', body: 'You get a clear monthly report on what matters: leads, customers acquired, cost per acquisition, and revenue impact. Not impressions.' },
  { icon: MessageSquare, color: 'bg-purple-400', title: 'Proactive communication.', body: 'We don\'t wait for you to ask. If something\'s working better than expected or needs attention, you hear from us first.' },
  { icon: Clock, color: 'bg-green-400', title: 'Satisfaction guarantee.', body: 'If you\'re not seeing measurable results in the first 60 days, we\'ll work an additional month free. We\'re that confident in the system.' },
];

export function WhatToExpectPage() {
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
              <span className="inline-block px-4 py-2 bg-cyan-400 border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider">
                What to Expect
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-heading mb-6 leading-none">
              Here's exactly<br />
              <span className="text-primary">what happens</span><br />
              <span className="text-gray-500 text-4xl md:text-5xl">when you work with us.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
              No surprises. No black box. From the first call to the first result — and everything in between.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-brutal btn-brutal-primary text-lg px-8 py-4">
                Start with a Free Audit <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#timeline" className="btn-brutal btn-brutal-white text-lg px-8 py-4">
                See the Timeline
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Onboarding Timeline */}
      <section id="timeline" className="section-full bg-gray-900 text-white relative z-10">
        <AnimatedGrid gridSize={60} darkMode={true} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary border-3 border-white brutal-shadow-sm font-bold text-sm uppercase tracking-wider mb-6">
              The Timeline
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-4">Day 1 to first result — and beyond</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Most agencies take 60–90 days to "ramp up." We're live in 7–14 days.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {timeline.map((phase, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-brutal bg-white/5 border-white/10 overflow-hidden">
                <div className={`p-3 ${phase.color} ${phase.color.includes('primary') ? '' : 'text-black'} border-b-2 border-white/20 font-bold text-sm uppercase tracking-wider`}>
                  {phase.day}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New vs Traditional Agency Comparison */}
      <section className="section-full bg-gray-50 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-yellow-400 border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider mb-6">
              The Difference
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-4">New agency experience vs. traditional agency</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The agency model hasn't changed in 20 years. We rebuilt it from scratch.</p>
          </motion.div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-4 border-black">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-gray-100 border-b-4 border-black font-bold text-lg w-1/3">Area</th>
                  <th className="p-4 text-left bg-green-400 border-b-4 border-black font-bold text-lg">
                    <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5" /> Strategy Stack</div>
                  </th>
                  <th className="p-4 text-left bg-red-100 border-b-4 border-black font-bold text-lg">
                    <div className="flex items-center gap-2"><XCircle className="h-5 w-5 text-red-500" /> Traditional Agency</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {newAgency.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 border-b border-gray-200 font-bold text-gray-700">{row.label}</td>
                    <td className="p-4 border-b border-gray-200 text-green-700">{row.value}</td>
                    <td className="p-4 border-b border-gray-200 text-red-600">{oldAgency[i]?.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Responsibility Matrix */}
      <section className="section-full bg-white relative z-10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl font-heading mb-4">What we do. What you do.</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Clear lines. No confusion about who's responsible for what.</p>
          </motion.div>
          <div className="max-w-4xl mx-auto border-4 border-black">
            <div className="grid grid-cols-2">
              <div className="p-4 bg-primary text-white font-bold text-lg border-b-4 border-r-2 border-black">We handle</div>
              <div className="p-4 bg-yellow-400 font-bold text-lg border-b-4 border-l-2 border-black">You handle</div>
            </div>
            {responsibilities.map((row, i) => (
              <div key={i} className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <div className="p-4 border-b border-r-2 border-gray-200 text-gray-700 text-sm flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  {row.ours}
                </div>
                <div className="p-4 border-b border-l-2 border-gray-200 text-gray-700 text-sm flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  {row.yours}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="section-full bg-gray-900 text-white relative z-10">
        <AnimatedGrid gridSize={60} darkMode={true} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading mb-4">What we commit to</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Not promises. Non-negotiables.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {commitments.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-brutal bg-white/5 border-white/10 p-8">
                  <div className={`inline-flex p-3 ${c.color} border-3 border-white brutal-shadow-sm mb-4`}>
                    <Icon className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
                  <p className="text-gray-400 text-lg">{c.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Internal links */}
      <section className="py-12 bg-white border-t-4 border-black">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 text-sm mb-6 uppercase tracking-wider font-bold">Next steps</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { to: '/how-it-works/audits', label: 'Start with a free audit →' },
              { to: '/pricing-packaging', label: 'See pricing →' },
              { to: '/resources/success-stories', label: 'See client results →' },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="btn-brutal btn-brutal-white px-6 py-3 text-sm">{link.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <div id="contact"><Contact /></div>
    </>
  );
}

export default WhatToExpectPage;
