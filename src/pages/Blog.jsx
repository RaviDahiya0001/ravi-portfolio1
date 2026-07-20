import { useState, useMemo } from "react";
import SEO from "../components/SEO";
import BlogCard from "../components/BlogCard";
import { getAllPosts, getAllCategories } from "../utils/blogs";
import { FiSearch } from "react-icons/fi";

export default function Blog() {
  const posts = getAllPosts();
  const categories = ["All", ...getAllCategories()];
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const matchesQuery =
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, activeCategory]);

  return (
    <>
      <SEO title="Blog" description="Technical articles on networking, malware analysis, and web security by Ravi Dahiya." />
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-glow">Writing</span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl mt-3 mb-10">Blog</h1>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-11 pr-4 py-3 rounded-xl glass text-sm text-white placeholder:text-white/35 outline-none focus:border-cyan-glow/50 transition"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`font-mono text-xs px-4 py-2.5 rounded-full border transition ${
                    activeCategory === c
                      ? "bg-violet-glow/15 border-violet-glow/50 text-white"
                      : "border-white/10 text-white/50 hover:text-white/80"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-white/50 font-mono text-sm py-16 text-center">No articles match your search.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
