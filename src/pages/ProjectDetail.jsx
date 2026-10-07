import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiGithub, FiArrowLeft, FiCheck } from "react-icons/fi";
import SEO from "../components/SEO";
import projects from "../data/projects.json";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <>
      <SEO title={project.title} description={project.shortDesc} />

      <section className="py-16 border-b border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/projects" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-mono mb-8 transition">
            <FiArrowLeft /> Back to projects
          </Link>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Hero image */}
            {project.heroImage ? (
              <div className="w-full rounded-2xl overflow-hidden border border-white/[0.08] mb-8">
                <img src={project.heroImage} alt={`${project.title} preview`} className="w-full h-auto object-cover" />
              </div>
            ) : (
              <div className="w-full h-56 sm:h-72 rounded-2xl bg-gradient-to-br from-violet-glow/20 to-cyan-glow/10 border border-white/[0.08] flex items-center justify-center mb-8">
                <span className="font-mono text-white/30 text-sm">[ Hero image placeholder — replace with project screenshot ]</span>
              </div>
            )}

            <h1 className="font-display font-bold text-3xl sm:text-4xl mb-4">{project.title}</h1>
            <p className="text-white/60 text-lg leading-relaxed mb-6">{project.shortDesc}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-xs px-3 py-1.5 rounded-full bg-violet-glow/10 border border-violet-glow/30 text-violet-glow">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl gradient-bg text-navy-950 font-mono text-sm font-semibold flex items-center gap-2 hover:-translate-y-0.5 transition-transform"
              >
                <FiGithub /> View on GitHub
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-xl glass font-mono text-sm font-medium">
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 border-b border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display font-bold text-2xl mb-6">Key Features</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.features.map((f, i) => (
              <div key={i} className="glass rounded-xl p-5 flex items-start gap-3">
                <FiCheck className="text-cyan-glow mt-0.5 shrink-0" />
                <span className="text-white/70 text-[14.5px]">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display font-bold text-2xl mb-6">Screenshots</h2>
          {project.screenshots && project.screenshots.length > 0 ? (
            <div className="grid sm:grid-cols-2 gap-4">
              {project.screenshots.map((src, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-white/[0.08]">
                  <img src={src} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              {[1, 2].map((n) => (
                <div key={n} className="h-48 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                  <span className="font-mono text-white/25 text-xs">[ Screenshot {n} placeholder ]</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 border-b border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display font-bold text-2xl mb-6">Architecture</h2>
          {project.architectureImage ? (
            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              <img src={project.architectureImage} alt={`${project.title} architecture diagram`} className="w-full h-auto" />
            </div>
          ) : (
            <div className="h-56 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
              <span className="font-mono text-white/25 text-xs">[ Architecture diagram placeholder ]</span>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 border-b border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-6 grid sm:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-7">
            <h3 className="font-display font-bold text-lg mb-3 text-cyan-glow">Challenges</h3>
            <p className="text-white/65 text-[14.5px] leading-relaxed">{project.challenges}</p>
          </div>
          <div className="glass rounded-2xl p-7">
            <h3 className="font-display font-bold text-lg mb-3 text-violet-glow">Learnings</h3>
            <p className="text-white/65 text-[14.5px] leading-relaxed">{project.learnings}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display font-bold text-2xl mb-4">Future Improvements</h2>
          <p className="text-white/65 leading-relaxed max-w-2xl">{project.futureImprovements}</p>
        </div>
      </section>
    </>
  );
}
