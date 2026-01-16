import { motion } from 'framer-motion';
import { ArrowRight, Zap, DollarSign, Target, Shield } from 'lucide-react';
import { AnimatedGrid } from '../ui/AnimatedGrid';
import { CloudGraphics } from '../ui/CloudGraphics';

const differentiators = [
  {
    icon: DollarSign,
    title: 'Unbeatable Pricing',
    description: 'AI & automation = premium quality at prices that make you do a double-take.',
    color: 'bg-green-400',
  },
  {
    icon: Zap,
    title: 'Zero BS Approach',
    description: 'No jargon. No endless meetings. No hidden fees. Just straight talk and real results.',
    color: 'bg-yellow-400',
  },
  {
    icon: Target,
    title: 'Home Services Experts',
    description: 'Indianapolis specialists who know roofing, HVAC, plumbing—your business, your market.',
    color: 'bg-cyan-400',
  },
  {
    icon: Shield,
    title: 'Results Guaranteed',
    description: "No measurable ROI? We keep working for free. We eat the risk, not you.",
    color: 'bg-pink-400',
  },
];

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

export function Hero() {
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
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-secondary border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider">
            Professional Home Services Marketing
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-heading mb-6 leading-none"
          >
            Premium Marketing
            <br />
            <span className="text-primary">Unreal Prices.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto"
          >
            Finally—an agency that cuts through the BULLSH*T. A new experience where you decide if meetings are required, service packages are customizable, and the savings generated from AI and automation are passed on to customers. 
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

        {/* Differentiator Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {differentiators.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="card-brutal p-6 relative overflow-hidden group cursor-pointer"
            >
              {/* Colored accent bar */}
              <div className={`absolute top-0 left-0 w-full h-1 ${item.color}`} />

              <div className="flex items-start gap-4">
                <div className={`p-3 ${item.color} border-3 border-black brutal-shadow-sm`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
