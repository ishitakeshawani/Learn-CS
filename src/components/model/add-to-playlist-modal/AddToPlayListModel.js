import { React } from "react";
import { usePlayList } from "../../../contexts/PlayListProvider";
import { addVideoToPlayList, removeVideoFromPlayList } from "../../../utils";
import "./addtoplaylistmodel.css";

export function AddToPlayListModel({ setShowModal, videoId, video }) {
  const { playListState, playListDispatch } = usePlayList();
  const playLists = playListState.playLists;
  const isVideoExistInPlayList = (videoID, playlist) => {
    return playlist.videos.some(({ _id }) => _id === videoID);
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
              <div>
                <label
                  // id={playlist._id}
                  key={playlist._id}
                  htmlFor=""
                  className="add-playlist-model-list-item"
                >
                  <input
                    type="checkbox"
                    id={playlist._id}
                    // checked={}
                    onChange={(e) =>
                      // console.log(isVideoExistInPlayList(videoId,playlist))
                      !isVideoExistInPlayList(videoId, playlist)
                        ? addVideoToPlayList(
                            playlist._id,
                            playlist,
                            playListDispatch,
                            video,
                            playLists
                          )
                        : removeVideoFromPlayList(
                            playlist._id,
                            videoId,
                            playListDispatch
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
