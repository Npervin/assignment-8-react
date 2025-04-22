import React from "react";
import { useLoaderData } from "react-router";

// components
import Hero from "../components/home/Hero";
import Lawyers from "../components/home/Lawyers";
import Services from "../components/home/Services";

function Home() {
  const data = useLoaderData();

  return (
    <main className="max-w-7xl mx-auto px-4 space-y-20">
      <Hero />
      <Lawyers lawyersData={data} />
      <Services />
    </main>
  );
}

export default Home;
