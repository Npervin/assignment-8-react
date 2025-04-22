import React from "react";

// components
import Hero from "../components/home/Hero";
import Lawyers from "../components/home/Lawyers";
import Services from "../components/home/Services";

function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 space-y-20">
      <Hero />
      <Lawyers />
      <Services />
    </main>
  );
}

export default Home;
