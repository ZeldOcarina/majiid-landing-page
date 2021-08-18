import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

import Button from "../components/Button";
import Video from "../components/Video";
import Hr from "../components/Hr";

import { getImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
  ${({ last }) =>
    last
      ? css`
          margin-bottom: 0;
        `
      : css`
          margin-bottom: 6rem;
        `}

  h5,
  h2 {
    text-transform: capitalize;
  }

  h5 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }

  .features {
    display: grid;
    gap: 4rem;
    grid-template-columns: 1fr 1fr;
    margin: 4rem 0;

    ${respond(
      "phone-port",
      css`
        grid-template-columns: 1fr;
      `
    )}
  }

  .last-feature {
    width: 50%;
    margin: 0 auto;

    h5,
    p {
      text-align: center;

      ${respond(
        "phone-port",
        css`
          text-align: left;
        `
      )}
    }

    ${respond(
      "phone-port",
      css`
        width: 100%;
      `
    )}
  }

  .btn {
    margin-left: 50%;
    margin-top: 4rem;
    transform: translateX(-50%);
    text-transform: capitalize;

    ${respond(
      "phone-port",
      css`
        width: max-content;
      `
    )}
  }

  .enlightment-title {
    margin-top: 4rem;
  }

  .video-wrapper {
    width: 60%;

    ${respond(
      "phone-port",
      css`
        width: 100%;
      `
    )}
  }
`;

const EnlightmentTemplate = ({
  title,
  box1Title,
  box1Text: { box1Text },
  box2Title,
  box2Text: { box2Text },
  box3Title,
  box3Text: { box3Text },
  box4Title,
  box4Text: { box4Text },
  box5Title,
  box5Text: { box5Text },
  cta,
  thumbnail,
  last,
}) => {
  const image = getImage(thumbnail);

  console.log(image);

  return (
    <Wrapper last={last}>
      <article>
        <Video image={image} alt="placeholder" />
        <h2 className="text-center enlightment-title">{title}</h2>
        <div className="features">
          <div className="feature">
            <h5>{box1Title}</h5>
            <p>{box1Text}</p>
          </div>
          <div className="feature">
            <h5>{box2Title}</h5>
            <p>{box2Text}</p>
          </div>
          <div className="feature">
            <h5>{box3Title}</h5>
            <p>{box3Text}</p>
          </div>
          <div className="feature">
            <h5>{box4Title}</h5>
            <p>{box4Text}</p>
          </div>
        </div>
        <div className="last-feature">
          <h5>{box5Title}</h5>
          <p>{box5Text}</p>
        </div>
        <Button>{cta}</Button>
        <Hr />
      </article>
    </Wrapper>
  );
};

export default EnlightmentTemplate;
