import React from "react";
import "./MemberPane.css";
import { Feedback, MemberRatingIcon, Message } from "../../assets/Images";
import Button from "../ui/Button/Button";

const MemberPane = ({ sentRequest, sentToName, onRequestClick }) => {
  return (
    <div className="member-pane">
      <div className="member-pane__info">
        <h1 className="member-pane__last-seen">Last seen: A week ago</h1>
        <p className="member-pane__swap-status">
          {sentRequest
            ? `You sent a request for a skill swap to ${sentToName}`
            : "You currently do not share any Skill swap, request swap to start learning"}
        </p>

        {/* Request / Cancel button */}
        <div className="member-pane__request-btn">
          <Button
            text={sentRequest ? "Cancel Request" : "Request Swap"}
            variant="member"
            onClick={onRequestClick}
          />
        </div>
      </div>

      <div className="member-pane__items">
        <div className="member-pane__items-list">
          <img src={Message} alt="Leave a message" />
          <h2 className="member-pane__items-label">Leave a message</h2>
        </div>
        <div className="member-pane__items-list">
          <img src={MemberRatingIcon} alt="Leave a rating" />
          <h2 className="member-pane__items-label">Leave a rating</h2>
        </div>
        <div className="member-pane__items-list">
          <img src={Feedback} alt="Leave feedback" />
          <h2 className="member-pane__items-label">Leave feedback</h2>
        </div>
      </div>
    </div>
  );
};

export default MemberPane;
