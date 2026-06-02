// ============================================================
// EL CORAZÓN ESCALABLE — toda la web lee de aquí.
// Mañana se conecta a Supabase/CMS sin tocar componentes.
// ============================================================

export type Operation = 'venta' | 'alquiler';
export type PropertyType =
  | 'apartamento'
  | 'casa'
  | 'villa'
  | 'solar'
  | 'local'
  | 'penthouse';
export type Currency = 'USD' | 'RD$';

export interface Property {
  id: string; // slug: "apto-naco-3hab"
  title: string;
  operation: Operation;
  type: PropertyType;
  price: number;
  currency: Currency;
  pricePeriod?: 'mes'; // solo alquiler
  location: string; // "Naco, Distrito Nacional"
  zone: string; // para filtro: "Naco"
  bedrooms: number;
  bathrooms: number;
  parking: number;
  area: number; // m²
  description: string;
  features: string[];
  images: string[]; // 3-4 fotos. Si vacío → fallback logo
  featured: boolean;
  status: 'disponible' | 'reservado' | 'vendido';
}

// Imágenes placeholder (Pexels — real estate / interiores) mientras llegan las reales.
const PX = {
  apt1: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1280',
  apt2: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1280',
  apt3: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1280',
  villa1: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1280',
  villa2: 'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1280',
  villa3: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1280',
  ph1: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1280',
  ph2: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1280',
  casa1: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1280',
  casa2: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1280',
  interior1: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1280',
  interior2: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1280',
  local1: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1280',
};

