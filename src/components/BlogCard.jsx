import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiClock, FiArrowUpRight } from "react-icons/fi";

export default function BlogCard({ post, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="glass rounded-2xl p-6 flex flex-col h-full"
    >
      <span className="font-mono text-[10.5px] px-2.5 py-1 rounded-full bg-violet-glow/10 border border-violet-glow/30 text-violet-glow w-fit mb-4">
        {post.category}
      </span>
      <Link to={`/blog/${post.slug}`}>
        <h3 className="font-display font-bold text-lg mb-2.5 hover:text-cyan-glow transition leading-snug">
          {post.title}
        </h3>
      </Link>
      <p className="text-white/55 text-sm mb-5 leading-relaxed flex-1">{post.excerpt}</p>
      <div className="flex items-center justify-between text-xs font-mono text-white/40 pt-4 border-t border-white/[0.07]">
        <span className="flex items-center gap-1.5"><FiClock size={12} /> {post.readTime}</span>
        <Link to={`/blog/${post.slug}`} className="text-cyan-glow flex items-center gap-1 hover:gap-1.5 transition-all">
          Read <FiArrowUpRight size={13} />
        </Link>
      </div>
    </motion.div>
  );
}
