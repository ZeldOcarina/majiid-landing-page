import styled from "styled-components";

const Hr = styled.hr`
  height: 1px;
  margin: 4rem auto 0 auto;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  width: ${({ width }) => width || "100%"};
`;

export default Hr;
