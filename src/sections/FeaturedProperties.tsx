import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import PropertyCard from '../components/PropertyCard';
import { featuredProperties } from '../data/properties';
import './FeaturedProperties.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

export default function FeaturedProperties() {
  const items = featuredProperties();

  return (
    <section className="section featured">
      <div className="container">
        <div className="featured__head">
          <div>
            <span className="eyebrow">Selección DDoor</span>
            <RevealText tag="h2" className="section-title">
              Propiedades Destacadas
            </RevealText>
            <p className="section-lead">
              Una selección curada de las mejores oportunidades de venta y
              alquiler en las zonas más cotizadas del país.
            </p>
          </div>
          <Link to="/propiedades" className="btn btn-outline featured__all-desktop">
            Ver todas
          </Link>
        </div>

        <motion.div
          className="featured__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {items.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </motion.div>

        <div className="featured__cta">
          <Link to="/propiedades" className="btn btn-primary">
            Ver todas las propiedades
          </Link>
        </div>
      </div>
    </section>
  );
}
