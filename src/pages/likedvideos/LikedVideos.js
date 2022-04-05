import React from "react";
import { VideoCard } from "../../components/videocard/VideoCard";
import { usePlayList } from "../../contexts/PlayListProvider";
import "./likedvideos.css";

export function LikedVideos() {
  const { playListState } = usePlayList();
  const likedVideos = playListState.likedVideos;
  console.log(likedVideos);
  return (
    <div className="likedvideos">
      <div className="liked-videos-title">Liked Videos</div>
      <div className="liked-videos-section">
        {likedVideos.length > 0 &&
          likedVideos.map((video) => (
            <VideoCard video={video} key={video._id} />
          ))}
      </div>
    </div>
  );
}
