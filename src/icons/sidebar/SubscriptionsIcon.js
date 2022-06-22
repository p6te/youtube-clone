import React from "react";

const SubscriptionIcon = ({ active = false }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      className="style-scope yt-icon"
      style={{ display: "block", width: "100%", height: " 100%", fill: "#fff" }}
    >
      <g className="style-scope yt-icon">
        {active === "subscriptionIcon" ? (
          <path
            d="M20,7H4V6h16V7z M22,9v12H2V9H22z M15,15l-5-3v6L15,15z M17,3H7v1h10V3z"
            className="style-scope yt-icon  active-icon"
          ></path>
        ) : (
          <path
            d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"
            className="style-scope yt-icon"
          ></path>
        )}
      </g>
    </svg>
  );
};

export default SubscriptionIcon;
