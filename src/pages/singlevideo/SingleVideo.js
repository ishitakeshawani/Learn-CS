import { React, useEffect, useState } from "react";
import { SideBar } from "../../components";
import "./singlevideo.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { usePlayList, useVideo } from "../../contexts";
import {
  addToLikedVideos,
  IsVideoAlreadyLiked,
  RemoveFromLikedVideos,
  addToWatchLater,
  IsVideoAlreadyInWatchLater,
  removeFromWatchLater,
} from "../../utils";
import { AddToPlayListModel } from "../../components";

export function SingleVideo() {
  const { videoState } = useVideo();
  const { playListDispatch, playListState } = usePlayList();
  const videos = videoState.videos;
  const _likedVideos = playListState.likedVideos;
  const watchLaterVideos = playListState.watchLaterVideos;
  const getVideo = (videoId) => {
    return videos.filter(({ _id }) => _id === videoId);
  };
  const { videoId } = useParams();
  const [video, setVideo] = useState(getVideo(videoId));

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const {
          data: { video },
        } = await axios.get(`/api/video/${videoId}`);
        setVideo(video);

        video && setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [videoId]);

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
    <div className="single-video-page">
      <SideBar />
      {loading ? (
        "Loading"
      ) : (
        <div className="single-video-section">
          <div className="video-container">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              frameborder="0"
              title="youtube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-title">{video.title}</div>
          <div className="video-main-section">
            <div className="video-detail-section">
              <div className="video-creater-name">By {video.name}</div>
              <div className="flex">
                <div className="flex-item">
                  <i class="fa-solid fa-eye icon"></i>
                  <div>{video.views} views</div>
                </div>
                <div className="flex-item">
                  <i class="fa-solid fa-clock"></i>
                  <div>{video.duration}</div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div
                className="video-detail-item"
                onClick={() => likedHandler(videoId, _likedVideos)}
              >
                <i
                  className={`${
                    IsVideoAlreadyLiked(videoId, _likedVideos)
                      ? "fas fa-heart save-to-icon"
                      : "fa-regular fa-heart save-to-icon"
                  }`}
                ></i>
                <div>Like</div>
              </div>
              <div
                className="video-detail-item"
                onClick={() => setShowModal(true)}
              >
                <i class="fa-regular fa-bookmark"></i>
                <div>Save To Playlist</div>
              </div>
              {showModal && (
                <AddToPlayListModel
                  showModal={showModal}
                  setShowModal={setShowModal}
                  videoId={video._id}
                  video={video}
                />
              )}
              <div
                className="video-detail-item"
                onClick={() => watchLaterHandler(video._id, watchLaterVideos)}
              >
                <i
                  className={`${
                    IsVideoAlreadyInWatchLater(video._id, watchLaterVideos)
                      ? "fas fa-clock save-to-icon"
                      : "fa-regular fa-clock save-to-icon"
                  }`}
                ></i>
                <div>Watch Later</div>
              </div>
            </div>
          </div>
          <div className="video-discription">{video.description}</div>
        </div>
      )}
    </div>
  );
}
