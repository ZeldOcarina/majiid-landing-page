import React from "react";

import Layout from "../layout/Layout";
import Seo from "../components/Seo";
import CallIntro from "../sections/call-page/CallIntro";
import CallHero from "../sections/call-page/CallHero";
import CallVideoCards from "../sections/call-page/CallVideoCards";
//import Review from "../sections/call-page/Review";
import CaseStudies from "../sections/CaseStudies";
import Questions from "../sections/call-page/Questions";

const CallPage = () => {
  return (
    <>
      <Seo title="Viva Digital | Prepare for Your Call" />
      <Layout internal>
        <main>
          <CallIntro />
          <CallHero />
          <CallVideoCards />
          {/* <Review /> */}
          <CaseStudies />
          <Questions />
        </main>
      </Layout>
    </>
  );
};

export default CallPage;
