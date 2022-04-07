import React from "react";
import { usePlayList } from "../../contexts";
import "./history.css";
import { Link } from "react-router-dom";
import { clearHistory, removeVideoFromHistory } from "../../utils";

export function History() {
  const { playListState, playListDispatch } = usePlayList();
  const history = playListState.history;
  console.log(history, playListState);
  return (
    <div className="history-section">
      <div className="playlists-header">
        <div className="header-name">History</div>
        <button
          className="playlist-btn btn"
          onClick={() => clearHistory(playListDispatch)}
        >
          Clear Full History
        </button>
      </div>
      <div className="watch-later-videos-section">
        {history.length > 0 &&
          history.map((video) => (
            <div className="card card-box-shadow">
              <div
                className="card-section regular-font-weight"
                id="card-section"
              >
                <Link to={`/video/${video._id}`}>
                  <img className="card-img" src={video.image} alt="thumbnail" />
                </Link>
                <div className="card-header">
                  <div className="card-header-title bold-font-weight">
                    {video.title}
                  </div>
                  <p className="author-name">by {video.name}</p>
                  <div className="views-time">
                    <p>{video.views} views</p>
                    <p>•</p>
                    <p>{video.duration}</p>
                    <i
                      class="fas fa-trash delete-to-icon"
                      onClick={() =>
                        removeVideoFromHistory(video._id, playListDispatch)
                      }
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
