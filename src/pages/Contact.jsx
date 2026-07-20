import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { SiTryhackme } from "react-icons/si";
import SEO from "../components/SEO";
import site from "../data/siteConfig.json";

// EmailJS setup: create a free account at https://www.emailjs.com
// then replace the three placeholder values below with your own.
const EMAILJS_SERVICE_ID = "service_6yjtz5g";
const EMAILJS_TEMPLATE_ID = "template_et132bs";
const EMAILJS_PUBLIC_KEY = "_Ov0bX8uPvtZwpbwL";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null); // "sending" | "success" | "error"

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const isConfigured =
      EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" &&
      EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
      EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY";

    if (!isConfigured) {
      console.warn("EmailJS is not configured yet — see comments at the top of Contact.jsx");
      setTimeout(() => setStatus("error"), 600);
      return;
    }

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      <SEO title="Contact" description="Get in touch with Ravi Dahiya for SOC Analyst or Cyber Security Analyst opportunities." />
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-glow">Get in touch</span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl mt-3 mb-4">Let's connect</h1>
          <p className="text-white/55 max-w-xl mb-12">
            Open to entry-level SOC Analyst / Cyber Security Analyst roles. Reach out — I respond fast.
          </p>

          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10">
            <div className="space-y-4">
              <a href={`mailto:${site.email}`} className="glass rounded-xl p-5 flex items-center gap-4 hover:border-cyan-glow/40 transition">
                <FiMail className="text-cyan-glow" size={20} />
                <div>
                  <div className="font-mono text-[11px] text-white/40 uppercase tracking-wider">Email</div>
                  <div className="text-sm">{site.email}</div>
                </div>
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 flex items-center gap-4 hover:border-cyan-glow/40 transition">
                <FiLinkedin className="text-cyan-glow" size={20} />
                <div>
                  <div className="font-mono text-[11px] text-white/40 uppercase tracking-wider">LinkedIn</div>
                  <div className="text-sm">Ravi Dahiya</div>
                </div>
              </a>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 flex items-center gap-4 hover:border-cyan-glow/40 transition">
                <FiGithub className="text-cyan-glow" size={20} />
                <div>
                  <div className="font-mono text-[11px] text-white/40 uppercase tracking-wider">GitHub</div>
                  <div className="text-sm">RaviDahiya0001</div>
                </div>
              </a>
              <a href={site.tryhackme} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 flex items-center gap-4 hover:border-cyan-glow/40 transition">
                <SiTryhackme className="text-cyan-glow" size={20} />
                <div>
                  <div className="font-mono text-[11px] text-white/40 uppercase tracking-wider">TryHackMe</div>
                  <div className="text-sm">Top 1% Rank</div>
                </div>
              </a>
              <div className="glass rounded-xl p-5 flex items-center gap-4">
                <FiMapPin className="text-cyan-glow" size={20} />
                <div>
                  <div className="font-mono text-[11px] text-white/40 uppercase tracking-wider">Location</div>
                  <div className="text-sm">{site.location}</div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-[11px] uppercase tracking-wider text-white/45 mb-2 block">Name</label>
                  <input
                    required name="name" value={form.name} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-sm outline-none focus:border-cyan-glow/50 transition"
                  />
                </div>
                <div>
                  <label className="font-mono text-[11px] uppercase tracking-wider text-white/45 mb-2 block">Email</label>
                  <input
                    required type="email" name="email" value={form.email} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-sm outline-none focus:border-cyan-glow/50 transition"
                  />
                </div>
              </div>
              <div>
                <label className="font-mono text-[11px] uppercase tracking-wider text-white/45 mb-2 block">Subject</label>
                <input
                  required name="subject" value={form.subject} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-sm outline-none focus:border-cyan-glow/50 transition"
                />
              </div>
              <div>
                <label className="font-mono text-[11px] uppercase tracking-wider text-white/45 mb-2 block">Message</label>
                <textarea
                  required rows={5} name="message" value={form.message} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-sm outline-none focus:border-cyan-glow/50 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-6 py-3.5 rounded-xl gradient-bg text-navy-950 font-mono text-sm font-semibold flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-transform disabled:opacity-60"
              >
                <FiSend /> {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-center text-sm text-cyan-glow font-mono">Message sent — thank you! I'll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="text-center text-sm text-rose-400 font-mono">
                  EmailJS isn't configured yet. Add your Service ID, Template ID, and Public Key in src/pages/Contact.jsx, or email me directly at {site.email}.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
