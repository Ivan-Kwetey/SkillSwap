import React from "react";
import { useParams } from "react-router-dom";
import "./MemberProfile.css";

import Avatar from "../../components/ui/Avatar/Avatar";
import UserName from "../../components/ui/UserName/UserName";
import UserLocation from "../../components/ui/UserLocation/UserLocation";
import UserRating from "../../components/ui/UserRating/UserRating";
import Tag from "../../components/ui/Tag/Tag";
import Button from "../../components/ui/Button/Button";

import { Facebook, Instagram, X } from "../../assets/Images";
import Profile from "../../components/Profile/Profile";
import MemberPane from "../../components/MemberPane/MemberPane";

import { useMemberProfile } from "../../hooks/useMemberProfile";
import { useUsers } from "../../context/useUsers.js";

const MemberProfileSkills = ({ offers, wants }) => (
  <section className="member-profile__mid" aria-labelledby="skills-title">
    <h2 id="skills-title" className="member-profile__section-title">
      Skill Swap
    </h2>
    <div className="member-profile__skill-info">
      <div className="member-profile__skill-offer">
        <h4 className="member-profile__section-subtitle">Offers</h4>
        <div>
          {offers.length ? (
            offers.map((s) => <Tag key={s} label={s} variant="member" />)
          ) : (
            <span className="member-profile__empty">No skills listed</span>
          )}
        </div>
      </div>

      <div className="member-profile__skill-wants">
        <h4 className="member-profile__section-subtitle">Wants</h4>
        <div>
          {wants.length ? (
            wants.map((s) => <Tag key={s} label={s} variant="member" />)
          ) : (
            <span className="member-profile__empty">No skills listed</span>
          )}
        </div>
      </div>
    </div>
  </section>
);

const MemberProfileCompletedSwaps = ({ completedSwaps }) => (
  <section
    className="member-profile__completed-section"
    aria-labelledby="completed-swaps-title"
  >
    <div className="member-profile__banner">
      <h3
        id="completed-swaps-title"
        className="member-profile__section-subtitle"
      >
        Recent swaps
      </h3>
      <Button
        variant="ghost"
        text="View all"
        aria-label="View all completed swaps"
      />
    </div>
    <ul className="member-profile__completed-swaps">
      {completedSwaps.length ? (
        completedSwaps.map((s) => (
          <li key={s.id} className="member-profile__completed-item">
            <div className="member-profile__project-name">{s.title}</div>
            <span>
              completed on {new Date(s.completedAt).toLocaleDateString()}
            </span>
          </li>
        ))
      ) : (
        <li className="member-profile__empty">No completed swaps yet</li>
      )}
    </ul>
  </section>
);

const MemberProfileVideos = ({ videos }) => (
  <section className="member-profile__bottom" aria-labelledby="videos-title">
    <div className="member-profile__banner">
      <h2 id="videos-title" className="member-profile__section-title">
        Videos
      </h2>
      <Button variant="ghost" text="View all" aria-label="View all videos" />
    </div>
    <div>
      {videos.length ? (
        videos.map((v) => <div key={v.id}>{v.title}</div>)
      ) : (
        <div className="member-profile__empty">No videos shared yet</div>
      )}
    </div>
  </section>
);

const MemberProfile = ({
  currentUserId,
  requests,
  sendRequest,
  cancelRequest,
  acceptRequest,
  declineRequest,
}) => {
  const { id } = useParams();
  const { users, loadingUsers } = useUsers();

  const profile = users.find((u) => u.id === id);

  const memberData = useMemberProfile(profile);

  if (loadingUsers) return <div style={{ padding: 24 }}>Loading user...</div>;
  if (!profile) return <div className="member-profile">User not found</div>;

  const { offers, wants } = memberData ?? { offers: [], wants: [] };
  const completedSwaps = profile.completedSwaps ?? [];
  const videos = (profile.content ?? []).filter((c) => c.type === "video");

  const sentRequest = requests.some(
    (r) => r.fromUserId === currentUserId && r.toUserId === id,
  );

  const handleRequestClick = () => {
    sentRequest ? cancelRequest(id) : sendRequest(profile);
  };

  return (
    <div className="member-profile">
      <div className="member-profile__page">
        <div className="member-profile__page-first">
          <MemberPane
            sentRequest={sentRequest}
            sentToName={profile.name}
            onRequestClick={handleRequestClick}
          />
        </div>

        <div className="member-profile__content member-profile__page-second">
          <div className="member-profile__top">
            <div className="member-profile__header">
              <Avatar src={profile.avatar} variant="member" />
              <div className="member-profile__basic">
                <div className="member-profile__name-rating">
                  <UserName label={profile.name} variant="member" />
                  <UserRating value={profile.rating} variant="member" />
                </div>
                <UserLocation city={profile.location} variant="member" />
                {profile.dateJoined && (
                  <div className="member-profile__date-joined">
                    Joined {profile.dateJoined}
                  </div>
                )}
                <div className="member-profile__social-links">
                  {profile.social?.x && <img src={X} alt="X profile" />}
                  {profile.social?.facebook && (
                    <img src={Facebook} alt="Facebook profile" />
                  )}
                  {profile.social?.instagram && (
                    <img src={Instagram} alt="Instagram profile" />
                  )}
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

          <MemberProfileSkills offers={offers} wants={wants} />

          <MemberProfileCompletedSwaps completedSwaps={completedSwaps} />
          <MemberProfileVideos videos={videos} />
        </div>

        <div className="member-profile__page-third">
          <Profile
            currentUserId={currentUserId}
            requests={requests}
            onCancelRequest={cancelRequest}
            onAcceptRequest={acceptRequest}
            onDeclineRequest={declineRequest}
          />
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
