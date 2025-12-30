import React from "react";
import "./SkillSearch.css";

import SearchBar from "../ui/SearchBar/SearchBar";
import ModeDropdownBox from "../ui/ModeDropdownBox/ModeDropdownBox";
import LocationDropdownBox from "../ui/LocationDropdownBox/LocationDropdownBox";

const SkillSearch = () => {
  return (
    <div className="skill-search">
      <SearchBar />
      <div className="skill-search__dropdowns">
        <ModeDropdownBox />
        <LocationDropdownBox />
      </div>
    </div>
  );
};

export default SkillSearch;
