"use client";

import { useState, useEffect, useRef } from "react";

const HeroVideo = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
        setIsFading(false);
      }, 500); // Matcha fade-durationen i CSS
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [videos.length]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.src = videos[currentVideo];
      videoElement.load();
      videoElement
        .play()
        .catch((error) => console.error("Video playback failed:", error));
    }
  }, [currentVideo, videos]);

  return (
    <div className={`heroVideoWrapper ${isFading ? "fading" : ""}`}>
      <video
        ref={videoRef}
        className="heroVideo"
        muted
        autoPlay
        playsInline
        preload="auto"
      />
    </div>
  );
};

export default HeroVideo;
