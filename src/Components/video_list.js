import React from 'react';
import VideoItem from './video_item';

const VideoList = ({videos,onVideoSelect})=>{

    const Lvideos = videos.map(v => <VideoItem video={v} key={v.etag} onVideoSelect={onVideoSelect} />)

  return (
    <ul className="col-md-4 mt-4 list-group">
      {Lvideos}
    </ul>
);
}

export default VideoList;
