import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface SparkLineProps {
  color?: string;
  delay?: number;
}

export function SparkLine({ color = '#ccf381', delay = 0 }: SparkLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Transform scroll progress to x position (moves across screen)
  const x = useTransform(scrollYProgress, [0, 1], ['-100%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none overflow-hidden z-20"
    >
      {/* Spark line */}
      <motion.div
        style={{ x, opacity }}
        transition={{ delay }}
        className="absolute top-1/2 left-0 w-full h-[2px]"
      >
        {/* Glowing line */}
        <div
          className="h-full w-32"
          style={{
            background: `linear-gradient(to right, transparent, ${color}, transparent)`,
            boxShadow: `0 0 8px ${color}, 0 0 16px ${color}`,
          }}
        />

        {/* Leading spark dot */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 12px ${color}, 0 0 24px ${color}`,
          }}
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </div>
  );
}
