import React from "react";
import Tag from "../ui/Tag/Tag";
import "./HighlightCard.css";
import UserName from "../ui/UserName/UserName";
import Avatar from "../ui/Avatar/Avatar";
import Location from "../ui/Location/Location";
import { Link } from "react-router-dom";
import linkIcon from "../../assets/user/link.svg";

const HighlightCard = ({ videoUrl, tags, user }) => {
  return (
    <article className="highlight-card">
      <video
        src={videoUrl}
        muted
        loop
        autoPlay
        playsInline
        className="highlight-card__video"
      />

      <div className="highlight-card__overlay">
        <div className="highlight-card__tags">
          {tags.map((tag) => (
            <Tag variant="primary" key={tag} label={tag} />
          ))}
        </div>
        <div className="highlight-card__user">
          <div className="highlight-card__user-identity">
            <Avatar src={user.avatar} alt={user.name} />
            <div className="highlight-card__user-info">
              <UserName label={user.name} />
              <Location
                variant="highlight"
                city={user.location.city}
                state={user.location.state}
              />
            </div>
          </div>
          <Link
            to={`/profile/${user.id}`}
            className="highlight-card__profile-link"
            aria-label="View profile"
          >
            <img
              src={linkIcon}
              alt="view profile"
              className="highlight-card__link-icon"
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default HighlightCard;
