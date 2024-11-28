export default function ServicesSection({ language, services }) {
  return (
    <section id="services" className="section">
      <h2>{language === "en" ? "Our Services" : "Våra tjänster"}</h2>
      <div className="servicesContainer">
        {services.map((service, index) => (
          <div key={index} className="serviceCard">
            <div className="serviceIcon">{service.icon}</div>
            <h4>{language === "en" ? service.title.en : service.title.sv}</h4>
            <p>{language === "en" ? service.description.en : service.description.sv}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
