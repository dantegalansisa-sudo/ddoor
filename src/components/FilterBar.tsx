import { zones, propertyTypes } from '../data/properties';
import './FilterBar.css';

export interface Filters {
  operation: 'todas' | 'venta' | 'alquiler';
  type: string; // '' = todos
  zone: string; // '' = todas
  query: string;
}

export const emptyFilters: Filters = {
  operation: 'todas',
  type: '',
  zone: '',
  query: '',
};

interface FilterBarProps {
  filters: Filters;
  onChange: (next: Filters) => void;
  resultCount: number;
}

const operations: Filters['operation'][] = ['todas', 'venta', 'alquiler'];

export default function FilterBar({
  filters,
  onChange,
  resultCount,
}: FilterBarProps) {
  const set = (patch: Partial<Filters>) => onChange({ ...filters, ...patch });
  const isDirty =
    filters.operation !== 'todas' ||
    filters.type !== '' ||
    filters.zone !== '' ||
    filters.query !== '';

  return (
    <div className="filterbar">
      <div className="container filterbar__inner">
        <div className="filterbar__toggle">
          {operations.map((op) => (
            <button
              key={op}
              type="button"
              className={filters.operation === op ? 'is-active' : ''}
              onClick={() => set({ operation: op })}
            >
              {op === 'todas' ? 'Todas' : op === 'venta' ? 'Venta' : 'Alquiler'}
            </button>
          ))}
        </div>

        <div className="filterbar__controls">
          <div className="filterbar__search">
            <span aria-hidden="true">🔍</span>
            <input
              type="text"
              placeholder="Buscar por título o ubicación…"
              value={filters.query}
              onChange={(e) => set({ query: e.target.value })}
              aria-label="Buscar propiedades"
            />
          </div>

          <select
            value={filters.type}
            onChange={(e) => set({ type: e.target.value })}
            aria-label="Tipo de propiedad"
          >
            <option value="">Todos los tipos</option>
            {propertyTypes.map((t) => (
              <option key={t} value={t}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>

          <select
            value={filters.zone}
            onChange={(e) => set({ zone: e.target.value })}
            aria-label="Zona"
          >
            <option value="">Todas las zonas</option>
            {zones.map((z) => (
              <option key={z} value={z}>
                {z}
              </option>
            ))}
          </select>

          {isDirty && (
            <button
              type="button"
              className="filterbar__clear"
              onClick={() => onChange(emptyFilters)}
            >
              Limpiar
            </button>
          )}
        </div>

        <div className="filterbar__count">
          <strong>{resultCount}</strong>{' '}
          {resultCount === 1 ? 'propiedad encontrada' : 'propiedades encontradas'}
        </div>
      </div>
    </div>
  );
}
