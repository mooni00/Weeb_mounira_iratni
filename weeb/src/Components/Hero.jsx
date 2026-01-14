const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Explorez le <span className="purple-text">Web</span> sous toutes ses{" "}
          <span className="underline-text">facettes</span>
        </h1>
        <p>
          Le monde du web évolue constamment, et nous sommes là pour vous guider à travers ses tendances. 
          Que vous soyez développeur, designer ou passionné de digital, notre blog vous offre du contenu de qualité.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Découvrir les articles</button>
          <button className="btn-secondary">S'abonner à la newsletter</button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 