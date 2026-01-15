const Logos = () => {

  const partners = ["SmartFinder", "Zoomerr", "SHELLS", "WAVES", "ArtVenue"];

  return (
    <section className="partners-section">
      <h3>Ils nous font confiance</h3>
      <div className="logos-grid">
        {partners.map((name, index) => (
          <div key={index} className="partner-item">
            <span className="partner-logo-placeholder">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logos;