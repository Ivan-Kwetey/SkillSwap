import React from "react";
import GetStartedVideo from "../../../assets/videos/getStarted/skate.mp4";
import "./GetStarted.css";
import Button from "../../../components/ui/Button/Button";
import { getStartedContent } from "../../../data/getStartedContent";

const GetStarted = ({ handleRegister }) => {
  return (
    <section className="get-started" aria-labelledby="get-started-title">
      <video
        autoPlay
        playsInline
        muted
        loop
        src={GetStartedVideo}
        className="get-started__video"
      />
      <div className="get-started__overlay">
        {/* Main CTA */}
        <div className="get-started__description">
          <h2 id="get-started-title" className="get-started__title">
            Join SkillSwap & start exchanging
          </h2>
          <Button
            text="Join to swap"
            variant="get-started"
            onClick={handleRegister}
            aria-label="Join SkillSwap to start exchanging skills"
          />
        </div>
        <div className="get-started__steps">
          <p className="get-started__steps-paragraph">
            Connect locally for hands-on skills or globally for online learning
            in 4 easy steps:
          </p>

          <ol className="get-started__steps-process">
            {getStartedContent.map(({ id, title, description }) => (
              <li key={id} className="get-started__steps-item">
                <header className="get-started__steps-header">
                  <span
                    className="get-started__steps-number"
                    aria-hidden="true"
                  />
                  <h3 className="get-started__steps-title">{title}</h3>
                </header>
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
