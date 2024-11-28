"use client";

import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CardsSection from "../components/CardsSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

import CallToAction from "../components/CallToAction";

export default function Page() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sv" : "en");
  };

  const videos = [
    "/videos/train.mp4",
    "/videos/sea.mp4",
    "/videos/road.mp4",
    "/videos/hero.mp4",
  ];

  const cards = [
    {
      icon: "✈️",
      title: { en: "Air", sv: "Luft" },
      description: {
        en: "Fast and reliable air freight provided by professionals.",
        sv: "Snabb och pålitlig flygfrakt av professionella.",
      },
    },
    {
      icon: "🚛",
      title: { en: "Road", sv: "Väg" },
      description: {
        en: "Move your cargo flexibly and efficiently by road.",
        sv: "Transportera ditt gods flexibelt och effektivt på väg.",
      },
    },
    {
      icon: "🚆",
      title: { en: "Train", sv: "Tåg" },
      description: {
        en: "Reliable and sustainable rail freight for efficient transport.",
        sv: "Pålitlig och hållbar tågfrakt för effektiv transport.",
      },
    },
    {
      icon: "🚢",
      title: { en: "Sea", sv: "Sjö" },
      description: {
        en: "Ship your goods anywhere with economy in mind.",
        sv: "Frakta dina varor överallt med ekonomi i åtanke.",
      },
    },
  ];

  const aboutText = [
    {
      en: "At ARTS, logistics is not just about transportation – it’s about creating solutions tailored to your specific needs.",
      sv: "På ARTS handlar logistik inte bara om transport – det handlar om att skapa lösningar som är skräddarsydda för dina specifika behov.",
    },
    {
      en: "We believe in simplicity and efficiency. With one contact, one supplier, and one invoice, we remove the complexity of traditional logistics chains and offer seamless services that save you time and resources.",
      sv: "Vi tror på enkelhet och effektivitet. Med en kontakt, en leverantör och en faktura eliminerar vi komplexiteten i traditionella logistiklösningar och erbjuder smidiga tjänster som sparar dig tid och resurser.",
    },
  ];

  const services = [
    {
      icon: "🧠",
      title: { en: "Expert Consultation", sv: "Expertkonsultation" },
      description: {
        en: "Receive expert advice, risk assessments, and detailed planning.",
        sv: "Få expertråd, riskbedömningar och detaljerad planering.",
      },
    },
    {
      icon: "📦",
      title: { en: "Packing and Handling", sv: "Paketering och Hantering" },
      description: {
        en: "Secure packing to ensure safety.",
        sv: "Säker paketering för att garantera säkerhet.",
      },
    },
  ];

  const callToActionText = {
    title: language === "en" ? "Contact Us" : "Kontakta oss",
    subtitle:
      language === "en"
        ? "Get in touch with us for more information"
        : "Kontakta oss för mer information",
  };

  return (
    <div>
      {/* Header */}
      <Header language={language} toggleLanguage={toggleLanguage} />

      {/* Hero Section */}
      <Hero
  videos={["/videos/train.mp4", "/videos/sea.mp4", "/videos/road.mp4"]}
  logoSrc="/images/logo.png"
/>


      {/* Cards Section */}
      <CardsSection cards={cards} language={language} />

      {/* About Section */}
      <AboutSection language={language} aboutText={aboutText} />

      {/* Services Section */}
      <ServicesSection language={language} services={services} />

      {/* Call To Action (Kontaktformulär) */}
      <CallToAction language={language} />

      {/* Footer */}
      <Footer />

      {/* Scroll To Top Button */}
     
    </div>
  );
}
