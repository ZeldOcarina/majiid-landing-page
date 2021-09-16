import React from "react";
import styled, { css } from "styled-components";
import respond from "../../styles/abstracts/mediaqueries";

const StyledCallIntro = styled.div`
  ul {
    width: 50%;
    margin: 4rem auto 0 auto;

    ${respond(
      "phone-port",
      css`
        width: 100%;
        list-style: inside;
      `
    )}

    li {
      ${respond(
        "phone-port",
        css`
          margin: 1rem 0;
        `
      )}
    }
  }
`;

const CallIntro = () => {
  return (
    <StyledCallIntro>
      <div className="container">
        <ul>
          <li>This meeting is all about your ROI.</li>
          <li>Add $500,000 to $1,000,000 in additional RECURRING revenue to your office (for each office you own).</li>
          <li>Structure your business so that it works for you instead of you working for it.</li>
        </ul>
      </div>
    </StyledCallIntro>
  );
};

export default CallIntro;
