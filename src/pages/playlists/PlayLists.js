import { React, useState } from "react";
import { PlayListCard, PlayListModel } from "../../components";
import { usePlayList } from "../../contexts";
import "./playlists.css";

export function PlayLists() {
  const [showModel, setShowModel] = useState(false);
  const { playListState } = usePlayList();
  const playLists = playListState.playLists;
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
        {console.log(playLists,"j")}
        {console.log(playListState.playLists,"k")}
        <div className="playLists">
          {playLists.length > 0 &&
            playLists.map((playlist) => <PlayListCard playlist={playlist} />)}
        </div>
        {showModel && <PlayListModel setShowModel={setShowModel} />}
      </div>
    </div>
  );
}
