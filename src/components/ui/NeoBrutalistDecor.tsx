import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface NeoBrutalistDecorProps {
  variant?: 'triangle' | 'square' | 'circle' | 'text-cutout' | 'logo-shape' | 'mixed';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center' | 'scattered';
  color?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withScroll?: boolean;
}

export function NeoBrutalistDecor({
  variant = 'mixed',
  position = 'scattered',
  color = '#ccf381',
  size = 'md',
  withScroll = true,
}: NeoBrutalistDecorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  const sizeMap = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48',
  };

  const positionMap = {
    'top-left': 'top-10 left-10',
    'top-right': 'top-10 right-10',
    'bottom-left': 'bottom-10 left-10',
    'bottom-right': 'bottom-10 right-10',
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    scattered: '',
  };

  if (variant === 'text-cutout') {
    return (
      <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/4 font-heading text-9xl font-bold opacity-5 select-none"
          style={withScroll ? { y, scale } : {}}
        >
          STACK
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/4 font-heading text-8xl font-bold opacity-5 select-none"
          style={withScroll ? { y: useTransform(scrollYProgress, [0, 1], [-50, 50]), rotate } : {}}
        >
          WIN
        </motion.div>
      </div>
    );
  }

  if (variant === 'logo-shape') {
    return (
      <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large triangle similar to logo */}
        <motion.svg
          className={`absolute top-20 right-20 ${sizeMap[size]} opacity-10`}
          viewBox="0 0 100 100"
          style={withScroll ? { y, rotate } : {}}
        >
          <polygon
            points="50,10 90,90 10,90"
            fill={color}
            stroke="#000"
            strokeWidth="2"
          />
        </motion.svg>

        {/* Small inverted triangle */}
        <motion.svg
          className="absolute bottom-32 left-32 w-16 h-16 opacity-15"
          viewBox="0 0 100 100"
          style={withScroll ? { scale, rotate: useTransform(scrollYProgress, [0, 1], [180, -180]) } : {}}
        >
          <polygon
            points="50,90 90,10 10,10"
            fill={color}
            stroke="#000"
            strokeWidth="2"
          />
        </motion.svg>
      </div>
    );
  }

  if (variant === 'mixed' || position === 'scattered') {
    return (
      <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Triangle */}
        <motion.div
          className="absolute top-[15%] left-[8%]"
          style={withScroll ? { y, rotate } : {}}
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="w-16 h-16 opacity-20" viewBox="0 0 100 100">
            <polygon points="50,10 90,90 10,90" fill={color} stroke="#000" strokeWidth="3" />
          </svg>
        </motion.div>

        {/* Square */}
        <motion.div
          className="absolute top-[60%] right-[12%] w-12 h-12 border-4 border-black opacity-15"
          style={{
            backgroundColor: color,
            ...(withScroll ? { scale } : {}),
          }}
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />

        {/* Circle */}
        <motion.div
          className="absolute bottom-[25%] left-[15%] w-10 h-10 rounded-full border-4 border-black opacity-20"
          style={{
            backgroundColor: color,
            ...(withScroll ? { y: useTransform(scrollYProgress, [0, 1], [-30, 30]) } : {}),
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Small Triangle cluster */}
        <motion.div
          className="absolute top-[40%] right-[20%]"
          style={withScroll ? { rotate } : {}}
        >
          <svg className="w-20 h-20 opacity-10" viewBox="0 0 100 100">
            <polygon points="30,20 50,60 10,60" fill="#ffd93d" stroke="#000" strokeWidth="2" />
            <polygon points="70,30 90,70 50,70" fill="#22d3ee" stroke="#000" strokeWidth="2" />
            <polygon points="50,10 70,50 30,50" fill="#ec4899" stroke="#000" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Parallelogram */}
        <motion.div
          className="absolute bottom-[45%] right-[8%] w-16 h-12 border-4 border-black opacity-15"
          style={{
            backgroundColor: color,
            transform: 'skew(-15deg)',
            ...(withScroll ? { y } : {}),
          }}
          animate={{ skewX: [-15, -10, -15] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    );
  }

  // Single shape variant
  return (
    <motion.div
      ref={ref}
      className={`absolute ${positionMap[position]} ${sizeMap[size]} pointer-events-none`}
      style={withScroll ? { y, rotate, scale } : {}}
    >
      {variant === 'triangle' && (
        <svg className="w-full h-full opacity-15" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill={color} stroke="#000" strokeWidth="3" />
        </svg>
      )}
      {variant === 'square' && (
        <div
          className="w-full h-full border-4 border-black opacity-15"
          style={{ backgroundColor: color }}
        />
      )}
      {variant === 'circle' && (
        <div
          className="w-full h-full rounded-full border-4 border-black opacity-20"
          style={{ backgroundColor: color }}
        />
      )}
    </motion.div>
  );
}
