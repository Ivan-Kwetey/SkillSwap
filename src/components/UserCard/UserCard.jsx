import React from "react";
import "./UserCard.css";
import Avatar from "../ui/Avatar/Avatar";
import UserName from "../ui/UserName/UserName";
import Location from "../ui/UserLocation/UserLocation";
import UserRating from "../ui/UserRating/UserRating";
import { UserLink } from "../../assets/Images";
import Button from "../ui/Button/Button";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user, hasRequested, onRequest, onCancel }) => {
  const navigate = useNavigate();

  return (
    <article className="skill-card" aria-label={`Profile card of ${user.name}`}>
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
            <button
              className="skill-card__link"
              onClick={() => navigate(`/members/${user.id}`)}
              aria-label={`View profile of ${user.name}`}
            >
              <img src={UserLink} alt="" />
            </button>
          </div>

          <div className="skill-card__user-info">
            <div className="skill-card__user-name-loc">
              <UserName label={user.name} variant="user-card" />
              <Location city={user.location} variant="user-card" />
            </div>
          </div>
        </div>
      </div>

      <div className="skill-card__bottom">
        {/* commented out, not ready yet */}
        {/* <p className="skill-card__bio">{user.bio}</p> */}
        <div className="skill-card__buttons">
          <Button
            text={hasRequested ? "Cancel request" : "Request swap"}
            onClick={hasRequested ? onCancel : onRequest}
            variant={hasRequested ? "cancel-request" : "request-swap"}
          />
        </div>
      </div>
    </article>
  );
};

export default UserCard;
