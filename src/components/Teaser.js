import React from "react";
import ReactPlayer from "react-player";

const Teaser = () => {
  const teaser = "https://youtu.be/ct-R1fl5m0U";
  return (
    <div className="w-11/12">
      <ReactPlayer
        url={teaser}
        style={{ border: "2px solid white", margin: "auto" }}
        width="95%"
      />
    </div>
  );
};

export default Teaser;
