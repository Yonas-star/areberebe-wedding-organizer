import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = ({ ownerName, developerName }) => {
  const { t } = useTranslation();
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
                  <span>{t('hero.badge')}</span>
                </div>
              </Link>
              <p>{t('footer.description')}</p>
              <div className="footer-social">
                <a href="#" className="social-link"><FaFacebook /></a>
                <a href="#" className="social-link"><FaInstagram /></a>
                <a href="#" className="social-link"><FaYoutube /></a>
              </div>
            </div>

            <div className="footer-links">
              <h4>{t('footer.quick_links')}</h4>
              <ul>
                <li><Link to="/">{t('nav.home')}</Link></li>
                <li><Link to="/services">{t('nav.services')}</Link></li>
                <li><Link to="/about">{t('nav.about')}</Link></li>
                <li><Link to="/contact">{t('nav.contact')}</Link></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>{t('footer.our_services')}</h4>
              <ul>
                <li><a href="#">{t('services.items.planning.title')}</a></li>
                <li><a href="#">{t('services.items.ceremony.title')}</a></li>
                <li><a href="#">{t('services.items.choir.title')}</a></li>
                <li><a href="#">{t('services.items.photography.title')}</a></li>
                <li><a href="#">{t('services.items.decor.title')}</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>{t('contact.title')}</h4>
              <p><FaPhone className="contact-icon" /> +251-XXX-XXXXXX</p>
              <p><FaEnvelope className="contact-icon" /> info@areberebe.com</p>
              <p><FaMapMarkerAlt className="contact-icon" /> Addis Ababa, Ethiopia</p>
              <div className="footer-owner">
                <p><strong>{t('about.owner')}:</strong> {ownerName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
            <p className="developer-credit">
              {t('footer.developed')} <FaHeart className="credit-heart" /> {developerName}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
