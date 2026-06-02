import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import FilterBar, { type Filters, emptyFilters } from '../components/FilterBar';
import PropertyCard from '../components/PropertyCard';
import Footer from '../components/Footer';
import { properties } from '../data/properties';
import './Properties.css';

interface PropertiesProps {
  // Atajo SEO: fija la operación desde la ruta (/propiedades/venta).
  lockOperation?: 'venta' | 'alquiler';
  heading?: string;
}

export default function Properties({ lockOperation, heading }: PropertiesProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState<Filters>(() => ({
    operation: lockOperation ?? (searchParams.get('operacion') as Filters['operation']) ?? 'todas',
    type: searchParams.get('tipo') ?? '',
    zone: searchParams.get('zona') ?? '',
    query: searchParams.get('q') ?? '',
  }));

  // Si la ruta bloquea la operación, mantenerla.
  useEffect(() => {
    if (lockOperation) {
      setFilters((f) => ({ ...f, operation: lockOperation }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lockOperation]);

  // Sincronizar filtros → URL (compartible por WhatsApp).
  useEffect(() => {
    if (lockOperation) return; // las rutas fijas no manipulan query
    const params = new URLSearchParams();
    if (filters.operation !== 'todas') params.set('operacion', filters.operation);
    if (filters.type) params.set('tipo', filters.type);
    if (filters.zone) params.set('zona', filters.zone);
    if (filters.query) params.set('q', filters.query);
    setSearchParams(params, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, lockOperation]);

  const filtered = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    return properties.filter((p) => {
      if (filters.operation !== 'todas' && p.operation !== filters.operation)
        return false;
      if (filters.type && p.type !== filters.type) return false;
      if (filters.zone && p.zone !== filters.zone) return false;
      if (
        q &&
        !p.title.toLowerCase().includes(q) &&
        !p.location.toLowerCase().includes(q)
      )
        return false;
      return true;
    });
  }, [filters]);

  const title = heading ?? 'Todas las propiedades';

  return (
    <>
      <Helmet>
        <title>{title} · DDoor Inmobiliaria</title>
        <meta
          name="description"
          content="Explora propiedades en venta y alquiler en las mejores zonas de República Dominicana. Filtra por tipo, zona y precio."
        />
      </Helmet>

      <header className="properties-hero">
        <div className="container">
          <span className="eyebrow">Catálogo</span>
          <h1 className="properties-hero__title">{title}</h1>
          <p className="properties-hero__lead">
            Encuentra la propiedad que se ajusta a lo que buscas. Filtra y
            comparte el enlace directo por WhatsApp.
          </p>
        </div>
      </header>

      <FilterBar
        filters={filters}
        onChange={setFilters}
        resultCount={filtered.length}
      />

      <section className="section properties-list">
        <div className="container">
          {filtered.length > 0 ? (
            <motion.div className="properties-grid" layout>
              <AnimatePresence mode="popLayout">
                {filtered.map((p) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.4 }}
                  >
                    <PropertyCard property={p} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="properties-empty">
              <span className="properties-empty__icon" aria-hidden="true">
                🔑
              </span>
              <h3>No encontramos propiedades</h3>
              <p>
                Prueba ajustando los filtros o limpia la búsqueda para ver todo
                el catálogo.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => setFilters(lockOperation ? { ...emptyFilters, operation: lockOperation } : emptyFilters)}
                type="button"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
