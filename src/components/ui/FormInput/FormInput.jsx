import React from "react";

export default function FormInput({
  value,
  onChange,
  placeholder,
  id,
  name,
  type = "text",
  autoComplete,
  className,
  label, 
}) {
  return (
    <div className="form-input-wrapper">
      {label && (
        <label htmlFor={id} className="form-input-label">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={className}
      />
    </div>
  );
}
