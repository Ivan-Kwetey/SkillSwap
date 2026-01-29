import React from "react";
import "./Avatar.css";
import { DefaultAvatar } from "../../../assets/Images";
const Avatar = ({ src, alt = "User avatar", variant = "default" }) => {
  return (
    <img
      src={src || DefaultAvatar}
      alt={alt}
      className={`highlight-card__avatar highlight-card__avatar--${variant}`}
    />
  );
};

export default Avatar;
