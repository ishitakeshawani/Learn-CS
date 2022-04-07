import React from "react";
import { VideoCard } from "../../components";
import { usePlayList } from "../../contexts";
import "./history.css";
import { clearHistory } from "../../utils";

export function History() {
  const { playListState, playListDispatch } = usePlayList();
  const history = playListState.history;
  console.log(history, playListState);
  return (
    <div className="history-section">
      <div className="playlists-header">
        <div className="header-name">History</div>
        <button className="playlist-btn btn" onClick={() => clearHistory(playListDispatch)}>
          Clear Full History
        </button>
      </div>
      <div className="watch-later-videos-section">
        {history.length > 0 &&
          history.map((video) => <VideoCard video={video} />)}
      </div>
    </div>
  );
}
