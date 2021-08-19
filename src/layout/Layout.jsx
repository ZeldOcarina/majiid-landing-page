import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalStyles from "../styles/global-styles";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      {children}
      <Footer>I am a footer</Footer>
    </>
  );
};

export default Layout;
