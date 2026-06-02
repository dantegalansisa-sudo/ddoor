import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Badge from '../components/Badge';
import PropertyGallery from '../components/PropertyGallery';
import PropertyCard from '../components/PropertyCard';
import MapEmbed from '../components/MapEmbed';
import Footer from '../components/Footer';
import {
  getProperty,
  properties,
  formatPrice,
} from '../data/properties';
import {
  openWhatsApp,
  propertyInterestMessage,
} from '../utils/whatsapp';
import './PropertyDetail.css';

export default function PropertyDetail() {
  const { id } = useParams();
  const property = id ? getProperty(id) : undefined;

  const [form, setForm] = useState({ nombre: '', telefono: '', email: '' });

  if (!property) {
    return (
      <>
        <section className="section" style={{ paddingTop: '160px', textAlign: 'center', minHeight: '60vh' }}>
          <div className="container">
            <span className="eyebrow">Propiedad no encontrada</span>
            <h1 className="section-title">Esta propiedad ya no está disponible</h1>
            <p className="section-lead" style={{ margin: '0 auto 2rem' }}>
              Es posible que el enlace haya cambiado o que la propiedad se haya
              vendido.
            </p>
            <Link to="/propiedades" className="btn btn-primary">
              Ver todas las propiedades
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const isRent = property.operation === 'alquiler';
  const opLabel = isRent ? 'Alquiler' : 'Venta';

  const similar = properties
    .filter(
      (p) =>
        p.id !== property.id &&
        (p.zone === property.zone || p.operation === property.operation)
    )
    .slice(0, 3);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.telefono) return;
    openWhatsApp(
      propertyInterestMessage({
        nombre: form.nombre,
        telefono: form.telefono,
        email: form.email,
        operacion: opLabel,
        propiedad: `${property.title} (${property.id})`,
      })
    );
  };

  const directWa = () =>
    openWhatsApp(
      `Hola DDoor 👋 Me interesa la propiedad ${property.title} (${property.id}). ¿Sigue disponible?`
    );

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Residence',
    name: property.title,
    description: property.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: property.zone,
      addressRegion: property.location,
      addressCountry: 'DO',
    },
  };

  return (
    <>
      <Helmet>
        <title>{property.title} · DDoor Inmobiliaria</title>
        <meta name="description" content={property.description.slice(0, 155)} />
        <meta property="og:title" content={property.title} />
        <meta property="og:image" content={property.images[0] ?? '/logo.png'} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="detail">
        <div className="container">
          <nav className="detail__breadcrumb" aria-label="Migas de pan">
            <Link to="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link to="/propiedades">Propiedades</Link>
            <span aria-hidden="true">/</span>
            <span className="detail__breadcrumb-current">{property.title}</span>
          </nav>

          <div className="detail__layout">
            <div className="detail__main">
              <PropertyGallery images={property.images} title={property.title} />

              <div className="detail__header">
                <div className="detail__badges">
                  <Badge variant={property.operation}>{opLabel}</Badge>
                  {property.status !== 'disponible' && (
                    <Badge variant={property.status}>
                      {property.status === 'reservado' ? 'Reservado' : 'Vendido'}
                    </Badge>
                  )}
                  <span className="detail__type">{property.type}</span>
                </div>

                <h1 className="detail__title">{property.title}</h1>
                <p className="detail__location">
                  <span aria-hidden="true">📍</span> {property.location}
                </p>
                <div className="detail__price">{formatPrice(property)}</div>
              </div>

              <div className="detail__specs">
                {property.bedrooms > 0 && (
                  <div className="detail__spec">
                    <span aria-hidden="true">🛏</span>
                    <strong>{property.bedrooms}</strong> Habitaciones
                  </div>
                )}
                {property.bathrooms > 0 && (
                  <div className="detail__spec">
                    <span aria-hidden="true">🛁</span>
                    <strong>{property.bathrooms}</strong> Baños
                  </div>
                )}
                {property.parking > 0 && (
                  <div className="detail__spec">
                    <span aria-hidden="true">🚗</span>
                    <strong>{property.parking}</strong> Parqueos
                  </div>
                )}
                <div className="detail__spec">
                  <span aria-hidden="true">📐</span>
                  <strong>{property.area}</strong> m²
                </div>
              </div>

              <div className="detail__section">
                <h2 className="detail__h2">Descripción</h2>
                {property.description.split('\n\n').map((para, i) => (
                  <p key={i} className="detail__desc">
                    {para}
                  </p>
                ))}
              </div>

              {property.features.length > 0 && (
                <div className="detail__section">
                  <h2 className="detail__h2">Amenidades</h2>
                  <div className="detail__chips">
                    {property.features.map((f) => (
                      <span key={f} className="detail__chip">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="detail__section">
                <h2 className="detail__h2">Ubicación</h2>
                <div className="detail__map">
                  <MapEmbed location={property.location} />
                </div>
              </div>
            </div>

            {/* Formulario de interés sticky */}
            <aside className="detail__aside">
              <div className="interest-card">
                <h3 className="interest-card__title">¿Te interesa?</h3>
                <p className="interest-card__sub">
                  Déjanos tus datos y te contactamos por WhatsApp enseguida.
                </p>

                <form className="interest-form" onSubmit={submit}>
                  <label>
                    <span>Nombre *</span>
                    <input
                      type="text"
                      required
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      placeholder="Tu nombre"
                    />
                  </label>
                  <label>
                    <span>Teléfono *</span>
                    <input
                      type="tel"
                      required
                      value={form.telefono}
                      onChange={(e) =>
                        setForm({ ...form, telefono: e.target.value })
                      }
                      placeholder="809-000-0000"
                    />
                  </label>
                  <label>
                    <span>Email</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="tu@email.com"
                    />
                  </label>
                  <p className="interest-form__pre">
                    Estoy interesado en: <strong>{property.title}</strong>
                  </p>
                  <button type="submit" className="btn btn-primary interest-form__submit">
                    Enviar por WhatsApp
                  </button>
                </form>

                <button
                  type="button"
                  className="btn btn-outline interest-card__direct"
                  onClick={directWa}
                >
                  Consultar directo por WhatsApp
                </button>
              </div>
            </aside>
          </div>

          {similar.length > 0 && (
            <div className="detail__similar">
              <h2 className="detail__h2">Propiedades similares</h2>
              <div className="detail__similar-grid">
                {similar.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
