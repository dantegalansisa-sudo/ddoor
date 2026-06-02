import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { WHATSAPP_NUMBER, generalContactMessage } from '../utils/whatsapp';
import './Navbar.css';

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/propiedades', label: 'Propiedades', end: false },
  { to: '/propiedades/venta', label: 'Venta', end: false },
  { to: '/propiedades/alquiler', label: 'Alquiler', end: false },
  { to: '/nosotros', label: 'Nosotros', end: false },
  { to: '/contacto', label: 'Contacto', end: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // El navbar es transparente solo sobre el hero de la Home.
  const overHero = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const solid = scrolled || !overHero;
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    generalContactMessage()
  )}`;

  return (
    <>
      <header className={`navbar ${solid ? 'navbar--solid' : ''}`}>
        <div className="navbar__inner container">
          <Link to="/" className="navbar__brand" aria-label="DDoor Inmobiliaria — inicio">
            <img
              src="/logo.png"
              alt="DDoor Inmobiliaria"
              className="navbar__logo"
            />
          </Link>

          <nav className="navbar__links" aria-label="Navegación principal">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar__cta">
            <MagneticButton
              href={waHref}
              className="btn btn-primary navbar__wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </MagneticButton>
          </div>

          <button
            className={`navbar__burger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav className="mobile-menu__links">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.06 }}
                >
                  <NavLink
                    to={l.to}
                    end={l.end}
                    className={({ isActive }) =>
                      `mobile-menu__link ${isActive ? 'is-active' : ''}`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mobile-menu__wa"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + links.length * 0.06 }}
              >
                Hablar por WhatsApp
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
