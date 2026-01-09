import React from "react";
import "./UserCard.css";
import Avatar from "../ui/Avatar/Avatar";
import UserName from "../ui/UserName/UserName";
import Location from "../ui/UserLocation/UserLocation";
import Mode from "../ui/Mode/Mode";
import UserRating from "../ui/UserRating/UserRating";
import { UserLink } from "../../assets/Images";
import UserLocation from "../ui/UserLocation/UserLocation";
import Button from "../ui/Button/Button";
import { AddIcon } from "../../assets/Images";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user, hasRequested, onRequest, onCancel }) => {
  const allModes = [...new Set(user.skills.flatMap((skill) => skill.modes))];
    const navigate = useNavigate();

  return (
    <div className="skill-card">
      <div className="skill-card__top">
        <div
          className="skill-card__overlay"
          style={{
            backgroundImage: `url(${
              user.avatar || `https://i.pravatar.cc/300?u=${user.id}`
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="skill-card__rating-link">
            <div className="skill-card__rating">
              <UserRating value={user.rating} />
            </div>
            <div
              className="skill-card__link"
              onClick={() => navigate(`/members/${user.id}`)}
            >
              <img src={UserLink} alt="View profile" />
            </div>
          </div>
          <div className="skill-card__user-info">
            <div className="skill-card__user-name-loc">
              <UserName label={user.name} variant="user-card" />
              <UserLocation city={user.location} variant="user-card" />
            </div>
          </div>
        </div>
      </div>
      <div className="skill-card__bottom">
        <div className="skill-card__bio">{user.bio}</div>
        <div className="skill-card__buttons">
          {/* <Button variant="add-user" text="Add" icon={AddIcon} /> */}
          <Button
            text={hasRequested ? "Cancel request" : "Request swap"}
            onClick={hasRequested ? onCancel : onRequest}
            variant={hasRequested ? "cancel-request" : "request-swap"}
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
