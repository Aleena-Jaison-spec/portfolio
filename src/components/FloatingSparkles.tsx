import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function FloatingSparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // Generate initial sparkles
    const initialSparkles: Sparkle[] = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));

    setSparkles(initialSparkles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Bright white sparkles with glow */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 40%, rgba(147, 197, 253, 0.4) 70%, transparent 100%)',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(147, 197, 253, 0.5)',
          }}
          animate={{
            opacity: [0, 1, 0.9, 1, 0],
            scale: [0, 1.2, 1, 1.2, 0],
            y: [0, -30, -60, -90, -120],
            x: [0, Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 1,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Larger glowing particles - BLUE */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 4}px`,
            height: `${Math.random() * 6 + 4}px`,
            background: `radial-gradient(circle, rgba(96, 165, 250, 1) 0%, rgba(59, 130, 246, 0.8) 30%, rgba(37, 99, 235, 0.4) 60%, transparent 100%)`,
            boxShadow: '0 0 15px rgba(96, 165, 250, 0.8), 0 0 30px rgba(59, 130, 246, 0.4)',
          }}
          animate={{
            opacity: [0.4, 1, 0.7, 1, 0.4],
            scale: [1, 1.8, 1.3, 1.8, 1],
            y: [0, -50, -100, -150, -200],
            x: [0, Math.random() * 30 - 15, Math.random() * 30 - 15, Math.random() * 30 - 15, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            delay: Math.random() * 3,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Ambient floating orbs - CYAN/PURPLE */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            background: i % 2 === 0 
              ? `radial-gradient(circle, rgba(167, 243, 208, 0.9) 0%, rgba(52, 211, 153, 0.6) 40%, transparent 80%)` 
              : `radial-gradient(circle, rgba(196, 181, 253, 0.9) 0%, rgba(139, 92, 246, 0.6) 40%, transparent 80%)`,
            boxShadow: i % 2 === 0 
              ? '0 0 20px rgba(52, 211, 153, 0.6)' 
              : '0 0 20px rgba(139, 92, 246, 0.6)',
            filter: 'blur(1px)',
          }}
          animate={{
            opacity: [0.3, 0.9, 0.5, 0.9, 0.3],
            scale: [1, 1.5, 1.2, 1.5, 1],
            y: [0, Math.random() * -100 - 50, Math.random() * -200 - 100],
            x: [
              0,
              Math.random() * 40 - 20,
              Math.random() * 60 - 30,
            ],
          }}
          transition={{
            duration: Math.random() * 5 + 4,
            delay: Math.random() * 2,
            repeat: Infinity,
            repeatDelay: Math.random() * 1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
