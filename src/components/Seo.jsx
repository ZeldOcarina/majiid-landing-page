import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ title }) => {
  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <title>{title || "Viva Digital"}</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="description"
        content="The #1 Mentor in the world for dental practices. Our program adds $500,000 to $1,000,000 for each office you manage in 12 months or less."
      />
      <meta name="author" content="Mattia Rasulo" />
    </Helmet>
  );
};

export default Seo;
