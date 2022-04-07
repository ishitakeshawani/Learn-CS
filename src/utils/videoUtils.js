import axios from "axios";

export const getVideosByCategory = (videos, selectedCategory) => {
  return videos.filter((video) =>
    selectedCategory !== "All" ? video.category === selectedCategory : videos
  );
};

export const addToLikedVideos = async (video, playListDispatch) => {
  console.log(video,localStorage.getItem("token"))
  try {
    const {
      data: { likes },
    } = await axios.post(
      "api/user/likes",
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
    console.log(error);
  }
};

export const IsVideoAlreadyLiked = (videoId, _likedVideos) => {
  return _likedVideos ? _likedVideos.some(({ _id }) => _id === videoId) : false;
};

export const IsVideoAlreadyInWatchLater = (videoId, watchLaterVideos) => {
  return watchLaterVideos ? watchLaterVideos.some(({ _id }) => _id === videoId) : false;
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
    console.log(error);
  }
};
