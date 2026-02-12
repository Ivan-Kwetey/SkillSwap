import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useIsDesktop } from "./hooks/useIsDesktop.js";
import Navbar from "./components/ui/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Home from "./pages/Home/Home.jsx";
import BrowseSkills from "./pages/BrowseSkills/BrowseSkills.jsx";
import MemberProfile from "./pages/MemberProfile/MemberProfile.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import Profile from "./components/Profile/Profile";

import {
  fetchUsers,
  sendRequest as sendRequestApi,
  cancelRequest as cancelRequestApi,
} from "./api/api";

import { UsersProvider } from "./context/UsersContext.jsx";
import Footer from "./components/ui/Footer/Footer.jsx";

const App = () => {
  const isDesktop = useIsDesktop(1330);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  /** users api state */
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
              ? [
                  {
                    name: "UI/UX Design",
                    category: "Design",
                    modes: ["remote"],
                  },
                ]
              : index % 3 === 1
                ? [
                    {
                      name: "JavaScript",
                      category: "Programming",
                      modes: ["remote"],
                    },
                  ]
                : [
                    {
                      name: "Python",
                      category: "Programming",
                      modes: ["in-person"],
                    },
                    {
                      name: "Illustration",
                      category: "Design",
                      modes: ["remote"],
                    },
                  ],
        }));

        setUsers(normalized);
      })
      .catch(console.error)
      .finally(() => setLoadingUsers(false));
  }, []);

  /** currentuser */
  const currentUserId = users[0]?.id || null;
  const currentUserName = users[0]?.name || "You";

  /** skill swap requests state */
  const [requests, setRequests] = useState(() => {
    const saved = localStorage.getItem("skillSwapRequests");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("skillSwapRequests", JSON.stringify(requests));
  }, [requests]);

  /** actions */
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

  return (
    <UsersProvider users={users} loadingUsers={loadingUsers}>
      <Navbar
        onAvatarClick={() => {
          if (!isDesktop) setIsProfileOpen(true);
        }}
      />

      {!isDesktop && (
        <Profile
          isOpen={isProfileOpen}
          onClose={() => setIsProfileOpen(false)}
          currentUserId={currentUserId}
          requests={requests}
          onCancelRequest={cancelRequest}
          onAcceptRequest={acceptRequest}
          onDeclineRequest={declineRequest}
        />
      )}

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

      <Footer />
    </UsersProvider>
  );
};

export default App;
