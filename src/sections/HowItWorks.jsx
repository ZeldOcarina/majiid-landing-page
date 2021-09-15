import React from "react";
import styled from "styled-components";

import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

import svg1 from "../images/how-it-works/1.svg";
import svg2 from "../images/how-it-works/2.svg";
import svg3 from "../images/how-it-works/3.svg";
import svg4 from "../images/how-it-works/4.svg";

const Wrapper = styled.section`
  .intro {
    margin: 4rem 0 6rem;
  }

  .grid-item {
    display: flex;
    gap: 2.5rem;
    justify-content: center;
    width: 80%;
    margin: 0 auto;

    &--reverse {
      flex-direction: row-reverse;
    }

    &:not(:last-child) {
      margin-bottom: 4rem;
    }

    img {
      width: 7rem;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
    }
  }

  .cta {
    margin: 4rem auto 1rem auto;
  }
`;

const HowItWorks = () => {
  return (
    <Wrapper>
      <div className="container">
        <SectionTitle title="how it works" />
        <p className="bold text-center intro">
          First we establish if we can work together and give you an overview of the process.
        </p>
        <div className="grid">
          {content.map(({ content, image, alt }, i) => {
            const even = i % 2 === 0;
            return (
              <article key={i} className={even ? "grid-item" : "grid-item grid-item--reverse"}>
                <div className="img-container">
                  <img src={image} alt={alt} />
                </div>
                <p>{content}</p>
              </article>
            );
          })}
        </div>
        <Button className="cta" url="https://calendly.com/viva-concepts/schedule-a-call">
          Schedule your call
        </Button>
      </div>
    </Wrapper>
  );
};

const content = [
  {
    image: svg1,
    alt: "calendar icon",
    content:
      "1. Schedule a call with our team: I try to meet and work with each and every one of our customers to onboard them successfully. I can’t promise it will be directly with me but I’ll do may best. Regardless, schedule your call.",
  },
  {
    image: svg2,
    alt: "handshake icon",
    content: "2. We’ll come see you. We want to see your practice and meet your team",
  },
  {
    image: svg3,
    alt: "people with a cog",
    content:
      "3. Set aside some time for us to work together. We take each business very seriously and want to make sure we will work well together.",
  },
  {
    image: svg4,
    alt: "rocket icon",
    content:
      "4. Once we have established we can work together, we’ll onboard you by implementing our programs and together we’ll get your business at a whole different level. Quickly.",
  },
];

export default HowItWorks;
