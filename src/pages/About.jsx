import { motion } from "framer-motion";
import SEO from "../components/SEO";
import TimelineItem from "../components/TimelineItem";
import education from "../data/education.json";
import site from "../data/siteConfig.json";

const roadmap = [
  "Deepening hands-on SOC workflows — SIEM alert triage and incident response playbooks",
  "Practicing more TryHackMe / Hack The Box rooms focused on Windows and Active Directory attacks",
  "Building broader detection-engineering skills alongside existing Python tooling work",
  "Preparing for industry certifications relevant to a SOC Analyst role",
];

export default function About() {
  return (
    <>
      <SEO title="About" description="Learn about Ravi Dahiya's background, education, and career goals in cybersecurity." />

      <section className="py-20 border-b border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-glow">About Me</span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl mt-3 mb-8">
              The story behind the <span className="gradient-text">scans</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-8 space-y-5 text-white/70 leading-relaxed"
          >
            <p>
              I'm {site.name}, currently pursuing an MCA at DCRUST University, and working toward an
              entry-level role as a SOC Analyst or Cyber Security Analyst. My interest in security
              started with wanting to understand not just how systems work, but how they fail —
              and that curiosity turned into hands-on practice with network scanning, packet
              analysis, and malware inspection.
            </p>
            <p>
              During a six-month cybersecurity internship at Unified Mentor Pvt. Ltd., I moved from
              studying security concepts to applying them directly: running vulnerability
              assessments with Nmap, analyzing live traffic in Wireshark, and building Python tools
              for security monitoring and threat detection in Linux environments.
            </p>
            <p>
              Outside of internship work, I've built independent projects — including a honeypot
              system that captures real attacker behavior and a static malware analysis toolkit for
              PDFs — because reading about attacks only goes so far; building tools that observe
              them directly teaches far more.
            </p>
            <p>
              My goal is straightforward: join a security team where I can keep learning under real
              operational pressure, contribute from day one on triage and monitoring, and grow into
              a well-rounded SOC analyst over time.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-b border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display font-bold text-2xl mb-10">Education</h2>
          <div>
            {education.map((e, i) => (
              <TimelineItem
                key={e.school}
                title={e.school}
                subtitle={e.degree}
                date={e.date}
                index={i}
                isLast={i === education.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display font-bold text-2xl mb-10">Current Learning Roadmap</h2>
          <div className="space-y-4">
            {roadmap.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass rounded-xl p-5 flex items-start gap-4"
              >
                <span className="font-mono text-cyan-glow text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-white/70 text-[15px]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
