import { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-buttons">
      <a href="https://wa.me/919425904786" target="_blank" rel="noopener noreferrer" className="float-btn whatsapp" aria-label="WhatsApp Us">
        <FaWhatsapp size={24} />
      </a>
      <a href="tel:+919425904786" className="float-btn call" aria-label="Call Us">
        <Phone size={24} />
      </a>
      <button 
        className={`float-btn scroll-top ${showScroll ? 'visible' : ''}`} 
        onClick={scrollTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default FloatingButtons;
