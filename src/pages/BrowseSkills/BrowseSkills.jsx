import React, { useEffect, useState } from "react";
import "./BrowseSkills.css";
import Profile from "../../components/Profile/Profile";
import SkillSearch from "../../components/SkillSearch/SkillSearch";
import UserCard from "../../components/ui/UserCard/UserCard";
import FilterPane from "../../components/FilterPane/FilterPane";
import Footer from "../../components/ui/Footer/Footer";
import skillsData from "../../data/skills";
import { BrowseGraphic } from "../../assets/Images";

const BrowseSkills = () => {
  const [allSkills, setAllSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);

  useEffect(() => {
    setAllSkills(skillsData);
    setFilteredSkills(skillsData);
  }, []);

  const handleApplyFilters = (filters) => {
    const filtered = allSkills.filter((user) => {
      const categoryMatch =
        filters.categories.length === 0 ||
        user.skills.some((skill) =>
          filters.categories.includes(skill.category)
        );

      const modeMatch =
        filters.modes.length === 0 ||
        user.skills.some((skill) =>
          skill.modes.some((mode) => filters.modes.includes(mode))
        );

      const locationMatch =
        filters.locations.length === 0 ||
        filters.locations.includes(user.location);

      return categoryMatch && modeMatch && locationMatch;
    });

    setFilteredSkills(filtered);
  };

  return (
    <div className="browse-skills">
      <div className="browse-skills__layout">
        <div className="browse-skills__content">
          <FilterPane
            className="browse-skills__filter-pane"
            skills={allSkills}
            onApply={handleApplyFilters}
          />

          {/* <SkillSearch /> */}

          {/* <div className="browse-skills__results">
            <div className="browse-skills__user-card">
              {filteredSkills.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          </div> */}
        </div>
        <Profile />
      </div>
      <img src={BrowseGraphic} alt="" className="browse-skills__illustration" />
      {/* <Footer /> */}
    </div>
  );
};

export default BrowseSkills;
