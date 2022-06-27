import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

import Player from "@vimeo/player";
import respond from "../styles/abstracts/mediaqueries";

const Wrapper = styled.div`
  position: relative;
  width: 70%;
  margin: 0 auto;

  ${respond(
    "phone-port",
    css`
      width: 100%;
    `
  )}

  #video-iframe {
    width: 100%;
    max-width: 100%;
  }

  iframe {
    width: 100%;
    height: 43vh;

    ${respond(
      "phone-port",
      css`
        display: flex;
        align-items: flex-start;
        height: 19rem;
      `
    )}
  }
`;

const Video = ({ image, alt, video, noVideo }) => {
  const playerRef = useRef();

  useEffect(() => {
    if (!video) return;
    try {
      new Player(playerRef.current, {
        video,
        width: 500,
      });
    } catch (err) {
      console.log(err);
    }
  }, [video]);

  return (
    <Wrapper className="video-wrapper">
      <div ref={playerRef} data-vimeo-id={video}></div>
      {noVideo && <GatsbyImage image={image} alt={alt} />}
    </Wrapper>
  );
};

export default Video;
