import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import SectionTitle from "../components/SectionTitle";

const Wrapper = styled.section`
  .image {
    width: 100%;
  }

  .text-container {
    width: 80%;
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
        <SectionTitle title="Meeting Coverage" />
        <StaticImage
          src="../images/image-placeholder-horizontal.png"
          alt="placeholder"
          placeholder="blurred"
          layout="constrained"
          className="image"
        />
        <div className="text-container">
          <p className="mt-4">
            Again, thesis for Dentists and dental practices that want to scale
            and operate their office with an entrepreneurial approach
          </p>
          <p className="bold">
            Here's what we are going to cover on our meeting:
          </p>
          <ul className="dashed">
            <li>Learn about your current state and business structure.</li>
            <li>
              Find gaps in your current process if there are any (hopefully not
              many).
            </li>
            <li>Explain how to fill those gaps.</li>
            <li>
              Go over the solutions to speed up your growth, fix the gaps and
              enable you to increase your revenue by $500,000 to
              $1,000,000/year. No joke.{" "}
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
