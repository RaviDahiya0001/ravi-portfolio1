import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiTryhackme } from "react-icons/si";
import site from "../data/siteConfig.json";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] mt-10">
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 sm:grid-cols-3">
        <div>
          <div className="font-display font-bold text-lg mb-3">
            ravi<span className="text-violet-glow">.</span>dahiya
          </div>
          <p className="text-white/45 text-sm max-w-xs">{site.tagline}</p>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/projects" className="text-white/70 hover:text-white">Projects</Link></li>
            <li><Link to="/blog" className="text-white/70 hover:text-white">Blog</Link></li>
            <li><Link to="/resume" className="text-white/70 hover:text-white">Resume</Link></li>
            <li><Link to="/contact" className="text-white/70 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-4">Elsewhere</h4>
          <div className="flex gap-3">
            <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-cyan-glow hover:border-cyan-glow/50 transition">
              <FiGithub size={16} />
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-cyan-glow hover:border-cyan-glow/50 transition">
              <FiLinkedin size={16} />
            </a>
            <a href={site.tryhackme} target="_blank" rel="noopener noreferrer" aria-label="TryHackMe" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-cyan-glow hover:border-cyan-glow/50 transition">
              <SiTryhackme size={16} />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-cyan-glow hover:border-cyan-glow/50 transition">
              <FiMail size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06] py-6 text-center">
        <p className="font-mono text-[11px] text-white/30">
          © {new Date().getFullYear()} Ravi Dahiya · Built with React + Tailwind
        </p>
      </div>
    </footer>
  );
}
