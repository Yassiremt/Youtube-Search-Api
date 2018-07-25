import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {

  const THUMB_V = video.snippet.thumbnails.default.url;
  return (<a href="#Uvideo" onClick={() => onVideoSelect(video)}>
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left p-2">
          <img alt={video.snippet.title} className="media-object" src={THUMB_V}/>
        </div>
        <div className="media-body p-2">
          <div className="media-heading" onClick={() => video}>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  </a>);
}

export default VideoItem;
