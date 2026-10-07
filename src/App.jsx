import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Certifications from "./pages/Certifications";
import Achievements from "./pages/Achievements";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function Fade({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Fade><Home /></Fade>} />
          <Route path="/about" element={<Fade><About /></Fade>} />
          <Route path="/experience" element={<Fade><Experience /></Fade>} />
          <Route path="/skills" element={<Fade><Skills /></Fade>} />
          <Route path="/projects" element={<Fade><Projects /></Fade>} />
          <Route path="/projects/:slug" element={<Fade><ProjectDetail /></Fade>} />
          <Route path="/certifications" element={<Fade><Certifications /></Fade>} />
          <Route path="/achievements" element={<Fade><Achievements /></Fade>} />
          <Route path="/blog" element={<Fade><Blog /></Fade>} />
          <Route path="/blog/:slug" element={<Fade><BlogPost /></Fade>} />
          <Route path="/resume" element={<Fade><Resume /></Fade>} />
          <Route path="/contact" element={<Fade><Contact /></Fade>} />
          <Route path="*" element={<Fade><NotFound /></Fade>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LoadingScreen />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
