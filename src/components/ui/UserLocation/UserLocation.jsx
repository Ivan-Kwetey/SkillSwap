import React from "react";
import "./UserLocation.css";

const UserLocation = ({ city, state, variant = "primary" }) => {
  return (
    <span className={`location location--${variant}`}>
      {city}, {state}
    </span>
  );
};

export default UserLocation;
