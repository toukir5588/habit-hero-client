import { motion } from "framer-motion";
import { Flame, Trophy } from "lucide-react";
import { Progress } from "../../ui/Progress";

export default function StreakProgressCard({ streak = 7, progress = 70 }) {
  const levelColor =
    streak >= 10
      ? "from-amber-400 via-yellow-500 to-orange-600"
      : "from-orange-500 via-red-500 to-yellow-400";

  const safeProgress = Math.floor(Math.max(progress, 0), 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`max-w-sm w-full bg-gradient-to-br ${levelColor} text-white rounded-3xl shadow-xl p-6 flex flex-col items-center justify-center`}
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mb-3"
      >
        <Flame className="w-12 h-12 text-white drop-shadow-md" />
      </motion.div>

      <h2 className="text-2xl font-bold tracking-wide">Current Streak</h2>

      <motion.div
        key={streak}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 180, damping: 8 }}
        className="text-6xl font-extrabold my-2 text-yellow-200 drop-shadow-sm"
      >
        {streak} 🔥
      </motion.div>

      <div className="w-full mt-4">
        <div className="flex justify-between text-sm mb-1">
          <span>30-Day Progress</span>
          <span>{safeProgress}%</span>
        </div>
        <Progress value={safeProgress} />
      </div>

      {streak >= 10 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex items-center gap-2 mt-4 bg-white/20 px-3 py-2 rounded-full text-sm"
        >
          <Trophy className="w-4 h-4 text-yellow-300" />
          <span>🔥 Amazing! 10+ Day Streak!</span>
        </motion.div>
      )}

      <p className="text-sm text-white/90 mt-3 italic text-center">
        Keep pushing forward — consistency builds greatness!
      </p>
    </motion.div>
  );
}
