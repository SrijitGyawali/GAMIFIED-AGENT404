'use client';

import { motion } from 'motion/react';
import { Badge } from './Badge';
import { Award } from 'lucide-react';

interface BadgeCollectionProps {
  scrollY: number;
}

export function BadgeCollection({ scrollY }: BadgeCollectionProps) {
  const badges = [
    {
      emoji: '🚀',
      title: 'Getting Started',
      description: 'Completed your first quest',
      tier: 'bronze' as const,
      unlocked: true,
    },
    {
      emoji: '📚',
      title: 'Knowledge Seeker',
      description: 'Completed 5 learning modules',
      tier: 'bronze' as const,
      unlocked: true,
    },
    {
      emoji: '⚡',
      title: 'Speed Runner',
      description: 'Completed a quest in under 20 minutes',
      tier: 'silver' as const,
      unlocked: true,
    },
    {
      emoji: '🎯',
      title: 'Perfect Score',
      description: 'Achieved 100% on 3 quizzes',
      tier: 'silver' as const,
      unlocked: true,
    },
    {
      emoji: '🔥',
      title: 'On Fire',
      description: 'Maintained a 7-day learning streak',
      tier: 'silver' as const,
      unlocked: true,
    },
    {
      emoji: '💎',
      title: 'Smart Contract Master',
      description: 'Deployed 10 smart contracts',
      tier: 'gold' as const,
      unlocked: true,
    },
    {
      emoji: '🏆',
      title: 'Quest Champion',
      description: 'Completed 25 quests',
      tier: 'gold' as const,
      unlocked: false,
    },
    {
      emoji: '🌟',
      title: 'Community Leader',
      description: 'Helped 50 other learners',
      tier: 'gold' as const,
      unlocked: false,
    },
    {
      emoji: '👑',
      title: 'Hedera Expert',
      description: 'Mastered all advanced topics',
      tier: 'platinum' as const,
      unlocked: false,
    },
    {
      emoji: '🎖️',
      title: 'Elite Developer',
      description: 'Built and deployed a full dApp',
      tier: 'platinum' as const,
      unlocked: false,
    },
    {
      emoji: '✨',
      title: 'Innovation Pioneer',
      description: 'Created a unique Web3 solution',
      tier: 'platinum' as const,
      unlocked: false,
    },
    {
      emoji: '🌈',
      title: 'Legendary',
      description: 'Reached the highest mastery level',
      tier: 'platinum' as const,
      unlocked: false,
    },
  ];

  const unlockedCount = badges.filter(b => b.unlocked).length;

  return (
    <section id="badges" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Badge <span className="bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">Collection</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-6">
            Showcase your achievements and unlock exclusive NFT badges
          </p>
          
          {/* Progress stats */}
          <div className="flex items-center justify-center gap-8">
            <div className="glass-panel px-6 py-3 rounded-full inline-flex items-center gap-3">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-white">
                <span className="text-amber-400">{unlockedCount}</span> / {badges.length} Unlocked
              </span>
            </div>
          </div>
        </motion.div>

        {/* Tier filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {['All', 'Bronze', 'Silver', 'Gold', 'Platinum'].map((tier, index) => (
            <motion.button
              key={tier}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full transition-all ${
                index === 0 
                  ? 'bg-gradient-to-r from-amber-500 to-purple-500 text-white glow-gold' 
                  : 'glass-card text-white/70 hover:text-white'
              }`}
            >
              {tier}
            </motion.button>
          ))}
        </motion.div>

        {/* Badge grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              {...badge}
              delay={index * 0.05}
            />
          ))}
        </div>

        {/* Next milestone */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass-card rounded-3xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400/20 to-purple-600/20 flex items-center justify-center glow-gold flex-shrink-0">
                <span className="text-4xl">🏆</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl text-white mb-2">Next Milestone: Quest Champion</h3>
                <p className="text-white/60 mb-4">Complete 3 more quests to unlock this gold badge</p>
                <div className="max-w-md">
                  <div className="flex items-center justify-between text-sm text-white/60 mb-2">
                    <span>Progress</span>
                    <span className="text-amber-400">22/25 Quests</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '88%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-amber-500 to-purple-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
