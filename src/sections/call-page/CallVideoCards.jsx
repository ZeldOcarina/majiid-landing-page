import React from "react";
import styled, { css } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import respond from "../../styles/abstracts/mediaqueries";

import VideoCard from "../../components/VideoCard";
import ImageCard from "../../components/ImageCard";

const Wrapper = styled.section`
  text-align: center;
  padding: 0 0 6rem 0;

  h2 {
    text-transform: uppercase;
    margin-bottom: 5rem;
  }

  .video-cards-container {
    display: flex;
    gap: 3rem;
    margin-bottom: 6rem;

    ${respond(
      "tab-port",
      css`
        flex-wrap: wrap;
        gap: 3rem;
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
      <h2>WATCH THESE 3 VIDEOS BEFORE YOUR CALL</h2>
      <div className="video-cards-container">
        {cardsData.map((cardData) => {
          return <VideoCard key={cardData.id} {...cardData} />;
        })}
      </div>
      <ImageCard />
    </Wrapper>
  );
};

export default CallVideoCards;

const query = graphql`
  {
    allContentfulCallIntroPageVideoCard {
      cardsData: nodes {
        id
        title
        subtitle
        videoId
        videoPlaceholder {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;
