"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function Hero({ videos, logoSrc, language, toggleLanguage }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setIsFading(false);
      }, 500);
    };

    if (videoElement) {
      videoElement.src = videos[currentVideoIndex];
      videoElement.load();
      videoElement
        .play()
        .catch((err) => console.error("Video playback failed:", err));
      videoElement.onended = handleVideoEnd;
    }

    return () => {
      if (videoElement) videoElement.onended = null;
    };
  }, [currentVideoIndex, videos]);

  return (
    <div className="hero">
      {/* Header */}
      <header className="navLinks">
        <button onClick={toggleLanguage} className="languageButton">
          {language === "en" ? "Svenska" : "English"}
        </button>
        <a href="#about">{language === "en" ? "About" : "Om oss"}</a>
        <a href="#services">{language === "en" ? "Services" : "Tjänster"}</a>
        <a href="#contact">{language === "en" ? "Contact" : "Kontakt"}</a>
      </header>

      {/* Videon */}
      <video
        ref={videoRef}
        className="heroVideo"
        muted
        autoPlay
        playsInline
        style={{
          transition: "opacity 0.5s ease-in-out",
          opacity: isFading ? 0 : 1,
        }}
      />
      {/* Overlay */}
      <div className="heroOverlay"></div>
      {/* Innehåll */}
      <div className="heroContent">
        <Image
          src={logoSrc}
          alt="Logotyp"
          width={150}
          height={50}
          className="heroLogo"
        />
        <h1 className="heroLogoText">Arts Logistics</h1>
        <p>Your trusted logistics partner</p>
      </div>
    </div>
  );
}
