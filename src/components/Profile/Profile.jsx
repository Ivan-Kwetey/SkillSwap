import React, { useState } from "react";
import "./Profile.css";
import Avatar from "../ui/Avatar/Avatar";
import UserName from "../ui/UserName/UserName";
import Button from "../ui/Button/Button";
import { useAuth } from "../../context/AuthContext";
import {
  ActiveExchange,
  ManageSkills,
  PendingRequests,
  OutgoingRequests,
  Completed,
} from "../../assets/Images";
import { useNavigate } from "react-router-dom";

const Profile = ({
  currentUserId,
  requests = [],
  onCancelRequest,
  onAcceptRequest,
  onDeclineRequest,
}) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Safe filtering
  const sentRequests = requests.filter((r) => r.fromUserId === currentUserId);

  const pendingRequests = requests.filter(
    (r) => r.toUserId === currentUserId && r.status === "pending",
  );
  const handleSignOut = () => {
    logout();
    navigate("/landing");
  };

  return (
    <div className="profile">
      <div className="profile__username">
        <Avatar />
        <UserName label={user.name} />
      </div>

      {/* Tabs */}
      {activeTab === "overview" && (
        <div className="profile__items">
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
            <img src={OutgoingRequests} alt="Pending Requests" />
            <h2 className="profile__items-label">
              Sent Request
              {sentRequests.length > 0 && (
                <span className="profile__count">{sentRequests.length}</span>
              )}
            </h2>
          </div>

          <div className="profile__items-list">
            <img src={ActiveExchange} alt="Active Exchanges" />
            <h2 className="profile__items-label">Active Exchanges</h2>
          </div>

          <div className="profile__items-list">
            <img src={ManageSkills} alt="Manage Skills" />
            <h2 className="profile__items-label">Manage Skills</h2>
          </div>

          <div className="profile__items-list">
            <img src={Completed} alt="Completed Exchanges" />
            <h2 className="profile__items-label">Completed</h2>
          </div>
        </div>
      )}

      {/* Sent requests */}
      {activeTab === "sent" && (
        <div className="profile__panel">
          <div className="profile__panel-header">
            <button
              className="profile__back-btn"
              onClick={() => setActiveTab("overview")}
            >
              Back
            </button>
          </div>

          {sentRequests.length === 0 && (
            <p className="profile__request-empty">No sent requests.</p>
          )}
          <div className="profile__request-items">
            {sentRequests.map((req) => (
              <div key={req.id} className="profile__request-item">
                <div>
                  Request sent to{" "}
                  <span className="profile__request-name">
                    {" "}
                    {req.toUserName}
                  </span>
                </div>

                {req.status === "pending" && (
                  <Button
                    text="Cancel"
                    variant="cancel-request-pane"
                    onClick={() => onCancelRequest(req.toUserId)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pending request */}
      {activeTab === "pending" && (
        <div className="profile__panel">
          <div className="profile__panel-header">
            <button
              className="profile__back-btn"
              onClick={() => setActiveTab("overview")}
            >
              Back
            </button>
            <h3 className="profile__incoming-request">Pending Requests</h3>
          </div>

          {pendingRequests.length === 0 && (
            <p className="profile__empty">No pending requests.</p>
          )}

          {pendingRequests.map((req) => (
            <div key={req.id} className="profile__in-request-item">
              <div className="profile__in-request-name">
                Request from{" "}
                <span className="profile__request-name">
                  {req.fromUserName}
                </span>
              </div>
              <div className="profile__request-actions">
                <Button
                  text="Accept"
                  variant="accept-request"
                  onClick={() => onAcceptRequest(req.fromUserId)}
                />
                <Button
                  text="Decline"
                  variant="decline-request"
                  onClick={() => onDeclineRequest(req.fromUserId)}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* sign out */}
      <div className="profile__items-sign-out">
        <Button text="Sign out" variant="sign-out" onClick={handleSignOut} />
      </div>
    </div>
  );
};

export default Profile;
