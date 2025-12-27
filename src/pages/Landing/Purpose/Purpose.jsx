import React from "react";
import "./purpose.css";
import { purposeContent } from "../../../data/purposeContent";

const Purpose = () => {
  return (
    <section className="purpose">
      <h2 className="purpose__title">Why choose SkillSwap?</h2>
      <div className="purpose__items">
        {purposeContent.map(({ id, title, description }) => (
          <article key={id} className="purpose__item">
            <h3 className="purpose__subtitle">{title}</h3>
            <p className="purpose__description">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Purpose;
