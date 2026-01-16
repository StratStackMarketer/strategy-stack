import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Bot,
  MessageCircle,
  BadgeCheck,
  Sparkles
} from 'lucide-react';
import { NeoBrutalistDecor } from '../ui/NeoBrutalistDecor';

const solutions = [
  {
    icon: Bot,
    text: 'AI & automation breakthroughs = quality up, costs down—savings passed to you',
    highlight: true,
  },
  {
    icon: MessageCircle,
    text: 'Async-first communication, no meetings required—your time stays with customers',
    highlight: false,
  },
  {
    icon: BadgeCheck,
    text: 'Measurable results or continued free work—we eat the risk, not you',
    highlight: true,
  },
  {
    icon: Sparkles,
    text: 'Bite-sized packages with flexible payment options at startup-friendly prices—grow without the overhead',
    highlight: false,
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
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="solution"
      className="section-full bg-primary text-white relative overflow-hidden"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 97%)' }}
    >
      {/* Background decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 left-10 w-40 h-40 border-4 border-white/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 right-10 w-32 h-32 border-4 border-white/20"
      />

      {/* Neo-Brutalist Decorative Elements */}
      <NeoBrutalistDecor variant="logo-shape" color="#ccf381" size="lg" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center relative -translate-y-1/2"
        >
          <span className="inline-block px-6 py-3 bg-white text-primary border-3 border-black brutal-shadow-sm font-bold text-lg uppercase tracking-wider">
            Our Solution
          </span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            Premium AI and Automation Powered Services With Low Prices and High Value
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Simple, reliable, and flexible services that can fix what's broken and scale past the competition, inside nice and affordable, bite-sized packages.
          </p>
        </motion.div>

        {/* Two Column Layout - Reversed */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-secondary">The Strategy Stack Difference</h3>
              <p className="text-white/80 text-lg">
                We’ve combined cutting-edge AI and automation with real industry expertise to offer bite-sized 
                service packages at surprisingly low prices and flexible payment options. 
              </p>
            </motion.div>

            {/* Solutions List */}
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="space-y-4"
            >
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className={`flex items-start gap-4 p-4 rounded-lg border-2 transition-all ${
                    solution.highlight
                      ? 'bg-white/20 border-white hover:bg-white/30'
                      : 'bg-white/5 border-white/20 hover:bg-white/10'
                  }`}
                >
                  <div className={`p-2 rounded ${solution.highlight ? 'bg-secondary' : 'bg-white/20'}`}>
                    <solution.icon className={`h-5 w-5 ${solution.highlight ? 'text-black' : 'text-white'}`} />
                  </div>
                  <span className="text-white">{solution.text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative bg-gradient-to-br from-green-400 to-cyan-400 border-4 border-white p-8 brutal-shadow-xl">
              {/* Success illustration placeholder */}
              <div className="aspect-square flex items-center justify-center">
                <div className="text-center">
                  <img
                    src="/SolutionComputerCharacter.png"
                    alt="Success - Marketing that works"
                    className="w-64 h-64 mx-auto mb-4"
                  />
                  <p className="text-2xl font-bold text-black">Finally, marketing that delivers.</p>
                  <p className="text-lg text-black/70 mt-2">Real results. Real ROI. Real talk.</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-400 border-3 border-white" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-yellow-400 border-3 border-white rotate-12" />
            </div>

            {/* CTA Button Below Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 text-center"
            >
              <a href="#pricing" className="btn-brutal btn-brutal-secondary text-lg">
                See Our Pricing →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
