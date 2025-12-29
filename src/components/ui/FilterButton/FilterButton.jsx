import React from "react";
import "./FilterButton.css";

const FilterButton = ({ label, selected, onClick }) => {
  return (
    <button
      className={`filter-button filter-button--${selected ? "selected" : ""}`}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
};

export default FilterButton;
