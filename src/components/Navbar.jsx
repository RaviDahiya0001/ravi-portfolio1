import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/certifications", label: "Certs" },
  { to: "/achievements", label: "Achievements" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-navy-950/70 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <NavLink to="/" className="font-display font-bold text-lg tracking-tight">
          ravi<span className="text-violet-glow">.</span>dahiya
        </NavLink>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `font-mono text-[11.5px] uppercase tracking-wider transition-colors ${
                    isActive ? "text-white" : "text-white/45 hover:text-white/80"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <span className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-cyan-glow border border-white/10 rounded-full px-3 py-1.5 bg-white/[0.03]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow animate-pulse" />
            OPEN TO WORK
          </span>
          <button
            className="lg:hidden p-2 text-white/80"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <ul className="lg:hidden border-t border-white/[0.08] bg-navy-950/95 backdrop-blur-xl">
          {links.map((l) => (
            <li key={l.to} className="border-b border-white/[0.06]">
              <NavLink
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-6 py-4 font-mono text-sm uppercase tracking-wider ${
                    isActive ? "text-white" : "text-white/50"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
