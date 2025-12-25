import React from "react";
import Tag from "../ui/Tag/Tag";
import "./HighlightCard.css";
import UserName from "../ui/UserName/UserName";
import Avatar from "../ui/Avatar/Avatar";

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
          <Avatar src={user.avatar} alt={user.name} />
          <UserName label={user.name} />
        </div>
      </div>
    </article>
  );
};

export default HighlightCard;
