import { useNavigate } from 'react-router-dom';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import { WHATSAPP_NUMBER, generalContactMessage } from '../utils/whatsapp';
import './FinalCTA.css';

export default function FinalCTA() {
  const navigate = useNavigate();
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    generalContactMessage()
  )}`;

  return (
    <section className="final-cta">
      <div className="final-cta__bg" aria-hidden="true" />
      <div className="final-cta__overlay" aria-hidden="true" />
      <div className="container final-cta__inner">
        <span className="final-cta__eyebrow">Demos el siguiente paso juntos</span>
        <RevealText tag="h2" className="final-cta__title" accentWords={['vender']}>
          ¿Buscas tu próximo hogar o quieres vender?
        </RevealText>
        <p className="final-cta__text">
          Sea cual sea tu objetivo, en DDoor tenemos la llave. Escríbenos y
          recibe asesoría personalizada hoy mismo.
        </p>
        <div className="final-cta__actions">
          <MagneticButton
            className="btn btn-gold"
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablar por WhatsApp
          </MagneticButton>
          <MagneticButton
            className="btn btn-ghost"
            onClick={() => navigate('/contacto')}
          >
            Completar formulario
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
