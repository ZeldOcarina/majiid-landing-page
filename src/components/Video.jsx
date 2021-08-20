import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { v4 as uuidv4 } from "uuid";

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
  const [playerId, _] = useState(uuidv4());

  useEffect(() => {
    if (!video) return;
    console.log(playerId);
    const newPlayer = new Player(playerId, {
      video,
    });
  }, [playerId, video]);

  return (
    <Wrapper className="video-wrapper">
      <div id={playerId} data-vimeo-id={video}></div>
      {noVideo && <GatsbyImage image={image} alt={alt} />}
      {/* {!noVideo && <img src={playIcon} alt="Play icon" className="play-icon" onClick={() => setPlaying(true)} />} */}
    </Wrapper>
  );
};

export default Video;
