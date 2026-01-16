import { useState } from 'react';

const ContactForm = () => {
  // États pour stocker l'email et l'erreur de validation
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  // Logique de validation en temps réel
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Expression régulière pour un format email valide
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === "") {
      setEmailError(""); 
    } else if (!regex.test(value)) {
      setEmailError("Format d'email invalide"); 
    } else {
      setEmailError(""); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && email !== "") {
      console.log("Formulaire envoyé avec l'email :", email);
    } else {
      console.log("Erreur dans le formulaire");
    }
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
          {/* Liaison de l'input à notre état et notre fonction de validation */}
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={handleEmailChange}
            className={emailError ? "input-error" : ""} 
            required 
          />
          {/* Affichage du message d'erreur si présent */}
          {emailError && <span className="error-message">{emailError}</span>}
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