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
    console.log(playlists)
  } catch (error) {
    console.log(error);
  }
};
