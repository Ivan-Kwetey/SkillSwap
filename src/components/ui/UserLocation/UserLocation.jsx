import React from "react";
import "./UserLocation.css";

const UserLocation = ({ city, country, variant = "primary" }) => {
  return (
    <span
      className={`location location--${variant}`}
      aria-label={`${city || ""} ${country || ""}`.trim()}
    >
      {city} {country}
    </span>
  );
};

export default UserLocation;
