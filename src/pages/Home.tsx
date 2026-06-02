import { Helmet } from 'react-helmet-async';
import Hero from '../sections/Hero';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>DDoor Inmobiliaria · La llave que abre la puerta de tus sueños</title>
        <meta
          name="description"
          content="Venta y alquiler de propiedades exclusivas en Santo Domingo y toda RD. Asesoría personalizada, propiedades verificadas y acompañamiento legal."
        />
      </Helmet>

      <Hero />

      {/* 🛑 CHECKPOINT: el resto de las secciones de la Home se construyen
          tras la aprobación del Hero (ver CLAUDE.md, regla 4). */}
    </>
  );
}
