// gatsby-ssr.js
const React = require("react");
require("./src/scss/index.scss");
const GlobalStyles = require("./src/styles/global-styles").default;
const NoVideoContext = require("./src/context/NoVideoContext.jsx").default;

exports.wrapPageElement = ({ element }) => {
  const params = new URLSearchParams(window.location.search);

  const noVideo = params.get("noVideo") === "true";

  return (
    <>
      <GlobalStyles />
      <NoVideoContext.Provider value={noVideo}>{element}</NoVideoContext.Provider>
    </>
  );
};
