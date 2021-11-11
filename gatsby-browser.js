// gatsby-ssr.js
import React from "react";
import "./src/scss/index.scss";
import GlobalStyles from "./src/styles/global-styles";
import { NoVideoContextProvider } from "./src/context/NoVideoContext";

export const wrapPageElement = ({ element }) => {
  return (
    <NoVideoContextProvider>
      <GlobalStyles />
      {element}
    </NoVideoContextProvider>
  );
};
