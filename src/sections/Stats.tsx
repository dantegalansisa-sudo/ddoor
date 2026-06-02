import { motion } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';
import './Stats.css';

const stats = [
  { target: 320, suffix: '+', label: 'Propiedades gestionadas' },
  { target: 480, suffix: '+', label: 'Clientes felices' },
  { target: 12, suffix: '', label: 'Años de experiencia' },
  { target: 15, suffix: '', label: 'Zonas cubiertas' },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {stats.map((s, i) => (
          <motion.div
            className="stats__item"
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="stats__number">
              <AnimatedCounter target={s.target} suffix={s.suffix} />
            </div>
            <div className="stats__label">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
