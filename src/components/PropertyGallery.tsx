import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropertyImageFallback from './PropertyImageFallback';
import './PropertyGallery.css';

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const hasImages = images.length > 0;

  const prev = useCallback(
    () => setActive((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setActive((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, prev, next]);

  if (!hasImages) {
    return (
      <div className="gallery">
        <div className="gallery__main gallery__main--fallback">
          <PropertyImageFallback />
        </div>
      </div>
    );
  }

  return (
    <div className="gallery">
      <button
        className="gallery__main"
        onClick={() => setLightbox(true)}
        type="button"
        aria-label="Ampliar imagen"
      >
        <img src={images[active]} alt={`${title} — foto ${active + 1}`} />
        <span className="gallery__zoom" aria-hidden="true">
          ⤢ Ampliar
        </span>
      </button>

      {images.length > 1 && (
        <div className="gallery__thumbs">
          {images.map((src, i) => (
            <button
              key={src + i}
              className={`gallery__thumb ${i === active ? 'is-active' : ''}`}
              onClick={() => setActive(i)}
              type="button"
              aria-label={`Ver foto ${i + 1}`}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
          >
            <button
              className="lightbox__close"
              onClick={() => setLightbox(false)}
              aria-label="Cerrar"
            >
              ✕
            </button>
            <button
              className="lightbox__nav lightbox__nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Anterior"
            >
              ‹
            </button>
            <motion.img
              key={active}
              src={images[active]}
              alt={`${title} — foto ${active + 1}`}
              className="lightbox__img"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="lightbox__nav lightbox__nav--next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Siguiente"
            >
              ›
            </button>
            <span className="lightbox__counter">
              {active + 1} / {images.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
