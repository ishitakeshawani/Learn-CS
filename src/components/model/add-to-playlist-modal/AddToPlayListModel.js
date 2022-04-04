import React from "react";
import { usePlayList } from "../../../contexts/PlayListProvider";
import "./addtoplaylistmodel.css";

export function AddToPlayListModel({ setShowModal }) {
  const { playListState } = usePlayList();
  const playLists = playListState.playLists;
  return (
    <div className="add-playlist-model">
      <div className="add-playlist-model-content">
        <div className="add-playlist-model-header">
          <div className="add-playlist-model-header-name">Save to</div>
          <i
            class="fas fa-times model-cancel-btn"
            onClick={() => setShowModal(false)}
          ></i>
        </div>
        <div className="add-playlist-model-list">
          <label htmlFor="" className="add-playlist-model-list-item">
            <input type="checkbox" />
            Watch Later
          </label>
          <label htmlFor="" className="add-playlist-model-list-item">
            <input type="checkbox" />
            Liked Videos
          </label>
          {playLists.length > 0 &&
            playLists.map((playlist) => (
              <label htmlFor="" className="add-playlist-model-list-item">
                <input type="checkbox" />
                {playlist.title}
              </label>
            ))}
        </div>
      </div>
    </div>
  );
}
