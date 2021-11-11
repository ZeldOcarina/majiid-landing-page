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
  .content {
    font-size: 1.8rem;
    margin: 1.5rem 0;

    &--li {
      margin: 1rem 0;
      text-align: left;
    }
  }

  ul {
    list-style: inside;
  }
`;

const VideoCard = ({ title, description, videoId, videoPlaceholder, className, vimeoH }) => {
  const content = (description && JSON.parse(description.raw).content) || undefined;

  //console.log(JSON.parse(description.raw).content);

  const image = getImage(videoPlaceholder);
  return (
    <Wrapper className={className && className}>
      <ImageVideo video={videoId} image={image} alt={title} vimeoH={vimeoH} />
      <div className="bottom-container">
        <h5>{title}</h5>
        {content &&
          content.map((node, i) => {
            if (node.nodeType === "paragraph")
              return (
                <p className="content" key={i}>
                  {node.content[0].value}
                </p>
              );

            return (
              <ul key={Math.random()} className="ul">
                {node.content.map((listItem, i) => {
                  return (
                    <li key={i + Math.random()} className="content content--li">
                      {listItem.content[0].content[0].value}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        {/* <div className="content" dangerouslySetInnerHTML={{ __html: description?.description || "" }}></div> */}
      </div>
    </Wrapper>
  );
};

export default VideoCard;
