import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { EASINGS } from '../utils/easings';
import './Operations.css';

const blocks = [
  {
    key: 'venta',
    index: '01',
    eyebrow: 'Comprar',
    title: 'Propiedades en Venta',
    text: 'Encuentra el hogar o la inversión perfecta. Apartamentos, villas, penthouses y solares verificados, con acompañamiento legal en cada paso.',
    img: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1280',
    cta: 'Ver propiedades en venta',
    to: '/propiedades/venta',
  },
  {
    key: 'alquiler',
    index: '02',
    eyebrow: 'Rentar',
    title: 'Propiedades en Alquiler',
    text: 'Espacios listos para mudarte, amueblados y sin amueblar. Te conectamos con el lugar ideal para tu próxima etapa, sin complicaciones.',
    img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1280',
    cta: 'Ver propiedades en alquiler',
    to: '/propiedades/alquiler',
  },
];

export default function Operations() {
  const navigate = useNavigate();

  return (
    <section className="section section--alt operations">
      <div className="container">
        <div className="operations__intro">
          <span className="eyebrow">Cómo te ayudamos</span>
          <RevealText tag="h2" className="section-title">
            Compra o renta con confianza
          </RevealText>
        </div>

        <div className="operations__grid">
          {blocks.map((b, i) => (
            <motion.article
              className={`operations__card operations__card--${b.key}`}
              key={b.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASINGS.premium }}
              onClick={() => navigate(b.to)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(b.to)}
            >
              <div className="operations__media">
                <img src={b.img} alt={b.title} loading="lazy" />
                <span className="operations__overlay" aria-hidden="true" />
              </div>

              <span className="operations__index" aria-hidden="true">
                {b.index}
              </span>

              <div className="operations__content">
                <span className="operations__eyebrow">{b.eyebrow}</span>
                <h3 className="operations__title">{b.title}</h3>
                <p className="operations__text">{b.text}</p>
                <span className="operations__cta">
                  {b.cta}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
