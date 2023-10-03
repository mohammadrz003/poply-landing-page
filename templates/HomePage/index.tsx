"use client";

import Layout from "@/components/Layout";
import Hero from "./Hero";
import Benefits from "./Benefits";
import Collaboration from "./Collaboration";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import Roadmap from "./Roadmap";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Benefits />
      <Collaboration />
      <HowItWorks />
      <Testimonials />
      <Roadmap />
    </Layout>
  );
};

export default HomePage;
