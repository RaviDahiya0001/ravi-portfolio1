import SEO from "../components/SEO";
import AchievementCard from "../components/AchievementCard";
import achievements from "../data/achievements.json";

export default function Achievements() {
  return (
    <>
      <SEO title="Achievements" description="Key achievements and milestones of Ravi Dahiya's cybersecurity journey." />
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-glow">Milestones</span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl mt-3 mb-12">Achievements</h1>

          <div className="grid sm:grid-cols-3 gap-6">
            {achievements.map((a, i) => (
              <AchievementCard key={a.title} achievement={a} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
