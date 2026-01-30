import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useAuth } from "../../../context/AuthContext";
import { Logo, HamburgerIcon, CloseIcon } from "../../../assets/Images";
import "./Navbar.css";
import Avatar from "../Avatar/Avatar";

const Navbar = ({ onAvatarClick }) => {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setIsMenuOpen(true);

  const closeMenu = () => setIsMenuOpen(false);

  // tap ouut to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="navbar">
      <div className="navbar__items">
        <div className="navbar__logo">
          <Link to="/landing">
            <img src={Logo} alt="SkillSwap Logo" />
          </Link>
        </div>

        {/* Hamburger*/}
        <button
          className="navbar__hamburger"
          onClick={toggleMenu}
          aria-label="Open navigation menu"
        >
          <img src={HamburgerIcon} alt="Menu" />
        </button>

        {/* mobilemenu pane */}
        {isMenuOpen && (
          <nav
            ref={menuRef}
            className="navbar__mobile-menu"
            aria-label="Mobile navigation menu"
          >
            {/* Close */}
            <button
              className="navbar__mobile-close"
              onClick={closeMenu}
              aria-label="Close navigation menu"
            >
              <img src={CloseIcon} alt="Close menu" />
            </button>

            {!user ? (
              <>
                <Link to="/login" onClick={closeMenu}>
                  <Button text="Sign in" variant="navbar" />
                </Link>
                <Link to="/register" onClick={closeMenu}>
                  <Button text="Register" variant="navbar" />
                </Link>
              </>
            ) : (
              <>
                <Link to="/home" onClick={closeMenu}>
                  <Button text="Home" variant="navbar" />
                </Link>
                <Link to="/browse-skills" onClick={closeMenu}>
                  <Button text="Browse Skills" variant="navbar" />
                </Link>

                <div
                  className="navbar__avatar"
                  onClick={onAvatarClick}
                  role="button"
                  tabIndex={0}
                  aria-label="Open profile menu"
                  onKeyPress={(e) => {
                    if (e.key === "Enter" || e.key === " ") onAvatarClick();
                  }}
                >
                  <Avatar
                    src={user.avatarUrl}
                    alt={user.name}
                    variant="navbar"
                  />
                </div>
              </>
            )}
          </nav>
        )}

        {/* Desktop menu */}
        <nav className="navbar__buttons" aria-label="Main navigation">
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

              <div
                className="navbar__avatar"
                onClick={onAvatarClick}
                role="button"
                tabIndex={0}
                aria-label="Open profile menu"
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") onAvatarClick();
                }}
              >
                <Avatar src={user.avatarUrl} alt={user.name} variant="navbar" />
              </div>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
