"use client"; // Detta gör att filen blir en klientkomponent

import { useState, useEffect } from 'react';
import Head from 'next/head';
import './globals.css';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  // Array med video URLs
  const videos = ['/videos/train.mp4', '/videos/sea.mp4', '/videos/road.mp4'];

  useEffect(() => {
    const videoInterval = setInterval(() => {
      setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length); // Växla till nästa video
    }, 5000); // Byt video var 5:e sekund

    return () => clearInterval(videoInterval); // Rensa intervallet när komponenten avmonteras
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Hero Section */}
      <header className="hero">
        {/* Navigation Links */}
        <nav className="navLinks">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="heroVideoWrapper">
          <video
            className="heroVideo"
            autoPlay
            muted
            loop
            key={currentVideo} // Nyckel för att tvinga omrendering av video
          >
            <source src={videos[currentVideo]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="heroOverlay"></div>
        <div className="heroContent">
          <img src="/images/logo.png" alt="Logotyp" className="heroLogo" />
          <h3 className="heroLogoText">Arts Logistics</h3>
        </div>
      </header>

      {/* Cards Section */}
      <div className="cardsContainer">
        <div className="card">
          <div className="cardIcon">🚢</div>
          <h4>Sea</h4>
          <p>Ship your goods anywhere with economy in mind.</p>
          <button>Read more</button>
        </div>
        <div className="card">
          <div className="cardIcon">✈️</div>
          <h4>Air</h4>
          <p>Fast and reliable air freight provided by professionals.</p>
          <button>Read more</button>
        </div>
        <div className="card">
          <div className="cardIcon">🚛</div>
          <h4>Road</h4>
          <p>Move your cargo flexibly and efficiently by road.</p>
          <button>Read more</button>
        </div>
        <div className="card">
          <div className="cardIcon">🌍</div>
          <h4>Project logistics</h4>
          <p>When the box doesn’t fit, we think outside of it.</p>
          <button>Read more</button>
        </div>
      </div>

      {/* Main Sections */}
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
