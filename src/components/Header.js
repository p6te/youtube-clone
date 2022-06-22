import React from "react";
import "../sass/Header.scss";
import { ReactComponent as Menubar } from "../icons/header/menubar.svg";
import { ReactComponent as Logo } from "../icons/header/logo.svg";
import { ReactComponent as Search } from "../icons/header/search.svg";
import { ReactComponent as VoiceSearcher } from "../icons/header/voiceSearch.svg";
import  CreateVideo  from "../icons/header/createVideo";
import { ReactComponent as MoreApps } from "../icons/header/moreApps.svg";
import { ReactComponent as Notifications } from "../icons/header/notifications.svg";

function Header() {
  return (
    <div className="header">
      <div className="header__left-items left-items">
        <div className="left-items__menubar">
          <Menubar fill="white" />
        </div>

        <div className="left-items__logo">
          <Logo fill="white" />
        </div>
      </div>
      <div className="header__middle-items">
        <div className="header__input-box input-box">
          <form action="" className="input-box__form">
            <div
              className="input-box__search"
              style={{ border: " 1px solid #303030" }}
            >
              <Search
                className="input-box__search-icon"
                fill="white"
                height={24}
                width={24}
              />
              <input
                className="input-box__input"
                type="text"
                placeholder="Search"
                // style={{ marginLeft: "40px",   border: " 1px solid #303030"}}
                style={{ marginLeft: "40px" }}
              />
              {/* <img
                className="input-box__keyboard"
                src="//www.gstatic.com/inputtools/images/tia.png"
                alt="keyboard-icon"
                tia_field_name="search_query"
                tia_disable_swap="true"
                tia_property="youtube"
              /> */}
            </div>

            <button className="input-box__submit-btn" type="submit">
              <Search height={24} width={24} fill="white" />
            </button>
            <button className="input-box__voice-btn">
              <VoiceSearcher height={24} width={24} fill="white" />
            </button>
          </form>
        </div>
      </div>
      <div className="header__right-items right-items ">
        <button className="right-items__options">
          <CreateVideo  />
        </button>
        <button className="right-items__options">
          <MoreApps height={24} width={24} fill="white" />
        </button>
        <button className="right-items__options">
          <Notifications height={24} width={24} fill="white" />
        </button>
        <div className="accounts">
          <button className="accounts__btn">P</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
