import React from "react";
import Button from "../../../components/ui/Button/Button";
import "./Community.css"
import HighlightsCarousel from "../../../components/HighlightsCarousel/HighlightsCarousel";


const Community = () => {
  return (
    <section className="community">
      <div className="community__description">
        <h2 className="community__title">Highlights from our community</h2>
        <h3 className="community__subtitle">
          Connect with people who want to learn what you already know
        </h3>
        <Button text="Discover more" variant="community" />
      </div>
      <HighlightsCarousel className="highlights-carousel-insert" />
    </section>
  );
};

export default Community;
