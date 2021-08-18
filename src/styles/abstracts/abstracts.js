import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
      // COLORS
    --body-background: #ffffff;
    --color-primary: #4587D5;
    --color-primary-dark: #007BFF;
;   --black: #000000;
    --white: #ffffff;

    //FONT FAMILY
    --title-font: "Open Sans", sans-serif;
    --body-font: "Open Sans", sans-serif;
    --bold: 700;

    // FONT-SIZES
    --basic-font-size: 2rem;
    --mobile-font-size: 1.5rem;

    --big-title: 4.8rem;
    --title-font-size: 2.8rem;
    --mobile-title-font-size: 3rem;
    --small-title: 2.5rem;
    --big-text: 2rem;

    //SECTIONS
    --section-width: 70%;
    --laptop-container: 80%;
  }
`;
