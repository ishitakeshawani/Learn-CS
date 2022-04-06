import React from "react";
import "./history.css";

export function History() {
  return (
    <div className="history-section">
      <div className="playlists-header">
        <div className="header-name">History</div>
        <button className="playlist-btn btn">Clear Full History</button>
      </div>
      <div className="watch-later-videos-section"></div>
    </div>
  );
}
