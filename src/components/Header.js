import React from "react";
import "../sass/Header.scss";
import { ReactComponent as Menubar } from "../icons/menubar.svg";
import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as Search } from "../icons/search.svg";
import { ReactComponent as VoiceSearcher } from "../icons/voiceSearch.svg";

function Header() {
  return (
    <div className="header">
      <div className="header__left-items">
        <div className="header__menubar menubar">
          <Menubar width={24} height={24} />
        </div>

        <div className="header__logo logo">
          <Logo height={24} />
        </div>
      </div>
      <div className="header__middle-items">
        <div className="header__input-box input-box">
          <form action="" className="input-box__form">
            <input
              type="text"
              className="input-box__search"
              placeholder="Search"
            />
            <button className="input-box__submit-btn" type="submit">
              <Search height={24} width={24}  fill="white" />
            </button>
            <button className="input-box__voice-btn">
              <VoiceSearcher  height={24} width={24} fill="white" />
            </button>
          </form>
        </div>
      </div>
      <div className="header__right-items">asd</div>
    </div>
  );
}

export default Header;
