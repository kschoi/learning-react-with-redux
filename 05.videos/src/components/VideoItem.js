import React from 'react';
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} alt="" />
      <div className="content">
        {video.snippet.title}
      </div>
    </div>
  );
}

export default VideoItem;