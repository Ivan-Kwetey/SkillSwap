import React from "react";
import "./Location.css";

const Location = ({ city, state, variant = "primary" }) => {
  return (
    <span className={`location location--${variant}`}>
      {city}, {state}
    </span>
  );
};

export default Location;
