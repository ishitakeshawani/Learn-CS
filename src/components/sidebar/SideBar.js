import React from "react";
import "./sidebar.css";

export function SideBar() {
  return (
    <aside>
      <div className="sidebar">
        <div className="sidebar-item">
          <i class="fa-solid fa-house"></i>
          <span>Home</span>
        </div>
        <div className="sidebar-item">
          <i class="fa-solid fa-play"></i>
          <span>Explore</span>
        </div>
        <div className="sidebar-item">
          <i class="fa-solid fa-play"></i>
          <span>Playlists</span>
        </div>
        <div className="sidebar-item">
          <i class="fa-solid fa-clock"></i>
          <span>Watch later</span>
        </div>
        <div className="sidebar-item">
          <i class="fa-solid fa-thumbs-up"></i>
          <span>Liked videos</span>
        </div>
        <div className="sidebar-item">
          <i class="fa-solid fa-clock-rotate-left"></i>
          <span>History</span>
        </div>
      </div>
    </aside>
  );
}
