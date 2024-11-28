export default function AboutSection({ language, aboutText }) {
  return (
    <section id="about" className="section">
      <h2>{language === "en" ? "About Us" : "Om oss"}</h2>
      <div className="aboutContent">
        {aboutText.map((text, index) => (
          <p key={index}>{language === "en" ? text.en : text.sv}</p>
        ))}
      </div>
    </section>
  );
}
