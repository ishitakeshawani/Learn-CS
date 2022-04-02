import React from "react";
import "./playlists.css";

export function PlayLists() {
  return (
    <div>
      <div className="playlists-section">
        <div className="playlists-header">
          <div className="header-name">My Playlists</div>
          <button className="playlist-btn btn">Create New Playlist</button>
        </div>
      </div>
    </div>
  );
}
