import React from "react";
import "./UserName.css";

const capitalize = (text = "") =>
  text.length > 0 ? text.charAt(0).toUpperCase() + text.slice(1) : "";

const UserName = ({ label = "User", variant = "primary" }) => {
  return (
    <span
      className={`user-name user-name--${variant}`}
      aria-label={label}
    >
      {capitalize(label)}
    </span>
  );
};

export default UserName;
