import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface CloudGraphicsProps {
  darkMode?: boolean;
  density?: 'low' | 'medium' | 'high';
}

interface CloudConfig {
  id: number;
  src: string;
  size: number; // 0.3 to 1.5 scale factor
  x: number; // percentage
  y: number; // percentage
  duration: number; // animation duration
  delay: number; // animation delay
  opacity: number; // 0.1 to 0.5
  zIndex: number; // for depth layering
}

export function CloudGraphics({ darkMode = false, density = 'medium' }: CloudGraphicsProps) {
  const cloudFolder = darkMode ? '/clouds-black' : '/clouds-white';

  // Available cloud SVG files
  const cloudFiles = darkMode
    ? [
        '641d6afca2bcc57ba21da428_cloud_3.svg',
        '6423118350707b5779f10bbb_Footer_Cloud-1_desktop.svg',
        '64231183d6586d38f04a58ce_Footer_Cloud-2_desktop.svg',
        '64231183f56592efbc79a842_Footer_Cloud-3_desktop.svg',
      ]
    : [
        '641d6afca2bcc57ba21da428_cloud_3.svg',
        '64244de907f91bcb7e01a119_Resources_Cloud-1_desktop.svg',
        '64244de91e17dd39cf0e4135_Resources_Cloud-3_desktop.svg',
        '64244de9c349f28b3a7e1d60_Resources_Cloud-2_desktop.svg',
      ];

  // Generate cloud configurations with varied sizes for depth
  const clouds = useMemo<CloudConfig[]>(() => {
    const densityMap = { low: 5, medium: 8, high: 12 };
    const count = densityMap[density];

    return Array.from({ length: count }, (_, i) => {
      // Create size variation - smaller clouds appear farther away
      const size = 0.3 + (Math.random() * 2.7);
      const isBackground = size < 0.6;
      const isMidground = size >= 0.6 && size < 1.0;

      return {
        id: i,
        src: `${cloudFolder}/${cloudFiles[i % cloudFiles.length]}`,
        size,
        x: Math.random() * 90 + 5, // 5-95% to keep within bounds
        y: Math.random() * 80 + 10, // 10-90% vertical spread
        duration: 20 + Math.random() * 20, // 20-40s float animation
        delay: Math.random() * -20, // stagger start times
        // Opacity based on size for depth perception (increased for visibility)
        opacity: isBackground ? 0.25 + Math.random() * 0.15 : // 0.25-0.4 for background
                 isMidground ? 0.4 + Math.random() * 0.2 : // 0.4-0.6 for midground
                 0.5 + Math.random() * 0.3, // 0.5-0.8 for foreground
        zIndex: isBackground ? 1 : isMidground ? 2 : 3,
      };
    });
  }, [density, cloudFolder, cloudFiles]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute"
          style={{
            left: `${cloud.x}%`,
            top: `${cloud.y}%`,
            zIndex: cloud.zIndex,
            opacity: cloud.opacity,
          }}
          initial={{ y: 0, x: 0 }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: cloud.delay,
          }}
        >
          <motion.img
            src={cloud.src}
            alt=""
            className="select-none"
            style={{
              width: `${120 * cloud.size}px`,
              height: 'auto',
              filter: darkMode
                ? `drop-shadow(0 6px 16px rgba(0, 0, 0, 0.4))`
                : `drop-shadow(0 6px 16px rgba(0, 0, 0, 0.15))`,
            }}
            whileHover={{
              scale: 1.15,
              transition: { duration: 0.3 },
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
