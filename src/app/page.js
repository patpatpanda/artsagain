"use client"; // Detta gör att filen blir en klientkomponent

import { useState, useEffect } from 'react';

import './globals.css';
import CallToAction from './CallToAction';



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
    <div className="cardIcon">✈️</div>
    <h4>Air</h4>
    <p>Fast and reliable air freight provided by professionals.</p>
  </div>
  <div className="card">
    <div className="cardIcon">🚛</div>
    <h4>Road</h4>
    <p>Move your cargo flexibly and efficiently by road.</p>
  </div>
  <div className="card">
  <div className="cardIcon">🚆</div> {/* Ändra ikonen till en tågemoji */}
  <h4>Train</h4>
  <p>Reliable and sustainable rail freight for efficient transport.</p> {/* Anpassa beskrivningen */}
</div>

 
  <div className="card">
    <div className="cardIcon">🚢</div>
    <h4>Sea</h4>
    <p>Ship your goods anywhere with economy in mind.</p>
  </div>
 
  <div className="card">
    <div className="cardIcon">🌍</div>
    <h4>Project Logistics</h4>
    <p>When the box doesn’t fit, we think outside of it.</p>
  </div>
  <div className="card">
    <div className="cardIcon">⚡</div>
    <h4>Express</h4>
    <p>When speed is critical, we deliver with urgency and precision.</p>
  </div>
  <div className="card">
    <div className="cardIcon">📦</div>
    <h4>Courier</h4>
    <p>Reliable and secure door-to-door courier services for your needs.</p>
  </div>
</div>


      <section id="about" className="section">
  <h2>About Us</h2>
  <div className="aboutContent">
    <p>
      At ARTS, logistics is not just about transportation – it’s about delivering tailored solutions. We simplify logistics by offering one contact, one supplier, and one invoice. No complicated chains, just seamless service.
    </p>
    <p>
      With a global network and a personalized approach, we connect you with the best partners for your unique needs. Whether it's managing time-sensitive deliveries, optimizing routes, or handling customs, we ensure every step is smooth and transparent.
    </p>
    <p>
      Choose ARTS for precision, reliability, and excellence in logistics. Discover the art of logistics with us!
    </p>
  </div>
</section>

<div className="separator"></div> {/* Separator */}
<section id="services" className="section servicesSection">
  <h2>Our Services</h2>
  <div className="servicesContainer">
    <div className="serviceCard">
      <div className="serviceIcon">🧠</div>
      <h4>Expert Consultation</h4>
      <p>Receive expert advice, risk assessments, and detailed planning.</p>
    </div>
    <div className="serviceCard">
      <div className="serviceIcon">📊</div>
      <h4>Risk Assessment</h4>
      <p>Thorough analysis and strategic preparation for every project.</p>
    </div>
    <div className="serviceCard">
      <div className="serviceIcon">📄</div>
      <h4>Document Handling</h4>
      <p>Seamlessly compile and manage all necessary documentation.</p>
    </div>
    <div className="serviceCard">
      <div className="serviceIcon">📦</div>
      <h4>Packing and Handling</h4>
      <p>Secure and proficient packing to ensure safe transportation.</p>
    </div>
    <div className="serviceCard">
      <div className="serviceIcon">👁️</div>
      <h4>Total Visibility</h4>
      <p>Transparent and clear communication throughout the process.</p>
    </div>
    <div className="serviceCard">
      <div className="serviceIcon">🧾</div>
      <h4>Consolidated Invoice</h4>
      <p>One contact, one supplier, and one invoice for simplicity.</p>
    </div>
    <div className="serviceCard">
      <div className="serviceIcon">🤝</div>
      <h4>Devoted Support</h4>
      <p>Personalized assistance and dedicated support for every need.</p>
    </div>
  </div>
</section>


<div className="separator"></div> {/* Separator */}

<section id="contact" className="section">
  <h2>Contact</h2>
  <p>Reach out to us for personalized travel plans.</p>
</section>


<CallToAction/>
      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Get Lost in Norway. All rights reserved.</p>
      </footer>
    </div>
  );
}
