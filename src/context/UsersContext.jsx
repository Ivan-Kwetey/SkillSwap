import { useState, useEffect } from "react";
import { UsersContext } from "./usersContextObject";
import { fetchUsers } from "../api/api";
import { normalizeUsers } from "../utils/usersHelpers";

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  useEffect(() => {
    fetchUsers(12)
      .then((data) => setUsers(normalizeUsers(data)))
      .catch(console.error)
      .finally(() => setLoadingUsers(false));
  }, []);

  return (
    <UsersContext.Provider value={{ users, loadingUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
