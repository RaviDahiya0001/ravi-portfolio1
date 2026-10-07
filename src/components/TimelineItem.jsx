import { motion } from "framer-motion";

export default function TimelineItem({ title, subtitle, date, points, index, isLast }) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full gradient-bg" />
      {!isLast && <div className="absolute left-[7px] top-5 bottom-[-2rem] w-px bg-white/10" />}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass rounded-2xl p-7 mb-8"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
          <h3 className="font-display font-bold text-lg">{title}</h3>
          <span className="font-mono text-xs text-cyan-glow">{date}</span>
        </div>
        {subtitle && <p className="text-white/50 text-sm mb-4">{subtitle}</p>}
        {points && (
          <ul className="space-y-2.5">
            {points.map((pt, i) => (
              <li key={i} className="text-white/70 text-[14.5px] flex gap-2.5">
                <span className="text-violet-glow mt-0.5">▹</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
}
