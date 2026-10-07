import { motion } from "framer-motion";
import {
  FiShield, FiWifi, FiCode, FiMonitor, FiTool,
} from "react-icons/fi";

const categoryIcon = {
  Security: FiShield,
  Networking: FiWifi,
  Programming: FiCode,
  "Operating Systems": FiMonitor,
  Tools: FiTool,
};

export default function SkillCard({ category, items, index }) {
  const Icon = categoryIcon[category] || FiTool;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass rounded-2xl p-6"
    >
      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-glow mb-4">
        <Icon size={18} />
      </div>
      <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-glow mb-4">{category}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="font-mono text-[12.5px] px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-white/80 hover:border-violet-glow/50 hover:text-white transition"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
