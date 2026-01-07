import React from "react";
import "./UserName.css";

const capitalize = (text = "") => text.charAt(0).toUpperCase() + text.slice(1);

const UserName = ({ label, variant = "primary" }) => {
  return (
    <span className={`user-name user-name--${variant}`}>
      {capitalize(label)}
    </span>
  );
};

export default UserName;
