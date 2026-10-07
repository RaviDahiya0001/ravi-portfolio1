import SEO from "../components/SEO";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <>
      <SEO title="Projects" description="Cybersecurity projects built by Ravi Dahiya, including a honeypot system, malware analysis toolkit, and process monitoring agent." />
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-glow">Case Files</span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl mt-3 mb-12">Projects</h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
