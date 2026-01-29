import React, { useState, useMemo } from "react";
import "./FilterPane.css";
import FilterButton from "../ui/FilterButton/FilterButton";
import Button from "../ui/Button/Button";
import {useIsDesktop} from "../../hooks/useIsDesktop";
import { CloseIcon } from "../../assets/Images";


const FilterPane = ({ skills = [], onApply, isOpen = false, onClose }) => {
  const isDesktop = useIsDesktop(1180);

  const [filters, setFilters] = useState({
    categories: [],
    locations: [],
    modes: [],
  });

  // Unique skill categories
  const categories = useMemo(() => {
    const cats = skills.flatMap(
      (user) =>
        user.skills?.map((skill) => skill.category).filter(Boolean) || [],
    );
    return [...new Set(cats)];
  }, [skills]);

  // Unique locations
  const locations = useMemo(() => {
    return [...new Set(skills.map((user) => user.location).filter(Boolean))];
  }, [skills]);

  // Unique modes
  const modes = useMemo(() => {
    const allModes = skills.flatMap((user) =>
      user.skills?.flatMap((skill) => skill.modes?.filter(Boolean) || []),
    );
    return [...new Set(allModes)];
  }, [skills]);

  // Toggle a filter option
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
    <aside className={`filter-pane ${isOpen ? "filter-pane--open" : ""}`}>
      {!isDesktop && (
        <button className="filter-pane__close" onClick={onClose}>
          <img src={CloseIcon} alt="" />
        </button>
      )}

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
        <div className="filter-options mode-filter">
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
