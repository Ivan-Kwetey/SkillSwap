import React from "react";
import GetStartedVideo from "../../../assets/videos/getStarted/skate.mp4";
import "./GetStarted.css";
import Button from "../../../components/ui/Button/Button";
import { getStartedContent } from "../../../data/getStartedContent";

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
          <Button text="Join to swap" variant="get-started" />
        </div>

        <div className="get-started__steps">
          <p className="get-started__steps-paragraph">
            Connect locally for hands-on skills or globally for online learning
            in 4 easy steps
          </p>
          <ol className="get-started__steps-process">
            {getStartedContent.map(({ id, title, description }) => (
              <li key={id} className="get-started__steps-item">
                <div className="get-started__steps-header">
                  <span className="get-started__steps-number" />
                  <h3 className="get-started__steps-title">{title}</h3>
                </div>
                <p className="get-started__steps-description">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
