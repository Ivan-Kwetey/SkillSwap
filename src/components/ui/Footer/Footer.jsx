import React from "react";
import "./Footer.css";
import { FullLogo, ScrollUp } from "../../../assets/Images";
import { Link } from "react-router-dom";
import { footerLinks } from "../../../data/footerLinks";
import { socialLinks } from "../../../data/socialLinks";
import { useEffect, useState } from "react";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 800);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer__contents">
        <img src={FullLogo} alt="SkillSwap Logo" className="footer__logo" />
        <div className="footer__link-section">
          {footerLinks.map((section) => (
            <div key={section.title} className="footer__link-column">
              <h4 className="footer__title">{section.title}</h4>
              <ul className="footer__list">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer__link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__social">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="footer__social-link"
            >
              <img src={icon} alt={label} className="footer__social-icon" />
            </a>
          ))}
        </div>
      </div>
      <div className="scroll_up__container">
        {visible && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="footer__scroll-top"
            type="button"
          >
            <img src={ScrollUp} alt="Scroll to top" />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
