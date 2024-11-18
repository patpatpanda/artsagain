"use client"; // Detta gör att filen blir en klientkomponent

import { useState, useEffect } from 'react';
import Head from 'next/head';
import './globals.css';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = ['/videos/train.mp4', '/videos/sea.mp4', '/videos/road.mp4'];

  useEffect(() => {
    const videoInterval = setInterval(() => {
      setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
    }, 5000); // Växla video var 5:e sekund

    return () => clearInterval(videoInterval); // Rensa intervallet vid avmontering
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Hero Section */}
      <header className="hero">
        <div className="heroVideoWrapper">
          <video className="heroVideo" key={currentVideo} autoPlay muted loop>
            <source src={videos[currentVideo]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="heroOverlay"></div>
        <div className="heroContent">
          <img src="/images/logo.png" alt="Logotyp" className="heroLogo" />
          <h3 className="heroLogoText">Arts Logistics</h3>
        </div>
 {/* Cards */}
 <div className="heroCards">
    <div className="card">Card 1</div>
    <div className="card">Card 2</div>
    <div className="card">Card 3</div>
    <div className="card halfInSection">Card 4</div>
  </div>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        
        <nav className={`navLinks ${menuOpen ? 'open' : ''}`}>
          <a href="#about">Om oss</a>
          <a href="#inspired">Tjänster</a>
          <a href="#destinations">Kontakt</a>
        </nav>
      </header>

      {/* Sections */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>We provide exceptional travel experiences tailored to your needs.</p>
      </section>
      <section id="inspired" className="section">
        <h2>Get Inspired</h2>
        <p>Discover the beauty of Norway with our unique travel packages.</p>
      </section>
      <section id="destinations" className="section">
        <h2>Destinations</h2>
        <p>From fjords to mountains, experience the best of Norway.</p>
      </section>
      <section id="team" className="section">
        <h2>Team</h2>
        <p>Our dedicated team ensures your journey is unforgettable.</p>
      </section>
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Reach out to us for personalized travel plans.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Get Lost in Norway. All rights reserved.</p>
      </footer>
    </div>
  );
}
