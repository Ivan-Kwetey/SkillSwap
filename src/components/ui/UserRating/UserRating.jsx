import React from "react";
import "./UserRating.css";
import { Star } from "../../../assets/Images";

const UserRating = ({ value }) => {
  return <div className="user-rating">
    <img src={Star} alt="" />{value}</div>;
};

export default UserRating;
