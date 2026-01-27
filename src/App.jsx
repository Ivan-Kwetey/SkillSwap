import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/ui/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Home from "./pages/Home/Home.jsx";
import BrowseSkills from "./pages/BrowseSkills/BrowseSkills.jsx";
import MemberProfile from "./pages/MemberProfile/MemberProfile.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

import {
  sendRequest as sendRequestApi,
  cancelRequest as cancelRequestApi,
} from "./api/api";

import { useUsers } from "./context/UsersContext.jsx";

const App = () => {
  // Get users from context
  const { users } = useUsers();

  const currentUserId = users[0]?.id || null;
  const currentUserName = users[0]?.name || "You";

  /* Skill swap requests */
  const [requests, setRequests] = useState(() => {
    const saved = localStorage.getItem("skillSwapRequests");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("skillSwapRequests", JSON.stringify(requests));
  }, [requests]);

  /* Actions */
  const sendRequest = async (toUser) => {
    if (!currentUserId) return;

    if (
      requests.some(
        (r) => r.fromUserId === currentUserId && r.toUserId === toUser.id,
      )
    )
      return;

    try {
      await sendRequestApi(toUser.id);
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
    } catch (err) {
      console.error("Send request failed", err);
    }
  };

  const cancelRequest = async (toUserId) => {
    if (!currentUserId) return;

    try {
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
      await cancelRequestApi(toUserId);
    } catch (err) {
      console.error("Cancel request failed", err);
    }
  };

  const acceptRequest = (fromUserId) => {
    setRequests((prev) =>
      prev.map((r) =>
        r.fromUserId === fromUserId && r.toUserId === currentUserId
          ? { ...r, status: "accepted" }
          : r,
      ),
    );
  };

  const declineRequest = (fromUserId) => {
    setRequests((prev) =>
      prev.filter(
        (r) => !(r.fromUserId === fromUserId && r.toUserId === currentUserId),
      ),
    );
  };

  /* Routes */
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

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
