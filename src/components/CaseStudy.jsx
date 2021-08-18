import React from "react";
import styled from "styled-components";
import { getImage } from "gatsby-plugin-image";

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
    width: 20%;
    margin-bottom: 2rem;
  }

  .video-wrapper {
    width: 100%;
  }

  h3 {
    margin-bottom: 2rem;
  }

  .case-study-hr {
    margin: 3rem 0 5rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const CaseStudy = ({
  companyName,
  description,
  features,
  companyLogo,
  videoThumbnail,
  quote,
  last,
}) => {
  const logo = companyLogo.file.url;
  const parsedQuote = JSON.parse(quote.raw).content[0].content[0].value;
  const parsedDescription = JSON.parse(description.raw).content[0].content[0]
    .value;
  const image = getImage(videoThumbnail);
  return (
    <>
      <Wrapper>
        <h3>{companyName}</h3>
        <div className="grid-container">
          <div className="left-container">
            <Video image={image} alt="placeholder image" />
            <blockquote>{parsedQuote}</blockquote>
            <p>{parsedDescription}</p>
          </div>
          <aside>
            <img
              src={`https:${logo}`}
              alt={`${companyName} logo`}
              className="logo"
            />
            <ul className="features">
              {features.map(({ content }, i) => {
                return <li key={i}>{content}</li>;
              })}
            </ul>
            <Button text="schedule your consultation" />
          </aside>
        </div>
        {!last && <hr className="case-study-hr" />}
      </Wrapper>
    </>
  );
};

export default CaseStudy;
