import React, { useState, useMemo } from "react";
import "./FilterPane.css";
import FilterButton from "../ui/FilterButton/FilterButton";
import Button from "../ui/Button/Button";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import { CloseIcon } from "../../assets/Images";

const FilterPane = ({ skills = [], onApply, isOpen = false, onClose }) => {
  const isDesktop = useIsDesktop(1180);

  const [filters, setFilters] = useState({
    categories: [],
    locations: [],
    modes: [],
  });

  const categories = useMemo(() => {
    const cats = skills.flatMap(
      (user) =>
        user.skills?.map((skill) => skill.category).filter(Boolean) || [],
    );
    return [...new Set(cats)];
  }, [skills]);

  const locations = useMemo(() => {
    return [...new Set(skills.map((user) => user.location).filter(Boolean))];
  }, [skills]);

  const modes = useMemo(() => {
    const allModes = skills.flatMap((user) =>
      user.skills?.flatMap((skill) => skill.modes?.filter(Boolean) || []),
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
    <aside className={`filter-pane ${isOpen ? "filter-pane--open" : ""}`}>
      {!isDesktop && (
        <button className="filter-pane__close" onClick={onClose}>
          <img src={CloseIcon} alt="close icon" />
        </button>
      )}

      <header className="filter-pane__header">
        <h3 className="filter-pane__title">Search skills</h3>
      </header>

      {/* Skill Category */}
      <section className="filter-pane__section">
        <h4 className="filter-pane__section-title">Skill Category</h4>
        {categories.length > 0 ? (
          <ul className="filter-pane__options filter-pane__options--category">
            {categories.map((cat, idx) => (
              <li key={`${cat}-${idx}`}>
                <FilterButton
                  label={cat}
                  selected={filters.categories.includes(cat)}
                  onClick={() => toggleFilter("categories", cat)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <span className="filter-pane__empty">No categories available</span>
        )}
      </section>

      {/* Location */}
      <section className="filter-pane__section">
        <h4 className="filter-pane__section-title">Location</h4>
        {locations.length > 0 ? (
          <ul className="filter-pane__options filter-pane__options--location">
            {locations.map((loc, idx) => (
              <li key={`${loc}-${idx}`}>
                <FilterButton
                  label={loc}
                  selected={filters.locations.includes(loc)}
                  onClick={() => toggleFilter("locations", loc)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <span className="filter-pane__empty">No locations available</span>
        )}
      </section>

      {/* Mode */}
      <section className="filter-pane__section">
        <h4 className="filter-pane__section-title">Mode</h4>
        {modes.length > 0 ? (
          <ul className="filter-pane__options filter-pane__options--mode">
            {modes.map((mode, idx) => (
              <li key={`${mode}-${idx}`}>
                <FilterButton
                  label={mode}
                  selected={filters.modes.includes(mode)}
                  onClick={() => toggleFilter("modes", mode)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <span className="filter-pane__empty">No modes available</span>
        )}
      </section>

      {/* Actions */}
      <div className="filter-pane__actions">
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
