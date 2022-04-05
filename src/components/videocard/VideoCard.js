import { React, useState } from "react";
import { AddToPlayListModel } from "../model/add-to-playlist-modal/AddToPlayListModel";
import "./videocard.css";
import { addToLikedVideos,IsVideoAlreadyLiked, RemoveFromLikedVideos } from "../../utils";
import { usePlayList } from "../../contexts/PlayListProvider";

export function VideoCard({ video }) {
  const [showModal, setShowModal] = useState(false);
  const { playListDispatch, playListState } = usePlayList();
  const _likedVideos = playListState.likedVideos;
  console.log(_likedVideos)
 
  const likedHandler = (videoId,_likedVideos) => {
    if (IsVideoAlreadyLiked(videoId,_likedVideos)) {
      console.log(IsVideoAlreadyLiked(videoId,_likedVideos));
      RemoveFromLikedVideos(videoId,playListDispatch);
    } else {
      addToLikedVideos(video, playListDispatch);
      console.log(IsVideoAlreadyLiked(videoId,_likedVideos));
    }

    console.log(IsVideoAlreadyLiked(videoId,_likedVideos));
  };
  return (
    <div className="card card-box-shadow">
      <div className="card-section regular-font-weight" id="card-section">
        <img className="card-img" src={video.image} alt="thumbnail" />
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
                IsVideoAlreadyLiked(video._id,_likedVideos)
                  ? "fas fa-heart save-to-icon"
                  : "fa-regular fa-heart save-to-icon"
              }`}
              onClick={() => likedHandler(video._id,_likedVideos)}
            ></i>
            <i
              className="fa-regular fa-save save-to-icon"
              onClick={() => setShowModal(true)}
            ></i>
            <button className="no-style-btn">Watch Later</button>
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
