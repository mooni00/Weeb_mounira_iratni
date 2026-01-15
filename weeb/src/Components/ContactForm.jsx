const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire envoyé");
  };

  
  return (
    <form className="contact-form-styled" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group">
          <input type="text" placeholder="Nom" required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Prénom" required />
        </div>
        <div className="form-group full-width">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="form-group full-width">
          <textarea placeholder="Message" rows="4" required></textarea>
        </div>
      </div>
      <button type="submit" className="contact-submit">Contact</button>
    </form>
  );
};

export default ContactForm;