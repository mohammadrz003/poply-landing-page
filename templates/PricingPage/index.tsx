"use client";

import Layout from "@/components/Layout";
import Pricing from "./Pricing";
import Comparison from "./Comparison";
import Community from "./Community";
import Faq from "./Faq";

const PricingPage = () => {
  return (
    <Layout>
      <Pricing />
      <Comparison />
      <Community />
      <Faq />
    </Layout>
  );
};

export default PricingPage;
