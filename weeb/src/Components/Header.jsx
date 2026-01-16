import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="header-wrapper">
        <div className="logo">
          <Link to="/">weeb</Link>
        </div>
      
        <button className="burger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link to="/login" onClick={() => setIsMenuOpen(false)}>Se connecter</Link>
          <button className="join-now-btn">Nous rejoindre</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;