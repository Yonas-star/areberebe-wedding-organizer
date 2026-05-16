import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaChurch, FaMusic, FaCamera, FaRing, FaStar, FaArrowRight, FaPhone, FaCalendarCheck } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100 + '%',
    animationDelay: Math.random() * 5 + 's',
    animationDuration: (Math.random() * 3 + 2) + 's'
  }));

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-particles">
          {particles.map((particle) => (
            <div 
              key={particle.id} 
              className="particle" 
              style={{
                left: particle.left,
                animationDelay: particle.animationDelay,
                animationDuration: particle.animationDuration
              }}
            ></div>
          ))}
        </div>
        <div className="container hero-content" data-aos="fade-up">
          <div className="hero-badge">
            <FaHeart className="badge-icon" />
            <span>{t('hero.badge')}</span>
          </div>
          <h1 className="hero-title">
            {t('hero.title_line1')}<br />
            <span className="gradient-text">{t('hero.title_line2')}</span><br />
            {t('hero.title_line3')}
          </h1>
          <p className="hero-description">{t('hero.description')}</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              <FaCalendarCheck className="btn-icon" />
              {t('hero.start_planning')}
            </Link>
            <Link to="/services" className="btn btn-outline">
              {t('hero.our_services')}
              <FaArrowRight className="btn-icon" />
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>{t('hero.stat1')}</p>
            </div>
            <div className="stat">
              <h3>15+</h3>
              <p>{t('hero.stat2')}</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>{t('hero.stat3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">{t('features.title')}</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">{t('features.subtitle')}</p>
          <div className="features-grid">
            {[
              { icon: <FaHeart />, titleKey: 'features.spiritual.title', descKey: 'features.spiritual.desc' },
              { icon: <FaChurch />, titleKey: 'features.church.title', descKey: 'features.church.desc' },
              { icon: <FaMusic />, titleKey: 'features.music.title', descKey: 'features.music.desc' },
              { icon: <FaCamera />, titleKey: 'features.photo.title', descKey: 'features.photo.desc' },
              { icon: <FaRing />, titleKey: 'features.decoration.title', descKey: 'features.decoration.desc' },
              { icon: <FaStar />, titleKey: 'features.planning.title', descKey: 'features.planning.desc' }
            ].map((feature, index) => (
              <div key={index} className="feature-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">{feature.icon}</div>
                </div>
                <h3>{t(feature.titleKey)}</h3>
                <p>{t(feature.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content" data-aos="zoom-in">
            <FaHeart className="cta-heart" />
            <h2>{t('cta.title')}</h2>
            <p>{t('cta.subtitle')}</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <FaPhone /> {t('cta.button')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;