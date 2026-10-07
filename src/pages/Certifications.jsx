import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiDownload } from "react-icons/fi";
import SEO from "../components/SEO";
import CertCard from "../components/CertCard";
import certifications from "../data/certifications.json";

export default function Certifications() {
  const [active, setActive] = useState(null);

  return (
    <>
      <SEO title="Certifications" description="Cybersecurity certifications earned by Ravi Dahiya." />
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-glow">Credentials</span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl mt-3 mb-12">Certifications</h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((c, i) => (
              <CertCard key={c.name} cert={c} index={i} onClick={setActive} />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl h-[85vh] glass rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08]">
                <div>
                  <h3 className="font-display font-bold text-base">{active.name}</h3>
                  <p className="text-white/50 text-xs">{active.issuer}</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={active.file}
                    download
                    aria-label="Download certificate"
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-cyan-glow hover:border-cyan-glow/50 transition"
                  >
                    <FiDownload size={16} />
                  </a>
                  <button
                    onClick={() => setActive(null)}
                    aria-label="Close"
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition"
                  >
                    <FiX size={18} />
                  </button>
                </div>
              </div>
              <iframe src={active.file} title={active.name} className="flex-1 w-full bg-white" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
