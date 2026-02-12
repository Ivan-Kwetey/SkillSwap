import React from "react";
import Button from "../../../components/ui/Button/Button";
import "./Community.css";
import HighlightsCarousel from "../../../components/HighlightsCarousel/HighlightsCarousel";

const Community = ({ handleRegister }) => {
  return (
    <section className="community" aria-labelledby="community-title">
      <div className="community__description">
        <h2 className="community__title">Highlights from our community</h2>
        <h3 className="community__subtitle">
          Connect with people who want to learn what you already know
        </h3>
        <Button
          text="Discover more"
          variant="community"
          onClick={handleRegister}
          aria-label="Discover more about our community highlights"
        />
      </div>
      <HighlightsCarousel className="highlights-carousel-insert" />
    </section>
  );
};

export default Community;