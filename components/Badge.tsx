'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

interface BadgeProps {
  emoji: string;
  title: string;
  description: string;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
  unlocked: boolean;
  delay?: number;
}

export function Badge({ emoji, title, description, tier, unlocked, delay = 0 }: BadgeProps) {
  const [isHovered, setIsHovered] = useState(false);

  const tierColors = {
    bronze: {
      bg: 'from-amber-700/20 to-amber-900/20',
      glow: 'glow-gold',
      text: 'text-amber-400',
      ring: 'ring-amber-500/50',
    },
    silver: {
      bg: 'from-slate-400/20 to-slate-600/20',
      glow: 'shadow-[0_0_20px_rgba(203,213,225,0.3)]',
      text: 'text-slate-300',
      ring: 'ring-slate-400/50',
    },
    gold: {
      bg: 'from-amber-400/20 to-amber-600/20',
      glow: 'glow-gold',
      text: 'text-amber-400',
      ring: 'ring-amber-400/50',
    },
    platinum: {
      bg: 'from-cyan-400/20 to-blue-600/20',
      glow: 'glow-blue',
      text: 'text-cyan-400',
      ring: 'ring-cyan-400/50',
    },
  };

  const colors = tierColors[tier];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay, 
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{ 
        scale: 1.1,
        rotateY: unlocked ? 15 : 0,
        rotateX: unlocked ? -15 : 0,
        z: 50,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative glass-card rounded-2xl p-6 depth-shadow cursor-pointer group ${
        !unlocked ? 'opacity-40 grayscale' : colors.glow
      }`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Tier badge */}
      <div className="absolute top-3 right-3 z-10">
        <div className={`px-2 py-1 rounded-full glass-panel text-xs ${colors.text} capitalize`}>
          {tier}
        </div>
      </div>

      {/* Badge Icon */}
      <div className={`relative w-full aspect-square mb-4 rounded-2xl bg-gradient-to-br ${colors.bg} flex items-center justify-center ${
        unlocked ? 'ring-2 ' + colors.ring : ''
      }`}>
        <motion.div
          animate={isHovered && unlocked ? {
            rotate: [0, -10, 10, -10, 10, 0],
            scale: [1, 1.1, 1.1, 1.1, 1.1, 1],
          } : {}}
          transition={{ duration: 0.5 }}
          className="text-6xl"
        >
          {unlocked ? emoji : '🔒'}
        </motion.div>

        {/* Sparkle effect on hover */}
        {unlocked && isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{ 
                  scale: 0,
                  x: 0,
                  y: 0,
                }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos(i * 60 * Math.PI / 180) * 40,
                  y: Math.sin(i * 60 * Math.PI / 180) * 40,
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 0.4,
                }}
              />
            ))}
          </>
        )}
      </div>

      {/* Badge info */}
      <div className="text-center">
        <h3 className="text-white mb-1">{unlocked ? title : '???'}</h3>
        <p className="text-xs text-white/60 line-clamp-2">
          {unlocked ? description : 'Complete the required quest to unlock'}
        </p>
      </div>

      {/* Unlock animation overlay */}
      {unlocked && (
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10`} />
      )}

      {/* Locked overlay */}
      {!unlocked && (
        <div className="absolute inset-0 rounded-2xl bg-black/30 backdrop-blur-sm" />
      )}
    </motion.div>
  );
}