export const properties: Property[] = [
  {
    id: 'apto-naco-3hab',
    title: 'Apartamento Moderno en Naco',
    operation: 'venta',
    type: 'apartamento',
    price: 285000,
    currency: 'USD',
    location: 'Naco, Distrito Nacional',
    zone: 'Naco',
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    area: 165,
    description:
      'Espacioso apartamento con acabados de primera en una de las zonas más cotizadas de la capital. Amplios ventanales que bañan los ambientes de luz natural, cocina modular con tope de granito y áreas sociales pensadas para recibir. Una torre con seguridad 24/7 y amenidades de primer nivel.\n\nUbicado a minutos de los principales centros comerciales, restaurantes y colegios. Una inversión segura en un sector de plusvalía constante.',
    features: ['Piscina', 'Gimnasio', 'Seguridad 24/7', 'Área social', 'Planta full', 'Lobby'],
    images: [PX.apt1, PX.interior1, PX.apt2, PX.interior2],
    featured: true,
    status: 'disponible',
  },
  {
    id: 'villa-punta-cana-golf',
    title: 'Villa de Lujo frente al Golf',
    operation: 'venta',
    type: 'villa',
    price: 950000,
    currency: 'USD',
    location: 'Punta Cana, La Altagracia',
    zone: 'Punta Cana',
    bedrooms: 5,
    bathrooms: 6,
    parking: 4,
    area: 620,
    description:
      'Imponente villa de autor con vista directa al campo de golf. Diseño contemporáneo de líneas limpias, piscina infinita, gazebo y jardines tropicales. Espacios de doble altura, cocina gourmet y suite principal con vestidor y terraza privada.\n\nDentro de un resort residencial con playa privada, club house y seguridad perimetral. El refugio perfecto para vivir o invertir en el Caribe.',
    features: ['Piscina infinita', 'Vista al golf', 'Jardín', 'Gazebo', 'Cocina gourmet', 'Seguridad 24/7'],
    images: [PX.villa1, PX.villa2, PX.villa3, PX.interior1],
    featured: true,
    status: 'disponible',
  },
  {
    id: 'penthouse-piantini',
    title: 'Penthouse con Terraza en Piantini',
    operation: 'venta',
    type: 'penthouse',
    price: 540000,
    currency: 'USD',
    location: 'Piantini, Distrito Nacional',
    zone: 'Piantini',
    bedrooms: 3,
    bathrooms: 3,
    parking: 3,
    area: 310,
    description:
      'Exclusivo penthouse en el corazón financiero de la ciudad. Terraza privada con jacuzzi y vista panorámica de la ciudad, ideal para el atardecer. Acabados de lujo, domótica integrada y triple parqueo techado.\n\nUna torre boutique con pocas unidades, conserjería y amenidades premium. Sofisticación para quien busca lo mejor.',
    features: ['Terraza privada', 'Jacuzzi', 'Domótica', 'Vista panorámica', 'Conserjería', 'Gimnasio'],
    images: [PX.ph1, PX.ph2, PX.interior2, PX.apt3],
    featured: true,
    status: 'disponible',
  },
  {
    id: 'apto-bella-vista-alquiler',
    title: 'Apartamento Amueblado en Bella Vista',
    operation: 'alquiler',
    type: 'apartamento',
    price: 75000,
    currency: 'RD$',
    pricePeriod: 'mes',
    location: 'Bella Vista, Distrito Nacional',
    zone: 'Bella Vista',
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: 110,
    description:
      'Acogedor apartamento completamente amueblado y equipado, listo para mudarse. Decoración moderna, electrodomésticos de línea blanca y línea blanca incluidos. Perfecto para ejecutivos o parejas.\n\nEn un sector residencial tranquilo, cercano a supermercados, gimnasios y la Av. Sarasota. Incluye planta eléctrica y mantenimiento.',
    features: ['Amueblado', 'Planta full', 'Seguridad 24/7', 'Balcón', 'Aire acondicionado'],
    images: [PX.apt2, PX.interior2, PX.apt1],
    featured: true,
    status: 'disponible',
  },
  {
    id: 'casa-santiago-cerros',
    title: 'Casa Familiar en Cerros de Gurabo',
    operation: 'venta',
    type: 'casa',
    price: 18500000,
    currency: 'RD$',
    location: 'Gurabo, Santiago',
    zone: 'Santiago',
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    area: 340,
    description:
      'Hermosa casa de dos niveles en un residencial cerrado de Santiago. Amplio patio con área de BBQ, family room, estudio y habitación de servicio. Ideal para familias que buscan espacio, tranquilidad y comunidad.\n\nResidencial con áreas verdes, parque infantil y vigilancia. A pocos minutos de colegios, universidades y la autopista.',
    features: ['Patio amplio', 'Área BBQ', 'Family room', 'Estudio', 'Habitación de servicio', 'Cisterna'],
    images: [PX.casa1, PX.casa2, PX.interior1, PX.villa3],
    featured: true,
    status: 'disponible',
  },
  {
    id: 'apto-evaristo-morales',
    title: 'Apartamento Nuevo en Evaristo Morales',
    operation: 'venta',
    type: 'apartamento',
    price: 198000,
    currency: 'USD',
    location: 'Evaristo Morales, Distrito Nacional',
    zone: 'Evaristo Morales',
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: 128,
    description:
      'Apartamento de estreno con distribución inteligente y excelente ventilación. Cocina abierta al área social, closets empotrados y terraza con BBQ común. Entrega inmediata.\n\nZona en pleno auge, rodeada de los mejores restaurantes y vida nocturna de la ciudad. Gran oportunidad de inversión para alquiler.',
    features: ['De estreno', 'Terraza común', 'Gimnasio', 'Lobby', 'Seguridad 24/7'],
    images: [PX.apt3, PX.interior2, PX.apt1, PX.interior1],
    featured: false,
    status: 'disponible',
  },
  {
    id: 'penthouse-anacaona-alquiler',
    title: 'Penthouse en Alquiler — Av. Anacaona',
    operation: 'alquiler',
    type: 'penthouse',
    price: 3200,
    currency: 'USD',
    pricePeriod: 'mes',
    location: 'Mirador Sur, Distrito Nacional',
    zone: 'Mirador Sur',
    bedrooms: 3,
    bathrooms: 4,
    parking: 2,
    area: 280,
    description:
      'Espectacular penthouse frente al Parque Mirador Sur. Vistas verdes inmejorables, doble terraza y acabados de lujo. Amueblado opcional. La mejor zona para correr, caminar y respirar.\n\nTorre de primera con amenidades completas y seguridad 24/7. Disponible para alquiler anual.',
    features: ['Vista al parque', 'Doble terraza', 'Amueblado opcional', 'Gimnasio', 'Piscina', 'Seguridad 24/7'],
    images: [PX.ph2, PX.ph1, PX.interior1, PX.apt2],
    featured: false,
    status: 'reservado',
  },
  {
    id: 'local-comercial-27-febrero',
    title: 'Local Comercial — Av. 27 de Febrero',
    operation: 'alquiler',
    type: 'local',
    price: 4500,
    currency: 'USD',
    pricePeriod: 'mes',
    location: 'Av. 27 de Febrero, Distrito Nacional',
    zone: 'Centro',
    bedrooms: 0,
    bathrooms: 2,
    parking: 6,
    area: 220,
    description:
      'Local comercial en una de las avenidas de mayor tránsito de la ciudad. Amplia vidriera, planta libre adaptable y excelente visibilidad. Ideal para showroom, oficina, clínica o franquicia.\n\nParqueo para clientes y fácil acceso. Una ubicación estratégica que potencia cualquier negocio.',
    features: ['Alta visibilidad', 'Planta libre', 'Vidriera', 'Parqueo clientes', 'Baños'],
    images: [PX.local1, PX.interior2],
    featured: false,
    status: 'disponible',
  },
  {
    id: 'solar-punta-cana',
    title: 'Solar Residencial en Punta Cana',
    operation: 'venta',
    type: 'solar',
    price: 145000,
    currency: 'USD',
    location: 'Bávaro, La Altagracia',
    zone: 'Punta Cana',
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    area: 1200,
    description:
      'Excelente solar dentro de un residencial cerrado en pleno crecimiento. Listo para construir la villa de tus sueños, con todos los servicios disponibles y title deed limpio.\n\nA minutos de las mejores playas, aeropuerto y campos de golf. Una inversión con plusvalía garantizada en el destino turístico número uno del Caribe.',
    features: ['Residencial cerrado', 'Title deed', 'Servicios disponibles', 'Listo para construir'],
    images: [],
    featured: false,
    status: 'disponible',
  },
  {
    id: 'villa-casa-de-campo',
    title: 'Villa en Casa de Campo',
    operation: 'venta',
    type: 'villa',
    price: 1750000,
    currency: 'USD',
    location: 'Casa de Campo, La Romana',
    zone: 'La Romana',
    bedrooms: 6,
    bathrooms: 7,
    parking: 4,
    area: 820,
    description:
      'Majestuosa villa en el resort más prestigioso del Caribe. Arquitectura mediterránea, piscina, cancha de tenis privada y servicio de mayordomía disponible. Acceso a marina, golf y playas exclusivas.\n\nUna propiedad de coleccionista para quien busca el máximo nivel de exclusividad y privacidad. Incluye carrito de golf.',
    features: ['Cancha de tenis', 'Piscina', 'Acceso a marina', 'Carrito de golf', 'Jardín', 'Seguridad 24/7'],
    images: [PX.villa2, PX.villa1, PX.villa3, PX.casa2],
    featured: false,
    status: 'disponible',
  },
];

// ---- Helpers ----
export const featuredProperties = () => properties.filter((p) => p.featured);
export const byOperation = (op: Operation) =>
  properties.filter((p) => p.operation === op);
export const getProperty = (id: string) =>
  properties.find((p) => p.id === id);
export const zones = [...new Set(properties.map((p) => p.zone))];
export const propertyTypes: PropertyType[] = [
  'apartamento',
  'casa',
  'villa',
  'penthouse',
  'solar',
  'local',
];

// Formateo de precio coherente con la moneda y el periodo.
export function formatPrice(p: Property): string {
  const formatted = new Intl.NumberFormat('en-US').format(p.price);
  const symbol = p.currency === 'USD' ? 'US$' : 'RD$';
  const period = p.pricePeriod ? `/${p.pricePeriod}` : '';
  return `${symbol} ${formatted}${period}`;
}
