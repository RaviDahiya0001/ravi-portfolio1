import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass rounded-2xl overflow-hidden group"
    >
      <Link to={`/projects/${project.slug}`}>
        <div className="h-40 bg-gradient-to-br from-violet-glow/20 to-cyan-glow/10 flex items-center justify-center border-b border-white/[0.08] relative overflow-hidden">
          <span className="font-mono text-white/25 text-xs absolute top-3 left-4">CASE-{String(index + 1).padStart(2, "0")}</span>
          <span className="font-display font-bold text-3xl text-white/15 group-hover:text-white/25 transition">
            {project.title.split(" ")[0]}
          </span>
        </div>
      </Link>
      <div className="p-6">
        <Link to={`/projects/${project.slug}`}>
          <h3 className="font-display font-bold text-lg mb-2 group-hover:text-cyan-glow transition">
            {project.title}
          </h3>
        </Link>
        <p className="text-white/55 text-sm mb-4 leading-relaxed">{project.shortDesc}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="font-mono text-[10.5px] px-2.5 py-1 rounded-full bg-violet-glow/10 border border-violet-glow/30 text-violet-glow">
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <Link to={`/projects/${project.slug}`} className="text-sm font-mono text-cyan-glow flex items-center gap-1 hover:gap-2 transition-all">
            View details <FiArrowUpRight size={14} />
          </Link>
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository" className="text-white/50 hover:text-white transition">
            <FiGithub size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
