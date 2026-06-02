import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Navbar from './components/Navbar';

import Home from './pages/Home';
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
            <Route
              path="/propiedades"
              element={<Placeholder title="Propiedades" />}
            />
            <Route
              path="/propiedades/venta"
              element={<Placeholder title="Propiedades en Venta" />}
            />
            <Route
              path="/propiedades/alquiler"
              element={<Placeholder title="Propiedades en Alquiler" />}
            />
            <Route
              path="/propiedad/:id"
              element={<Placeholder title="Detalle de Propiedad" />}
            />
            <Route path="/nosotros" element={<Placeholder title="Nosotros" />} />
            <Route path="/contacto" element={<Placeholder title="Contacto" />} />
            <Route path="*" element={<Placeholder title="Página no encontrada" />} />
          </Routes>
        </main>

        <WhatsAppButton />
      </BrowserRouter>
    </HelmetProvider>
  );
}
