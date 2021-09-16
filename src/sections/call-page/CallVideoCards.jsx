import React from "react";
import styled, { css } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import respond from "../../styles/abstracts/mediaqueries";

import VideoCard from "../../components/VideoCard";
//import ImageCard from "../../components/ImageCard";

const Wrapper = styled.section`
  text-align: center;
  padding: 0 0 6rem 0;

  ${respond(
    "phone-port",
    css`
      padding: 0;
    `
  )}

  h2 {
    text-transform: uppercase;
    margin-bottom: 5rem;
  }

  .video-cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin-bottom: 6rem;

    ${respond(
      "tab-port",
      css`
        grid-template-columns: 1fr;
      `
    )}
  }
`;

const CallVideoCards = () => {
  const {
    allContentfulCallIntroPageVideoCard: { cardsData },
  } = useStaticQuery(query);
  return (
    <Wrapper className="container">
      <h2>WATCH THESE THREE SHORT VIDEOS</h2>
      <div className="video-cards-container">
        {cardsData.map((cardData) => {
          return <VideoCard key={cardData.id} {...cardData} />;
        })}
      </div>
      {/* <ImageCard /> */}
    </Wrapper>
  );
};

export default CallVideoCards;

const query = graphql`
  {
    allContentfulCallIntroPageVideoCard(sort: { fields: index, order: ASC }) {
      cardsData: nodes {
        id
        index
        title
        videoId
        videoPlaceholder {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        description {
          raw
        }
      }
    }
  }
`;
