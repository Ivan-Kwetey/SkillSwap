import React from "react";
import GetStartedVideo from "../../../assets/videos/getStarted/skate.mp4";
import "./GetStarted.css";
import Button from "../../../components/ui/Button/Button";

const GetStarted = () => {
  return (
    <section className="get-started">
      <video
        autoPlay
        playsInline
        muted
        loop
        src={GetStartedVideo}
        className="get-started__video"
      ></video>
      <div className="get-started__overlay">
        <div className="get-started__description">
          <h2 className="get-started__title">
            Join SkillSwap start exchanging
          </h2>
          <Button text="Join to swap" variant="get-started"/>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
