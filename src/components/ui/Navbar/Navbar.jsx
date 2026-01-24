import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import { useAuth } from "../../../context/AuthContext";
import { Logo } from "../../../assets/Images";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="navbar__items">
        <div className="navbar__logo">
          <Link to="/landing">
            <img src={Logo} alt="SkillSwap Logo" />
          </Link>
        </div>

        {/* Menu */}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
