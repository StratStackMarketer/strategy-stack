import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';
import { AnimatedGrid } from '../ui/AnimatedGrid';
import { CloudGraphics } from '../ui/CloudGraphics';

const projects = [
  {
    title: 'Greenfield Residential',
    category: 'Property Management',
    description: 'AI-powered leasing automation and digital presence overhaul cut average vacancy time from 3 weeks to under 10 days.',
    image: '🏢',
    backgroundImage: '/images/roofing-bg.webp',
    gradient: 'from-violet-500 to-purple-600',
    stats: [
      { icon: TrendingUp, label: 'Vacancy Reduction', value: '-64%' },
      { icon: DollarSign, label: 'Revenue Impact', value: '+$380K' },
    ],
    featured: true,
  },
  {
    title: 'Metro Auto Group',
    category: 'Automotive',
    description: 'Service bay campaign strategy and AI lead follow-up drove consistent appointment volume across 3 locations.',
    image: '🚗',
    backgroundImage: '/images/hvac-bg.webp',
    gradient: 'from-cyan-400 to-blue-500',
    stats: [
      { icon: Users, label: 'Appt. Increase', value: '+40%' },
      { icon: Clock, label: 'Time to ROI', value: '45 days' },
    ],
    featured: false,
  },
  {
    title: 'Reliable Roofing Co.',
    category: 'Home Services',
    description: 'Full digital transformation — website, local SEO, and AI lead response — tripled monthly lead volume in 60 days.',
    image: '🏠',
    backgroundImage: '/images/landscaping-bg.webp',
    gradient: 'from-orange-400 to-red-500',
    stats: [
      { icon: DollarSign, label: 'Lead Growth', value: '+287%' },
      { icon: TrendingUp, label: 'Revenue Added', value: '$420K' },
    ],
    featured: true,
  },
  {
    title: 'Stackflow',
    category: 'SaaS Startup',
    description: 'Content, nurture, and AI-driven outreach rebuilt their acquisition pipeline at 38% lower CAC within a quarter.',
    image: '🚀',
    backgroundImage: '/images/plumbing-bg.webp',
    gradient: 'from-green-400 to-emerald-500',
    stats: [
      { icon: TrendingUp, label: 'CAC Reduction', value: '-38%' },
      { icon: Users, label: 'Pipeline Growth', value: '+2.4x' },
    ],
    featured: false,
  },
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

export function Projects() {
  return (
    <section
      id="projects"
      className="section-full bg-gray-900 text-white relative overflow-hidden z-10"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 97%, 0 100%)' }}
    >
      {/* Animated Grid Background */}
      <AnimatedGrid gridSize={40} darkMode={true} />

      {/* Cloud Graphics for Depth */}
      <CloudGraphics darkMode={true} density="medium" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Case Studies Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center relative -translate-y-1/2"
        >
          <span className="inline-block px-6 py-3 bg-cyan-400 text-black border-3 border-white brutal-shadow-sm font-bold text-lg uppercase tracking-wider">
            Case Studies
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
            Recent Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real results for real Indianapolis businesses. Here's a peek at what we've been building.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`relative overflow-hidden border-3 border-white group cursor-pointer ${
                project.featured
                  ? 'lg:col-span-2 lg:row-span-2'
                  : 'lg:col-span-2 lg:row-span-1'
              }`}
            >
              {/* Background Image Layer */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${project.backgroundImage})`,
                }}
              />

              {/* Gradient Overlay - Semi-transparent */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                initial={{ opacity: 0.75 }}
                whileHover={{ opacity: 0.6 }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className={`relative h-full flex flex-col justify-between z-10 ${project.featured ? 'p-6' : 'p-4'}`}>
                {/* Top Section */}
                <div>
                  <div className={`flex items-center justify-between ${project.featured ? 'mb-4' : 'mb-2'}`}>
                    <span className={`bg-white/30 backdrop-blur-sm rounded-full font-medium border border-white/50 ${project.featured ? 'px-3 py-1 text-sm' : 'px-2 py-0.5 text-xs'}`}>
                      {project.category}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-2 bg-white/30 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity border border-white/50"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </motion.div>
                  </div>

                  {/* Icon/Image */}
                  <motion.div
                    className={`${project.featured ? 'mb-4 text-8xl' : 'mb-2 text-3xl'}`}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.image}
                  </motion.div>

                  <h3 className={`font-bold drop-shadow-lg ${project.featured ? 'text-3xl mb-2' : 'text-lg mb-1'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-white drop-shadow-md ${project.featured ? 'text-lg' : 'text-xs'}`}>
                    {project.description}
                  </p>
                </div>

                {/* Stats */}
                <div className={`grid grid-cols-2 ${project.featured ? 'gap-4 mt-4' : 'gap-2 mt-2'}`}>
                  {project.stats.map((stat, statIndex) => (
                    <motion.div
                      key={statIndex}
                      whileHover={{ scale: 1.05 }}
                      className={`flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 ${project.featured ? 'p-3' : 'p-2'}`}
                    >
                      <stat.icon className={project.featured ? 'h-4 w-4' : 'h-3 w-3'} />
                      <div>
                        <p className={`text-white/90 ${project.featured ? 'text-xs' : 'text-[10px]'}`}>{stat.label}</p>
                        <p className={`font-bold ${project.featured ? '' : 'text-sm'}`}>{stat.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Dark Overlay for Better Readability */}
              <motion.div
                className="absolute inset-0 bg-black/30 pointer-events-none"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
