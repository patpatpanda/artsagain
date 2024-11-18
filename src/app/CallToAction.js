"use client";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./CallToAction.module.css";

const CallToAction = ({ language }) => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState("");

  const translations = {
    en: {
      title: "Contact Us",
      subtitle: "We look forward to hearing from you! Fill out the form below or call us for a personal conversation.",
      email: "Your Email Address",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      sent: "Thank you! Your message has been sent.",
      error: "Something went wrong. Please try again later.",
      social: "Follow us on Social Media",
      contactInfo: "Email: ops@artslogistics.se | Phone: +46 70-549 14 14",
    },
    sv: {
      title: "Kontakta oss",
      subtitle: "Vi ser fram emot att höra av dig! Fyll i formuläret nedan eller ring oss för ett personligt samtal.",
      email: "Din e-postadress",
      subject: "Ämne",
      message: "Meddelande",
      send: "Skicka meddelande",
      sending: "Skickar...",
      sent: "Tack! Ditt meddelande har skickats.",
      error: "Något gick fel. Försök igen senare.",
      social: "Följ oss på sociala medier",
      contactInfo: "E-post: ops@artslogistics.se | Telefon: +46 70-549 14 14",
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(translations[language].sending);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus(translations[language].sent);
        setFormData({ email: "", subject: "", message: "", honeypot: "" });
        setTimeout(() => setStatus(""), 4000);
      } else {
        setStatus(translations[language].error);
        setTimeout(() => setStatus(""), 4000);
      }
    } catch (error) {
      setStatus(translations[language].error);
      setTimeout(() => setStatus(""), 4000);
    }
  };

  const t = translations[language]; // Hämtar översättningar baserat på valt språk

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.dividerContainer}>
        <hr className={styles.dividerLine} />
        <span className={styles.dividerIcon}>✉️</span>
        <hr className={styles.dividerLine} />
      </div>

      <h2 className={styles.sectionTitle}>{t.title}</h2>
      <p className={styles.sectionSubtitle}>{t.subtitle}</p>

      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              {t.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.formLabel}>
              {t.subject}
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={formData.subject}
              onChange={handleChange}
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>
              {t.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className={styles.formInput}
            ></textarea>
          </div>

          <button type="submit" className={styles.formButton}>
            {t.send}
          </button>
        </form>

        {status && <p className={styles.formStatus}>{status}</p>}
      </div>

      <div className={styles.socialMediaSection}>
        <h3 className={styles.socialTitle}>{t.social}</h3>
        <div className={styles.socialIcons}>
          <a
            href="https://www.facebook.com/people/ARTS-Logistics-AB/61557532880447/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/artslogistics.se/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FaLinkedin />
          </a>
        </div>
        <p className={styles.contactInfo}>{t.contactInfo}</p>
      </div>
    </section>
  );
};

export default CallToAction;
