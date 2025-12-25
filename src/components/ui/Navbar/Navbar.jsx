import React from "react";
import { Logo } from "../../../assets/Images";
import "./Navbar.css";
import Button from "../Button/Button";

const Navbar = ({handleRegister , handleSignIn}) => {

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img className="navbar__logo-img" src={Logo} alt="Logo" />
      </div>
      <div className="navbar__menu">
        <div className="navbar__buttons">
          <Button text="Sign in" variant="navbar" onClick={handleSignIn} />
          <Button text="Register" variant="navbar" onClick={handleRegister} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
