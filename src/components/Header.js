"use client";

export default function Header({ language, toggleLanguage }) {
  return (
    <header className="navLinks">
      <button onClick={toggleLanguage} className="languageButton">
        {language === "en" ? "Svenska" : "English"}
      </button>
      <a href="#about">{language === "en" ? "About" : "Om oss"}</a>
      <a href="#services">{language === "en" ? "Services" : "Tjänster"}</a>
      <a href="#contact">{language === "en" ? "Contact" : "Kontakt"}</a>
    </header>
  );
}
