import { useState } from 'react';
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
    accentColor: '#22d3ee',      // cyan-400
    textOnHover: '#000',
    path: '/home-services',
  },
  {
    id: 'property-management',
    name: 'Property Management',
    icon: Building2,
    tagline: 'Multifamily & Residential',
    description: 'Fill units faster, retain residents longer, protect your NOI.',
    accentColor: '#7c3aed',      // primary purple
    textOnHover: '#fff',
    path: '/property-management',
  },
  {
    id: 'automotive',
    name: 'Automotive',
    icon: Car,
    tagline: 'Dealerships & Service Centers',
    description: 'Drive traffic, close deals, dominate local search.',
    accentColor: '#f87171',      // red-400
    textOnHover: '#000',
    path: '/automotive',
  },
  {
    id: 'retail',
    name: 'Retail',
    icon: ShoppingBag,
    tagline: 'Local & E-commerce',
    description: 'Compete with the big guys using tools that level the playing field.',
    accentColor: '#fbbf24',      // secondary yellow
    textOnHover: '#000',
    path: '/retail',
  },
  {
    id: 'saas-startups',
    name: 'SaaS Startups',
    icon: Rocket,
    tagline: 'Early Stage & Growth',
    description: 'Scale smarter without burning runway on bloated retainers.',
    accentColor: '#4ade80',      // green-400
    textOnHover: '#000',
    path: '/saas-startups',
  },
  {
    id: 'new-industries',
    name: 'New Industries',
    icon: Sparkles,
    tagline: 'Expanding Horizons',
    description: "Our industry-tailored expertise and combined experience across major markets is highly transferrable. If your business faces marketing challenges and could benefit from AI-powered solutions, we're ready to explore new opportunities together.",
    accentColor: '#fb923c',      // orange-400
    textOnHover: '#000',
    path: '/#contact',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function IndustryCard({ industry }: { industry: typeof industries[0] }) {
  const [hovered, setHovered] = useState(false);
  const Icon = industry.icon;

  return (
    <motion.div
      variants={cardVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={hovered ? { y: -10 } : { y: 0 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      style={{
        // Colored box-shadow on hover instead of plain black
        filter: hovered
          ? `drop-shadow(6px 6px 0px ${industry.accentColor})`
          : 'drop-shadow(4px 4px 0px #000)',
        transition: 'filter 0.3s ease',
      }}
    >
      <Link
        to={industry.path}
        className="block h-full relative overflow-hidden border-3 border-black bg-white"
        style={{ textDecoration: 'none' }}
      >
        {/* Accent bar — top of card */}
        <div
          className="w-full h-2 flex-shrink-0"
          style={{ backgroundColor: industry.accentColor }}
        />

        {/* Background fill — diagonal reveal on hover */}
        <motion.div
          className="absolute inset-0"
          style={{ backgroundColor: industry.accentColor }}
          initial={{ clipPath: 'polygon(0 100%, 0 100%, 0 100%, 0 100%)' }}
          animate={
            hovered
              ? { clipPath: 'polygon(0 0, 110% 0, 110% 110%, 0 110%)' }
              : { clipPath: 'polygon(0 100%, 0 100%, 0 100%, 0 100%)' }
          }
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Shimmer sweep on enter */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)',
            translateX: '-100%',
          }}
          animate={hovered ? { translateX: '200%' } : { translateX: '-100%' }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
        />

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Icon box */}
          <motion.div
            className="inline-flex p-3 border-3 border-black brutal-shadow-sm mb-4"
            style={{ backgroundColor: industry.accentColor }}
            animate={
              hovered
                ? { backgroundColor: '#fff', borderColor: '#000' }
                : { backgroundColor: industry.accentColor, borderColor: '#000' }
            }
            transition={{ duration: 0.25 }}
          >
            <Icon
              className="h-6 w-6"
              style={{
                color: hovered ? industry.accentColor : '#000',
                transition: 'color 0.25s',
              }}
            />
          </motion.div>

          {/* Heading */}
          <h3
            className="text-xl font-bold mb-1 transition-colors duration-300"
            style={{ color: hovered ? industry.textOnHover : '#7c3aed' }}
          >
            {industry.name}
          </h3>

          {/* Tagline */}
          <p
            className="text-sm uppercase tracking-wide mb-3 transition-colors duration-300"
            style={{ color: hovered ? `${industry.textOnHover}99` : '#6b7280' }}
          >
            {industry.tagline}
          </p>

          {/* Description */}
          <p
            className="mb-4 text-sm leading-relaxed transition-colors duration-300"
            style={{ color: hovered ? `${industry.textOnHover}cc` : '#4b5563' }}
          >
            {industry.description}
          </p>

          {/* Arrow CTA */}
          <div
            className="flex items-center font-bold text-sm gap-2 transition-colors duration-300"
            style={{ color: hovered ? industry.textOnHover : '#7c3aed' }}
          >
            Learn More
            <motion.span
              animate={hovered ? { x: 5 } : { x: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function IndustriesShowcase() {
  return (
    <section
      id="industries"
      className="section-full bg-gray-900 text-white relative overflow-hidden z-10"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-30">
        <AnimatedGrid gridSize={60} darkMode={true} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Badge */}
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

        {/* Section header */}
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

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </motion.div>

        {/* Open door */}
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
