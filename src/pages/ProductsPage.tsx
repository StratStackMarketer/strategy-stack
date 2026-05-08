import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Phone, Zap, MessageSquare, RefreshCw, ArrowRight,
  CheckCircle, ChevronRight
} from 'lucide-react';
import { AnimatedGrid } from '../components/ui/AnimatedGrid';
import { CloudGraphics } from '../components/ui/CloudGraphics';
import { Contact } from '../components/sections';
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  { id: 'products', label: 'Products' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'results', label: 'Results' },
  { id: 'pricing', label: 'Pricing' },
];

const PRODUCTS = [
  {
    id: 'receptionist',
    icon: Phone,
    color: 'bg-yellow-400',
    name: 'AI Voice Receptionist',
    tagline: 'Every call answered. Every appointment booked.',
    description: 'Handles inbound calls 24/7 with a custom voice trained on your business. Answers questions, qualifies callers, and books appointments directly to your calendar — without a human picking up.',
    price: 'From $287/mo',
    priceType: 'add-on or à la carte',
    useCases: [
      'Missed calls after hours costing you jobs',
      'Receptionist time going to unqualified callers',
      'Appointment booking friction slowing your calendar',
    ],
    steps: [
      { n: '01', title: 'Call comes in', body: 'AI answers in under 30 seconds with your custom greeting and voice.' },
      { n: '02', title: 'Qualify + book', body: 'Asks the right questions, determines fit, books to your calendar or routes accordingly.' },
      { n: '03', title: 'Notify + log', body: 'You get a call summary and outcome logged to GHL automatically. Nothing falls through.' },
    ],
  },
  {
    id: 'followup',
    icon: Zap,
    color: 'bg-primary',
    name: 'AI Lead Follow-Up Agent',
    tagline: 'First to respond wins. We respond in 60 seconds.',
    description: 'Responds to every new lead in under 60 seconds — form fills, texts, social DMs — 24/7. Scores them on intent, budget, and timeline. Routes hot leads to your team immediately. Warm leads enter automated nurture.',
    price: 'From $287/mo',
    priceType: 'add-on or à la carte',
    useCases: [
      'Leads going cold before you can call back',
      'Hours wasted on unqualified inquiries',
      'No follow-up system for leads who aren\'t ready yet',
    ],
    steps: [
      { n: '01', title: 'Lead arrives', body: 'Form fill, SMS, social DM, or missed call triggers the agent within seconds.' },
      { n: '02', title: 'Respond + score', body: 'Personalized reply in under 60 seconds. Qualification questions. Lead score assigned.' },
      { n: '03', title: 'Route automatically', body: 'Hot leads go to your team. Warm leads enter email + SMS nurture sequences.' },
    ],
  },
  {
    id: 'chatbot',
    icon: MessageSquare,
    color: 'bg-cyan-400',
    name: 'Website Chatbot',
    tagline: 'Your website never closes. Neither does this.',
    description: 'Custom conversation flows capture and qualify leads from your website around the clock. Trained on your services, FAQs, and pricing. Hands off to your team or CRM the moment someone is ready.',
    price: 'From $178/mo',
    priceType: 'add-on or à la carte',
    useCases: [
      'Website traffic that doesn\'t convert to inquiries',
      'After-hours visitors with no way to reach you',
      'FAQ volume taking up your team\'s time',
    ],
    steps: [
      { n: '01', title: 'Visitor engages', body: 'Widget triggers on time-on-page, exit intent, or scroll depth. Feels natural, not intrusive.' },
      { n: '02', title: 'Converse + capture', body: 'Custom flows answer questions and collect lead info. Never feels generic.' },
      { n: '03', title: 'Handoff to CRM', body: 'Lead delivered immediately. Follow-Up Agent picks up. Nothing waits until Monday.' },
    ],
  },
  {
    id: 'reactivation',
    icon: RefreshCw,
    color: 'bg-green-400',
    name: 'Database Reactivation Agent',
    tagline: 'Revenue you already earned — just hasn\'t paid yet.',
    description: 'Re-engages cold leads and past customers who went quiet. AI-personalized sequences via email and SMS based on their last interaction. Converts existing data into new revenue without spending a dollar on new ads.',
    price: 'From $178/mo',
    priceType: 'add-on or à la carte',
    useCases: [
      'A CRM full of cold leads that never converted',
      'Past customers who haven\'t come back in 6+ months',
      'No budget for new lead acquisition right now',
    ],
    steps: [
      { n: '01', title: 'Import your list', body: 'Upload cold leads or past customers from any CRM export. We handle the rest.' },
      { n: '02', title: 'AI personalizes & sequences', body: 'Every contact gets messaging tailored to their last interaction — not a blast, a restart.' },
      { n: '03', title: 'Re-qualify + convert', body: 'Ready-now contacts flagged for your team. Everyone else stays in a long-term touch sequence.' },
    ],
  },
];

