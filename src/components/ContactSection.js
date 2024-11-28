import CallToAction from "../CallToAction";

export default function ContactSection() {
  const translationData = {
    title: "Contact Us",
    subtitle: "Get in touch with us for more information",
  };

  return (
    <section id="contact" className="section">
      <CallToAction t={translationData} />
    </section>
  );
}
