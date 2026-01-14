import Hero from '../Components/Hero';
import Logos from '../Components/Logos';
import ContentSection from '../Components/ContentSection';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <main>
      <Hero />
      <Logos />
      <ContentSection 
        subtitle="DES RESSOURCES POUR TOUS LES NIVEAUX"
        title={<span>Apprenez et <span className="purple-text">progressez</span></span>}
        description="Que vous débutiez en développement web ou que vous soyez un expert cherchant à approfondir vos connaissances, nous vous proposons des tutoriels, guides et bonnes pratiques pour apprendre efficacement."
        linkText="Explorer les ressources"
        imageSrc="#"
        reverse={false}
      />
      {/* Section 2 */}
        <ContentSection 
        subtitle="LE WEB, UN ÉCOSYSTÈME EN CONSTANTE ÉVOLUTION"
        title={<span>Restez informé des dernières <span className="purple-text">tendances</span></span>}
        description="Chaque semaine, nous analysons les nouveautés du web : frameworks émergents, bonnes pratiques SEO, accessibilité, et bien plus encore. Ne manquez aucune actualité du digital !"
        linkText="Lire les articles récents"
        imageSrc="#" 
        reverse={true} // Activation de l'inversion
        />
        <Footer />
    </main>
  );
};

export default Home;