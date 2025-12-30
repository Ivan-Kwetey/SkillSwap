import React from "react";
import "./ModeDropdownBox.css";
import Dropdown from "../Dropdown/Dropdown";

const ModeDropdownBox = () => {
  const modes = ["Online", "In-Person"];

  return (
    <Dropdown
      options={modes}
      label="Mode"
      onSelect={(selected) => console.log("Selected Mode:", selected)}
    />
  );
};

export default ModeDropdownBox;
