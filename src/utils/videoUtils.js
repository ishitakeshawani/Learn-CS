import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getVideosByCategory = (videos, selectedCategory) => {
  return videos.filter((video) =>
    selectedCategory !== "All" ? video.category === selectedCategory : videos
  );
};

export const addToLikedVideos = async (video, playListDispatch) => {
  try {
    const {
      data: { likes },
    } = await axios.post(
      "/api/user/likes",
      {
        video,
      },
      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );

    playListDispatch({
      type: "ADD_TO_LIKED_VIDEOS",
      payload: likes,
    });
  } catch (error) {
    console.log(error)
    if (error.response.status === 500) {
      const notify = () => toast("Please do login!");
      notify();
    } else if (error.response.status === 404) {
      const notify = () =>
        toast("The email you entered is not Registered. Please do signup!");
      notify();
    } else if (error.response.status === 401) {
      const notify = () => toast("The credentials you entered are invalid");
      notify();
    } else {
      const notify = () => toast(error.message);
      notify();
    }
  }
};

export const IsVideoAlreadyLiked = (videoId, _likedVideos) => {
  return _likedVideos ? _likedVideos.some(({ _id }) => _id === videoId) : false;
};

export const IsVideoAlreadyInWatchLater = (videoId, watchLaterVideos) => {
  return watchLaterVideos
    ? watchLaterVideos.some(({ _id }) => _id === videoId)
    : false;
};

export const RemoveFromLikedVideos = async (videoId, playListDispatch) => {
  try {
    const {
      data: { likes },
    } = await axios.delete(`/api/user/likes/${videoId}`, {
      headers: { authorization: localStorage.getItem("token") },
    });

    playListDispatch({
      type: "REMOVE_FROM_LIKED_VIDEOS",
      payload: likes,
    });
  } catch (error) {
    if (error.response.status === 500) {
      const notify = () => toast("Please do login!");
      notify();
    } else if (error.response.status === 404) {
      const notify = () =>
        toast("The email you entered is not Registered. Please do signup!");
      notify();
    } else if (error.response.status === 401) {
      const notify = () => toast("The credentials you entered are invalid");
      notify();
    } else {
      const notify = () => toast(error.message);
      notify();
    }
  }
};
