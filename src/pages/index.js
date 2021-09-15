import React from "react";

import Seo from "../components/Seo";
import Layout from "../layout/Layout";
import Hero from "../sections/Hero";
import Clients from "../sections/Clients";
import CaseStudies from "../sections/CaseStudies";
import WhoIsFor from "../sections/WhoIsFor";
import Background from "../sections/Background";
import Enlightment from "../sections/Enlightment";
import MeetingCoverage from "../sections/MeetingCoverage";
import BenefitsAndOutcomes from "../sections/BenefitsAndOutcomes";
import HowItWorks from "../sections/HowItWorks";
import Warning from "../sections/Warning";

const IndexPage = ({ location }) => {
  return (
    <>
      <Seo location={location} />
      <Layout>
        <main>
          <Hero />
          <Clients />
          <CaseStudies />
          <WhoIsFor />
          <Background />
          <Enlightment />
          <MeetingCoverage />
          <BenefitsAndOutcomes />
          <HowItWorks />
          <Warning />
        </main>
      </Layout>
    </>
  );
};

export default IndexPage;
