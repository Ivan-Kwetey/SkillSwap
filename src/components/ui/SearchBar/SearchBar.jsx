import React from "react";
import { SearchIcon } from "../../../assets/Images";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-bar__input">
        <img src={SearchIcon} alt="" className="search-bar__input-icon" />
        <input
          className="search-bar__input-field"
          type="text"
          placeholder="What do you want to learn?"
        ></input>
      </div>
    </div>
  );
};

export default SearchBar;
