import React from "react";

const Mode = ({ modes }) => {
  return <div className="mode">{modes.join("|")}</div>;
};

export default Mode;
