import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaChurch, FaMusic, FaCamera, FaRing, FaStar, FaArrowRight, FaPhone, FaCalendarCheck } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

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

  const features = [
    { icon: <FaHeart />, title: t('features.spiritual.title', 'Spiritual Guidance'), desc: t('features.spiritual.desc', 'Deep understanding of spiritual traditions and ceremonies') },
    { icon: <FaChurch />, title: t('features.church.title', 'Church Coordination'), desc: t('features.church.desc', 'Seamless church ceremony arrangements and coordination') },
    { icon: <FaMusic />, title: t('features.music.title', 'Sacred Music'), desc: t('features.music.desc', 'Professional choir and spiritual music performances') },
    { icon: <FaCamera />, title: t('features.photo.title', 'Precious Memories'), desc: t('features.photo.desc', 'Professional photography and videography services') },
    { icon: <FaRing />, title: t('features.decoration.title', 'Elegant Decoration'), desc: t('features.decoration.desc', 'Beautiful and meaningful wedding decorations') },
    { icon: <FaStar />, title: t('features.planning.title', 'Perfect Planning'), desc: t('features.planning.desc', 'Attention to every detail for a flawless ceremony') }
  ];

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
            <span>{t('hero.badge', 'Spiritual Wedding Organizer')}</span>
          </div>
          <h1 className="hero-title">
            {t('hero.title_line1', 'Your Dream')}<br />
            <span className="gradient-text">{t('hero.title_line2', 'Spiritual Wedding')}</span><br />
            {t('hero.title_line3', 'Starts Here')}
          </h1>
          <p className="hero-description">
            {t('hero.description', 'Experience the divine union of love and tradition with our meticulously crafted wedding ceremonies.')}
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              <FaCalendarCheck className="btn-icon" />
              {t('hero.start_planning', 'Start Planning')}
            </Link>
            <Link to="/services" className="btn btn-outline">
              {t('hero.our_services', 'Our Services')}
              <FaArrowRight className="btn-icon" />
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>{t('hero.stat1', 'Weddings Organized')}</p>
            </div>
            <div className="stat">
              <h3>15+</h3>
              <p>{t('hero.stat2', 'Years Experience')}</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>{t('hero.stat3', 'Satisfaction')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">{t('features.title', 'Why Choose Us')}</h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">{t('features.subtitle', 'Making every moment sacred and memorable')}</p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">{feature.icon}</div>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
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
            <h2>{t('cta.title', 'Ready to Begin Your Sacred Journey?')}</h2>
            <p>{t('cta.subtitle', 'Let us help you create the wedding ceremony you have always dreamed of')}</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <FaPhone /> {t('cta.button', 'Contact Us Today')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
