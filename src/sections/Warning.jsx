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
        <p className="bold mb-3">
          This is not a get rich quick process or something of that sort.
        </p>
        <p>
          We are entrepreneurs, we know hard work, and I know you know that as
          well. We can take you from where you are to a whole new real of
          productivity and profits, but we do it through hard work and
          collaboration between our team and your team.
        </p>
      </div>
    </Wrapper>
  );
};

export default Warning;
