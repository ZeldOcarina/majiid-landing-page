import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

import { useStaticQuery, graphql } from "gatsby";

import EnlightmentTemplate from "../components/EnlightmentTemplate";
import SectionTitle from "../components/SectionTitle";

const Wrapper = styled.section`
  font-size: 1.8rem;

  .new-title {
    width: 60%;
    margin-top: 0;

    ${respond(
      "tab-port",
      css`
        width: 100%;
      `
    )}
  }

  hr {
  }
`;

const Enlightment = () => {
  const data = useStaticQuery(query);
  const enlightmentArticles = data.allContentfulEnlightment.enlightmentArticles;

  return (
    <Wrapper>
      <div className="container">
        <SectionTitle
          title="How Does the Viva Program Scale Your Business and Set You Up for Retirement?"
          className="new-title"
        />
        {enlightmentArticles.map((article, i) => {
          const last = i + 1 === enlightmentArticles.length;
          return <EnlightmentTemplate {...article} key={article.contentful_id} last={last} noVideo />;
        })}
      </div>
    </Wrapper>
  );
};

const query = graphql`
  {
    allContentfulEnlightment {
      enlightmentArticles: nodes {
        title
        box1Title
        box2Title
        box3Title
        box4Title
        box5Title
        box1Text {
          box1Text
        }
        box2Text {
          box2Text
        }
        box3Text {
          box3Text
        }
        box4Text {
          box4Text
        }
        contentful_id
        thumbnail {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          title
        }
        box5Text {
          box5Text
        }
        cta
      }
    }
  }
`;

export default Enlightment;
