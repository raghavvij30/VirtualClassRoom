import React from 'react';
import VideoPlayer from '../VideoPlayer';
import Camera from '../Camera'; // Import Camera component
import './styles.css';
import Button from 'react-bootstrap/Button';

const Videos = () => {
  // Function to handle the microphone toggle
  const handleMic = () => {
    console.log('Toggle microphone');
    // Implement microphone toggle functionality here
  };

  // Function to handle screen sharing
  const handleShare = () => {
    console.log('Share screen');
    // Implement screen sharing functionality here
  };

  // Function to handle chat
  const handleChat = () => {
    console.log('Open chat');
    // Implement chat functionality here
  };

  // Function to handle leaving the session
  const handleLeave = () => {
    console.log('Leave the session');
    // Implement leave session functionality here
  };

  return (
    <div className="video-layout">
      <div className="left-panel">
        <Camera /> {/* Camera component */}
        <Button variant="light" onClick={handleMic}>Mic</Button>
        <button onClick={handleShare}>Share</button>
        <button onClick={handleChat}>Chat</button>
        <button onClick={handleLeave}>Leave</button>
      </div>
      <div className="video-area">
        <VideoPlayer /> {/* Video player component */}
      </div>
    </div>
  );
};

export default Videos;
