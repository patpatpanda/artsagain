"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Hero({ videos, logoSrc }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // Index för aktuell video
  const [isFading, setIsFading] = useState(false); // Fade-effekt
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      // Starta fade-effekt
      setIsFading(true);
      setTimeout(() => {
        // Byt till nästa video efter fade-effekten
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setIsFading(false);
      }, 500); // Matcha transition-duration i CSS
    };

    if (videoElement) {
      videoElement.src = videos[currentVideoIndex]; // Ladda aktuell video
      videoElement.load();
      videoElement
        .play()
        .catch((err) => console.error("Video playback failed:", err));
      videoElement.onended = handleVideoEnd; // Lägg till lyssnare för när videon är slut
    }

    return () => {
      if (videoElement) videoElement.onended = null; // Ta bort lyssnare vid komponentens avmontering
    };
  }, [currentVideoIndex, videos]);

  return (
    <div className={`hero`}>
      {/* Videon */}
      <video
        ref={videoRef}
        className="heroVideo"
        muted
        autoPlay
        playsInline
        style={{
          transition: "opacity 0.5s ease-in-out",
          opacity: isFading ? 0 : 1, // Fade-effekt
        }}
      />
      {/* Overlay */}
      <div className="heroOverlay"></div>
      {/* Innehåll */}
      <div className="heroContent">
        {/* Logotyp */}
        <Image
          src={logoSrc}
          alt="Logotyp"
          width={250}
          height={250}
          className="heroLogo"
        />
        <h1 className="heroLogoText">Arts Logistics</h1>
        <p>Your trusted logistics partner</p>
      </div>
    </div>
  );
}
