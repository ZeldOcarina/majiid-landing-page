import React from "react";
import styled, { css } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import respond from "../styles/abstracts/mediaqueries";

import SectionTitle from "../components/SectionTitle";

const Wrapper = styled.section`
  ${respond(
    "phone-port",
    css`
      font-size: 1.8rem;
    `
  )}

  .image {
    width: 70%;
    margin-left: 50%;
    transform: translateX(-50%);

    ${respond(
      "phone-land",
      css`
        width: 100%;
        margin-left: 0;
        transform: translateX(0);
      `
    )}
  }

  .text-container {
    width: 80%;

    ${respond(
      "phone-port",
      css`
        width: 100%;
      `
    )}
  }

  p {
    margin: 1.5rem 0;
  }

  ul {
    margin: 0;
  }
  ul.dashed {
    list-style-type: none;
  }
  ul.dashed > li {
    /* text-indent: -5px; */
  }
  ul.dashed > li:before {
    content: "- ";
    /* text-indent: -5px; */
  }

  li {
    margin: 0.5rem 0;
  }
`;

const MeetingCoverage = () => {
  return (
    <Wrapper>
      <div className="container">
        <SectionTitle title="We help you find your gaps" />
        <StaticImage
          src="../images/zoom-call.jpg"
          alt="placeholder"
          placeholder="blurred"
          layout="constrained"
          className="image"
        />
        <div className="text-container">
          <p className="mt-4">
            Again, this is for dentists and dental practices that want to scale and operate their office with an
            entrepreneurial approach.
          </p>
          <p className="bold">Here's what we are going to cover on our meeting:</p>
          <ul className="dashed">
            <li>Learn about your current state and business structure.</li>
            <li>Find gaps in your current process if there are any (hopefully not many).</li>
            <li>Explain how to fill those gaps.</li>
            <li>
              Go over the solutions to speed up your growth, fix the gaps and enable you to increase your revenue by
              $500,000 to $1,000,000/year. No jokes.{" "}
            </li>
          </ul>

          <p>If you follow our process, you’ll be very happy.</p>

          <p className="bold">Are you who we are looking for?</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default MeetingCoverage;
