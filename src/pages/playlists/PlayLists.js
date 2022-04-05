import { React, useState, useEffect } from "react";
import { PlayListCard, PlayListModel } from "../../components";
import { usePlayList } from "../../contexts";
import "./playlists.css";
import axios from "axios";

export function PlayLists() {
  const [showModel, setShowModel] = useState(false);
  const { playListState, playListDispatch } = usePlayList();
  const playLists = playListState.playLists;
  console.log(playLists);

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
        <div className="playLists">
          {playLists.length > 0 &&
            playLists.map((playlist) => <PlayListCard playlist={playlist} />)}
        </div>
        {showModel && <PlayListModel setShowModel={setShowModel} />}
      </div>
    </div>
  );
}
