import { Link } from 'react-router-dom';
import youtubeIcon from '../assets/youtube.svg';
import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/twitter.svg';
import instqramIcon from '../assets/instagram.svg';
import linkedinIcon from '../assets/linkedin.svg';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-container">

        <div className="footer-columns">
            
          <div className="footer-column brand-column">
            <h2 className="logo-dark">weeb</h2>
          </div>

          <FooterColumn title="Product" links={["Pricing", "Overview", "Browse", "Accessibility", "Five"]} />
          <FooterColumn title="Solutions" links={["Brainstorming", "Ideation", "Wireframing", "Research"]} />
          <FooterColumn title="Resources" links={["Help Center", "Blog", "Tutorials"]} />
          <FooterColumn title="Company" links={["About", "Press", "Events", "Careers"]} />
          
        </div>

        <div className="footer-bottom">
          <p>© 2026 Weeb, Inc. All rights reserved.</p>
          <div className="social-links">
             <a href="https://youtube.com" target="_blank" rel="noreferrer">
                 <img src={youtubeIcon} alt="YouTube" className="social-icon" />
             </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                 <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <img src={twitterIcon} alt="Twitter" className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <img src={instqramIcon} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


const FooterColumn = ({ title, links }) => (
  <div className="footer-column">
    <h4>{title}</h4>
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href="#">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;