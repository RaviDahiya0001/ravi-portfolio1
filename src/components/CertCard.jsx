import { motion } from "framer-motion";
import { FiFileText, FiZoomIn } from "react-icons/fi";

export default function CertCard({ cert, index, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={() => cert.file && onClick(cert)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl p-6 flex flex-col text-left group cursor-pointer"
    >
      <div className="relative w-full h-28 rounded-xl overflow-hidden border border-white/[0.08] mb-5 bg-gradient-to-br from-violet-glow/15 to-cyan-glow/10 flex items-center justify-center">
        <FiFileText size={30} className="text-cyan-glow/70" />
        {cert.file && (
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <FiZoomIn className="text-white" size={22} />
          </div>
        )}
      </div>
      <h4 className="font-display font-semibold text-[15px] mb-1.5 leading-snug">{cert.name}</h4>
      <p className="text-white/50 text-sm">{cert.issuer}</p>
    </motion.button>
  );
}
