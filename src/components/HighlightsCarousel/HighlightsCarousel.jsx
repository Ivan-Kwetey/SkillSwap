import React from "react";
import { highlights } from "../../data/highlights";
import HighlightCard from "../HighlightCard/HighlightCard";
import "./HighlightsCarousel.css";

const HighlightsCarousel = () => {
  return (
    <section className="highlights" aria-label="User highlight videos">
      <div className="highlights__track" role="list">
        {highlights.map((item) => (
          <HighlightCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default HighlightsCarousel;
