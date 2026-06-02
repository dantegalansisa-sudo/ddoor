import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Placeholder from './pages/Placeholder';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <CustomCursor />
        <ScrollProgress />
        <ScrollToTop />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/propiedades" element={<Properties />} />
            <Route
              path="/propiedades/venta"
              element={
                <Properties lockOperation="venta" heading="Propiedades en Venta" />
              }
            />
            <Route
              path="/propiedades/alquiler"
              element={
                <Properties
                  lockOperation="alquiler"
                  heading="Propiedades en Alquiler"
                />
              }
            />
            <Route path="/propiedad/:id" element={<PropertyDetail />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="*" element={<Placeholder title="Página no encontrada" />} />
          </Routes>
        </main>

        <WhatsAppButton />
      </BrowserRouter>
    </HelmetProvider>
  );
}
