import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AnimatedGrid } from '../components/ui/AnimatedGrid';
import { CloudGraphics } from '../components/ui/CloudGraphics';
import { SparkLine } from '../components/ui/SparkLine';
import { Solution, ClientExperience, Testimonials, Pricing, FAQ, Contact } from '../components/sections';
import type { FAQItem } from '../components/sections/FAQ';

export interface VerticalConfig {
  // Hero
  badge: string;
  headline: string;
  headlineAccent: string;
  headlineAccentClass?: string;
  headlineThirdLine?: string;
  subheadline: string;
  
  // Problem
  problemTitle: string;
  problemSubtitle: string;
  painPoints: {
    icon: LucideIcon;
    text: string;
  }[];
  
  // Solution
  solutionPoints: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  
  // FAQs
  faqs: FAQItem[];
  
  // Meta
  industry: string;
  color: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

interface VerticalHeroProps {
  config: VerticalConfig;
}

function VerticalHero({ config }: VerticalHeroProps) {
  return (
    <section
      className="min-h-screen pt-32 pb-20 bg-white relative overflow-hidden z-10"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 97%, 0 100%)' }}
    >
      {/* Animated Grid Background */}
      <AnimatedGrid gridSize={40} darkMode={false} />

      {/* Cloud Graphics for Depth */}
      <CloudGraphics darkMode={false} density="medium" />

      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-40 right-10 w-20 h-20 border-4 border-primary opacity-20"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 left-10 w-16 h-16 bg-secondary opacity-30 rotate-12"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className={`inline-block px-4 py-2 ${config.color} border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider`}>
              {config.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-heading mb-6 leading-none"
          >
            {config.headline}
            <br />
            <span className={`text-primary ${config.headlineAccentClass || ''}`}>{config.headlineAccent}</span>
            {config.headlineThirdLine && (
              <>
                <br />
                <span className="text-gray-500 text-4xl md:text-5xl lg:text-6xl">{config.headlineThirdLine}</span>
              </>
            )}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto"
          >
            {config.subheadline}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="btn-brutal btn-brutal-primary text-lg px-8 py-4">
              Get A Free Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#problem" className="btn-brutal btn-brutal-white text-lg px-8 py-4">
              See How We're Different
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

interface VerticalProblemProps {
  config: VerticalConfig;
}

function VerticalProblem({ config }: VerticalProblemProps) {
  return (
    <section id="problem" className="section-full bg-gray-900 text-white relative overflow-hidden z-10">
      <AnimatedGrid gridSize={60} darkMode={true} />
      <CloudGraphics darkMode={true} density="medium" />
      <SparkLine color="#ef4444" delay={0.2} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center relative -translate-y-1/2"
        >
          <span className="inline-block px-6 py-3 bg-red-500 border-3 border-white brutal-shadow-sm font-bold text-lg uppercase tracking-wider">
            The Problem
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-8"
        >
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            {config.problemTitle}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {config.problemSubtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-red-500 to-orange-500 border-4 border-white p-8 brutal-shadow-xl">
              <div className="aspect-square flex items-center justify-center">
                <div className="text-center">
                  <img
                    src="/ProblemComputerCharacter.svg"
                    alt="Frustrated business owner"
                    className="w-64 h-64 mx-auto mb-4"
                  />
                  <p className="text-2xl font-bold">Still haven't fixed your marketing?</p>
                  <p className="text-lg opacity-80 mt-2">We've all been there.</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 border-3 border-white" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-cyan-400 border-3 border-white rotate-12" />
            </div>
          </motion.div>

          {/* Pain Points */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold mb-3 text-yellow-400">Sound familiar?</h3>
              <p className="text-gray-300 text-lg">
                You've tried the big agencies, the small vendors, maybe even the DIY route.
                Same story every time.
              </p>
            </motion.div>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                },
              }}
              className="space-y-3"
            >
              {config.painPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.li
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="p-2 bg-red-500/20 rounded">
                      <Icon className="h-5 w-5 text-red-400" />
                    </div>
                    <span className="text-gray-200">{point.text}</span>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}

interface VerticalPageProps {
  config: VerticalConfig;
}

export function VerticalPage({ config }: VerticalPageProps) {
  return (
    <>
      <VerticalHero config={config} />
      <VerticalProblem config={config} />
      <Solution />
      <ClientExperience />
      <Testimonials />
      <Pricing />
      <FAQ 
        title="Frequently Asked Questions"
        subtitle={`Common questions about ${config.industry.toLowerCase()} marketing`}
        faqs={config.faqs}
      />
      <Contact />
    </>
  );
}

export default VerticalPage;
