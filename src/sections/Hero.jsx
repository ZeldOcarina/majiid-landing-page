import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import respond from "../styles/abstracts/mediaqueries";

import Video from "../components/Video";
import NoVideoContext from "../context/NoVideoContext";
import ImageVideo from "../components/ImageVideo";

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
  const noVideoContext = useContext(NoVideoContext);

  return (
    <Wrapper>
      <div className="container">
        <h1>The #1 Mentor in the World for Dental Practices</h1>
        <p>Our program adds $500,000 to $1,000,000 for each office you manage in 12 months or less.</p>
        {noVideoContext ? (
          <ImageVideo image={image} alt="Viva presentation" video="606718682" vimeoH="29cd311296&amp" />
        ) : (
          <Video image={image} alt="blue rectangle" video="606718682" />
        )}
      </div>
    </Wrapper>
  );
};

export default Hero;
