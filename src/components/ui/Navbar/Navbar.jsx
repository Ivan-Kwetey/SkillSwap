import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import { useAuth } from "../../../context/AuthContext";
import { Logo } from "../../../assets/Images";
import "./Navbar.css";

const Navbar = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <div className="navbar__buttons">
        <Link to="/login">
          <Button text="Sign in" variant="navbar" />
        </Link>
        <Link to="/signup">
          <Button text="Register" variant="navbar" />
        </Link>
      </div>
    );
  }

  const path = location.pathname;
  let buttons = [];

  if (path === "/") {
    buttons.push({ text: "Browse Skills", to: "/browse-skills" });
  } else if (path === "/browse-skills") {
    buttons.push({ text: "Home", to: "/" });
  } else {
    // Any other route
    buttons.push(
      { text: "Home", to: "/" },
      { text: "Browse Skills", to: "/browse-skills" }
    );
  }

  return (
    <div className="navbar">
      <div className="navbar__items">
        <div className="navbar__logo">
          <Link to="/landing">
            <img className="navbar__logo-img" src={Logo} alt="SkillSwap Logo" />
          </Link>
        </div>

        <div className="navbar__menu">
          <div className="navbar__buttons">
            {buttons.map((btn) => (
              <Link key={btn.to} to={btn.to}>
                <Button text={btn.text} variant="navbar" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
