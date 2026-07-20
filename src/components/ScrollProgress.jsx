import useScrollProgress from "../hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div className="fixed top-0 left-0 h-[3px] z-[100] gradient-bg transition-[width] duration-100" style={{ width: `${progress}%` }} />
  );
}
