import React from "react";
import Landing from "./pages/Landing/Landing";
import Navbar from "./components/ui/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import BrowseSkills from "./pages/BrowseSkills/BrowseSkills.jsx";
import MemberProfile from "./pages/MemberProfile/MemberProfile.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browse-skills" element={<BrowseSkills />} />
        <Route path="/member" element={<MemberProfile/>} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
