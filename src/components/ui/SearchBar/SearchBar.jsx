import React from "react";
import { SearchIcon } from "../../../assets/Images";
import "./SearchBar.css";
import FormInput from "../FormInput/FormInput";

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <label htmlFor="search" className="search-bar__input">
        <img
          src={SearchIcon}
          alt="search icon"
          className="search-bar__input-icon"
        />
        <FormInput
          className="search-bar__input-field"
          type="text"
          id="search"
          name="search"
          placeholder="What do you want to learn?"
          autoComplete="off"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchBar;
