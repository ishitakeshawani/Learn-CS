export const getVideosByCategory = (videos, selectedCategory) => {
  return videos.filter((video) =>
    selectedCategory !== "All" ? video.category === selectedCategory : videos
  );
};
