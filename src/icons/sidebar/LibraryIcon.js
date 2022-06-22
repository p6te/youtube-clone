import React from "react";

const LibraryIcon = ({ active = false }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      className="style-scope yt-icon"
      style={{ display: "block", width: "100%", height: " 100%", fill: "#fff" }}
    >
      <g className="style-scope yt-icon">
        {active === "libraryIcon" ? (
          <path
            d="M4,20h14v1H3V6h1V20z M21,3v15H6V3H21z M17,10.5L11,7v7L17,10.5z"
            className="style-scope yt-icon  active-icon"
          ></path>
        ) : (
          <path
            d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"
            className="style-scope yt-icon"
          ></path>
        )}
      </g>
    </svg>
  );
};

export default LibraryIcon;

