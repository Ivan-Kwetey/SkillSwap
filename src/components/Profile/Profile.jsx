import React, { useState } from "react";
import "./Profile.css";
import Avatar from "../ui/Avatar/Avatar";
import UserName from "../ui/UserName/UserName";
import Button from "../ui/Button/Button";
import { useAuth } from "../../context/AuthContext";
import {
  PendingRequests,
  OutgoingRequests,
  CloseIcon,
} from "../../assets/Images";
import { useNavigate } from "react-router-dom";
import { useIsDesktop } from "../../hooks/useIsDesktop";

const Profile = ({
  isOpen = false,
  onClose,
  currentUserId,
  requests = [],
  onCancelRequest,
  onAcceptRequest,
  onDeclineRequest,
}) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const isDesktop = useIsDesktop(1330);

  const [activeTab, setActiveTab] = useState("overview");

  const sentRequests = requests.filter((r) => r.fromUserId === currentUserId);
  const pendingRequests = requests.filter(
    (r) => r.toUserId === currentUserId && r.status === "pending"
  );

  const handleSignOut = () => {
    logout();
    navigate("/landing");
  };

  if (!user) {
    return (
      <aside className="profile profile--loading">
        <p>Loading profile...</p>
      </aside>
    );
  }

  return (
    <aside className={`profile ${!isDesktop && isOpen ? "profile--open" : ""}`}>
      {!isDesktop && onClose && (
        <button className="profile__close" onClick={onClose}>
          <img src={CloseIcon} alt="close icon" />
        </button>
      )}

      {/* User Info */}
      <div className="profile__username">
        <Avatar />
        <UserName label={user?.name || "Guest"} />
      </div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <section className="profile__items" aria-label="Overview">
          <div
            className="profile__items-list clickable"
            onClick={() => setActiveTab("pending")}
          >
            <img src={PendingRequests} alt="Pending Requests" />
            <h2 className="profile__items-label">
              Pending Request
              {pendingRequests.length > 0 && (
                <span className="profile__count">{pendingRequests.length}</span>
              )}
            </h2>
          </div>

          <div
            className="profile__items-list clickable"
            onClick={() => setActiveTab("sent")}
          >
            <img src={OutgoingRequests} alt="Sent Requests" />
            <h2 className="profile__items-label">
              Sent Request
              {sentRequests.length > 0 && (
                <span className="profile__count">{sentRequests.length}</span>
              )}
            </h2>
          </div>
        </section>
      )}

      {/* Sent Requests Tab */}
      {activeTab === "sent" && (
        <section className="profile__panel" aria-label="Sent Requests">
          <button
            className="profile__back-btn"
            onClick={() => setActiveTab("overview")}
          >
            Back
          </button>

          {sentRequests.length === 0 ? (
            <p className="profile__request-empty">No sent requests.</p>
          ) : (
            <div className="profile__request-items">
              {sentRequests.map((req) => (
                <article key={req.id} className="profile__request-item">
                  <div>
                    Request sent to{" "}
                    <span className="profile__request-name">
                      {req.toUserName || "Unknown"}
                    </span>
                  </div>

                  {req.status === "pending" && (
                    <Button
                      text="Cancel"
                      variant="cancel-request-pane"
                      onClick={() => onCancelRequest?.(req.toUserId)}
                    />
                  )}
                </article>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Pending Requests Tab */}
      {activeTab === "pending" && (
        <section className="profile__panel" aria-label="Pending Requests">
          <button
            className="profile__back-btn"
            onClick={() => setActiveTab("overview")}
          >
            Back
          </button>

          {pendingRequests.length === 0 ? (
            <p className="profile__empty">No pending requests.</p>
          ) : (
            pendingRequests.map((req) => (
              <article key={req.id} className="profile__in-request-item">
                <div className="profile__in-request-name">
                  Request from{" "}
                  <span className="profile__request-name">
                    {req.fromUserName || "Unknown"}
                  </span>
                </div>

                <div className="profile__request-actions">
                  <Button
                    text="Accept"
                    variant="accept-request"
                    onClick={() => onAcceptRequest?.(req.fromUserId)}
                  />
                  <Button
                    text="Decline"
                    variant="decline-request"
                    onClick={() => onDeclineRequest?.(req.fromUserId)}
                  />
                </div>
              </article>
            ))
          )}
        </section>
      )}

      {/* Sign out */}
      <div className="profile__items-sign-out">
        <Button text="Sign out" variant="sign-out" onClick={handleSignOut} />
      </div>
    </aside>
  );
};

export default Profile;
