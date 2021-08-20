import React from "react";
import styled, { css } from "styled-components";
import { getImage } from "gatsby-plugin-image";
import respond from "../styles/abstracts/mediaqueries";
import { useMediaQuery } from "react-responsive";

import Button from "./Button";
import Video from "./Video";

const Wrapper = styled.article`
  .grid-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 8rem;
    align-items: flex-start;
    justify-items: center;
    align-content: center;

    ${respond(
      "tab-port",
      css`
        grid-template-columns: 1fr;
        gap: 3rem;
      `
    )}
  }

  aside {
    ${respond(
      "tab-port",
      css`
        grid-row: 1 / 1;
      `
    )}
  }

  blockquote {
    font-style: italic;
    margin: 4rem 0 2rem 0;
  }

  .features {
    display: flex;
    flex-direction: column;
    transform: translateX(2rem);
    margin-bottom: 2rem;
    font-size: 1.4rem;

    li {
      &:not(:last-child) {
        margin-bottom: 0.5rem;
      }
    }
  }

  .logo {
    width: 30%;
    margin-bottom: 2rem;

    ${respond(
      "tab-port",
      css`
        margin-left: 50%;
        transform: translateX(-50%);
      `
    )}
  }

  .video-wrapper {
    width: 100%;
  }

  h3 {
    margin-bottom: 2rem;

    ${respond(
      "tab-port",
      css`
        text-align: center;
      `
    )}
  }

  .case-study-hr {
    margin: 3rem 0 5rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .btn {
    ${respond(
      "tab-port",
      css`
        margin-left: 50%;
        transform: translateX(-50%);
        width: max-content;
        margin-top: 2rem;
      `
    )}
  }
`;

const CaseStudy = ({ companyName, description, features, companyLogo, videoThumbnail, quote, last, videoUrl }) => {
  const isTabPort = useMediaQuery({ query: "(max-width: 56.25em)" });
  const logo = companyLogo.file.url;
  const parsedQuote = JSON.parse(quote.raw).content[0].content[0].value;
  const parsedDescription = JSON.parse(description.raw).content[0].content[0].value;
  const image = getImage(videoThumbnail);

  return (
    <>
      <Wrapper>
        <h3>{companyName}</h3>
        <div className="grid-container">
          <div className="left-container">
            <Video image={image} alt="placeholder image" video={videoUrl} />
            <blockquote>{parsedQuote}</blockquote>
            <p>{parsedDescription}</p>
            {isTabPort && <Button text="schedule your consultation" />}
          </div>
          <aside>
            <img src={`https:${logo}`} alt={`${companyName} logo`} className="logo" />
            <ul className="features">
              {features.map(({ intro, text }, i) => {
                return (
                  <li key={i}>
                    <span className="bold">{intro}</span>
                    {text}
                  </li>
                );
              })}
            </ul>
            {!isTabPort && <Button text="schedule your consultation" />}
          </aside>
        </div>
        {!last && <hr className="case-study-hr" />}
      </Wrapper>
    </>
  );
};

export default CaseStudy;
