import React, { useEffect, useState, useMemo } from "react";
import "./BrowseSkills.css";
import Profile from "../../components/Profile/Profile";
import UserCard from "../../components/UserCard/UserCard";
import FilterPane from "../../components/FilterPane/FilterPane";
import Footer from "../../components/ui/Footer/Footer";
import SearchBar from "../../components/ui/SearchBar/SearchBar";
import { users } from "../../data/users";

const ITEMS_PER_PAGE = 4;

const BrowseSkills = ({
  currentUserId,
  requests,
  sendRequest,
  cancelRequest,
  acceptRequest,
  declineRequest,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allSkills, setAllSkills] = useState(() =>
    users.filter((u) => u.id !== currentUserId),
  );
  const [filteredSkills, setFilteredSkills] = useState(() =>
    users.filter((u) => u.id !== currentUserId),
  );

  const totalPages = Math.ceil(filteredSkills.length / ITEMS_PER_PAGE);

  const currentUsers = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredSkills.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredSkills, currentPage]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (query) => {
    setCurrentPage(1);
    if (!query) {
      setFilteredSkills(allSkills);
      return;
    }

    const q = query.toLowerCase();
    setFilteredSkills(
      allSkills.filter(
        (u) =>
          u.name.toLowerCase().includes(q) ||
          u.location.toLowerCase().includes(q) ||
          u.skills.some(
            (s) =>
              s.name.toLowerCase().includes(q) ||
              s.category.toLowerCase().includes(q),
          ),
      ),
    );
  };

  const handleApplyFilters = (filters) => {
    setCurrentPage(1);
    setFilteredSkills(
      allSkills.filter((u) => {
        const categoryMatch =
          !filters.categories.length ||
          u.skills.some((s) => filters.categories.includes(s.category));
        const modeMatch =
          !filters.modes.length ||
          u.skills.some((s) => s.modes?.some((m) => filters.modes.includes(m)));
        const locationMatch =
          !filters.locations.length || filters.locations.includes(u.location);
        return categoryMatch && modeMatch && locationMatch;
      }),
    );
  };

  const sentRequestsCount = requests.filter(
    (r) => r.fromUserId === currentUserId,
  ).length;
  const pendingRequestsCount = requests.filter(
    (r) => r.toUserId === currentUserId && r.status === "pending",
  ).length;

  return (
    <div className="browse-skills">
      <div className="browse-skills__search">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="browse-layout">
        <FilterPane skills={allSkills} onApply={handleApplyFilters} />

        <main className="main-content">
          <div className="skill-cards">
            {currentUsers.map((user) => {
              const hasRequested = requests.some(
                (r) => r.fromUserId === currentUserId && r.toUserId === user.id,
              );
              return (
                <UserCard
                  key={user.id}
                  user={user}
                  hasRequested={hasRequested}
                  onRequest={() => sendRequest(user)}
                  onCancel={() => cancelRequest(user.id)}
                />
              );
            })}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pagination__btn"
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    className={`pagination__btn ${
                      currentPage === page ? "active" : ""
                    }`}
                    onClick={() => goToPage(page)}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                className="pagination__btn"
                disabled={currentPage === totalPages}
                onClick={() => goToPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
          )}
        </main>

        <Profile
          currentUserId={currentUserId}
          requests={requests}
          onCancelRequest={cancelRequest}
          onAcceptRequest={acceptRequest}
          onDeclineRequest={declineRequest}
        />
      </div>

      <Footer />
    </div>
  );
};

export default BrowseSkills;
