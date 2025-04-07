"use client";

import { useState } from "react";
import "./globals.css";
import CallToAction from "./CallToAction";
import Image from "next/image";
import HeroVideo from "./HeroVideo";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const videos = ["/videos/train.mp4", "/videos/sea.mp4"];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sv" : "en");
  };
  return (
    <div>
       {/* Hero Section */}
       <header className="hero">
       <nav className="navLinks">
  <button onClick={toggleLanguage} className="languageButton">
    {language === "en" ? "Svenska" : "English"}
  </button>
  <a href="#about">{language === "en" ? "About" : "Om oss"}</a>
  <a href="#career">{language === "en" ? "Career" : "Karriär"}</a>
  <a href="#services">{language === "en" ? "Services" : "Tjänster"}</a>
  <a href="#contact">{language === "en" ? "Contact" : "Kontakt"}</a>
</nav>


        <HeroVideo videos={videos} />

        <div className="heroOverlay"></div>
        <div className="heroContent">
          <Image
            src="/images/logo.png"
            alt="Logotyp"
            width={150}
            height={50}
            className="heroLogo"
          />
          <h3 className="heroLogoText">Arts Logistics</h3>
        </div>
      </header>

      {/* Cards Section */}
      <div className="cardsContainer">
        <div className="card">
          <div className="cardIcon">✈️</div>
          <h4>{language === "en" ? "Air" : "Luft"}</h4>
          <p>
            {language === "en"
              ? "Fast and reliable air freight provided by professionals."
              : "Snabb och pålitlig flygfrakt av professionella."}
          </p>
        </div>
        <div className="card">
          <div className="cardIcon">🚛</div>
          <h4>{language === "en" ? "Road" : "Väg"}</h4>
          <p>
            {language === "en"
              ? "Move your cargo flexibly and efficiently by road."
              : "Transportera ditt gods flexibelt och effektivt på väg."}
          </p>
        </div>
        <div className="card">
          <div className="cardIcon">🚆</div>
          <h4>{language === "en" ? "Train" : "Tåg"}</h4>
          <p>
            {language === "en"
              ? "Reliable and sustainable rail freight for efficient transport."
              : "Pålitlig och hållbar tågfrakt för effektiv transport."}
          </p>
        </div>
        <div className="card">
          <div className="cardIcon">🚢</div>
          <h4>{language === "en" ? "Sea" : "Sjö"}</h4>
          <p>
            {language === "en"
              ? "Ship your goods anywhere with economy in mind."
              : "Frakta dina varor överallt med ekonomi i åtanke."}
          </p>
        </div>
        <div className="card">
  <div className="cardIcon">🌍</div>
  <h4>
    {language === "en" ? "Project Logistics" : "Projektlogistik"}
  </h4>
  <p>
    {language === "en"
      ? "Tailored logistics solutions that elevate your business."
      : "Skräddarsydda logistiklösningar som lyfter ditt företag."}
  </p>
</div>

        <div className="card">
          <div className="cardIcon">⚡</div>
          <h4>{language === "en" ? "Express" : "Express"}</h4>
          <p>
            {language === "en"
              ? "When speed is critical, we deliver with urgency and precision."
              : "När hastighet är avgörande levererar vi med precision och noggrannhet."}
          </p>
        </div>
        <div className="card">
          <div className="cardIcon">📦</div>
          <h4>{language === "en" ? "Courier" : "Kurir"}</h4>
          <p>
            {language === "en"
              ? "Reliable and secure door-to-door courier services for your needs."
              : "Pålitliga och säkra dörr-till-dörr kurirtjänster för dina behov."}
          </p>
        </div>
      </div>
     
      <section id="about" className="section">
  <h2>{language === "en" ? "About Us" : "Om oss"}</h2>
  <div className="aboutContent">
    <p>
      {language === "en"
        ? "At ARTS, logistics is not just about transportation – it’s about creating solutions tailored to your specific needs."
        : "På ARTS handlar logistik inte bara om transport – det handlar om att skapa lösningar som är skräddarsydda för dina specifika behov."}
    </p>
    <p>
      {language === "en"
        ? "We believe in simplicity and efficiency. With one contact, one supplier, and one invoice, we remove the complexity of traditional logistics chains and offer seamless services that save you time and resources."
        : "Vi tror på enkelhet och effektivitet. Med en kontakt, en leverantör och en faktura eliminerar vi komplexiteten i traditionella logistiklösningar och erbjuder smidiga tjänster som sparar dig tid och resurser."}
    </p>
    <p>
      {language === "en"
        ? "Our global network ensures that we connect you with the best partners to handle your shipments, no matter where they need to go. From air and sea freight to road and rail transport, we cover every aspect of logistics to deliver exceptional results."
        : "Vårt globala nätverk säkerställer att vi kopplar dig samman med de bästa partnerna för att hantera dina leveranser, oavsett var de behöver gå. Från flyg- och sjöfrakt till väg- och tågtjänster täcker vi alla aspekter av logistik för att leverera exceptionella resultat."}
    </p>
    <p>
      {language === "en"
        ? "Our team of logistics experts is dedicated to providing you with personalized service. We work closely with you to understand your challenges, mitigate risks, and find the most efficient and cost-effective solutions."
        : "Vårt team av logistikexperter är dedikerade till att ge dig personlig service. Vi arbetar nära dig för att förstå dina utmaningar, minska risker och hitta de mest effektiva och kostnadseffektiva lösningarna."}
    </p>
    <p>
      {language === "en"
        ? "With ARTS, you can rest assured that your goods will be delivered on time, every time. Experience the difference of reliable, transparent, and customer-focused logistics services."
        : "Med ARTS kan du vara säker på att dina varor levereras i tid, varje gång. Upplev skillnaden med pålitliga, transparenta och kundfokuserade logistiktjänster."}
    </p>
    <p>
      {language === "en"
        ? "Join us on our journey to redefine logistics. At ARTS, we make the impossible possible, one shipment at a time."
        : "Följ med oss på vår resa att omdefiniera logistik. På ARTS gör vi det omöjliga möjligt, en leverans i taget."}
    </p>
  </div>
</section>

<section id="career" className="section">
  <h2>{language === "en" ? "Career Opportunities" : "Karriärmöjligheter"}</h2>
  <div className="careerContent">
    <p>
      {language === "en"
        ? "If you are interested in joining ARTS, whether for an internship or to submit an open application, please feel free to contact us at"
        : "Om du är intresserad av att arbeta på ARTS, vare sig det gäller praktik eller en spontanansökan, är du varmt välkommen att kontakta oss på"}
      <a href="mailto:career@artslogistics.se" className="careerLink"> career@artslogistics.se</a>.
    </p>
    <p>
      {language === "en"
        ? "We look forward to hearing from you."
        : "Vi ser fram emot att höra från dig."}
    </p>
  </div>
</section>

      <section id="services" className="section">
      <div className="sectionContent">
  <h2>{language === "en" ? "Our Services" : "Våra tjänster"}</h2>
  <div className="servicesContainer">
    <div className="serviceCard">
      <div className="serviceIcon">🧠</div>
      <h4>{language === "en" ? "Expert Consultation" : "Expertkonsultation"}</h4>
      <p>
        {language === "en"
          ? "Receive expert advice, risk assessments, and detailed planning."
          : "Få expertråd, riskbedömningar och detaljerad planering."}
      </p>
    </div>
    <div className="serviceCard">
      <div className="serviceIcon">📊</div>
      <h4>{language === "en" ? "Risk Assessment" : "Riskbedömning"}</h4>
      <p>
        {language === "en"
          ? "Thorough analysis and strategic preparation for every project."
          : "Grundlig analys och strategisk förberedelse för varje projekt."}
      </p>
    </div>
    <div className="serviceCard">
      <div className="serviceIcon">📦</div>
      <h4>{language === "en" ? "Packing and Handling" : "Paketering och Hantering"}</h4>
      <p>
        {language === "en"
          ? "Secure packing to ensure safety."
          : "Säker paketering för att garantera säkerhet."}
      </p>
    </div>
    <div className="serviceCard">
      <div className="serviceIcon">📄</div>
      <h4>{language === "en" ? "Document Handling" : "Dokumenthantering"}</h4>
      <p>
        {language === "en"
          ? "Seamlessly compile and manage all necessary documentation."
          : "Samla in och hantera alla nödvändiga dokument smidigt."}
      </p>
    </div>
    <div className="serviceCard">
      <div className="serviceIcon">👁️</div>
      <h4>{language === "en" ? "Total Visibility" : "Total Synlighet"}</h4>
      <p>
        {language === "en"
          ? "Transparent and clear communication throughout the process."
          : "Transparent och tydlig kommunikation genom hela processen."}
      </p>
    </div>
    <div className="serviceCard">
      <div className="serviceIcon">🧾</div>
      <h4>{language === "en" ? "Consolidated Invoice" : "Samlad Faktura"}</h4>
      <p>
        {language === "en"
          ? "One contact, one supplier, and one invoice for simplicity."
          : "En kontakt, en leverantör och en faktura för enkelhet."}
      </p>
    </div>
    <div className="serviceCard">
      <div className="serviceIcon">🤝</div>
      <h4>{language === "en" ? "Devoted Support" : "Engagerat Stöd"}</h4>
      <p>
        {language === "en"
          ? "Personalized assistance and dedicated support for every need."
          : "Personligt stöd och dedikerat engagemang för alla behov."}
      </p>
    </div>
  </div>
  </div>
</section>

<section id="contact" className="section">
  <CallToAction language={language} />
</section>


      {/* Footer */}
      <footer className="footer">
        <div className="footerContent">
          <p>&copy; {new Date().getFullYear()} Arts Logistics. All rights reserved.</p>
          <p>Upplandsgatan 82</p>
          <p>113 44 Stockholm</p>
        </div>
      </footer>
    </div>
  );
}