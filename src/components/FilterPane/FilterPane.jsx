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

  // Unique categories from user.skills
  const categories = useMemo(() => {
    const cats = skills.flatMap((user) =>
      user.skills?.map((skill) => skill.category).filter(Boolean) || []
    );
    return [...new Set(cats)];
  }, [skills]);

  // Unique locations from user.location
  const locations = useMemo(() => {
    return [...new Set(skills.map((user) => user.location).filter(Boolean))];
  }, [skills]);

  // Unique modes from user.skills.modes
  const modes = useMemo(() => {
    const allModes = skills.flatMap((user) =>
      user.skills?.flatMap((skill) => skill.modes?.filter(Boolean) || [])
    );
    return [...new Set(allModes)];
  }, [skills]);

  const toggleFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  const handleClear = () => {
    const cleared = { categories: [], locations: [], modes: [] };
    setFilters(cleared);
    onApply(cleared);
  };

  const handleApply = () => {
    onApply(filters);
  };

  return (
    <aside className="filter-pane">
      <div className="filter-pane__header">
        <h3 className="filter-pane__title">Search skills</h3>
      </div>

      {/* Skill Category */}
      <section className="filter-section">
        <h4 className="filter-titles">Skill Category</h4>
        <div className="filter-options category-filter">
          {categories.length > 0 ? (
            categories.map((cat, idx) => (
              <FilterButton
                key={`${cat}-${idx}`}
                label={cat}
                selected={filters.categories.includes(cat)}
                onClick={() => toggleFilter("categories", cat)}
              />
            ))
          ) : (
            <span className="filter-empty">No categories available</span>
          )}
        </div>
      </section>

      {/* Location */}
      <section className="filter-section">
        <h4 className="filter-titles">Location</h4>
        <div className="filter-options location-filter">
          {locations.length > 0 ? (
            locations.map((loc, idx) => (
              <FilterButton
                key={`${loc}-${idx}`}
                label={loc}
                selected={filters.locations.includes(loc)}
                onClick={() => toggleFilter("locations", loc)}
              />
            ))
          ) : (
            <span className="filter-empty">No locations available</span>
          )}
        </div>
      </section>

      {/* Mode */}
      <section className="filter-section">
        <h4 className="filter-titles">Mode</h4>
        <div className="filter-options mode">
          {modes.length > 0 ? (
            modes.map((mode, idx) => (
              <FilterButton
                key={`${mode}-${idx}`}
                label={mode}
                selected={filters.modes.includes(mode)}
                onClick={() => toggleFilter("modes", mode)}
              />
            ))
          ) : (
            <span className="filter-empty">No modes available</span>
          )}
        </div>
      </section>

      {/* Actions */}
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
