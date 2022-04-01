import React from "react";
import { SideBar, VideoCard } from "../../components";
import { categories } from "../../backend/db/categories";
import "./explore.css";
import { videos } from "../../backend/db/videos";

export function Explore() {
  return (
    <div className="explore-page">
      <SideBar />
      <div className="video-section">
        <div className="category-filter-list">
          <div className="category-item">All</div>
          {categories.map((category) => (
            <div className="category-item">{category.categoryName}</div>
          ))}
        </div>
        <div className="video-list-section">
          {videos.map((video) => (
            <VideoCard video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}
