import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Search, Compass, Rocket, TrendingUp, CheckCircle2, Check } from 'lucide-react';
import { AnimatedGrid } from '../ui/AnimatedGrid';
import { CloudGraphics } from '../ui/CloudGraphics';

const phases = [
  {
    number: '01',
    icon: Search,
    title: 'Comprehensive Audit',
    description: 'We dig deep before we spend a dime — your market, competitors, digital presence, and quick wins. No guessing, no assumptions.',
    details: [
      'Website & SEO analysis',
      'Competitor research',
      'Google Business Profile review',
      'Social media assessment',
      'Quick win identification',
    ],
    color: 'bg-cyan-400',
    accentColor: 'text-cyan-400',
  },
  {
    number: '02',
    icon: Compass,
    title: 'Strategy & Setup',
    description: 'Custom game plan built for your business. AI and automation configured to your specific workflows — not cookie-cutter templates.',
    details: [
      'Custom strategy document',
      'AI tools configuration',
      'Automation workflows',
      'Dashboard setup',
      'Goal & KPI alignment',
    ],
    color: 'bg-primary',
    accentColor: 'text-primary',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Optimize',
    description: 'Go live fast, then iterate based on real performance data. Continuous improvement, not set-and-forget.',
    details: [
      'Campaign activation',
      'Real-time monitoring',
      'A/B testing',
      'Weekly optimization',
      'Performance reporting',
    ],
    color: 'bg-secondary',
    accentColor: 'text-yellow-500',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Measurable ROI',
    description: 'Real-time dashboard access. Transparent reporting. You see exactly what\'s working and what we\'re doing about what isn\'t.',
    details: [
      'Live performance dashboard',
      'ROI tracking',
      'Monthly strategy reviews',
      'Proactive recommendations',
      'Clear next steps',
    ],
    color: 'bg-green-400',
    accentColor: 'text-green-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function PhaseCard({ phase, isActive, isExpanded, onClick }: {
  phase: typeof phases[0];
  isActive: boolean;
  isExpanded: boolean;
  onClick: () => void;
}) {
  const Icon = phase.icon;
  
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={onClick}
      className={`relative card-brutal p-6 cursor-pointer transition-all duration-300 ${
        isActive ? 'ring-4 ring-primary ring-offset-2' : ''
      }`}
    >
      {/* Colored top bar */}
      <div className={`absolute top-0 left-0 w-full h-2 ${phase.color}`} />
      
      {/* Phase number */}
      <div className="absolute -top-4 -right-2 w-12 h-12 bg-black text-white flex items-center justify-center font-heading text-lg border-3 border-black">
        {phase.number}
      </div>
      
      {/* Icon */}
      <div className={`inline-flex p-3 ${phase.color} border-3 border-black brutal-shadow-sm mb-4`}>
        <Icon className="h-6 w-6" />
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{phase.description}</p>
      
      {/* Details (shown when expanded - all phases up to and including active) */}
      <motion.div
        initial={false}
        animate={{ 
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <ul className="space-y-2 pt-4 border-t-2 border-gray-200">
          {phase.details.map((detail, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <CheckCircle2 className={`h-4 w-4 ${phase.accentColor}`} />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

// TimelineConnector removed - not currently used

export function ClientExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section 
      id="experience" 
      className="section-full bg-white relative overflow-hidden z-10"
      style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 97%, 0 100%)' }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <AnimatedGrid gridSize={40} darkMode={false} />
      </div>

      {/* Cloud Graphics */}
      <CloudGraphics darkMode={false} density="low" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center relative -translate-y-1/2"
        >
          <span className="inline-block px-6 py-3 bg-primary border-3 border-black brutal-shadow-sm font-bold text-lg uppercase tracking-wider text-white">
            The Experience
          </span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-8"
        >
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            What to Expect
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your journey from sign-up to measurable results. No surprises, no runaround — just a clear path to growth.
          </p>
        </motion.div>

        {/* Timeline Progress (Desktop) */}
        <div className="hidden lg:block mb-4">
          <div className="flex items-center justify-center max-w-3xl mx-auto">
            {phases.map((phase, index) => (
              <div key={index} className="flex items-center">
                {/* Connecting line BEFORE the circle (except first) */}
                {index > 0 && (
                  <div className="w-20 h-1 bg-gray-200 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-primary"
                      initial={{ width: '0%' }}
                      animate={{ width: index <= activePhase ? '100%' : '0%' }}
                      transition={{ duration: 0.4, delay: index <= activePhase ? 0.1 : 0 }}
                    />
                  </div>
                )}
                
                {/* Circle button */}
                <motion.button
                  onClick={() => setActivePhase(index)}
                  className={`w-12 h-12 rounded-full border-3 border-black flex items-center justify-center font-bold transition-all relative z-10 ${
                    index <= activePhase 
                      ? `${phase.color} text-black` 
                      : 'bg-white text-gray-400 hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  animate={index > activePhase ? {
                    scale: [1, 1.08, 1],
                  } : {}}
                  transition={index > activePhase ? {
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: index * 0.3,
                    ease: "easeInOut"
                  } : {}}
                >
                  {phase.number}
                </motion.button>
              </div>
            ))}
          </div>
          
          {/* Click to explore prompt */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-center text-sm text-gray-500 mt-3"
          >
            <span className="inline-flex items-center gap-1">
              <span>👆</span> Click each step to explore
            </span>
          </motion.p>
        </div>

        {/* Phase Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {phases.map((phase, index) => (
            <PhaseCard
              key={index}
              phase={phase}
              isActive={activePhase === index}
              isExpanded={index <= activePhase}
              onClick={() => setActivePhase(index)}
            />
          ))}
        </motion.div>

        {/* Included Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 mb-8"
        >
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-5xl mx-auto">
            {[
              'Reporting & Analytics',
              'Monthly Check-Ins',
              'Human-in-the-Loop AI Oversight',
              'Ongoing Conversion Optimization',
              'Flexible Configuration',
              'Integration Support',
              'Multi-Location Optimization',
              'Done-For-You Setup & Onboarding',
              'Personalized Fulfillment Feed',
              'Automated Change Alerts',
              'On-Request Marketing Audits',
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8"
        >
          <a href="#contact" className="btn-brutal btn-brutal-primary text-lg px-8 py-4">
            Start Your Audit — It's Free
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ClientExperience;
