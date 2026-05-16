import React, { useState } from 'react';
import { FaPlay, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Gallery.css';

const Gallery = ({ images, videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-section">
      {images && images.length > 0 && (
        <>
          <h3 className="gallery-title">Our Wedding Gallery</h3>
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <span>{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {videos && videos.length > 0 && (
        <div className="video-gallery">
          <h3 className="gallery-title">Our Wedding Videos</h3>
          <div className="video-grid">
            {videos.map((video, index) => (
              <div key={index} className="video-item" onClick={() => setSelectedVideo(video.url)}>
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-button">
                    <FaPlay />
                  </div>
                </div>
                <h4>{video.title}</h4>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>
          <div className="video-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedVideo(null)}>
              <FaTimes />
            </button>
            <div className="video-wrapper">
              <iframe
                src={selectedVideo}
                title="Wedding Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {lightboxOpen && images && images.length > 0 && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="close-lightbox" onClick={closeLightbox}>
            <FaTimes />
          </button>
          <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            <FaChevronLeft />
          </button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={images[currentImage].src} alt={images[currentImage].alt} />
            <p className="lightbox-caption">{images[currentImage].alt}</p>
          </div>
          <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            <FaChevronRight />
          </button>
          <div className="lightbox-counter">
            {currentImage + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
