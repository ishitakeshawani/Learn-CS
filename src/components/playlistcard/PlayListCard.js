import React from "react";
import "./playlistcard.css";
import { deletePlayList } from "../../utils";
import { usePlayList } from "../../contexts";
import { Link } from "react-router-dom";

export function PlayListCard({ playlist }) {
  const { playListDispatch } = usePlayList();
  return (
    <div className="playlistcard link-no-style">
      <div>
        <div className="playlistname">{playlist.title}</div>
        <div className="playlist-videos">{playlist.videos.length} Videos</div>
      </div>
      <div>
        <i
          className="fas fa-thin fa-trash playlist-delete-icon"
          onClick={() => deletePlayList(playlist._id, playListDispatch)}
        ></i>
        <Link to={`/playlist/${playlist._id}`}>
          <i class="fas fa-external-link-alt playlist-view-icon"></i>
        </Link>
      </div>
    </div>
  );
}
