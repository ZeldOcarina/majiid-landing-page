import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { darken } from "polished";
import respond from "../styles/abstracts/mediaqueries";

import useSiteMetadata from "../hooks/use-site-metadata";

const Wrapper = styled.nav`
  background-color: var(--color-primary);
  color: var(--white);
  padding: 3rem 0;

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

const Navbar = () => {
  const { navbarLinks } = useSiteMetadata();

  return (
    <Wrapper>
      <div className="container">
        <ul className="ul">
          {navbarLinks.map(({ name, url }, i) => {
            return (
              <li key={i} className="li">
                <Link to={`/${url}`} className="link">
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Navbar;
