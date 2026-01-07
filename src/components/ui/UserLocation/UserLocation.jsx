import React from "react";
import "./UserLocation.css";

const UserLocation = ({ city, country, variant = "primary" }) => {
  return (
    <span className={`location location--${variant}`}>
      {city} {country}
    </span>
  );
};

export default UserLocation;
