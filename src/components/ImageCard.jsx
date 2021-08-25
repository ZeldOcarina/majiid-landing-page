import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

const Wrapper = styled.article`
  display: flex;
  width: 50%;
  margin: 0 auto;
  box-shadow: var(--cards-shadow);
  border-radius: 10px;

  ${respond(
    "tab-land",
    css`
      width: 63%;
    `
  )}
  ${respond(
    "phone-port",
    css`
      flex-direction: column;
      width: 90%;
    `
  )}

  .gatsby-image-wrapper {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    ${respond(
      "phone-port",
      css`
        border-bottom-left-radius: 0;
        border-top-right-radius: 10px;
      `
    )}
  }

  .right-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${respond(
      "tab-land",
      css`
        padding: 4rem;
      `
    )}
  }

  h5 {
    font-size: 2rem;
  }
  p {
    font-size: 1.8rem;
  }
`;

const ImageCard = () => {
  const {
    imageCardData: { image, title, subtitle },
  } = useStaticQuery(query);

  const parsedImage = getImage(image);
  return (
    <Wrapper>
      <GatsbyImage image={parsedImage} alt={title} />
      <div className="right-container">
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>
    </Wrapper>
  );
};

const query = graphql`
  {
    imageCardData: contentfulCallImageCard {
      image {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
      title
      subtitle
    }
  }
`;

export default ImageCard;
