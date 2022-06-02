import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const addNewPlayList = async (playListName, playListDispatch) => {
  try {
    const {
      data: { playlists },
    } = await axios.post(
      "api/user/playlists",
      {
        playlist: { title: playListName },
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    playListDispatch({
      type: "INITIALIZE_PLAYLISTS",
      payload: playlists,
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

export const deletePlayList = async (playListId, playListDispatch) => {
  try {
    await axios.delete(`/api/user/playlists/${playListId}`, {
      headers: { authorization: localStorage.getItem("token") },
    });
    playListDispatch({
      type: "DELETE_PLAYLIST",
      payload: playListId,
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

export const removeVideoFromPlayList = async (
  playlistId,
  videoId,
  playListDispatch
) => {
  try {
    await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
      headers: { authorization: localStorage.getItem("token") },
    });
    playListDispatch({
      type: "REMOVE_video_from_playlist",
      payload: { playlistId, videoId },
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

export const addVideoToPlayList = async (
  playlistID,
  playlist,
  playListDispatch,
  video,
  playLists
) => {
  try {
    await axios.post(
      `/api/user/playlists/${playlistID}`,
      {
        video,
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    playListDispatch({
      type: "ADD_VIDEO_TO_PLAYLIST",
      payload: { video, playlistID },
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

export const isVideoExistInPlayList = (videoID, playlistID, playLists) => {
  return playLists
    .find(({ _id }) => _id === playlistID)
    .videos.some(({ _id }) => _id === videoID);
};

export const addToWatchLater = async (video, playListDispatch) => {
  try {
    const {
      data: { watchlater },
    } = await axios.post(
      "/api/user/watchlater",
      {
        video,
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    playListDispatch({
      type: "ADD_TO_WATCH_LATER",
      payload: watchlater,
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

export const removeFromWatchLater = async (videoId, playListDispatch) => {
  try {
    const {
      data: { watchlater },
    } = await axios.delete(`/api/user/watchlater/${videoId}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    playListDispatch({
      type: "REMOVE_FROM_WATCH_LATER",
      payload: watchlater,
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

export const addVideoToHistory = async (video, playListDispatch) => {
  try {
    video &&
      (await axios.post(
        "/api/user/history",
        {
          video,
        },
        {
          headers: { authorization: localStorage.getItem("token") },
        }
      ));
    playListDispatch({
      type: "ADD_TO_HISTORY",
      payload: video,
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

export const clearHistory = async (playListDispatch) => {
  try {
    const {
      data: { history },
    } = await axios.delete("/api/user/history/all", {
      headers: { authorization: localStorage.getItem("token") },
    });
    playListDispatch({
      type: "CLEAR_HISTORY",
      payload: history,
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

export const removeVideoFromHistory = async (videoId, playListDispatch) => {
  try {
    await axios.delete(`/api/user/history/${videoId}`, {
      headers: { authorization: localStorage.getItem("token") },
    });
    playListDispatch({
      type: "DELETE_FROM_HISTORY",
      payload: videoId,
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
