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
    width: 65%;
    ${respond(
      "phone-port",
      css`
        width: 100% !important;
      `
    )}
  }

  .text-container {
    width: 70%;
    margin: 4rem auto 0 auto;

    ${respond(
      "phone-port",
      css`
        width: 100%;
      `
    )}

    p {
      margin: 1.5rem 0;
    }
  }
`;

const Hero = () => {
  const {
    file: { childImageSharp },
  } = useStaticQuery(query);

  const image = getImage(childImageSharp);

  return (
    <Wrapper>
      <div className="container">
        <h2>Watch this video first</h2>
        <ImageVideo image={image} alt="placeholder image" video={606718682} />
        <div className="text-container">
          <p>
            Majid is an innovator, with multiple successful exits and companies such as NeoPets, SpeedyClick and many
            others.
          </p>
          <p>
            So you understand why we want to make sure that you have the opportunity to ask all the questions you might
            have and see why such an entrepreneur decided to work on this particular niche.
          </p>

          <p>You might think “a multi-millionaire is coming to talk to me”?</p>
          <p>Well, yes, and this is probably the “signature” of his success, he is always hands on.</p>

          <p>Take a look and please feel free to reach out to me for anything you might need.</p>
        </div>
      </div>
    </Wrapper>
  );
};

const query = graphql`
  {
    file(name: { eq: "majiid" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG, quality: 9, sizes: "1200x800")
      }
    }
  }
`;

export default Hero;
