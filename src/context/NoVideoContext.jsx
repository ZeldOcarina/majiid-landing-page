import React, { useState, useEffect } from "react";

const NoVideoContext = React.createContext(false);

function NoVideoContextProvider(props) {
  const [noVideo, setNoVideo] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setNoVideo(params.get("noVideo") === "true");
  }, []);

  return <NoVideoContext.Provider value={noVideo}>{props.children}</NoVideoContext.Provider>;
}

export default NoVideoContext;
export { NoVideoContextProvider };
