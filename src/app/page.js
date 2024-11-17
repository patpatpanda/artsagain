"use client"; // Detta gör att filen blir en klientkomponent

import { useState } from 'react';
import Head from 'next/head';
import './globals.css';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Head>
        <title>Get Lost in Norway</title>
        <meta name="description" content="Be brave - Be inspired. Get Lost in Norway." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <header className="hero">
        <div className="heroVideoWrapper">
          <video className="heroVideo" autoPlay muted loop>
            <source src="/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="heroOverlay"></div>
        <div className="heroContent">
          <h1>Be brave - Be inspired</h1>
          <h2>Get Lost in Norway</h2>
          <p>
            If you are a travel agent, travel planner, concierge agent, an event planner or an
            in-house cooperative travel planner, we are ready to serve you.
          </p>
          <a href="#contact" className="ctaButton">Contact us</a>
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
