import { FiDownload } from "react-icons/fi";
import SEO from "../components/SEO";
import site from "../data/siteConfig.json";

export default function Resume() {
  return (
    <>
      <SEO title="Resume" description="View and download Ravi Dahiya's resume." />
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-glow">Resume</span>
              <h1 className="font-display font-bold text-4xl mt-3">My Resume</h1>
            </div>
            <a
              href={site.resumeFile}
              download
              className="px-5 py-3 rounded-xl gradient-bg text-navy-950 font-mono text-sm font-semibold flex items-center gap-2 hover:-translate-y-0.5 transition-transform"
            >
              <FiDownload /> Download PDF
            </a>
          </div>

          <div className="glass rounded-2xl overflow-hidden" style={{ height: "80vh" }}>
            <iframe
              src={site.resumeFile}
              title="Ravi Dahiya Resume"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
