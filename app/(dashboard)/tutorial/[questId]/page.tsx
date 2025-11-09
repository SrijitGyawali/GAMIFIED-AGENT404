'use client';

import { useParams } from 'next/navigation';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, Clock, Coins, Award } from 'lucide-react';
import Link from 'next/link';

export default function TutorialPage() {
  const params = useParams();
  const questId = params.questId as string;

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        <Link 
          href="/quests"
          className="inline-flex items-center gap-2 text-white/60 hover:text-emerald-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Quests
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-3xl p-8 depth-shadow"
        >
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center glow-emerald">
              <BookOpen className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl text-white mb-4">Quest Tutorial: {questId}</h1>
              <p className="text-white/60 text-lg">
                Learn the fundamentals and complete interactive exercises to earn rewards.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="glass-panel rounded-2xl p-4 flex items-center gap-3">
              <Clock className="w-5 h-5 text-blue-400" />
              <div>
                <div className="text-sm text-white/60">Duration</div>
                <div className="text-white">2 hours</div>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-4 flex items-center gap-3">
              <Coins className="w-5 h-5 text-amber-400" />
              <div>
                <div className="text-sm text-white/60">Reward</div>
                <div className="text-white">250 LRN</div>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-4 flex items-center gap-3">
              <Award className="w-5 h-5 text-purple-400" />
              <div>
                <div className="text-sm text-white/60">Badge</div>
                <div className="text-white">NFT Badge</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-panel rounded-2xl p-6">
              <h2 className="text-2xl text-white mb-4">Course Content</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      {item}
                    </div>
                    <div className="flex-1">
                      <div className="text-white">Lesson {item}: Introduction to Topic</div>
                      <div className="text-sm text-white/60">15 minutes</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

