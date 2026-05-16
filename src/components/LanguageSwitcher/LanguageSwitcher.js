import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'am' : 'en';
    i18n.changeLanguage(newLang);
  };

  const label = i18n.language === 'en' ? 'አማርኛ' : 'English';

  return (
    <button className="language-switcher" onClick={toggleLanguage}>
      <FaGlobe className="globe-icon" />
      <span>{label}</span>
    </button>
  );
};

export default LanguageSwitcher;
