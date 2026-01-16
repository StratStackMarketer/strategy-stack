import { motion } from 'framer-motion';
import { useEffect, useState, useCallback, useRef } from 'react';

interface GridSquare {
  id: number;
  isLit: boolean;
  color: string;
  isHovered: boolean;
}

interface AnimatedGridProps {
  gridSize?: number;
  darkMode?: boolean;
}

const colors = [
  'rgba(34, 211, 238, 0.5)',   // cyan
  'rgba(251, 191, 36, 0.5)',   // yellow
  'rgba(34, 197, 94, 0.5)',    // green
  'rgba(249, 115, 22, 0.5)',   // orange
  'rgba(236, 72, 153, 0.5)',   // pink
  'rgba(139, 92, 246, 0.5)',   // purple
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

export function AnimatedGrid({ gridSize = 40, darkMode = false }: AnimatedGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [squares, setSquares] = useState<GridSquare[]>([]);
  const [dimensions, setDimensions] = useState({ cols: 0, rows: 0 });

  const gridColor = darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

  // Calculate grid dimensions based on container size
  useEffect(() => {
    const calculateDimensions = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const cols = Math.ceil(rect.width / gridSize) + 1;
      const rows = Math.ceil(rect.height / gridSize) + 1;
      const total = cols * rows;

      setDimensions({ cols, rows });
      setSquares(
        Array.from({ length: total }, (_, i) => ({
          id: i,
          isLit: false,
          color: getRandomColor(),
          isHovered: false,
        }))
      );
    };

    calculateDimensions();
    window.addEventListener('resize', calculateDimensions);
    return () => window.removeEventListener('resize', calculateDimensions);
  }, [gridSize]);

  // Automatic random lighting animation with overlap
  useEffect(() => {
    if (squares.length === 0) return;

    const lightUpRandomSquares = () => {
      const numSquares = Math.floor(Math.random() * 6) + 2; // 2-7 squares
      const randomIndices = new Set<number>();

      while (randomIndices.size < numSquares) {
        randomIndices.add(Math.floor(Math.random() * squares.length));
      }

      setSquares(prev =>
        prev.map((square, idx) => {
          if (randomIndices.has(idx)) {
            return { ...square, isLit: true, color: getRandomColor() };
          }
          return square;
        })
      );

      // Turn off after delay
      setTimeout(() => {
        setSquares(prev =>
          prev.map((square, idx) => {
            if (randomIndices.has(idx)) {
              return { ...square, isLit: false };
            }
            return square;
          })
        );
      }, 1500);
    };

    const interval = setInterval(lightUpRandomSquares, 1200);
    return () => clearInterval(interval);
  }, [squares.length]);

  // Handle hover
  const handleMouseEnter = useCallback((id: number) => {
    setSquares(prev =>
      prev.map(square =>
        square.id === id
          ? { ...square, isHovered: true, color: getRandomColor() }
          : square
      )
    );
  }, []);

  const handleMouseLeave = useCallback((id: number) => {
    setSquares(prev =>
      prev.map(square =>
        square.id === id ? { ...square, isHovered: false } : square
      )
    );
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Fixed grid lines background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Animated squares overlay */}
      {squares.length > 0 && (
        <div
          className="absolute inset-0"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${dimensions.cols}, ${gridSize}px)`,
            gridTemplateRows: `repeat(${dimensions.rows}, ${gridSize}px)`,
          }}
        >
          {squares.map((square) => (
            <motion.div
              key={square.id}
              className="cursor-pointer"
              onMouseEnter={() => handleMouseEnter(square.id)}
              onMouseLeave={() => handleMouseLeave(square.id)}
              animate={{
                backgroundColor: square.isLit || square.isHovered ? square.color : 'transparent',
              }}
              transition={{
                duration: square.isLit || square.isHovered ? 0.3 : 0.5,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
