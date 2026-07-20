import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="404 — Page Not Found" />
      <section className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center">
          <div className="font-mono text-7xl gradient-text font-bold mb-4">404</div>
          <h1 className="font-display font-bold text-2xl mb-3">Page not found</h1>
          <p className="text-white/50 mb-8">$ scan --target requested-page → no response</p>
          <Link to="/" className="px-6 py-3 rounded-xl gradient-bg text-navy-950 font-mono text-sm font-semibold inline-block hover:-translate-y-0.5 transition-transform">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
