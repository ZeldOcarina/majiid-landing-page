import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: max-content;
  margin: 0 auto 6rem auto;

  .section-title {
    text-transform: uppercase;
    text-align: center;
  }

  .hr {
    height: 5px;
    background-color: black;
    margin: 2rem auto 0 auto;
    width: 50%;
  }
`;

const SectionTitle = ({ title, className }) => {
  return (
    <Wrapper className={className ? className : "section-title-container"}>
      <h2 className="section-title">{title}</h2>
      <hr className="hr" />
    </Wrapper>
  );
};

export default SectionTitle;
