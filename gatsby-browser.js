const React = require("react");
require("./src/scss/index.scss");
const Layout = require("./src/layout/Layout").default;

exports.wrapRootElement = ({ element }) => {
  console.log("Running this");
  return (
    <>
      <Layout>{element}</Layout>
    </>
  );
};
