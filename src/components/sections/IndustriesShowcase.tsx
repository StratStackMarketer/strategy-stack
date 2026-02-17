import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Building2, 
  Car, 
  ShoppingBag, 
  Rocket,
  Sparkles,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { AnimatedGrid } from '../ui/AnimatedGrid';

const industries = [
  {
    id: 'home-services',
    name: 'Home Services',
    icon: Home,
    tagline: 'HVAC, Plumbing, Roofing & More',
    description: 'Marketing that fills your schedule with quality leads, not tire-kickers.',
    color: 'bg-cyan-400',
    hoverColor: 'hover:bg-cyan-50',
    path: '/home-services',
  },
  {
    id: 'property-management',
    name: 'Property Management',
    icon: Building2,
    tagline: 'Multifamily & Residential',
    description: 'Fill units faster, retain residents longer, protect your NOI.',
    color: 'bg-primary',
    hoverColor: 'hover:bg-purple-50',
    path: '/property-management',
  },
  {
    id: 'automotive',
    name: 'Automotive',
    icon: Car,
    tagline: 'Dealerships & Service Centers',
    description: 'Drive traffic, close deals, dominate local search.',
    color: 'bg-red-400',
    hoverColor: 'hover:bg-red-50',
    path: '/automotive',
  },
  {
    id: 'retail',
    name: 'Retail',
    icon: ShoppingBag,
    tagline: 'Local & E-commerce',
    description: 'Compete with the big guys using tools that level the playing field.',
    color: 'bg-secondary',
    hoverColor: 'hover:bg-yellow-50',
    path: '/retail',
  },
  {
    id: 'saas-startups',
    name: 'SaaS Startups',
    icon: Rocket,
    tagline: 'Early Stage & Growth',
    description: 'Scale smarter without burning runway on bloated retainers.',
    color: 'bg-green-400',
    hoverColor: 'hover:bg-green-50',
    path: '/saas-startups',
  },
  {
    id: 'new-industries',
    name: 'New Industries',
    icon: Sparkles,
    tagline: 'Expanding Horizons',
    description: 'Our industry-tailored expertise and combined experience across major markets is highly transferrable. If your business faces marketing challenges and could benefit from AI-powered solutions, we\'re ready to explore new opportunities together.',
    color: 'bg-orange-400',
    hoverColor: 'hover:bg-orange-50',
    path: '#contact',
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function IndustriesShowcase() {
  return (
    <section 
      id="industries" 
      className="section-full bg-gray-900 text-white relative overflow-hidden z-10"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <AnimatedGrid gridSize={60} darkMode={true} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center relative -translate-y-1/2"
        >
          <span className="inline-block px-6 py-3 bg-secondary border-3 border-white brutal-shadow-sm font-bold text-lg uppercase tracking-wider text-black">
            Industries We Know
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
            A Winning Combination of Deep Industry Experience, Strategy, and Focus.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We specialize in markets we've lived. Decades of combined experience means we understand your business, your customers, and what actually moves the needle.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Link 
                  to={industry.path}
                  className={`block card-brutal bg-white text-black p-6 h-full transition-colors ${industry.hoverColor}`}
                >
                  {/* Colored top bar */}
                  <div className={`w-full h-2 ${industry.color} -mx-6 -mt-6 mb-4`} style={{ width: 'calc(100% + 3rem)' }} />
                  
                  {/* Icon */}
                  <div className={`inline-flex p-3 ${industry.color} border-3 border-black brutal-shadow-sm mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-1">{industry.name}</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-3">{industry.tagline}</p>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  
                  {/* Arrow */}
                  <div className="flex items-center text-primary font-bold text-sm">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Open Door Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/10 border-2 border-white/20 rounded-lg p-6 text-center backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-3">
              <MessageCircle className="h-5 w-5 text-secondary" />
              <span className="font-bold">Don't see your industry?</span>
            </div>
            <p className="text-gray-300 mb-4">
              We work with growth-focused businesses across adjacent markets. If you're serious about results, we should talk.
            </p>
            <a href="#contact" className="btn-brutal btn-brutal-secondary">
              Let's Talk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default IndustriesShowcase;
