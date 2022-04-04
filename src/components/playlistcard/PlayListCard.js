import React from "react";
import "./playlistcard.css";
import { deletePlayList } from "../../utils";
import { usePlayList } from "../../contexts";

export function PlayListCard({ playlist }) {
  const { playListDispatch } = usePlayList();
  return (
    <div className="playlistcard">
      <div>
        <div className="playlistname">{playlist.title}</div>
        <div className="playlist-videos">{playlist.videos.length} Videos</div>
      </div>
      <i
        className="fas fa-thin fa-trash playlist-delete-icon"
        onClick={() => deletePlayList(playlist._id, playListDispatch)}
      ></i>
    </div>
  );
}
