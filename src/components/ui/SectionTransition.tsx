import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface SectionTransitionProps {
  variant?: 'wave' | 'angle-left' | 'angle-right' | 'zigzag' | 'cutout' | 'overlap';
  topColor: string;
  bottomColor: string;
  hasTopGrid?: boolean;
  hasBottomGrid?: boolean;
  showOverlappingElement?: boolean;
  overlappingElementColor?: string;
}

export function SectionTransition({
  variant = 'wave',
  topColor,
  bottomColor,
  hasBottomGrid = false,
  showOverlappingElement = true,
  overlappingElementColor = '#ccf381',
}: SectionTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  // SVG paths for different variants
  const paths = {
    wave: 'M0,50 Q250,0 500,50 T1000,50 L1000,100 L0,100 Z',
    'angle-left': 'M0,0 L1000,50 L1000,100 L0,100 Z',
    'angle-right': 'M0,50 L1000,0 L1000,100 L0,100 Z',
    zigzag: 'M0,20 L200,80 L400,20 L600,80 L800,20 L1000,80 L1000,100 L0,100 Z',
    cutout: 'M0,0 L0,80 Q250,100 500,80 T1000,80 L1000,0 Z',
    overlap: 'M0,60 Q250,20 500,60 T1000,60 L1000,100 L0,100 Z',
  };

  return (
    <div ref={ref} className="relative h-32 md:h-48 -mt-1 overflow-hidden">
      {/* Bottom Section Background */}
      <div className={`absolute inset-0 ${bottomColor}`}>
        {hasBottomGrid && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: bottomColor.includes('gray-900')
                ? `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                   linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`
                : `linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                   linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
        )}
      </div>

      {/* Transition Shape from Top Section */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d={paths[variant]}
          className={topColor}
          fill="currentColor"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </svg>

      {/* Optional Overlapping Decorative Element */}
      {showOverlappingElement && (
        <motion.div
          style={{ y, opacity }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          {variant === 'overlap' ? (
            // Triangle/Arrow shape
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                className="drop-shadow-2xl"
              >
                <polygon
                  points="60,10 110,90 10,90"
                  fill={overlappingElementColor}
                  stroke="#000"
                  strokeWidth="3"
                />
                <circle cx="60" cy="65" r="15" fill="#fff" stroke="#000" strokeWidth="3" />
                <motion.path
                  d="M60,55 L60,75 M50,65 L60,75 L70,65"
                  stroke="#000"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </svg>
            </motion.div>
          ) : (
            // Circle button
            <motion.button
              className="w-16 h-16 rounded-full border-4 border-black flex items-center justify-center text-2xl font-bold brutal-shadow-lg hover:brutal-shadow-xl transition-all cursor-pointer"
              style={{ backgroundColor: overlappingElementColor }}
              whileHover={{ scale: 1.15, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
            >
              ↓
            </motion.button>
          )}
        </motion.div>
      )}

      {/* Neo-Brutalist Accent Shapes */}
      <motion.div
        className="absolute top-1/4 left-[10%] w-8 h-8 bg-cyan-400 border-3 border-black rotate-45 brutal-shadow"
        style={{ opacity }}
        animate={{ rotate: [45, 90, 45] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[15%] w-6 h-6 bg-yellow-400 border-3 border-black rounded-full brutal-shadow"
        style={{ opacity }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
