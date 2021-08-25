import React from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";
import respond from "../styles/abstracts/mediaqueries";
import { Link } from "gatsby";

import useSiteMetadata from "../hooks/use-site-metadata";

const InnerWrapper = styled.section`
  background-color: var(--color-primary);
  color: var(--white);
  text-align: center;
  padding: 8rem 0;

  h1 {
    color: var(--white);
    padding: 0;
    margin: 1rem 0;
    text-align: center;
  }
`;

const Wrapper = styled.nav`
  background-color: var(--color-primary);
  color: var(--white);
  padding: 1rem 0;
  font-size: 1.6rem;

  .container {
    display: flex;
    justify-content: flex-end;

    ${respond(
      "phone-port",
      css`
        justify-content: center;
      `
    )}
  }

  .ul {
    display: flex;
    list-style: none;
    gap: 3rem;
    text-transform: capitalize;
  }

  .link {
    color: var(--white);
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${darken(0.1, "#fff")};
    }
  }
`;

const Navbar = ({ location }) => {
  const { navbarLinks } = useSiteMetadata();
  if (location?.location?.pathname === "/") {
    return (
      <Wrapper>
        <div className="container">
          <ul className="ul">
            {navbarLinks.map(({ name, url }, i) => {
              return (
                <li key={i} className="li">
                  <Link to={`${url}`} className="link">
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Wrapper>
    );
  }
  return (
    <InnerWrapper>
      <div className="container">
        <span>Viva Program</span>
        <h1>Call Prep Guide</h1>
        <p>Everything you’ll need to prepare for your call with us.</p>
      </div>
    </InnerWrapper>
  );
};

export default Navbar;
