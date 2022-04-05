import React from 'react'
import { usePlayList } from '../../contexts/PlayListProvider'
import "./watchlater.css";
import { VideoCard } from '../../components/videocard/VideoCard';

export function WatchLater() {
  const {playListState} = usePlayList();
  const watchLaterList = playListState.watchLaterVideos;
  return (
    <div className='watch-later'>
        <div className="watch-later-videos-title">Watch Later</div>
        <div className="watch-later-videos-section">
        {
          watchLaterList.length > 0 &&
          watchLaterList.map((video) => (
            <VideoCard video={video} key={video._id} />
          ))
        }
        </div>
    </div>
  )
}
