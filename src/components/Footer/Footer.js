import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = ({ ownerName, developerName }) => {
  const { t } = useTranslation();
  
  // Prevent default behavior for social links that don't have real URLs yet
  const handleSocialClick = (e, platform) => {
    e.preventDefault();
    // You can add actual social media URLs here when you have them
    console.log(`Open ${platform} page - add actual URL when available`);
    // Example: window.open('https://facebook.com/yourpage', '_blank');
  };
  
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <FaHeart className="footer-heart" />
                <div>
                  <h3>Areberebe</h3>
                  <span>Wedding Organizer</span>
                </div>
              </Link>
              <p>{t('footer.description', 'Creating beautiful and sacred wedding ceremonies that honor tradition and celebrate love.')}</p>
              <div className="footer-social">
                <a 
                  href="https://facebook.com" 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleSocialClick(e, 'Facebook')}
                >
                  <FaFacebook />
                </a>
                <a 
                  href="https://instagram.com" 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleSocialClick(e, 'Instagram')}
                >
                  <FaInstagram />
                </a>
                <a 
                  href="https://youtube.com" 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleSocialClick(e, 'YouTube')}
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h4>{t('footer.quick_links', 'Quick Links')}</h4>
              <ul>
                <li><Link to="/">{t('nav.home', 'Home')}</Link></li>
                <li><Link to="/services">{t('nav.services', 'Services')}</Link></li>
                <li><Link to="/about">{t('nav.about', 'About')}</Link></li>
                <li><Link to="/contact">{t('nav.contact', 'Contact')}</Link></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>{t('footer.our_services', 'Our Services')}</h4>
              <ul>
                <li><Link to="/services">{t('services.items.planning.title', 'Complete Wedding Planning')}</Link></li>
                <li><Link to="/services">{t('services.items.ceremony.title', 'Church Ceremony')}</Link></li>
                <li><Link to="/services">{t('services.items.choir.title', 'Sacred Music & Choir')}</Link></li>
                <li><Link to="/services">{t('services.items.photography.title', 'Photography & Video')}</Link></li>
                <li><Link to="/services">{t('services.items.decor.title', 'Elegant Decoration')}</Link></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>{t('contact.title', 'Contact Us')}</h4>
              <p><FaPhone className="contact-icon" /> +251-XXX-XXXXXX</p>
              <p><FaEnvelope className="contact-icon" /> info@areberebe.com</p>
              <p><FaMapMarkerAlt className="contact-icon" /> Addis Ababa, Ethiopia</p>
              <div className="footer-owner">
                <p><strong>{t('about.owner', 'Owner')}:</strong> {ownerName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} {t('footer.rights', 'Areberebe Wedding Organizer. All rights reserved.')}</p>
            <p className="developer-credit">
              {t('footer.developed', 'Developed with love by')} <FaHeart className="credit-heart" /> {developerName}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;