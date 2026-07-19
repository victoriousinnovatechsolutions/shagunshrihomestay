import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3 className="footer-brand">Shagunshri Homestay</h3>
          <p>Your comfortable and peaceful stay in the heart of Ujjain. Experience warm hospitality and modern amenities.</p>
        </div>
        
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Info</h4>
          <ul className="contact-info">
            <li><MapPin size={18} /> 60/A, Bank Colony, Subhash Nagar, Near Do Talab, Ujjain</li>
            <li><Phone size={18} /> 9425904786</li>
            <li><Mail size={18} /> tsb.73540@gmail.com</li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.instagram.com/shagunshri.homestay/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shagunshri Homestay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
