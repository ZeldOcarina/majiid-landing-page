import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import SectionTitle from "../components/SectionTitle";
import CaseStudy from "../components/CaseStudy";

const Wrapper = styled.section`
  font-size: 1.6rem;

  .section-title-container {
    margin-bottom: 4rem;
  }
`;

const CaseStudies = () => {
  const {
    allContentfulCaseStudy: { caseStudies },
  } = useStaticQuery(query);
  return (
    <Wrapper id="case-studies">
      <div className="container">
        <SectionTitle title="case studies" />
        <div className="case-studies-container">
          {caseStudies.map((item, i) => {
            const last = caseStudies.length === i + 1;
            return <CaseStudy {...item} key={item.contentful_id} last={last} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const query = graphql`
  {
    allContentfulCaseStudy {
      caseStudies: nodes {
        companyName
        contentful_id
        description {
          raw
        }
        features {
          content
        }
        companyLogo {
          file {
            url
          }
        }
        videoThumbnail {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
        quote {
          raw
        }
      }
    }
  }
`;

export default CaseStudies;
