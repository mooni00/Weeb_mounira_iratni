import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-wrapper">
        {/* Partie Gauche*/}
        <div className="header-left">
          <div className="logo">
            <Link to="/">weeb</Link>
          </div>
          <nav className="nav-menu">
            <Link to="/about" className="nav-item">About Us</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
          </nav>
        </div>

        {/* Partie Droite */}
        <div className="header-right">
          <Link to="/login" className="login-link">Log In</Link>
          <button className="join-button">Join Now</button>
        </div>
      </div>
    </header>
  );
};

export default Header;