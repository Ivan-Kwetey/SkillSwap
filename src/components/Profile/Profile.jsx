import React from "react";
import "./Profile.css";
import Avatar from "../ui/Avatar/Avatar";
import UserName from "../ui/UserName/UserName";
import { useAuth } from "../../context/AuthContext";
import Button from "../ui/Button/Button";
import {
  ActiveExchange,
  ManageSkills,
  PendingRequests,
  Completed,
} from "../../assets/Images";
import { useNavigate } from "react-router-dom";

const Profile = ({ sentCount = 0, pendingCount = 0 }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

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

      <div className="profile__items">
        <div className="profile__items-list">
          <img src={PendingRequests} alt="Pending Requests" />
          <h2 className="profile__items-label">
            Pending Request
            {pendingCount > 0 && (
              <span className="profile__count">{pendingCount}</span>
            )}
          </h2>
        </div>
        <div className="profile__items-list">
          <h2 className="profile__items-label">
            Sent Request
            {sentCount > 0 && (
              <span className="profile__count">{sentCount}</span>
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

      <div className="profile__items">
        <div className="profile__items-titile">
          <h2 className="profile__items-label item-title">Account</h2>
        </div>
        <div className="profile__items-list">
          <h2 className="profile__items-label">Profile</h2>
        </div>
        <div className="profile__items-list">
          <h2 className="profile__items-label">Settings and privacy</h2>
        </div>
        <div className="profile__items-list">
          <h2 className="profile__items-label">Help</h2>
        </div>
      </div>

      <div className="profile__items-sign-out">
        <Button
          type="button"
          text="Sign out"
          variant="sign-out"
          onClick={handleSignOut}
        />
      </div>
    </div>
  );
};

export default Profile;
