import { Link } from 'react-router-dom';
import { WHATSAPP_NUMBER, generalContactMessage } from '../utils/whatsapp';
import './Footer.css';

export default function Footer() {
  const year = 2026;
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    generalContactMessage()
  )}`;

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/logo.png" alt="DDoor Inmobiliaria" className="footer__logo" />
          <p className="footer__tagline">
            La llave que abre la puerta de tus sueños.
          </p>
          <p className="footer__sector">Sector inmobiliario · Santo Domingo, RD</p>
        </div>

        <nav className="footer__col" aria-label="Navegación">
          <h4>Navegación</h4>
          <Link to="/">Inicio</Link>
          <Link to="/propiedades">Propiedades</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        <nav className="footer__col" aria-label="Operaciones">
          <h4>Operaciones</h4>
          <Link to="/propiedades/venta">Propiedades en Venta</Link>
          <Link to="/propiedades/alquiler">Propiedades en Alquiler</Link>
          <Link to="/contacto">Vender mi propiedad</Link>
          <Link to="/contacto">Rentar mi propiedad</Link>
        </nav>

        <div className="footer__col">
          <h4>Contacto</h4>
          <a href={waHref} target="_blank" rel="noopener noreferrer">
            WhatsApp: +34 637 67 38 50
          </a>
          <a
            href="https://instagram.com/ddoorsdq"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram: @ddoorsdq
          </a>
          <span>Santo Domingo, República Dominicana</span>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} DDoor Inmobiliaria. Todos los derechos reservados.</span>
          <span>
            Hecho por <strong>NEXIX Tech Studio</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}
