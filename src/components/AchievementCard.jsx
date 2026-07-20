import { motion } from "framer-motion";
import { FiStar, FiCheckCircle, FiTool } from "react-icons/fi";

const iconMap = { star: FiStar, check: FiCheckCircle, tool: FiTool };

export default function AchievementCard({ achievement, index }) {
  const Icon = iconMap[achievement.icon] || FiStar;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl p-7"
    >
      <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-cyan-glow mb-5">
        <Icon size={19} />
      </div>
      <h4 className="font-display font-semibold text-base mb-2">{achievement.title}</h4>
      <p className="text-white/55 text-sm leading-relaxed">{achievement.text}</p>
    </motion.div>
  );
}
