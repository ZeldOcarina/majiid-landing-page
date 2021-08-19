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

  const mintDentalLoft = caseStudies.find((caseStudy) => {
    return caseStudy.companyName === "Mint Dental Loft";
  });

  return (
    <Wrapper id="case-studies">
      <div className="container">
        <SectionTitle title="case studies" />
        <div className="case-studies-container">
          <CaseStudy {...mintDentalLoft} />
          {caseStudies.map((item, i) => {
            const last = caseStudies.length === i + 1;
            if (item.companyName === "Mint Dental Loft") return null;
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
        features {
          intro
          text
        }
        description {
          raw
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
        videoUrl
      }
    }
  }
`;

export default CaseStudies;
