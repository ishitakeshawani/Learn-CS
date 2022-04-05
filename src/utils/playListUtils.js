import axios from "axios";

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
    console.log(error);
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
    console.log(error);
  }
};



export const removeVideoFromPlayList = async (
  playlistId,
  videoId,
  playListDispatch
) => {
  try {
    const {
      data: { playlist },
    } = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
      headers: { authorization: localStorage.getItem("token") },
    });
    playListDispatch({
      type: "REMOVE_video_from_playlist",
      payload: { playlistId, videoId },
    });
  } catch (e) {
    console.log(e);
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
    const {
      data: { playlist },
    } = await axios.post(
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
    payload: {video,playlistID}
  })
  } catch (error) {
    console.log(error);
  }
};

export const isVideoExistInPlayList = (videoID, playlistID, playLists) => {
  return playLists
    .find(({ _id }) => _id === playlistID)
    .videos.some(({ _id }) => _id === videoID);
};