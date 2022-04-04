export const playListReducer = (playListState, { type, payload }) => {
  switch (type) {
    case "INITIALIZE_PLAYLISTS":
      console.log(payload);
      return {
        ...playListState,
        playLists: payload,
      };
    case "ADD_NAME_OF_PLAYLIST":
      console.log(payload, playListState);
      return {
        ...playListState,
        playLists: [
          ...playListState.playLists,
          {
            title: payload,
            videos: [],
          },
        ],
      };
    case "ADD_VIDEO_TO_PLAYLIST":
      return {
        ...playListState,
        playLists: playListState.playLists.map((playlist) =>
          playlist._id === payload.playlistId
            ? {
                ...playlist,
                videos: playlist.videos.concat(payload.video),
              }
            : playlist
        ),
      };
    case "DELETE_PLAYLIST":
      return {
        ...playListState,
        playLists: playListState.playLists.filter(({ _id }) => _id !== payload),
      };
    case "REMOVE_video_from_playlist":
      return {
        ...playListState,
        playLists: playListState.playLists.map((playlist) =>
          playlist._id === payload.playlistId
            ? {
                ...playlist,
                videos: playlist.videos.filter(
                  ({ _id }) => _id !== payload.videoId
                ),
              }
            : playlist
        ),
      };

    default:
      return {
        ...playListState,
      };
  }
};