import React from "react";

const ClockIcon = ({ active = false }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      className="style-scope yt-icon"
      style={{ display: "block", width: "100%", height: " 100%", fill: "#fff" }}
    >
      <g className="style-scope yt-icon">
        {active === "clockIcon" ? (
          <path
            d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M14.97,16.95L10,13.87V7h2v5.76 l4.03,2.49L14.97,16.95z"
            className="style-scope yt-icon  "
          ></path>
        ) : (
          <path
            d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
            className="style-scope yt-icon "
          ></path>
        )}
      </g>
    </svg>
  );
};

export default ClockIcon;
