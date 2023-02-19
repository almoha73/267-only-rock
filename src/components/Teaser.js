import React from "react";
import ReactPlayer from "react-player";

const Teaser = () => {
  const teaser = "https://youtu.be/ct-R1fl5m0U";
  return (
    <div className="w-full">
      <ReactPlayer
        url={teaser}
         style={{margin: "0 auto" }}
        width="100%"
      />
    </div>
  );
};

export default Teaser;
