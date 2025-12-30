import React from "react";
import "./UserCard.css";
import Avatar from "../Avatar/Avatar";
import UserName from "../UserName/UserName";
import Location from "../UserLocation/UserLocation";

const UserCard = ({ user }) => {
  console.log("USER:", user);
  console.log("AVATAR:", user.avatar);

  return (
    <div className="skill-card">
      <div className="skill-card__header">
        <Avatar src={user.user.avatar} variant="user-card" />
        <div className="skill-card__location-name">
          <UserName variant="user-card" label={user.user.name} />
          <Location
            city={user.location}
            state={user.location}
            variant="user-card"
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
