import React from "react";

export function BlogCard({ title, description, date }) {
  return (
    <article className="rounded-2xl border border-primary-border bg-gray-100 px-4 py-6 space-y-3">
      <h2 className="text-xl font-plusJakartaSans font-bold"> {title} </h2>
      <p className="text-secondary font-medium">{description}</p>
      <time datetime={date}>Published: {date}</time>
    </article>
  );
}
