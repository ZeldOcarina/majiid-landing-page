import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled, { css } from "styled-components";
import respond from "../../styles/abstracts/mediaqueries";

import CallCaseStudy from "../../components/CallCaseStudy";

const Wrapper = styled.section`
  background-color: var(--color-primary-light);
  text-align: center;

  ${respond(
    "tab-port",
    css`
      padding: 7rem 0;
    `
  )}

  .subtitle {
    font-weight: 700;
  }

  h3 {
    margin: 2rem 0;
    text-transform: uppercase;
  }

  .after-title {
    width: 45%;
    margin: 0 auto;
    font-size: 1.8rem;

    ${respond(
      "phone-port",
      css`
        width: 90%;
      `
    )}
  }

  .case-studies-title {
    margin-top: 6rem;
    margin-bottom: 5rem;
  }

  .case-studies {
    display: flex;
    gap: 3rem;

    ${respond(
      "tab-port",
      css`
        flex-wrap: wrap;
      `
    )}
  }
`;

const Review = () => {
  const {
    allContentfulCallCaseStudy: { caseStudies },
  } = useStaticQuery(query);

  return (
    <Wrapper>
      <div className="container">
        <p className="subtitle">Thank you for booking a call with us!</p>
        <h3>THINGS TO REVIEW BEFORE YOUR CALL</h3>
        <p className="after-title">
          Smooth Dental Started from scratch, with one office making $70/80k per month. The incredible work of Elisabeth
          Tran built it into an unstoppable machine.
        </p>
        <h3 className="case-studies-title">case studies</h3>
        <div className="case-studies">
          {caseStudies.map((caseStudy) => {
            return <CallCaseStudy key={caseStudy.id} {...caseStudy} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const query = graphql`
  {
    allContentfulCallCaseStudy {
      caseStudies: nodes {
        id
        name
        subtitle
        cta
        url
        logo {
          file {
            url
          }
        }
        mainImage {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`;

export default Review;
