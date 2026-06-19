import { motion } from 'framer-motion';
import { ArrowRight, Zap, DollarSign, Target, Shield } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { trackCTA } from '@/lib/analytics';
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

// ─── Reveal Headline Interaction ──────────────────────────────────────────────
// Part 1: "Your Competitors Are Winning." (black, always visible)
// Part 2: "Your Marketing Is Why." (primary/purple, revealed as cursor sweeps L→R)
function RevealHeadline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealPct, setRevealPct] = useState(0);
  const [cursorLeft, setCursorLeft] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const targetPctRef = useRef(0);
  const currentPctRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const tick = () => {
      const diff = targetPctRef.current - currentPctRef.current;
      if (Math.abs(diff) > 0.05) {
        currentPctRef.current += diff * 0.14;
        setRevealPct(currentPctRef.current);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    targetPctRef.current = pct;
    setCursorLeft(pct);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    targetPctRef.current = 0;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      className="relative block text-center select-none"
      style={{ cursor: 'text' }}
    >
      {/* Part 1 — base layer, always visible */}
      <span className="text-black">Your Competitors Are Winning.</span>

      {/* Part 2 — centered overlay, revealed left-to-right via clip-path */}
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center text-primary pointer-events-none whitespace-nowrap"
        style={{
          clipPath: `inset(0 ${100 - revealPct}% 0 0)`,
          WebkitClipPath: `inset(0 ${100 - revealPct}% 0 0)`,
        }}
      >
        Your Marketing Is Why.
      </span>

      {/* Blinking text cursor — appears at mouse position */}
      {isHovering && (
        <span
          aria-hidden="true"
          className="absolute top-[5%] bottom-[5%] pointer-events-none"
          style={{
            left: `${cursorLeft}%`,
            width: '3px',
            background: 'black',
            animation: 'textCursorBlink 1s step-end infinite',
            transform: 'translateX(-1px)',
          }}
        />
      )}
    </div>
  );
}


// ─── Marquee Banner ───────────────────────────────────────────────────────────
// Angled scrolling strip — inserted between Hero and Industries sections.
// Content rotates through 3 key offers. Update items array to change copy.
const marqueeItems = [
  { icon: '🎯', text: 'Free Marketing Audit — No Strings Attached' },
  { icon: '🤖', text: 'AI Agents — First 30 Days Free' },
  { icon: '🛡️', text: 'Results Guaranteed or We Work Free' },
];
// Duplicate 4x for seamless infinite loop at any scroll speed
const marqueeTrack = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

function MarqueeBanner() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ zIndex: 15, margin: '-4px 0' }}
      aria-hidden="true"
    >
      {/* Rotated container — negative horizontal margin bleeds past viewport edges */}
      <div
        className="bg-secondary border-t-3 border-b-3 border-black py-4 overflow-hidden"
        style={{
          transform: 'rotate(-2deg)',
          margin: '16px -60px',
        }}
      >
        {/* Scrolling track */}
        <div
          className="flex items-center gap-0 whitespace-nowrap"
          style={{ animation: 'marquee 28s linear infinite' }}
        >
          {marqueeTrack.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 font-bold text-black uppercase tracking-widest text-sm px-6"
            >
              <span className="text-base">{item.icon}</span>
              {item.text}
              <span className="opacity-30 ml-6 text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function HomeHero() {
  return (
    <section
      className="min-h-screen pt-32 pb-20 bg-white relative overflow-hidden z-10"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 97%, 0 100%)' }}
    >
      <AnimatedGrid gridSize={40} darkMode={false} />
      <CloudGraphics darkMode={false} density="medium" />

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

          {/* Reveal headline — Part 1 black, Part 2 revealed purple on hover sweep */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-heading mb-6 leading-none"
          >
            <RevealHeadline />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto"
          >
            Finally—an agency built different. AI-powered, automation-first, and priced like we actually want your business. No BS. No bloated retainers. Just results.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#experience"
              onClick={() => trackCTA('Hero - See Our Approach', 'Home Hero')}
              className="btn-brutal btn-brutal-primary text-lg px-8 py-4"
            >
              See Our Approach
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/pricing"
              onClick={() => trackCTA('Hero - View Pricing', 'Home Hero')}
              className="btn-brutal btn-brutal-white text-lg px-8 py-4"
            >
              View Pricing
            </a>
          </motion.div>
        </motion.div>

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
      <MarqueeBanner />
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
