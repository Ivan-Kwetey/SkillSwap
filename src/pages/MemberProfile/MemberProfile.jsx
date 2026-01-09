import React from "react";
import { useParams } from "react-router-dom";
import "./MemberProfile.css";
import Avatar from "../../components/ui/Avatar/Avatar";
import FilterPane from "../../components/FilterPane/FilterPane";
import Profile from "../../components/Profile/Profile";
import UserName from "../../components/ui/UserName/UserName";
import UserLocation from "../../components/ui/UserLocation/UserLocation";
import UserRating from "../../components/ui/UserRating/UserRating";
import Tag from "../../components/ui/Tag/Tag";
import Button from "../../components/ui/Button/Button";

import { Facebook, Instagram, X } from "../../assets/Images";
import { users } from "../../data/users";
import { useMemberProfile } from "../../hooks/useMemberProfile";

const MemberProfile = () => {
  const { id } = useParams();
  const user = users.find((u) => u.id === id);
  const profile = useMemberProfile(user, id);

  if (!profile) return <div className="member-profile">User not found</div>;
  const offers = profile.offers ?? [];
  const wants = profile.wants ?? [];
  const completedSwaps = profile.completedSwaps ?? [];

  return (
    <div className="member-profile">
      <div className="member-profile__page">
        <FilterPane />

        <div className="member-profile__content">
          {/* Top */}
          <div className="member-profile__top">
            <div className="member-profile__header">
              <Avatar src={profile.avatar} variant="member" />
              <div className="member-profile__basic">
                <div className="member-profile__name-rating">
                  <UserName label={profile.name} variant="member" />
                  <UserRating value={profile.rating} variant="member" />
                </div>
                <UserLocation city={profile.location} variant="member"/>
                {profile.dateJoined && (
                  <div className="member-profile__date-joined">
                    Joined {profile.dateJoined}
                  </div>
                )}
                <div className="member-profile__social-links">
                  <img src={X} alt="X profile" />
                  <img src={Facebook} alt="Facebook profile" />
                  <img src={Instagram} alt="Instagram profile" />
                </div>
              </div>
            </div>

            <div className="member-profile__about">
              <h2 className="member-profile__section-title">About</h2>
              <div className="member-profile__about-text">
                {profile.about || profile.bio || "No description provided."}
              </div>
            </div>
          </div>

          {/* Mid — Skill Swap */}
          <div className="member-profile__mid">
            <h2 className="member-profile__section-title"> Skill Swap</h2>
            <div className="member-profile__skill-info ">
              <div className="member-profile__skill-offer">
                <h4 className="member-profile__section-subtitle">Offers</h4>

                <div>
                  {offers.length ? (
                    offers.map((skill) => (
                      <Tag key={skill} label={skill} variant="member" />
                    ))
                  ) : (
                    <span>No skills listed</span>
                  )}
                </div>
              </div>
              <div className="member-profile__skill-wants">
                <h4 className="member-profile__section-subtitle">Wants</h4>
                <div>
                  {wants.length ? (
                    wants.map((skill) => (
                      <Tag key={skill} label={skill} variant="member" />
                    ))
                  ) : (
                    <span>No skills listed</span>
                  )}
                </div>
              </div>
            </div>

            <div className="member-profile__completed-section">
              <div className="member-profile__banner">
                <h3 className="member-profile__section-subtitle">
                  Recent swaps
                </h3>
                <Button variant="ghost" text="View all" />
              </div>

              <ul className="member-profile__completed-swaps">
                {profile.completedSwaps?.length ? (
                  profile.completedSwaps.map((s) => (
                    <li key={s.id} className="member-profile__completed-item">
                      {s.title} <span>completed {s.completedAt}</span>
                    </li>
                  ))
                ) : (
                  <li>No completed swaps yet</li>
                )}
              </ul>
            </div>

            <Button text="Request Swap" variant="member" />
          </div>

          {/* Bottom — Videos */}
          <div className="member-profile__bottom">
            <div className="member-profile__banner">
              <h2 className="member-profile__section-title">Videos</h2>
              <Button variant="ghost" text="View all" />
            </div>
            <div>
              {profile.content
                ?.filter((c) => c.type === "video")
                .map((v) => <div key={v.id}>{v.title}</div>) || (
                <div>No videos shared yet</div>
              )}
            </div>
          </div>
        </div>

        <Profile />
      </div>
    </div>
  );
};

export default MemberProfile;
