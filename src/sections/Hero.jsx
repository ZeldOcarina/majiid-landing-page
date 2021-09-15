import React from "react";
import styled, { css } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import respond from "../styles/abstracts/mediaqueries";

import Video from "../components/Video";

const Wrapper = styled.section`
  text-align: center;

  h1 {
    margin-top: 1rem;
  }

  p {
    margin-bottom: 4rem;
  }

  .video-wrapper {
    width: 60%;

    ${respond(
      "tab-land",
      css`
        width: 80%;
      `
    )}
    ${respond(
      "phone-port",
      css`
        width: 100%;
      `
    )}
  }
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "hero-thumb" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  `);

  const image = getImage(data.file);

  return (
    <Wrapper>
      <div className="container">
        <h1>The #1 Mentor in the World for Dental Practices</h1>
        <p>Our program adds $500,000 to $1,000,000 for each office you manage in 12 months or less.</p>
        <Video image={image} alt="blue rectangle" video="589909707" />
      </div>
    </Wrapper>
  );
};

export default Hero;
