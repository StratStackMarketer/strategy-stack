import { motion } from 'framer-motion';
import { ArrowRight, Zap, DollarSign, Target, Shield } from 'lucide-react';
import { AnimatedGrid } from '../components/ui/AnimatedGrid';
import { CloudGraphics } from '../components/ui/CloudGraphics';
import { IndustriesShowcase } from '../components/sections/IndustriesShowcase';
import { ClientExperience } from '../components/sections/ClientExperience';
import { Testimonials, Pricing, Contact, FAQ } from '../components/sections';
import { universalFAQs } from '../data/faqs';

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
    title: 'Industry Experts',
    description: 'Deep experience across Home Services, Property Management, Automotive, Retail & SaaS.',
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

function HomeHero() {
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
            <span className="inline-block px-4 py-2 bg-primary border-3 border-black brutal-shadow-sm font-bold text-sm uppercase tracking-wider text-white">
              AI-Powered Marketing Agency
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-heading mb-6 leading-none"
          >
            Premium Marketing.
            <br />
            <span className="text-primary">Unreal Prices.</span>
            <br />
            <span className="text-gray-500 text-4xl md:text-5xl lg:text-6xl">Real ROI.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto"
          >
            Finally—an agency built different. AI-powered, automation-first, and priced like we actually want your business. No BS. No bloated retainers. Just results.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#experience" className="btn-brutal btn-brutal-primary text-lg px-8 py-4">
              See Our Approach
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="/pricing" className="btn-brutal btn-brutal-white text-lg px-8 py-4">
              View Pricing
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

export function HomePage() {
  return (
    <>
      <HomeHero />
      <IndustriesShowcase />
      <ClientExperience />
      <Testimonials />
      <Pricing />
      <FAQ 
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers. No BS."
        faqs={universalFAQs}
      />
      <Contact />
    </>
  );
}

export default HomePage;
