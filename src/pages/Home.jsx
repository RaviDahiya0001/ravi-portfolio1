import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiDownload, FiMail, FiArrowRight } from "react-icons/fi";
import ParticlesBackground from "../components/ParticlesBackground";
import SEO from "../components/SEO";
import useTypingEffect from "../hooks/useTypingEffect";
import site from "../data/siteConfig.json";

export default function Home() {
  const typed = useTypingEffect(site.roles);

  return (
    <>
      <SEO title="Home" description={site.summary} />

      <section className="relative overflow-hidden border-b border-white/[0.08] pt-28 pb-24">
        <ParticlesBackground />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[3px] text-cyan-glow mb-6 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse" />
            SOC Analyst Aspirant · TryHackMe Top 1%
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6"
          >
            Hi, I'm {site.name.split(" ")[0]}
            <br />
            <span className="gradient-text">{typed}</span>
            <span className="text-cyan-glow animate-pulse">|</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mb-10 leading-relaxed"
          >
            {site.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={site.resumeFile}
              download
              className="px-6 py-3.5 rounded-xl gradient-bg text-navy-950 font-mono text-sm font-semibold flex items-center gap-2 hover:-translate-y-0.5 transition-transform"
            >
              <FiDownload /> Download Resume
            </a>
            <Link
              to="/projects"
              className="px-6 py-3.5 rounded-xl glass font-mono text-sm font-medium flex items-center gap-2 hover:border-violet-glow/50 hover:-translate-y-0.5 transition-all"
            >
              View Projects <FiArrowRight />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl glass font-mono text-sm font-medium flex items-center gap-2 hover:border-cyan-glow/50 hover:-translate-y-0.5 transition-all"
            >
              <FiMail /> Contact Me
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { num: "134+", label: "TryHackMe Labs" },
            { num: "3", label: "Security Tools Built" },
            { num: "5", label: "Certifications" },
            { num: "6mo", label: "Internship, LOR Received" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="font-display font-bold text-3xl gradient-text mb-1">{s.num}</div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-white/45">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl mb-4">
            Ready to strengthen your security team?
          </h2>
          <p className="text-white/55 max-w-xl mx-auto mb-8">
            I'm actively looking for entry-level SOC Analyst or Cyber Security Analyst opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl gradient-bg text-navy-950 font-mono text-sm font-semibold hover:-translate-y-0.5 transition-transform"
          >
            Let's Connect <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
