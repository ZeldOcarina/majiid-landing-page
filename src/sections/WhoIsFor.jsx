import React from "react";
import styled from "styled-components";

import SectionTitle from "../components/SectionTitle";

const Wrapper = styled.section`
  text-align: left;

  h3 {
    margin-bottom: 1.5rem;
    font-size: var(--basic-font-size);
  }

  p {
    margin-bottom: 2rem;
  }

  .bottom-title {
    margin-top: 6rem;
  }
`;

const WhoIsFor = () => {
  return (
    <Wrapper>
      <div className="container">
        <SectionTitle title="who this is for" />
        <h3>This program is for Dentists who know they are entrepreneurs</h3>
        <p>
          My program is for dentists that know they are entrepreneurs and what
          to create a powerful business with recurring revenues, abundance and
          time to live a fulfilling life. I am interested in
        </p>
        <h3>
          Dentists are loosing on average $20,000 and they don’t even know it.
        </h3>
        <p>
          "Viva’t program is designed to generate $1mln in additional revenue in
          12 months or less (for each location) with an exact blue print for
          each step of the way.
        </p>
        <h3>No, it’s not a gimmick.</h3>

        <p>
          All my businesses are based upon spotting some inefficiency in a
          market, providing a solution for it and then perfecting the process.
        </p>

        <p>
          Doing the hard things to make other people’s life easier, always paid
          off in my life. I have noticed some HUGE inefficiencies in the dental
          space and build an unstoppable solution for it."
        </p>
        <SectionTitle title="core concept" className="bottom-title" />
        <h3>We grew over 250 dental practices and counting.</h3>
        <p>Our system has been built.</p>
      </div>
    </Wrapper>
  );
};

export default WhoIsFor;
