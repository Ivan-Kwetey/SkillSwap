import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import { useAuth } from "../../../context/AuthContext";
import { Logo } from "../../../assets/Images";
import "./Navbar.css";
import Avatar from "../Avatar/Avatar";

const Navbar = ({ onAvatarClick }) => {
  const { user } = useAuth();

  return (
    <div className="navbar">
      <div className="navbar__items">
        <div className="navbar__logo">
          <Link to="/landing">
            <img src={Logo} alt="SkillSwap Logo" />
          </Link>
        </div>

        <div className="navbar__buttons">
          {!user ? (
            <>
              <Link to="/login">
                <Button text="Sign in" variant="navbar" />
              </Link>
              <Link to="/register">
                <Button text="Register" variant="navbar" />
              </Link>
            </>
          ) : (
            <>
              <Link to="/home">
                <Button text="Home" variant="navbar" />
              </Link>
              <Link to="/browse-skills">
                <Button text="Browse Skills" variant="navbar" />
              </Link>

              <div className="navbar__avatar" onClick={onAvatarClick}>
                <Avatar
                  src={user.avatarUrl} 
                  alt={user.name}
                  variant="navbar" 
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
