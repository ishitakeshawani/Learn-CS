import axios from "axios";
import { async } from "q";

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
    console.log(playlists);
  } catch (error) {
    console.log(error);
  }
};

export const deletePlayList = async (playListId, playListDispatch) => {
  try {
    const {
      data: { playlists },
    } = await axios.delete(`/api/user/playlists/${playListId}`, {
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
