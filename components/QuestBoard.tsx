'use client';

import { motion } from 'motion/react';
import { BookOpen, Code, Rocket, Shield, Zap, Globe, Database, Cpu } from 'lucide-react';
import { QuestCard } from './QuestCard';

interface QuestBoardProps {
  scrollY: number;
}

export function QuestBoard({ scrollY }: QuestBoardProps) {
  const quests = [
    {
      title: 'Hedera Basics',
      description: 'Learn the fundamentals of Hedera hashgraph technology and its unique consensus mechanism.',
      icon: BookOpen,
      status: 'completed' as const,
      reward: 100,
      duration: '30 min',
      difficulty: 'Beginner' as const,
      progress: 100,
    },
    {
      title: 'Smart Contracts 101',
      description: 'Deploy your first smart contract on Hedera and understand the basics of Solidity programming.',
      icon: Code,
      status: 'available' as const,
      reward: 250,
      duration: '2 hours',
      difficulty: 'Intermediate' as const,
      progress: 75,
    },
    {
      title: 'Token Creation',
      description: 'Create and manage your own tokens using Hedera Token Service (HTS) with custom properties.',
      icon: Zap,
      status: 'available' as const,
      reward: 300,
      duration: '1.5 hours',
      difficulty: 'Intermediate' as const,
      progress: 0,
    },
    {
      title: 'NFT Mastery',
      description: 'Build and deploy NFT collections with metadata, royalties, and advanced features.',
      icon: Globe,
      status: 'available' as const,
      reward: 400,
      duration: '3 hours',
      difficulty: 'Advanced' as const,
      progress: 0,
    },
    {
      title: 'Consensus Deep Dive',
      description: 'Explore the hashgraph consensus algorithm and understand its advantages over blockchain.',
      icon: Database,
      status: 'locked' as const,
      reward: 350,
      duration: '2 hours',
      difficulty: 'Advanced' as const,
    },
    {
      title: 'DApp Development',
      description: 'Build a full-stack decentralized application integrating with Hedera services.',
      icon: Rocket,
      status: 'locked' as const,
      reward: 500,
      duration: '4 hours',
      difficulty: 'Advanced' as const,
    },
    {
      title: 'Security Best Practices',
      description: 'Learn to secure your smart contracts and protect against common vulnerabilities.',
      icon: Shield,
      status: 'locked' as const,
      reward: 450,
      duration: '2.5 hours',
      difficulty: 'Advanced' as const,
    },
    {
      title: 'Network Architecture',
      description: 'Understand Hedera network structure, nodes, and how consensus is achieved at scale.',
      icon: Cpu,
      status: 'locked' as const,
      reward: 400,
      duration: '2 hours',
      difficulty: 'Advanced' as const,
    },
  ];

  return (
    <section id="quests" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Quest <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Board</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Complete quests to earn rewards, unlock achievements, and level up your Web3 skills
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {['All Quests', 'Available', 'In Progress', 'Completed'].map((filter, index) => (
            <motion.button
              key={filter}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full transition-all ${
                index === 0 
                  ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white glow-emerald' 
                  : 'glass-card text-white/70 hover:text-white'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Quest Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {quests.map((quest, index) => (
            <QuestCard
              key={index}
              {...quest}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Level up animation hint */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-panel rounded-3xl p-8 inline-block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center animate-pulse">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-white mb-1">Complete 3 more quests to reach Level 5!</div>
                <div className="text-sm text-white/60">Unlock exclusive rewards and advanced quests</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
