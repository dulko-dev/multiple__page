import React from "react";
import bg from "../assets/welcome-bg.mp4";

const BackgroundVideo = () => {
  return (
    <video
      autoPlay="autoplay"
      loop="loop"
      muted
      style={{
        objectFit: "cover",
        position: "fixed",
        minWidth: "100%",
        minHeight: "100%",
        top: "0",
        left: "0",
        zIndex: "-1",
      }}
    >
      <source src={bg} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;
