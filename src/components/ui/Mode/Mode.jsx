import React from "react";

const Mode = ({ modes }) => {
  return (
    <p className="mode" aria-label={`Modes: ${modes.join(", ")}`}>
      {modes.join(" | ")}
    </p>
  );
};

export default Mode;
