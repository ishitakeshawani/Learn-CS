import React from "react";
import "./playlistcard.css"

export function PlayListCard({ playlist }) {
  return (
    <div className="playlistcard">
      <div>
        <div className="playlistname">{playlist.title}</div>
        <div className="playlist-videos">{playlist.videos.length} Videos</div>
      </div>
      <i className="fas fa-thin fa-trash playlist-delete-icon"></i>
    </div>
  );
}
