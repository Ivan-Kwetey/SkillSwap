import React from "react";
import { DropdownIcon } from "../../../assets/Images";
import "./Dropdown.css"

const Dropdown = ({ label, options = [], onSelect }) => {
  return (
    <details className="dropdown">
      <summary className="dropdown-box">
        {label}
        <img src={DropdownIcon} alt="" className="dropdown-box__icon" />
      </summary>

      <div className="dropdown-menu">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            className="dropdown-options"
          >
            {option}
          </button>
        ))}
      </div>
    </details>
  );
};

export default Dropdown;
