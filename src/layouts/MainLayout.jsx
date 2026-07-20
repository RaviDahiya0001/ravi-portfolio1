import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import ScrollToTop from "../components/ScrollToTop";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-navy-950" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(700px 500px at 15% 10%, rgba(124,92,252,0.14), transparent 60%), radial-gradient(800px 600px at 90% 25%, rgba(34,211,238,0.10), transparent 60%)",
          }}
        />
      </div>

      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
