import React from 'react';
import './styles.css'; // Assuming you have this file to style your video player

const VideoPlayer = () => {
  const videoId = "MxeuBbv66fo"; // Replace with your actual YouTube video ID
  const videoSrc = `https://www.youtube.com/embed/${videoId}?rel=0`;

  return (
    <div className="video-player-container">
      <iframe
        className="video-player"
        src={videoSrc}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
