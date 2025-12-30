import React from "react";
import "./Avatar.css"

const Avatar = ({src,alt, variant }) => {
  return (
    <img src={src} alt={alt} className={`highlight-card__avatar highlight-card__avatar--${variant} `}/>
  );
};

export default Avatar;
