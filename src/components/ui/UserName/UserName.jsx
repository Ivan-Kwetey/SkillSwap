import React from "react";
import "./UserName.css"

const UserName = ({ label, variant="primary"}) => {
  return <span className={`user-name user-name--${variant}`}>{label}</span>;
};

export default UserName;
