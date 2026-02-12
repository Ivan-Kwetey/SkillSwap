import React from "react";
import "./Hero.css";
import { Background, Heroart } from "../../../assets/Images";
import Button from "../../../components/ui/Button/Button";

const Hero = ({ handleRegister }) => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <div className="hero__heading">
          <h1 id="hero-title" className="hero__title">
            SkillSwap
          </h1>

          <div className="hero__description">
            <p className="hero__description-text hero__description-text-first">
              Join the future of learning where knowledge is currency and everyone wins.
            </p>

            <img
              className="hero__illustration"
              src={Heroart}
              alt="Illustration showing people exchanging skills"
            />

            <p className="hero__description-text hero__description-text-second">
              SkillSwap connects people through meaningful skill exchange.
            </p>
          </div>
        </div>

        <div className="hero__cta">
          <h2 className="hero__subtitle">
            No money to learn a skill? No problem!
          </h2>
          <Button
            text="Start here"
            variant="hero"
            onClick={handleRegister}
            aria-label="Start using SkillSwap"
          />
        </div>
      </div>

      <img
        className="hero__background-image"
        src={Background}
        alt=""
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;
