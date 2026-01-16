import { motion } from 'framer-motion';
import { Check, Zap, Rocket, Crown, Plus } from 'lucide-react';
import { AnimatedGrid } from '../ui/AnimatedGrid';
import { CloudGraphics } from '../ui/CloudGraphics';
import { SparkLine } from '../ui/SparkLine';

const tiers = [
  {
    name: 'Starter',
    icon: Zap,
    price: '495',
    period: '/month',
    description: 'Perfect for businesses just getting started with digital marketing.',
    color: 'bg-cyan-400',
    popular: false,
    features: [
      'Google Business Profile optimization',
      'Foundational SEO Setup & Reporting',
      'Reputationation Management Lite',
      'Internal AI Assistant',
      'External AI Chatbot',
      'On Demand Customer Support',
    ],
  },
  {
    name: 'Growth',
    icon: Rocket,
    price: '995',
    period: '/month',
    description: 'For established businesses ready to dominate their market.',
    color: 'bg-primary',
    popular: true,
    features: [
      'Everything in Starter, plus:',
      'Full Service SEO ',
      'Website Optimization',
      'Local Listings Management',
      'Reputation Management Pro',
      'AI Voice Receptionist',
      'Facebook/Instagram Management',
      'Proactive Account Management',
    ],
  },
  {
    name: 'Scale',
    icon: Crown,
    price: '1,495',
    period: '/month',
    description: 'Full-service marketing for businesses ready to scale fast.',
    color: 'bg-yellow-400',
    popular: false,
    features: [
      'Everything in Growth, plus:',
      'Lead Conversion Optimization',
      'Automated Lead Follow-Up/Nurture',
      'Customer AI Agent Creation',
      'Customer Data Management',
      'Full Service Email Marketing',
      'Custom Dashboard and Reporting',
      'Full Service Social Media Management',
      'Customer Experience Optimization',
    ],
  },
];

const addon = [
  { name: 'Website Design/Redesign', price: 'From $299', description: 'Modified template to completely custom' },
  { name: 'Landing Page', price: 'From $99/page', description: 'High-converting campaign pages' },
  { name: 'Done For You AI Agent Creation', price: 'From $199', description: 'Generalist or specialized' },
  { name: 'Done For You Process Automation', price: 'From $299', description: 'Marketing, Sales, or Ops' },
  { name: 'Google Business Profile Optimization', price: 'From $299', description: 'Single 30 day project or reocurring' },
  { name: 'Social Media Manager', price: 'From $250', description: 'Single 30 day project or reocurring' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function Pricing() {
  return (
    <section
      id="pricing"
      className="section-full bg-white relative overflow-hidden z-10"
      style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 100%, 0 100%)' }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <AnimatedGrid gridSize={40} darkMode={false} />
      </div>

      {/* Cloud Graphics for Depth */}
      <CloudGraphics darkMode={false} density="low" />

      {/* Spark Line Animation */}
      <SparkLine color="#ccf381" delay={0.3} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center relative -translate-y-1/2"
        >
          <span className="inline-block px-6 py-3 bg-secondary border-3 border-black brutal-shadow-sm font-bold text-lg uppercase tracking-wider">
            Simple Pricing
          </span>
        </motion.div>

        {/* Section Header - Now without badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-8"
        >
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            No Hidden Fees. No BS.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pick a service package that fits your business, create one yourself, or go ale cart. No contracts or longterm commitments required. Flexible payment frequencies you can align with your budget or a one-time payment for next day service. Everything includes our satisfaction guarantee or we work for free. 
          </p>
        </motion.div>

        {/* Pricing Tiers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`relative card-brutal p-8 ${
                tier.popular ? 'border-primary border-4 scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white font-bold text-sm rounded-full border-2 border-black">
                  Most Popular
                </div>
              )}

              {/* Colored Header */}
              <div className={`${tier.color} -mx-8 -mt-8 px-8 py-6 mb-6 border-b-3 border-black`}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/30 rounded-lg">
                    <tier.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">{tier.name}</h3>
                </div>
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className="text-5xl font-heading">${tier.price}</span>
                <span className="text-gray-500">{tier.period}</span>
              </div>

              <p className="text-gray-600 mb-6">{tier.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`block text-center py-3 px-6 font-bold border-3 border-black transition-all ${
                  tier.popular
                    ? 'bg-primary text-white hover:bg-primary/90 brutal-shadow-sm hover:brutal-shadow'
                    : 'bg-white hover:bg-gray-50 brutal-shadow-sm hover:brutal-shadow'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* À La Carte Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-heading mb-2 flex items-center justify-center gap-2">
              <Plus className="h-8 w-8 text-primary" />
              À La Carte Add-Ons
            </h3>
            <p className="text-gray-600">
              Need something specific? Add these to any plan or purchase standalone.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {addon.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="p-4 bg-gray-50 border-2 border-black rounded-lg hover:bg-yellow-50 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold">{item.name}</h4>
                  <span className="text-primary font-bold text-sm">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 p-8 bg-green-400 border-3 border-black brutal-shadow-xl text-center"
        >
          <h3 className="text-2xl font-bold mb-2">🛡️ Our Results Guarantee</h3>
          <p className="text-lg max-w-2xl mx-auto">
            If you don't see measurable improvement in your marketing metrics within 90 days,
            we'll keep working for free until you do. No fine print, no exceptions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
