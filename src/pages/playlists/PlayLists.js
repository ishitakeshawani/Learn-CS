import { React, useState, useEffect } from "react";
import { PlayListCard, PlayListModel } from "../../components";
import { usePlayList } from "../../contexts";
import "./playlists.css";
import axios from "axios";

export function PlayLists() {
  const [showModel, setShowModel] = useState(false);
  const { playListState, playListDispatch } = usePlayList();
  const playLists = playListState.playLists;
 
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { playlists },
        } = await axios.get("/api/user/playlists", {
          headers: { authorization: localStorage.getItem("token") },
        });

        playListDispatch({ type: "INITIALIZE_PLAYLISTS", payload: playlists });
        console.log(playlists);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [playListDispatch]);
 

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
