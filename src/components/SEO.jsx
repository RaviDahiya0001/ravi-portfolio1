import { useEffect } from "react";

export default function SEO({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — Ravi Dahiya` : "Ravi Dahiya — Cybersecurity Analyst";
    document.title = fullTitle;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = "description";
        document.head.appendChild(tag);
      }
      tag.content = description;
    }
  }, [title, description]);

  return null;
}
