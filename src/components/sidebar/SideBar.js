import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

export function SideBar() {
  return (
    <aside>
      <div className="sidebar">
        <NavLink className="link-no-style sidebar-item" to="/">
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </NavLink>
        <NavLink className="link-no-style sidebar-item" to="/explore">
        <i className="fas fa-video"></i>
          <span>Explore</span>
        </NavLink>
        <NavLink className="link-no-style sidebar-item" to="/playlists">
          <i className="fa-solid fa-play"></i>
          <span>Playlists</span>
        </NavLink>
        <NavLink className="link-no-style sidebar-item" to="/watchlater">
          <i className="fa-solid fa-clock"></i>
          <span>Watch later</span>
        </NavLink>
        <NavLink className="link-no-style sidebar-item" to="/likedvideos">
          <i className="fa-solid fa-thumbs-up"></i>
          <span>Liked videos</span>
        </NavLink>
        <NavLink className="link-no-style sidebar-item" to="/history">
          <i className="fa-solid fa-clock-rotate-left"></i>
          <span>History</span>
        </NavLink>
      </div>
    </aside>
  );
}
