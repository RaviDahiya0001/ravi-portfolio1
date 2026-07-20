import SEO from "../components/SEO";
import SkillCard from "../components/SkillCard";
import skills from "../data/skills.json";

export default function Skills() {
  return (
    <>
      <SEO title="Skills" description="Ravi Dahiya's cybersecurity skills across security, tools, networking, programming, and operating systems." />
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-glow">Arsenal</span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl mt-3 mb-12">Skills</h1>

          <div className="grid sm:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], i) => (
              <SkillCard key={category} category={category} items={items} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
