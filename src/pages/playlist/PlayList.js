import { Link } from "react-router-dom";
import { usePlayList } from "../../contexts";
import { React } from "react";
import { useParams } from "react-router";
import "./playlist.css";
import { deletePlayList, removeVideoFromPlayList } from "../../utils";
import { useNavigate } from "react-router";

export function PlayList() {
  const playListId = useParams();
  const { playListState, playListDispatch } = usePlayList();
  const playLists = playListState.playLists;
  const playList = playLists.find(({ _id }) => _id === playListId.playListId);
  const navigate = useNavigate();
  
  return (
    <div className="playlist">
      <div className="playlist-header">
        <div className="playlist-header-name">{playList.title}</div>
        <button
          className="btn delete-playlist-btn"
          onClick={() => {
            deletePlayList(playListId.playListId, playListDispatch);
            navigate("/playlists");
          }}
          >
          Delete this Playlist
        </button>
      </div>
      <div className="playlist-section">
        {playList &&
          playList.videos.length > 0 &&
          playList.videos.map((video) => (
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
                    {" "}
                    {video.title}{" "}
                  </div>
                  <p className="author-name">by {video.name}</p>
                  <div className="views-time">
                    <p>{video.views} views</p>
                    <p>•</p>
                    <p>{video.duration}</p>
                    <i
                      class="fas fa-trash delete-to-icon"
                      onClick={() =>
                        removeVideoFromPlayList(
                          playListId.playListId,
                          video._id,
                          playListDispatch
                        )
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
