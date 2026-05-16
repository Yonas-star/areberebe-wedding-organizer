import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaChurch, FaMusic, FaCamera, FaCar, FaUtensils, FaRing, FaUsers, FaStar, FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import './Services.css';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      icon: <FaHeart />,
      titleKey: 'services.items.planning.title',
      descriptionKey: 'services.items.planning.desc',
      featuresKey: 'services.items.planning.features'
    },
    {
      icon: <FaChurch />,
      titleKey: 'services.items.ceremony.title',
      descriptionKey: 'services.items.ceremony.desc',
      featuresKey: 'services.items.ceremony.features'
    },
    {
      icon: <FaMusic />,
      titleKey: 'services.items.choir.title',
      descriptionKey: 'services.items.choir.desc',
      featuresKey: 'services.items.choir.features'
    },
    {
      icon: <FaCamera />,
      titleKey: 'services.items.photography.title',
      descriptionKey: 'services.items.photography.desc',
      featuresKey: 'services.items.photography.features'
    },
    {
      icon: <FaRing />,
      titleKey: 'services.items.decor.title',
      descriptionKey: 'services.items.decor.desc',
      featuresKey: 'services.items.decor.features'
    },
    {
      icon: <FaCar />,
      titleKey: 'services.items.transport.title',
      descriptionKey: 'services.items.transport.desc',
      featuresKey: 'services.items.transport.features'
    },
    {
      icon: <FaUtensils />,
      titleKey: 'services.items.catering.title',
      descriptionKey: 'services.items.catering.desc',
      featuresKey: 'services.items.catering.features'
    },
    {
      icon: <FaUsers />,
      titleKey: 'services.items.guest.title',
      descriptionKey: 'services.items.guest.desc',
      featuresKey: 'services.items.guest.features'
    }
  ];

  return (
    <div className="services-page">
      <div className="services-hero">
        <div className="container">
          <h1 className="services-hero-title" data-aos="fade-up">{t('services.hero_title')}</h1>
          <p className="services-hero-subtitle" data-aos="fade-up" data-aos-delay="200">{t('services.hero_subtitle')}</p>
        </div>
      </div>

      <div className="container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
              </div>
              <h3 className="service-title">{t(service.titleKey)}</h3>
              <p className="service-description">{t(service.descriptionKey)}</p>
              <ul className="service-features">
                {t(service.featuresKey, { returnObjects: true }).map((feature, idx) => (
                  <li key={idx}>
                    <FaStar className="feature-star" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="service-link">
                Book Now <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="services-cta">
        <div className="container">
          <div className="services-cta-content" data-aos="zoom-in">
            <h2>{t('services.cta_title')}</h2>
            <p>{t('services.cta_subtitle')}</p>
            <Link to="/contact" className="btn btn-primary">
              <FaHeart /> {t('services.cta_button')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
