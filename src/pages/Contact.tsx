import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import RevealText from '../components/RevealText';
import MapEmbed from '../components/MapEmbed';
import Footer from '../components/Footer';
import {
  WHATSAPP_NUMBER,
  openWhatsApp,
  contactFormMessage,
} from '../utils/whatsapp';
import './Contact.css';

const operaciones = ['Comprar', 'Vender', 'Alquilar', 'Rentar mi propiedad'];
const tipos = ['Apartamento', 'Casa', 'Villa', 'Penthouse', 'Solar', 'Local'];

export default function Contact() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    operacion: '',
    tipo: '',
    mensaje: '',
  });
  const [error, setError] = useState('');

  const set = (patch: Partial<typeof form>) =>
    setForm((f) => ({ ...f, ...patch }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre.trim() || !form.telefono.trim()) {
      setError('Por favor completa al menos tu nombre y teléfono.');
      return;
    }
    setError('');
    openWhatsApp(contactFormMessage(form));
  };

  return (
    <>
      <Helmet>
        <title>Contacto · DDoor Inmobiliaria</title>
        <meta
          name="description"
          content="Contáctanos para comprar, vender o alquilar tu propiedad en RD. Atención directa por WhatsApp y asesoría personalizada."
        />
      </Helmet>

      <header className="contact-hero">
        <div className="container">
          <span className="eyebrow">Hablemos</span>
          <RevealText tag="h1" className="contact-hero__title" accentWords={['contigo']}>
            Estamos para ayudarte, hablemos contigo
          </RevealText>
          <p className="contact-hero__lead">
            Cuéntanos qué buscas y te respondemos enseguida por WhatsApp. Sin
            compromiso.
          </p>
        </div>
      </header>

      <section className="section contact-main">
        <div className="container contact-main__grid">
          <form className="contact-form" onSubmit={submit}>
            <div className="contact-form__row">
              <label>
                <span>Nombre *</span>
                <input
                  type="text"
                  required
                  value={form.nombre}
                  onChange={(e) => set({ nombre: e.target.value })}
                  placeholder="Tu nombre completo"
                />
              </label>
              <label>
                <span>Teléfono *</span>
                <input
                  type="tel"
                  required
                  value={form.telefono}
                  onChange={(e) => set({ telefono: e.target.value })}
                  placeholder="809-000-0000"
                />
              </label>
            </div>

            <label>
              <span>Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => set({ email: e.target.value })}
                placeholder="tu@email.com"
              />
            </label>

            <div className="contact-form__row">
              <label>
                <span>Operación</span>
                <select
                  value={form.operacion}
                  onChange={(e) => set({ operacion: e.target.value })}
                >
                  <option value="">Selecciona…</option>
                  {operaciones.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>Tipo de propiedad</span>
                <select
                  value={form.tipo}
                  onChange={(e) => set({ tipo: e.target.value })}
                >
                  <option value="">Selecciona…</option>
                  {tipos.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label>
              <span>Mensaje</span>
              <textarea
                rows={4}
                value={form.mensaje}
                onChange={(e) => set({ mensaje: e.target.value })}
                placeholder="Cuéntanos qué estás buscando…"
              />
            </label>

            {error && <p className="contact-form__error">{error}</p>}

            <button type="submit" className="btn btn-primary contact-form__submit">
              Enviar por WhatsApp
            </button>
          </form>

          <aside className="contact-info">
            <h3>Información de contacto</h3>
            <ul className="contact-info__list">
              <li>
                <span aria-hidden="true">💬</span>
                <div>
                  <strong>WhatsApp</strong>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +34 637 67 38 50
                  </a>
                </div>
              </li>
              <li>
                <span aria-hidden="true">📸</span>
                <div>
                  <strong>Instagram</strong>
                  <a
                    href="https://instagram.com/ddoorsdq"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @ddoorsdq
                  </a>
                </div>
              </li>
              <li>
                <span aria-hidden="true">📍</span>
                <div>
                  <strong>Ubicación</strong>
                  <span>Santo Domingo, República Dominicana</span>
                </div>
              </li>
            </ul>

            <div className="contact-info__map">
              <MapEmbed location="Santo Domingo, Distrito Nacional" zoom={12} />
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </>
  );
}
