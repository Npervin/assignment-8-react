import React from "react";
import { useLoaderData } from "react-router";

import { BlogCard } from "../components/shared/cards/BlogCard";

function Blogs() {
  const data = useLoaderData();

  return (
    <main className="max-w-7xl mx-auto px-4 space-y-20">
      <section className="mt-16 space-y-3 rounded-2xl text-center">
        <h2 className="text-[40px] font-extrabold"> Blogs </h2>
        <p className="text-secondary max-w-5xl mx-auto">
          Let's explore some of the latest blogs and articles on various legal
          topics.
        </p>
      </section>

      <section className="space-y-12">
        {data.map((blog) => (
          <BlogCard
            title={blog.title}
            description={blog.description}
            date={blog.date}
          />
        ))}
      </section>
    </main>
  );
}

export default Blogs;
