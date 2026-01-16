import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Clock,
  DollarSign,
  BarChart3,
  Frown,
} from 'lucide-react';
import { AnimatedGrid } from '../ui/AnimatedGrid';
import { CloudGraphics } from '../ui/CloudGraphics';
import { SparkLine } from '../ui/SparkLine';

const painPoints = [
  {
    icon: Clock,
    text: 'Endless meetings that pull you away from running your business',
  },
  {
    icon: DollarSign,
    text: 'Longterm contracts, hidden fees, and unclear pricing',
  },
  {
    icon: BarChart3,
    text: 'No clear ROI visibility—just invoices and vague reports',
  },
  {
    icon: Frown,
    text: 'Overwhelming, overstuffed and misaligned services packages',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="problem" className="section-full bg-gray-900 text-white relative overflow-hidden z-10">
      {/* Animated Grid Background */}
      <AnimatedGrid gridSize={60} darkMode={true} />

      {/* Cloud Graphics for Depth */}
      <CloudGraphics darkMode={true} density="medium" />

      {/* Spark Line Animation */}
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

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-8"
        >
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            Sick of the Same Misaligned, Outdated and Overpriced Options?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            You're not alone. Home service businesses across the industry are fed up with the same old providers and service contracts.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-red-500 to-orange-500 border-4 border-white p-8 brutal-shadow-xl">
              {/* Frustrated contractor illustration placeholder */}
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

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 border-3 border-white" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-cyan-400 border-3 border-white rotate-12" />
            </div>
          </motion.div>

          {/* Content Column */}
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
                Same story every time—longterm contracts, hallow promises on performance,
                and you're still left without a solid marketing foundation to build upon.
              </p>
            </motion.div>

            {/* Pain Points List */}
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="space-y-3"
            >
              {painPoints.map((point, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="p-2 bg-red-500/20 rounded">
                    <point.icon className="h-5 w-5 text-red-400" />
                  </div>
                  <span className="text-gray-200">{point.text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
