import { React } from "react";
import { usePlayList } from "../../../contexts/PlayListProvider";
import {
  removeVideoFromPlayList,
  isVideoExistInPlayList,
  addVideoToPlayList,
} from "../../../utils";
import "./addtoplaylistmodel.css";


export function AddToPlayListModel({ setShowModal, videoId, video }) {
  const { playListState, playListDispatch } = usePlayList();
  const playLists = playListState.playLists;
  const playlistHandler = (videoID, playlistID, playLists, playlist) => {
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
                      video._id,
                      playlist._id,
                      playLists
                    )}
                    onChange={() =>
                      playlistHandler(
                        video._id,
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
        </div>
      </div>
    </div>
  );
}
