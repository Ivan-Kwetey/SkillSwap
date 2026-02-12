import React from "react";
import "./FilterButton.css";

const FilterButton = ({ label, selected, onClick }) => {
  return (
    <button
      className={`filter-button filter-button--${selected ? "selected" : ""}`}
      onClick={onClick}
      type="button"
      aria-pressed={selected}
    >
      {label}
    </button>
  );
};

export default FilterButton;
