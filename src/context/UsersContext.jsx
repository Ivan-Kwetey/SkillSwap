// src/context/UsersContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { fetchUsers } from "../api/api";

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  useEffect(() => {
    fetchUsers(12)
      .then((data) => {
        const normalized = data.map((u, index) => ({
          id: `user-${index + 1}`,
          name: `${u.name.first} ${u.name.last}`,
          avatar: u.picture.medium,
          location: u.location.country,
          rating: (Math.random() * 2 + 3).toFixed(1),
          skills:
            index % 3 === 0
              ? [{ name: "UI/UX Design", category: "Design", modes: ["remote"] }]
              : index % 3 === 1
                ? [{ name: "JavaScript", category: "Programming", modes: ["remote"] }]
                : [
                    { name: "Python", category: "Programming", modes: ["in-person"] },
                    { name: "Illustration", category: "Design", modes: ["remote"] },
                  ],
        }));

        setUsers(normalized);
      })
      .catch(console.error)
      .finally(() => setLoadingUsers(false));
  }, []);

  return (
    <UsersContext.Provider value={{ users, loadingUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
