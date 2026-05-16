import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './About.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <div className="container">
        <h1 className="page-title">{t('about.title')}</h1>
        
        <div className="about-content">
          <div className="about-card">
            <h2>{t('about.welcome')}</h2>
            <p>{t('about.welcome_desc')}</p>
          </div>
          
          <div className="about-card">
            <h2><FaHeart className="icon-heart" /> {t('about.mission')}</h2>
            <p>{t('about.mission_desc')}</p>
          </div>
          
          <div className="about-card">
            <h2>{t('about.values')}</h2>
            <ul>
              {t('about.values_list', { returnObjects: true }).map((val, i) => (
                <li key={i}>{val}</li>
              ))}
            </ul>
          </div>
          
          <div className="about-card">
            <h2>{t('about.contact_info')}</h2>
            <p><strong>{t('about.owner')}:</strong> Areberebe</p>
            <p><strong>{t('about.phone')}:</strong> +251-XXX-XXXXXX</p>
            <p><strong>{t('about.email')}:</strong> info@areberebe.com</p>
            <p><strong>{t('about.location')}:</strong> Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
