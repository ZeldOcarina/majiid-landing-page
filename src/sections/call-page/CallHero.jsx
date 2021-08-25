import React from "react";
import styled, { css } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import respond from "../../styles/abstracts/mediaqueries";

import ImageVideo from "../../components/ImageVideo";

const Wrapper = styled.section`
  text-align: center;
  h2 {
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  .video-wrapper {
    ${respond(
      "phone-port",
      css`
        width: 100% !important;
      `
    )}
  }
`;

const Hero = () => {
  const {
    file: { childImageSharp },
  } = useStaticQuery(query);

  const image = getImage(childImageSharp);

  return (
    <Wrapper>
      <h2>step 1: watch this before you call!</h2>
      <ImageVideo image={image} alt="placeholder image" video={589909707} />
    </Wrapper>
  );
};

const query = graphql`
  {
    file(name: { eq: "video-thumb" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

export default Hero;
