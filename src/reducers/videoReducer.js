export const videoReducer = (videoState, { type, payload }) => {
  switch (type) {
    case "INITIALIZE_VIDEOS":
      return {
        ...videoState,
        videos: payload,
      };
    case "INITIALIZE_CATEGORIES":
      return {
        ...videoState,
        categories: payload,
      };
    case "SET_SELECTED_CATEGORY":
      return {
        ...videoState,
        selectedCategory: payload,
      };

    default:
      return {
        ...videoState,
      };
  }
};
