import React from "react";
import "./playlistmodel.css";

export function PlayListModel({ setShowModel }) {
  return (
    <div className="playlist-model">
      <div className="playlist-model-content">
        <div className="model-header">
          <div className="model-header-name">Create New Playlist</div>
          <div className="model-cancel-btn" onClick={() => setShowModel(false)}>
            x
          </div>
        </div>
        <div className="model-last-section">
          <label htmlFor="name" className="playlist-name">
            Playlist Name
          </label>
          <input type="text" className="create-playlist-input" />
          <button
            className="btn playlist-btn"
            onClick={() => setShowModel(false)}
          >
            Create Playlist
          </button>
        </div>
      </div>
    </div>
  );
}
