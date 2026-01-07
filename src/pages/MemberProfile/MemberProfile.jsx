import React from "react";
import Button from "../../components/ui/Button/Button";
import "./MemberProfile.css";
import Avatar from "../../components/ui/Avatar/Avatar";
import FilterPane from "../../components/FilterPane/FilterPane";
import Profile from "../../components/Profile/Profile";
import UserName from "../../components/ui/UserName/UserName";
import UserLocation from "../../components/ui/UserLocation/UserLocation";
import UserRating from "../../components/ui/UserRating/UserRating";
import { Facebook, Instagram, X } from "../../assets/Images";
import Tag from "../../components/ui/Tag/Tag";

const MemberProfile = (user) => {
  return (
    <div className="member-profile">
      <div className="member-profile__page">
        <FilterPane />
        <div className="member-profile__content">
          <div className="member-profile__top">
            <div className="member-profile__header">
              <Avatar variant="member" />
              <div className="member-profile__basic">
                <div className="member-profile__name-rating">
                  <UserName />
                  <UserRating />
                </div>

                <UserLocation />
                <div className="member-profile__date-joined">12.09.2025</div>
                <div className="member-profile__social-links">
                  <img src={X} alt="" />
                  <img src={Facebook} alt="" />
                  <img src={Instagram} alt="" />
                </div>
              </div>
            </div>
            <div className="member-profile__about">
              <h2 className="member-profile__about-title">About</h2>
              <div className="member-profile__about-content">
                I'm a full-stack developer and UI/UX designer with over 8 years
                of experience building web applications. I'm passionate about
                creating intuitive user experiences and teaching others the art
                of clean code and thoughtful design. When I'm not coding, you'll
                find me exploring the latest design trends or mentoring aspiring
                developers. I believe in the power of knowledge sharing and am
                excited to connect with others who share similar values.
              </div>
            </div>
          </div>
          <div className="member-profile__mid">
            <div className="member-profile__swap-title-container">
              <h2 className="member-profile__swap-title">Skill swap</h2>
            </div>

            <div className="member-profile__swap-info">
              <div className="member-profile__swap-offers">
                <h4>Offers</h4> <Tag />
              </div>
              <div className="member-profile__swap-wants">
                <h4>Wants</h4> <Tag />
              </div>
            </div>
            <div className="member-profile__swap-completed">
              <div className="member-profile__completed-banner">
                <h3 className="member-profile__completed-title">Recent swap</h3>
                <Button variant="View more" text="View all" />
              </div>
              <Button text="Request Swap" variant="request-swap" />
            </div>
          </div>
        </div>
        <Profile />
      </div>
    </div>
  );
};

export default MemberProfile;
