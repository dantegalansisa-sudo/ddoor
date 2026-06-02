import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { EASINGS } from '../utils/easings';
import './WhyUs.css';

const values = [
  {
    icon: '🤝',
    title: 'Asesoría personalizada',
    text: 'Te escuchamos y acompañamos de principio a fin, adaptándonos a tu ritmo y necesidades.',
  },
  {
    icon: '✅',
    title: 'Propiedades verificadas',
    text: 'Cada propiedad pasa por nuestra validación legal y documental antes de mostrártela.',
  },
  {
    icon: '⚖️',
    title: 'Acompañamiento legal',
    text: 'Gestionamos contratos, títulos y todo el papeleo para que cierres con total tranquilidad.',
  },
  {
    icon: '⚡',
    title: 'Respuesta inmediata',
    text: 'Atención directa por WhatsApp. Respondemos rápido porque tu tiempo importa.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: EASINGS.premium },
  },
};

export default function WhyUs() {
  return (
    <section className="section section--alt whyus">
      <div className="container">
        <div className="whyus__intro">
          <span className="eyebrow">¿Por qué DDoor?</span>
          <RevealText tag="h2" className="section-title">
            La diferencia de trabajar con nosotros
          </RevealText>
        </div>

        <motion.div
          className="whyus__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((v) => (
            <motion.div
              className="whyus__card"
              key={v.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              <span className="whyus__icon" aria-hidden="true">
                {v.icon}
              </span>
              <h3 className="whyus__title">{v.title}</h3>
              <p className="whyus__text">{v.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
