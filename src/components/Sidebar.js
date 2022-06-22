import React from "react";
import "../sass/Sidebar.scss";
import MainIcon from "../icons/sidebar/MainIcon";
import ClockIcon from "../icons/sidebar/ClockIcon";
import DiscoverIcon from "../icons/sidebar/DiscoverIcon";
import HistoryIcon from "../icons/sidebar/HistoryIcon";
import LibraryIcon from "../icons/sidebar/LibraryIcon";
import LikedIcon from "../icons/sidebar/LikedIcon";
import ShortsIcon from "../icons/sidebar/ShortsIcon";
import SubscriptionIcon from "../icons/sidebar/SubscriptionsIcon";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="main sidebar__section ">
        <div className="home sidebar__row">
          <div className="icon ">
            <MainIcon active="" />
          </div>
          <span>Główna</span>
        </div>
        <div className="home sidebar__row ">
          <div className="icon">
            <ClockIcon active="" />
          </div>
          <span>Odkrywaj</span>
        </div>
        <div className="home sidebar__row">
          <div className="icon">
            <DiscoverIcon active="" />
          </div>
          <span>Shorts</span>
        </div>
        <div className="home sidebar__row">
          <div className="icon">
            <HistoryIcon active="" />
          </div>
          <span>Subskrypcje</span>
        </div>
        <div className="home sidebar__row">
          <div className="icon">
            <HistoryIcon active="" />
          </div>
          <span>Subskrypcje</span>
        </div>
        <div className="home sidebar__row">
          <div className="icon">
            <LibraryIcon active="" />
          </div>
          <span>Subskrypcje</span>
        </div>
        <div className="home sidebar__row">
          <div className="icon">
            <LikedIcon active="" />
          </div>
          <span>Subskrypcje</span>
        </div>
        <div className="home sidebar__row">
          <div className="icon">
            <ShortsIcon active="" />
          </div>
          <span>Subskrypcje</span>
        </div>
        <div className="home sidebar__row">
          <div className="icon">
            <SubscriptionIcon active="" />
          </div>
          <span>Subskrypcje</span>
        </div>
        <div className="home sidebar__row">
          <div className="icon">
            <LikedIcon active="" />
          </div>
          <span>Subskrypcje</span>
        </div>
      </div>
      <div className="library sidebar__section "></div>
      <div className="subscriptions sidebar__section"></div>
      <div className="more-yt sidebar__section "></div>
      <div className="settings sidebar__section"></div>
      <div className="info sidebar__section "></div>
    </div>
  );
}

export default Sidebar;
