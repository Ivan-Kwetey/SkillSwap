import React, { useMemo } from "react";
import Dropdown from "../Dropdown/Dropdown";
import users from "../../../data/skills";

const LocationDropdown = ({ onSelect }) => {
  // Extract unique locations from user data
  const locations = useMemo(() => {
    const allLocations = users.map((user) => user.location);
    return [...new Set(allLocations)]; // remove duplicates
  }, []);

  return <Dropdown label="Location" options={locations} onSelect={onSelect} />;
};

export default LocationDropdown;
