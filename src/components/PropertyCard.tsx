import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Badge from './Badge';
import PropertyImageFallback from './PropertyImageFallback';
import { formatPrice, type Property } from '../data/properties';
import { EASINGS } from '../utils/easings';
import './PropertyCard.css';

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: EASINGS.premium },
  },
};

function Spec({ icon, value, label }: { icon: string; value: number; label: string }) {
  return (
    <span className="property-card__spec" title={label}>
      <span aria-hidden="true">{icon}</span>
      {value}
    </span>
  );
}

export default function PropertyCard({ property }: { property: Property }) {
  const isRent = property.operation === 'alquiler';

  return (
    <motion.article
      className="property-card"
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
    >
      <Link to={`/propiedad/${property.id}`} className="property-card__link">
        <div className="property-card__media">
          {property.images.length > 0 ? (
            <img
              src={property.images[0]}
              alt={property.title}
              loading="lazy"
              className="property-card__img"
            />
          ) : (
            <PropertyImageFallback />
          )}

          <div className="property-card__badges">
            <Badge variant={property.operation}>
              {isRent ? 'Alquiler' : 'Venta'}
            </Badge>
            {property.status !== 'disponible' && (
              <Badge variant={property.status}>
                {property.status === 'reservado' ? 'Reservado' : 'Vendido'}
              </Badge>
            )}
          </div>
        </div>

        <div className="property-card__body">
          <span className="property-card__type">{property.type}</span>
          <h3 className="property-card__title">{property.title}</h3>
          <p className="property-card__location">
            <span aria-hidden="true">📍</span> {property.location}
          </p>

          <div className="property-card__price">{formatPrice(property)}</div>

          <div className="property-card__specs">
            {property.bedrooms > 0 && (
              <Spec icon="🛏" value={property.bedrooms} label="Habitaciones" />
            )}
            {property.bathrooms > 0 && (
              <Spec icon="🛁" value={property.bathrooms} label="Baños" />
            )}
            {property.parking > 0 && (
              <Spec icon="🚗" value={property.parking} label="Parqueos" />
            )}
            <Spec icon="📐" value={property.area} label="Metros cuadrados" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
