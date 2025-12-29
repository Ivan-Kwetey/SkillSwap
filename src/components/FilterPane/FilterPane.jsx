import React, { useState, useMemo } from "react";
import "./FilterPane.css";
import FilterButton from "../ui/FilterButton/Filterbutton";
import Button from "../ui/Button/Button";

const FilterPane = ({ skills = [], onApply }) => {
  const [filters, setFilters] = useState({
    categories: [],
    locations: [],
    modes: [],
  });

  //options
  const categories = useMemo(() => {
    return [
      ...new Set(
        skills.flatMap((user) => user.skills.map((skill) => skill.category))
      ),
    ];
  }, [skills]);

  const locations = useMemo(() => {
    return [...new Set(skills.map((user) => user.location))];
  }, [skills]);

  const modes = useMemo(() => {
    return [
      ...new Set(
        skills.flatMap((user) => user.skills.flatMap((skill) => skill.modes))
      ),
    ];
  }, [skills]);

  //toggle
  const toggleFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  //clear
  const handleClear = () => {
    const cleared = {
      categories: [],
      locations: [],
      modes: [],
    };
    setFilters(cleared);
    onApply(cleared);
  };

  //apply
  const handleApply = () => {
    onApply(filters);
  };

  return (
    <aside className="filter-pane">
      <h3 className="filter-pane__title">Advanced search</h3>
      
      //category
      <section className="filter-section">
        <h4 className="filter-titles">Skill Category</h4>
        <div className="filter-options category-filter">
          {categories.map((cat) => (
            <FilterButton
              key={cat}
              label={cat}
              selected={filters.categories.includes(cat)}
              onClick={() => toggleFilter("categories", cat)}
            />
          ))}
        </div>
      </section>

      //location
      <section className="filter-section">
        <h4 className="filter-titles">Location</h4>
        <div className="filter-options location-filter">
          {locations.map((loc) => (
            <FilterButton
              key={loc}
              label={loc}
              selected={filters.locations.includes(loc)}
              onClick={() => toggleFilter("locations", loc)}
            />
          ))}
        </div>
      </section>

      //mode
      <section className="filter-section">
        <h4 className="filter-titles">Mode</h4>
        <div className="filter-options mode">
          {modes.map((mode) => (
            <FilterButton
              key={mode}
              label={mode}
              selected={filters.modes.includes(mode)}
              onClick={() => toggleFilter("modes", mode)}
            />
          ))}
        </div>
      </section>

      //actions
      <div className="filter-actions">
        <Button
          variant="clear-filters"
          onClick={handleClear}
          text="Clear filters"
        />
        <Button variant="apply-filters" onClick={handleApply} text="Apply" />
      </div>
    </aside>
  );
};

export default FilterPane;
