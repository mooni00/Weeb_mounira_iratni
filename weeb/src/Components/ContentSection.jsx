import desktop from '../assets/Desktop2.svg';
const ContentSection = ({ subtitle, title, description, linkText, imageSrc, reverse }) => {
  return (
    <section className={`content-section ${reverse ? 'reverse' : ''}`}>
      <div className="content-text">
        <span className="subtitle">{subtitle}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="#" className="explore-link">
          {linkText} <span className="arrow">→</span>
        </a>
      </div>
      <div className="content-image">
        <div className="image-placeholder">
           <img src={desktop} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default ContentSection;