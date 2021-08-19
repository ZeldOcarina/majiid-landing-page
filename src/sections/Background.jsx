import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled, { css } from "styled-components";
import { getImage } from "gatsby-plugin-image";

import SectionTitle from "../components/SectionTitle";
import Video from "../components/Video";

import respond from "../styles/abstracts/mediaqueries";

import Button from "../components/Button";

const Wrapper = styled.section`
  padding-top: 0;

  .image-container {
    width: 100%;
  }

  .background-container {
    display: grid;
    grid-template-columns: 1.5fr 1fr;

    ${respond(
      "tab-land",
      css`
        gap: 4rem;
      `
    )}

    ${respond(
      "tab-port",
      css`
        grid-template-columns: 1fr;
      `
    )}
  }

  h4 {
    margin-bottom: 2rem;
  }

  .image-caption {
    text-align: center;
    margin-top: 1rem;
    font-style: italic;
  }

  .btn {
    margin-left: 50%;
    margin-top: 4rem;
    transform: translateX(-50%);

    ${respond(
      "phone-port",
      css`
        min-width: max-content;
      `
    )}
  }
`;

const Background = () => {
  const data = useStaticQuery(query);
  const image = getImage(data.file);

  return (
    <Wrapper>
      <div className="container">
        <SectionTitle title="background" />
        <div className="background-container">
          <figure>
            <Video image={image} alt="Majid" video="589177133" />
            <figcaption className="image-caption">Viva Concept Founder</figcaption>
          </figure>

          <div className="right-column">
            <h4>From Dry-cleaning clerk to $250 mln exit</h4>
            <p>
              "I wasn’t born with a silver spoon, I had to work hard for everything I have. Some of my successes include
              NeoPets, SpeedyClick and few other businesses. I have almost always been operating in the marketing space
              and my latest creation, Viva Concepts, is going to be my greatest accomplishment. Recently my Son in Law,
              international marketing super star Andrea d’Agostini, interviewed me at my house in Beverly Hills. I very
              rarely give interviews, but he convinced me this is a story that can inspire others, so here you go."
            </p>
          </div>
        </div>

        <Button className="btn">ready to grow?</Button>
      </div>
    </Wrapper>
  );
};

export const query = graphql`
  {
    file(name: { eq: "majid-image-2" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
    }
  }
`;

export default Background;
