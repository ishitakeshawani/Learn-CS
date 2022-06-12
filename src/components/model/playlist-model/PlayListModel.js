import { React, useState, useEffect, useRef } from "react";
import { usePlayList } from "../../../contexts/PlayListProvider";
import "./playlistmodel.css";
import { addNewPlayList } from "../../../utils";

export function PlayListModel({ setShowModel }) {
  const modalRef = useRef(null);
  const [playListName, setPlayListName] = useState("");
  const { playListDispatch } = usePlayList();
  const handleSubmit = () => {
    setShowModel(false);
    playListDispatch({
      type: "ADD_NAME_OF_PLAYLIST",
      payload: playListName,
    });
    addNewPlayList(playListName, playListDispatch);
  };
  const handleClickOutside = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());

    if (!path.includes(modalRef.current)) {
      setShowModel(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="playlist-model">
      <div className="playlist-model-content" ref={modalRef}>
        <div className="model-header">
          <div className="model-header-name">Create New Playlist</div>
          <i
            class="fas fa-times model-cancel-btn"
            onClick={() => setShowModel(false)}
          ></i>
        </div>
        <div className="model-last-section">
          <label htmlFor="name" className="playlist-name">
            Playlist Name
          </label>
          <input
            type="text"
            className="create-playlist-input"
            onChange={(e) => setPlayListName(e.target.value)}
          />
          <button className="btn playlist-btn" onClick={() => handleSubmit()}>
            Create Playlist
          </button>
        </div>
      </div>
    </div>
  );
}
