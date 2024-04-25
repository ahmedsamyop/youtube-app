import React from "react";
import "./sidebar.css";
import { icons } from "../../utils/constants";
import { NavLink } from "react-router-dom";
function SideBar() {
  return (
    <div className="sidebar big-menu" id="sidebar">
      <div className="container">
        <ul>
          <NavLink to={"/"} end>
            <li>
              <div className="icon">{icons.home}</div>
              <span className="title">Home</span>
            </li>
          </NavLink>
          <li>
            <div className="icon">{icons.shorts}</div>
            <span className="title">Shorts</span>
          </li>
          <li>
            <div className="icon">{icons.subscribe}</div>
            <span className="title">Subscribe</span>
          </li>
        </ul>

        <ul>
          <li>
            <div className="icon">{icons.library}</div>
            <span className="title">Library</span>
          </li>
          <li>
            <div className="icon">{icons.history}</div>
            <span className="title">History</span>
          </li>
          <li>
            <div className="icon">{icons.watchLater}</div>
            <span className="title">Later</span>
          </li>
          <li>
            <div className="icon">{icons.like}</div>
            <span className="title">Liked</span>
          </li>
        </ul>
        <ul>
          <li>
            <div className="icon">{icons.trending}</div>
            <span className="title">Trending</span>
          </li>
          <li>
            <div className="icon">{icons.music}</div>
            <span className="title">Music</span>
          </li>
          <li>
            <div className="icon">{icons.live}</div>
            <span className="title">Live</span>
          </li>
          <li>
            <div className="icon">{icons.gaming}</div>
            <span className="title">Gaming</span>
          </li>
          <li>
            <div className="icon">{icons.sport}</div>
            <span className="title">Sport</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
