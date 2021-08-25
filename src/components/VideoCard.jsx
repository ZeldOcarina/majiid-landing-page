import { getImage } from "gatsby-plugin-image";
import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

import ImageVideo from "./ImageVideo";

const Wrapper = styled.article`
  box-shadow: var(--cards-shadow);
  border-radius: 10px;

  ${respond(
    "tab-port",
    css`
      width: calc(50% - 3rem);
      margin: 0 auto;
    `
  )}
  ${respond(
    "phone-port",
    css`
      width: 90%;
      margin: 0 auto;
    `
  )}

  .video-wrapper {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .gatsby-image-wrapper {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .bottom-container {
    padding: 4rem;
  }
  h5 {
    font-size: 2rem;
  }
  p {
    font-size: 1.8rem;
  }
`;

const VideoCard = ({ title, subtitle, videoId, videoPlaceholder, className }) => {
  const image = getImage(videoPlaceholder);
  return (
    <Wrapper className={className && className}>
      <ImageVideo video={videoId} image={image} alt={title} />
      <div className="bottom-container">
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>
    </Wrapper>
  );
};

export default VideoCard;
