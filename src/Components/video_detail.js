import React from 'react';

const VideoDetail = ({video})=>{
  if(video==null){
    return <h3 className="p-2">Loading ...</h3>;
  }
  const videoId= video.id.videoId;
  const url =`https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-8 p-4">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} title={videoId}></iframe>
      </div>
      <div className="detail">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
