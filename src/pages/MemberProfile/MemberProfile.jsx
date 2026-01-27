import React from "react";
import { useParams } from "react-router-dom";
import "./MemberProfile.css";
import Avatar from "../../components/ui/Avatar/Avatar";
import Profile from "../../components/Profile/Profile";
import UserName from "../../components/ui/UserName/UserName";
import UserLocation from "../../components/ui/UserLocation/UserLocation";
import UserRating from "../../components/ui/UserRating/UserRating";
import Tag from "../../components/ui/Tag/Tag";
import Button from "../../components/ui/Button/Button";
import { Facebook, Instagram, X } from "../../assets/Images";
import MemberPane from "../../components/MemberPane/MemberPane";
import { useMemberProfile } from "../../hooks/useMemberProfile";
import { useUsers } from "../../context/UsersContext.jsx"; 

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

  // loading until users are fetched
  if (loadingUsers) return <div style={{ padding: 24 }}>Loading user...</div>;

  // find the profile by id
  const profile = users.find((u) => u.id === id);

  if (!profile) return <div className="member-profile">User not found</div>;

  const { offers, wants } = useMemberProfile(profile);
  const completedSwaps = profile.completedSwaps ?? [];
  const content = profile.content ?? [];

  const sentRequest = requests.some(
    (r) => r.fromUserId === currentUserId && r.toUserId === id,
  );

  const handleRequestClick = () => {
    if (sentRequest) {
      cancelRequest(id);
    } else {
      sendRequest(profile);
    }
  };

  return (
    <div className="member-profile">
      <div className="member-profile__page">
        <MemberPane
          sentRequest={sentRequest}
          sentToName={profile.name}
          onRequestClick={handleRequestClick}
        />

        {/* mid*/}
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
                <UserLocation city={profile.location} variant="member" />
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

          {/* Skill Swap */}
          <div className="member-profile__mid">
            <h2 className="member-profile__section-title">Skill Swap</h2>
            <div className="member-profile__skill-info">
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
          </div>

          {/* Completed Swaps */}
          <div className="member-profile__completed-section">
            <div className="member-profile__banner">
              <h3 className="member-profile__section-subtitle">Recent swaps</h3>
              <Button variant="ghost" text="View all" />
            </div>
            <ul className="member-profile__completed-swaps">
              {completedSwaps.length ? (
                completedSwaps.map((s) => (
                  <li key={s.id} className="member-profile__completed-item">
                    <div className="member-profile__project-name">{s.title}</div>
                    <span>completed on {s.completedAt}</span>
                  </li>
                ))
              ) : (
                <li>No completed swaps yet</li>
              )}
            </ul>
          </div>

          {/* Videos */}
          <div className="member-profile__bottom">
            <div className="member-profile__banner">
              <h2 className="member-profile__section-title">Videos</h2>
              <Button variant="ghost" text="View all" />
            </div>
            <div>
              {content.filter((c) => c.type === "video").length ? (
                content
                  .filter((c) => c.type === "video")
                  .map((v) => <div key={v.id}>{v.title}</div>)
              ) : (
                <div>No videos shared yet</div>
              )}
            </div>
          </div>
        </div>

        {/* profile-pane */}
        <Profile
          currentUserId={currentUserId}
          requests={requests}
          onCancelRequest={cancelRequest}
          onAcceptRequest={acceptRequest}
          onDeclineRequest={declineRequest}
        />
      </div>
    </div>
  );
};

export default MemberProfile;
