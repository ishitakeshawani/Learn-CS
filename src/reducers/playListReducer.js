export const playListReducer = (playListState, { type, payload }) => {
  switch (type) {
      
    case "INITIALIZE_PLAYLISTS":
        console.log(payload)
      return {
        ...playListState,
        playLists: payload,
      };
    case "ADD_NAME_OF_PLAYLIST":
        console.log(payload,playListState)
      return {
        ...playListState,
        playLists: [
          ...playListState.playLists,
          {
             title:payload,
             videos: []
          },
        ],
      };

    default:
      return {
        ...playListState,
      };
  }
};
