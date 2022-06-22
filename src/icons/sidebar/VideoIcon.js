import React from "react";

const VideoIcon = ({ active = false }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      className="style-scope yt-icon"
      style={{ display: "block", width: "100%", height: " 100%", fill: "#fff" }}
    >
      <g className="style-scope yt-icon">
        {active === "videoIcon" ? (
          <path
            d="M4,10V21h6V15h4v6h6V10L12,3Z"
            className="style-scope yt-icon  active-icon"
          ></path>
        ) : (
          <path
            d="M12,4.33l7,6.12V20H15V14H9v6H5V10.45l7-6.12M12,3,4,10V21h6V15h4v6h6V10L12,3Z"
            className="style-scope yt-icon"
          ></path>
        )}
      </g>
    </svg>
  );
};

export default VideoIcon;

<svg
  viewBox="0 0 24 24"
  preserveAspectRatio="xMidYMid meet"
  focusable="false"
  class="style-scope yt-icon"
  style="pointer-events: none; display: block; width: 100%; height: 100%;"
>
  <g class="style-scope yt-icon">
    <path
      d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z"
      class="style-scope yt-icon"
    ></path>
  </g>
</svg>;
