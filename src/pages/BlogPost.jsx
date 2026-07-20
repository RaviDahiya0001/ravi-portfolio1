import { useParams, Link, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState, useMemo } from "react";
import { FiClock, FiArrowLeft, FiArrowRight, FiCopy, FiCheck, FiShare2 } from "react-icons/fi";
import SEO from "../components/SEO";
import BlogCard from "../components/BlogCard";
import { getPostBySlug, getRelatedPosts, getAdjacentPosts } from "../utils/blogs";

function slugify(text) {
  return text.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
}

function CodeBlock({ codeString, className }) {
  const [copied, setCopied] = useState(false);
  const lang = className?.replace("language-", "") || "text";
  const code = codeString.replace(/\n$/, "");

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative group my-5">
      <button
        onClick={copy}
        className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-white/[0.06] border border-white/10 text-white/60 hover:text-white opacity-0 group-hover:opacity-100 transition"
        aria-label="Copy code"
      >
        {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
      </button>
      <SyntaxHighlighter language={lang} style={oneDark} customStyle={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  const headings = useMemo(() => {
    if (!post) return [];
    return [...post.content.matchAll(/^(##)\s+(.+)$/gm)].map((m) => ({
      text: m[2],
      id: slugify(m[2]),
    }));
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const related = getRelatedPosts(post);
  const { prev, next } = getAdjacentPosts(post.slug);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <SEO title={post.title} description={post.excerpt} />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_240px] gap-12">
          <article>
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-mono mb-8 transition">
              <FiArrowLeft /> Back to blog
            </Link>

            <div className="w-full h-52 rounded-2xl bg-gradient-to-br from-violet-glow/20 to-cyan-glow/10 border border-white/[0.08] flex items-center justify-center mb-8">
              <span className="font-mono text-white/25 text-xs">[ Hero image placeholder ]</span>
            </div>

            <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-violet-glow/10 border border-violet-glow/30 text-violet-glow">
              {post.category}
            </span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl mt-4 mb-4 leading-tight">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-white/45 font-mono text-xs mb-10 pb-8 border-b border-white/[0.08]">
              <span>Ravi Dahiya</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span className="flex items-center gap-1.5"><FiClock size={12} /> {post.readTime}</span>
            </div>

            <div className="prose-custom">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children }) => {
                    const text = String(children);
                    return <h2 id={slugify(text)}>{children}</h2>;
                  },
                  pre: ({ children }) => {
                    const codeEl = children?.props;
                    if (codeEl?.className?.includes("language-")) {
                      return <CodeBlock className={codeEl.className} codeString={String(codeEl.children)} />;
                    }
                    return <pre>{children}</pre>;
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            <div className="flex items-center gap-3 mt-10 pt-8 border-t border-white/[0.08]">
              <span className="font-mono text-xs text-white/45 flex items-center gap-2"><FiShare2 size={13} /> Share:</span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/60 hover:text-white transition"
              >
                Twitter / X
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/60 hover:text-white transition"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              {prev && (
                <Link to={`/blog/${prev.slug}`} className="flex-1 glass rounded-xl p-5 hover:border-cyan-glow/40 transition">
                  <span className="font-mono text-[11px] text-white/40 flex items-center gap-1 mb-1"><FiArrowLeft size={11} /> Previous</span>
                  <span className="font-display font-semibold text-sm">{prev.title}</span>
                </Link>
              )}
              {next && (
                <Link to={`/blog/${next.slug}`} className="flex-1 glass rounded-xl p-5 text-right hover:border-cyan-glow/40 transition">
                  <span className="font-mono text-[11px] text-white/40 flex items-center justify-end gap-1 mb-1">Next <FiArrowRight size={11} /></span>
                  <span className="font-display font-semibold text-sm">{next.title}</span>
                </Link>
              )}
            </div>

            {related.length > 0 && (
              <div className="mt-14">
                <h3 className="font-display font-bold text-xl mb-6">Related Articles</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {related.map((p, i) => <BlogCard key={p.slug} post={p} index={i} />)}
                </div>
              </div>
            )}
          </article>

          {headings.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <span className="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-4 block">On this page</span>
                <ul className="space-y-2.5 border-l border-white/[0.08] pl-4">
                  {headings.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="text-[13px] text-white/55 hover:text-cyan-glow transition leading-snug block">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}
        </div>
      </section>
    </>
  );
}
