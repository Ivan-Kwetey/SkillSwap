import React from "react";
import Landing from "./pages/Landing/Landing";
import Navbar from "./components/ui/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import BrowseSkills from "./pages/BrowseSkills/BrowseSkills.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/browse-skills" element={<BrowseSkills />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            // <ProtectedRoute>
              <Home />
            // </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
