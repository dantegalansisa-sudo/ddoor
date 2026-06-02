import { useState } from 'react';
import './MapEmbed.css';

interface MapEmbedProps {
  location: string;
  zoom?: number;
  className?: string;
}

// Carga diferida del mapa: muestra un placeholder estilizado y solo
// inserta el iframe de Google Maps cuando el usuario lo pide (performance).
export default function MapEmbed({
  location,
  zoom = 14,
  className = '',
}: MapEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const q = encodeURIComponent(location);
  const embedSrc = `https://maps.google.com/maps?q=${q}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
  const externalSrc = `https://www.google.com/maps/search/?api=1&query=${q}`;

  if (loaded) {
    return (
      <div className={`map-embed ${className}`}>
        <iframe
          title={`Mapa de ${location}`}
          src={embedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div className={`map-embed map-embed--placeholder ${className}`}>
      <div className="map-embed__content">
        <span className="map-embed__pin" aria-hidden="true">
          📍
        </span>
        <p className="map-embed__location">{location}</p>
        <div className="map-embed__actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setLoaded(true)}
          >
            Ver mapa
          </button>
          <a
            href={externalSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
