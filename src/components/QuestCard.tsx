import { motion } from 'motion/react';
import { LucideIcon, Lock, CheckCircle, Coins, Award, Clock } from 'lucide-react';

interface QuestCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  status: 'locked' | 'available' | 'completed';
  reward: number;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  progress?: number;
  delay?: number;
}

export function QuestCard({ 
  title, 
  description, 
  icon: Icon, 
  status, 
  reward, 
  duration, 
  difficulty,
  progress = 0,
  delay = 0 
}: QuestCardProps) {
  
  const difficultyColors = {
    Beginner: 'text-emerald-400 bg-emerald-500/20',
    Intermediate: 'text-blue-400 bg-blue-500/20',
    Advanced: 'text-amber-400 bg-amber-500/20',
  };

  const isLocked = status === 'locked';
  const isCompleted = status === 'completed';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ 
        scale: isLocked ? 1 : 1.03,
        rotateY: isLocked ? 0 : 5,
        z: 50,
      }}
      className={`relative glass-card rounded-2xl p-6 depth-shadow transition-all cursor-pointer group ${
        isLocked ? 'opacity-60 grayscale' : ''
      } ${
        isCompleted ? 'glow-ring-gold' : status === 'available' ? 'hover:glow-ring-emerald' : ''
      }`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-10">
        {isLocked && (
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <Lock className="w-4 h-4 text-white/60" />
          </div>
        )}
        {isCompleted && (
          <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center glow-gold">
            <CheckCircle className="w-5 h-5 text-amber-400" />
          </div>
        )}
      </div>

      {/* Icon */}
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center mb-4 ${
        !isLocked && 'glow-emerald group-hover:scale-110 transition-transform'
      }`}>
        <Icon className="w-7 h-7 text-emerald-400" />
      </div>

      {/* Content */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className={`px-3 py-1 rounded-full text-xs ${difficultyColors[difficulty]}`}>
            {difficulty}
          </span>
        </div>
        <h3 className="text-xl text-white mb-2">{title}</h3>
        <p className="text-sm text-white/60 line-clamp-2">{description}</p>
      </div>

      {/* Progress (for in-progress quests) */}
      {progress > 0 && progress < 100 && (
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-white/60 mb-1">
            <span>Progress</span>
            <span className="text-emerald-400">{progress}%</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: delay + 0.3 }}
              className="h-full bg-gradient-to-r from-emerald-500 to-blue-500"
            />
          </div>
        </div>
      )}

      {/* Meta info */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex items-center gap-4 text-sm text-white/60">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Coins className="w-4 h-4 text-amber-400" />
          <span className="text-amber-400">+{reward}</span>
        </div>
      </div>

      {/* Hover glow effect */}
      {!isLocked && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
      )}

      {/* Completed shine effect */}
      {isCompleted && (
        <motion.div
          animate={{
            background: [
              'linear-gradient(90deg, transparent 0%, rgba(217, 119, 6, 0) 40%, rgba(217, 119, 6, 0.3) 50%, rgba(217, 119, 6, 0) 60%, transparent 100%)',
              'linear-gradient(90deg, transparent 0%, rgba(217, 119, 6, 0) 40%, rgba(217, 119, 6, 0.3) 50%, rgba(217, 119, 6, 0) 60%, transparent 100%)',
            ],
            backgroundPosition: ['-200%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ backgroundSize: '200% 100%' }}
        />
      )}
    </motion.div>
  );
}
