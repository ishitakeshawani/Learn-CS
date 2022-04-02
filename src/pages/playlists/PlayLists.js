import { React, useState } from "react";
import { PlayListModel } from "../../components";
import "./playlists.css";

export function PlayLists() {
  const [showModel, setShowModel] = useState(false);
  console.log(showModel);
  return (
    <div>
      <div className="playlists-section">
        <div className="playlists-header">
          <div className="header-name">My Playlists</div>
          <button
            className="playlist-btn btn"
            onClick={() => setShowModel(true)}
          >
            Create New Playlist
          </button>
        </div>
        {showModel && <PlayListModel setShowModel={setShowModel} />}
      </div>
    </div>
  );
}
