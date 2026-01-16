import { motion } from 'framer-motion';
import { NeoBrutalistDecor } from '../ui/NeoBrutalistDecor';

const testimonialRows = [
  // Row 1 - Client testimonials
  [
    {
      quote: "They aren't the only agency who has industry experience but they've been the only ones who felt like a partner",
      author: "Mike R.",
      company: "Reliable Roofing Co.",
      avatar: "🏠",
    },
    {
      quote: "Cut our lead cost in half after just buying a single payment service package",
      author: "Sarah T.",
      company: "Comfort Zone HVAC",
      avatar: "❄️",
    },
    {
      quote: "These guys like to email and text a ton but when I called, they picked right up.",
      author: "James K.",
      company: "ProFlow Plumbing",
      avatar: "🔧",
    },
    {
      quote: "Went from page 3 to #2 on Google in 6 weeks. Our phone hasn't stopped ringing.",
      author: "David M.",
      company: "Clean Green Lawns",
      avatar: "🌿",
    },
    {
      quote: "No contracts, no BS, and they let me customize my own service package",
      author: "Chris P.",
      company: "Spark Electric",
      avatar: "⚡",
    },
  ],
  // Row 2 - More testimonials (reverse direction)
  [
    {
      quote: "First agency that didn't make me feel like an ATM. They actually care about acheiving ROI.",
      author: "Tom H.",
      company: "Dunn Windows",
      avatar: "🪟",
    },
    {
      quote: "The AI stuff sounded gimmicky but holy crap it works. 3x leads in month one.",
      author: "Lisa M.",
      company: "So Fresh'N'Clean",
      avatar: "✨",
    },
    {
      quote: "They built us a website that actually converts. Not just pretty—profitable.",
      author: "Kevin B.",
      company: "AAA Foundation Concrete",
      avatar: "🏗️",
    },
    {
      quote: "I didn't have to join a single meeting but received constant updates on the work",
      author: "Angela R.",
      company: "Good & Gone Pest Services",
      avatar: "🐜",
    },
    {
      quote: "The performance guarantee isn't marketing fluff. They actually honored it with a free month of service",
      author: "Steve L.",
      company: "Elite Garage Doors and Floors",
      avatar: "🚗",
    },
  ],
  // Row 3 - Trust badges and accolades
  [
    {
      quote: "Best marketing investment we've made in 15 years of business.",
      author: "Robert J.",
      company: "RJ's Heating & Cooling",
      avatar: "🔥",
    },
    {
      quote: "They speak contractor, not marketing mumbo jumbo. Refreshing as hell.",
      author: "Dan W.",
      company: "Clean Line Painting",
      avatar: "🎨",
    },
    {
      quote: "Hired them for SEO, stayed for everything else. Full marketing team at freelancer prices.",
      author: "Maria S.",
      company: "Mothers Spotless Maid Service",
      avatar: "🧹",
    },
    {
      quote: "Finally someone who gets that my busy season is different from everyone else's.",
      author: "Jeff C.",
      company: "Blown Clean Leaf & Lawn",
      avatar: "🍂",
    },
    {
      quote: "The audits alone are worth it. I actually know what's happening with my marketing. Good and Bad.",
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
            Hear from contractors, installers, maintenance and repair pros, landscapers, painters, carpet layers, bug sprayers, and more, aaand more, Home Service businesses just like yours 
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
