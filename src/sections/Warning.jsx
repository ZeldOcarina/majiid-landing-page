import React from "react";
import styled from "styled-components";

import SectionTitle from "../components/SectionTitle";

const Wrapper = styled.section`
  padding-top: 0;
  padding-bottom: 8rem;
`;

const Warning = () => {
  return (
    <Wrapper className="text-center">
      <div className="container">
        <SectionTitle title="warning" />
        <p className="bold mb-3">This is not a get rich quick process or something of that sort.</p>
        <p>
          We are entrepreneurs. We know hard work and I know you do as well. We can take you from where you are to a
          whole new realm of productivity and profits, but we do it through hard work and collaboration between your
          team and our team.
        </p>
      </div>
    </Wrapper>
  );
};

export default Warning;
