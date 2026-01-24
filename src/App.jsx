import React, { useState, useEffect } from "react";
import Landing from "./pages/Landing/Landing";
import Navbar from "./components/ui/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Home from "./pages/Home/Home.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import BrowseSkills from "./pages/BrowseSkills/BrowseSkills.jsx";
import MemberProfile from "./pages/MemberProfile/MemberProfile.jsx";
import { users } from "./data/users";

const App = () => {
  // placeholder for logged-in user
  const currentUserId = "user-1";
  const currentUser = users.find((u) => u.id === currentUserId);
  const currentUserName = currentUser?.name || "You";

  // Load requests from localStorage
  const [requests, setRequests] = useState(() => {
    const saved = localStorage.getItem("skillSwapRequests");
    const savedRequests = saved ? JSON.parse(saved) : [];

    // Demo incoming request that always appears fresh on reload
    const demoRequest = {
      id: "demo-incoming",
      fromUserId: "user-5",
      fromUserName: "Ethan Brown",
      toUserId: currentUserId,
      toUserName: "Joshua Smith",
      status: "pending",
      createdAt: Date.now(),
    };

    return [demoRequest, ...savedRequests];
  });

  // Save requests to localStorage whenever they change
  useEffect(() => {
    // Don't save the demo request to localStorage
    const nonDemoRequests = requests.filter((r) => r.id !== "demo-incoming");
    localStorage.setItem("skillSwapRequests", JSON.stringify(nonDemoRequests));
  }, [requests]);

  // SEND REQUEST
  const sendRequest = (toUser) => {
    // prevent duplicates
    if (
      requests.some(
        (r) => r.fromUserId === currentUserId && r.toUserId === toUser.id,
      )
    )
      return;

    setRequests((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        fromUserId: currentUserId,
        fromUserName: currentUserName,
        toUserId: toUser.id,
        toUserName: toUser.name,
        status: "pending",
        createdAt: Date.now(),
      },
    ]);
  };

  // CANCEL REQUEST
  const cancelRequest = (toUserId) => {
    setRequests((prev) =>
      prev.filter(
        (r) =>
          !(
            r.fromUserId === currentUserId &&
            r.toUserId === toUserId &&
            r.status === "pending"
          ),
      ),
    );
  };

  // ACCEPT REQUEST
  const acceptRequest = (fromUserId) => {
    setRequests((prev) =>
      prev.map((r) =>
        r.fromUserId === fromUserId && r.toUserId === currentUserId
          ? { ...r, status: "accepted" }
          : r,
      ),
    );
  };

  // DECLINE REQUEST
  const declineRequest = (fromUserId) => {
    setRequests((prev) =>
      prev.filter(
        (r) => !(r.fromUserId === fromUserId && r.toUserId === currentUserId),
      ),
    );
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/browse-skills"
          element={
            <BrowseSkills
              currentUserId={currentUserId}
              requests={requests}
              sendRequest={sendRequest}
              cancelRequest={cancelRequest}
              acceptRequest={acceptRequest}
              declineRequest={declineRequest}
            />
          }
        />

        <Route
          path="/members/:id"
          element={
            <MemberProfile
              currentUserId={currentUserId}
              requests={requests}
              sendRequest={sendRequest}
              cancelRequest={cancelRequest}
              acceptRequest={acceptRequest}
              declineRequest={declineRequest}
            />
          }
        />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
