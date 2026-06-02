import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { EASINGS } from '../utils/easings';
import './Operations.css';

const blocks = [
  {
    key: 'venta',
    eyebrow: 'Comprar',
    title: 'Propiedades en Venta',
    text: 'Encuentra el hogar o la inversión perfecta. Apartamentos, villas, penthouses y solares verificados, con acompañamiento legal en cada paso.',
    img: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1280',
    cta: 'Ver propiedades en venta',
    to: '/propiedades/venta',
  },
  {
    key: 'alquiler',
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
          {blocks.map((b) => (
            <article className="operations__block" key={b.key}>
              <motion.div
                className="operations__media"
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.1, ease: EASINGS.premium }}
              >
                <img src={b.img} alt={b.title} loading="lazy" />
              </motion.div>

              <div className="operations__content">
                <span className="operations__eyebrow">{b.eyebrow}</span>
                <h3 className="operations__title">{b.title}</h3>
                <p className="operations__text">{b.text}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(b.to)}
                  type="button"
                >
                  {b.cta}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
