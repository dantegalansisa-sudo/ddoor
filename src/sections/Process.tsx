import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import './Process.css';

const steps = [
  {
    n: '01',
    title: 'Cuéntanos qué buscas',
    text: 'Conversamos por WhatsApp sobre tu presupuesto, zona y necesidades. Sin compromiso y a tu ritmo.',
  },
  {
    n: '02',
    title: 'Selección a tu medida',
    text: 'Filtramos entre cientos de propiedades verificadas y te enviamos solo las que realmente encajan contigo.',
  },
  {
    n: '03',
    title: 'Visitas y asesoría',
    text: 'Coordinamos visitas y te acompañamos con asesoría legal y financiera en cada decisión.',
  },
  {
    n: '04',
    title: 'Cierre con la llave',
    text: 'Negociamos por ti y gestionamos todo el papeleo hasta entregarte la llave de tu nuevo espacio.',
  },
];

export default function Process() {
  return (
    <section className="section process">
      <div className="container">
        <div className="process__intro">
          <span className="eyebrow">Cómo trabajamos</span>
          <RevealText tag="h2" className="section-title">
            Tu camino hacia el hogar ideal
          </RevealText>
          <p className="section-lead">
            Un proceso claro y acompañado, diseñado para que encontrar tu
            propiedad sea simple y seguro.
          </p>
        </div>

        <div className="process__grid">
          <div className="process__line" aria-hidden="true" />
          {steps.map((s, i) => (
            <motion.div
              className="process__step"
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <div className="process__num">{s.n}</div>
              <h3 className="process__title">{s.title}</h3>
              <p className="process__text">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
