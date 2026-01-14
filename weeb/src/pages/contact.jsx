import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';

const Contact = () => {
  return (
    <main className="contact-page">
      <div className="contact-container">
        <section className="contact-intro">
          <p className="intro-paragraph">
            Votre retour est essentiel pour nous améliorer ! Partagez votre expérience, 
            dites-nous ce que vous aimez et ce que nous pourrions améliorer. 
            Vos suggestions nous aident à faire de ce blog une ressource toujours plus utile et enrichissante.
          </p>
        </section>
        
        <ContactForm />
      </div>
        <Footer />
    </main>
  );
};

export default Contact;