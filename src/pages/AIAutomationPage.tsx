import { motion } from 'framer-motion';
import { Zap, Users, BarChart3, CheckCircle, XCircle, ArrowRight, Bot, Phone, Mail, TrendingUp } from 'lucide-react';
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

const aiCapabilities = [
  { icon: Zap, color: 'bg-yellow-400', title: 'Instant lead response', body: 'Every new lead gets a personalized reply in under 60 seconds — form fills, calls, texts, social DMs. No exceptions, no delays.' },
  { icon: Users, color: 'bg-cyan-400', title: 'Automatic qualification', body: 'The AI asks the right questions and scores each lead on intent, timeline, and budget signals. Your team only talks to buyers ready to commit.' },
  { icon: Mail, color: 'bg-purple-400', title: 'Nurture that runs itself', body: 'Leads who aren\'t ready yet enter automated email and SMS sequences that keep you present through the entire consideration journey.' },
  { icon: BarChart3, color: 'bg-green-400', title: 'Reporting that makes sense', body: 'Customers acquired, cost per acquisition, lead-to-close rate. Not impressions. Not clicks. Revenue metrics only.' },
];

const withAI = [
  { label: 'Lead response time', value: '60 seconds, 24/7' },
  { label: 'Coverage', value: 'Always on — nights, weekends, holidays' },
  { label: 'Lead qualification', value: 'Automatic — intent, budget, timeline scored' },
  { label: 'Follow-up', value: 'Automated sequences across email + SMS' },
  { label: 'Capacity', value: 'Scales to any volume without extra staff' },
  { label: 'Reporting', value: 'Revenue and acquisition metrics, automated' },
  { label: 'Optimization', value: 'Continuous — learns from every interaction' },
  { label: 'Cost to scale', value: 'Near-zero marginal cost per additional lead' },
];

const withoutAI = [
  { label: 'Lead response time', value: '3+ hours on average — often next day' },
  { label: 'Coverage', value: 'Business hours only' },
  { label: 'Lead qualification', value: 'Manual — someone has to sort through them' },
  { label: 'Follow-up', value: 'Depends on someone remembering to do it' },
  { label: 'Capacity', value: 'Hits a ceiling — more leads means more staff' },
  { label: 'Reporting', value: 'Impressions, clicks, "reach" — vanity metrics' },
  { label: 'Optimization', value: 'Monthly reviews at best, if remembered' },
  { label: 'Cost to scale', value: 'Linear — every 2x growth costs ~2x more' },
];

const flowSteps = [
  { icon: Phone, label: 'Lead arrives', sub: 'Form, call, DM, text' },
  { icon: Zap, label: 'AI responds', sub: 'Under 60 seconds' },
  { icon: Users, label: 'Qualifies', sub: 'Scores intent + budget' },
  { icon: TrendingUp, label: 'Routes', sub: 'Hot to team / Warm to nurture' },
];

