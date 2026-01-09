import React from "react";
import "./UserRating.css";
import { Star } from "../../../assets/Images";

const UserRating = ({ value , variant}) => {
  return <div className={`user-rating user-rating--${variant}`}>
    <img src={Star} alt="" />{value} </div>;
};

export default UserRating;
