import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

import playIcon from "../images/icons/play-icon.svg";

const Wrapper = styled.div`
  position: relative;
  width: 70%;
  margin: 0 auto;

  .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8rem;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
`;

const Video = ({ image, alt }) => {
  return (
    <Wrapper className="video-wrapper">
      <GatsbyImage image={image} alt={alt} />
      <img src={playIcon} alt="Play icon" className="play-icon" />
    </Wrapper>
  );
};

export default Video;
