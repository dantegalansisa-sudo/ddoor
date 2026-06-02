import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import {
  WHATSAPP_NUMBER,
  generalContactMessage,
} from '../utils/whatsapp';
import {
  zones,
  propertyTypes,
  type Operation,
  type PropertyType,
} from '../data/properties';
import './Hero.css';

export default function Hero() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-zoom: el video escala y el contenido se desvanece al bajar.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  // Mini buscador.
  const [operation, setOperation] = useState<Operation>('venta');
  const [type, setType] = useState<PropertyType | ''>('');
  const [zone, setZone] = useState('');

  const handleSearch = () => {
    const params = new URLSearchParams();
    params.set('operacion', operation);
    if (type) params.set('tipo', type);
    if (zone) params.set('zona', zone);
    navigate(`/propiedades?${params.toString()}`);
  };

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    generalContactMessage()
  )}`;

  return (
    <section className="hero" ref={sectionRef}>
      {/* Video de fondo con scroll-zoom */}
      <motion.div className="hero__media" style={{ scale: videoScale }}>
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="/logo.png"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
      </motion.div>

      {/* Contenido */}
      <motion.div
        className="hero__content container"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.span
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          DDoor Inmobiliaria · Santo Domingo, RD
        </motion.span>

        <RevealText
          tag="h1"
          className="hero__title"
          delay={0.3}
          immediate
          accentWords={['tus', 'sueños']}
        >
          La llave que abre la puerta de tus sueños
        </RevealText>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Venta y alquiler de propiedades exclusivas. Te acompañamos en cada
          paso para encontrar el hogar o la inversión que estás buscando.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
        >
          <MagneticButton
            className="btn btn-gold"
            onClick={() => navigate('/propiedades')}
          >
            Ver Propiedades
          </MagneticButton>
          <MagneticButton
            className="btn btn-ghost"
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablar por WhatsApp
          </MagneticButton>
        </motion.div>

        {/* Mini buscador flotante */}
        <motion.div
          className="hero__search"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="hero__search-toggle">
            <button
              className={operation === 'venta' ? 'is-active' : ''}
              onClick={() => setOperation('venta')}
              type="button"
            >
              Venta
            </button>
            <button
              className={operation === 'alquiler' ? 'is-active' : ''}
              onClick={() => setOperation('alquiler')}
              type="button"
            >
              Alquiler
            </button>
          </div>

          <div className="hero__search-fields">
            <label className="hero__field">
              <span>Tipo</span>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as PropertyType | '')}
              >
                <option value="">Todos</option>
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </option>
                ))}
              </select>
            </label>

            <label className="hero__field">
              <span>Zona</span>
              <select value={zone} onChange={(e) => setZone(e.target.value)}>
                <option value="">Todas</option>
                {zones.map((z) => (
                  <option key={z} value={z}>
                    {z}
                  </option>
                ))}
              </select>
            </label>

            <button
              className="btn btn-primary hero__search-btn"
              onClick={handleSearch}
              type="button"
            >
              Buscar
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="hero__scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{ opacity: contentOpacity }}
      >
        <span>Descubre</span>
        <motion.div
          className="hero__scroll-line"
          animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
