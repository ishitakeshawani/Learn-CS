import { React, useState } from "react";
import { AddToPlayListModel } from "../model/add-to-playlist-modal/AddToPlayListModel";
import "./videocard.css";
import {
  addToLikedVideos,
  IsVideoAlreadyLiked,
  RemoveFromLikedVideos,
  addToWatchLater,
  IsVideoAlreadyInWatchLater,
  removeFromWatchLater,
} from "../../utils";
import { usePlayList } from "../../contexts/PlayListProvider";
import { Link } from "react-router-dom";

export function VideoCard({ video }) {
  const [showModal, setShowModal] = useState(false);
  const { playListDispatch, playListState } = usePlayList();
  const _likedVideos = playListState.likedVideos;
  const watchLaterVideos = playListState.watchLaterVideos;

  const likedHandler = (videoId, _likedVideos) => {
    if (IsVideoAlreadyLiked(videoId, _likedVideos)) {
      RemoveFromLikedVideos(videoId, playListDispatch);
    } else {
      addToLikedVideos(video, playListDispatch);
    }
  };

  const watchLaterHandler = (videoID, watchLaterVideos) => {
    if (IsVideoAlreadyInWatchLater(videoID, watchLaterVideos)) {
      removeFromWatchLater(videoID, playListDispatch);
    } else {
      addToWatchLater(video, playListDispatch);
    }
  };
  return (
    <div className="card card-box-shadow">
      <div className="card-section regular-font-weight" id="card-section">
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
              className={`${
                IsVideoAlreadyLiked(video._id, _likedVideos)
                  ? "fas fa-heart save-to-icon"
                  : "fa-regular fa-heart save-to-icon"
              }`}
              onClick={() => likedHandler(video._id, _likedVideos)}
            ></i>
            <i
              className="fa-regular fa-save save-to-icon"
              onClick={() => setShowModal(true)}
            ></i>
            <i
              className={`${
                IsVideoAlreadyInWatchLater(video._id, watchLaterVideos)
                  ? "fas fa-clock save-to-icon"
                  : "fa-regular fa-clock save-to-icon"
              }`}
              onClick={() => watchLaterHandler(video._id, watchLaterVideos)}
            ></i>
          </div>
          {showModal && (
            <AddToPlayListModel
              setShowModal={setShowModal}
              videoId={video._id}
              video={video}
            />
          )}
        </div>
      </div>
    </div>
  );
}
