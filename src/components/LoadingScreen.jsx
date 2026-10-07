import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 500);
    const hideTimer = setTimeout(() => setVisible(false), 850);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[300] bg-navy-950 flex items-center justify-center transition-opacity duration-[350ms] ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="font-mono text-2xl">
        <span className="gradient-text font-bold">ravi.dahiya</span>
        <span className="text-cyan-glow animate-pulse">_</span>
      </div>
    </div>
  );
}