const RESULTS = [
  { stat: '60s', label: 'Lead response time', sub: 'vs. 3+ hr industry average' },
  { stat: '2.4x', label: 'More qualified leads', sub: 'average across clients' },
  { stat: '24/7', label: 'Coverage', sub: 'nights, weekends, holidays' },
  { stat: '68%', label: 'Lower cost per lead', sub: 'vs. manual processes' },
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
        { rootMargin: '-40% 0px -55% 0px' }
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
        <nav className="flex overflow-x-auto">
          {NAV_ITEMS.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex-shrink-0 px-6 py-4 text-sm font-bold uppercase tracking-wider border-b-4 -mb-[4px] transition-colors ${
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

function ProductSection({ product, index }: { product: typeof PRODUCTS[0]; index: number }) {
  const Icon = product.icon;
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className={`py-20 ${isEven ? 'bg-white' : 'bg-gray-50'}`} id={`product-${product.id}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`grid lg:grid-cols-2 gap-16 items-start ${!isEven ? 'lg:[&>*:first-child]:order-last' : ''}`}
        >
          {/* Info panel */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className={`inline-flex p-3 ${product.color} border-3 border-black brutal-shadow-sm`}>
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">AI Product</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading mb-3 leading-tight">{product.name}</h2>
            <p className="text-xl text-primary font-bold mb-4">{product.tagline}</p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{product.description}</p>

            <div className="mb-8">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Best for</p>
              <ul className="space-y-2">
                {product.useCases.map((uc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{uc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`inline-flex items-center gap-4 p-5 ${product.color} border-3 border-black brutal-shadow-md`}>
              <div>
                <div className="text-2xl font-heading">{product.price}</div>
                <div className="text-xs uppercase tracking-wider opacity-70">{product.priceType}</div>
              </div>
              <ChevronRight className="h-5 w-5 opacity-50" />
            </div>
          </div>

          {/* How it works card */}
          <div className="card-brutal bg-white overflow-hidden">
            <div className={`px-8 py-4 ${product.color} border-b-3 border-black`}>
              <span className="text-xs font-bold uppercase tracking-widest">How it works</span>
            </div>
            <div className="p-8 space-y-8">
              {product.steps.map((step, i) => (
                <div key={i} className="flex gap-5">
                  <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center ${product.color} border-3 border-black font-heading text-xl brutal-shadow-sm`}>
                    {step.n}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function ProductsPage() {
  const active = useActiveSection(['products', 'how-it-works', 'results', 'pricing']);

  return (
    <>
      {/* Hero */}
      <section
        className="min-h-[85vh] pt-32 pb-24 bg-white relative overflow-hidden z-10"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 96%, 0 100%)' }}
      >
        <AnimatedGrid gridSize={40} darkMode={false} />
        <CloudGraphics darkMode={false} density="medium" />
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <span className="inline-block px-4 py-2 bg-purple-400 border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider">
              What We Do
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-6xl md:text-8xl font-heading mb-6 leading-none">
            The AI stack<br />
            <span className="text-primary">that works</span><br />
            while you sleep.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl">
            Four AI products that run your lead pipeline 24/7 — responding, qualifying, nurturing, and reactivating — without adding to your payroll.
          </motion.p>

          {/* Horizontal scroll product cards */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-4 mb-10">
            {PRODUCTS.map(p => {
              const Icon = p.icon;
              return (
                <a key={p.id} href={`#product-${p.id}`} className="flex-shrink-0 snap-start w-56 md:w-auto card-brutal bg-white p-5 group hover:-translate-y-1 transition-transform">
                  <div className={`inline-flex p-2 ${p.color} border-3 border-black brutal-shadow-sm mb-3`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="font-bold text-sm leading-tight mb-1 group-hover:text-primary transition-colors">{p.name}</div>
                  <div className="text-xs text-gray-500">{p.price}</div>
                </a>
              );
            })}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row gap-4">
            <a href="#pricing" className="btn-brutal btn-brutal-primary text-lg px-8 py-4">
              See Pricing <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <Link to="/how-it-works/audits" className="btn-brutal btn-brutal-white text-lg px-8 py-4">
              Start with a free audit
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sticky sub-nav */}
      <StickySubNav active={active} />

      {/* Anchor for products section */}
      <div id="products" className="h-px" />

      {/* Product detail sections */}
      <div id="how-it-works">
        {PRODUCTS.map((product, i) => (
          <ProductSection key={product.id} product={product} index={i} />
        ))}
      </div>

      {/* Results */}
      <section id="results" className="section-full bg-gray-900 text-white relative overflow-hidden z-10">
        <AnimatedGrid gridSize={60} darkMode={true} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-yellow-400 text-black border-3 border-white brutal-shadow-sm font-bold text-sm uppercase tracking-wider mb-6">
              Results
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-4">Numbers that matter</h2>
            <p className="text-xl text-gray-400 max-w-xl mx-auto">Averages across clients running at least one AI product for 90+ days.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {RESULTS.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-8 border-3 border-white/20 bg-white/5">
                <div className="text-5xl md:text-6xl font-heading text-yellow-400 mb-2">{r.stat}</div>
                <div className="font-bold mb-1">{r.label}</div>
                <div className="text-gray-500 text-sm">{r.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* Works-together callout */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center p-8 bg-white/5 border-3 border-white/20">
            <h3 className="text-2xl font-bold mb-3">Each product amplifies the others</h3>
            <p className="text-gray-400">Use any one standalone or combine them all. Voice Receptionist captures calls. Follow-Up Agent catches digital leads. Chatbot works the website. Reactivation revives the database. Together: no lead goes untouched.</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-full bg-white relative z-10">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary text-white border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider mb-6">
              Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-heading mb-4">Add individually or bundle</h2>
            <p className="text-xl text-gray-600 max-w-xl mx-auto">Every product is available standalone. Already on Growth or Scale? The Follow-Up Agent is included.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {PRODUCTS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-brutal bg-white overflow-hidden">
                  <div className={`px-5 py-4 ${p.color} border-b-3 border-black flex items-center gap-3`}>
                    <Icon className="h-5 w-5" />
                    <span className="font-bold text-sm leading-tight">{p.name}</span>
                  </div>
                  <div className="p-5">
                    <div className="text-3xl font-heading mb-1">{p.price}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">{p.priceType}</div>
                    <ul className="space-y-1.5">
                      {p.useCases.slice(0, 2).map((uc, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                          {uc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 bg-gray-900 text-white border-4 border-black brutal-shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Better deal on a retainer</p>
                <p className="text-xl font-bold">Growth plan ($995/mo) includes the Follow-Up Agent. Add others from $178/mo.</p>
              </div>
              <Link to="/pricing-packaging" className="flex-shrink-0 btn-brutal bg-yellow-400 text-black border-3 border-white px-6 py-3 font-bold inline-flex items-center gap-2 whitespace-nowrap">
                See Full Pricing <ArrowRight className="h-4 w-4" />
              </Link>
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
            { q: 'Do I need all four?', a: 'No. Each works standalone. Most clients start with the Follow-Up Agent — broadest impact, fastest results — then add products based on their gaps.' },
            { q: 'How long does setup take?', a: 'Most products are live within 48–72 hours of your onboarding call. We configure everything — you provide the business context.' },
            { q: 'Do the AI agents sound robotic?', a: 'No. Every agent is trained on your business — services, tone, FAQs. They sound like a knowledgeable team member, not a generic bot.' },
            { q: 'What CRMs do you integrate with?', a: 'GoHighLevel is our primary platform. If you use something else, ask us — integrations are handled case by case.' },
            { q: 'Can I try before committing?', a: 'Start with a free audit. It shows exactly how each product would impact your lead flow before you invest anything.' },
          ].map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="mb-4 p-6 bg-white border-3 border-black brutal-shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-primary">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom nav */}
      <section className="py-12 bg-white border-t-4 border-black">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-400 text-xs mb-5 uppercase tracking-widest font-bold">Also worth seeing</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { to: '/services', label: 'Marketing services' },
              { to: '/solutions', label: 'Bundled solutions' },
              { to: '/how-it-works/ai-automation', label: 'How our AI works' },
              { to: '/pricing-packaging', label: 'Full pricing' },
            ].map(link => (
              <Link key={link.to} to={link.to} className="btn-brutal btn-brutal-white px-5 py-3 text-sm">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default ProductsPage;
