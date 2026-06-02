import { Helmet } from 'react-helmet-async';
import Hero from '../sections/Hero';
import FeaturedProperties from '../sections/FeaturedProperties';
import Operations from '../sections/Operations';
import Stats from '../sections/Stats';
import Process from '../sections/Process';
import WhyUs from '../sections/WhyUs';
import FinalCTA from '../sections/FinalCTA';
import Footer from '../components/Footer';

const realEstateSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'DDoor Inmobiliaria',
  description:
    'Venta y alquiler de propiedades exclusivas en Santo Domingo y toda República Dominicana.',
  areaServed: 'República Dominicana',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Santo Domingo',
    addressCountry: 'DO',
  },
  telephone: '+34637673850',
  sameAs: ['https://instagram.com/ddoorsdq'],
  slogan: 'La llave que abre la puerta de tus sueños',
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          DDoor Inmobiliaria · La llave que abre la puerta de tus sueños
        </title>
        <meta
          name="description"
          content="Venta y alquiler de propiedades exclusivas en Santo Domingo y toda RD. Asesoría personalizada, propiedades verificadas y acompañamiento legal."
        />
        <meta property="og:title" content="DDoor Inmobiliaria" />
        <meta
          property="og:description"
          content="Tenemos la llave que abre la puerta de tus sueños."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(realEstateSchema)}
        </script>
      </Helmet>

      <Hero />
      <FeaturedProperties />
      <Operations />
      <Stats />
      <Process />
      <WhyUs />
      <FinalCTA />
      <Footer />
    </>
  );
}
