import React, { useState, useRef } from 'react';

const Camera = () => {
  const [cameraActive, setCameraActive] = useState(false);
  const videoRef = useRef(null);

  const toggleCamera = async () => {
    if (cameraActive) {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
      setCameraActive(false);
    } else {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
        setCameraActive(true);
      } catch (error) {
        console.error("Error accessing the camera: ", error);
      }
    }
  };

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline width="200" height="200" style={{ display: cameraActive ? 'block' : 'none' }}></video>
      <button onClick={toggleCamera}>{cameraActive ? 'Close Camera' : 'Open Camera'}</button>
    </div>
  );
};

export default Camera;
