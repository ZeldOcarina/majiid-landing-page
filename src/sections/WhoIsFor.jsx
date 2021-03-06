import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

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

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    align-items: center;

    ${respond(
      "tab-port",
      css`
        grid-template-columns: 1fr;
      `
    )}

    .image {
      ${respond(
        "tab-port",
        css`
          grid-row: 1 / 2;
        `
      )}
    }
  }
`;

const WhoIsFor = () => {
  return (
    <Wrapper>
      <div className="container">
        <SectionTitle title="Who is this For" />
        <h3>This program is for dentists who know they are entrepreneurs.</h3>
        <p>
          My program is for dentists that know they are entrepreneurs and want to create a powerful business with
          recurring revenues, abundance and time to live a fulfilling life.
        </p>
        <h3>Dentists are losing on average $20,000 and they don’t even know it.</h3>
        <p>
          Viva’s program is designed to generate $1,000,000 in additional revenue in 12 months or less (for each
          location) with an exact blueprint for each step of the way.
        </p>
        <h3>No, it’s not a gimmick.</h3>

        <p>
          All my businesses are based upon spotting inefficiencies in a market, providing a solution for it and then
          perfecting the process.
        </p>

        <p>Doing the more difficult activities to make other lives easier always paid off in my life.</p>
        <p>I noticed some HUGE inefficiencies in the dental space and built an unstoppable solution for it.</p>

        <SectionTitle title="core concept" className="bottom-title" />
        <div className="grid">
          <div className="left-column">
            <h3>We grew over 250 dental practices and counting.</h3>
            <p>
              There hasn't been true innovation in dentistry's marketing in many many years. Viva Concepts is a complete
              system to acquire new customers, keep them engaged, scale your business and build a recurring revenue
              system in it. We did it for over 250 dental practices and counting.
            </p>
          </div>

          <StaticImage
            src="../images/majid-image.jpg"
            layout="constrained"
            placeholder="tracedSVG"
            className="image"
            alt="Majid looking at his products in a nice studio"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default WhoIsFor;
