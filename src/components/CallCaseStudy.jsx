import { getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

import Button from "./Button";

const Wrapper = styled.article`
  .card {
    box-shadow: var(--cards-shadow);
    background-color: var(--white);
    border-radius: 10px;
  }

  .gatsby-image-wrapper {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .bottom-part {
    padding: 4rem;
  }

  h5 {
    font-size: 2rem;
  }
  p {
    font-size: 1.8rem;
    margin-bottom: 3rem;
  }

  .cta {
    margin-top: 4rem;
    font-weight: 600;
    font-size: 1.4rem;
    padding: 0;
    height: 6rem;
    width: 22rem;

    a {
      color: var(--white);
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const CallCaseStudy = ({
  name,
  subtitle,
  logo: {
    file: { url: logoImage },
  },
  mainImage,
  url,
  cta,
}) => {
  const parsedMainImage = getImage(mainImage.gatsbyImageData);

  return (
    <Wrapper>
      <div className="card">
        <GatsbyImage image={parsedMainImage} alt={name} />
        <div className="bottom-part">
          <h5>{name}</h5>
          <p>{subtitle}</p>
          <img src={`https:${logoImage}`} alt={name} />
        </div>
      </div>
      <Button className="cta">
        <a href={url}>{cta}</a>
      </Button>
    </Wrapper>
  );
};

export default CallCaseStudy;
