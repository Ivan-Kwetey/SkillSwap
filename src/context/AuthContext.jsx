import { createContext, useContext, useState } from "react";

// Create the auth context
const AuthContext = createContext();

// Provider wraps the app and gives access to auth state
export const AuthProvider = ({ children }) => {
  // Initialize user from localStorage (persist login)
const [user, setUser] = useState(() => {
  try {
    return JSON.parse(localStorage.getItem("user")) || null;
  } catch {
    return null;
  }
});


  // Simulate login
  const login = (email) => {
    const fakeUser = {
      email,
      name: email.split("@")[0],
    };
    localStorage.setItem("user", JSON.stringify(fakeUser));
    setUser(fakeUser);
  };

  // Simulate signup
  const signup = (email, name) => {
    const fakeUser = { email, name };
    localStorage.setItem("user", JSON.stringify(fakeUser));
    setUser(fakeUser);
  };

  // Logout clears auth state
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for consuming auth context
export const useAuth = () => useContext(AuthContext);
