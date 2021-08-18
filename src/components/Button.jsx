import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  text-transform: capitalize;
  background-color: var(--color-primary-dark);
  color: var(--white);
  padding: 2rem 4rem;
  border-radius: 0.75rem;
  border: none;
  font-weight: 500;
  font-size: 1.6rem;
`;

const Button = ({ text, className, children }) => {
  return <Wrapper className={className || "btn"}>{text || children}</Wrapper>;
};

export default Button;
