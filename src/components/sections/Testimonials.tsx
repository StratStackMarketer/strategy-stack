import { motion } from 'framer-motion';
import { NeoBrutalistDecor } from '../ui/NeoBrutalistDecor';

const testimonialRows = [
  // Row 1
  [
    {
      quote: "We manage 300+ units. Finding an agency that understands occupancy rates vs. vanity metrics was half the battle. These guys get it.",
      author: "Maria L.",
      company: "Summit Property Group",
      avatar: "🏢",
    },
    {
      quote: "Cut our lead cost in half after just buying a single payment service package",
      author: "Sarah T.",
      company: "Comfort Zone HVAC",
      avatar: "❄️",
    },
    {
      quote: "These guys actually understand dealership economics. Service bay appointments are up 40% since month two.",
      author: "James K.",
      company: "Metro Auto Group",
      avatar: "🚗",
    },
    {
      quote: "Went from page 3 to #2 on Google in 6 weeks. Our phone hasn't stopped ringing.",
      author: "David M.",
      company: "Premier Electrical",
      avatar: "⚡",
    },
    {
      quote: "No contracts, no BS, and I could customize my package. At $495/mo it costs less than a single sponsored LinkedIn post.",
      author: "Chris P.",
      company: "Stackflow",
      avatar: "🚀",
    },
  ],
  // Row 2
  [
    {
      quote: "First agency that didn't make me feel like an ATM. Our average leasing velocity went from 3 weeks to under 10 days.",
      author: "Tom H.",
      company: "Greenfield Residential",
      avatar: "🏢",
    },
    {
      quote: "The AI stuff sounded gimmicky but holy crap it works. 3x the leads in month one.",
      author: "Lisa M.",
      company: "So Fresh'N'Clean",
      avatar: "✨",
    },
    {
      quote: "They built us campaigns that fill our service bays consistently—not random spikes, actual predictable volume.",
      author: "Kevin B.",
      company: "Precision Auto Center",
      avatar: "🔧",
    },
    {
      quote: "I didn't have to join a single meeting but received constant updates on the work. They just get stuff done.",
      author: "Angela R.",
      company: "The Boutique House",
      avatar: "🛍️",
    },
    {
      quote: "The performance guarantee isn't marketing fluff. They actually honored it with a free month of work.",
      author: "Steve L.",
      company: "Elite Garage Doors",
      avatar: "🏠",
    },
  ],
  // Row 3
  [
    {
      quote: "Best marketing investment we've made in 15 years of business.",
      author: "Robert J.",
      company: "RJ's Heating & Cooling",
      avatar: "🔥",
    },
    {
      quote: "They speak business owner, not marketing mumbo jumbo. Refreshing as hell.",
      author: "Dan W.",
      company: "Clean Line Painting",
      avatar: "🎨",
    },
    {
      quote: "Hired them for content, stayed for everything else. Full marketing function at a fraction of what we'd pay a single in-house hire.",
      author: "Maria S.",
      company: "Launchpad Analytics",
      avatar: "💡",
    },
    {
      quote: "Finally competing on digital with stores 10x our size. Foot traffic up 25% in 60 days.",
      author: "Jeff C.",
      company: "Cornerstone Hardware",
      avatar: "🛍️",
    },
    {
      quote: "The audits alone are worth it. I actually know what's happening with my marketing now. Good and bad.",
      author: "Nicole P.",
      company: "Picture Perfect Pools",
      avatar: "🏊",
    },
  ],
];

function MarqueeRow({ testimonials, reverse = false, speed = 30 }: {
  testimonials: typeof testimonialRows[0];
  reverse?: boolean;
  speed?: number;
}) {
  // Generate random rotations and vertical offsets for messy layout
  const getRandomRotation = (index: number) => {
    const rotations = [-3, -2, -1, 0, 1, 2, 3, -2.5, 2.5, -1.5, 1.5];
    return rotations[index % rotations.length];
  };

  const getRandomOffset = (index: number) => {
    const offsets = [0, 15, -15, 25, -25, 10, -10, 20, -20];
    return offsets[index % offsets.length];
  };

  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        className="flex gap-4"
        animate={{
          x: reverse ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {/* Double the testimonials for seamless loop */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-64 p-4 bg-white border-3 border-black brutal-shadow hover:brutal-shadow-lg transition-all duration-300"
            style={{
              transform: `rotate(${getRandomRotation(index)}deg)`,
              marginTop: `${getRandomOffset(index)}px`,
              zIndex: index % 3,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              zIndex: 50,
            }}
          >
            <p className="text-gray-800 text-base font-medium leading-snug mb-3">"{testimonial.quote}"</p>
            <div className="flex items-center gap-2">
              <div className="text-xl">{testimonial.avatar}</div>
              <div>
                <p className="font-bold text-[10px] leading-tight">{testimonial.author}</p>
                <p className="text-[9px] text-gray-500 leading-tight">{testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Neo-Brutalist Decorative Elements */}
      <NeoBrutalistDecor variant="mixed" color="#ec4899" />

      {/* Section Header */}
      <div className="container mx-auto px-6 mb-12 relative">
        {/* Happy Clients Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center relative -translate-y-1/2"
        >
          <span className="inline-block px-6 py-3 bg-pink-400 border-3 border-black brutal-shadow-sm font-bold text-lg uppercase tracking-wider">
            Happy Clients
          </span>
        </motion.div>

        {/* Section Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center pt-8"
        >
          <h2 className="text-4xl md:text-6xl font-heading mb-4">
            Don't Just Take Our Word For It
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from home services companies, property managers, dealerships, retailers, and founders who stopped settling for agencies that don't understand their business.
          </p>
        </motion.div>
      </div>

      {/* Marquee Rows */}
      <div className="space-y-2">
        <MarqueeRow testimonials={testimonialRows[0]} speed={40} />
        <MarqueeRow testimonials={testimonialRows[1]} reverse speed={35} />
        <MarqueeRow testimonials={testimonialRows[2]} speed={45} />
      </div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="container mx-auto px-6 mt-16"
      >
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-black rounded-full">
            <span className="text-2xl">⭐</span>
            <span className="font-bold">92% Repeat Customer Rate</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-black rounded-full">
            <span className="text-2xl">🏆</span>
            <span className="font-bold">80%+ Customers Start Seeing Results In Days, Not Weeks</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-black rounded-full">
            <span className="text-2xl">📍</span>
            <span className="font-bold">Coast to Coast Customers</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-black rounded-full">
            <span className="text-2xl">💯</span>
            <span className="font-bold">Results Guaranteed</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
