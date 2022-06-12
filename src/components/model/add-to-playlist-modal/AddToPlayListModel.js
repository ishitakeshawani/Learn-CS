import { React, useState, useEffect, useRef } from "react";
import { usePlayList } from "../../../contexts/PlayListProvider";
import {
  removeVideoFromPlayList,
  isVideoExistInPlayList,
  addVideoToPlayList,
  addNewPlayList,
} from "../../../utils";
import "./addtoplaylistmodel.css";

export function AddToPlayListModel({ setShowModal, videoId, video, showModal }) {
  const modalRef = useRef(null);
  const [error, setError] = useState(false);
  const [playListName, setPlayListName] = useState("");
  const [showPlayListForm, setShowPlayListForm] = useState(false);
  const { playListState, playListDispatch } = usePlayList();
  const playLists = playListState.playLists;
  const playlistHandler = (videoId, playlistID, playLists, playlist) => {
    if (!isVideoExistInPlayList(videoId, playlistID, playLists)) {
      addVideoToPlayList(
        playlistID,
        playlist,
        playListDispatch,
        video,
        playLists
      );
    } else {
      removeVideoFromPlayList(playlistID, videoId, playListDispatch);
    }
  };
  const handleSubmit = () => {
    if (playListName) {
      setShowPlayListForm(false);
      playListDispatch({
        type: "ADD_NAME_OF_PLAYLIST",
        payload: playListName,
      });
      addNewPlayList(playListName, playListDispatch);
      setPlayListName("");
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleClickOutside = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());

    if (!path.includes(modalRef.current)) {
      setShowModal(!showModal);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="add-playlist-model">
      <div className="add-playlist-model-content" ref={modalRef}>
        <div className="add-playlist-model-header">
          <div className="add-playlist-model-header-name">Save to</div>
          <i
            class="fas fa-times model-cancel-btn"
            onClick={() => setShowModal(false)}
          ></i>
        </div>
        <div className="add-playlist-model-list">
          {playLists.length > 0 &&
            playLists.map((playlist) => (
              <div>
                <label
                  key={playlist._id}
                  htmlFor=""
                  className="add-playlist-model-list-item"
                >
                  <input
                    type="checkbox"
                    id={playlist._id}
                    checked={isVideoExistInPlayList(
                      videoId,
                      playlist._id,
                      playLists
                    )}
                    onChange={() =>
                      playlistHandler(
                        videoId,
                        playlist._id,
                        playLists,
                        playlist
                      )
                    }
                  />

                  {playlist.title}
                </label>
              </div>
            ))}
          {!showPlayListForm ? (
            <div
              className="create-playlist-modal-section"
              onClick={() => setShowPlayListForm(true)}
            >
              <i class="fa-thin fa-plus"></i>
              <div className="create-playlist-btn-text">
                Create a new playlist
              </div>
            </div>
          ) : (
            <div className="new-playlist-name-section-modal">
              <label
                htmlFor="name"
                className="new-playlist-name-section-modal-label"
              >
                Name
              </label>
              <input
                placeholder="Enter playlist name.."
                type="text"
                className="new-playlist-name-section-modal-input"
                onChange={(e) => setPlayListName(e.target.value)}
                required
              />
              {error && <div className="error-playlist-name">required</div>}
              <button
                className="create-playlist-btn-modal"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Create
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
