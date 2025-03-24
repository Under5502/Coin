import React, { useState } from "react";
import "./Sidebar.scss";
import AssetIcon from "../../assets/Asset.png";
import DeepseaIcon from "../../assets/DeepSea.png";
import HomeIcon from "../../assets/Home.png";
import LogoutIcon from "../../assets/Logout.png";
import SettingIcon from "../../assets/Setting.png";
import SharkaiIcon from "../../assets/Sharkai.png";
import SupportIcon from "../../assets/Support.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openAsset, setOpenAsset] = useState(false);
  const [openDeepsea, setOpenDeepsea] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2 className="sidebar__logo">
          <Link to="/" className="sidebar__logo">
            Deepsea
          </Link>
        </h2>
        <ul className="sidebar__menu">
          <li className="sidebar__item">
            <span className="sidebar__icon">
              <img src={HomeIcon} alt="Home"></img>
            </span>
            <span className="sidebar__text">
              <Link to="/" className="sidebar__text">
                Dashboard
              </Link>
            </span>
          </li>
          <li
            className="sidebar__item"
            onClick={() => setOpenAsset(!openAsset)}
          >
            <span className="sidebar__icon">
              {" "}
              <img src={AssetIcon} alt="Assets"></img>
            </span>
            <span className="sidebar__text">
              {" "}
              <Link to="/binance" className="sidebar__text">
                Asset
              </Link>
            </span>
            <span className="sidebar__arrow">{openAsset ? "▲" : "▼"}</span>
          </li>
          {openAsset && (
            <ul className="sidebar__submenu">
              <li>Asset Option 1</li>
              <li>Asset Option 2</li>
            </ul>
          )}

          <li
            className="sidebar__item"
            onClick={() => setOpenDeepsea(!openDeepsea)}
          >
            <span className="sidebar__icon">
              {" "}
              <img src={DeepseaIcon} alt="DeepSea"></img>
            </span>
            <span className="sidebar__text">Deepsea</span>
            <span className="sidebar__arrow">{openDeepsea ? "▲" : "▼"}</span>
          </li>
          {openDeepsea && (
            <ul className="sidebar__submenu">
              <li>Deepsea Option 1</li>
              <li>Deepsea Option 2</li>
            </ul>
          )}

          <li className="sidebar__item">
            <span className="sidebar__icon">
              {" "}
              <img src={SharkaiIcon} alt="SharkAI"></img>
            </span>
            <span className="sidebar__text">Shark AI</span>
          </li>
        </ul>
      </div>

      <ul className="sidebar__bottom">
        <li className="sidebar__item">
          <span className="sidebar__icon">
            {" "}
            <img src={SettingIcon} alt="Setting"></img>
          </span>
          <span className="sidebar__text">Setting</span>
        </li>
        <li className="sidebar__item">
          <span className="sidebar__icon">
            {" "}
            <img src={SupportIcon} alt="Support"></img>
          </span>
          <span className="sidebar__text">Supports</span>
        </li>
        <li className="sidebar__item">
          <span className="sidebar__icon">
            {" "}
            <img src={LogoutIcon} alt="Logout"></img>
          </span>
          <span className="sidebar__text">Log out</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
