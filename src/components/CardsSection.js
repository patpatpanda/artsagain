export default function CardsSection({ cards, language }) {
  return (
    <div className="cardsContainer">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <div className="cardIcon">{card.icon}</div>
          <h4>{language === "en" ? card.title.en : card.title.sv}</h4>
          <p>{language === "en" ? card.description.en : card.description.sv}</p>
        </div>
      ))}
    </div>
  );
}
