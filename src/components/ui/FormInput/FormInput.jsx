import React from "react";
import "./FormInput.css";

const FormInput = ({
  value,
  onChange,
  variant,
  placeholder,
  type = "text",
}) => {
  return (
    <input
      className={`form-input form-input--${variant}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default FormInput;
