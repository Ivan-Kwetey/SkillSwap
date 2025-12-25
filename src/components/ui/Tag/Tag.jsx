import React from "react";
import "./Tag.css"

const Tag = ({ label, variant = "primary" }) => {
  return (
    <span className={`tag tag--${variant || label.toLowerCase()}`}>
      {label}
    </span>
  );
};
export default Tag;
