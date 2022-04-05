import React from "react";
import { SideBar, VideoCard } from "../../components";
import "./explore.css";
import { useVideo } from "../../contexts/VideoProvider";
import { getVideosByCategory } from "../../utils";

export function Explore() {
  const { videoState, videoDispatch } = useVideo();
  const videosData = videoState.videos;
  const videos = getVideosByCategory(videosData, videoState.selectedCategory);
  const categories = videoState.categories;
  return (
    <div className="explore-page">
      <SideBar />
      <div className="video-section">
        <div className="category-filter-list">
          <div
            className={`category-item ${
              videoState.selectedCategory === "All"
                ? "active-category-item"
                : ""
            } `}
            onClick={() =>
              videoDispatch({
                type: "SET_SELECTED_CATEGORY",
                payload: "All",
              })
            }
          >
            All
          </div>
          {categories.map((category) => (
            <div
              key={category._id}
              className={`category-item ${
                videoState.selectedCategory === category.categoryName
                  ? "active-category-item"
                  : ""
              }`}
              onClick={() =>
                videoDispatch({
                  type: "SET_SELECTED_CATEGORY",
                  payload: category.categoryName,
                })
              }
            >
              {category.categoryName}
            </div>
          ))}
        </div>
        <div className="video-list-section">
          {videos.map((video) => (
            <VideoCard video={video} key={video._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
