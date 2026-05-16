import React from 'react';
import WeddingForm from '../../components/Forms/WeddingForm';
import './Contact.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="page-title">{t('contact.title')}</h1>
        <p className="page-description">{t('contact.subtitle')}</p>
        <WeddingForm />
      </div>
    </div>
  );
};

export default Contact;
