import React from "react";
import "./UserRating.css";
import { Star } from "../../../assets/Images";

const UserRating = ({ value, variant = "primary" }) => {
  return (
    <div
      className={`user-rating user-rating--${variant}`}
      role="img"
      aria-label={`User rating: ${value} stars`}
    >
      <img src={Star} alt="" aria-hidden="true" />
      <span>{value}</span>
    </div>
  );
};

export default UserRating;
