import { parseFrontmatter } from "./parseFrontmatter";
import { readingTime } from "./readingTime";

const modules = import.meta.glob("../blogs/*.md", { query: "?raw", import: "default", eager: true });

function buildPosts() {
  const posts = Object.entries(modules).map(([path, raw]) => {
    const slug = path.split("/").pop().replace(".md", "");
    const { data, content } = parseFrontmatter(raw);
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      category: data.category || "General",
      tags: data.tags || [],
      excerpt: data.excerpt || "",
      readTime: readingTime(content),
      content,
    };
  });
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

const allPosts = buildPosts();

export function getAllPosts() {
  return allPosts;
}

export function getPostBySlug(slug) {
  return allPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post, limit = 2) {
  return allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, limit);
}

export function getAdjacentPosts(slug) {
  const idx = allPosts.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? allPosts[idx - 1] : null,
    next: idx < allPosts.length - 1 ? allPosts[idx + 1] : null,
  };
}

export function getAllCategories() {
  return [...new Set(allPosts.map((p) => p.category))];
}
