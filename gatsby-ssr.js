// gatsby-ssr.js
const React = require("react");
require("./src/scss/index.scss");
const GlobalStyles = require("./src/styles/global-styles").default;
const { NoVideoContextProvider } = require("./src/context/NoVideoContext");

exports.wrapPageElement = ({ element }) => {
  return (
    <NoVideoContextProvider>
      <GlobalStyles />
      {element}
    </NoVideoContextProvider>
  );
};
