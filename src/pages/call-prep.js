import React from "react";
import Seo from "../components/Seo";
import CallHero from "../sections/call-page/CallHero";
import CallVideoCards from "../sections/call-page/CallVideoCards";
//import Review from "../sections/call-page/Review";
import CaseStudies from "../sections/CaseStudies";
import Questions from "../sections/call-page/Questions";

const CallPage = () => {
  return (
    <main>
      <Seo title="Viva Digital | Prepare for Your Call" />
      <CallHero />
      <CallVideoCards />
      {/* <Review /> */}
      <CaseStudies />
      <Questions />
    </main>
  );
};

export default CallPage;
