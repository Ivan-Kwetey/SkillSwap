import React from "react";
import "./Mission.css";
import Button from "../../../components/ui/Button/Button";

const Mission = () => {
  return (
    <section className="mission">
      <div className="mission__description">
        <h2 className="mission__title">
          Teach what you know. Learn what you love.
        </h2>
        <p className="mission__subtitle">
          SkillSwap connects people through meaningful skill exchange, no money,
          no pressure. Share your knowledge with others, discover new skills
          you’re curious about, and learn together through real connections,
          whether online or in person
        </p>
      </div>
      <Button text="Join to swap" variant="mission" />
    </section>
  );
};

export default Mission;
