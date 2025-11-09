import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: number;
  suffix?: string;
  color: 'emerald' | 'blue' | 'amber' | 'purple';
  delay?: number;
}

export function StatsCard({ icon: Icon, label, value, suffix = '', color, delay = 0 }: StatsCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  const colorClasses = {
    emerald: {
      icon: 'text-emerald-400',
      glow: 'glow-emerald',
      bg: 'from-emerald-500/20 to-emerald-600/20',
    },
    blue: {
      icon: 'text-blue-400',
      glow: 'glow-blue',
      bg: 'from-blue-500/20 to-blue-600/20',
    },
    amber: {
      icon: 'text-amber-400',
      glow: 'glow-gold',
      bg: 'from-amber-500/20 to-amber-600/20',
    },
    purple: {
      icon: 'text-purple-400',
      glow: 'glow-blue',
      bg: 'from-purple-500/20 to-purple-600/20',
    },
  };

  const colors = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        rotateX: 5,
      }}
      className="glass-card rounded-2xl p-6 depth-shadow hover:depth-shadow-lg transition-all cursor-pointer group"
      style={{ 
        transformStyle: 'preserve-3d',
        background: 'rgba(30, 41, 59, 0.6)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center ${colors.glow} group-hover:scale-110 transition-transform`}>
          <Icon className={`w-6 h-6 ${colors.icon}`} />
        </div>
        <div className={`px-3 py-1 rounded-full glass-panel text-xs ${colors.icon}`}>
          +12%
        </div>
      </div>
      
      <div className="space-y-1">
        <div className="flex items-baseline gap-1">
          <motion.span 
            className="text-3xl text-white"
            key={count}
          >
            {count.toLocaleString()}
          </motion.span>
          <span className={`text-xl ${colors.icon}`}>{suffix}</span>
        </div>
        <div className="text-sm text-white/60">{label}</div>
      </div>

      {/* Hover glow effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10`} />
    </motion.div>
  );
}