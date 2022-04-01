import React from "react";
import "./videocard.css";

export function VideoCard({ video }) {
  return (
    <div className="card card-box-shadow">
      <div className="card-section regular-font-weight" id="card-section">
        <img className="card-img" src={video.image} alt="thumbnail" />
        <div className="card-header">
          <div className="card-header-title bold-font-weight">
            {" "}
            {video.title}{" "}
          </div>
          <p className="author-name">by {video.name}</p>
          <div className="views-time">
            <p>{video.views} views</p>
            <p>•</p>
            <p>{video.duration}</p>
            <button className="no-style-btn">Watch Later</button>
          </div>
        </div>
      </div>
    </div>
  );
}
