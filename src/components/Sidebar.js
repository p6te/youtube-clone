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
import VideoIcon from "../icons/sidebar/VideoIcon";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="main sidebar__section ">
        <li className="home sidebar__row">
          <div className="icon ">
            <MainIcon active="" />
          </div>
          <span>Główna</span>
        </li>
        <li className="home sidebar__row ">
          <div className="icon">
            <DiscoverIcon active="" />
          </div>
          <span>Odkrywaj</span>
        </li>
        <li className="home sidebar__row">
          <div className="icon">
            <ShortsIcon active="" />
          </div>
          <span>Shorts</span>
        </li>
        <li className="home sidebar__row">
          <div className="icon">
            <SubscriptionIcon active="" />
          </div>
          <span>Subskrypcje</span>
        </li>
      </ul>

      <ul className="library sidebar__section ">
        <li className="home sidebar__row">
          <div className="icon">
            <LibraryIcon active="" />
          </div>
          <span>Biblioteka</span>
        </li>
        <li className="home sidebar__row">
          <div className="icon">
            <HistoryIcon active="" />
          </div>
          <span>Historia</span>
        </li>
        <li className="home sidebar__row">
          <div className="icon">
            <VideoIcon />
          </div>
          <span>Twoje filmy</span>
        </li>
        <li className="home sidebar__row">
          <div className="icon">
            <ClockIcon active="" />
          </div>
          <span>Do obejrzenia</span>
        </li>
        <li className="home sidebar__row">
          <div className="icon">
            <LikedIcon active="" />
          </div>
          <span>Polubione filmy</span>
        </li>
      </ul>

      <ul className="subscriptions sidebar__section">
        <h3>SUBSKRYPCJE</h3>
        <li className="home sidebar__row">
          <div className="icon-channel"></div>
          <span>Projekt storny yt</span>
        </li>
        <li className="home sidebar__row">
          <div className="icon-channel"></div>
          <span>Projekt storny yt</span>
        </li>
        <li className="home sidebar__row">
          <div className="icon-channel"></div>
          <span>Projekt storny yt</span>
        </li>
        <li className="home sidebar__row">
          <div className="icon-channel"></div>
          <span>Projekt storny yt</span>
        </li>
      </ul>
      <ul className="more-yt sidebar__section ">
        <h3>Więcej z youtube</h3>
        <li className="home sidebar__row">
          <div className="icon">
            <LikedIcon active="" />
          </div>
          <span>Youtube Premium</span>
        </li>
        <li className="home sidebar__row">
          <div className="icon">
            <LikedIcon active="" />
          </div>
          <span>Filmy</span>
        </li>
        <li className="home sidebar__row">
          <div className="icon">
            <LikedIcon active="" />
          </div>
          <span>Gry</span>
        </li>
        <li className="home sidebar__row">
          <div className="icon">
            <LikedIcon active="" />
          </div>
          <span>Na żywo</span>
        </li>
        <li className="home sidebar__row">
          <div className="icon">
            <LikedIcon active="" />
          </div>
          <span>Sport</span>
        </li>
      </ul>
      <ul className="settings sidebar__section">
        <li className="home sidebar__row">
          <div className="icon">
            <LikedIcon active="" />
          </div>
          <span>Ustawienia</span>
        </li>
        <li className="home sidebar__row">
          <div className="icon">
            <LikedIcon active="" />
          </div>
          <span>Historia raportów</span>
        </li>
        <li className="home sidebar__row">
          <div className="icon">
            <LikedIcon active="" />
          </div>
          <span>Pomoc</span>
        </li>
        <li className="home sidebar__row">
          <div className="icon">
            <LikedIcon active="" />
          </div>
          <span>Prześlij opinię</span>
        </li>
      </ul>
      <div className="info sidebar__section ">
        <span>To jest kopia głównej strony youtube</span>
        <span>Projekt stworzony w ramach praktyki, bez celów zarobkowych</span>
      </div>
    </div>
  );
}

export default Sidebar;
