import React from "react";
import Hero from "./hero/Hero";
import Footer from "./footer/Footer";
import How from "./how/How";
import Testimoni from "./testimoni/Testimoni";
import Why from "./why/Why";
import Blog from "./blog/Blog";
import Cta from "./cta/Cta";
import Statistik from "./statistik/Statistik";

function Home() {
  return (
      <main className="bg-[#F6F6F6]">
        <Hero />
        <How />
        <Why />
        <Testimoni />
        <Cta />
        <Statistik />
        <Blog />
        <Footer />
      </main>
  );
}

export default Home;
