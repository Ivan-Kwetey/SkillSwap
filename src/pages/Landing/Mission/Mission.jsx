import React from "react";
import "./Mission.css";
import Button from "../../../components/ui/Button/Button";

const Mission = ({ handleRegister }) => {
  return (
    <section className="mission" aria-labelledby="mission-title">
      <div className="mission__information">
        <div className="mission__description">
          <h2 id="mission-title" className="mission__title">
            Teach what you know. Learn what you love.
          </h2>
          <p className="mission__subtitle">
            SkillSwap connects people through meaningful skill exchange — no
            money, no pressure. Share your knowledge with others, discover new
            skills you’re curious about, and learn together through real
            connections, whether online or in person.
          </p>
        </div>
        <Button
          text="Join to swap"
          variant="mission"
          onClick={handleRegister}
          aria-label="Join SkillSwap to start exchanging skills"
        />
      </div>
    </section>
  );
};

export default Mission;
