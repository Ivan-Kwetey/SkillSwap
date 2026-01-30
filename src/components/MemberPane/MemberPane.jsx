import React from "react";
import "./MemberPane.css";
import { Feedback, MemberRatingIcon, Message } from "../../assets/Images";
import Button from "../ui/Button/Button";

const MemberPane = ({ sentRequest, sentToName, onRequestClick }) => {
  return (
    <aside className="member-pane" aria-label="Member actions panel">
      <div className="member-pane__info">
        <p className="member-pane__last-seen">Last seen: A week ago</p>
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

      {/* Optional future actions */}
      {/*
      <section className="member-pane__items" aria-label="Member actions">
        <article className="member-pane__items-list">
          <img src={Message} alt="Leave a message" />
          <h2 className="member-pane__items-label">Leave a message</h2>
        </article>
        <article className="member-pane__items-list">
          <img src={MemberRatingIcon} alt="Leave a rating" />
          <h2 className="member-pane__items-label">Leave a rating</h2>
        </article>
        <article className="member-pane__items-list">
          <img src={Feedback} alt="Leave feedback" />
          <h2 className="member-pane__items-label">Leave feedback</h2>
        </article>
      </section>
      */}
    </aside>
  );
};

export default MemberPane;
