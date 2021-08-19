// gatsby-ssr.js
const React = require("react");
require("./src/scss/index.scss");
const Layout = require("./src/layout/Layout").default;

exports.wrapRootElement = ({ element }) => {
  return (
    <>
      <Layout>{element}</Layout>
    </>
  );
};
