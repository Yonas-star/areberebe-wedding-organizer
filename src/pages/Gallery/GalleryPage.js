import React from 'react';
import Gallery from '../../components/Gallery/Gallery';
import { useTranslation } from 'react-i18next';
import './Gallery.css';

const GalleryPage = () => {
  const { t } = useTranslation();

  // No images/videos added yet — passes empty arrays.
  const images = [];
  const videos = [];

  return (
    <div className="gallery-page">
      <div className="container">
        <h1 className="page-title">{t('gallery.title')}</h1>
        <p className="page-subtitle">{t('gallery.subtitle')}</p>
        <Gallery images={images} videos={videos} />
      </div>
    </div>
  );
};

export default GalleryPage;
