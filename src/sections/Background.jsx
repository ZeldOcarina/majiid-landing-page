import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import { StaticImage } from "gatsby-plugin-image";

import Button from "../components/Button";

const Wrapper = styled.section`
  padding-top: 0;

  .image-container {
    width: 40rem;
  }

  .background-container {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
  }

  h4 {
    margin-bottom: 2rem;
  }

  .founder-title {
    text-align: center;
    margin: 6rem 0 4rem 0;
  }

  .btn {
    margin-left: 50%;
    margin-top: 4rem;
    transform: translateX(-50%);
  }
`;

const Background = () => {
  return (
    <Wrapper>
      <div className="container">
        <SectionTitle title="background" />
        <div className="background-container">
          <StaticImage
            src="../images/image-placeholder-2.png"
            alt="Image placeholder"
            className="image-container"
            layout="constrained"
          />

          <div className="right-column">
            <h4>From Dry-cleaning clerk to $250 mln exit</h4>
            <p>
              "I wasn’t born with a silver spoon, I had to work hard for
              everything I have. Some of my successes include NeoPets,
              SpeedyClick and few other businesses. I have almost always been
              operating in the marketing space and my latest creation, Viva
              Concepts, is going to be my greatest accomplishment. Recently my
              Son in Law, international marketing super star Andrea d’Agostini,
              interviewed me at my house in Beverly Hills. I very rarely give
              interviews, but he convinced me this is a story that can inspire
              others, so here you go."
            </p>
          </div>
        </div>
        <h3 className="founder-title">Viva Concept Founder</h3>
        <Button className="btn">ready to grow?</Button>
      </div>
    </Wrapper>
  );
};

export default Background;
