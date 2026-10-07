import SEO from "../components/SEO";
import TimelineItem from "../components/TimelineItem";
import experience from "../data/experience.json";

export default function Experience() {
  return (
    <>
      <SEO title="Experience" description="Ravi Dahiya's professional cybersecurity internship experience." />
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-glow">Career</span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl mt-3 mb-12">Experience</h1>

          <div>
            {experience.map((exp, i) => (
              <TimelineItem
                key={exp.role}
                title={exp.role}
                subtitle={exp.org}
                date={exp.date}
                points={exp.points}
                index={i}
                isLast={i === experience.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
