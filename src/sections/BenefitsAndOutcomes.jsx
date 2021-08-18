import React from "react";
import styled, { css } from "styled-components";
import SectionTitle from "../components/SectionTitle";
import respond from "../styles/abstracts/mediaqueries";

import svg1 from "../images/benefits/1.svg";
import svg2 from "../images/benefits/2.svg";
import svg3 from "../images/benefits/3.svg";
import svg4 from "../images/benefits/4.svg";
import svg5 from "../images/benefits/5.svg";
import svg6 from "../images/benefits/6.svg";

const Wrapper = styled.section`
  .section-title-container {
    margin-bottom: 8rem;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-wrap: wrap;
    row-gap: 6rem;
    column-gap: 1rem;

    ${respond(
      "phone-port",
      css`
        grid-template-columns: 1fr 1fr;
      `
    )}
  }

  .grid-item {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    text-align: center;
    font-size: 1.6rem;
  }
`;

const BenefitsAndOutcomes = () => {
  return (
    <Wrapper>
      <div className="container">
        <SectionTitle title="Benefits and outcomes" />
        <div className="grid">
          {content.map(({ image, alt, content }, i) => {
            return (
              <div className="grid-item" key={i}>
                <img src={image} alt={alt} />
                <p>{content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const content = [
  {
    image: svg1,
    content: "Develop predictable growth in your business",
    alt: "uptrending arrow",
  },
  {
    image: svg2,
    content: "Quickly generate more cashflow following our proven methodology",
    alt: "cash icon",
  },
  {
    image: svg3,
    content: "Scale your business building recurring revenues",
    alt: "arrows spreading in opposite directions",
  },
  {
    image: svg4,
    content: "Generate 3x more referrals",
    alt: "chat icon",
  },
  {
    image: svg5,
    content: "Build a constant flow of new patients",
    alt: "phone with a person icon",
  },
  {
    image: svg6,
    content:
      "Work with a team that has more experience than anyone in the space and has been building and expanding businesses for 30 years now generating close to $300mln",
    alt: "people icon",
  },
];

export default BenefitsAndOutcomes;
