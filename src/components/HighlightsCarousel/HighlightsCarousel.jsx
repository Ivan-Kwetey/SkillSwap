import React from "react";
import { highlights } from "../../data/highlights";
import HighlightCard from "../HighlightCard/HighlightCard";
import "./HighlightsCarousel.css";

const HighlightsCarousel = () => {
  return (
    <section className="highlights">
      <div className="highlights__track">
        {highlights.map((item) => (
          <HighlightCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default HighlightsCarousel;