export function AIAutomationPage() {
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
              <span className="inline-block px-4 py-2 bg-primary text-white border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider">
                How It Works
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-heading mb-6 leading-none">
              Not a chatbot.<br />
              <span className="text-primary">A system that runs</span><br />
              <span className="text-gray-500 text-4xl md:text-5xl">your entire lead pipeline.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
              AI doesn't just answer questions. It responds to leads, qualifies buyers, runs nurture sequences, and reports on revenue — automatically, around the clock.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-brutal btn-brutal-primary text-lg px-8 py-4">
                See It In Action <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#capabilities" className="btn-brutal btn-brutal-white text-lg px-8 py-4">
                What AI Does
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Speed Proof */}
      <section className="py-12 bg-primary text-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: '60s', label: 'Average lead response time' },
              { value: '47x', label: 'Faster than industry average callback' },
              { value: '24/7', label: 'Coverage — no exceptions' },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-5xl font-heading text-yellow-400 mb-2">{stat.value}</div>
                <div className="text-purple-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="section-full bg-white relative z-10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-yellow-400 border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider mb-6">
              What AI Does In Our Stack
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-4">Four jobs. Running simultaneously. All the time.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {aiCapabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-brutal bg-white p-8">
                  <div className={`inline-flex p-3 ${cap.color} border-3 border-black brutal-shadow-sm mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{cap.title}</h3>
                  <p className="text-gray-600 text-lg">{cap.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flow Diagram */}
      <section className="section-full bg-gray-900 text-white relative z-10">
        <AnimatedGrid gridSize={60} darkMode={true} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading mb-4">How it flows — from lead to close</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Simple pipeline. Every step runs automatically.</p>
          </motion.div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {flowSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex flex-col md:flex-row items-center">
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="text-center p-6 bg-white/10 border-2 border-white/20 w-48">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-primary border-3 border-white brutal-shadow-sm">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="font-bold text-lg">{step.label}</div>
                    <div className="text-gray-400 text-sm mt-1">{step.sub}</div>
                  </motion.div>
                  {i < flowSteps.length - 1 && (
                    <div className="text-yellow-400 text-3xl md:mx-4 my-2 md:my-0">→</div>
                  )}
                </div>
              );
            })}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 text-center p-6 bg-white/5 border border-white/10 max-w-2xl mx-auto">
            <Bot className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
            <p className="text-gray-300 text-lg">Hot leads get routed to your team immediately. Warm leads enter automated nurture — email and SMS — until they're ready. You only step in to close.</p>
          </motion.div>
        </div>
      </section>

      {/* Comparison: With AI vs Without */}
      <section className="section-full bg-gray-50 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-cyan-400 border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider mb-6">
              The Difference
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-4">AI-powered marketing vs. traditional marketing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Same marketing goals. Completely different outcomes.</p>
          </motion.div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-4 border-black">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-gray-100 border-b-4 border-black font-bold text-lg w-1/3">Area</th>
                  <th className="p-4 text-left bg-green-400 border-b-4 border-black font-bold text-lg">
                    <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5" /> With AI & Automation</div>
                  </th>
                  <th className="p-4 text-left bg-red-100 border-b-4 border-black font-bold text-lg">
                    <div className="flex items-center gap-2"><XCircle className="h-5 w-5 text-red-500" /> Without AI</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {withAI.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 border-b border-gray-200 font-bold text-gray-700">{row.label}</td>
                    <td className="p-4 border-b border-gray-200 text-green-700">{row.value}</td>
                    <td className="p-4 border-b border-gray-200 text-red-600">{withoutAI[i]?.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Human layer */}
      <section className="section-full bg-white relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl font-heading mb-4">What AI handles vs. what humans handle</h2>
            <p className="text-xl text-gray-600">AI wins on speed and scale. Humans win on judgment and relationships. We use both.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'AI handles', color: 'bg-primary text-white', items: ['Lead response (60s)', 'Initial qualification questions', 'Nurture email + SMS sequences', 'Data collection and scoring', 'Reporting and tracking'] },
              { title: 'Our team handles', color: 'bg-yellow-400', items: ['Strategy and planning', 'Campaign optimization', 'Content creation', 'Complex objections', 'Account management'] },
              { title: 'You handle', color: 'bg-cyan-400', items: ['Closing sales conversations', 'Key strategy approvals', 'Business context and goals', 'Final decisions', 'Delivering your service'] },
            ].map((col, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-brutal bg-white">
                <div className={`p-4 ${col.color} border-b-4 border-black font-bold text-lg`}>{col.title}</div>
                <ul className="p-6 space-y-2">
                  {col.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 bg-gray-50 border-t-4 border-black">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 text-sm mb-6 uppercase tracking-wider font-bold">Explore more</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { to: '/products', label: 'See the AI products →' },
              { to: '/how-it-works/audits', label: 'Start with a free audit →' },
              { to: '/how-it-works/what-to-expect', label: 'What working with us looks like →' },
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

export default AIAutomationPage;
