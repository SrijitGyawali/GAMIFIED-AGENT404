import { motion } from 'motion/react';
import { Trophy, TrendingUp, Medal } from 'lucide-react';

interface LeaderboardProps {
  scrollY: number;
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  points: number;
  badges: number;
  trend: 'up' | 'down' | 'same';
  isCurrentUser?: boolean;
}

export function Leaderboard({ scrollY }: LeaderboardProps) {
  const leaders: LeaderboardEntry[] = [
    { rank: 1, name: 'Alex_Crypto', avatar: '👨‍💻', points: 12847, badges: 48, trend: 'up' },
    { rank: 2, name: 'Sarah.hbar', avatar: '👩‍🚀', points: 11523, badges: 42, trend: 'up' },
    { rank: 3, name: 'BlockMaster', avatar: '🧙‍♂️', points: 10891, badges: 39, trend: 'down' },
    { rank: 4, name: 'CryptoNinja', avatar: '🥷', points: 9654, badges: 36, trend: 'up' },
    { rank: 5, name: 'Web3Wizard', avatar: '🧙', points: 8723, badges: 33, trend: 'same' },
    { rank: 6, name: 'You', avatar: '😊', points: 8247, badges: 24, trend: 'up', isCurrentUser: true },
    { rank: 7, name: 'DAppDev', avatar: '👨‍💼', points: 7891, badges: 30, trend: 'down' },
    { rank: 8, name: 'HashGraph', avatar: '⚡', points: 7456, badges: 28, trend: 'up' },
    { rank: 9, name: 'SmartCoder', avatar: '💻', points: 7123, badges: 27, trend: 'same' },
    { rank: 10, name: 'NFTCollector', avatar: '🎨', points: 6847, badges: 25, trend: 'up' },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <span className="text-2xl">🥇</span>;
      case 2:
        return <span className="text-2xl">🥈</span>;
      case 3:
        return <span className="text-2xl">🥉</span>;
      default:
        return <span className="text-white/60">#{rank}</span>;
    }
  };

  const getRankGlow = (rank: number) => {
    switch (rank) {
      case 1:
        return 'glow-gold';
      case 2:
        return 'shadow-[0_0_20px_rgba(203,213,225,0.3)]';
      case 3:
        return 'shadow-[0_0_20px_rgba(217,119,6,0.2)]';
      default:
        return '';
    }
  };

  return (
    <section id="leaderboard" className="relative py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Global <span className="bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">Leaderboard</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Compete with learners worldwide and climb to the top
          </p>
        </motion.div>

        {/* Top 3 Podium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto"
        >
          {/* 2nd Place */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center pt-8"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-slate-400/20 to-slate-600/20 flex items-center justify-center text-3xl md:text-4xl mb-3 shadow-[0_0_20px_rgba(203,213,225,0.3)]">
              {leaders[1].avatar}
            </div>
            <div className="text-2xl mb-2">🥈</div>
            <div className="text-white mb-1">{leaders[1].name}</div>
            <div className="text-emerald-400">{leaders[1].points.toLocaleString()} SP</div>
            <div className="glass-panel h-24 md:h-32 w-full rounded-t-2xl mt-4 flex items-center justify-center">
              <span className="text-4xl text-white/20">2</span>
            </div>
          </motion.div>

          {/* 1st Place */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 flex items-center justify-center text-4xl md:text-5xl mb-3 glow-gold animate-pulse">
              {leaders[0].avatar}
            </div>
            <div className="text-3xl mb-2">🥇</div>
            <div className="text-white mb-1">{leaders[0].name}</div>
            <div className="text-amber-400">{leaders[0].points.toLocaleString()} SP</div>
            <div className="glass-panel h-32 md:h-40 w-full rounded-t-2xl mt-4 flex items-center justify-center glow-gold">
              <span className="text-5xl text-white/20">1</span>
            </div>
          </motion.div>

          {/* 3rd Place */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center pt-12"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-amber-700/20 to-amber-900/20 flex items-center justify-center text-3xl md:text-4xl mb-3 shadow-[0_0_20px_rgba(217,119,6,0.2)]">
              {leaders[2].avatar}
            </div>
            <div className="text-2xl mb-2">🥉</div>
            <div className="text-white mb-1">{leaders[2].name}</div>
            <div className="text-emerald-400">{leaders[2].points.toLocaleString()} SP</div>
            <div className="glass-panel h-20 md:h-28 w-full rounded-t-2xl mt-4 flex items-center justify-center">
              <span className="text-4xl text-white/20">3</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Full leaderboard list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-6 md:p-8 depth-shadow"
        >
          <div className="space-y-3">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className={`glass-panel rounded-2xl p-4 md:p-5 flex items-center gap-4 cursor-pointer transition-all ${
                  leader.isCurrentUser ? 'glow-ring-emerald' : ''
                } ${getRankGlow(leader.rank)}`}
              >
                {/* Rank */}
                <div className="w-12 md:w-16 flex items-center justify-center flex-shrink-0">
                  {getRankIcon(leader.rank)}
                </div>

                {/* Avatar */}
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${
                  leader.rank <= 3 
                    ? 'bg-gradient-to-br from-amber-400/20 to-purple-600/20' 
                    : 'bg-white/10'
                } flex items-center justify-center text-2xl md:text-3xl flex-shrink-0`}>
                  {leader.avatar}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`truncate ${
                      leader.isCurrentUser ? 'text-emerald-400' : 'text-white'
                    }`}>
                      {leader.name}
                    </span>
                    {leader.isCurrentUser && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs flex-shrink-0">
                        You
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <span className="flex items-center gap-1">
                      <Trophy className="w-3 h-3" />
                      {leader.badges} badges
                    </span>
                  </div>
                </div>

                {/* Points & Trend */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="text-right">
                    <div className="text-white mb-1">{leader.points.toLocaleString()}</div>
                    <div className="text-xs text-white/60">SP</div>
                  </div>
                  
                  {leader.trend === 'up' && (
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                    </div>
                  )}
                  {leader.trend === 'down' && (
                    <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-red-400 rotate-180" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Season info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="glass-panel px-6 py-3 rounded-full inline-flex items-center gap-3">
            <Medal className="w-5 h-5 text-amber-400" />
            <span className="text-white/80">Season 1 ends in <span className="text-amber-400">12 days</span></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
