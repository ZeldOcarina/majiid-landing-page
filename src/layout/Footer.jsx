import React from "react";
import styled from "styled-components";

import { Link } from "gatsby";
import { darken } from "polished";

import facebookIcon from "../images/icons/fb.svg";
import instagramIcon from "../images/icons/ig.svg";
import twitterIcon from "../images/icons/twitter.svg";

const Wrapper = styled.footer`
  background-color: var(--color-primary);
  color: var(--white);
  padding: 5rem 0;
  font-size: 1.8rem;

  .top-container {
    display: flex;
    justify-content: space-between;
  }

  a {
    color: var(--white);

    :hover {
      color: ${darken(0.1, "#fff")};
    }
  }

  .icons-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;

    img {
      height: 2.5rem;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <div className="container top-container">
        <div>
          &copy; {new Date().getFullYear()} Viva Concepts. All Rights Reserved.
        </div>
        <div>
          <Link to="/privacy">Privacy</Link>
        </div>
      </div>
      <div className="container icons-container">
        <a href="https://facebook.com">
          <img src={facebookIcon} alt="facebook" />
        </a>
        <a href="https://instagram.com">
          <img src={instagramIcon} alt="instagram" />
        </a>
        <a href="https://twitter.com">
          <img src={twitterIcon} alt="twitter" />
        </a>
      </div>
    </Wrapper>
  );
};

export default Footer;
