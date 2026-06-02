import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import AnimatedCounter from '../components/AnimatedCounter';
import Footer from '../components/Footer';
import { EASINGS } from '../utils/easings';
import './About.css';

const values = [
  { icon: '🔑', title: 'Confianza', text: 'Cada relación se construye sobre transparencia y honestidad total.' },
  { icon: '💎', title: 'Excelencia', text: 'Curamos solo propiedades que cumplen nuestros estándares de calidad.' },
  { icon: '❤️', title: 'Cercanía', text: 'Te tratamos como familia: tu sueño se vuelve nuestro compromiso.' },
  { icon: '🚀', title: 'Agilidad', text: 'Respuestas rápidas y procesos simples, sin trámites interminables.' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>Nosotros · DDoor Inmobiliaria</title>
        <meta
          name="description"
          content="Conoce a DDoor Inmobiliaria: nuestra historia, misión y los valores que nos hacen tu mejor aliado para comprar, vender o alquilar en RD."
        />
      </Helmet>

      <header className="about-hero">
        <div className="container">
          <span className="eyebrow">Sobre DDoor</span>
          <RevealText tag="h1" className="about-hero__title" accentWords={['sueños']}>
            Abrimos puertas hacia nuevos sueños
          </RevealText>
          <p className="about-hero__lead">
            Somos una inmobiliaria dominicana enfocada en una sola cosa: que
            encuentres el espacio perfecto para tu próxima etapa, con
            acompañamiento humano de principio a fin.
          </p>
        </div>
      </header>

      <section className="section about-story">
        <div className="container about-story__grid">
          <motion.div
            className="about-story__media"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: EASINGS.premium }}
          >
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1280"
              alt="Equipo DDoor Inmobiliaria"
              loading="lazy"
            />
          </motion.div>

          <div className="about-story__text">
            <span className="eyebrow">Nuestra historia</span>
            <h2 className="section-title">La llave detrás de cada hogar</h2>
            <p>
              DDoor nació de la convicción de que comprar o alquilar una
              propiedad no debería ser un proceso frío ni complicado. Desde
              Santo Domingo, hemos acompañado a cientos de familias e
              inversionistas a encontrar el lugar correcto en el momento
              correcto.
            </p>
            <p>
              Nuestro nombre lo dice todo: <strong>tenemos la llave</strong> que
              abre la puerta de tus sueños. Combinamos conocimiento profundo del
              mercado dominicano con un trato cercano y tecnología que hace todo
              más simple.
            </p>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container about-mission__grid">
          <div className="about-mission__item">
            <h3>Misión</h3>
            <p>
              Conectar a las personas con la propiedad ideal, ofreciendo
              asesoría honesta, propiedades verificadas y un acompañamiento que
              trasciende la transacción.
            </p>
          </div>
          <div className="about-mission__item">
            <h3>Visión</h3>
            <p>
              Ser la inmobiliaria de referencia en República Dominicana,
              reconocida por la confianza, la calidad de su portafolio y la
              experiencia que brinda a cada cliente.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt about-values">
        <div className="container">
          <div className="about-values__intro">
            <span className="eyebrow">Lo que nos mueve</span>
            <RevealText tag="h2" className="section-title">
              Nuestros valores
            </RevealText>
          </div>
          <div className="about-values__grid">
            {values.map((v) => (
              <div className="about-values__card" key={v.title}>
                <span className="about-values__icon" aria-hidden="true">
                  {v.icon}
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="container about-stats__grid">
          <div>
            <div className="about-stats__num">
              <AnimatedCounter target={320} suffix="+" />
            </div>
            <span>Propiedades gestionadas</span>
          </div>
          <div>
            <div className="about-stats__num">
              <AnimatedCounter target={480} suffix="+" />
            </div>
            <span>Clientes felices</span>
          </div>
          <div>
            <div className="about-stats__num">
              <AnimatedCounter target={12} />
            </div>
            <span>Años de experiencia</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
