import { motion } from 'framer-motion';
import { TrendingUp, Users, Phone, Star, Award, Rocket } from 'lucide-react';
import { AnimatedGrid } from '../ui/AnimatedGrid';
import { CloudGraphics } from '../ui/CloudGraphics';
import { NeoBrutalistDecor } from '../ui/NeoBrutalistDecor';
import { SparkLine } from '../ui/SparkLine';

const metrics = [
  {
    number: '347%',
    label: 'Average ROI Increase',
    description: 'Across all home service clients in first 90 days',
    color: 'bg-green-400',
  },
  {
    number: '2.4x',
    label: 'More Qualified Leads',
    description: 'Compared to traditional agency approaches',
    color: 'bg-cyan-400',
  },
  {
    number: '68%',
    label: 'Lower Cost Per Lead',
    description: 'AI automation passes savings directly to you',
    color: 'bg-yellow-400',
  },
];

const clientWins = [
  {
    icon: TrendingUp,
    text: 'Roofing company went from 12 to 47 monthly leads in 60 days',
  },
  {
    icon: Users,
    text: 'HVAC business reduced cost-per-acquisition by 54%',
  },
  {
    icon: Phone,
    text: 'Plumber doubled phone calls while cutting ad spend by 30%',
  },
  {
    icon: Star,
    text: 'Landscaper hit #1 Google Maps ranking in 8 weeks',
  },
  {
    icon: Award,
    text: 'Electrician generated $180K in new contracts from single campaign',
  },
  {
    icon: Rocket,
    text: 'Pest control company scaled from 2 to 5 trucks with our marketing',
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Results() {
  return (
    <section id="results" className="relative overflow-hidden min-h-screen py-20 md:py-32 bg-white">
      {/* Full-Width Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <AnimatedGrid gridSize={40} darkMode={false} />

        {/* Cloud Graphics for Depth */}
        <CloudGraphics darkMode={false} density="high" />

        {/* Spark Line Animation */}
        <SparkLine color="#10b981" delay={0.1} />
      </div>

      {/* Floating Decorative Elements - Landscape Rectangles */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 3, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[55%] w-40 h-20 bg-green-400 border-4 border-black brutal-shadow-lg z-0"
        style={{ clipPath: 'polygon(0 0, 95% 0, 100% 100%, 5% 100%)' }}
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-20 w-40 h-20 bg-yellow-400 border-4 border-black brutal-shadow-lg z-0"
        style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, 4, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-16 w-32 h-16 bg-cyan-400 border-4 border-black brutal-shadow-lg z-0"
        style={{ clipPath: 'polygon(0 5%, 95% 0, 100% 95%, 5% 100%)' }}
      />

      {/* Neo-Brutalist Decorative Elements */}
      <NeoBrutalistDecor variant="mixed" color="#34d399" />

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Real Results Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center relative -translate-y-1/2"
        >
          <span className="inline-block px-6 py-3 bg-green-400 border-3 border-black brutal-shadow-sm font-bold text-lg uppercase tracking-wider">
            Real Results
          </span>
        </motion.div>

        {/* Section Header - Asymmetric Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-heading mb-6 leading-tight">
             Pro-forma Performance and ROI
            </h2>
            <p className="text-xl text-gray-600">
              We're big on data, reporting. and ROI. Here are just a few ways we like to highlight performance and ROI using actual client performance data. 
            </p>
          </motion.div>

          {/* First Metric - Large Featured */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative"
          >
            <div className="card-brutal p-12 bg-green-400 relative overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-40 h-40 border-4 border-black/20 rounded-full"
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-8xl md:text-9xl font-heading text-black mb-4 relative z-10"
              >
                {metrics[0].number}
              </motion.div>
              <h3 className="font-bold text-2xl mb-2 text-black">{metrics[0].label}</h3>
              <p className="text-black/80 text-lg">{metrics[0].description}</p>
            </div>
          </motion.div>
        </div>

        {/* Remaining Metrics - Diagonal Layout */}
        <div className="relative mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl ml-auto"
          >
            {metrics.slice(1).map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="card-brutal p-8 bg-white relative overflow-hidden group"
                style={{ marginTop: index % 2 === 0 ? 0 : '3rem' }}
              >
                <div className={`absolute top-0 left-0 w-full h-3 ${metric.color}`} />
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="text-6xl md:text-7xl font-heading text-primary mb-3"
                >
                  {metric.number}
                </motion.div>
                <h3 className="font-bold text-xl mb-2">{metric.label}</h3>
                <p className="text-gray-600">{metric.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Client Wins - Masonry Style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Recent Client Wins 🏆
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {clientWins.map((win, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
                }}
                className="flex flex-col items-start gap-4 p-6 bg-white border-3 border-black brutal-shadow hover:bg-green-50 transition-colors"
                style={{
                  marginTop: index % 3 === 1 ? '2rem' : index % 3 === 2 ? '4rem' : 0,
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-3 bg-green-400 border-3 border-black rounded brutal-shadow-sm"
                >
                  <win.icon className="h-6 w-6" />
                </motion.div>
                <span className="text-gray-800 font-medium text-lg">{win.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA - Centered with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-2xl text-gray-800 mb-6 font-bold">
              Looking for similar results by your business?
            </p>
            <a href="#pricing" className="btn-brutal btn-brutal-primary text-xl">
              Let's explore your options today →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
