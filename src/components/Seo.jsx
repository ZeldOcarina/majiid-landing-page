import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";

const Seo = (props) => {
  const location = useLocation();
  const DESCRIPTION =
    "The #1 Mentor in the world for dental practices. Our program adds $500,000 to $1,000,000 for each office you manage in 12 months or less.";

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <title>{props.title || "Viva Digital"}</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content={DESCRIPTION} />
      <meta name="author" content="Mattia Rasulo" />
      <meta property="og:url" content={location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title || "Viva Digital"} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={`${location.origin}/og-image.png`} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="630" />
    </Helmet>
  );
};

export default Seo;
